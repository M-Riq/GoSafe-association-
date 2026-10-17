import Image from "next/image";
import type { Dictionary } from "@/content";
import { contactChannels } from "@/content/gosafe";
import { ContactForm } from "@/components/contact/ContactForm";
import { Icon } from "@/components/ui/Icon";
import { Rich, SectionHeading } from "@/components/ui/SectionHeading";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { delay } from "@/lib/motion";
import contactPhoto from "@/public/img10.jpeg";

export function Contact({ t }: { t: Dictionary }) {
  const { contact, organization } = t;
  return (
    <section id="contact" aria-labelledby="contact-title" className="relative isolate overflow-hidden bg-surface">
      {/* one single download: banner below lg, right ~38% of the section at lg+ */}
      <div
        aria-hidden="true"
        className="relative h-44 w-full overflow-hidden sm:h-56 lg:absolute lg:inset-y-0 lg:right-0 lg:-z-10 lg:h-auto lg:w-[38%]"
      >
        <Image
          src={contactPhoto}
          alt=""
          fill
          placeholder="blur"
          sizes="(min-width: 1024px) 40vw, 100vw"
          quality={40}
          className="scale-105 object-cover object-center opacity-70 blur-[3px]"
        />
        <div className="absolute inset-0 bg-linear-to-b from-surface/20 via-surface/50 to-surface lg:bg-linear-to-r lg:from-surface lg:via-surface/55 lg:to-surface/10" />
      </div>

      <div className="shell section-y">
        {/* lg+: wider than the image column so the panel overlaps the photo */}
        <div className="lg:w-[70%] xl:w-[74%]">
          <SectionHeading
            index="10"
            eyebrow={contact.eyebrow}
            id="contact-title"
            title={<Rich parts={contact.title} />}
            intro={contact.intro}
          />

          <div data-reveal className="mt-12 grid gap-6 md:mt-14 lg:grid-cols-12 lg:gap-7">
            <div
              className="reveal-child rounded-2xl bg-white p-6 ring-1 ring-line shadow-[0_30px_60px_-45px_rgb(11_44_99/0.45)] sm:p-8 lg:col-span-7 xl:p-10"
              style={delay(120)}
            >
              <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-brand-700">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-brand-500" />
                {contact.formKicker}
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-navy-900">{contact.formTitle}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {contact.requiredNote[0]}
                <span className="text-accent-700">*</span>
                {contact.requiredNote[1]}
              </p>
              <div className="mt-8">
                <ContactForm t={t.contactForm} email={contactChannels.email} />
              </div>
            </div>

            <div className="reveal-child flex flex-col gap-6 lg:col-span-5" style={delay(260)}>
              <div className="rounded-2xl bg-navy-950 p-6 text-white sm:p-8">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand-300">{contact.reachUs}</p>

                <dl className="mt-6 space-y-5">
                  {contactChannels.phones.map((phone, i) => (
                    <Channel key={phone.href} icon="phone" term={contact.phoneLabels[i]} value={phone.value} href={phone.href} />
                  ))}
                  <Channel
                    icon="mail"
                    term={contact.email}
                    value={contactChannels.email}
                    href={`mailto:${contactChannels.email}`}
                  />
                  <Channel icon="location" term={contact.headquarters} value={organization.headquarters} />
                </dl>

                {/* TODO(content): placeholder coordinates — update content/gosafe.ts with the official values. */}
                <p className="mt-7 border-t border-white/10 pt-5 text-xs leading-relaxed text-brand-100/60">
                  {organization.legalStatus}. {contact.interventionArea} {organization.interventionArea}.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 ring-1 ring-line sm:p-8">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand-700">{contact.followUs}</p>
                <ul className="mt-5 space-y-3">
                  {contactChannels.socials.map((social) => (
                    <li key={social.platform}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 rounded-xl border border-line p-3 transition-colors duration-300 hover:border-brand-300 hover:bg-brand-50"
                      >
                        <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-700 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                          <SocialIcon platform={social.platform} className="size-5" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold text-navy-900">{social.label}</span>
                          <span className="block truncate text-sm text-muted">{contact.socialHandles[social.platform]}</span>
                        </span>
                        <Icon
                          name="arrowUpRight"
                          className="ml-auto size-4 shrink-0 text-subtle transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-700"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm leading-relaxed text-muted">
                  « {organization.tagline} » — {contact.communityCall}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Channel({
  icon,
  term,
  value,
  href,
}: {
  icon: "phone" | "mail" | "location";
  term: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex gap-4">
      <Icon name={icon} className="mt-0.5 size-5 shrink-0 text-accent-500" />
      <div className="min-w-0">
        <dt className="text-xs text-brand-100/60">{term}</dt>
        <dd className="mt-0.5 truncate font-medium">
          {href ? (
            <a href={href} className="underline-offset-4 transition-colors duration-200 hover:text-accent-500 hover:underline">
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
