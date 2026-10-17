"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import type { Dictionary } from "@/content";
import { Icon } from "@/components/ui/Icon";

const field =
  "min-h-12 w-full rounded-lg border border-line bg-white px-4 text-sm text-ink transition-colors duration-200 placeholder:text-subtle hover:border-brand-300 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/25";

export function ContactForm({ t, email }: { t: Dictionary["contactForm"]; email: string }) {
  const [sent, setSent] = useState(false);

  // TODO(backend): replace this mailto hand-off with a server action once an endpoint exists.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const l = t.mailLabels;
    const body = [
      `${l.name} ${data.get("name")}`,
      `${l.organisation} ${data.get("organisation") || "—"}`,
      `${l.email} ${data.get("email")}`,
      `${l.phone} ${data.get("phone") || "—"}`,
      `${l.subject} ${data.get("subject")}`,
      "",
      String(data.get("message") ?? ""),
    ].join("\n");

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      `${t.mailSubjectPrefix} ${data.get("subject")}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex min-h-80 flex-col items-start justify-center">
        <span className="grid size-12 place-items-center rounded-full bg-brand-100 text-brand-700">
          <Icon name="shield" className="size-6" />
        </span>
        <h3 className="mt-6 text-xl font-semibold tracking-tight text-navy-900">{t.sentTitle}</h3>
        <p className="mt-3 max-w-md leading-relaxed text-muted">{t.sentText}</p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-full border border-navy-900/20 px-6 text-sm font-semibold text-navy-900 transition-colors duration-300 hover:border-navy-900 hover:bg-navy-900/3"
        >
          {t.sendAnother}
          <Icon name="arrow" className="size-4" />
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <Field label={t.name} required>
        <input type="text" name="name" required autoComplete="name" placeholder={t.namePlaceholder} className={field} />
      </Field>

      <Field label={t.organisation}>
        <input
          type="text"
          name="organisation"
          autoComplete="organization"
          placeholder={t.organisationPlaceholder}
          className={field}
        />
      </Field>

      <Field label={t.email} required>
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder={t.emailPlaceholder}
          className={field}
        />
      </Field>

      <Field label={t.phone}>
        <input type="tel" name="phone" autoComplete="tel" placeholder="+237 …" className={field} />
      </Field>

      <Field label={t.subject} required className="sm:col-span-2">
        <select name="subject" required defaultValue={t.subjects[0]} className={`${field} appearance-none pr-10`}>
          {t.subjects.map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </select>
      </Field>

      <Field label={t.message} required className="sm:col-span-2">
        <textarea
          name="message"
          required
          rows={5}
          placeholder={t.messagePlaceholder}
          className={`${field} resize-y py-3 leading-relaxed`}
        />
      </Field>

      <label className="flex gap-3 text-sm leading-relaxed text-muted sm:col-span-2">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 size-4 shrink-0 rounded border-line text-brand-600 accent-brand-600"
        />
        <span>
          {t.consent}
          <span className="text-accent-700"> *</span>
        </span>
      </label>

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-accent-500 px-6 text-sm font-semibold tracking-wide text-navy-950 transition-colors duration-300 hover:bg-accent-600 hover:text-white sm:w-auto"
        >
          {t.submit}
          <Icon
            name="arrow"
            className="size-4 transition-transform duration-300 ease-premium group-hover:translate-x-1"
          />
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  required,
  className = "",
  children,
}: {
  label: string;
  required?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-subtle">
        {label}
        {required && <span className="text-accent-700"> *</span>}
      </span>
      <span className="mt-2 block">{children}</span>
    </label>
  );
}
