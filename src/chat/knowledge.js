// Searchable index over the same content.json the pages render, so the bot can
// never drift from the site. Nothing here is duplicated copy — every answer is
// assembled from the real records.

import content from "../data/content.json";
import { solutions } from "../data/solutions";

/** Route prefixes per kind. Note the site uses singular service/technology. */
const ROUTES = {
  solution: "/solutions",
  service: "/service",
  industry: "/industries",
  technology: "/technology",
};

const KIND_LABEL = {
  solution: "solution",
  service: "service",
  industry: "industry",
  technology: "technology",
};

/**
 * Hand-written aliases for the things people actually type. Keys are matched as
 * phrases against the whole message, so multi-word entries are safe: "react
 * native" is checked before "react" because matching runs longest-first.
 */
const ALIASES = {
  "business-management-systems": ["management system", "erp", "operations system", "spreadsheets", "spreadsheet", "central system", "back office"],
  "workflow-automation": ["automation", "automate", "workflow", "workflows", "manual process", "manual processes", "repetitive"],
  "reporting-dashboards": ["reporting", "reports", "dashboard", "dashboards", "kpi", "analytics", "insights"],
  "customer-employee-portals": ["portal", "portals", "customer portal", "self service", "self-service", "employee portal"],
  "integrations-apis": ["integration", "integrations", "integrate", "api", "apis", "connect systems", "sync"],
  "custom-software": ["custom software", "bespoke", "build an app", "new application", "web application", "web app"],
  "ai-automation": ["ai", "artificial intelligence", "llm", "machine learning", "chatbot", "document processing", "intelligent"],
  "application-modernization": ["modernize", "modernise", "legacy", "old system", "rewrite", "migration", "upgrade"],

  "real-estate-property-management": ["real estate", "property", "leasing", "furnished housing", "furniture rental", "tenant", "landlord"],
  construction: ["construction", "remodeling", "remodelling", "contractor", "builder", "renovation", "job site"],
  "professional-services": ["professional services", "consultancy", "consulting", "agency", "law firm", "accounting firm", "practice"],
  "small-mid-sized-businesses": ["small business", "smb", "sme", "mid-sized", "mid sized", "growing business"],

  "digital-product-design": ["ux", "ui", "design", "product design", "wireframe", "prototype", "figma design"],
  "software-architecture": ["architecture", "system design", "scalability", "microservices"],
  "engineering-devops": ["devops", "engineering", "ci/cd", "cicd", "pipeline", "infrastructure", "cloud", "deployment"],
  "mobile-app-development": ["mobile", "app", "ios", "android", "mobile app", "cross platform"],
  "staff-augmentation": ["staffing", "staff", "hire", "hiring", "developers", "contractor", "team extension", "augmentation"],

  healthcare: ["health", "medical", "hospital", "patient", "hipaa", "clinic"],
  finance: ["fintech", "financial", "banking", "payments", "trading", "insurance"],
  "e-commerce": ["ecommerce", "e commerce", "retail", "shop", "store", "cart", "marketplace"],
  education: ["edtech", "learning", "school", "university", "lms", "student"],
  "digital-banking": ["digital bank", "neobank", "online banking", "core banking"],

  react: ["react.js", "reactjs"],
  angular: ["angular.js", "angularjs"],
  typescript: ["ts"],
  nodejs: ["node", "node.js", "backend js"],
  java: ["spring", "jvm"],
  "react-native": ["react native", "rn"],
  flutter: ["dart"],
  aws: ["amazon web services", "amazon"],
  docker: ["container", "containers", "kubernetes", "k8s"],
  jenkins: ["ci server", "build server"],
  mongodb: ["mongo", "nosql"],
  mysql: ["sql", "relational database", "rdbms"],
  dynamodb: ["dynamo"],
  figma: ["design tool"],
  photoshop: ["ps", "image editing"],
};

/** Flattens the three content arrays into one uniform, searchable shape. */
function build() {
  const kinds = [
    ["solution", solutions],
    ["service", content.services],
    ["industry", content.industries],
    ["technology", content.technologies],
  ];

  const entries = [];

  for (const [kind, records] of kinds) {
    for (const record of records) {
      // Technologies carry no `summary` field — heroSub is their description;
      // solutions lead with their one-line `short`.
      const description = record.short || record.summary || record.heroSub || "";

      entries.push({
        kind,
        slug: record.slug,
        name: record.name,
        category: record.category || null,
        description,
        why: record.why || [],
        workflow: record.workflow || [],
        to: `${ROUTES[kind]}/${record.slug}`,
        phrases: buildPhrases(record),
      });
    }
  }

  return entries;
}

/**
 * Every string that should route a message to this record, lowercased and
 * de-duplicated. Sorted longest-first so "react native" beats "react".
 */
function buildPhrases(record) {
  const set = new Set();

  set.add(record.name.toLowerCase());
  set.add(record.slug.toLowerCase());
  // Slugs are the most natural spoken form once the hyphens are spaces.
  set.add(record.slug.replace(/-/g, " ").toLowerCase());

  for (const alias of ALIASES[record.slug] || []) {
    set.add(alias.toLowerCase());
  }

  return [...set].sort((a, b) => b.length - a.length);
}

export const entries = build();

export const byKind = (kind) => entries.filter((entry) => entry.kind === kind);

export const kindLabel = (kind) => KIND_LABEL[kind] || kind;

/**
 * Best matching entry for a message, or null. Phrase matching only — no fuzzy
 * scoring, because a confident wrong answer is worse here than a fallback that
 * offers the user real choices.
 */
export function findEntry(normalized) {
  let best = null;

  for (const entry of entries) {
    for (const phrase of entry.phrases) {
      if (!includesPhrase(normalized, phrase)) continue;

      // Longer match wins: "react native" over "react", "digital banking"
      // over "banking".
      if (!best || phrase.length > best.length) {
        best = { entry, length: phrase.length };
      }
      break;
    }
  }

  return best ? best.entry : null;
}

/** Substring match constrained to word boundaries, so "app" misses "happen". */
function includesPhrase(haystack, phrase) {
  let from = 0;

  for (;;) {
    const at = haystack.indexOf(phrase, from);
    if (at === -1) return false;

    const before = at === 0 ? " " : haystack[at - 1];
    const afterAt = at + phrase.length;
    const after = afterAt >= haystack.length ? " " : haystack[afterAt];

    if (!/[a-z0-9]/.test(before) && !/[a-z0-9]/.test(after)) return true;
    from = at + 1;
  }
}
