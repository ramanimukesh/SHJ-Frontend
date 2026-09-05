// Solutions — what STL builds, framed by the business problem rather than the
// technology. This is the primary way the site is organised now: a business
// owner recognises "replace the spreadsheets" long before "Angular".
//
// Wording rule for this file: describe what a solution DOES and what it is
// typically made of. Nothing here says STL built a specific system for a
// specific client — that lives in work.js, and only from facts STL supplies.
//
// Shape mirrors content.json so DetailPage can render these without a fork:
// heroHead / heroSub / summary / why[] / workflow[].

export const solutions = [
  {
    slug: "business-management-systems",
    name: "Business Management Systems",
    short: "One application for the daily operations that currently live in five places.",
    icon: "system",
    heroHead: "One System for How the Business Actually Runs",
    heroSub:
      "A central application for orders, jobs, customers, inventory, scheduling and approvals — built around your process, not a vendor's idea of it.",
    summary:
      "Most businesses run on a mix of spreadsheets, email threads, a legacy tool and someone's memory. A business management system puts the records, the rules and the day-to-day work in one place, with roles and permissions so each person sees what they need and nothing they don't.",
    why: [
      { label: "One source of truth", text: "Customers, jobs, inventory and documents are recorded once and referenced everywhere, so two people stop keeping two versions." },
      { label: "Built around your process", text: "Statuses, approvals and hand-offs match the way your team already works — no retraining the business to fit the software." },
      { label: "Roles and permissions", text: "Office staff, field teams, managers and partners each get the screens and data appropriate to them." },
      { label: "Grows with you", text: "New locations, product lines or teams are configuration, not a rebuild." },
    ],
    workflow: [
      { title: "Map the operation", desc: "We walk through how work moves today — who touches it, where it stalls, what gets re-keyed." },
      { title: "Model the records", desc: "Customers, jobs, assets, documents and the relationships between them, agreed before any screen is designed." },
      { title: "Design the screens", desc: "Working prototypes of the daily views, reviewed with the people who will use them." },
      { title: "Build and migrate", desc: "Iterative delivery, with existing data imported and reconciled so day one is not a blank system." },
      { title: "Roll out and support", desc: "Staged go-live, training, and the adjustments that only surface once real work flows through." },
    ],
    fits: ["replace-spreadsheets", "new-application"],
  },
  {
    slug: "workflow-automation",
    name: "Workflow Automation",
    short: "Replace repetitive manual steps with reliable digital workflows.",
    icon: "automation",
    heroHead: "Replace Repetitive Manual Work With Reliable Workflows",
    heroSub:
      "Approvals, notifications, document generation, scheduling and follow-ups that run themselves — triggered by real events instead of someone remembering.",
    summary:
      "A lot of what slows an operation down is not hard work, it is the same easy work done by hand a hundred times a week. Automation takes the steps that follow a rule — route this, notify them, generate that, remind us — and makes them happen on their own, with a record of what ran.",
    why: [
      { label: "Fewer dropped balls", text: "Steps fire when the previous one completes, so nothing waits on an inbox." },
      { label: "Consistent every time", text: "The same rule applied the same way, whoever is on shift." },
      { label: "Visible, not hidden", text: "Every automated action is logged, so you can see what happened and why." },
      { label: "Starts small", text: "One painful process first. The rest follow once the pattern is proven." },
    ],
    workflow: [
      { title: "Pick the process", desc: "The one with the most repetition, the most hand-offs, or the most costly mistakes." },
      { title: "Write down the rules", desc: "Triggers, conditions, exceptions — including the ones people currently handle by judgment." },
      { title: "Automate the happy path", desc: "The standard case runs end to end; exceptions route to a person with the context attached." },
      { title: "Measure and extend", desc: "Time saved and errors avoided, then the next process." },
    ],
    fits: ["automate-workflow", "replace-spreadsheets"],
  },
  {
    slug: "reporting-dashboards",
    name: "Reporting & Dashboards",
    short: "Turn operational data into reports people actually use.",
    icon: "dashboard",
    heroHead: "Know What Is Happening Without Asking for a Report",
    heroSub:
      "Live dashboards and scheduled reports drawn from the systems you already run — so decisions rest on this morning's numbers, not last month's export.",
    summary:
      "The data is usually already there; it is just spread across a database, an accounting package and a folder of spreadsheets that someone reconciles by hand every Friday. Reporting and dashboards connect those sources and present the handful of figures each role needs, refreshed automatically.",
    why: [
      { label: "The right numbers per role", text: "An owner's view, a manager's view, a team view — each showing what that person acts on." },
      { label: "Current, not compiled", text: "Figures refresh from source systems, so nobody spends Friday building the deck." },
      { label: "Drill in when needed", text: "From a total to the transactions behind it, without a second request." },
      { label: "Scheduled delivery", text: "Weekly and monthly reports arrive on their own, in the format each recipient expects." },
    ],
    workflow: [
      { title: "Agree the questions", desc: "What decisions does each person make, and what would they need to see to make them faster?" },
      { title: "Connect the sources", desc: "Databases, SaaS tools, exports — brought together and cleaned once, centrally." },
      { title: "Design the views", desc: "Dashboards and report layouts reviewed against real data, not sample figures." },
      { title: "Automate delivery", desc: "Refresh schedules, alerts on thresholds, and reports sent where they are read." },
    ],
    fits: ["improve-reporting"],
  },
  {
    slug: "customer-employee-portals",
    name: "Customer & Employee Portals",
    short: "Secure self-service for customers, staff and partners.",
    icon: "portal",
    heroHead: "Give Customers and Teams Direct Access to What They Need",
    heroSub:
      "Secure web portals where customers check status and documents, staff submit and approve, and partners see their slice — without a phone call to the office.",
    summary:
      "A portal takes the questions that currently arrive by phone and email — where is my order, what is the balance, has this been approved — and answers them on demand. Customers and partners see their own records; employees get the tools for their role, from any device.",
    why: [
      { label: "Fewer status calls", text: "People find their own answers, and the office handles exceptions instead of lookups." },
      { label: "Secure by role", text: "Each user sees only their records and actions, with an audit trail behind it." },
      { label: "Works on any device", text: "Field staff and customers on phones get the same system as the office on a desktop." },
      { label: "Connected to the back office", text: "The portal reads and writes the same records your internal system uses — no double entry." },
    ],
    workflow: [
      { title: "Identify the audiences", desc: "Customers, employees, partners — and what each actually needs to do, not everything they could." },
      { title: "Design the journeys", desc: "Sign-in, the two or three tasks that matter, and the notifications around them." },
      { title: "Build on the core system", desc: "The portal is a window onto existing data, with its own permissions layer." },
      { title: "Launch and iterate", desc: "A first group of users, then adjustments from what they actually do." },
    ],
    fits: ["customer-portal"],
  },
  {
    slug: "integrations-apis",
    name: "Integrations & APIs",
    short: "Connect the systems the business already uses.",
    icon: "integration",
    heroHead: "Make the Systems You Already Have Talk to Each Other",
    heroSub:
      "Accounting, CRM, inventory, scheduling, payments, email — connected so a record entered once flows everywhere it is needed.",
    summary:
      "Businesses rarely have too few systems; they have too many that do not share data. Integration work builds the connections — APIs, scheduled syncs, webhooks — so a new customer in the CRM appears in accounting, a completed job updates inventory, and a payment closes the loop without anyone re-typing it.",
    why: [
      { label: "Enter it once", text: "Data moves between systems automatically, so the same record is not keyed three times." },
      { label: "Keep what works", text: "Integration connects existing tools rather than replacing ones your team already knows." },
      { label: "Reliable exchange", text: "Retries, validation and logging, so a failed sync is visible instead of silent." },
      { label: "Your own API", text: "Where partners or customers need programmatic access, a documented, secured interface to your data." },
    ],
    workflow: [
      { title: "Inventory the systems", desc: "What holds which data, what has an API, what only exports a file." },
      { title: "Define the flows", desc: "Which record moves where, in which direction, triggered by what." },
      { title: "Build and monitor", desc: "Connections with error handling and a dashboard showing what ran and what failed." },
      { title: "Document and hand over", desc: "So the next system added follows the same pattern." },
    ],
    fits: ["connect-systems"],
  },
  {
    slug: "custom-software",
    name: "Custom Software",
    short: "Built around the exact way a business operates.",
    icon: "custom",
    heroHead: "Software Built Around the Way Your Business Works",
    heroSub:
      "When off-the-shelf tools force workarounds, we design and build the application that fits — web, mobile or both — and stay to run it.",
    summary:
      "Off-the-shelf software fits the average business. If your process is your advantage — the way you quote, schedule, deliver or serve — a system that bends to it is worth more than one you bend to. Custom software is the full journey: understanding the operation, designing the application, building it, and supporting it in use.",
    why: [
      { label: "Fits the process, not the average", text: "Screens, rules and data modelled on how you work, including the exceptions." },
      { label: "Owned, not rented", text: "Your code, your data, your roadmap — no per-seat surprise at renewal." },
      { label: "Web and mobile", text: "The same system for the office, the field and the customer, on whatever device they hold." },
      { label: "Supported after launch", text: "Monitoring, fixes and the next round of improvements, by the team that built it." },
    ],
    workflow: [
      { title: "Discovery", desc: "The operation, the people, the systems in play and what success looks like — written down and agreed." },
      { title: "Design", desc: "Data model, architecture and working prototypes, reviewed with the people who will use them." },
      { title: "Build in stages", desc: "Usable increments every few weeks, so value arrives early and direction can adjust." },
      { title: "Launch", desc: "Migration, training and a controlled go-live." },
      { title: "Run and improve", desc: "Ongoing support, monitoring and the improvements that real use reveals." },
    ],
    fits: ["new-application", "other"],
  },
  {
    slug: "ai-automation",
    name: "AI & Intelligent Automation",
    short: "AI where it solves a practical business problem.",
    icon: "ai",
    heroHead: "AI Where It Makes Business Sense",
    heroSub:
      "Document processing, search across your own records, assistants for staff, and extraction from the forms and emails that currently need a person to read them.",
    summary:
      "The useful applications of AI in a business are unglamorous: reading a stack of invoices, finding the right clause in a contract, drafting the reply to a routine request, flagging the order that looks wrong. We apply it to those problems — inside your systems, on your data, with a person still in the loop where it matters.",
    why: [
      { label: "Practical, not decorative", text: "Each use case starts from a task that costs time today, not from the technology." },
      { label: "On your data", text: "Models work against your documents and records, with access controlled like any other system." },
      { label: "A person stays in the loop", text: "Suggestions and drafts for review where the decision matters; full automation only where it is safe." },
      { label: "Measured", text: "Time saved and accuracy tracked, so the value is visible and the model can be tuned." },
    ],
    workflow: [
      { title: "Find the candidates", desc: "Tasks that involve reading, classifying, extracting or drafting at volume." },
      { title: "Prove it on real samples", desc: "A small pilot against your actual documents before anything is built around it." },
      { title: "Integrate", desc: "Into the workflow where the task happens, with review steps and logging." },
      { title: "Monitor and tune", desc: "Accuracy, cost and edge cases tracked in production." },
    ],
    uses: [
      "Document processing",
      "Intelligent search",
      "Business assistants",
      "Workflow automation",
      "Data analysis",
      "Customer support",
      "Information extraction",
      "Internal productivity",
    ],
    fits: ["add-ai"],
  },
  {
    slug: "application-modernization",
    name: "Application Modernization",
    short: "Improve existing software without starting from zero.",
    icon: "modernize",
    heroHead: "Modernize What You Have Instead of Starting Over",
    heroSub:
      "Aging applications brought up to date — new interfaces, current platforms, cloud hosting, proper APIs — in stages that keep the business running throughout.",
    summary:
      "An older system that still does the job is an asset, not a problem — until it cannot be hosted, hired for, or connected to anything new. Modernization improves it in place: a new front end over the existing logic, a migration off an unsupported platform, an API where there was a nightly file, and the pieces that need rewriting, rewritten one at a time.",
    why: [
      { label: "No big-bang rewrite", text: "Improvements ship in stages; the business never waits a year for a replacement." },
      { label: "Keep the logic that works", text: "Years of business rules preserved and tested, not rediscovered." },
      { label: "Current platforms", text: "Supported frameworks, cloud hosting, and the security posture that comes with them." },
      { label: "Ready to connect", text: "APIs and clean data make the modernized system the foundation for what comes next." },
    ],
    workflow: [
      { title: "Assess", desc: "What the system does, what depends on it, what is at risk and what is worth keeping." },
      { title: "Plan the stages", desc: "Ordered by risk and value, each leaving the system working." },
      { title: "Modernize in place", desc: "Interface, platform, hosting, integration — one layer at a time, with tests around the business rules." },
      { title: "Stabilize", desc: "Monitoring and support as the modernized pieces take load." },
    ],
    fits: ["modernize-software"],
  },
];

export const bySlug = (slug) => solutions.find((s) => s.slug === slug);

/**
 * "Tell us what you're trying to improve" — the discovery chips. Each option
 * is also the Contact form's project-type value, so a chip on the home page
 * lands on a pre-filled form, and `solution` links it back to the page that
 * explains what we would build.
 */
export const DISCOVERY = [
  { value: "new-application", label: "Build a new application", solution: "custom-software" },
  { value: "replace-spreadsheets", label: "Replace spreadsheets or manual processes", solution: "business-management-systems" },
  { value: "automate-workflow", label: "Automate a workflow", solution: "workflow-automation" },
  { value: "connect-systems", label: "Connect existing systems", solution: "integrations-apis" },
  { value: "customer-portal", label: "Build a customer portal", solution: "customer-employee-portals" },
  { value: "improve-reporting", label: "Improve reporting", solution: "reporting-dashboards" },
  { value: "add-ai", label: "Add AI", solution: "ai-automation" },
  { value: "modernize-software", label: "Modernize existing software", solution: "application-modernization" },
  { value: "other", label: "Something else", solution: null },
];
