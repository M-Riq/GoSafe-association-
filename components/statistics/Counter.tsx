"use client";

import { useEffect, useRef } from "react";

const DURATION = 1800;
const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

/**
 * Counts up once when visible. Server HTML holds the final value (no-JS, SEO, reduced motion);
 * the DOM text is updated directly to avoid re-rendering on every frame.
 */
export function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    el.textContent = "0";
    let frame = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / DURATION, 1);
          el.textContent = String(Math.round(easeOutQuart(t) * value));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      el.textContent = String(value);
    };
  }, [value]);

  return (
    <>
      <span
        ref={ref}
        aria-hidden="true"
        className="inline-block tabular-nums"
        style={{ minWidth: `${String(value).length * 0.62}em` }}
      >
        {value}
      </span>
      <span className="sr-only">{value}</span>
    </>
  );
}
