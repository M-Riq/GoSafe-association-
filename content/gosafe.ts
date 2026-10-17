/**
 * Language-neutral GOSAFE data. All visitor-facing text lives in content/fr.ts and content/en.ts.
 * Source of truth: "GOSAFE ASSOCIATION.md". Do not add facts that are not in that document.
 */

/** Production domain: canonical URLs, share previews and sitemap are built from it. */
export const siteUrl = "https://gosafe-association.org";

/** Real coordinates of Yaoundé (headquarters). */
export const headquartersCoords = { lat: 3.87, lon: 11.52 } as const;

/**
 * Contact details are NOT provided in the source document.
 * TODO(content): fill in the official values once validated by GOSAFE. Leave `null` to hide a field.
 */
export const contact: {
  email: string | null;
  phone: string | null;
  address: string | null;
  socials: { label: string; href: string }[];
} = {
  email: null,
  phone: null,
  address: null,
  socials: [],
};

/**
 * Channels shown in the Contact section.
 * TODO(content): every value below is a PLACEHOLDER — replace with the official GOSAFE
 * numbers, e-mail and social profile URLs before going live.
 */
export const contactChannels = {
  email: "contact@gosafe-association.org",
  // Labels are in the dictionaries (`contact.phoneLabels`), in the same order.
  phones: [
    // { value: "+237 6 00 00 00 00", href: "tel:+237600000000" },
    { value: "+237 673 72 12 04", href: "tel:+237673721204" },
  ],
  socials: [
    {
      platform: "facebook",
      label: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61560518333378&mibextid=wwXIfr&rdid=lo8JW6Jr7G3vUFUY&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Ep2KpSiPu%2F%3Fmibextid%3DwwXIfr%26ref%3D1#",
    },
    {
      platform: "instagram",
      label: "Instagram",
      href: "https://www.instagram.com/",
    },
    {
      platform: "whatsapp",
      label: "WhatsApp",
      href: "https://wa.me/237673721204",
    },
  ],
} as const;

export type SocialPlatform = (typeof contactChannels.socials)[number]["platform"];

/** Section anchors, shared by both languages so links keep working after a language switch. */
export const sectionIds = [
  "accueil",
  "a-propos",
  "actions",
  "expertise",
  "galerie",
  "engagement",
  "histoire-lulu",
  "contact",
] as const;

export const keyFigures = [
  { value: 23, prefix: "" },
  { value: 106, prefix: "+" },
  { value: 8, prefix: "", regions: true },
] as const;

export type IconName =
  | "megaphone"
  | "chart"
  | "pin"
  | "clipboard"
  | "chip"
  | "heart"
  | "landmark"
  | "road"
  | "code"
  | "scale"
  | "wrench"
  | "users"
  | "target"
  | "shield"
  | "award"
  | "sparkle"
  | "link"
  | "message"
  | "trend";

// Icon lists below follow the order of the matching lists in the dictionaries.
export const serviceIcons: IconName[] = ["megaphone", "chart", "pin", "clipboard", "chip", "heart", "landmark"];
export const expertiseClusterIcons: IconName[] = ["road", "code", "scale", "wrench"];
export const valueIcons: IconName[] = ["target", "shield", "award", "sparkle", "link"];
export const victimSupportIcons: IconName[] = ["message", "heart", "trend"];
