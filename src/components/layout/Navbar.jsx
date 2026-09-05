import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import content from "../../data/content.json";
import { solutions } from "../../data/solutions";
import { company } from "../../data/site";
import Logo from "../ui/Logo";

/* Solutions first: the site is organised by the business problem now, with
   services and technologies as the "how". Technologies left the top bar — a
   list of fifteen frameworks is not a navigation decision a business owner
   makes — and stays reachable from the footer, the stack section and /technology. */
const MENUS = [
  { label: "Solutions", to: "/solutions", items: solutions },
  { label: "Services", to: "/service", items: content.services },
  { label: "Industries", to: "/industries", items: content.industries },
];
const LINKS = [
  { label: "Our work", to: "/work" },
  { label: "About", to: "/about" },
];

const linkBase =
  "rounded-surface px-3.5 py-2 text-[14px] font-medium transition-colors duration-200";
const linkIdle = "text-ink-600 hover:bg-ink-50 hover:text-ink-900";
const linkActive = "bg-brand-50 text-brand-700";
/* A menu that is merely open is not the page you are on. Both states shared
   linkActive, so opening "Solutions" while on the home page lit two items in
   the brand colour and neither one read as "you are here". */
const linkOpen = "bg-ink-100 text-ink-900";

function Chevron({ open }) {
  return (
    <svg
      className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.17l3.71-3.94a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Desktop panels open on hover only where hover is a real signal. A touch
  // tablet at lg width gets no reliable mouseenter, so it keeps click-to-toggle.
  const [canHover, setCanHover] = useState(false);
  const navRef = useRef(null);
  // Pending close from a mouseleave. The delay lets the pointer cross from the
  // trigger to the panel (or between triggers) without the menu blinking shut.
  const closeTimer = useRef(null);
  // Remembers which trigger opened the current panel, so Escape can hand focus
  // back to it instead of dropping it on <body>.
  const triggerRefs = useRef({});
  const { pathname } = useLocation();

  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  // An open drawer covers the page, but the page underneath kept scrolling
  // behind it — on iOS that leaves you somewhere else when the drawer closes.
  useEffect(() => {
    if (!mobileOpen) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    // The chat launcher is fixed to the viewport, so with the drawer open it
    // floated on top of the nav links. index.css hides it off this attribute.
    document.body.dataset.navOpen = "true";
    return () => {
      document.body.style.overflow = previous;
      delete document.body.dataset.navOpen;
    };
  }, [mobileOpen]);

  useEffect(() => {
    // jsdom (the test runner) has no matchMedia; without hover detection the
    // menus simply keep click-to-toggle.
    if (typeof window.matchMedia !== "function") return undefined;
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setCanHover(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  const cancelClose = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = null;
  };
  const openNow = (label) => {
    cancelClose();
    setOpenMenu(label);
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpenMenu(null), 150);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpenMenu(null);
    };
    const onKey = (e) => {
      if (e.key !== "Escape") return;
      setOpenMenu((current) => {
        // Escape closing a panel has to leave focus somewhere sensible.
        if (current) triggerRefs.current[current]?.focus();
        return null;
      });
      setMobileOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    /* Solid light bar. The previous header was transparent over a dark canvas,
       which meant every page had to open with a dark hero just to keep the logo
       legible. An opaque bar removes that constraint and is the pattern users
       expect from enterprise software. `scrolled` controls a shadow rather than
       the whole background, so the bar never changes identity mid-scroll.

       Fully opaque, not bg-white/90: at 90% the navy hero showed through, so
       the bar went from white at the top of the page to a mottled blue-grey
       the moment you scrolled, with heading glyphs faintly readable behind the
       nav links. The backdrop blur went with it — it blurs what bleeds
       through, it does not stop it bleeding through. */
    <header
      className={`sticky top-0 z-50 w-full border-b bg-white transition-shadow duration-200 ${
        scrolled ? "border-ink-200 shadow-card" : "border-ink-100"
      }`}
    >
      <nav
        ref={navRef}
        className="container-page flex h-16 items-center justify-between gap-4 lg:h-[72px]"
      >
        <Link to="/" aria-label={`${company.name} home`} className="rounded-surface">
          <Logo tone="light" />
        </Link>

        {/* Desktop — plain links rather than a floating pill container, which
            was the loudest ornament in the old header. */}
        <div className="hidden items-center gap-1 lg:flex">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkIdle}`}
          >
            Home
          </NavLink>

          {MENUS.map((menu) => {
            const open = openMenu === menu.label;
            const active = pathname.startsWith(menu.to);
            return (
              <div
                key={menu.label}
                className="relative"
                // Trigger and panel share one wrapper, so moving the pointer
                // from one into the other never counts as leaving.
                onMouseEnter={canHover ? () => openNow(menu.label) : undefined}
                onMouseLeave={canHover ? scheduleClose : undefined}
              >
                <button
                  type="button"
                  ref={(node) => {
                    triggerRefs.current[menu.label] = node;
                  }}
                  // With a mouse the panel is already open by the time a click
                  // lands, so a click must not toggle it shut again. Without
                  // hover (touch at desktop width) the click is the only way in.
                  onClick={() => (canHover ? openNow(menu.label) : setOpenMenu(open ? null : menu.label))}
                  onKeyDown={(e) => {
                    // ArrowDown is what a menu button is expected to answer to;
                    // previously the panel could only be opened with a click.
                    if (e.key === "ArrowDown") {
                      e.preventDefault();
                      openNow(menu.label);
                    }
                  }}
                  aria-expanded={open}
                  aria-haspopup="true"
                  className={`${linkBase} flex items-center gap-1.5 ${
                    active ? linkActive : open ? linkOpen : linkIdle
                  }`}
                >
                  {menu.label}
                  <Chevron open={open} />
                </button>

                {/* Always mounted so it can fade out as well as in. `pt-2` is
                    the visual gap below the trigger, kept inside the hover
                    area so crossing it does not drop the menu. `invisible`
                    also takes the links out of the tab order while closed. */}
                <div
                  // Tabbing off the end of the list should close the panel,
                  // not leave it hanging open over the next page section.
                  // Only when focus actually lands somewhere else: a mouse
                  // click gives a null relatedTarget, and closing on that
                  // would unmount the link between mousedown and click and
                  // swallow the navigation.
                  onBlur={(e) => {
                    if (e.relatedTarget && !e.currentTarget.contains(e.relatedTarget)) {
                      setOpenMenu(null);
                    }
                  }}
                  className={`absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2 transition-[opacity,transform,visibility] duration-200 ease-out ${
                    menu.items.length > 6 ? "w-[36rem]" : "w-80"
                  } ${open ? "visible translate-y-0 opacity-100" : "pointer-events-none invisible -translate-y-1 opacity-0"}`}
                >
                  <div className="rounded-surface border border-ink-200 bg-white p-2 shadow-panel">
                    <Link
                      to={menu.to}
                      className="mb-1 flex items-center justify-between rounded-surface px-3 py-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-brand-700 transition-colors hover:bg-brand-50"
                    >
                      All {menu.label} <span aria-hidden="true">&rarr;</span>
                    </Link>
                    <div className={menu.items.length > 6 ? "grid grid-cols-2 gap-0.5" : "grid gap-0.5"}>
                      {menu.items.map((item) => (
                        <Link
                          key={item.slug}
                          to={`${menu.to}/${item.slug}`}
                          className="rounded-surface px-3 py-2 text-[14px] font-medium text-ink-600 transition-colors hover:bg-ink-50 hover:text-ink-900"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkIdle}`}
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          {/* Seven items plus a phone number is too much at 1024px; the number
              waits for xl and is always in the footer and on /contact. */}
          <a
            href={`tel:${company.phone}`}
            className="hidden rounded-surface px-2 py-1 text-[14px] font-medium text-ink-600 transition-colors hover:text-ink-900 xl:inline-block"
          >
            {company.phone}
          </a>
          {/* Primary, not the on-dark white variant — a white button on a white
              bar would have disappeared. */}
          <Link to="/contact" className="btn-primary">
            Start a project
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-surface border border-ink-200 bg-white text-ink-700 transition-colors hover:bg-ink-50 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
            {mobileOpen ? (
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="border-t border-ink-200 bg-white lg:hidden">
          <div className="container-page h-drawer space-y-0.5 overflow-y-auto pb-8 pt-4">
            <Link to="/" className="block rounded-surface px-3 py-2.5 font-semibold text-ink-900">
              Home
            </Link>

            {MENUS.map((menu) => (
              <details key={menu.label} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between rounded-surface px-3 py-2.5 font-semibold text-ink-900">
                  {menu.label}
                  <span className="text-ink-500 transition-transform duration-200 group-open:rotate-180">
                    <Chevron open={false} />
                  </span>
                </summary>
                <div className="mb-2 grid gap-0.5 border-l border-ink-200 pl-3">
                  <Link to={menu.to} className="rounded-surface px-3 py-2.5 text-[14px] font-semibold text-brand-700">
                    All {menu.label}
                  </Link>
                  {menu.items.map((item) => (
                    <Link
                      key={item.slug}
                      to={`${menu.to}/${item.slug}`}
                      className="rounded-surface px-3 py-2.5 text-[14px] font-medium text-ink-600"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </details>
            ))}

            {LINKS.map((l) => (
              <Link key={l.to} to={l.to} className="block rounded-surface px-3 py-2.5 font-semibold text-ink-900">
                {l.label}
              </Link>
            ))}
            <Link to="/technology" className="block rounded-surface px-3 py-2.5 font-semibold text-ink-900">
              Technologies
            </Link>

            <div className="flex flex-col gap-2.5 pt-4">
              <a href={`tel:${company.phone}`} className="btn-ghost">
                {company.phone}
              </a>
              <Link to="/contact" className="btn-primary">
                Start a project
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
