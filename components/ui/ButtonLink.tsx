import type { ReactNode } from "react";
import { Icon } from "./Icon";

type Variant = "primary" | "ghost-light" | "ghost-dark";

const styles: Record<Variant, string> = {
  primary: "bg-accent-500 text-navy-950 hover:bg-accent-600 hover:text-white",
  "ghost-light": "border border-white/25 text-white hover:border-white hover:bg-white/5",
  "ghost-dark": "border border-navy-900/20 text-navy-900 hover:border-navy-900 hover:bg-navy-900/[0.03]",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`group inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-6 text-sm font-semibold tracking-wide transition-colors duration-300 ${styles[variant]} ${className}`}
    >
      {children}
      <Icon
        name="arrow"
        className="size-4 transition-transform duration-300 ease-(--ease-premium) group-hover:translate-x-1"
      />
    </a>
  );
}
