// Home-page narrative content. Ordered the way the page tells its story:
// problem → solution → capability → evidence → trust → contact.
//
// Everything here describes how STL works and what it can build. None of it
// asserts a specific past project — see work.js for that, and the rule there.

/** "Replace manual work with better systems" — the before/after pairs. */
export const TRANSFORMATION = [
  { before: "Spreadsheets", after: "A centralized application" },
  { before: "Email threads", after: "Automated workflows" },
  { before: "Manual data entry", after: "Data entered once, used everywhere" },
  { before: "Disconnected systems", after: "Connected systems" },
  { before: "Month-end reporting", after: "Real-time information" },
  { before: "Legacy software", after: "A modern platform" },
];

/** The problems a visitor recognises — each maps to the solution that fixes it. */
export const PROBLEMS = [
  {
    title: "The real process lives in spreadsheets",
    text: "Orders, jobs or inventory tracked in files that only one person understands, emailed around and reconciled by hand.",
    solution: "business-management-systems",
  },
  {
    title: "Two systems, one record, twice the typing",
    text: "The CRM, the accounting package and the scheduling tool each hold their own copy of the customer.",
    solution: "integrations-apis",
  },
  {
    title: "Reports take a day to build",
    text: "Someone exports, filters and formats every week, and the numbers are stale by the time they are read.",
    solution: "reporting-dashboards",
  },
  {
    title: "Customers call to ask where things are",
    text: "Status, documents and balances that a portal could answer at 9pm from a phone.",
    solution: "customer-employee-portals",
  },
  {
    title: "The old system still works, but nobody can change it",
    text: "Unsupported platform, one developer who knew it, no way to connect it to anything new.",
    solution: "application-modernization",
  },
  {
    title: "Staff read the same documents all day",
    text: "Invoices, forms, contracts and emails that need a person to extract the same five fields.",
    solution: "ai-automation",
  },
];

/** How we work — the engagement, end to end. */
export const PROCESS = [
  {
    title: "Understand the operation",
    text: "We start with the business, not the technology: who does what, where the work stalls, which systems are in play, and what a good outcome looks like in plain terms.",
  },
  {
    title: "Design the system",
    text: "The data, the screens and the architecture, as working prototypes you can react to, reviewed with the people who will use it every day.",
  },
  {
    title: "Build in stages",
    text: "Usable increments every few weeks. The first release solves the most painful part; direction adjusts as real work flows through.",
  },
  {
    title: "Run it with you",
    text: "Migration, training, a controlled go-live, then monitoring, support and the improvements that only appear in use.",
  },
];

/** Why STL — for a business owner and a technical manager in the same breath. */
export const WHY = [
  {
    title: "We understand the business first",
    text: "Every engagement begins with the operation, the workflow, the records, the exceptions, so the software fits the way you already work.",
  },
  {
    title: "Practical over fashionable",
    text: "Proven platforms, plain architectures and AI only where it earns its place. Nothing on your stack is there to impress a conference.",
  },
  {
    title: "Built to be maintained",
    text: "Documented, tested, on supported technology, with the access and knowledge handed over. You are never dependent on a single person.",
  },
  {
    title: "One team, start to finish",
    text: "Discovery, design, engineering, cloud and support from the same people. No hand-offs between vendors, no gap between what was promised and what shipped.",
  },
  {
    title: "Secure by default",
    text: "Roles and permissions, audit trails, encrypted data and controlled access are part of the design, not a later phase.",
  },
  {
    title: "Predictable delivery",
    text: "Staged releases with clear milestones. You see progress every few weeks, and you always know what happens next.",
  },
];

export const FAQ = [
  {
    q: "What kind of businesses do you work with?",
    a: "Operating businesses, the ones with orders, jobs, inventory, customers and staff to coordinate. Property and furnished-housing operators, construction and remodeling firms, professional services, and small and mid-sized companies across sectors. If your process is your advantage and the off-the-shelf tools do not fit it, that is usually the conversation.",
  },
  {
    q: "Do we need to replace the systems we already use?",
    a: "Usually not. A large part of our work is connecting existing systems, accounting, CRM, scheduling, and modernizing the ones worth keeping. Replacement is a last resort, and when it is the right call it happens in stages so the business keeps running.",
  },
  {
    q: "How long does a project take?",
    a: "A first usable release typically lands within weeks, not months, because we build in stages and ship the most painful part first. The full scope depends on what is being built; discovery gives you a plan with milestones before any commitment to build.",
  },
  {
    q: "How do you price work?",
    a: "Against a scoped plan from discovery, not a rate card. Fixed-price for well-defined stages, time-and-materials where scope is genuinely open, and a retainer for ongoing support. You will always know the cost of the next stage before it starts.",
  },
  {
    q: "Who owns the software and the data?",
    a: "You do. Source code, infrastructure accounts, credentials and documentation are yours, handed over in a form another team could pick up. We would rather be kept on because the work is good than because leaving is hard.",
  },
  {
    q: "Where does AI fit in?",
    a: "Where it removes a real cost: reading documents, extracting fields, searching your own records, drafting routine responses. We pilot it on your actual data before building around it, and a person stays in the loop wherever the decision matters.",
  },
  {
    q: "What happens after launch?",
    a: "Monitoring, support and a cadence of improvements, the things that only become obvious once real work is flowing through the system. Most clients stay on a support arrangement; none are required to.",
  },
];
