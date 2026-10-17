"use client";

import { Icon } from "@/components/ui/Icon";
import { locales, type Locale } from "@/lib/i18n";

type Props = {
  locale: Locale;
  /** Section to land on after switching, so the visitor keeps their place. */
  section: string;
  label: string;
  names: Record<Locale, string>;
  solid: boolean;
};

export function LanguageSwitcher({ locale, section, label, names, solid }: Props) {
  return (
    <div
      role="group"
      aria-label={label}
      className={`flex items-center gap-0.5 rounded-full border p-1 transition-colors duration-500 ${
        solid ? "border-line bg-surface" : "border-white/20 bg-navy-950/30"
      }`}
    >
      <Icon
        name="globe"
        className={`mx-1.5 hidden size-4 shrink-0 transition-colors duration-500 sm:block ${
          solid ? "text-brand-600" : "text-white/70"
        }`}
      />
      {locales.map((l) => {
        const current = l === locale;
        return (
          // A full page load keeps the scroll-reveal animations in sync with the new content.
          <a
            key={l}
            href={`/${l}#${section}`}
            hrefLang={l}
            lang={l}
            title={names[l]}
            aria-label={names[l]}
            aria-current={current ? "true" : undefined}
            onClick={current ? (e) => e.preventDefault() : undefined}
            className={`grid h-8 min-w-10 place-items-center rounded-full px-2.5 font-mono text-[0.72rem] font-semibold uppercase tracking-[0.14em] transition-colors duration-300 ${
              current
                ? "bg-accent-500 text-navy-950"
                : solid
                  ? "text-muted hover:bg-white hover:text-navy-900"
                  : "text-white/75 hover:bg-white/10 hover:text-white"
            }`}
          >
            {l}
          </a>
        );
      })}
    </div>
  );
}
