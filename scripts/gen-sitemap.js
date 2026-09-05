#!/usr/bin/env node
/**
 * Writes public/sitemap.xml from the same content.json the router reads, so the
 * 34 URLs the site actually serves stay in step with the ones it advertises.
 *
 * There was no sitemap at all before, and robots.txt pointed at nothing — every
 * detail page had to be discovered by crawling, from a client-rendered app.
 *
 * Usage: node scripts/gen-sitemap.js [https://origin]
 */
const fs = require("fs");
const path = require("path");

const ORIGIN = (process.argv[2] || "https://www.sahajanandtechnologies.com").replace(/\/$/, "");
const root = path.join(__dirname, "..");
const content = JSON.parse(fs.readFileSync(path.join(root, "src/data/content.json"), "utf8"));
// solutions.js and work.js are ES modules; a slug regex is enough here and
// avoids a build step just to read two arrays.
const slugsIn = (file) => [...fs.readFileSync(path.join(root, file), "utf8").matchAll(/^\s{4}slug: "([a-z0-9-]+)"/gm)].map((m) => m[1]);
const solutionSlugs = slugsIn("src/data/solutions.js");
// Case studies are noindex until the client approves being named, so they
// enter the sitemap only once `approved: true`.
const workSlugs = [...fs.readFileSync(path.join(root, "src/data/work.js"), "utf8").matchAll(/slug: "([a-z0-9-]+)"[\s\S]*?approved: (true|false)/g)].filter((m) => m[2] === "true").map((m) => m[1]);

// priority is a hint, not a ranking: listings above details, home above both.
const urls = [
  { loc: "/", priority: "1.0", changefreq: "weekly" },
  { loc: "/solutions", priority: "0.9", changefreq: "monthly" },
  { loc: "/service", priority: "0.9", changefreq: "monthly" },
  { loc: "/work", priority: "0.8", changefreq: "monthly" },
  { loc: "/industries", priority: "0.9", changefreq: "monthly" },
  { loc: "/technology", priority: "0.9", changefreq: "monthly" },
  { loc: "/about", priority: "0.7", changefreq: "yearly" },
  { loc: "/contact", priority: "0.8", changefreq: "yearly" },
  ...solutionSlugs.map((slug) => ({ loc: `/solutions/${slug}`, priority: "0.8", changefreq: "monthly" })),
  ...workSlugs.map((slug) => ({ loc: `/work/${slug}`, priority: "0.7", changefreq: "monthly" })),
  ...content.services.map((s) => ({ loc: `/service/${s.slug}`, priority: "0.7", changefreq: "monthly" })),
  ...content.industries.map((s) => ({ loc: `/industries/${s.slug}`, priority: "0.7", changefreq: "monthly" })),
  ...content.technologies.map((s) => ({ loc: `/technology/${s.slug}`, priority: "0.6", changefreq: "monthly" })),
];

const today = new Date().toISOString().slice(0, 10);
const body = urls
  .map(
    ({ loc, priority, changefreq }) =>
      `  <url>\n    <loc>${ORIGIN}${loc}</loc>\n    <lastmod>${today}</lastmod>\n` +
      `    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`
  )
  .join("\n");

fs.writeFileSync(
  path.join(root, "public/sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`
);

console.log(`Wrote public/sitemap.xml with ${urls.length} URLs (origin ${ORIGIN})`);
