import { useCallback, useEffect, useRef, useState } from "react";
import { GREETING, respond } from "./brain";

// Bump this whenever the greeting or reply wording changes. A conversation is
// replayed verbatim from storage, so an open session kept showing the previous
// greeting long after the copy was corrected.
const STORAGE_KEY = "stl.chat.v2";

/** Long enough to read as a reply rather than a lookup, short enough to not stall. */
const THINKING_MS = 420;

let nextId = 0;
const makeId = () => `m${nextId++}`;

const openingMessage = () => ({
  id: makeId(),
  role: "bot",
  text: GREETING.text,
  links: GREETING.links,
  chips: GREETING.chips,
});

/** sessionStorage is best-effort — Safari private mode throws on write. */
function load() {
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : null;
    if (Array.isArray(parsed) && parsed.length) {
      nextId = parsed.length;
      return parsed;
    }
  } catch (err) {
    /* fall through to a fresh conversation */
  }
  return [openingMessage()];
}

function save(messages) {
  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  } catch (err) {
    /* not worth surfacing — the conversation still works in memory */
  }
}

export default function useChat() {
  const [messages, setMessages] = useState(load);
  const [pending, setPending] = useState(false);

  // Guards against setState landing after the widget unmounts mid-reply.
  const alive = useRef(true);
  useEffect(() => () => { alive.current = false; }, []);

  useEffect(() => { save(messages); }, [messages]);

  const send = useCallback(async (raw) => {
    const text = raw.trim();
    if (!text || pending) return;

    setMessages((prev) => [...prev, { id: makeId(), role: "user", text }]);
    setPending(true);

    const history = [...messages, { role: "user", text }];

    const [answer] = await Promise.all([
      respond(history),
      new Promise((resolve) => setTimeout(resolve, THINKING_MS)),
    ]);

    if (!alive.current) return;

    if (answer) {
      setMessages((prev) => [
        ...prev,
        { id: makeId(), role: "bot", text: answer.text, links: answer.links, chips: answer.chips },
      ]);
    }
    setPending(false);
  }, [messages, pending]);

  const reset = useCallback(() => {
    nextId = 0;
    setMessages([openingMessage()]);
  }, []);

  return { messages, pending, send, reset };
}
