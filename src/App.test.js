import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";

// axios v1 ships ESM, which CRA's Jest does not transform. These tests only
// render markup, so a stub client is enough.
jest.mock("axios", () => ({
  create: () => ({ post: jest.fn(), get: jest.fn() }),
}));

// eslint-disable-next-line import/first
import App from "./App";
// eslint-disable-next-line import/first
import content from "./data/content.json";
// eslint-disable-next-line import/first
import { solutions } from "./data/solutions";
// eslint-disable-next-line import/first
import { work } from "./data/work";
// eslint-disable-next-line import/first
import { ALL_TECH } from "./data/stack";

/**
 * Route smoke tests: mount the real app at each path and assert the page
 * actually rendered content. Guards against blank-screen regressions.
 */
function renderAt(path) {
  return withAppAt(path, (container) => container.textContent || "");
}

/**
 * Mounts at `path`, runs `inspect` while it is still mounted, then unmounts.
 * The metadata tests need this window: <Seo> restores the previous title and
 * strips the tags it added on unmount, so anything read afterwards is gone.
 */
function withAppAt(path, inspect) {
  window.history.pushState({}, "", path);
  const container = document.createElement("div");
  document.body.appendChild(container);
  act(() => {
    ReactDOM.render(<App />, container);
  });
  const result = inspect(container);
  act(() => {
    ReactDOM.unmountComponentAtNode(container);
  });
  container.remove();
  return result;
}

/**
 * Async twin of the two helpers above, for code-split routes. `act` in its
 * synchronous form returns while React.lazy is still suspended, so a sync
 * render of /technology sees the Suspense fallback and nothing else; the
 * async form flushes the dynamic import first.
 */
async function withAppAtAsync(path, inspect) {
  window.history.pushState({}, "", path);
  const container = document.createElement("div");
  document.body.appendChild(container);
  await act(async () => {
    ReactDOM.render(<App />, container);
  });
  const result = inspect(container);
  await act(async () => {
    ReactDOM.unmountComponentAtNode(container);
  });
  container.remove();
  return result;
}

const renderAtAsync = (path) => withAppAtAsync(path, (c) => c.textContent || "");

const STATIC_ROUTES = [
  ["/", "Software built around"],
  ["/solutions", "What We Build, by the Problem It Solves"],
  ["/work", "Built for Real Business"],
  ["/service", "Empowering Businesses with End-to-End Digital Solutions"],
  ["/industries", "We Understand the Business Behind the Software"],
  ["/about", "A team built around outcomes"],
  ["/contact", "Let's talk about your project"],
];

