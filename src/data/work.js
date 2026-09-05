// Case studies — "Built for Real Business".
//
// Two different facts live in each record, and the UI treats them separately:
//
//   approved   — the client has agreed to be named. Approved on 2026-09-03 for
//                all four. Controls indexing and whether the page carries a
//                draft banner.
//   challenge / solution / result / technology
//              — what STL actually did. These are filled ONLY from facts STL
//                supplies; nothing here is inferred from the client's website.
//                Until then they are null and the page shows, instead, the
//                kinds of system STL builds for that industry — which is true
//                without claiming any of them shipped for this client.
//
// `business` and `operations` are drawn from each company's own public site
// and are safe to state.

export const work = [
  {
    slug: "primetime-leasing",
    client: "PrimeTime Leasing",
    website: "https://primetimeleasing.com/",
    industry: "real-estate-property-management",
    industryLabel: "Furniture rental & furnished housing",
    approved: true,

    business:
      "PrimeTime Leasing provides temporary furniture rental and furnished-housing packages — furniture, housewares, appliances and electronics — with delivery, setup and pickup. Customers are people relocating for work and the corporate-housing and relocation firms that place them. The company operates in seven metros including Atlanta, Charlotte, Raleigh, Tampa and Washington DC, from a headquarters in Duluth, Georgia.",

    operations: [
      "Inventory across multiple warehouses and metros",
      "Delivery, setup and pickup scheduling",
      "Lease terms, renewals and end-of-lease returns",
      "B2B partner accounts alongside individual customers",
      "Quotes, orders and invoicing",
      "Reporting across locations",
    ],

    // Confirmed by STL, 2026-09-03.
    headline: "A scanning service, built from scratch to launch",
    challenge: null,
    solution:
      "STL designed and built PrimeTime Leasing's scanning service from scratch — the whole delivery, end to end. One team took it from the first conversation through design, build and launch, and stayed to run it: no hand-off between a design shop, a development vendor and a support desk.",
    result: null,
    technology: [],
  },
  {
    slug: "trustpoint-one",
    client: "Trustpoint.One",
    website: "https://trustpoint.one/",
    industry: "professional-services",
    industryLabel: "Legal services & eDiscovery",
    approved: true,

    business:
      "Trustpoint.One is a legal-services firm serving corporate legal departments, government agencies and law firms: eDiscovery, managed document review at scale, data mining after cyber incidents, legal talent placement and embedded legal consulting. Based in Sandy Springs, Georgia, it operates under ISO 27001, SOC 2 Type II and HIPAA — an environment where every document, reviewer and access decision has to be accounted for.",

    operations: [
      "Matter intake and scoping per client",
      "Large-volume document collection, processing and review",
      "Reviewer teams staffed and tracked per project",
      "Chain of custody, access control and audit trails",
      "Compliance evidence for ISO 27001, SOC 2 and HIPAA",
      "Project status and cost reporting to clients",
    ],

    challenge: null,
    solution: null,
    result: null,
    technology: [],
  },
  {
    slug: "saasdealer",
    client: "SaaSDealer LLC",
    website: "https://saasdealer.com/",
    industry: "small-mid-sized-businesses",
    industryLabel: "Software marketplace & pricing index",
    approved: true,

    business:
      "SaaSDealer runs an independent index of business software: a searchable catalog of more than two hundred SaaS products across two dozen categories, each with pricing read directly from the vendor's own page and dated, free plans and trials flagged, and a single honest sentence of description. Vendors list for free, affiliate links are disclosed, and prices the team could not verify are marked as such — a data operation as much as a directory.",

    operations: [
      "Product catalog across categories, with vendor-submitted listings",
      "Pricing captured from vendor pages, dated, and re-checked",
      "Free-plan and trial tracking",
      "Vendor onboarding and listing review",
      "Affiliate links and disclosure",
      "Newsletter and partner programme",
    ],

    challenge: null,
    solution: null,
    result: null,
    technology: [],
  },
  {
    slug: "varni-construction",
    client: "Varni Construction",
    website: "https://varniconstruction.com/",
    industry: "construction",
    industryLabel: "Home remodeling",
    approved: true,

    business: "Varni Construction is a home remodeling company serving the Metro Atlanta area.",

    operations: [
      "Estimates and quotes per project",
      "Project scheduling and milestones",
      "Subcontractor and crew coordination",
      "Site photos, plans and documents",
      "Change orders and approvals",
      "Job costing and progress reporting",
    ],

    // Confirmed by STL, 2026-09-03.
    headline: "Built from the ground up, end to end",
    challenge: null,
    solution:
      "STL built Varni Construction's system from scratch, end to end — discovery, design, build, launch and support from one team. The business dealt with a single partner from the first conversation to go-live, and the same people who designed it are the ones who run it.",
    result: null,
    technology: [],
  },
];

export const bySlug = (slug) => work.find((w) => w.slug === slug);

/** True once STL has supplied the engagement facts for a record. */
export const hasDetails = (w) => Boolean(w.challenge || w.solution || w.result);
