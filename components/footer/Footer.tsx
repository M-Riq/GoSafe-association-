import type { ReactNode } from "react";
import Image from "next/image";
import type { Dictionary } from "@/content";
import { contact, sectionIds } from "@/content/gosafe";
import { Icon } from "@/components/ui/Icon";
import logoMark from "@/public/logo2.png";

export function Footer({ t }: { t: Dictionary }) {
  const { footer, organization } = t;
  const navigation = sectionIds.map((id, i) => ({ id, label: t.navigation[i] }));
  const sections = Object.entries(footer.sections).map(([id, label]) => ({ href: `#${id}`, label }));

  return (
    <footer className="bg-navy-950 text-white">
      <div className="shell grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-20">
        <div className="sm:col-span-2 lg:col-span-4">
          <a
            href="#accueil"
            className="inline-block rounded-full bg-white px-4 py-1.5"
            aria-label={`${organization.name} — ${footer.backHomeAria}`}
          >
            {/* Same emblem crop as the navbar: the source image has wide white margins. */}
            <span className="relative block aspect-[1040/430] h-16 overflow-hidden">
              <Image
                src={logoMark}
                alt=""
                sizes="240px"
                className="absolute left-[-11.5%] top-[-30.2%] h-auto w-[123.1%] max-w-none"
              />
            </span>
          </a>
          <p className="mt-6 max-w-xs text-2xl leading-snug text-white">
            « {organization.tagline} »
          </p>
        </div>

        <FooterColumn title={footer.navigation} className="lg:col-span-2">
          {navigation.map(({ id, label }) => (
            <li key={id}>
              <FooterLink href={`#${id}`}>{label}</FooterLink>
            </li>
          ))}
        </FooterColumn>

        <FooterColumn title={footer.discover} className="lg:col-span-2">
          {sections.map(({ href, label }) => (
            <li key={href}>
              <FooterLink href={href}>{label}</FooterLink>
            </li>
          ))}
        </FooterColumn>

        <div className="sm:col-span-2 lg:col-span-4">
          <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-brand-300">{footer.institution}</h2>
          <dl className="mt-5 space-y-3 text-sm text-brand-100/80">
            <div>
              <dt className="sr-only">{footer.status}</dt>
              <dd>{organization.legalStatus}.</dd>
            </div>
            <div className="flex gap-2">
              <dt>{footer.founded}</dt>
              <dd className="text-white">{organization.founded}</dd>
            </div>
            <div className="flex gap-2">
              <dt>{footer.headquarters}</dt>
              <dd className="text-white">{organization.headquarters}</dd>
            </div>
            {/* TODO(content): contact details are not in the source document — set them in content/gosafe.ts. */}
            {contact.email && (
              <div className="flex gap-2">
                <dt>{footer.email}</dt>
                <dd>
                  <a href={`mailto:${contact.email}`} className="text-white hover:underline">
                    {contact.email}
                  </a>
                </dd>
              </div>
            )}
            {contact.phone && (
              <div className="flex gap-2">
                <dt>{footer.phone}</dt>
                <dd className="text-white">{contact.phone}</dd>
              </div>
            )}
          </dl>
          {contact.socials.length > 0 && (
            <ul className="mt-6 flex flex-wrap gap-3">
              {contact.socials.map((s) => (
                <li key={s.href}>
                  <FooterLink href={s.href} external>
                    {s.label}
                  </FooterLink>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="shell flex flex-col gap-4 py-6 text-xs text-brand-100/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {organization.name}. {footer.rights}
          </p>
          <a href="#accueil" className="group inline-flex items-center gap-2 hover:text-white">
            {footer.backToTop}
            <Icon name="arrow" className="size-3.5 -rotate-90 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, className, children }: { title: string; className?: string; children: ReactNode }) {
  return (
    <nav aria-label={title} className={className}>
      <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-brand-300">{title}</h2>
      <ul className="mt-5 space-y-3 text-sm">{children}</ul>
    </nav>
  );
}

function FooterLink({ href, external, children }: { href: string; external?: boolean; children: ReactNode }) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="inline-flex min-h-8 items-center text-brand-100/80 transition-colors hover:text-white"
    >
      {children}
    </a>
  );
}
