import { readFileSync } from "node:fs";
import path from "node:path";
import type { Locale } from "@/lib/i18n";

export type StoryBlock =
  | { kind: "kicker" | "text" | "highlight" | "statement" | "chapter"; text: string }
  | { kind: "signature"; name: string; role: string };

// Literal paths keep the build's file tracing scoped to these two files.
const SOURCES: Record<Locale, () => string> = {
  fr: () => readFileSync(path.join(process.cwd(), "_LULU AVAIT DEUX JAMBES.md"), "utf8"),
  en: () => readFileSync(path.join(process.cwd(), "_LULU HAD TWO LEGS.md"), "utf8"),
};

// Lines in the source that open a new part of the story.
const CHAPTERS = new Set(["J’ai perdu mes jambes. Pas mon avenir.", "I lost my legs. Not my future."]);

const fullyEmphasised = (p: string) => /^\*[^*]+\*$/.test(p);

/** Reads Lulu's story verbatim and tags each paragraph with how it should be staged. */
export function loadLuluStory(locale: Locale): StoryBlock[] {
  const raw = SOURCES[locale]().replace(/\r\n/g, "\n");
  const paragraphs = raw
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter((p) => p && !p.startsWith("#"));

  // Re-join sentences that were split across two paragraphs in the source.
  const joined: string[] = [];
  for (const p of paragraphs) {
    const prev = joined.at(-1);
    if (prev && !/[.!?:…»*]$/.test(prev) && /^[a-zà-ÿ]/.test(p)) joined[joined.length - 1] = `${prev} ${p}`;
    else joined.push(p);
  }

  const blocks = joined.map((p, i): StoryBlock => {
    const signature = p.match(/^\*([^*]+)\*\s+\*([^*]+)\*$/);
    if (signature && i === joined.length - 1) return { kind: "signature", name: signature[1], role: signature[2] };
    if (i === 0 && fullyEmphasised(p)) return { kind: "kicker", text: p.slice(1, -1) };
    if (CHAPTERS.has(p)) return { kind: "chapter", text: p };
    if (fullyEmphasised(p)) {
      const inner = p.slice(1, -1);
      return { kind: inner === inner.toUpperCase() ? "statement" : "highlight", text: inner };
    }
    return { kind: "text", text: p };
  });

  // The source puts nearly every sentence on its own line; read them as flowing paragraphs instead.
  return blocks.reduce<StoryBlock[]>((acc, b) => {
    const prev = acc.at(-1);
    if (prev?.kind === "text" && b.kind === "text") prev.text = `${prev.text} ${b.text}`;
    else acc.push(b);
    return acc;
  }, []);
}
