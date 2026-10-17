import type { ReactNode } from "react";
import { delay } from "@/lib/motion";

type Props = {
  index: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: "light" | "dark";
  id?: string;
  className?: string;
};

export function SectionHeading({ index, eyebrow, title, intro, tone = "light", id, className = "" }: Props) {
  const dark = tone === "dark";
  return (
    <header className={`max-w-3xl ${className}`}>
      <p
        data-reveal
        className={`flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] ${
          dark ? "text-brand-300" : "text-brand-600"
        }`}
      >
        <span className={dark ? "text-accent-500" : "text-accent-700"}>{index}</span>
        <span aria-hidden="true" className={`h-px w-8 ${dark ? "bg-brand-300/50" : "bg-brand-600/40"}`} />
        {eyebrow}
      </p>
      <h2
        id={id}
        data-reveal
        style={delay(80)}
        className={`mt-5 text-[clamp(2rem,4.6vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.03em] ${
          dark ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          data-reveal
          style={delay(160)}
          className={`mt-6 max-w-2xl text-base leading-relaxed sm:text-lg ${
            dark ? "text-brand-100/80" : "text-muted"
          }`}
        >
          {intro}
        </p>
      )}
    </header>
  );
}

/** Orange emphasis used inside headings. */
export function Em({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <em className={`not-italic text-accent-500 ${className}`}>{children}</em>;
}

/** Renders a dictionary title stored as `[before, emphasised, after]`. */
export function Rich({ parts }: { parts: readonly string[] }) {
  const [before, em, after] = parts;
  return (
    <>
      {before}
      <Em>{em}</Em>
      {after}
    </>
  );
}
