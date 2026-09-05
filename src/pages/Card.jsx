import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { company } from "../data/site";
import { personBySlug } from "../data/people";
import Logo from "../components/ui/Logo";
import Seo from "../components/Seo";

const SITE_URL = process.env.REACT_APP_SITE_URL || "https://www.sahajanandtechnologies.com";

/**
 * The digital business card at /card/:slug.
 *
 * This is the page a printed card's QR code and an NFC card both open, so it
 * is built for a phone held in one hand: one column, big tap targets, the
 * useful action (Save contact) first. It deliberately renders outside Layout
 * — no navbar, footer or chat widget — because someone who just tapped a
 * card wants the person, not the site map.
 */

function Row({ href, label, value, external = false }) {
  const rel = external ? "noopener noreferrer" : undefined;
  const target = external ? "_blank" : undefined;
  return (
    <li>
      <a
        href={href}
        target={target}
        rel={rel}
        className="group flex items-baseline justify-between gap-4 py-3.5 transition-colors hover:text-brand-600"
      >
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-500">
          {label}
        </span>
        {/* break-all rather than truncate: an email cut to "mukesh.ramani@sahajanandte…"
            is useless, and a long address wrapping to two lines is fine on a phone. */}
        <span className="min-w-0 break-all text-right text-[15px] font-medium leading-snug text-ink-900 tabular-nums group-hover:text-brand-600">
          {value}
        </span>
      </a>
    </li>
  );
}

function Shell({ children }) {
  return (
    <div className="min-h-screen bg-brand-950 bg-[radial-gradient(120%_80%_at_50%_-10%,#16386a_0%,#0a1f3f_55%,#071730_100%)] px-4 py-8 sm:py-14">
      <div className="mx-auto w-full max-w-[400px]">{children}</div>
    </div>
  );
}

export default function Card() {
  const { slug } = useParams();
  const person = personBySlug(slug);
  const [shareState, setShareState] = useState("idle"); // idle | copied | failed
  const [showQr, setShowQr] = useState(false);

  if (!person) {
    return (
      <Shell>
        <Seo title="Card not found" description="There is no card at this address." noindex />
        <div className="rounded-3xl bg-white p-8 text-center shadow-panel">
          <Logo tone="light" className="justify-center" />
          <h1 className="mt-6 text-xl font-bold text-ink-900">No card at this address</h1>
          <p className="mt-2 text-[15px] text-ink-600">
            The link may have a typo. Everything else is on the main site.
          </p>
          <Link
            to="/"
            className="mt-6 inline-flex rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white"
          >
            Go to {company.short}
          </Link>
        </div>
      </Shell>
    );
  }

  const fullName = `${person.first} ${person.last}`;
  const pageUrl = `${SITE_URL}/card/${person.slug}`;
  const site = SITE_URL.replace(/^https?:\/\/(www\.)?/, "");

  // Web Share hands the link to AirDrop, Nearby Share, WhatsApp — whatever the
  // phone has. That is the "hold the phones together" moment when there is no
  // NFC card in hand. Desktop browsers mostly lack it, so copy is the fallback.
  const share = async () => {
    const data = { title: fullName, text: `${fullName}, ${person.title} at ${company.name}`, url: pageUrl };
    try {
      if (navigator.share) {
        await navigator.share(data);
        return;
      }
      await navigator.clipboard.writeText(pageUrl);
      setShareState("copied");
    } catch (err) {
      // AbortError is the user closing the share sheet — not a failure.
      if (err && err.name === "AbortError") return;
      setShareState("failed");
    }
    window.setTimeout(() => setShareState("idle"), 2400);
  };

  const shareLabel =
    shareState === "copied" ? "Link copied" : shareState === "failed" ? "Could not share" : "Share card";

  return (
    <Shell>
      <Seo
        title={fullName}
        description={`${fullName}, ${person.title} at ${company.name}. Save the contact, call, or email.`}
        type="profile"
        schema={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: fullName,
          jobTitle: person.title,
          email: person.email,
          telephone: person.phoneHref.replace("tel:", ""),
          url: pageUrl,
          worksFor: { "@type": "Organization", name: company.name, url: SITE_URL },
        }}
      />

      <article className="overflow-hidden rounded-3xl bg-white shadow-panel">
        {/* Navy band carries the identity; the cyan hairline is the printed
            card's sweep line, straightened. */}
        <header className="relative bg-brand-950 px-7 pb-7 pt-8">
          <Logo tone="dark" />
          <span className="absolute inset-x-0 bottom-0 h-[3px] bg-accent-500" aria-hidden="true" />
        </header>

        <div className="px-7 pb-7 pt-6">
          <h1 className="font-display text-[28px] font-extrabold leading-tight tracking-tight text-ink-900">
            {fullName}
          </h1>
          <p className="mt-1.5 text-[12px] font-semibold uppercase tracking-[0.22em] text-accent-700">
            {person.title}
          </p>
          <p className="mt-1 text-[14px] text-ink-500">{company.name}</p>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <a
              href={person.vcard}
              download
              className="inline-flex items-center justify-center rounded-full bg-brand-600 px-5 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-brand-700"
            >
              Save contact
            </a>
            <button
              type="button"
              onClick={share}
              aria-live="polite"
              className="inline-flex items-center justify-center rounded-full border border-ink-300 px-5 py-3.5 text-[15px] font-semibold text-ink-900 transition-colors hover:border-brand-600 hover:text-brand-600"
            >
              {shareLabel}
            </button>
          </div>

          <ul className="mt-6 divide-y divide-ink-200 border-y border-ink-200">
            <Row href={person.phoneHref} label="Mobile" value={person.phone} />
            <Row href={`mailto:${person.email}`} label="Email" value={person.email} />
            <Row href={SITE_URL} label="Web" value={site} external />
          </ul>

          <div className="mt-5">
            <button
              type="button"
              onClick={() => setShowQr((v) => !v)}
              aria-expanded={showQr}
              // 21px tall as a bare button, on the page a phone opens from a
              // QR scan. link-target pads it to the 24px WCAG 2.5.8 minimum.
              className="link-target text-[13px] font-semibold text-brand-600 hover:underline"
            >
              {showQr ? "Hide QR code" : "Show QR code for this card"}
            </button>
            {showQr && (
              <figure className="mt-4 flex flex-col items-center gap-3">
                <img
                  src={person.qr}
                  alt={`QR code that opens ${fullName}'s card`}
                  width="176"
                  height="176"
                  className="h-44 w-44 rounded-xl bg-white p-2 ring-1 ring-ink-200"
                />
                <figcaption className="text-[12px] text-ink-500">
                  Let someone scan this to open the card on their phone.
                </figcaption>
              </figure>
            )}
          </div>
        </div>
      </article>

      <p className="mt-6 text-center text-[13px] text-white/60">
        {/* 16px tall without link-target. */}
        <Link to="/" className="link-target font-medium text-accent-300 hover:underline">
          {site}
        </Link>
      </p>
    </Shell>
  );
}
