import Image from "next/image";
import type { Dictionary } from "@/content";
import { keyFigures } from "@/content/gosafe";
import { Rich } from "@/components/ui/SectionHeading";
import { delay } from "@/lib/motion";
import forumPhoto from "@/public/img8.jpeg";
import { Counter } from "./Counter";

const TOTAL_REGIONS = 10;

export function Statistics({ t }: { t: Dictionary }) {
  const { statistics } = t;
  const figures = keyFigures.map((figure, i) => ({ ...figure, ...statistics.figures[i] }));
  return (
    <section
      id="chiffres"
      aria-labelledby="stats-title"
      className="relative isolate overflow-hidden bg-brand-50 text-navy-900 lg:grid lg:min-h-svh lg:grid-cols-2"
    >
      <div className="relative flex flex-col justify-center py-[clamp(4.5rem,9vw,7.5rem)]">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 opacity-60 [background-image:linear-gradient(to_right,rgb(7_31_71/0.06)_1px,transparent_1px)] [background-size:calc(100%/6)_100%] lg:[background-size:calc(100%/3)_100%]"
        />
        {/* lg+: max-w is half the shell width so the text lines up with the other sections */}
        <div className="shell lg:mr-0 lg:max-w-[40rem] lg:pr-12 xl:pr-16">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end lg:flex-col lg:items-start">
            <div>
              <p data-reveal className="font-mono text-xs uppercase tracking-[0.22em] text-brand-700">
                <span className="text-accent-700">—</span> {statistics.eyebrow}
              </p>
              <h2
                id="stats-title"
                data-reveal
                style={delay(80)}
                className="mt-5 max-w-2xl text-[clamp(1.85rem,3.8vw,3rem)] font-semibold leading-[1.08] tracking-[-0.03em] lg:text-[clamp(1.85rem,2.9vw,2.75rem)]"
              >
                <Rich parts={statistics.title} />
              </h2>
            </div>
            <p data-reveal style={delay(160)} className="max-w-sm font-medium text-navy-800 lg:max-w-md">
              {statistics.intro}
            </p>
          </div>

          {/* lg+: one row per figure (number | label + detail) to fit the half-width column */}
          <dl className="mt-14 grid border-t border-navy-900/15 md:grid-cols-3 lg:mt-12 lg:grid-cols-1">
            {figures.map((figure, i) => (
              <div
                key={figure.label}
                data-reveal
                style={delay(i * 120)}
                className="flex flex-col border-b border-navy-900/15 py-10 md:border-b-0 md:py-12 md:pr-8 md:[&:not(:first-child)]:border-l md:[&:not(:first-child)]:pl-8 lg:grid lg:grid-cols-[11rem_1fr] lg:items-baseline lg:gap-x-8 lg:border-b lg:py-8 lg:pr-0 lg:[&:not(:first-child)]:border-l-0 lg:[&:not(:first-child)]:pl-0 xl:grid-cols-[12.5rem_1fr]"
              >
                <dt className="order-2 mt-4 text-lg font-semibold text-navy-900 lg:col-start-2 lg:mt-0">
                  {figure.label}
                </dt>
                <dd className="order-1 text-[clamp(4rem,9vw,7.5rem)] font-semibold leading-none tracking-[-0.05em] text-brand-700 lg:row-span-3 lg:self-start lg:text-[clamp(3.5rem,5vw,4.5rem)]">
                  {figure.prefix && <span className="text-accent-600">{figure.prefix}</span>}
                  <Counter value={figure.value} />
                </dd>
                <dd className="order-3 mt-3 max-w-xs text-[0.95rem] font-medium leading-relaxed text-navy-800 lg:col-start-2 lg:mt-2 lg:max-w-sm">
                  {figure.detail}
                </dd>
                {"regions" in figure && (
                  <dd className="order-4 mt-6 lg:col-start-2 lg:mt-4 lg:max-w-sm" aria-hidden="true">
                    <span className="flex gap-1.5">
                      {Array.from({ length: TOTAL_REGIONS }, (_, s) => (
                        <span
                          key={s}
                          className={`reveal-bar h-1.5 flex-1 origin-left rounded-full ${
                            s < figure.value ? "bg-safe-500" : "bg-navy-900/15"
                          }`}
                          style={delay(400 + s * 70)}
                        />
                      ))}
                    </span>
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="relative aspect-[4/3] w-full sm:aspect-[16/9] lg:aspect-auto lg:h-full">
        <Image
          src={forumPhoto}
          alt={statistics.photoAlt}
          fill
          placeholder="blur"
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover object-center"
        />
      </div>
    </section>
  );
}
