import React from "react";
import Reveal from "./Reveal";

/**
 * Process steps on a dark canvas, laid out as a connected timeline so the
 * ordering reads as a sequence rather than an unordered grid.
 */
export default function WorkflowSteps({ steps = [] }) {
  if (!steps.length) return null;

  return (
    <ol className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {steps.map((step, i) => (
        <Reveal as="li" key={`${step.title}-${i}`} delay={60 * i} className="h-full">
          <div className="card-dark card-dark-hover group h-full">
            <div className="flex items-start gap-4">
              <span className="shrink-0 font-display text-2xl font-bold tabular-nums tracking-tight text-brand-300">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="pt-1 text-lg font-semibold leading-snug tracking-tight text-white">
                {step.title}
              </h3>
            </div>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-200/70">{step.desc}</p>

            {/* Hairline that fills on hover, reinforcing progression. */}
            <span
              aria-hidden="true"
              className="mt-6 block h-px w-full bg-white/10"
            >
              <span className="block h-px w-0 bg-gradient-to-r from-brand-400 to-brand-600 transition-all duration-700 group-hover:w-full" />
            </span>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}
