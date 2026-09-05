// The single seam between the chat UI and wherever answers come from.
//
// Today: matchLocal() resolves everything from src/data/content.json, so the
// widget ships with no key, no server and no deploy dependency.
//
// Later: set REACT_APP_CHAT_API_URL to a server-side proxy and askRemote()
// takes over. The UI never changes — it only ever awaits respond().
//
// An Anthropic API key must never reach the browser, which is why the remote
// path points at your own endpoint rather than the Anthropic API directly.

import { company } from "../data/site";
import { byKind, findEntry, kindLabel } from "./knowledge";

const API_URL = process.env.REACT_APP_CHAT_API_URL || "";

/** A reply the UI can render: prose, optional deep links, optional next steps. */
const reply = (text, { links = [], chips = [] } = {}) => ({ text, links, chips });

const CONTACT_LINK = { label: "Open the contact form", to: "/contact" };

/** Chips shown on open and whenever we genuinely don't know. */
export const OPENING_CHIPS = [
  "What do you build?",
  "Which industries do you work in?",
  "What services do you offer?",
  "I'd like to talk to someone",
];

export const GREETING = reply(
  `Hi — I'm the ${company.short} assistant. I can walk you through what we build, the industries we work in, our services, or the technologies behind them. What are you trying to improve?`,
  { chips: OPENING_CHIPS }
);

export async function respond(messages) {
  const last = messages[messages.length - 1];
  if (!last || last.role !== "user") return null;

  if (API_URL) {
    try {
      return await askRemote(messages);
    } catch (err) {
      // A dead endpoint should degrade to the local brain, not to a dead widget.
      if (process.env.NODE_ENV !== "production") {
        console.warn("[chat] remote brain failed, falling back to local", err);
      }
    }
  }

  return matchLocal(last.text);
}

/**
 * Server-side proxy call. The endpoint is expected to hold the API key, ground
 * the model in this same content, and return { text, links?, chips? }.
 */
async function askRemote(messages) {
  const res = await fetch(`${API_URL}/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      messages: messages.map(({ role, text }) => ({ role, text })),
    }),
  });

  if (!res.ok) throw new Error(`chat endpoint returned ${res.status}`);

  const data = await res.json();
  return reply(data.text, { links: data.links, chips: data.chips });
}

// ---------------------------------------------------------------------------
// Local brain
// ---------------------------------------------------------------------------

const has = (text, ...words) => words.some((word) => text.includes(word));

function matchLocal(raw) {
  const text = normalize(raw);

  // Ordered by how badly a miss would read. Handoff first: someone asking for
  // a human should never be handed a product blurb instead.
  return (
    handoff(text) ||
    pricing(text) ||
    listing(text) ||
    entity(text) ||
    smalltalk(text) ||
    fallback()
  );
}

function normalize(raw) {
  return ` ${raw.toLowerCase().replace(/[^a-z0-9+#./\s-]/g, " ").replace(/\s+/g, " ").trim()} `;
}

function handoff(text) {
  if (!has(text, "talk to", "speak to", "human", "someone", "sales", "contact", "call you", "reach you", "phone", "email you", "get in touch", "hire you", "work with you", "get started", "start a project"))
    return null;

  return reply(
    `Happy to connect you. The fastest route is the contact form — it reaches the team directly. You can also call ${company.phone} or email ${company.email}.`,
    { links: [CONTACT_LINK] }
  );
}

function pricing(text) {
  if (!has(text, "price", "pricing", "cost", "how much", "quote", "budget", "rate", "estimate")) return null;

  // There is no pricing on the site, so saying a number would be inventing one.
  return reply(
    "We don't publish fixed pricing — engagements are scoped to the work, and it changes a lot between a design sprint, a full build, and staff augmentation. Tell the team your scope and timeline and they'll come back with an estimate.",
    { links: [CONTACT_LINK], chips: ["What services do you offer?", "I'd like to talk to someone"] }
  );
}

function listing(text) {
  const asksToList = has(text, "what", "which", "list", "show", "tell me about", "do you", "kind of", "types of", "all");
  if (!asksToList) return null;

  if (has(text, "build", "solution", "solutions", "problem", "problems", "help with")) return listKind("solution", "kinds of system we build");
  if (has(text, "service", "services", "offer", "do you do")) return listKind("service", "services we offer");
  if (has(text, "industry", "industries", "sector", "vertical")) return listKind("industry", "industries we work in");
  if (has(text, "technology", "technologies", "tech", "stack", "tools", "languages", "framework")) return listKind("technology", "technologies we build on");

  return null;
}

function listKind(kind, phrase) {
  const items = byKind(kind);

  return reply(
    `Here are the ${phrase}. Ask about any one of them and I'll go deeper.`,
    {
      links: items.map((item) => ({ label: item.name, to: item.to })),
      chips: items.slice(0, 4).map((item) => `Tell me about ${item.name}`),
    }
  );
}

function entity(text) {
  const found = findEntry(text);
  if (!found) return null;

  const label = kindLabel(found.kind);
  const lead = found.category
    ? `${found.name} — a ${found.category.toLowerCase()} technology we work with.`
    : found.kind === "solution"
      ? `${found.name} — one of the kinds of system we build.`
      : `${found.name} is one of the ${label}s we cover.`;

  const detail = found.description ? ` ${found.description}` : "";

  // The first `why` bullet is the strongest single reason on the detail page.
  const reason = found.why[0]
    ? ` ${stripLabel(found.why[0].label)}: ${found.why[0].text}`
    : "";

  return reply(`${lead}${detail}${reason}`, {
    links: [{ label: `Full ${label} page`, to: found.to }, CONTACT_LINK],
    chips: [`How do you approach ${found.name}?`, "I'd like to talk to someone"],
  });
}

/** `why` labels ship with a trailing colon in content.json. */
const stripLabel = (label) => label.replace(/:\s*$/, "");

function smalltalk(text) {
  if (has(text, "hello", "hi ", "hey", "good morning", "good afternoon", "good evening"))
    return GREETING;

  if (has(text, "thank", "thanks", "cheers", "appreciate"))
    return reply("Any time. Anything else you want to dig into?", { chips: OPENING_CHIPS.slice(0, 3) });

  if (has(text, "bye", "goodbye", "see you", "later"))
    return reply(`Thanks for stopping by. The team is at ${company.email} whenever you need them.`, {
      links: [CONTACT_LINK],
    });

  if (has(text, "who are you", "what are you", "who is", "about you", "about stl", "about the company"))
    return reply(`${company.intro} I'm the assistant on this site — I can point you at any of it.`, {
      links: [{ label: "About us", to: "/about" }],
      chips: OPENING_CHIPS.slice(0, 3),
    });

  if (has(text, "help", "what can you do"))
    return reply("I can explain what we build, the industries we work in, our services and technologies, and hand you to the team when you're ready.", {
      chips: OPENING_CHIPS,
    });

  return null;
}

function fallback() {
  return reply(
    "I didn't quite catch that one. I'm best on what we build, the industries we work in, our services and our tech stack — or I can put you in touch with the team.",
    { chips: OPENING_CHIPS }
  );
}
