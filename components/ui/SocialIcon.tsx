import type { ReactNode, SVGProps } from "react";
import type { SocialPlatform } from "@/content/gosafe";

/** Simplified line glyphs, drawn to match the 24px stroke style of `Icon`. */
const glyphs: Record<SocialPlatform, ReactNode> = {
  facebook: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <path d="M15.4 7.6h-1.5a2.3 2.3 0 0 0-2.3 2.3V21" />
      <path d="M9.3 12.7h5.5" />
    </>
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5.4" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17.1" cy="6.9" r="1.1" fill="currentColor" stroke="none" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M3.6 20.4 4.9 16.5a8.1 8.1 0 1 1 3.1 3L3.6 20.4Z" />
      <path d="M9.4 9.4c.3-.5.9-.6 1.3-.3l.8 1.3c.2.3.1.6-.1.8l-.5.5c.5 1 1.3 1.8 2.3 2.3l.5-.5c.2-.2.6-.3.8-.1l1.3.8c.4.3.4.9 0 1.2l-.4.4c-.4.4-1 .5-1.5.3a8.4 8.4 0 0 1-4.8-4.8c-.2-.5-.1-1.2.3-1.6Z" />
    </>
  ),
};

export function SocialIcon({ platform, ...props }: { platform: SocialPlatform } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {glyphs[platform]}
    </svg>
  );
}
