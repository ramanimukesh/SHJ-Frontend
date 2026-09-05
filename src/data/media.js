// Image manifest.
//
// Everything under /stl/ was pulled from the live sahajanandtechnologies.com
// build — these are your own assets, mapped to the section each was made for.
// /img/ holds the two general photographs kept from the original template.

import variants from "./imageVariants.json";

export const hero = "/img/intro-bg.jpg";

/** Responsive variants for the home hero — it is the LCP element on every
 *  first visit, so it ships at three widths rather than one 3500px original. */
export const heroSrcSet = [
  "/img/hero/intro-bg-800.jpg 800w",
  "/img/hero/intro-bg-1600.jpg 1600w",
  "/img/hero/intro-bg-2400.jpg 2400w",
].join(", ");
/**
 * Backs the About page hero (under an 85% navy scrim) and is its share image.
 * The template's /img/about.jpg used to sit here — a 550px black-and-white
 * studio shot of nobody in particular — and also stood in for a team photo on
 * the home page; that slot is now composed from the design system instead.
 * Point this at a real photograph of the team when one exists.
 */
export const aboutPhoto = "/stl/software.jpg";

/** Explicit slug → image mapping. Topical beats decorative. */
const BY_SLUG = {
  // Industries. The four business environments get photographs without
  // lettering: the hashed fallback had handed real-estate the "API" graphic,
  // whose caption read straight through the hero scrim.
  "real-estate-property-management": "/stl/Technology.jpg",
  construction: "/stl/software.jpg",
  "professional-services": "/stl/Service.jpg",
  "small-mid-sized-businesses": "/stl/digital.jpg",
  healthcare: "/stl/healthcare.webp",
  finance: "/stl/Finance.jpg",
  "e-commerce": "/stl/E-comm.jpg",
  education: "/stl/education.jpeg",
  "digital-banking": "/stl/Banking.webp",

  // Services
  "digital-product-design": "/stl/about-13.jpg",
  "software-architecture": "/stl/software.jpg",
  "engineering-devops": "/stl/devops.webp",
  "mobile-app-development": "/stl/Mobile-App.png",
  "staff-augmentation": "/stl/staff.jpg",

  // Technologies
  nodejs: "/stl/about-11.jpg",
  java: "/stl/API.jpeg",
  react: "/stl/digital.jpg",
  angular: "/stl/Technology.jpg",
  typescript: "/stl/Service.jpg",
  "react-native": "/stl/Mobile-App.png",
  flutter: "/stl/about-13.jpg",
  aws: "/stl/software.jpg",
  docker: "/stl/devops.webp",
  jenkins: "/stl/DevOps.jpg",
  mongodb: "/stl/API.jpeg",
  mysql: "/stl/software.jpg",
  dynamodb: "/stl/digital.jpg",
  figma: "/stl/UI.jpg",
  photoshop: "/stl/UI.jpg",
};

/** Fallbacks for anything not explicitly mapped. Only images with no words
 *  in them — captions in a background photograph read as broken layout. */
const POOL = [
  "/stl/digital.jpg",
  "/stl/software.jpg",
  "/stl/Technology.jpg",
  "/stl/Service.jpg",
];

/** Deterministic image per slug, so a card always shows the same picture. */
export function imageFor(slug) {
  // A missing slug used to throw on `slug.length`, taking the whole page with
  // it; a card with a fallback photo is a better failure than a blank route.
  if (!slug) return POOL[0];
  if (BY_SLUG[slug]) return BY_SLUG[slug];
  let hash = 0;
  for (let i = 0; i < slug.length; i += 1) {
    hash = (hash * 31 + slug.charCodeAt(i)) >>> 0;
  }
  return POOL[hash % POOL.length];
}

/**
 * srcset + intrinsic size for any image in the manifest.
 *
 * Card art was previously served at its full width — up to 1600px into a 290px
 * slot — so a phone paid for roughly ten times the pixels it could show.
 * scripts/gen-image-variants.sh writes the narrow copies and the manifest that
 * records which ones exist; anything unmapped just gets the original back, so
 * callers never have to branch.
 */
export function pictureFor(src) {
  // The home hero already had hand-cut variants before the manifest existed;
  // the listing pages reuse the same photograph, so they get them too rather
  // than each pulling the full-width original.
  if (src === hero) {
    return { src: "/img/hero/intro-bg-1600.jpg", srcSet: heroSrcSet, width: 2400, height: 1603 };
  }

  const entry = variants[src];
  if (!entry) return { src, srcSet: undefined, width: undefined, height: undefined };

  const candidates = entry.variants.map((w) => `/stl/rs/${entry.stem}-${w}.jpg ${w}w`);
  candidates.push(`${src} ${entry.w}w`);

  return { src, srcSet: candidates.join(", "), width: entry.w, height: entry.h };
}

/**
 * Leadership placeholders. Names are intentionally blank — supply real
 * people before this ships; the grid hides any entry without a name.
 */
export const leadership = [
  { photo: "/img/team/01.jpg", name: "", role: "Engineering leadership" },
  { photo: "/img/team/02.jpg", name: "", role: "Delivery & operations" },
  { photo: "/img/team/03.jpg", name: "", role: "Design practice" },
  { photo: "/img/team/04.jpg", name: "", role: "Cloud & platform" },
];
