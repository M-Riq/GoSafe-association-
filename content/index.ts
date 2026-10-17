import type { Locale } from "@/lib/i18n";
import en from "./en";
import fr, { type Dictionary } from "./fr";

const dictionaries: Record<Locale, Dictionary> = { fr, en };

export const getDictionary = (locale: Locale) => dictionaries[locale];
export type { Dictionary };
