import React from "react";
import { Link } from "react-router-dom";
import content from "../data/content.json";
import { hero } from "../data/media";
import PageHero from "../components/ui/PageHero";
import Section from "../components/ui/Section";
import Reveal from "../components/ui/Reveal";
import Seo from "../components/Seo";

export default function Services() {
  return (
    <>
      <Seo
        title="Services"
        description="Design, engineering, cloud, and team extension services: digital product design, software architecture, engineering & DevOps, mobile app development, and staff augmentation."
      />

      <PageHero
        image={hero}
        eyebrow="Services we serve"
        title="Empowering Businesses with End-to-End Digital Solutions"
        subtitle="At STL, we deliver design, development, cloud, and team extension services to help businesses innovate, grow, and thrive in today's digital world."
        crumbs={[{ label: "Home", to: "/" }, { label: "Services" }]}
      />

      <Section>
        <div className="grid gap-5 lg:grid-cols-2">
          {content.services.map((s, i) => (
            <Reveal key={s.slug} delay={70 * i} className="h-full">
              <Link to={`/service/${s.slug}`} className="card card-hover group flex h-full flex-col p-9">
                <span className="font-display text-3xl font-bold tabular-nums tracking-tight text-brand-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-4 font-display text-2xl font-semibold leading-tight tracking-tight text-ink-900">
                  {s.name}
                </h2>
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-600">
                  {s.summary}
                </p>

                <div className="mt-7 flex items-center justify-between gap-4 border-t border-ink-100 pt-5">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
                    Learn more
                    <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                      &rarr;
                    </span>
                  </span>
                  {s.workflow?.length > 0 && (
                    <span className="text-label uppercase text-ink-500">
                      {s.workflow.length}-step process
                    </span>
                  )}
                </div>
              </Link>
            </Reveal>
          ))}

          {/* Fills the odd slot the five services leave in a 2-up grid, the same
              way the industries grid on the home page is balanced. */}
          <Reveal delay={70 * content.services.length} className="h-full">
            <Link
              to="/contact"
              className="group flex h-full flex-col justify-between rounded-surface bg-brand-700 p-9 text-white transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-lift"
            >
              <div>
                <p className="font-sans text-label uppercase text-brand-200">
                  Not sure where to start?
                </p>
                <p className="mt-4 font-display text-2xl font-semibold leading-tight tracking-tight">
                  Tell us what you are building
                </p>
                <p className="mt-4 text-[15px] leading-relaxed text-white/75">
                  We will point you at the right engagement, even if that turns out
                  not to be one of the five above.
                </p>
              </div>
              <span className="mt-7 inline-flex items-center gap-2 border-t border-white/20 pt-5 text-sm font-semibold">
                Start a conversation
                <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                  &rarr;
                </span>
              </span>
            </Link>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
