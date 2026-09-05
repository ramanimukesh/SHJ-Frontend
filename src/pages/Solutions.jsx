import React from "react";
import { Link } from "react-router-dom";
import { solutions, DISCOVERY } from "../data/solutions";
import { hero } from "../data/media";
import PageHero from "../components/ui/PageHero";
import Section from "../components/ui/Section";
import Reveal from "../components/ui/Reveal";
import ServiceIcon from "../components/ui/ServiceIcon";
import Seo from "../components/Seo";

export default function Solutions() {
  return (
    <>
      <Seo
        title="Solutions"
        description="Business management systems, workflow automation, reporting and dashboards, customer and employee portals, integrations and APIs, custom software, practical AI, and application modernization."
      />

      <PageHero
        image={hero}
        eyebrow="Solutions"
        title="What We Build, by the Problem It Solves"
        subtitle="A business owner recognises 'replace the spreadsheets' long before 'Angular'. This is the site organised that way: the systems an operating business needs, and what each does for it."
        crumbs={[{ label: "Home", to: "/" }, { label: "Solutions" }]}
      >
        <Link to="/contact" className="btn-glow">
          Start a project
        </Link>
      </PageHero>

      <Section>
        <ul className="grid gap-5 md:grid-cols-2">
          {solutions.map((s, i) => (
            <Reveal as="li" key={s.slug} delay={50 * i} className="h-full">
              <Link to={`/solutions/${s.slug}`} className="card card-hover group flex h-full flex-col p-7 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <span
                    className="inline-flex h-12 w-12 items-center justify-center rounded-surface bg-brand-50
                               text-brand-600 ring-1 ring-inset ring-brand-100 transition-colors duration-300
                               group-hover:bg-brand-600 group-hover:text-white group-hover:ring-brand-600"
                  >
                    <ServiceIcon slug={s.icon} className="h-6 w-6" />
                  </span>
                  <span className="font-display text-[12px] font-semibold tabular-nums tracking-[0.12em] text-ink-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h2 className="mt-6 font-display text-[24px] font-semibold leading-tight tracking-tight text-ink-900">
                  {s.name}
                </h2>
                <p className="mt-3 text-[15px] font-medium text-ink-800">{s.short}</p>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-600">{s.heroSub}</p>
                <div className="mt-6 flex items-center justify-between gap-4 border-t border-ink-100 pt-5">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
                    How it works
                    <span className="transition-transform duration-300 group-hover:translate-x-1.5">&rarr;</span>
                  </span>
                  <span className="text-label uppercase text-ink-500">{s.workflow.length}-stage delivery</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section
        tone="brand"
        align="center"
        eyebrow="Not sure which one?"
        title="Tell us what you're trying to improve"
        intro="Pick the closest fit and the contact form is pre-filled."
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
        </Reveal>
      </Section>
    </>
  );
}
