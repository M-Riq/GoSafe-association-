import type { CSSProperties } from "react";

/** Stagger helper for `[data-reveal]` and hero entrance animations. */
export function delay(ms: number): CSSProperties {
  return { "--d": `${ms}ms` } as CSSProperties;
}

export function cssVars(vars: Record<string, string | number>): CSSProperties {
  return vars as CSSProperties;
}
