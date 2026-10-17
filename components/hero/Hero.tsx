import type { Dictionary } from "@/content";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { cssVars, delay } from "@/lib/motion";
import { HeroVisual } from "./HeroVisual";

const pillarTone = ["bg-brand-300", "bg-brand-300", "bg-accent-500", "bg-safe-400"];

export function Hero({ t }: { t: Dictionary }) {
  const { organization } = t;
  const words = organization.tagline.split(" ");
  const emphasisFrom = words.length - organization.taglineEmphasis;
  return (
    <section
      id="accueil"
      aria-labelledby="hero-title"
      data-motion-zone
      className="relative isolate flex min-h-svh flex-col overflow-hidden bg-navy-950 text-white"
    >
      {/* Below lg the visual is scoped to this wrapper so the car never overlaps the facts bar */}
      <div className="flex flex-1 flex-col max-lg:relative">
        <HeroVisual />

        <div className="hero-scroll-content shell flex flex-1 flex-col justify-center pb-48 pt-32 sm:pt-36 lg:pb-20">
          <p
            className="hero-rise mb-4 flex items-center gap-3 text-[clamp(1.6rem,3.6vw,2.75rem)] font-bold leading-none tracking-[-0.03em] sm:mb-6"
            style={delay(100)}
          >
            <span aria-hidden="true" className="h-px w-8 bg-accent-500 sm:w-12" />
            <span>
              <span className="text-white">Go</span>
              <span className="text-accent-500">Safe</span>
            </span>
          </p>
          <h1
            id="hero-title"
            className="max-w-[14ch] text-[clamp(2.6rem,7.4vw,6.25rem)] font-semibold leading-[0.98] tracking-[-0.045em]"
          >
            {words.map((word, i) => (
              <span key={i}>
                <span className="hero-word">
                  <span
                    style={cssVars({ "--i": i })}
                    className={
                      i >= emphasisFrom ? "text-accent-500" : undefined
                    }
                  >
                    {word}
                  </span>
                </span>
                {i < words.length - 1 && " "}
              </span>
            ))}
          </h1>

          <ul className="mt-10 grid max-w-2xl gap-x-10 gap-y-3 sm:grid-cols-2">
            {organization.pillars.map((pillar, i) => (
              <li
                key={pillar}
                className="hero-rise flex items-center gap-3 text-[0.95rem] text-brand-100/90 sm:text-base"
                style={delay(750 + i * 110)}
              >
                <span aria-hidden="true" className={`h-px w-5 shrink-0 ${pillarTone[i]}`} />
                {pillar}
              </li>
            ))}
          </ul>

          <div className="hero-rise mt-11 flex flex-col gap-3 sm:flex-row" style={delay(1250)}>
            <ButtonLink href="#actions">{t.hero.ctaPrimary}</ButtonLink>
            <ButtonLink href="#contact" variant="ghost-light">
              {t.hero.ctaSecondary}
            </ButtonLink>
          </div>
        </div>
      </div>

      <div className="hero-fade relative border-t border-white/10" style={delay(1500)}>
        <dl className="shell grid grid-cols-2 gap-y-4 py-5 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-brand-100/70 md:grid-cols-4">
          {t.hero.facts.map((fact) => (
            <HeroFact key={fact.term} term={fact.term} value={fact.value} />
          ))}
        </dl>
      </div>
    </section>
  );
}

function HeroFact({ term, value }: { term: string; value: string }) {
  return (
    <div className="pr-4">
      <dt className="text-brand-300/70">{term}</dt>
      <dd className="mt-1 text-white/90">{value}</dd>
    </div>
  );
}
