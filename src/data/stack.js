/**
 * The technology ecosystem rendered on /technology.
 *
 * Shape: an ordered list of categories, each with an id used by the filter
 * (and by the ?category= query string), a full label for headings, a short
 * label for the filter chips, a glyph key for its icon (CategoryIcon in
 * TechIcon.jsx), a one-line statement of what the group is *for* — the filter
 * is not much use if a visitor cannot tell "Cloud" from "DevOps" — and its
 * technologies.
 *
 * Per technology:
 *   name   what the card is labelled
 *   icon   key into src/data/techIcons.js — a real brand mark, rendered in its
 *          brand colour
 *   logo   file under public/img/tech/ — for marks simple-icons no longer
 *          ships (see scripts/gen-tech-icons.js). Needs `color` alongside it,
 *          because the file carries its own colours and the card cannot read
 *          them back out. `wide: true` for a wordmark (AWS, Oracle), which is
 *          drawn larger so it does not shrink to a sliver in a square tile
 *   glyph  drawn glyph, for capabilities that have no logo at all (CI/CD, ETL,
 *          Computer Vision …) — one of the keys in TechIcon.jsx
 *   color  brand colour to tint the card with; derived from `icon` where one
 *          exists, so only `logo` and `glyph` entries need to set it
 *   note   short "what we use it for". Shown on the card; keep it to one line
 *   slug   set only where /technology/<slug> actually exists, so the card
 *          links somewhere real instead of promising a page that 404s
 *
 * A technology may legitimately appear in more than one category — Python is a
 * backend language, an ML language and a data language, and a visitor filtering
 * to any one of those expects to see it. Cards are keyed on category + name.
 */

