"use client";

import { useEffect } from "react";

/**
 * Single page-level observer:
 * - `[data-reveal]` gets `data-revealed` once it enters the viewport.
 * - `[data-motion-zone]` gets `data-offscreen` while hidden, pausing its infinite animations.
 */
export function MotionObserver() {
  useEffect(() => {
    const revealAll = () =>
      document.querySelectorAll("[data-reveal]").forEach((el) => el.setAttribute("data-revealed", ""));

    // Old browsers without IntersectionObserver would never reveal anything.
    if (typeof IntersectionObserver === "undefined") {
      revealAll();
      return;
    }

    const reveal = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-revealed", "");
          reveal.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    const zones = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        entry.target.toggleAttribute("data-offscreen", !entry.isIntersecting);
      }
    });

    document.querySelectorAll("[data-reveal]").forEach((el) => reveal.observe(el));
    document.querySelectorAll("[data-motion-zone]").forEach((el) => zones.observe(el));

    return () => {
      reveal.disconnect();
      zones.disconnect();
    };
  }, []);

  return null;
}
