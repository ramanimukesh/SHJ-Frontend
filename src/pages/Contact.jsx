import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { userContact } from "../http/api";
import { company } from "../data/site";
import { hero } from "../data/media";
import { DISCOVERY, bySlug } from "../data/solutions";
import PageHero from "../components/ui/PageHero";
import Seo from "../components/Seo";

const EMPTY = { name: "", company: "", email: "", need: "", timeline: "", message: "" };

const TIMELINES = [
  { value: "", label: "Not sure yet" },
  { value: "asap", label: "As soon as possible" },
  { value: "1-3-months", label: "In the next 1–3 months" },
  { value: "3-6-months", label: "In 3–6 months" },
  { value: "exploring", label: "Just exploring" },
];

/**
 * Deliberately permissive: this only has to catch the obvious typo before the
 * request goes out. Anything stricter starts rejecting addresses that work.
 */
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate({ name, email, message }) {
  const errors = {};
  if (!name.trim()) errors.name = "Please tell us your name.";
  if (!email.trim()) errors.email = "We need an email address to reply to.";
  else if (!EMAIL.test(email.trim())) errors.email = "That does not look like an email address.";
  if (!message.trim()) errors.message = "A sentence or two about what you are trying to improve.";
  else if (message.trim().length < 10) errors.message = "A little more detail helps us route this to the right person.";
  return errors;
}

const labelFor = (list, value) => list.find((o) => o.value === value)?.label || "";

/**
 * The backend (STL-Backend src/model/contact.js) stores name, email and
 * message only. Rather than change the API to add three columns, the extra
 * fields are folded into the message as labelled lines — the team reads the
 * enquiry as one block either way, and nothing is lost.
 */
function composeMessage(form) {
  const lines = [];
  if (form.company.trim()) lines.push(`Company: ${form.company.trim()}`);
  if (form.need) lines.push(`Need: ${labelFor(DISCOVERY, form.need)}`);
  if (form.timeline) lines.push(`Timeline: ${labelFor(TIMELINES, form.timeline)}`);
  return lines.length ? `${lines.join("\n")}\n\n${form.message.trim()}` : form.message.trim();
}

