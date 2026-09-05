import React from "react";
import { Link } from "react-router-dom";
import content from "../data/content.json";
import { company } from "../data/site";
import { solutions } from "../data/solutions";
import { aboutPhoto } from "../data/media";
import PageHero from "../components/ui/PageHero";
import Section from "../components/ui/Section";
import Seo from "../components/Seo";

/* Counts derived from the data the site renders, so they are true by
   construction — unlike the previous "50+ projects / 24/7 support" strip,
   which site.js itself labelled presentational. */
const stats = [
  { value: solutions.length, label: "Solutions we build" },
  { value: content.industries.length, label: "Industries served" },
  { value: content.technologies.length, label: "Technologies in the stack" },
  { value: content.services.length, label: "Service practices" },
];

const VALUES = [
  {
    title: "The business first",
    text: "Every engagement starts with the operation — who does what, where it stalls, which systems are in play — so the software fits the way you already work.",
  },
  {
    title: "Built to scale",
    text: "We design modular, future-ready architectures so today's build does not become tomorrow's rewrite.",
  },
  {
    title: "Delivery you can predict",
    text: "Every engagement follows a staged workflow with clear milestones, so you always know what happens next.",
  },
  {
    title: "Partners, not vendors",
    text: "From startups to enterprises, we integrate with your workflow and stay accountable to your business outcomes.",
  },
];

export default function About() {
  return (
    <>
      <Seo
        title="About us"
        description={company.intro}
        image={aboutPhoto}
      />

      <PageHero
        image={aboutPhoto}
        eyebrow="About us"
        title={company.tagline}
        subtitle={company.intro}
        crumbs={[{ label: "Home", to: "/" }, { label: "About" }]}
      />

      <Section
        eyebrow="What drives us"
        title="A team built around outcomes"
        intro="We combine design, engineering, cloud, and on-demand talent so businesses can move from idea to launch without stitching together four different vendors."
      >
        <div className="grid gap-6 sm:grid-cols-2">
          {VALUES.map((v) => (
            <div key={v.title} className="card card-hover">
              <h3 className="text-lg font-semibold text-ink-900">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-600">{v.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="brand" align="center" eyebrow="At a glance" title="Where we deliver">
        <dl className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <dt className="font-display text-4xl font-bold tabular-nums text-white">{s.value}</dt>
              <dd className="mt-2 text-xs font-semibold uppercase tracking-wide text-brand-200">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section
        tone="slate"
        eyebrow="Capabilities"
        title="Everything we bring to the table"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card bg-white">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-800">
              Services
            </h3>
            <ul className="mt-4 grid gap-2">
              {content.services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/service/${s.slug}`}
                    className="link-target text-sm font-semibold text-ink-600 transition hover:text-brand-800"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="card bg-white">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-800">
              Industries
            </h3>
            <ul className="mt-4 grid gap-2">
              {content.industries.map((i) => (
                <li key={i.slug}>
                  <Link
                    to={`/industries/${i.slug}`}
                    className="link-target text-sm font-semibold text-ink-600 transition hover:text-brand-800"
                  >
                    {i.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