describe("routes render", () => {
  test.each(STATIC_ROUTES)("%s renders its heading", (path, expected) => {
    const text = renderAt(path);
    expect(text.length).toBeGreaterThan(400);
    expect(text).toContain(expected);
    // Footer is part of the shared layout, so it must appear everywhere.
    expect(text).toContain("Sahajanand Technologies LLC");
  });

  // Code-split, so it needs the async helper — and it is worth asserting the
  // ecosystem data actually reached the page, not just the hero copy.
  test("/technology renders its heading and the stack", async () => {
    const text = await renderAtAsync("/technology");
    expect(text.length).toBeGreaterThan(400);
    expect(text).toContain("One team across the modern software stack");
    expect(text).toContain("Sahajanand Technologies LLC");
    // One discipline shows at a time and it opens on the first, so its
    // badges are on the page with their notes; the others are reachable as
    // chips.
    ["Angular", "Tailwind CSS", "Large, long-lived internal applications."].forEach((s) =>
      expect(text).toContain(s)
    );
    ["AI & ML", "Testing", "DevOps"].forEach((chip) => expect(text).toContain(chip));
  });

  test("/technology?category= opens on that discipline", async () => {
    const text = await renderAtAsync("/technology?category=cloud");
    ["Kubernetes", "Microsoft Azure", "Cloud Architecture"].forEach((tech) =>
      expect(text).toContain(tech)
    );
    expect(text).not.toContain("Large, long-lived internal applications.");
  });

  test.each(solutions.map((s) => [s.slug, s.heroHead]))(
    "solution detail /solutions/%s renders",
    (slug, heroHead) => {
      expect(renderAt(`/solutions/${slug}`)).toContain(heroHead);
    }
  );

  test.each(work.map((w) => [w.slug, w.client]))(
    "case study /work/%s renders and never shows a placeholder as fact",
    (slug, client) => {
      const text = renderAt(`/work/${slug}`);
      expect(text).toContain(client);
      const item = work.find((w) => w.slug === slug);
      if (!item.approved) expect(text).toContain("Draft");
      // With no engagement facts on file the page must not claim any.
      if (!item.challenge) expect(text).not.toContain("The challenge");
      if (!item.solution) expect(text).not.toContain("The solution");
      if (!item.result) expect(text).not.toContain("The result");
    }
  );

  test.each(content.services.map((s) => [s.slug, s.name, s.heroHead]))(
    "service detail /service/%s renders",
    (slug, name, heroHead) => {
      const text = renderAt(`/service/${slug}`);
      expect(text).toContain(heroHead);
    }
  );

  test.each(content.industries.map((s) => [s.slug, s.heroHead]))(
    "industry detail /industries/%s renders",
    (slug, heroHead) => {
      const text = renderAt(`/industries/${slug}`);
      expect(text).toContain(heroHead);
    }
  );

  test.each(content.technologies.map((s) => [s.slug, s.heroHead]))(
    "technology detail /technology/%s renders",
    (slug, heroHead) => {
      const text = renderAt(`/technology/${slug}`);
      expect(text).toContain(heroHead);
    }
  );

  test("unknown route renders a 404 rather than silently redirecting home", () => {
    const text = renderAt("/does-not-exist");
    expect(text).toContain("We couldn't find that page");
    expect(text).toContain("/does-not-exist");
    // The old behaviour was a redirect to "/", which hid the broken link.
    expect(text).not.toContain("Software built around your business");
  });

  // stack.js decides which technology cards become links. A slug with no
  // matching entry in content.json would render a card that navigates to a
  // redirect, which is exactly the kind of thing nobody clicks while testing.
  test("every linked technology in the stack has a detail page", () => {
    const pages = new Set(content.technologies.map((t) => t.slug));
    const linked = ALL_TECH.filter((t) => t.slug).map((t) => t.slug);
    expect(linked.length).toBeGreaterThan(0);
    expect(linked.filter((slug) => !pages.has(slug))).toEqual([]);
  });

  test("the stack has no card without a name, note or artwork", () => {
    const broken = ALL_TECH.filter(
      (t) => !t.name || !t.note || !(t.icon || t.logo || t.mono || t.glyph)
    );
    expect(broken.map((t) => t.name)).toEqual([]);
  });

  test("unknown detail slug redirects to its listing", () => {
    expect(renderAt("/service/not-a-service")).toContain(
      "Empowering Businesses with End-to-End Digital Solutions"
    );
  });
});