export default function Contact() {
  const { search } = useLocation();
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ state: "idle", message: "" });
  const formRef = useRef(null);

  // "Tell us what you're trying to improve" chips land here with ?need=…,
  // so the visitor arrives at a form that already knows why they came.
  useEffect(() => {
    const need = new URLSearchParams(search).get("need");
    if (need && DISCOVERY.some((d) => d.value === need)) {
      setForm((prev) => ({ ...prev, need }));
    }
  }, [search]);

  const update = (field) => (e) => {
    const { value } = e.target;
    setForm((prev) => ({ ...prev, [field]: value }));
    // Clear a field's error as soon as it is being corrected — leaving it up
    // while the user types reads as though the fix is not registering.
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));
  };

  const handleSubmit = async (e) => {
    // Must run before the await, or the browser navigates mid-request.
    e.preventDefault();

    // The form carries `noValidate`, which switches off the browser's own
    // enforcement of `required`; this is the replacement — the same rules,
    // surfaced next to the field that broke them.
    const found = validate(form);
    if (Object.keys(found).length > 0) {
      setErrors(found);
      setStatus({ state: "idle", message: "" });
      formRef.current?.querySelector(`[name="${Object.keys(found)[0]}"]`)?.focus();
      return;
    }

    setErrors({});
    setStatus({ state: "sending", message: "" });
    try {
      await userContact({
        name: form.name.trim(),
        email: form.email.trim(),
        message: composeMessage(form),
      });
      setForm(EMPTY);
      setStatus({
        state: "success",
        message: "Thanks, your message is with us. We'll be in touch shortly.",
      });
    } catch (err) {
      setStatus({
        state: "error",
        message:
          err?.response?.data?.message ||
          `We couldn't send that just now. Please try again, or email us directly at ${company.email}.`,
      });
    }
  };

  const sending = status.state === "sending";

  /** Wires a field to its error message and to the input's error styling. */
  const fieldProps = (name) => ({
    name,
    id: name,
    value: form[name],
    onChange: update(name),
    disabled: sending,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });

  const selectedNeed = DISCOVERY.find((d) => d.value === form.need);

  return (
    <>
      <Seo
        title="Start a project"
        description={`Tell ${company.short} what you are trying to improve and we will come back with the shape of an engagement. Call ${company.phone} or email ${company.email}.`}
        schema={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: `Contact ${company.name}`,
          mainEntity: {
            "@type": "Organization",
            name: company.name,
            telephone: company.phone,
            email: company.email,
          },
        }}
      />

      <PageHero
        image={hero}
        eyebrow="Start a project"
        title="Let's talk about your project"
        subtitle="Tell us what you are trying to improve. You will hear back from a person, with questions and a suggested shape for the work, not a brochure."
        crumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />

      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            <form ref={formRef} onSubmit={handleSubmit} noValidate className="card p-7 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="form-label">
                    Name <span className="form-required" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    autoComplete="name"
                    className={`input ${errors.name ? "input-error" : ""}`}
                    placeholder="Your name"
                    {...fieldProps("name")}
                  />
                  <FieldError id="name-error" message={errors.name} />
                </div>

                <div>
                  <label htmlFor="company" className="form-label">
                    Company <span className="font-normal text-ink-500">(optional)</span>
                  </label>
                  <input
                    type="text"
                    autoComplete="organization"
                    className="input"
                    placeholder="Where you work"
                    {...fieldProps("company")}
                  />
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="email" className="form-label">
                  Email <span className="form-required" aria-hidden="true">*</span>
                </label>
                <input
                  type="email"
                  required
                  autoComplete="email"
                  className={`input ${errors.email ? "input-error" : ""}`}
                  placeholder="you@company.com"
                  {...fieldProps("email")}
                />
                <FieldError id="email-error" message={errors.email} />
              </div>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="need" className="form-label">
                    What do you need help with?
                  </label>
                  <select className="select" {...fieldProps("need")}>
                    <option value="">Choose the closest fit</option>
                    {DISCOVERY.map((d) => (
                      <option key={d.value} value={d.value}>{d.label}</option>
                    ))}
                  </select>
                  {selectedNeed?.solution && (
                    <span className="form-hint">
                      We would usually approach this as{" "}
                      <Link to={`/solutions/${selectedNeed.solution}`} className="link-target font-medium text-brand-700 hover:underline">
                        {bySlug(selectedNeed.solution)?.name}
                      </Link>
                      .
                    </span>
                  )}
                </div>

                <div>
                  <label htmlFor="timeline" className="form-label">
                    Timeline <span className="font-normal text-ink-500">(optional)</span>
                  </label>
                  <select className="select" {...fieldProps("timeline")}>
                    {TIMELINES.map((t) => (
                      <option key={t.value} value={t.value}>{t.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="form-label">
                  Tell us about it <span className="form-required" aria-hidden="true">*</span>
                </label>
                <textarea
                  rows={6}
                  required
                  className={`textarea ${errors.message ? "input-error" : ""}`}
                  placeholder="What the business does, what is slow or manual today, and what better would look like. Rough is fine."
                  {...fieldProps("message")}
                />
                <FieldError id="message-error" message={errors.message} />
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <button type="submit" className="btn-primary" disabled={sending}>
                  {sending ? "Sending…" : "Send it to the team"}
                </button>

                {/* aria-live so screen readers announce the result */}
                <p
                  aria-live="polite"
                  className={
                    status.state === "success"
                      ? "form-message-success"
                      : status.state === "error"
                      ? "form-message-error"
                      : "form-message text-ink-500"
                  }
                >
                  {status.message}
                </p>
              </div>
            </form>
          </div>

          {/* Contact details */}
          <div className="lg:col-span-2">
            <div className="card bg-ink-50">
              <h2 className="text-lg font-semibold text-ink-900">Prefer to call or email?</h2>

              <dl className="mt-5 space-y-5 text-sm">
                <div>
                  <dt className="text-[13px] font-semibold uppercase tracking-[0.08em] text-ink-500">Call us</dt>
                  <dd className="mt-1">
                    <a href={`tel:${company.phone}`} className="link-target font-medium text-brand-700 hover:underline">
                      {company.phone}
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="text-[13px] font-semibold uppercase tracking-[0.08em] text-ink-500">Email us</dt>
                  <dd className="mt-1">
                    <a href={`mailto:${company.email}`} className="link-target break-all font-medium text-brand-700 hover:underline">
                      {company.email}
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="text-[13px] font-semibold uppercase tracking-[0.08em] text-ink-500">Company</dt>
                  <dd className="mt-1 font-semibold text-ink-600">{company.name}</dd>
                </div>
              </dl>
            </div>

            {/* NOTE: describes STL's intake process in general terms and
                deliberately promises no response time — confirm the wording,
                and add a real turnaround here if you want to commit to one. */}
            <div className="card mt-5">
              <h2 className="text-lg font-semibold text-ink-900">What happens next</h2>
              <ol className="mt-5 space-y-4">
                {[
                  ["A person reads it", "Enquiries go to the team, not to an autoresponder."],
                  ["We ask the obvious questions", "Scope, timeline, what already exists, and who uses it."],
                  ["We propose a shape", "The engagement we would actually recommend, even if it is a smaller one."],
                ].map(([title, text], i) => (
                  <li key={title} className="flex gap-3.5">
                    <span
                      aria-hidden="true"
                      className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full
                                 bg-brand-50 font-display text-[11px] font-bold tabular-nums text-brand-700
                                 ring-1 ring-inset ring-brand-100"
                    >
                      {i + 1}
                    </span>
                    <span>
                      <strong className="block text-[15px] font-semibold text-ink-900">{title}</strong>
                      <span className="text-sm leading-relaxed text-ink-600">{text}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function FieldError({ id, message }) {
  if (!message) return null;
  return (
    <p id={id} className="form-message-error mt-1.5">
      {message}
    </p>
  );
}
