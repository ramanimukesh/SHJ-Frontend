import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import useChat from "../../chat/useChat";
import { LogoMark } from "./Logo";

/**
 * The site assistant.
 *
 * All the answering lives in ../../chat — this file only renders a conversation
 * and hands text to send(). That seam is deliberate: swapping the local brain
 * for a hosted model is a change to brain.js and nothing here.
 */
export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const { messages, pending, send, reset } = useChat();

  const launcherRef = useRef(null);
  const inputRef = useRef(null);
  const scrollRef = useRef(null);
  const { pathname } = useLocation();

  // Following a link inside the panel means the user wants the page, not the
  // chat — on mobile the panel covers what they just asked for.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Set only when the panel is dismissed deliberately (button or Escape), so
  // that closing it on a route change does not yank focus back to the launcher.
  const restoreFocus = useRef(false);

  const close = useCallback(() => {
    restoreFocus.current = true;
    setOpen(false);
  }, []);

  // Focus has to come back to something, or it falls to <body>. It cannot be
  // done inside close(): the launcher is hidden while the panel is open on a
  // phone, and focus() on a display:none element silently does nothing — so
  // this waits for the render that shows it again.
  useEffect(() => {
    if (open || !restoreFocus.current) return;
    restoreFocus.current = false;
    launcherRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") close();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, close]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  // On a phone the panel covers the viewport, and the page behind it went on
  // scrolling — you closed the assistant somewhere else entirely. Above sm the
  // panel is a small floating card and the page behind it should stay usable,
  // so the lock is deliberately scoped to the narrow layout.
  useEffect(() => {
    if (!open || typeof window.matchMedia !== "function") return undefined;
    const narrow = window.matchMedia("(max-width: 639px)");
    if (!narrow.matches) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  // Pin to the newest message, including while the reply is still pending so
  // the typing indicator is what the user is looking at.
  useEffect(() => {
    const node = scrollRef.current;
    if (node) node.scrollTop = node.scrollHeight;
  }, [messages, pending, open]);

  const submit = (event) => {
    event.preventDefault();
    send(draft);
    setDraft("");
  };

  return (
    <>
      {open && (
        <Panel
          messages={messages}
          pending={pending}
          draft={draft}
          setDraft={setDraft}
          onSubmit={submit}
          onChip={send}
          onReset={reset}
          onClose={close}
          inputRef={inputRef}
          scrollRef={scrollRef}
        />
      )}

      <button
        ref={launcherRef}
        type="button"
        onClick={() => (open ? close() : setOpen(true))}
        aria-expanded={open}
        aria-label={open ? "Close the assistant" : "Ask the STL assistant"}
        /* `chat-launcher` lets the nav drawer hide this while it is open.
           Hidden below sm whenever the panel is up: the panel is full-width
           there, so this 56px button landed squarely on top of the 42px Send
           button — a 35x33px overlap, and being later in the DOM it won, so
           tapping Send closed the assistant instead of sending. The panel
           header carries its own close button. */
        className={`chat-launcher fixed bottom-5 right-5 z-50 h-14 w-14 items-center
                   justify-center rounded-full bg-brand-600 text-white shadow-panel
                   transition duration-200 hover:bg-brand-700 focus-visible:shadow-focus
                   motion-safe:hover:-translate-y-0.5 sm:bottom-6 sm:right-6 ${
                     open ? "hidden sm:flex" : "flex"
                   }`}
      >
        <Icon name={open ? "close" : "chat"} className="h-6 w-6" />
      </button>
    </>
  );
}

function Panel({
  messages,
  pending,
  draft,
  setDraft,
  onSubmit,
  onChip,
  onReset,
  onClose,
  inputRef,
  scrollRef,
}) {
  // The last bot turn owns the suggestions; older chips would re-answer
  // questions the conversation has already moved past.
  const latest = messages[messages.length - 1];
  const chips = !pending && latest?.role === "bot" ? latest.chips || [] : [];

  return (
    <div
      role="dialog"
      aria-label="STL assistant"
      className="h-chat fixed inset-x-0 bottom-0 z-50 flex flex-col overflow-hidden
                 rounded-t-panel border border-ink-200 bg-white shadow-panel
                 motion-safe:animate-fade-up
                 sm:inset-x-auto sm:bottom-24 sm:right-6 sm:h-[32rem]
                 sm:w-[23rem] sm:rounded-panel"
    >
      <header className="bg-canvas noise relative flex items-center gap-3 px-4 py-3.5">
        <span className="relative flex h-9 w-9 shrink-0 items-center justify-center">
          <LogoMark className="h-9 w-9" tone="dark" />
        </span>

        <div className="relative min-w-0 flex-1">
          <p className="truncate font-display text-[15px] font-semibold text-white">
            STL assistant
          </p>
          <p className="truncate text-[12px] text-white/60">
            Services, industries and tech — ask away
          </p>
        </div>

        <HeaderButton label="Start over" onClick={onReset} icon="reset" />
        <HeaderButton label="Close the assistant" onClick={onClose} icon="close" />
      </header>

      <div
        ref={scrollRef}
        className="flex-1 space-y-4 overflow-y-auto bg-paper px-4 py-5"
        aria-live="polite"
      >
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
        {pending && <Typing />}
      </div>

      <div className="border-t border-ink-200 bg-white">
        {chips.length > 0 && (
          <div className="flex flex-wrap gap-2 px-4 pt-3">
            {chips.map((chip) => (
              <button key={chip} type="button" onClick={() => onChip(chip)} className="chip">
                {chip}
              </button>
            ))}
          </div>
        )}

        <form onSubmit={onSubmit} className="flex items-end gap-2 p-3">
          <label htmlFor="stl-chat-input" className="sr-only">
            Message the assistant
          </label>
          <input
            id="stl-chat-input"
            ref={inputRef}
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            placeholder="Ask about a service, industry or tech…"
            autoComplete="off"
            className="input min-w-0 flex-1 py-2.5 text-[15px]"
          />
          <button
            type="submit"
            disabled={pending || !draft.trim()}
            aria-label="Send"
            className="btn-primary h-[42px] w-[42px] shrink-0 p-0"
          >
            <Icon name="send" className="h-[18px] w-[18px]" />
          </button>
        </form>
      </div>
    </div>
  );
}

function HeaderButton({ label, onClick, icon }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-surface
                 text-white/70 transition-colors duration-200 hover:bg-white/10 hover:text-white"
    >
      <Icon name={icon} className="h-[18px] w-[18px]" />
    </button>
  );
}

function Message({ message }) {
  const mine = message.role === "user";

  return (
    <div className={`flex flex-col gap-2 ${mine ? "items-end" : "items-start"}`}>
      <p
        className={`max-w-[85%] whitespace-pre-line rounded-surface px-3.5 py-2.5 text-[14px] leading-relaxed ${
          mine
            ? "bg-brand-600 text-white"
            : "border border-ink-200 bg-white text-ink-700 shadow-card"
        }`}
      >
        {message.text}
      </p>

      {!mine && message.links?.length > 0 && (
        <ul className="flex w-full max-w-[85%] flex-col gap-1.5">
          {message.links.map((link) => (
            <li key={`${link.to}-${link.label}`}>
              <Link
                to={link.to}
                className="group flex items-center justify-between gap-2 rounded-surface
                           border border-ink-200 bg-white px-3.5 py-2 text-[13px] font-medium
                           text-brand-700 shadow-card transition-colors duration-200
                           hover:border-brand-300 hover:bg-brand-50"
              >
                <span className="truncate">{link.label}</span>
                <Icon
                  name="arrow"
                  className="h-4 w-4 shrink-0 text-brand-500 transition-transform
                             duration-200 motion-safe:group-hover:translate-x-0.5"
                />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Typing() {
  return (
    <div className="flex items-center gap-1.5 rounded-surface border border-ink-200 bg-white
                    px-3.5 py-3 shadow-card w-fit">
      <span className="sr-only">Typing…</span>
      {[0, 150, 300].map((delay) => (
        <span
          key={delay}
          aria-hidden="true"
          style={{ animationDelay: `${delay}ms` }}
          className="h-1.5 w-1.5 rounded-full bg-ink-400 motion-safe:animate-bounce"
        />
      ))}
    </div>
  );
}

const ICONS = {
  chat: <path d="M21 11.5a8.5 8.5 0 0 1-12.3 7.6L3 20.5l1.4-5.2A8.5 8.5 0 1 1 21 11.5Z" />,
  close: <path d="M18 6 6 18M6 6l12 12" />,
  reset: (
    <>
      <path d="M20 12a8 8 0 1 1-2.3-5.6" />
      <path d="M20 3v4.5h-4.5" />
    </>
  ),
  send: <path d="M4.5 12 20 4l-6.2 16-2.6-6.6L4.5 12Z" />,
  arrow: <path d="M5 12h13m-5.5-5.5L18.5 12l-6 5.5" />,
};

function Icon({ name, className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {ICONS[name]}
    </svg>
  );
}
