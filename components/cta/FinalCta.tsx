import type { Dictionary } from "@/content";
import { contact } from "@/content/gosafe";
import { Icon } from "@/components/ui/Icon";
import { Rich } from "@/components/ui/SectionHeading";
import { delay } from "@/lib/motion";

export function FinalCta({ t }: { t: Dictionary }) {
  const { finalCta, organization } = t;
  const hasDirectContact = Boolean(contact.email || contact.phone);

  return (
    <section id="partenaires" aria-labelledby="cta-title" className="bg-white py-[clamp(4rem,8vw,7rem)]">
      <div className="shell">
        <div
          data-reveal="clip"
          data-motion-zone
          className="relative isolate overflow-hidden rounded-2xl bg-navy-950 px-6 py-14 text-white sm:px-12 sm:py-20 lg:px-16 lg:py-24"
        >
          {/* Converging road lines motif */}
          <svg
            aria-hidden="true"
            viewBox="0 0 800 400"
            preserveAspectRatio="none"
            className="absolute inset-y-0 right-0 -z-10 h-full w-full opacity-40 lg:w-3/5"
          >
            <path d="M800 400 520 0M640 400 500 0" stroke="rgb(141 178 242 / 0.35)" strokeWidth="1.5" fill="none" />
            <path d="M720 400 510 0" stroke="rgb(255 255 255 / 0.6)" strokeWidth="2" fill="none" className="flow-line" />
          </svg>

          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-brand-300">
                <span className="text-accent-500">07</span> — {finalCta.eyebrow}
              </p>
              <h2
                id="cta-title"
                className="mt-5 text-[clamp(2.1rem,5vw,4rem)] font-semibold leading-[1.02] tracking-[-0.035em]"
              >
                <Rich parts={finalCta.title} />
              </h2>
              <p className="mt-6 max-w-xl text-brand-100/80 sm:text-lg">{finalCta.intro}</p>
              <ul className="mt-8 flex flex-wrap gap-2" aria-label={finalCta.audienceAria}>
                {t.about.audience.map((a, i) => (
                  <li
                    key={a}
                    className="reveal-child rounded-full border border-white/15 px-3.5 py-1.5 text-sm text-brand-100"
                    style={delay(500 + i * 60)}
                  >
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand-300">{finalCta.contactTitle}</p>

                <dl className="mt-6 space-y-5">
                  <ContactRow icon="location" term={finalCta.headquarters} value={organization.headquarters} />
                  {contact.address && <ContactRow icon="location" term={finalCta.address} value={contact.address} />}
                  {contact.email && (
                    <ContactRow icon="message" term={finalCta.email} value={contact.email} href={`mailto:${contact.email}`} />
                  )}
                  {contact.phone && (
                    <ContactRow icon="message" term={finalCta.phone} value={contact.phone} href={`tel:${contact.phone.replace(/\s/g, "")}`} />
                  )}
                </dl>

                {contact.email ? (
                  <a
                    href={`mailto:${contact.email}`}
                    className="group mt-8 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-accent-500 px-6 text-sm font-semibold text-navy-950 transition-colors duration-300 hover:bg-accent-600 hover:text-white"
                  >
                    {finalCta.write}
                    <Icon name="arrow" className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                ) : null}

                {/* TODO(content): official e-mail, phone and address are not in the source document — set them in content/gosafe.ts. */}
                {!hasDirectContact && (
                  <p className="mt-8 border-t border-white/10 pt-6 text-sm leading-relaxed text-brand-100/70">
                    {finalCta.comingSoon}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  term,
  value,
  href,
}: {
  icon: "location" | "message";
  term: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex gap-4">
      <Icon name={icon} className="mt-0.5 size-5 shrink-0 text-accent-500" />
      <div>
        <dt className="text-xs text-brand-100/60">{term}</dt>
        <dd className="mt-0.5 font-medium">
          {href ? (
            <a href={href} className="underline-offset-4 hover:underline">
              {value}
            </a>
          ) : (
            value
          )}
        </dd>
      </div>
    </div>
  );
}
