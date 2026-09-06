import React, { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import content from "../data/content.json";
import { company } from "../data/site";
import { hero, heroSrcSet } from "../data/media";
import { solutions, DISCOVERY } from "../data/solutions";
import { work } from "../data/work";
import { TRANSFORMATION, PROBLEMS, PROCESS, WHY, FAQ } from "../data/home";
import { CATEGORIES, UNIQUE_TECH_COUNT } from "../data/stack";
import Section from "../components/ui/Section";
import Reveal from "../components/ui/Reveal";
import ServiceIcon from "../components/ui/ServiceIcon";
import Seo from "../components/Seo";

/* Code-split with /technology: the ecosystem carries ~60 inlined brand marks
   (37kB gzipped of SVG path data), which the home page should not pay for
   before the hero paints. Its own Suspense boundary so the rest of the page
   renders while the chunk arrives. */
const TechShowcase = lazy(() => import("../components/ui/TechShowcase"));

function Arrow({ className = "" }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className={className}>
      <path
        fillRule="evenodd"
        d="M7.2 5.2a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06L8.26 14.8a.75.75 0 1 1-1.06-1.06L10.88 10 7.2 6.3a.75.75 0 0 1 0-1.1Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

/* The four business environments lead the industries section; the five
   sector pages that predate this positioning stay reachable from the listing. */
const ENVIRONMENTS = [
  "real-estate-property-management",
  "construction",
  "professional-services",
  "small-mid-sized-businesses",
].map((slug) => content.industries.find((i) => i.slug === slug));

const bySolution = (slug) => solutions.find((s) => s.slug === slug);

/* Three plain commitments where a row of made-up numbers used to be. The old
   "50+ projects / 24/7 support" strip was marked presentational in site.js —
   i.e. invented — and a first-time visitor cannot tell the difference between
   a real stat and a decorative one, which is exactly why it had to go. */
const PROMISES = [
  { title: "Built around your process", text: "We map how the work moves before a screen is designed." },
  { title: "You own the code and the data", text: "Source, infrastructure and documentation are handed over, not held." },
  { title: "First release in weeks", text: "Staged delivery: the most painful part ships first, the rest follows." },
];

export default function Home() {
  const faqSchema = {
    "@type": "FAQPage",
    mainEntity: FAQ.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <>
      <Seo
        title={`${company.name} | Custom Business Software, Automation & Integration`}
        description="Sahajanand Technologies designs and builds custom business software, workflow automation, integrations, reporting and practical AI, built around the way your business actually works."
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              name: company.name,
              alternateName: company.short,
              description: company.intro,
              telephone: company.phone,
              email: company.email,
              knowsAbout: solutions.map((s) => s.name),
            },
            faqSchema,
          ],
        }}
      />

      {/* ═══════════ 1. HERO ═══════════ */}
      <section className="relative overflow-hidden bg-brand-950">
        <img
          src={hero}
          srcSet={heroSrcSet}
          sizes="100vw"
          alt=""
          width={2400}
          height={1350}
          fetchpriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-ink-950/45" />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-ink-950/95 via-ink-950/85 via-45% to-ink-950/30 to-85%"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-ink-950/40 sm:hidden" />

        <div className="container-page relative pb-16 pt-16 sm:pb-24 sm:pt-24">
          <Reveal className="max-w-4xl">
            <p className="eyebrow text-brand-200">
              Custom software · Automation · Integration · Practical AI
            </p>

            <h1 className="mt-6 h-display text-white">
              Software built around
              <br className="hidden sm:block" /> your business.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
              We design and develop custom software, business applications, integrations
              and automation that help organizations work smarter, operate efficiently,
              and grow.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-glow">
                Start a project <Arrow className="h-4 w-4" />
              </Link>
              <Link to="/solutions" className="btn-onDark">
                Explore our solutions
              </Link>
            </div>
          </Reveal>

          {/* ═══════════ 2. TRUST ═══════════ */}
          <Reveal delay={150}>
            <dl className="mt-16 grid gap-px overflow-hidden rounded-surface border border-white/10 bg-white/10 sm:grid-cols-3">
              {PROMISES.map((p) => (
                <div key={p.title} className="bg-brand-950/85 px-6 py-6 backdrop-blur">
                  <dt className="font-display text-[17px] font-semibold text-white">{p.title}</dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-white/65">{p.text}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ═══════════ 3. WHAT WE BUILD ═══════════ */}
      <Section
        id="what-we-build"
        eyebrow="What we build"
        title="Technology that makes business operations better"
        intro="Not a list of languages. The systems an operating business actually needs, and what each one does for it."
      >
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((s, i) => (
            <Reveal as="li" key={s.slug} delay={50 * i} className="h-full">
              <Link to={`/solutions/${s.slug}`} className="card card-hover group flex h-full flex-col">
                <span
                  className="inline-flex h-11 w-11 items-center justify-center rounded-surface bg-brand-50
                             text-brand-600 ring-1 ring-inset ring-brand-100 transition-colors duration-300
                             group-hover:bg-brand-600 group-hover:text-white group-hover:ring-brand-600"
                >
                  <ServiceIcon slug={s.icon} className="h-[22px] w-[22px]" />
                </span>
                <h3 className="mt-5 font-display text-[19px] font-semibold leading-snug tracking-tight text-ink-900">
                  {s.name}
                </h3>
                <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-ink-600">{s.short}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                  Learn more
                  <Arrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* ═══════════ 4. PROBLEMS WE SOLVE ═══════════ */}
      <Section
        tone="tint"
        eyebrow="Business problems we solve"
        title="If any of these sound familiar, we have built the fix before"
        intro="The problems arrive as symptoms. Each one below maps to the kind of system that removes it."
      >
        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PROBLEMS.map((p, i) => {
            const sol = bySolution(p.solution);
            return (
              <Reveal as="li" key={p.title} delay={50 * i} className="h-full">
                <Link to={`/solutions/${sol.slug}`} className="card card-hover group flex h-full flex-col">
                  <h3 className="font-display text-[19px] font-semibold leading-snug tracking-tight text-ink-900">
                    {p.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-600">{p.text}</p>
                  <span className="mt-5 flex items-center gap-2 border-t border-ink-100 pt-4 text-sm">
                    <span className="text-ink-500">The fix:</span>
                    <span className="font-semibold text-brand-700">{sol.name}</span>
                    <Arrow className="ml-auto h-4 w-4 text-brand-600 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </ul>
      </Section>

      {/* ═══════════ FROM MANUAL TO DIGITAL ═══════════ */}
      <Section
        tone="dark"
        eyebrow="From manual to digital"
        title="Replace manual work with better systems"
        intro="This is what custom software is actually for. Not novelty. Removing the work that should never have been manual."
      >
        <Reveal>
          <ol className="grid gap-px overflow-hidden rounded-surface border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {TRANSFORMATION.map((t, i) => (
              <li key={t.before} className="bg-brand-950/90 p-6 backdrop-blur sm:p-7">
                <span className="font-display text-[12px] font-bold tabular-nums tracking-[0.12em] text-brand-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="mt-4 flex items-center gap-3">
                  <span className="text-[15px] font-medium text-white/55 line-through decoration-white/30">
                    {t.before}
                  </span>
                  <Arrow className="h-4 w-4 shrink-0 text-accent-300" />
                </div>
                <p className="mt-1.5 font-display text-[19px] font-semibold leading-snug text-white">{t.after}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </Section>

      {/* ═══════════ 5. INDUSTRIES ═══════════ */}
      <Section
        eyebrow="Industries"
        title="We understand the business behind the software"
        intro="Different operations need different systems. These are the environments we build for most, and what each one has to manage."
      >
        <ul className="grid gap-5 md:grid-cols-2">
          {ENVIRONMENTS.map((ind, i) => (
            <Reveal as="li" key={ind.slug} delay={60 * i} className="h-full">
              <Link to={`/industries/${ind.slug}`} className="card card-hover group flex h-full flex-col">
                <h3 className="font-display text-[22px] font-semibold leading-snug tracking-tight text-ink-900">
                  {ind.name}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-600">{ind.summary}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {ind.why.slice(0, 4).map((w) => (
                    <li key={w.label} className="badge">
                      {w.label}
                    </li>
                  ))}
                </ul>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                  How we build for {ind.name.toLowerCase().replace(" & ", " and ")}
                  <Arrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
        <Reveal className="mt-10">
          <Link to="/industries" className="btn-ghost">
            All industries <Arrow className="h-4 w-4" />
          </Link>
        </Reveal>
      </Section>

      {/* ═══════════ 6. FEATURED WORK ═══════════ */}
      <Section
        tone="tint"
        eyebrow="Built for real business"
        title="Our work"
        intro="Businesses we have worked with, what each one does, and what its operation has to manage every day."
      >
        <ul className="grid gap-5 md:grid-cols-2">
          {work.map((w, i) => (
            <Reveal as="li" key={w.slug} delay={60 * i} className="h-full">
              <Link to={`/work/${w.slug}`} className="card card-hover group flex h-full flex-col p-7 sm:p-8">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-label uppercase text-brand-600">{w.industryLabel}</span>
                  {!w.approved && (
                    <span className="badge ml-auto border-gold-200 bg-gold-50 text-gold-800">
                      Draft
                    </span>
                  )}
                </div>
                <h3 className="mt-4 font-display text-[24px] font-semibold leading-tight tracking-tight text-ink-900">
                  {w.client}
                </h3>
                {w.headline && (
                  <p className="mt-2 text-[15px] font-semibold text-brand-700">{w.headline}</p>
                )}
                <p className="mt-3 text-[15px] leading-relaxed text-ink-600">{w.business}</p>
                <p className="mt-5 text-[13px] font-semibold uppercase tracking-[0.08em] text-ink-500">
                  What the operation manages
                </p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {w.operations.slice(0, 4).map((o) => (
                    <li key={o} className="badge">{o}</li>
                  ))}
                </ul>
                <span className="mt-6 inline-flex items-center gap-1.5 border-t border-ink-100 pt-5 text-sm font-semibold text-brand-600">
                  Read the case study
                  <Arrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* ═══════════ 7. TECHNOLOGY ═══════════ */}
      <Section
        tone="paper"
        eyebrow="Technology ecosystem"
        title="The modern software stack, under one roof"
        intro={`${UNIQUE_TECH_COUNT} technologies across ${CATEGORIES.length} disciplines, covering web, mobile, cloud, data and AI, chosen so the system can be hosted, hired for and maintained for years. Pick a discipline to see what we build with.`}
      >
        <Reveal>
          <Suspense
            fallback={
              <div
                aria-hidden="true"
                className="h-[28rem] animate-pulse rounded-panel border border-ink-200 bg-white"
              />
            }
          >
            <TechShowcase />
          </Suspense>
        </Reveal>
      </Section>

      {/* ═══════════ 8. AI ═══════════ */}
      <Section
        tone="tint"
        eyebrow="AI & automation"
        title="AI where it makes business sense"
        intro="We use AI to solve practical business problems, not simply to add AI to an application. It goes where a person is reading, sorting, extracting or drafting the same thing all day."
      >
        <div className="grid gap-8 lg:grid-cols-5 lg:items-start">
          <Reveal className="lg:col-span-3">
            <ul className="grid gap-3 sm:grid-cols-2">
              {bySolution("ai-automation").uses.map((u) => (
                <li key={u} className="flex items-center gap-3 rounded-surface border border-ink-200 bg-white px-4 py-3.5 text-[15px] font-medium text-ink-800 shadow-card">
                  <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-accent-500" />
                  {u}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-2">
            <div className="card-dark bg-brand-950 !border-brand-900">
              <p className="text-label uppercase text-brand-300">How we keep it honest</p>
              <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-white/80">
                <li>Pilot on your real documents before anything is built around it.</li>
                <li>Runs inside your systems, on your data, with normal access control.</li>
                <li>A person reviews wherever the decision matters.</li>
                <li>Accuracy and cost are measured in production.</li>
              </ul>
              <Link to="/solutions/ai-automation" className="link-target mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300 hover:text-white">
                AI & intelligent automation <Arrow className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ═══════════ 9. HOW WE WORK ═══════════ */}
      <Section
        eyebrow="How we work"
        title="Understand first. Build in stages. Stay after launch."
        intro="The same engagement whether it is a first application or a modernization of one you have run for a decade."
      >
        <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((p, i) => (
            <Reveal as="li" key={p.title} delay={60 * i} className="h-full">
              <div className="card h-full">
                <span className="font-display text-3xl font-bold tabular-nums tracking-tight text-brand-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-[19px] font-semibold leading-snug tracking-tight text-ink-900">
                  {p.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-600">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* ═══════════ 10. WHY SAHAJANAND ═══════════ */}
      <Section
        tone="tint"
        eyebrow="Why Sahajanand"
        title="We don't just build software. We understand the business behind it."
      >
        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {WHY.map((w, i) => (
            <Reveal as="li" key={w.title} delay={50 * i} className="h-full">
              <div className="card h-full">
                <h3 className="font-display text-[19px] font-semibold leading-snug tracking-tight text-ink-900">
                  {w.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-600">{w.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* ═══════════ 11. FAQ ═══════════ */}
      <Section eyebrow="Questions" title="What business owners ask us first">
        <div className="mx-auto max-w-3xl divide-y divide-ink-200 rounded-surface border border-ink-200 bg-white shadow-card">
          {FAQ.map((f) => (
            <details key={f.q} className="group px-6 py-1 sm:px-7">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-display text-[17px] font-semibold text-ink-900 [&::-webkit-details-marker]:hidden">
                {f.q}
                <span aria-hidden="true" className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-ink-200 text-ink-500 transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="pb-5 text-[15px] leading-relaxed text-ink-600">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* ═══════════ 12. DISCOVERY CTA ═══════════ */}
      <Section
        tone="brand"
        align="center"
        eyebrow="Start here"
        title="Tell us what you're trying to improve"
        intro="Pick the closest fit and the contact form is pre-filled. Or skip it and just write to us."
      >
        <Reveal>
          <ul className="mx-auto flex max-w-4xl flex-wrap justify-center gap-2.5">
            {DISCOVERY.map((d) => (
              <li key={d.value}>
                <Link
                  to={`/contact?need=${d.value}`}
                  className="inline-flex min-h-[44px] items-center rounded-full border border-white/25 bg-white/[0.08] px-5 py-2.5 text-[15px] font-medium text-white transition-colors hover:border-white/50 hover:bg-white/[0.16]"
                >
                  {d.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="btn-glow">
              Let's talk about your project <Arrow className="h-4 w-4" />
            </Link>
            <a href={`tel:${company.phone}`} className="btn-onDark">
              Call {company.phone}
            </a>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
