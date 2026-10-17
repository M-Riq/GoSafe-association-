"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState, type MouseEvent } from "react";
import type { Dictionary } from "@/content";
import { Icon } from "@/components/ui/Icon";
import { galleryCategories, type GalleryCategoryId, type GalleryImage } from "./gallery-data";

type Filter = "all" | GalleryCategoryId;
type Size = "md" | "lg";
type RowConfig = { items: GalleryImage[]; direction: 1 | -1; size: Size };
type Active = { image: GalleryImage; origin: HTMLElement };
type Texts = Dictionary["gallery"];
type Describe = { labelOf: (id: GalleryCategoryId) => string; altOf: (image: GalleryImage) => string };

const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";
const MIN_CARDS = 10;

function interleave(a: GalleryImage[], b: GalleryImage[]) {
  const out: GalleryImage[] = [];
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    if (a[i]) out.push(a[i]);
    if (b[i]) out.push(b[i]);
  }
  return out;
}

const [forum, motoTaxi] = galleryCategories;
const mixedRows: RowConfig[] = [
  { items: interleave(forum.images, motoTaxi.images), direction: 1, size: "md" },
  { items: interleave([...motoTaxi.images].reverse(), [...forum.images].reverse()), direction: -1, size: "md" },
];

function rowsFor(filter: Filter): RowConfig[] {
  if (filter === "all") return mixedRows;
  const category = galleryCategories.find((c) => c.id === filter)!;
  return [{ items: category.images, direction: 1, size: "lg" }];
}

// Near-4:3 photos fill a uniform card (negligible crop); unusual ratios are shown whole.
const CARD_RATIO = 4 / 3;
const isCover = ({ src }: GalleryImage) => Math.abs(src.width / src.height / CARD_RATIO - 1) <= 0.1;

