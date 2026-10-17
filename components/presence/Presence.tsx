import type { Dictionary } from "@/content";
import { headquartersCoords } from "@/content/gosafe";
import { Rich, SectionHeading } from "@/components/ui/SectionHeading";
import { cssVars, delay } from "@/lib/motion";
import { cameroonPath, MAP_HEIGHT, MAP_WIDTH, project } from "./cameroon-map";

const hq = project(headquartersCoords.lon, headquartersCoords.lat);
const RINGS = [40, 80, 120, 160, 200, 240, 280, 320];
const REGIONS_COVERED = 8;
const REGIONS_TOTAL = 10;

export function Presence({ t }: { t: Dictionary }) {
  const { presence, organization } = t;
  return (
    <section id="presence" aria-labelledby="presence-title" className="section-y overflow-hidden bg-white">
      <div className="shell grid items-start gap-16 lg:grid-cols-12 lg:gap-12">
        <div className="order-2 lg:order-1 lg:col-span-5">
          <CameroonMap t={presence} />
        </div>

        <div className="order-1 lg:order-2 lg:col-span-7 lg:pl-6">
          <SectionHeading
            index="07"
            eyebrow={presence.eyebrow}
            id="presence-title"
            title={<Rich parts={presence.title} />}
            intro={presence.intro}
          />

          <div data-reveal className="mt-10 max-w-md">
            <div className="flex items-baseline justify-between font-mono text-xs uppercase tracking-[0.18em] text-subtle">
              <span>{presence.regionsCovered}</span>
              <span className="text-navy-900">
                {REGIONS_COVERED} / {REGIONS_TOTAL}
              </span>
            </div>
            <div className="mt-3 flex gap-1.5" aria-hidden="true">
              {Array.from({ length: REGIONS_TOTAL }, (_, i) => (
                <span
                  key={i}
                  className={`reveal-bar h-2 flex-1 origin-left rounded-full ${
                    i < REGIONS_COVERED ? "bg-brand-600" : "bg-line"
                  }`}
                  style={delay(200 + i * 70)}
                />
              ))}
            </div>
          </div>

          <div data-reveal style={delay(120)} className="mt-12 border-l-2 border-safe-500 pl-6">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-safe-700">{presence.vocation}</p>
            <p className="mt-3 max-w-xl text-lg leading-relaxed text-ink">{organization.ambition}</p>
          </div>

          <dl data-reveal style={delay(160)} className="mt-12 grid rounded-xl border border-line text-[0.95rem] sm:grid-cols-2">
            <IdRow term={presence.officialName} value={organization.name} />
            <IdRow term={presence.legalStatus} value={organization.legalStatus} />
            <IdRow term={presence.foundedYear} value={organization.founded} />
            <IdRow term={presence.headquarters} value={organization.headquarters} />
            <IdRow term={presence.interventionArea} value={organization.interventionArea} wide />
            <div className="border-t border-line p-5 sm:col-span-2">
              <dt className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-subtle">{presence.domainsTitle}</dt>
              <dd className="mt-3 flex flex-wrap gap-1.5">
                {presence.domains.map((d) => (
                  <span key={d} className="rounded-full bg-brand-50 px-3 py-1 text-sm text-brand-700">
                    {d}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

function IdRow({ term, value, wide = false }: { term: string; value: string; wide?: boolean }) {
  return (
    <div
      className={`border-line p-5 [&:not(:first-child)]:border-t sm:[&:nth-child(2)]:border-l sm:[&:nth-child(2)]:border-t-0 sm:[&:nth-child(4)]:border-l ${
        wide ? "sm:col-span-2" : ""
      }`}
    >
      <dt className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-subtle">{term}</dt>
      <dd className="mt-1.5 font-medium text-navy-900">{value}</dd>
    </div>
  );
}

// TODO(content): the source does not name the 8 covered regions. Once confirmed, add per-region shapes here.
function CameroonMap({ t }: { t: Dictionary["presence"] }) {
  return (
    <figure data-reveal="fade" data-motion-zone className="relative mx-auto max-w-[24rem] lg:sticky lg:top-28">
      <div className="relative">
        <svg
          viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
          className="h-auto w-full overflow-visible"
          role="img"
          aria-label={t.mapAria}
        >
          <defs>
            <pattern id="cm-dots" width="8" height="8" patternUnits="userSpaceOnUse">
              <circle cx="4" cy="4" r="1.15" className="fill-brand-300" />
            </pattern>
            <clipPath id="cm-clip">
              <path d={cameroonPath} />
            </clipPath>
          </defs>

          <path d={cameroonPath} className="fill-brand-50" />
          <path d={cameroonPath} fill="url(#cm-dots)" />

          <g clipPath="url(#cm-clip)" fill="none" strokeWidth={1}>
            {RINGS.map((r, i) => (
              <circle
                key={r}
                cx={hq.x}
                cy={hq.y}
                r={r}
                pathLength={1}
                className="draw-path stroke-brand-500/35"
                style={cssVars({ "--draw-d": `${400 + i * 120}ms` })}
              />
            ))}
          </g>

          <path
            d={cameroonPath}
            pathLength={1}
            fill="none"
            strokeWidth={1.5}
            strokeLinejoin="round"
            className="draw-path stroke-brand-700"
          />

          <circle cx={hq.x} cy={hq.y} r={9} className="pulse-ring fill-accent-500/30" />
          <circle cx={hq.x} cy={hq.y} r={5} className="fill-accent-500 stroke-white" strokeWidth={2} />
        </svg>

        <div
          className="absolute -translate-y-1/2 pl-5"
          style={{ left: `${(hq.x / MAP_WIDTH) * 100}%`, top: `${(hq.y / MAP_HEIGHT) * 100}%` }}
          aria-hidden="true"
        >
          <div className="whitespace-nowrap rounded-md bg-navy-900 px-3 py-2 text-white shadow-lg">
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-brand-300">{t.mapHq}</p>
            <p className="text-sm font-semibold">Yaoundé</p>
          </div>
        </div>
      </div>
      <figcaption className="mt-6 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-subtle">
        {t.mapCaption}
      </figcaption>
    </figure>
  );
}
