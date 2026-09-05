import React from "react";
import { Link } from "react-router-dom";
import { solutions } from "../../data/solutions";
import { company } from "../../data/site";
import Reveal from "../ui/Reveal";
import Logo from "../ui/Logo";

function PhoneIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2Z" />
    </svg>
  );
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M27 6H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm-1.4 2L16 14.7 6.4 8zm1.4 16H5V10.4l11 7.4 11-7.4z" />
    </svg>
  );
}

function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M27 4H5a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zM10.5 25H7V13h3.5v12zM8 11.5a2 2 0 1 1 2-2 2 2 0 0 1-2 2zm16.5 13.5h-3.5v-5.9c0-1.4-.6-2.1-1.8-2.1s-1.9.8-1.9 2v6h-3.5V13h3.5v1.7a3.6 3.6 0 0 1 3.2-1.7c2.3 0 4 1.5 4 4.8V25z" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="noise relative overflow-hidden bg-canvas">
      <div aria-hidden="true" className="mesh pointer-events-none absolute inset-0 opacity-70" />

      {/* ── Closing CTA ── */}
      <div className="container-page relative pb-20 pt-24 sm:pt-32">
        <Reveal className="text-center">
          <h2 className="mx-auto max-w-3xl font-display text-h2 text-white">
            We don&apos;t just build software.{" "}
            <span className="text-gradient">We understand the business behind it.</span>
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-ink-200/70">
            Tell us what you are trying to improve and we&apos;ll come back with the shape of an
            engagement — even if it is a smaller one than you expected.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="btn-glow">
              Start a project
            </Link>
            <a href={`tel:${company.phone}`} className="btn-onDark">
              {company.phone}
            </a>
          </div>
        </Reveal>
      </div>

      <div className="container-page relative">
        <div className="rule-gradient" />
      </div>

      {/* ── Link columns ── */}
      <div className="container-page relative grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo tone="dark" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-200/60">
            {company.intro}
          </p>
          {/* `linkedin` is still "#" in site.js. A link to nowhere is worse
              than no link: it is announced and focusable but does nothing, so
              it only renders once there is a real profile to point at. */}
          {company.linkedin && company.linkedin !== "#" && (
            <a
              href={company.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${company.name} on LinkedIn`}
              className="-m-2 mt-4 inline-flex p-2 text-ink-400 transition hover:text-brand-300"
            >
              <LinkedInIcon className="h-7 w-7" />
            </a>
          )}
        </div>

        <div>
          <h3 className="text-label uppercase text-white/70">
            Our pages
          </h3>
          <ul className="mt-5 space-y-1 text-sm font-medium">
            {[
              { label: "Home", to: "/" },
              { label: "Solutions", to: "/solutions" },
              { label: "Services", to: "/service" },
              { label: "Industries", to: "/industries" },
              { label: "Our work", to: "/work" },
              { label: "Technologies", to: "/technology" },
              { label: "About us", to: "/about" },
              { label: "Contact us", to: "/contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="inline-flex min-h-[24px] items-center py-1.5 text-ink-200/70 transition hover:text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-label uppercase text-white/70">
            Solutions
          </h3>
          <ul className="mt-5 space-y-1 text-sm font-medium">
            {solutions.map((s) => (
              <li key={s.slug}>
                <Link
                  to={`/solutions/${s.slug}`}
                  className="inline-flex min-h-[24px] items-center py-1.5 text-ink-200/70 transition hover:text-white"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-label uppercase text-white/70">
            Contact us
          </h3>
          <ul className="mt-5 space-y-4 text-sm font-medium text-ink-200/60">
            <li>
              <a
                href={`tel:${company.phone}`}
                className="flex min-h-[24px] items-center gap-2.5 py-1.5 transition hover:text-white"
              >
                <PhoneIcon className="h-4 w-4 shrink-0 text-brand-300" />
                {company.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${company.email}`}
                className="flex min-h-[24px] items-start gap-2.5 py-1.5 break-words transition hover:text-white"
              >
                <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                {company.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-page relative">
        <div className="rule-gradient" />
      </div>

      {/* container-page like every other row. Without it this line sat flush to
          both screen edges — 2px of margin on a 390px phone against the 20px
          every other element on the page keeps. */}
      <div className="container-page relative py-8 text-center text-sm text-ink-400">
        &copy; {year} {company.name}. All rights reserved.
      </div>
    </footer>
  );
}
