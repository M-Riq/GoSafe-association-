import Image from "next/image";
import type { Dictionary } from "@/content";
import { Icon } from "@/components/ui/Icon";
import { Rich, SectionHeading } from "@/components/ui/SectionHeading";
import { delay } from "@/lib/motion";
import fieldPhoto from "@/public/img6.jpeg";

export function About({ t }: { t: Dictionary }) {
  const { about, organization } = t;
  return (
    <section id="a-propos" aria-labelledby="about-title" className="section-y bg-white">
      <div className="shell grid gap-16 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-6">
          <SectionHeading
            index="01"
            eyebrow={about.eyebrow}
            id="about-title"
            title={<Rich parts={about.title} />}
            intro={about.intro}
          />

          <figure data-reveal style={delay(160)} className="group relative mb-6 mr-5 mt-12 sm:mb-8 sm:mr-8">
            <span
              aria-hidden="true"
              className="absolute -bottom-5 -right-5 left-12 top-12 rounded-2xl bg-brand-100 sm:-bottom-7 sm:-right-7"
            />
            <span aria-hidden="true" className="absolute -left-3 top-8 h-16 w-1 rounded-full bg-accent-500 sm:-left-4" />
            <div className="relative aspect-[1/1] overflow-hidden rounded-2xl bg-surface shadow-[0_30px_60px_-35px_rgb(11_44_99/0.55)] sm:aspect-[4/3]">
              <div className="absolute inset-0 transition-[scale] duration-700 ease-(--ease-premium) group-hover:scale-[1.03]">
                <Image
                  src={fieldPhoto}
                  alt={about.photoAlt}
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1280px) 600px, (min-width: 1024px) 46vw, 100vw"
                  className="reveal-zoom object-cover object-[50%_40%]"
                />
              </div>
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-2/5 bg-[linear-gradient(to_top,rgb(4_19_46/0.92),rgb(4_19_46/0.55)_45%,transparent)] sm:h-3/5"
              />
              <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-navy-900 sm:left-5 sm:top-5">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-safe-500" />
                {about.photoBadge}
              </span>
              <figcaption className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-7">
                <span className="hidden font-mono text-[0.65rem] uppercase tracking-[0.18em] text-brand-100/80 sm:block">
                  {about.photoKicker}
                </span>
                <span className="block max-w-md text-base font-semibold leading-snug sm:mt-1.5 sm:text-xl">
                  {about.photoCaption}
                </span>
              </figcaption>
            </div>
          </figure>

          <blockquote data-reveal style={delay(200)} className="mt-12 border-l-2 border-accent-500 pl-6">
            <p className="text-[clamp(1.5rem,2.6vw,2rem)] leading-snug text-accent-600">
              « {organization.conviction} »
            </p>
            <footer className="mt-3 font-mono text-xs uppercase tracking-[0.18em] text-subtle">
              {about.convictionFooter}
            </footer>
          </blockquote>

          <div data-reveal style={delay(250)} className="mt-12">
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-subtle">{about.audienceTitle}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {about.audience.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-line px-3.5 py-1.5 text-sm text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div data-reveal style={delay(300)} className="mt-10">
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-subtle">
              {about.collaborationsTitle}
            </h3>
            <ul className="mt-4 space-y-2 text-[0.95rem] text-ink">
              {about.collaborations.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2.5 h-px w-4 shrink-0 bg-brand-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-6 lg:pl-8">
          <figure
            data-reveal
            style={delay(120)}
            className="relative overflow-hidden rounded-2xl border border-line bg-surface p-6 sm:p-10 lg:sticky lg:top-28"
          >
            <figcaption className="flex items-baseline justify-between gap-4">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-brand-600">{about.approachTitle}</span>
              <span className="hidden font-mono text-xs text-subtle sm:inline">{about.approachCount}</span>
            </figcaption>

            <ol className="relative mt-6">
              <span
                aria-hidden="true"
                className="reveal-bar-y absolute bottom-6 left-[11px] top-6 w-px origin-top bg-brand-600/30"
              />
              {about.approachInputs.map((item, i) => (
                <li
                  key={item}
                  className="reveal-child relative flex items-center gap-5 border-b border-line py-4 last:border-b-0"
                  style={delay(250 + i * 90)}
                >
                  <span
                    aria-hidden="true"
                    className="relative grid size-6 shrink-0 place-items-center rounded-full border border-brand-600 bg-white"
                  >
                    <span className="size-2 rounded-full bg-brand-600" />
                  </span>
                  <span className="flex-1 text-lg font-medium tracking-tight text-navy-900 sm:text-xl">{item}</span>
                  {i < about.approachInputs.length - 1 && (
                    <span aria-hidden="true" className="font-mono text-lg text-brand-600">
                      +
                    </span>
                  )}
                </li>
              ))}
            </ol>

            <div className="reveal-child mt-6 rounded-xl bg-brand-700 p-6 text-white sm:p-7" style={delay(800)}>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand-100/80">{about.approachOutputsTitle}</p>
              <ul className="mt-4 space-y-3">
                {about.approachOutputs.map((item) => (
                  <li key={item} className="flex gap-3 text-[0.95rem] leading-snug">
                    <Icon name="arrow" className="mt-0.5 size-4 shrink-0 text-safe-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
