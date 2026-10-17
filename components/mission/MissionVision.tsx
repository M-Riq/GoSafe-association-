import type { Dictionary } from "@/content";
import { Rich, SectionHeading } from "@/components/ui/SectionHeading";
import { Values } from "@/components/values/Values";
import { delay } from "@/lib/motion";

export function MissionVision({ t }: { t: Dictionary }) {
  const { mission } = t;
  return (
    <section
      id="mission"
      aria-labelledby="mission-title"
      className="relative isolate overflow-hidden bg-navy-900 section-y text-white"
    >
      <div
        aria-hidden="true"
        className="absolute -left-1/4 top-0 -z-10 h-[60vmax] w-[60vmax] rounded-full bg-[radial-gradient(closest-side,rgb(22_82_184/0.35),transparent)]"
      />
      <div className="shell">
        <SectionHeading
          index="06"
          eyebrow={mission.eyebrow}
          id="mission-title"
          tone="dark"
          title={<Rich parts={mission.title} />}
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-white/10 lg:mt-20 lg:grid-cols-2">
          <Statement label={mission.missionLabel} text={mission.mission} />
          <Statement label={mission.visionLabel} text={mission.vision} d={120} />
        </div>

        <Values t={mission} />
      </div>
    </section>
  );
}

function Statement({ label, text, d = 0 }: { label: string; text: string; d?: number }) {
  return (
    <article data-reveal="fade" style={delay(d)} className="bg-navy-900 p-7 sm:p-10 lg:p-12">
      <h3 className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-brand-300">
        <span aria-hidden="true" className="size-1.5 rounded-full bg-safe-400" />
        {label}
      </h3>
      <p className="mt-6 font-serif text-[clamp(1.35rem,2.4vw,1.85rem)] leading-[1.35] text-white/95">{text}</p>
    </article>
  );
}