export function GalleryViewer({ t, close }: { t: Texts; close: string }) {
  const [filter, setFilter] = useState<Filter>("all");
  const [active, setActive] = useState<Active | null>(null);
  const total = galleryCategories.reduce((n, c) => n + c.images.length, 0);
  const labelOf = (id: GalleryCategoryId) => t.categories[id];
  const altOf = (image: GalleryImage) => `${labelOf(image.category)} — ${t.photo} ${image.n}`;

  const filters: { id: Filter; label: string; count: number }[] = [
    { id: "all", label: t.all, count: total },
    ...galleryCategories.map((c) => ({ id: c.id, label: labelOf(c.id), count: c.images.length })),
  ];

  return (
    <>
      <div className="shell">
        <div
          data-reveal
          role="group"
          aria-label={t.filterAria}
          className="no-scrollbar -mx-[clamp(1.25rem,4vw,2.5rem)] mt-10 flex gap-2 overflow-x-auto px-[clamp(1.25rem,4vw,2.5rem)] pb-1 lg:mt-14"
        >
          {filters.map((f) => {
            const selected = filter === f.id;
            return (
              <button
                key={f.id}
                type="button"
                aria-pressed={selected}
                onClick={() => setFilter(f.id)}
                className={`flex shrink-0 items-center gap-2.5 rounded-full border px-5 py-2.5 text-sm font-medium transition-colors duration-300 ${
                  selected
                    ? "border-navy-900 bg-navy-900 text-white"
                    : "border-line bg-white text-navy-900 hover:border-brand-300"
                }`}
              >
                {f.label}
                <span
                  className={`font-mono text-[0.7rem] ${selected ? "text-accent-500" : "text-subtle"}`}
                >
                  {String(f.count).padStart(2, "0")}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div key={filter} className="gallery-swap mt-10 space-y-4 lg:mt-14 lg:space-y-6">
        {rowsFor(filter).map((row, i) => (
          <MarqueeRow
            key={i}
            {...row}
            labelOf={labelOf}
            altOf={altOf}
            enlarge={t.enlarge}
            paused={active !== null}
            onOpen={(image, origin) => setActive({ image, origin })}
          />
        ))}
      </div>

      <p className="shell mt-6 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-subtle">
        {t.hint}
      </p>

      <Lightbox
        active={active}
        onClosed={() => setActive(null)}
        labelOf={labelOf}
        altOf={altOf}
        fallback={t.photoFallback}
        close={close}
      />
    </>
  );
}

type RowProps = RowConfig &
  Describe & {
    enlarge: string;
    paused: boolean;
    onOpen: (image: GalleryImage, origin: HTMLElement) => void;
  };

function MarqueeRow({ items, direction, size, labelOf, altOf, enlarge, paused, onOpen }: RowProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);
  const pausedRef = useRef(paused);
  const slowRef = useRef(false);

  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  // Repeat short lists so one half of the loop always covers wide screens.
  let base = items;
  while (base.length < MIN_CARDS) base = base.concat(items);
  const loop = base.concat(base);

  useEffect(() => {
    const viewport = viewportRef.current!;
    const track = trackRef.current!;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const speed = size === "lg" ? 55 : 40; // px per second
    let half = 0;
    let mid = 0;
    let cards: { center: number; el: HTMLElement }[] = [];
    let x = 0;
    let v = 0;
    let dirty = true;
    let visible = true;
    let last = performance.now();
    let raf = 0;

    const measure = () => {
      const prevHalf = half;
      half = track.scrollWidth / 2;
      mid = viewport.clientWidth / 2;
      cards = Array.from(track.children, (li) => ({
        center: (li as HTMLElement).offsetLeft + (li as HTMLElement).offsetWidth / 2,
        el: li.firstElementChild as HTMLElement,
      }));
      if (!prevHalf) x = direction > 0 ? -half : 0;
      dirty = true;
      if (visible && half && !raf) raf = requestAnimationFrame(tick);
    };

    const tick = (now: number) => {
      if (!visible || !half) {
        raf = 0;
        return;
      }
      raf = requestAnimationFrame(tick);
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;

      const target = pausedRef.current ? 0 : slowRef.current ? speed * 0.25 : speed;
      v += (target - v) * Math.min(1, dt * 3);
      if (Math.abs(v) < 0.05 && !dirty) return;
      dirty = false;

      x += v * dt * direction;
      if (x > 0) x -= half;
      else if (x < -half) x += half;
      track.style.transform = `translate3d(${x}px,0,0)`;

      // Cylinder effect: cards curve away from the viewer towards the edges.
      for (const card of cards) {
        const d = (card.center + x - mid) / mid;
        if (d < -1.6 || d > 1.6) continue;
        const c = Math.max(-1.2, Math.min(1.2, d));
        card.el.style.transform = `rotateY(${c * 22}deg) translateZ(${-c * c * 110}px)`;
        card.el.style.opacity = String(1 - Math.abs(c) * 0.3);
      }
    };

    measure();
    const resize = new ResizeObserver(measure);
    resize.observe(viewport);
    resize.observe(track);
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      last = performance.now();
      if (visible && !raf) raf = requestAnimationFrame(tick);
    });
    io.observe(viewport);
    if (!raf) raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      resize.disconnect();
      io.disconnect();
    };
  }, [direction, size]);

  const height = size === "lg" ? "h-[clamp(15rem,42vw,30rem)]" : "h-[clamp(11rem,24vw,18rem)]";
  const sizes = size === "lg" ? "(min-width: 1024px) 40rem, 85vw" : "(min-width: 1024px) 24rem, 60vw";

  return (
    <div className="gallery-fade">
      <div
        ref={viewportRef}
        className="gallery-viewport no-scrollbar overflow-hidden py-6 [perspective:1400px]"
        onPointerEnter={(e) => e.pointerType === "mouse" && (slowRef.current = true)}
        onPointerLeave={() => (slowRef.current = false)}
        onFocus={() => (slowRef.current = true)}
        onBlur={() => (slowRef.current = false)}
      >
        <ul ref={trackRef} className="relative flex w-max [transform-style:preserve-3d] will-change-transform">
          {loop.map((image, i) => {
            const clone = i >= base.length;
            const cover = isCover(image);
            return (
              <li key={`${image.id}-${i}`} aria-hidden={clone || undefined} className="pointer-events-none shrink-0 pr-4 [transform-style:preserve-3d] lg:pr-6">
                <button
                  type="button"
                  tabIndex={clone ? -1 : undefined}
                  aria-label={`${enlarge} ${altOf(image)}`}
                  onClick={(e) => onOpen(image, e.currentTarget)}
                  style={{ aspectRatio: cover ? "4 / 3" : `${image.src.width} / ${image.src.height}` }}
                  className={`group pointer-events-auto relative block ${height} cursor-zoom-in overflow-hidden bg-navy-900/10 shadow-[0_24px_48px_-28px_rgb(7_31_71/0.55)]`}
                >
                  <Image
                    src={image.src}
                    alt=""
                    fill
                    sizes={sizes}
                    quality={60}
                    draggable={false}
                    className={cover ? "object-cover" : "object-contain"}
                  />
                  <span className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-navy-950/80 to-transparent p-4 pt-12 text-left opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                    <span className="text-xs font-medium leading-snug text-white sm:text-sm">{labelOf(image.category)}</span>
                    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-white/15 text-white backdrop-blur">
                      <Icon name="arrowUpRight" className="size-4" />
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

/** Start state that makes the full image look like it sits exactly on the clicked card. */
function flipFrom(from: DOMRect, to: DOMRect) {
  const s = Math.max(from.width / to.width, from.height / to.height);
  const dx = from.left + from.width / 2 - (to.left + to.width / 2);
  const dy = from.top + from.height / 2 - (to.top + to.height / 2);
  const insetX = Math.max(0, (to.width - from.width / s) / 2);
  const insetY = Math.max(0, (to.height - from.height / s) / 2);
  return {
    transform: `translate(${dx}px, ${dy}px) scale(${s})`,
    clipPath: `inset(${insetY}px ${insetX}px round ${12 / s}px)`,
  };
}

const settled = { transform: "none", clipPath: "inset(0px 0px round 12px)" };

function Lightbox({
  active,
  onClosed,
  labelOf,
  altOf,
  fallback,
  close: closeLabel,
}: Describe & { active: Active | null; onClosed: () => void; fallback: string; close: string }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const closingRef = useRef(false);
  const [closing, setClosing] = useState(false);

  useLayoutEffect(() => {
    if (!active) return;
    const dialog = dialogRef.current!;
    const frame = frameRef.current!;
    if (!dialog.open) dialog.showModal();
    closingRef.current = false;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    frame.animate([flipFrom(active.origin.getBoundingClientRect(), frame.getBoundingClientRect()), settled], {
      duration: reduce ? 0 : 650,
      easing: EASE,
    });
  }, [active]);

  const close = () => {
    if (!active || closingRef.current) return;
    closingRef.current = true;
    setClosing(true);
    const frame = frameRef.current!;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const anim = frame.animate(
      [settled, flipFrom(active.origin.getBoundingClientRect(), frame.getBoundingClientRect())],
      { duration: reduce ? 0 : 480, easing: EASE, fill: "forwards" },
    );
    anim.finished.finally(() => {
      dialogRef.current?.close();
      anim.cancel();
      setClosing(false);
      onClosed();
    });
  };

  const onDialogClick = (e: MouseEvent<HTMLDialogElement>) => {
    if (!frameRef.current?.contains(e.target as Node)) close();
  };

  return (
    <dialog
      ref={dialogRef}
      aria-label={active ? altOf(active.image) : fallback}
      data-closing={closing || undefined}
      onClick={onDialogClick}
      onCancel={(e) => {
        e.preventDefault();
        close();
      }}
      className="gallery-lightbox m-0 h-dvh max-h-none w-full max-w-none cursor-zoom-out overflow-hidden bg-transparent p-4 open:grid open:place-items-center sm:p-10"
    >
      {active && (
        <figure className="flex max-w-full flex-col items-center">
          <div
            ref={frameRef}
            style={{
              aspectRatio: `${active.image.src.width} / ${active.image.src.height}`,
              width: `min(92vw, 80rem, calc(78dvh * ${active.image.src.width / active.image.src.height}))`,
            }}
            className="relative cursor-default overflow-hidden rounded-xl shadow-[0_40px_80px_-30px_rgb(0_0_0/0.7)] will-change-transform"
          >
            <Image
              src={active.image.src}
              alt={altOf(active.image)}
              fill
              sizes="92vw"
              quality={75}
              placeholder="blur"
              className="object-cover"
            />
          </div>
          <figcaption className="gallery-caption mt-5 flex items-center gap-3 text-center text-sm text-white/85">
            <span aria-hidden="true" className="h-px w-6 bg-accent-500" />
            {labelOf(active.image.category)}
          </figcaption>
        </figure>
      )}
      <button
        type="button"
        onClick={close}
        aria-label={closeLabel}
        className="gallery-caption absolute right-4 top-4 grid size-11 place-items-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20 sm:right-8 sm:top-8"
      >
        <Icon name="close" className="size-5" />
      </button>
    </dialog>
  );
}
