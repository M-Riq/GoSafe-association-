import type { Dictionary } from "@/content";
import { expertiseClusterIcons, type IconName } from "@/content/gosafe";
import { Icon } from "@/components/ui/Icon";
import { Rich, SectionHeading } from "@/components/ui/SectionHeading";
import { delay } from "@/lib/motion";

const CENTER = 200;
const RADIUS = 145;

// Labels come from `expertise.nodes` in the dictionaries, in this order.
const nodes: { icon: IconName; tone: "brand" | "safe" }[] = [
  { icon: "road", tone: "brand" },
  { icon: "code", tone: "brand" },
  { icon: "scale", tone: "brand" },
  { icon: "wrench", tone: "brand" },
  { icon: "users", tone: "safe" },
];

const positioned = nodes.map((node, i) => {
  const angle = ((-90 + i * 72) * Math.PI) / 180;
  return {
    ...node,
    x: CENTER + RADIUS * Math.cos(angle),
    y: CENTER + RADIUS * Math.sin(angle),
  };
});

export function Expertise({ t }: { t: Dictionary }) {
  const { expertise, citizenEngagement } = t;
  return (
    <section id="expertise" aria-labelledby="expertise-title" className="expertise section-y bg-white">
      <div className="shell">
        <SectionHeading
          index="04"
          eyebrow={expertise.eyebrow}
          id="expertise-title"
          title={<Rich parts={expertise.title} />}
          intro={expertise.intro}
        />

        <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-10">
          <div className="min-w-0 lg:col-span-5">
            <div data-reveal="scale" className="lg:sticky lg:top-28">
              <ExpertiseDiagram t={expertise} />
            </div>
          </div>

          <div className="min-w-0 lg:col-span-7">
            <div
              role="region"
              aria-label={expertise.domainsAria}
              tabIndex={0}
              className="no-scrollbar -mx-[clamp(1.25rem,4vw,2.5rem)] flex snap-x snap-mandatory gap-4 overflow-x-auto px-[clamp(1.25rem,4vw,2.5rem)] pb-2 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 md:pb-0"
            >
              {expertise.clusters.map((cluster, i) => (
                <article
                  key={cluster.title}
                  data-cluster={i}
                  data-reveal
                  style={delay((i % 2) * 100)}
                  className="w-[84%] shrink-0 snap-start rounded-lg border border-line bg-white p-6 transition-colors duration-300 hover:border-brand-300 sm:w-[60%] sm:p-7 md:w-auto"
                >
                  <div className="flex items-center justify-between">
                    <span className="grid size-11 place-items-center rounded-md bg-brand-50 text-brand-600">
                      <Icon name={expertiseClusterIcons[i]} className="size-5" />
                    </span>
                    <span className="font-mono text-xs text-subtle">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="mt-6 text-lg font-semibold tracking-tight text-navy-900">{cluster.title}</h3>
                  <ul className="mt-4 space-y-2.5">
                    {cluster.profiles.map((profile) => (
                      <li key={profile} className="flex gap-3 text-[0.92rem] leading-snug text-muted">
                        <span aria-hidden="true" className="mt-[0.5em] size-1 shrink-0 rounded-full bg-brand-500" />
                        {profile}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}

              <article
                data-cluster={4}
                data-reveal
                className="w-[84%] shrink-0 snap-start rounded-lg border border-safe-500/30 bg-safe-100/50 p-6 transition-colors duration-300 hover:border-safe-500 sm:w-[60%] sm:p-7 md:col-span-2 md:w-auto"
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-10">
                  <div className="md:w-2/5">
                    <span className="grid size-11 place-items-center rounded-md bg-safe-500 text-white">
                      <Icon name="users" className="size-5" />
                    </span>
                    <h3 className="mt-6 text-lg font-semibold tracking-tight text-navy-900">
                      {citizenEngagement.title}
                    </h3>
                    <p className="mt-2 text-[0.92rem] leading-snug text-muted">{citizenEngagement.description}</p>
                  </div>
                  <ul className="space-y-2.5 md:flex-1 md:pt-[4.25rem]">
                    {citizenEngagement.actions.map((action) => (
                      <li key={action} className="flex gap-3 text-[0.95rem] leading-snug text-ink">
                        <Icon name="arrow" className="mt-0.5 size-4 shrink-0 text-safe-700" />
                        {action}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </div>
            <p className="mt-4 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-subtle md:hidden" aria-hidden="true">
              {t.common.scrollHint}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExpertiseDiagram({ t }: { t: Dictionary["expertise"] }) {
  return (
    <figure data-motion-zone className="mx-auto w-full max-w-[26rem]">
      <div className="relative aspect-square">
        <svg viewBox="0 0 400 400" className="absolute inset-0 size-full" aria-hidden="true">
          <circle cx={CENTER} cy={CENTER} r={190} fill="none" className="stroke-line" strokeDasharray="2 6" />
          <circle cx={CENTER} cy={CENTER} r={RADIUS} fill="none" className="stroke-brand-100" strokeWidth={1.5} />
          {positioned.map((node, i) => (
            <line
              key={i}
              x1={node.x}
              y1={node.y}
              x2={CENTER}
              y2={CENTER}
              strokeWidth={1.5}
              className={`flow-line ${node.tone === "safe" ? "stroke-safe-500/60" : "stroke-brand-500/50"}`}
            />
          ))}
          <circle cx={CENTER} cy={CENTER} r={70} fill="none" strokeWidth={1.5} className="pulse-ring stroke-accent-500" />
        </svg>

        <div className="absolute left-1/2 top-1/2 grid size-[36%] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-brand-700 text-center text-white shadow-[0_20px_40px_-20px_rgb(11_44_99/0.6)]">
          <div>
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-brand-100/80">{t.centerKicker}</p>
            <p className="mt-1 text-[clamp(1.15rem,3.6vw,1.6rem)] leading-tight text-white">
              {t.centerLines[0]}
              <br />
              {t.centerLines[1]}
            </p>
          </div>
        </div>

        {positioned.map((node, i) => (
          <div
            key={i}
            className="absolute flex w-28 flex-col items-center text-center"
            style={{ left: `${node.x / 4}%`, top: `${node.y / 4}%`, transform: "translate(-50%, -28px)" }}
          >
            <span
              data-node={i}
              className={`expertise-node absolute left-1/2 top-[28px] grid size-14 place-items-center rounded-full border bg-white ${
                node.tone === "safe" ? "border-safe-500 text-safe-700" : "border-brand-300 text-brand-600"
              }`}
            >
              <Icon name={node.icon} className="size-6" />
            </span>
            <span className="mt-[62px] text-[0.72rem] font-medium leading-tight text-navy-900 sm:text-xs">
              {t.nodes[i]}
            </span>
          </div>
        ))}
      </div>
      <figcaption className="sr-only">{t.diagramCaption}</figcaption>
    </figure>
  );
}
