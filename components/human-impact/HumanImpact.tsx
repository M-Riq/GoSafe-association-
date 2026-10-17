import Image from "next/image";
import type { Dictionary } from "@/content";
import { victimSupportIcons } from "@/content/gosafe";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Icon } from "@/components/ui/Icon";
import { Rich, SectionHeading } from "@/components/ui/SectionHeading";
import { delay } from "@/lib/motion";
import fieldPhoto from "@/public/img2.jpeg";

export function HumanImpact({ t }: { t: Dictionary }) {
  const { humanImpact, citizenEngagement, organization } = t;
  return (
    <section
      id="engagement"
      aria-labelledby="human-title"
      className="bg-surface lg:grid lg:min-h-svh lg:grid-cols-2 lg:items-stretch"
    >
     

      {/* lg+: max-w is half the shell width so the right edge lines up with the other sections */}
      <div className="shell section-y flex flex-col justify-center lg:ml-0 lg:max-w-[40rem] lg:pl-12 xl:pl-16">
        <SectionHeading
          index="08"
          eyebrow={humanImpact.eyebrow}
          id="human-title"
          title={<Rich parts={humanImpact.title} />}
          intro={humanImpact.intro}
        />

        <div data-reveal className="relative mt-14 md:mt-16 lg:mt-14">
          <span
            aria-hidden="true"
            className="reveal-bar absolute left-0 right-0 top-6 hidden h-px origin-left bg-brand-500/40 md:block lg:hidden"
            style={delay(200)}
          />
          <span
            aria-hidden="true"
            className="reveal-bar-y absolute bottom-6 left-6 top-6 w-px origin-top bg-brand-500/40 md:hidden lg:block"
            style={delay(200)}
          />
          <ol className="relative grid gap-10 md:grid-cols-3 md:gap-8 lg:grid-cols-1 lg:gap-10">
            {humanImpact.victimSupport.map((step, i) => (
              <li
                key={step.title}
                className="reveal-child relative flex gap-6 md:block lg:flex"
                style={delay(300 + i * 180)}
              >
                <span className="relative z-10 grid size-12 shrink-0 place-items-center rounded-full border border-brand-500 bg-white text-brand-700">
                  <Icon name={victimSupportIcons[i]} className="size-5" />
                </span>
                <div className="md:mt-8 md:pr-6 lg:mt-0 lg:pr-0">
                  <p className="font-mono text-xs text-subtle">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight text-navy-900">{step.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div
          data-reveal
          className="mt-16 grid overflow-hidden rounded-2xl bg-white ring-1 ring-line md:mt-20 md:grid-cols-12 lg:mt-16 lg:grid-cols-1"
        >
          <div className="p-7 sm:p-10 md:col-span-7 lg:col-span-1 xl:p-12">
            <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-brand-700">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-brand-500" />
              {citizenEngagement.title}
            </p>
            <h3 className="mt-5 text-[clamp(1.6rem,3vw,2.4rem)] font-semibold leading-tight tracking-[-0.02em] text-navy-900">
              <Rich parts={humanImpact.citizenTitle} />
            </h3>
            <p className="mt-5 max-w-xl leading-relaxed text-muted">{citizenEngagement.description}</p>
            <ul className="mt-5 space-y-2.5">
              {citizenEngagement.actions.map((action) => (
                <li key={action} className="flex gap-3 text-ink">
                  <Icon name="arrow" className="mt-1 size-4 shrink-0 text-brand-700" />
                  {action}
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <ButtonLink href="#contact" variant="ghost-dark">
                {humanImpact.cta}
              </ButtonLink>
            </div>
          </div>

          <div className="relative flex min-h-64 items-end overflow-hidden bg-brand-700 p-7 text-white sm:p-10 md:col-span-5 lg:col-span-1 xl:p-12">
            <svg aria-hidden="true" viewBox="0 0 400 400" className="absolute inset-0 size-full opacity-30" preserveAspectRatio="xMidYMid slice">
              {[60, 110, 160, 210, 260].map((r) => (
                <circle key={r} cx="320" cy="80" r={r} fill="none" stroke="white" strokeWidth="1" />
              ))}
            </svg>
            <div className="relative">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand-100/80">{humanImpact.mottoLabel}</p>
              <p className="mt-4 text-[clamp(1.6rem,2.8vw,2.3rem)] leading-snug text-white font-bold">
                « {organization.tagline} »
              </p>
            </div>
          </div>
        </div>
      </div>
       {/* below lg the photo keeps its natural ratio (nothing cropped); at lg+ it covers the whole left half */}
      <div className="relative">
        <Image
          src={fieldPhoto}
          alt={humanImpact.photoAlt}
          placeholder="blur"
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="h-auto w-full object-cover object-center lg:absolute lg:inset-0 lg:h-full"
        />
      </div>
    </section>
  );
}
