import React from "react";
import { Link } from "react-router-dom";
import content from "../data/content.json";

import { imageFor, hero } from "../data/media";
import PageHero from "../components/ui/PageHero";
import Section from "../components/ui/Section";
import Reveal from "../components/ui/Reveal";
import ImageCard from "../components/ui/ImageCard";
import Seo from "../components/Seo";

/* The four business environments lead; the five sector pages that predate
   this positioning follow as "other sectors". */
const ENV = new Set(["real-estate-property-management", "construction", "professional-services", "small-mid-sized-businesses"]);
const environments = content.industries.filter((i) => ENV.has(i.slug));
const sectors = content.industries.filter((i) => !ENV.has(i.slug));

export default function Industries() {
  return (
    <>
      <Seo
        title="Industries"
        description="Tailored digital solutions for healthcare, finance, e-commerce, education, and digital banking — built around the regulations and workflows each sector actually runs on."
      />

      <PageHero
        image={hero}
        eyebrow="Industries we serve"
        title="We Understand the Business Behind the Software"
        subtitle="Different operations need different systems. These are the business environments we build for, what each has to manage, and the kinds of systems that manage it."
        crumbs={[{ label: "Home", to: "/" }, { label: "Industries" }]}
      />

      <Section
        eyebrow="Business environments"
        title="Where operations software matters most"
      >
        <ul className="grid gap-5 md:grid-cols-2">
          {environments.map((ind, i) => (
            <Reveal as="li" key={ind.slug} delay={60 * i} className="h-full">
              <Link to={`/industries/${ind.slug}`} className="card card-hover group flex h-full flex-col p-7 sm:p-8">
                <h3 className="font-display text-[24px] font-semibold leading-tight tracking-tight text-ink-900">{ind.name}</h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-600">{ind.summary}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {ind.why.slice(0, 4).map((w) => (<li key={w.label} className="badge">{w.label}</li>))}
                </ul>
                <span className="mt-6 inline-flex items-center gap-2 border-t border-ink-100 pt-5 text-sm font-semibold text-brand-600">
                  What we build here
                  <span className="transition-transform duration-300 group-hover:translate-x-1.5">&rarr;</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section
        tone="tint"
        eyebrow="Other sectors"
        title="Sectors we also build for"
        intro="Digital products and platforms in regulated and consumer-facing sectors."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {sectors.map((ind, i) => (
            <Reveal key={ind.slug} delay={70 * i} className="h-full">
              <ImageCard
                to={`/industries/${ind.slug}`}
                image={imageFor(ind.slug)}
                label={`0${i + 1}`}
                title={ind.name}
                text={ind.summary}
              />
            </Reveal>
          ))}

          {/* Five industries in a 3-up grid leave a hole in the second row. The
              home page balances the same grid with a trailing tile; matching it
              here keeps the listing and the home section consistent. */}
          <Reveal delay={70 * content.industries.length} className="h-full">
            <Link
              to="/contact"
              className="group flex h-full min-h-[16rem] flex-col justify-between rounded-surface bg-brand-700 p-7 text-white transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-lift"
            >
              <div>
                <p className="font-sans text-label uppercase text-brand-200">
                  Another sector?
                </p>
                <p className="mt-4 font-display text-2xl font-semibold leading-tight tracking-tight">
                  We have probably built for it
                </p>
                <p className="mt-4 text-[15px] leading-relaxed text-white/75">
                  These five are where we work most, not the limit of what we take on.
                </p>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                Talk to us
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