export const CATEGORIES = [
  {
    id: "frontend",
    label: "Frontend",
    short: "Frontend",
    glyph: "layout",
    blurb: "The interface people actually operate — built to stay fast and legible with real data in it.",
    items: [
      { name: "Angular", icon: "angular", slug: "angular", note: "Large, long-lived internal applications." },
      { name: "React", icon: "react", slug: "react", note: "Our default for interactive product UI." },
      { name: "Next.js", icon: "nextjs", note: "Server rendering where SEO or first paint matters." },
      { name: "Vue.js", icon: "vue", note: "Lightweight front ends and embedded widgets." },
      { name: "Nuxt.js", icon: "nuxt", note: "Server-rendered Vue applications." },
      { name: "TypeScript", icon: "typescript", slug: "typescript", note: "Types across the whole front end, not just the edges." },
      { name: "JavaScript", icon: "javascript", note: "The language underneath all of it." },
      { name: "HTML5", icon: "html5", note: "Semantic markup — the accessibility baseline." },
      { name: "CSS3", icon: "css3", note: "Layout and motion without a framework tax." },
      { name: "Tailwind CSS", icon: "tailwind", note: "A design system expressed as constraints." },
      { name: "Bootstrap", icon: "bootstrap", note: "Fast, familiar UI for internal tools." },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    short: "Backend",
    glyph: "server",
    blurb: "The rules, records and integrations behind the screen — where the business logic actually lives.",
    items: [
      { name: "Java", icon: "java", slug: "java", note: "Enterprise services built to run for a decade." },
      { name: "Spring Boot", icon: "springboot", note: "Java services with the plumbing already solved." },
      { name: "Python", icon: "python", note: "Services, automation and data work in one language." },
      { name: "Django", icon: "django", note: "Admin-heavy applications, quickly." },
      { name: "FastAPI", icon: "fastapi", note: "Typed, documented APIs with little ceremony." },
      { name: "Node.js", icon: "nodejs", slug: "nodejs", note: "One language across client and server." },
      { name: "Express.js", icon: "express", note: "Small, explicit HTTP services." },
      { name: ".NET", icon: "dotnet", note: "For estates already standardised on Microsoft." },
      { name: "C#", logo: "csharp.svg", color: "#68217A", note: "The language behind our .NET work." },
      { name: "PHP", icon: "php", note: "Maintaining and modernising what you already run." },
      { name: "Laravel", icon: "laravel", note: "Structured PHP applications." },
      { name: "REST API", glyph: "plug", color: "#1a5aa6", note: "The default contract between your systems." },
      { name: "GraphQL", icon: "graphql", note: "One endpoint when clients need different shapes." },
    ],
  },
  {
    id: "mobile",
    label: "Mobile",
    short: "Mobile",
    glyph: "phone",
    blurb: "Field, floor and on-the-road apps — including the ones that have to work with no signal.",
    items: [
      { name: "Android", icon: "android", note: "Native Android where the hardware matters." },
      { name: "Kotlin", icon: "kotlin", note: "The modern language for native Android." },
      { name: "iOS", icon: "ios", note: "Native iPhone and iPad applications." },
      { name: "Swift", icon: "swift", note: "The modern language for native iOS." },
      { name: "React Native", icon: "reactnative", slug: "react-native", note: "One codebase, both stores, shared with the web." },
      { name: "Flutter", icon: "flutter", slug: "flutter", note: "Cross-platform apps with a single design language." },
    ],
  },
  {
    id: "ai",
    label: "AI & Machine Learning",
    short: "AI & ML",
    glyph: "spark",
    blurb: "Applied where a person reads, sorts, extracts or drafts the same thing all day — not for novelty.",
    items: [
      { name: "Python", icon: "python", note: "The working language of everything in this column." },
      { name: "TensorFlow", icon: "tensorflow", note: "Production model training and serving." },
      { name: "PyTorch", icon: "pytorch", note: "Research-grade modelling and fine-tuning." },
      { name: "OpenAI", glyph: "model", color: "#10A37F", note: "Hosted models where hosting our own earns nothing." },
      { name: "LangChain", icon: "langchain", note: "Orchestrating models, tools and retrieval." },
      { name: "Hugging Face", icon: "huggingface", note: "Open models, fine-tuned on your data." },
      { name: "Generative AI", glyph: "sparkles", color: "#7c3aed", note: "Drafting and summarising inside your systems." },
      { name: "Large Language Models", glyph: "chat", color: "#0a90a6", note: "Retrieval over your own documents, not the open web." },
      { name: "Machine Learning", glyph: "trend", color: "#2f75c2", note: "Forecasting and classification on your history." },
      { name: "Deep Learning", glyph: "brain", color: "#db2777", note: "Where the pattern is too subtle for rules." },
      { name: "NLP", glyph: "text", color: "#0c7385", note: "Reading unstructured text — email, notes, contracts." },
      { name: "Computer Vision", glyph: "eye", color: "#4f46e5", note: "Reading documents, photos and site imagery." },
      { name: "AI Agents", glyph: "agent", color: "#059669", note: "Multi-step tasks with a person on the approval." },
      { name: "AI Automation", glyph: "loop", color: "#dc6803", note: "Removing the repetitive read-and-retype work." },
    ],
  },
  {
    id: "database",
    label: "Databases",
    short: "Database",
    glyph: "database",
    blurb: "Where the record of the business lives — chosen for how it will be queried, backed up and grown.",
    items: [
      { name: "Microsoft SQL Server", logo: "sqlserver.svg", color: "#CC2927", note: "The estate standard in a lot of established businesses." },
      { name: "PostgreSQL", icon: "postgresql", note: "Our default relational database." },
      { name: "MySQL", icon: "mysql", slug: "mysql", note: "Widely hosted, widely understood." },
      { name: "Oracle", logo: "oracle.svg", wide: true, color: "#EA1B22", note: "Integrating with what enterprise finance already runs." },
      { name: "MongoDB", icon: "mongodb", slug: "mongodb", note: "Documents whose shape genuinely varies." },
      { name: "Redis", icon: "redis", note: "Caching, queues and sessions." },
      { name: "Firebase", icon: "firebase", note: "Realtime sync for mobile-first products." },
      { name: "SQLite", icon: "sqlite", note: "On-device storage for offline-capable apps." },
      { name: "DynamoDB", logo: "dynamodb.svg", color: "#4053D6", slug: "dynamodb", note: "Predictable latency at high write volume." },
    ],
  },
  {
    id: "cloud",
    label: "Cloud",
    short: "Cloud",
    glyph: "cloud",
    blurb: "Hosting you can hand to another team — sized to the load, documented, and yours to own.",
    items: [
      { name: "Microsoft Azure", logo: "azure.svg", color: "#0078D4", note: "Where the business already runs Microsoft 365." },
      { name: "AWS", logo: "aws.svg", wide: true, color: "#FF9900", slug: "aws", note: "The broadest option, and our most common one." },
      { name: "Google Cloud", icon: "googlecloud", note: "Strong fit for data and ML workloads." },
      { name: "Docker", icon: "docker", slug: "docker", note: "The same environment on every machine." },
      { name: "Kubernetes", icon: "kubernetes", note: "When the service count outgrows a single host." },
      { name: "Serverless", glyph: "bolt", color: "#dc6803", note: "Pay-per-run for spiky or scheduled work." },
      { name: "Cloud Architecture", glyph: "topology", color: "#1a5aa6", note: "Sizing, networking and cost before anything is built." },
    ],
  },
  {
    id: "devops",
    label: "DevOps",
    short: "DevOps",
    glyph: "infinity",
    blurb: "How the work reaches production — repeatably, and without a person remembering the steps.",
    items: [
      { name: "Git", icon: "git", note: "Version control on everything we hand over." },
      { name: "GitHub", icon: "github", note: "Review, history and automation in one place." },
      { name: "GitLab", icon: "gitlab", note: "For teams that self-host their source." },
      { name: "Azure DevOps", logo: "azuredevops.svg", color: "#0078D7", note: "Boards, repos and pipelines for Microsoft estates." },
      { name: "Jenkins", icon: "jenkins", slug: "jenkins", note: "Established pipelines we inherit and maintain." },
      { name: "GitHub Actions", icon: "githubactions", note: "Build, test and deploy on every push." },
      { name: "Terraform", icon: "terraform", note: "Infrastructure as reviewable code." },
      { name: "CI/CD", glyph: "pipeline", color: "#0a90a6", note: "A release is a routine event, not an evening." },
    ],
  },
  {
    id: "testing",
    label: "QA & Testing",
    short: "Testing",
    glyph: "shield",
    blurb: "Evidence that it still works — before your users are the ones who find out it doesn't.",
    items: [
      { name: "Selenium", icon: "selenium", note: "Browser automation across legacy estates." },
      { name: "Cypress", icon: "cypress", note: "Fast end-to-end tests for web applications." },
      { name: "Playwright", logo: "playwright.svg", color: "#2EAD33", note: "Cross-browser end-to-end, including mobile viewports." },
      { name: "JUnit", icon: "junit", note: "Unit and integration tests for Java services." },
      { name: "PyTest", icon: "pytest", note: "Unit and integration tests for Python services." },
      { name: "Jest", icon: "jest", note: "Unit tests for JavaScript and TypeScript." },
      { name: "Postman", icon: "postman", note: "API contracts checked and shared with your team." },
      { name: "JMeter", icon: "jmeter", note: "Load testing before the busy season, not during." },
      { name: "Appium", icon: "appium", note: "Automated testing on real mobile devices." },
    ],
  },
  {
    id: "cms",
    label: "CMS & E-Commerce",
    short: "CMS",
    glyph: "storefront",
    blurb: "Sites and storefronts your own team can edit without booking developer time.",
    items: [
      { name: "WordPress", icon: "wordpress", note: "Marketing sites your team can run themselves." },
      { name: "Shopify", icon: "shopify", note: "Storefronts with the payments problem already solved." },
      { name: "WooCommerce", icon: "woocommerce", note: "Commerce inside an existing WordPress site." },
      { name: "Magento", logo: "magento.svg", color: "#F26322", note: "Larger catalogues with complex pricing." },
      { name: "Drupal", icon: "drupal", note: "Structured content and strict editorial roles." },
      { name: "Custom CMS", glyph: "layers", color: "#1a5aa6", note: "When the content model is genuinely yours." },
      { name: "Headless CMS", glyph: "branch", color: "#7c3aed", note: "One content source, several front ends." },
    ],
  },
  {
    id: "data",
    label: "Data & Analytics",
    short: "Data",
    glyph: "chart",
    blurb: "Turning what the business already records into something a manager can act on this morning.",
    items: [
      { name: "Python", icon: "python", note: "The glue for every pipeline below." },
      { name: "Pandas", icon: "pandas", note: "Reshaping and reconciling operational data." },
      { name: "NumPy", icon: "numpy", note: "The numerical layer underneath the analysis." },
      { name: "Jupyter", icon: "jupyter", note: "Analysis your team can read, rerun and question." },
      { name: "Power BI", glyph: "bars", color: "#E3B505", note: "Dashboards in the tool your team already opens." },
      { name: "Data Analytics", glyph: "chart", color: "#2f75c2", note: "Answering the question behind the report request." },
      { name: "Data Visualization", glyph: "donut", color: "#db2777", note: "Charts built to be decided on, not admired." },
      { name: "ETL", glyph: "pipeline", color: "#0a90a6", note: "Moving data between systems on a schedule." },
      { name: "Business Intelligence", glyph: "dashboard", color: "#4f46e5", note: "One set of numbers the whole company trusts." },
    ],
  },
  {
    id: "design",
    label: "Design",
    short: "Design",
    glyph: "pen",
    blurb: "Where the interface is decided — before it becomes expensive to change.",
    items: [
      { name: "Figma", icon: "figma", slug: "figma", note: "Design, prototype and hand-off in one file." },
      { name: "Adobe XD", logo: "adobexd.svg", color: "#FF61F6", note: "Prototypes for teams already standardised on Adobe." },
      { name: "Photoshop", logo: "photoshop.svg", color: "#31A8FF", slug: "photoshop", note: "Production artwork and imagery." },
    ],
  },
];

/** Flat list, used for the "All" view's count and for search. */
export const ALL_TECH = CATEGORIES.flatMap((c) =>
  c.items.map((t) => ({ ...t, category: c.id, categoryLabel: c.label }))
);

export const TECH_COUNT = ALL_TECH.length;

/** Distinct technologies — Python et al. appear in more than one category. */
export const UNIQUE_TECH_COUNT = new Set(ALL_TECH.map((t) => t.name)).size;

/**
 * Named products with a real mark, for the hero strip. Capability entries
 * (CI/CD, NLP …) are left out: a drawn glyph scrolling past among brand logos
 * reads as a logo we could not find.
 */
export const SHOWCASE = ALL_TECH.filter(
  (t, i, arr) => (t.icon || t.logo) && arr.findIndex((o) => o.name === t.name) === i
);
