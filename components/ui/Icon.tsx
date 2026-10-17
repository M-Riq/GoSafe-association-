import type { ReactNode, SVGProps } from "react";
import type { IconName } from "@/content/gosafe";

const paths: Record<
  IconName | "arrow" | "arrowUpRight" | "menu" | "close" | "globe" | "location" | "phone" | "mail",
  ReactNode
> = {
  megaphone: (
    <>
      <path d="M3 11v2a1 1 0 0 0 1 1h2l5 4V6l-5 4H4a1 1 0 0 0-1 1Z" />
      <path d="M15 9a3 3 0 0 1 0 6" />
      <path d="M18 6a7 7 0 0 1 0 12" />
    </>
  ),
  chart: (
    <>
      <path d="M3 3v18h18" />
      <path d="m7 15 4-4 3 3 5-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  clipboard: (
    <>
      <rect x="8" y="2" width="8" height="4" rx="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="m9 14 2 2 4-4" />
    </>
  ),
  chip: (
    <>
      <rect x="5" y="5" width="14" height="14" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
    </>
  ),
  heart: <path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.2a4.3 4.3 0 0 1 7.5 2.6C19.5 15.4 12 20 12 20Z" />,
  landmark: (
    <>
      <path d="M3 21h18" />
      <path d="M5 21v-9M9.5 21v-9M14.5 21v-9M19 21v-9" />
      <path d="M3 9.5 12 4l9 5.5Z" />
    </>
  ),
  road: (
    <>
      <path d="M8 3 4 21M16 3l4 18" />
      <path d="M12 4v2M12 10v3M12 17v3" />
    </>
  ),
  code: (
    <>
      <path d="m8 8-4 4 4 4M16 8l4 4-4 4" />
      <path d="m13.5 6-3 12" />
    </>
  ),
  scale: (
    <>
      <path d="M12 3v18M7 21h10M5 7h14" />
      <path d="M2 14 5 7l3 7a3 3 0 0 1-6 0ZM16 14l3-7 3 7a3 3 0 0 1-6 0Z" />
    </>
  ),
  wrench: (
    <path d="M14.7 6.3a4 4 0 0 0-5.3 5.3L3.5 17.5a1.8 1.8 0 0 0 2.5 2.5l5.9-5.9a4 4 0 0 0 5.3-5.3l-2.4 2.4-2.2-.4-.4-2.2Z" />
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
      <path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6 6 0 0 1 3.5 6" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 20 6v6c0 4.5-3.4 8.2-8 9-4.6-.8-8-4.5-8-9V6Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="9" r="6" />
      <path d="m8.5 14-1.5 8 5-3 5 3-1.5-8" />
    </>
  ),
  sparkle: (
    <>
      <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8Z" />
      <path d="m19 16 .6 1.4 1.4.6-1.4.6L19 20l-.6-1.4-1.4-.6 1.4-.6Z" />
    </>
  ),
  link: (
    <>
      <path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1" />
      <path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" />
    </>
  ),
  message: <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z" />,
  trend: (
    <>
      <path d="m4 18 6-6 4 4 6-8" />
      <path d="M15 8h5v5" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  arrowUpRight: <path d="M7 17 17 7M8 7h9v9" />,
  phone: (
    <path d="M7.4 4.5c.5-.6 1.5-.6 2 .1l1.6 2.3c.3.4.2 1-.2 1.4l-1 .9c.8 1.7 2.2 3.1 3.9 3.9l.9-1c.4-.4 1-.5 1.4-.2l2.3 1.6c.7.5.7 1.5.1 2l-1.1 1.1c-.7.7-1.7.9-2.6.6a14.5 14.5 0 0 1-8.3-8.3c-.3-.9-.1-1.9.6-2.6Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.6 7.2 7.3 5.2a2 2 0 0 0 2.2 0l7.3-5.2" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h10" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3Z" />
    </>
  ),
  location: (
    <>
      <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
};

export type AnyIconName = keyof typeof paths;

export function Icon({ name, ...props }: { name: AnyIconName } & SVGProps<SVGSVGElement>) {
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
      {paths[name]}
    </svg>
  );
}
