"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Dictionary } from "@/content";
import { sectionIds } from "@/content/gosafe";
import { Icon } from "@/components/ui/Icon";
import type { Locale } from "@/lib/i18n";
import { delay } from "@/lib/motion";
import logo from "@/public/logo2.png";
import { LanguageSwitcher } from "./LanguageSwitcher";

type Props = {
  locale: Locale;
  t: Dictionary["navbar"];
  navigation: Dictionary["navigation"];
  organizationName: string;
  tagline: string;
};

export function Navbar({ locale, t, navigation: labels, organizationName, tagline }: Props) {
  const navigation = sectionIds.map((id, i) => ({ id, label: labels[i] }));
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("accueil");
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setScrolled(window.scrollY > 24));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const close = useCallback((restoreFocus = true) => {
    setOpen(false);
    if (restoreFocus) toggleRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    root.style.overflow = "hidden";
    panelRef.current?.querySelector("a")?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    const onResize = () => window.innerWidth >= 1024 && close(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      root.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open, close]);

  const solid = scrolled || open;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* blur only on large screens: backdrop-filter is the main scroll cost on low-end phones */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 border-b border-line bg-white/95 transition-opacity duration-500 lg:backdrop-blur-md ${
          solid ? "opacity-100" : "opacity-0"
        }`}
      />
      <nav
        aria-label={t.mainNav}
        className={`shell relative flex items-center justify-between transition-[height] duration-500 ease-(--ease-premium) ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        <a
          href="#accueil"
          aria-label={`${organizationName} — ${t.homeAria}`}
          className={`rounded-full bg-white px-3 py-1 transition-shadow duration-500 ${
            solid ? "shadow-none" : "shadow-[0_8px_24px_-12px_rgb(0_0_0/0.5)]"
          }`}
        >
          {/* The source JPEG has wide white margins: crop to the emblem (~1040×430 px region). */}
          <span
            className={`relative block aspect-[1040/430] overflow-hidden transition-[height] duration-500 ease-(--ease-premium) ${
              scrolled ? "h-11 lg:h-12" : "h-11 xl:h-13"
            }`}
          >
            <Image
              src={logo}
              alt=""
              loading="eager"
              sizes="180px"
              className="absolute left-[-11.5%] top-[-30.2%] h-auto w-[123.1%] max-w-none"
            />
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navigation.slice(0, -1).map(({ id, label }) => {
            const isActive = active === id;
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={isActive ? "location" : undefined}
                  className={`relative inline-flex h-10 items-center rounded-full px-2.5 text-[0.8125rem] font-medium transition-colors duration-300 xl:px-4 xl:text-sm ${
                    solid
                      ? isActive
                        ? "text-brand-700"
                        : "text-muted hover:text-navy-900"
                      : isActive
                        ? "text-white"
                        : "text-white/70 hover:text-white"
                  }`}
                >
                  {label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-2.5 bottom-1.5 h-px origin-left bg-accent-500 transition-transform duration-500 ease-(--ease-premium) xl:inset-x-4 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <LanguageSwitcher locale={locale} section={active} label={t.languageLabel} names={t.languageNames} solid={solid} />
          <a
            href="#contact"
            className="hidden min-h-11 items-center gap-2 rounded-full bg-accent-500 px-5 text-sm font-semibold text-navy-950 transition-colors duration-300 hover:bg-accent-600 hover:text-white sm:inline-flex"
          >
            {t.contactCta}
          </a>
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.closeMenu : t.openMenu}
            className={`inline-flex size-12 items-center justify-center rounded-full transition-colors lg:hidden ${
              solid ? "text-navy-900 hover:bg-surface" : "text-white hover:bg-white/10"
            }`}
          >
            <Icon name={open ? "close" : "menu"} className="size-6" />
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        ref={panelRef}
        inert={!open}
        className={`fixed inset-x-0 bottom-0 overflow-y-auto bg-white transition-[clip-path,visibility] duration-500 ease-(--ease-premium) lg:hidden ${
          open ? "visible [clip-path:inset(0_0_0_0)]" : "invisible [clip-path:inset(0_0_100%_0)]"
        } ${scrolled ? "top-16" : "top-20"}`}
      >
        <div className="shell flex min-h-full flex-col pb-10 pt-6">
          <ul className="flex flex-col">
            {navigation.map(({ id, label }, i) => (
              <li
                key={id}
                style={delay(open ? 80 + i * 45 : 0)}
                className={`border-b border-line transition-[opacity,transform] duration-500 ease-(--ease-premium) [transition-delay:var(--d)] ${
                  open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
                }`}
              >
                <a
                  href={`#${id}`}
                  onClick={() => close(false)}
                  aria-current={active === id ? "location" : undefined}
                  className="flex min-h-16 items-center justify-between text-2xl font-medium tracking-tight text-navy-900"
                >
                  {label}
                  <span className="font-mono text-xs text-subtle">0{i + 1}</span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => close(false)}
            className="mt-10 inline-flex min-h-14 items-center justify-center rounded-full bg-accent-500 px-6 font-semibold text-navy-950"
          >
            {t.contactCta}
          </a>
          <p className="mt-auto pt-10 text-xl text-accent-600">« {tagline} »</p>
        </div>
      </div>
    </header>
  );
}
