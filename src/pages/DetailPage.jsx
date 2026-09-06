import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import content from "../data/content.json";
import { solutions, DISCOVERY } from "../data/solutions";
import { imageFor } from "../data/media";
import ServiceIcon from "../components/ui/ServiceIcon";
import PageHero from "../components/ui/PageHero";
import Section from "../components/ui/Section";
import WhyList from "../components/ui/WhyList";
import WorkflowSteps from "../components/ui/WorkflowSteps";
import Reveal from "../components/ui/Reveal";
import ImageCard from "../components/ui/ImageCard";
import Seo from "../components/Seo";

/**
 * One renderer for all three detail collections. They share a shape:
 * hero + optional "why choose" bullets + optional workflow steps.
 */
const COLLECTIONS = {
  solution: { records: solutions, base: "/solutions", label: "Solutions" },
  service: { key: "services", base: "/service", label: "Services" },
  industry: { key: "industries", base: "/industries", label: "Industries" },
  technology: { key: "technologies", base: "/technology", label: "Technologies" },
};

export default function DetailPage({ kind }) {
  const { slug } = useParams();
  const config = COLLECTIONS[kind];
  const items = config.records || content[config.key];
  const item = items.find((x) => x.slug === slug);

  // Unknown slug: send the visitor to the listing rather than a dead end.
  if (!item) return <Navigate to={config.base} replace />;

  const siblings = items.filter((x) => x.slug !== item.slug).slice(0, 4);
  const need = kind === "solution" ? DISCOVERY.find((d) => d.value === item.fits?.[0]) : null;

  return (
    <>
      <Seo
        title={item.name}
        description={item.summary || item.heroSub}
        image={imageFor(item.slug)}
        type="article"
        schema={{
          "@context": "https://schema.org",
          "@type": kind === "service" ? "Service" : "WebPage",
          name: item.name,
          description: item.summary || item.heroSub,
          ...(kind === "service" ? { serviceType: item.name, provider: { "@type": "Organization", name: "Sahajanand Technologies LLC" } } : {}),
        }}
      />

      <PageHero
        image={imageFor(item.slug)}
        eyebrow={item.category || config.label}
        title={item.heroHead}
        subtitle={item.heroSub}
        crumbs={[
          { label: "Home", to: "/" },
          { label: config.label, to: config.base },
          { label: item.name },
        ]}
      >
        <Link
          to={item.fits?.[0] ? `/contact?need=${item.fits[0]}` : "/contact"}
          className="btn-glow"
        >
          {kind === "solution" ? "Start a project" : "Discuss your project"}
        </Link>
      </PageHero>

      {kind === "solution" && item.uses?.length > 0 && (
        <Section tone="tint" eyebrow="Where it applies" title="Practical uses">
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {item.uses.map((u) => (
              <li key={u} className="flex items-center gap-3 rounded-surface border border-ink-200 bg-white px-4 py-3.5 text-[15px] font-medium text-ink-800 shadow-card">
                <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-accent-500" />
                {u}
              </li>
            ))}
          </ul>
        </Section>
      )}

      {item.summary && (
        <Section>
          <Reveal>
            <p className="mx-auto max-w-4xl text-center text-2xl font-medium leading-snug tracking-tight text-ink-900 sm:text-3xl">
              {item.summary}
            </p>
          {need && (
            <p className="mt-6 text-center text-[15px] text-ink-500">
              On the contact form this is <span className="font-semibold text-ink-800">“{need.label}”</span>.
            </p>
          )}
          </Reveal>
        </Section>
      )}

      {item.why?.length > 0 && (
        <Section
          tone="tint"
          eyebrow={kind === "solution" ? "What you get" : "Why it matters"}
          title={item.whyTitle?.replace(/\?$/, "") || (kind === "solution" ? "What it does for the business" : `Why choose ${item.name}`)}
        >
          <WhyList items={item.why} />
        </Section>
      )}

      {item.workflow?.length > 0 && (
        <Section
          tone="dark"
          eyebrow="How we work"
          title={item.workflowTitle || (kind === "solution" ? "How we deliver it" : `${item.name} workflow`)}
          intro="A predictable, staged delivery process, so you always know what happens next."
        >
          <WorkflowSteps steps={item.workflow} />
        </Section>
      )}

      {siblings.length > 0 && (
        <Section title={`More ${config.label.toLowerCase()}`}>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {siblings.map((s, i) => (
              <Reveal key={s.slug} delay={60 * i} className="h-full">
                {kind === "solution" ? (
                  <Link to={`${config.base}/${s.slug}`} className="card card-hover group flex h-full flex-col">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-surface bg-brand-50 text-brand-600 ring-1 ring-inset ring-brand-100 transition-colors group-hover:bg-brand-600 group-hover:text-white group-hover:ring-brand-600">
                      <ServiceIcon slug={s.icon} className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-display text-[17px] font-semibold leading-snug text-ink-900">{s.name}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">{s.short}</p>
                  </Link>
                ) : (
                <ImageCard
                  to={`${config.base}/${s.slug}`}
                  image={imageFor(s.slug)}
                  title={s.name}
                  text={s.summary || s.heroSub}
                  ratio="aspect-[3/2]"
                />
                )}
              </Reveal>
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