describe("document metadata", () => {
  test.each([
    ["/", "Sahajanand Technologies LLC | Custom Business Software"],
    ["/solutions/workflow-automation", "Workflow Automation | STL"],
    ["/service", "Services | STL"],
    ["/contact", "Start a project | STL"],
    ["/technology/react", "React.js | STL"],
  ])("%s sets its own title", (path, expected) => {
    expect(withAppAt(path, () => document.title)).toContain(expected);
  });

  test("titles are distinct per route, not one inherited from index.html", async () => {
    const paths = ["/", "/solutions", "/work", "/service", "/industries", "/technology", "/about", "/contact"];
    // Sequential, not Promise.all: these mount into a shared document and
    // <Seo> restores the previous title on unmount.
    const titles = [];
    for (const path of paths) {
      titles.push(await withAppAtAsync(path, () => document.title));
    }
    expect(new Set(titles).size).toBe(titles.length);
  });

  test("each route gets its own canonical and description", () => {
    const meta = withAppAt("/industries", () => ({
      canonical: document.head.querySelector('link[rel="canonical"]')?.getAttribute("href"),
      description: document.head.querySelector('meta[name="description"]')?.getAttribute("content"),
    }));
    expect(meta.canonical).toContain("/industries");
    expect(meta.description).toContain("healthcare");
  });

  test("the home page publishes Organization structured data", () => {
    const schema = withAppAt("/", () =>
      JSON.parse(document.head.querySelector('script[data-seo="route"]').textContent)
    );
    const org = schema["@graph"].find((n) => n["@type"] === "Organization");
    expect(org.telephone).toBe("732-347-9171");
    expect(schema["@graph"].some((n) => n["@type"] === "FAQPage")).toBe(true);
  });

  test("approved case studies are indexable; unapproved ones are not", () => {
    work.forEach((w) => {
      const robots = withAppAt(`/work/${w.slug}`, () =>
        document.head.querySelector('meta[name="robots"]')?.getAttribute("content")
      );
      if (w.approved) expect(robots).toBeUndefined();
      else expect(robots).toBe("noindex, follow");
    });
  });

  test("only the 404 route asks not to be indexed", () => {
    const onHome = withAppAt("/", () => document.head.querySelector('meta[name="robots"]'));
    const on404 = withAppAt("/nope", () =>
      document.head.querySelector('meta[name="robots"]')?.getAttribute("content")
    );
    expect(onHome).toBeNull();
    expect(on404).toBe("noindex, follow");
  });

  test("metadata is torn down on unmount, so nothing leaks between routes", () => {
    withAppAt("/contact", () => document.title);
    expect(document.head.querySelectorAll('script[data-seo="route"]')).toHaveLength(0);
  });
});

describe("content integrity", () => {
  test("every entity has hero copy", () => {
    const all = [
      ...content.services,
      ...content.industries,
      ...content.technologies,
    ];
    expect(all).toHaveLength(29);
    all.forEach((x) => {
      expect(x.heroHead).toBeTruthy();
      expect(x.heroSub).toBeTruthy();
    });
  });

  /**
   * Several hero headings had been produced by pasting the slug into a generic
   * sentence: "Expert angular Development", "High-Performance healthcare
   * Solutions", and an E-Commerce page headlined "finance solutions". The H1 is
   * the most visible line on a detail page and now feeds the <title> and the
   * OG tags too, so this guards the whole class rather than the four instances.
   */
  test("hero headings name their subject properly, not the raw slug", () => {
    const all = [
      ...content.services,
      ...content.industries,
      ...content.technologies,
    ];
    all.forEach((x) => {
      expect(x.heroHead).not.toMatch(new RegExp(`\\b${x.slug.replace(/-/g, "[- ]")}\\b`));
      // Headlines are title case without terminal punctuation, like every
      // other page; sentences with a full stop belong in heroSub.
      expect(x.heroHead).not.toMatch(/\.$/);
    });
  });

  test("every case study names an approved client, in the agreed order", () => {
    expect(work.map((w) => w.client)).toEqual([
      "PrimeTime Leasing",
      "Trustpoint.One",
      "SaaSDealer LLC",
      "Varni Construction",
    ]);
    work.forEach((w) => {
      expect(w.approved).toBe(true);
      expect(w.business.length).toBeGreaterThan(40);
      expect(w.operations.length).toBeGreaterThanOrEqual(5);
      expect(w.website).toMatch(/^https:\/\//);
    });
  });

  test("each industry headline names its own sector", () => {
    const OTHERS = {
      "e-commerce": ["finance", "healthcare", "education", "banking"],
      healthcare: ["finance", "e-commerce", "education", "banking"],
      education: ["finance", "healthcare", "e-commerce"],
    };
    content.industries.forEach((ind) => {
      (OTHERS[ind.slug] || []).forEach((wrong) => {
        expect(ind.heroHead.toLowerCase()).not.toContain(wrong);
      });
    });
  });

  test("no placeholder text survived from the old template", () => {
    const blob = JSON.stringify(content).toLowerCase();
    expect(blob).not.toContain("lorem ipsum");
    expect(blob).not.toContain("rejoicehub");
  });
});
