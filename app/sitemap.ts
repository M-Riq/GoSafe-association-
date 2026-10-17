import type { MetadataRoute } from "next";
import { siteUrl } from "@/content/gosafe";
import { defaultLocale, locales } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(locales.map((l) => [l, `${siteUrl}/${l}`]));
  return locales.map((lang) => ({
    url: `${siteUrl}/${lang}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: lang === defaultLocale ? 1 : 0.9,
    alternates: { languages },
  }));
}
