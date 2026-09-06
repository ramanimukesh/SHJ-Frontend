import React from "react";
import { Link, useLocation } from "react-router-dom";
import content from "../data/content.json";
import PageHero from "../components/ui/PageHero";
import Section from "../components/ui/Section";
import Seo from "../components/Seo";
import { hero } from "../data/media";

/**
 * Unknown routes used to `<Navigate to="/" replace />`, which is a soft 404:
 * the visitor lands on the home page with no idea their link was wrong, their
 * back button is broken by the replace, and a crawler records the bad URL as a
 * duplicate of the home page rather than as missing.
 *
 * This says what happened and offers the routes that do exist. `noindex` keeps
 * the URL out of the index without pretending it resolved.
 */
export default function NotFound() {
  const { pathname } = useLocation();

  const destinations = [
    { label: "Services", to: "/service", count: content.services.length },
    { label: "Industries", to: "/industries", count: content.industries.length },
    { label: "Technologies", to: "/technology", count: content.technologies.length },
  ];

  return (
    <>
      <Seo
        title="Page not found"
        description="That page does not exist. Browse STL's services, industries, and technologies instead."
        noindex
      />

      <PageHero
        image={hero}
        eyebrow="404"
        title="We couldn't find that page"
        subtitle={`Nothing lives at ${pathname}. It may have moved, or the link may have a typo. Here is everything that does exist.`}
        crumbs={[{ label: "Home", to: "/" }, { label: "Not found" }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link to="/" className="btn-glow">
            Back to home
          </Link>
          <Link to="/contact" className="btn-onDark">
            Contact us
          </Link>
        </div>
      </PageHero>

      <Section title="Where you might have been headed">
        <ul className="grid gap-5 sm:grid-cols-3">
          {destinations.map((d) => (
            <li key={d.to}>
              <Link to={d.to} className="card card-hover group flex h-full flex-col">
                <h3 className="h-card">{d.label}</h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-600">
                  {d.count} {d.label.toLowerCase()} we work across.
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
                  Browse
                  <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                    &rarr;
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
