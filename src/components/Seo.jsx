import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { company } from "../data/site";

/**
 * Per-route document metadata.
 *
 * Every route previously inherited the one <title> and description baked into
 * public/index.html, so all 34 URLs — nine pages plus twenty-five detail pages —
 * looked identical to a search engine, a link preview, or a browser tab strip.
 * React 17 has no document-metadata support of its own and the project carries
 * no helmet dependency, so this writes the tags directly and cleans up after
 * itself when the route changes.
 *
 * Rendering nothing keeps it usable as a sibling anywhere in a page.
 */

const SITE_URL = process.env.REACT_APP_SITE_URL || "https://www.sahajanandtechnologies.com";
const DEFAULT_IMAGE = "/img/hero/intro-bg-1600.jpg";

/** Upsert a <meta> by name or property, and remember whether we created it. */
function setMeta(attr, key, value) {
  const selector = `meta[${attr}="${key}"]`;
  let node = document.head.querySelector(selector);
  const created = !node;

  if (!node) {
    node = document.createElement("meta");
    node.setAttribute(attr, key);
    document.head.appendChild(node);
  }

  const previous = node.getAttribute("content");
  node.setAttribute("content", value);

  return () => {
    if (created) node.remove();
    else if (previous !== null) node.setAttribute("content", previous);
  };
}

function setLink(rel, href) {
  let node = document.head.querySelector(`link[rel="${rel}"]`);
  const created = !node;

  if (!node) {
    node = document.createElement("link");
    node.setAttribute("rel", rel);
    document.head.appendChild(node);
  }

  const previous = node.getAttribute("href");
  node.setAttribute("href", href);

  return () => {
    if (created) node.remove();
    else if (previous !== null) node.setAttribute("href", previous);
  };
}

export default function Seo({ title, description, image, type = "website", schema, noindex = false }) {
  const { pathname } = useLocation();

  // Callers pass object literals, which are a fresh identity on every render.
  // Serialising first means the effect keys off the content, not the reference,
  // so a re-render does not tear the tags down and rebuild them.
  const schemaJson = schema ? JSON.stringify(schema) : null;

  useEffect(() => {
    // The home page owns the bare company name; everything else is suffixed, so
    // a tab strip or a SERP listing stays scannable at any width.
    const fullTitle =
      pathname === "/" ? title : `${title} | ${company.short} — ${company.name}`;
    const url = `${SITE_URL}${pathname}`;
    const ogImage = `${SITE_URL}${image || DEFAULT_IMAGE}`;

    const previousTitle = document.title;
    document.title = fullTitle;

    const undo = [
      setMeta("name", "description", description),
      setMeta("property", "og:title", fullTitle),
      setMeta("property", "og:description", description),
      setMeta("property", "og:type", type),
      setMeta("property", "og:url", url),
      setMeta("property", "og:image", ogImage),
      setMeta("name", "twitter:title", fullTitle),
      setMeta("name", "twitter:description", description),
      setMeta("name", "twitter:image", ogImage),
      setLink("canonical", url),
    ];

    // Only the 404 route sets this. Adding the tag unconditionally and toggling
    // its value would leave a `robots: all` on every page, which is noise.
    if (noindex) undo.push(setMeta("name", "robots", "noindex, follow"));

    // Structured data is a separate node per route rather than an upsert: the
    // shapes differ (Organization on home, Service/Article elsewhere) and
    // merging them into one script would produce nonsense.
    let script;
    if (schemaJson) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.seo = "route";
      script.textContent = schemaJson;
      document.head.appendChild(script);
    }

    return () => {
      document.title = previousTitle;
      undo.forEach((fn) => fn());
      if (script) script.remove();
    };
  }, [pathname, title, description, image, type, schemaJson, noindex]);

  return null;
}
