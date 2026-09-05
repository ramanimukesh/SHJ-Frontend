import React from "react";
import { Link } from "react-router-dom";
import { hero } from "../data/media";
import { CATEGORIES, SHOWCASE, UNIQUE_TECH_COUNT } from "../data/stack";
import PageHero from "../components/ui/PageHero";
import Section from "../components/ui/Section";
import TechStack from "../components/ui/TechStack";
import TechIcon, { brandColor } from "../components/ui/TechIcon";
import Marquee from "../components/ui/Marquee";
import Reveal from "../components/ui/Reveal";
import Seo from "../components/Seo";

/* Named here rather than in stack.js: these are a claim about how we engage,
   not part of the technology data, and they belong next to the page that
   makes the claim. */
const PRINCIPLES = [
  {
    title: "Chosen for your situation, not our habits",
    text: "If your team already runs .NET on Azure, that is the right answer for you — and we build in it rather than talking you onto our preferred stack.",
  },
  {
    title: "Hireable and hostable in five years",
    text: "Every platform here has a deep talent pool and a clear hosting story. Nothing on this page leaves you dependent on the two people who built it.",
  },
  {
    title: "You own the result",
    text: "Source, infrastructure definitions and documentation are handed over. The stack is a decision you can revisit without us.",
  },
];

export default function Technologies() {
  return (
    <>
      <Seo
        title="Technology stack"
        description={`The technologies Sahajanand Technologies builds on — ${UNIQUE_TECH_COUNT} across ${CATEGORIES.length} disciplines, from React, Angular and .NET to Azure, AWS, Kubernetes, PostgreSQL, TensorFlow and Power BI.`}
        schema={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Sahajanand Technologies — technology stack",
          numberOfItems: UNIQUE_TECH_COUNT,
          itemListElement: CATEGORIES.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: c.label,
            description: `${c.blurb} ${c.items.map((t) => t.name).join(", ")}.`,
          })),
        }}
      />

      <PageHero
        image={hero}
        eyebrow="Technology ecosystem"
        title="One team across the modern software stack"
        subtitle="Web, mobile, cloud, data and AI — engineered, tested and shipped by the same people, so the parts of your system actually fit together."
        crumbs={[{ label: "Home", to: "/" }, { label: "Technology" }]}
      >
        <dl className="flex flex-wrap gap-x-10 gap-y-6">
          {[
            [UNIQUE_TECH_COUNT, "Technologies we build with"],
            [CATEGORIES.length, "Disciplines under one roof"],
            ["1", "Team accountable for all of it"],
          ].map(([value, label]) => (
            <div key={label}>
              <dt className="sr-only">{label}</dt>
              <dd>
                <span className="block font-display text-4xl font-bold tabular-nums tracking-tight text-white">
                  {value}
                </span>
                <span className="mt-1 block text-[13px] font-medium text-white/60">{label}</span>
              </dd>
            </div>
          ))}
        </dl>

        {/* The named products, scrolling. Marks keep their own colour on white
            tiles — the one place on the page they are shown all together, and
            the quickest proof that the list below is real. */}
        <Marquee
          items={SHOWCASE}
          className="mt-12"
          renderItem={(t) => (
            <span
              style={{ "--tech": brandColor(t) || "#0f172a" }}
              title={t.name}
              className="flex h-14 w-14 items-center justify-center rounded-surface bg-white/95 text-[color:var(--tech)] shadow-card"
            >
              <TechIcon tech={t} className="h-7 w-7" />
              <span className="sr-only">{t.name}</span>
            </span>
          )}
        />
      </PageHero>

      <Section
        id="stack"
        tone="paper"
        eyebrow="The stack"
        title="Every layer of a modern system, under one roof"
        intro="Grouped by what each discipline is for, so you can check the one you came to check. Pick a discipline for the detail, or search for the tool your team already runs."
      >
        <TechStack />
      </Section>

      <Section
        eyebrow="How we choose"
        title="A stack is a maintenance commitment, not a preference"
        intro="Three rules decide what goes into a build. They are the reason this list is broad rather than opinionated."
      >
        <ul className="grid gap-5 md:grid-cols-3">
          {PRINCIPLES.map((p, i) => (
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
        </ul>
      </Section>

      <Section tone="brand" align="center" title="Running something that is not on this list?">
        <Reveal className="text-center">
          <p className="mx-auto max-w-2xl text-[17px] leading-relaxed text-white/75">
            Most of our work starts inside an estate someone else built. Tell us what it runs on
            and we will tell you honestly whether we are the right team for it.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="btn-glow">
              Talk to an engineer
            </Link>
            <Link to="/solutions" className="btn-onDark">
              See what we build
            </Link>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
