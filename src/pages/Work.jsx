import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import content from "../data/content.json";
import { work, bySlug, hasDetails } from "../data/work";
import { hero, imageFor } from "../data/media";
import PageHero from "../components/ui/PageHero";
import Section from "../components/ui/Section";
import Reveal from "../components/ui/Reveal";
import Seo from "../components/Seo";

/**
 * "Built for Real Business."
 *
 * Every client here has approved being named. What each page can say about
 * the engagement itself depends on whether STL has supplied the facts — see
 * the note at the top of work.js. Until then the page describes the business,
 * what its operation has to manage, and the kinds of system STL builds for
 * that industry: all true, none of it a claim about what shipped.
 */

function DraftBadge() {
  return <span className="badge border-gold-200 bg-gold-50 text-gold-800">Draft, not yet approved</span>;
}

export function WorkList() {
  return (
    <>
      <Seo
        title="Our work"
        description="Businesses Sahajanand Technologies has worked with, and the operations their systems support."
      />

      <PageHero
        image={hero}
        eyebrow="Our work"
        title="Built for Real Business"
        subtitle="Operating businesses with inventory to track, matters to run, jobs to schedule, customers to serve and reports to produce, and the systems that keep them moving."
        crumbs={[{ label: "Home", to: "/" }, { label: "Our work" }]}
      />

      <Section>
        <ul className="grid gap-5 lg:grid-cols-2">
          {work.map((w, i) => (
            <Reveal as="li" key={w.slug} delay={60 * i} className="h-full">
              <Link to={`/work/${w.slug}`} className="card card-hover group flex h-full flex-col p-7 sm:p-8">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-label uppercase text-brand-600">{w.industryLabel}</span>
                  {!w.approved && <span className="ml-auto"><DraftBadge /></span>}
                </div>
                <h2 className="mt-4 font-display text-[26px] font-semibold leading-tight tracking-tight text-ink-900">
                  {w.client}
                </h2>
                {w.headline && (
                  <p className="mt-2 text-[15px] font-semibold text-brand-700">{w.headline}</p>
                )}
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-600">{w.business}</p>
                <span className="mt-6 inline-flex items-center gap-2 border-t border-ink-100 pt-5 text-sm font-semibold text-brand-600">
                  Read the case study
                  <span className="transition-transform duration-300 group-hover:translate-x-1.5">&rarr;</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Section>
    </>
  );
}

function Block({ label, children }) {
  return (
    <div className="grid gap-3 border-t border-ink-200 py-8 md:grid-cols-[14rem_1fr] md:gap-10">
      <h2 className="text-label uppercase text-brand-600">{label}</h2>
      <div className="text-[17px] leading-relaxed text-ink-700">{children}</div>
    </div>
  );
}

export function WorkDetail() {
  const { slug } = useParams();
  const item = bySlug(slug);
  if (!item) return <Navigate to="/work" replace />;

  const industry = content.industries.find((i) => i.slug === item.industry);

  return (
    <>
      <Seo
        title={`${item.client} case study`}
        description={item.business}
        image={imageFor(item.industry)}
        type="article"
        // A client who has not approved being named stays out of search.
        noindex={!item.approved}
      />

      <PageHero
        image={imageFor(item.industry)}
        eyebrow={item.industryLabel}
        title={item.client}
        // The full business description has its own block below; the hero
        // carries the engagement headline, or the opening sentence until
        // there is one, so the same paragraph is not read three times.
        subtitle={item.headline || item.business.split(/(?<=\.)\s/)[0]}
        crumbs={[{ label: "Home", to: "/" }, { label: "Our work", to: "/work" }, { label: item.client }]}
      >
        <div className="flex flex-wrap items-center gap-3">
          {industry && (
            <Link to={`/industries/${industry.slug}`} className="btn-onDark">
              How we build for {industry.name}
            </Link>
          )}
          <a href={item.website} target="_blank" rel="noreferrer noopener" className="btn-onDark">
            {item.client}&apos;s website ↗
          </a>
        </div>
      </PageHero>

      <section className="py-16 sm:py-20">
        <div className="container-page max-w-4xl">
          {!item.approved && (
            <div className="mb-8 flex flex-wrap items-center gap-3 rounded-surface border border-gold-200 bg-gold-50 px-5 py-4 text-[15px] leading-relaxed text-gold-900">
              <DraftBadge />
              <span>This page is a draft and is not indexed until {item.client} has approved it.</span>
            </div>
          )}

          <Block label="The business">
            <p>{item.business}</p>
          </Block>

          <Block label="What the operation manages">
            <ul className="grid gap-2 sm:grid-cols-2">
              {item.operations.map((o) => (
                <li key={o} className="flex items-start gap-2.5">
                  <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </Block>

          {hasDetails(item) ? (
            <>
              {item.challenge && (
                <Block label="The challenge"><p>{item.challenge}</p></Block>
              )}
              {item.solution && (
                <Block label="The solution"><p>{item.solution}</p></Block>
              )}
              {item.result && (
                <Block label="The result"><p>{item.result}</p></Block>
              )}
            </>
          ) : (
            industry && (
              /* No engagement facts on file yet, so the page says what STL
                 builds for this kind of operation — the industry page's own
                 list — rather than inventing what shipped here. */
              <Block label={`What we build for ${industry.name.toLowerCase().replace(" & ", " and ")}`}>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {industry.workflow.map((w) => (
                    <li key={w.title} className="rounded-surface border border-ink-200 bg-white p-4 shadow-card">
                      <p className="font-display text-[15px] font-semibold text-ink-900">{w.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-ink-600">{w.desc}</p>
                    </li>
                  ))}
                </ul>
              </Block>
            )
          )}

          {item.technology.length > 0 && (
            <Block label="Technology">
              <ul className="flex flex-wrap gap-2">
                {item.technology.map((t) => (
                  <li key={t} className="chip chip-tech">{t}</li>
                ))}
              </ul>
            </Block>
          )}

          <div className="mt-10 flex flex-wrap gap-3 border-t border-ink-200 pt-8">
            <Link to="/contact" className="btn-primary">Start a project</Link>
            <Link to="/work" className="btn-ghost">All work</Link>
          </div>
        </div>
      </section>
    </>
  );
}
