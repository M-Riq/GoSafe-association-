import Image from "next/image";
import type { Dictionary } from "@/content";
import { Rich, SectionHeading } from "@/components/ui/SectionHeading";
import type { Locale } from "@/lib/i18n";
import luluPhoto from "@/public/img9.jpeg";
import { loadLuluStory, type StoryBlock } from "./story";

function Inline({ text }: { text: string }) {
  return text.split("*").map((part, i) =>
    i % 2 ? (
      <strong key={i} className="font-medium text-white">
        {part}
      </strong>
    ) : (
      part
    ),
  );
}

function Block({ block }: { block: StoryBlock }) {
  switch (block.kind) {
    case "highlight":
      return (
        <p
          data-reveal
          className="relative my-6 font-serif text-[clamp(1.5rem,2.4vw,1.95rem)] leading-snug text-white"
        >
          <span aria-hidden="true" className="absolute -left-[calc(1.5rem+3.5px)] top-[0.55em] size-1.5 rounded-full bg-accent-500 sm:-left-[calc(2rem+3.5px)]" />
          {block.text}
        </p>
      );
    case "statement":
      return (
        <p
          data-reveal
          className="my-10 border-y border-white/10 py-6 text-[clamp(1.9rem,3.4vw,2.75rem)] font-semibold uppercase leading-[1.05] tracking-[-0.02em] text-accent-500"
        >
          {block.text}
        </p>
      );
    case "chapter":
      return (
        <h3 data-reveal className="mb-5 mt-12 text-[clamp(1.5rem,2.4vw,2rem)] font-semibold leading-tight tracking-[-0.02em] text-white">
          <span aria-hidden="true" className="mb-4 block h-px w-10 bg-accent-500" />
          {block.text}
        </h3>
      );
    case "signature":
      return (
        <footer data-reveal className="mt-12 flex items-center gap-5">
          <span aria-hidden="true" className="h-px w-12 bg-accent-500" />
          <div>
            <p className="font-serif text-4xl leading-none text-white">{block.name}</p>
            <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-brand-300">{block.role}</p>
          </div>
        </footer>
      );
    default:
      return (
        <p data-reveal className="mt-4 text-[1.075rem] leading-[1.7] text-brand-100/75 sm:text-lg">
          <Inline text={block.kind === "text" ? block.text : ""} />
        </p>
      );
  }
}

export function LuluStory({ t, locale }: { t: Dictionary; locale: Locale }) {
  const blocks = loadLuluStory(locale);
  const kicker = blocks.find((b) => b.kind === "kicker");
  const body = blocks.filter((b) => b.kind !== "kicker");

  return (
    <section
      id="histoire-lulu"
      aria-labelledby="lulu-title"
      className="relative isolate bg-navy-950 text-white lg:grid lg:grid-cols-2"
    >
      {/* below lg the photo keeps its natural ratio; at lg+ it stays in view, fully visible, while the story scrolls */}
      <div className="relative">
        <div className="relative lg:sticky lg:top-0 lg:h-svh lg:overflow-hidden">
          {/* the inline blur placeholder is enough for a blurred backdrop: no extra image request */}
          <div
            aria-hidden="true"
            style={{ backgroundImage: `url(${luluPhoto.blurDataURL})` }}
            className="absolute inset-0 hidden scale-110 bg-cover bg-center opacity-60 blur-2xl lg:block"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 hidden bg-gradient-to-r from-navy-950/30 via-navy-950/10 to-navy-950 lg:block"
          />
          <div className="relative lg:absolute lg:inset-0 lg:px-6 lg:pb-6 lg:pt-24 xl:px-8">
            <Image
              src={luluPhoto}
              alt={t.lulu.photoAlt}
              placeholder="blur"
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="h-auto w-full lg:size-full lg:object-contain lg:drop-shadow-[0_40px_60px_rgb(0_0_0/0.45)]"
            />
          </div>
        </div>
      </div>

      <div className="shell section-y lg:ml-0 lg:max-w-[40rem] lg:pl-12 xl:pl-16">
        <SectionHeading
          index="09"
          eyebrow={t.lulu.eyebrow}
          id="lulu-title"
          tone="dark"
          title={<Rich parts={t.lulu.title} />}
          intro={kicker?.kind === "kicker" ? kicker.text : undefined}
        />

        <article className="mt-10 border-l border-white/10 pl-6 sm:pl-8 lg:mt-12">
          {body.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </article>
      </div>
    </section>
  );
}
