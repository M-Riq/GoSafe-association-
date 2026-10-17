"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Dictionary } from "@/content";
import { Icon } from "@/components/ui/Icon";
import cpcs from "@/public/logoCPCS TranscomLimited.jpeg";
import gendarmerie from "@/public/logoGendamerieNational.jpeg";
import mintp from "@/public/logoMinTraveauxPublic.jpeg";
import mintransport from "@/public/logomintransport.jpeg";

type PartnerKey = keyof Dictionary["partners"]["names"];
type Partner = { key: PartnerKey; name: string; logo: StaticImageData; zoom?: number };

const logos: Omit<Partner, "name">[] = [
  // The CPCS file has wide white margins around the mark.
  { key: "cpcs", logo: cpcs, zoom: 1.45 },
  { key: "mintransport", logo: mintransport },
  { key: "mintp", logo: mintp },
  { key: "gendarmerie", logo: gendarmerie },
];

export function PartnersStrip({ t, close }: { t: Dictionary["partners"]; close: string }) {
  const partners: Partner[] = logos.map((p) => ({ ...p, name: t.names[p.key] }));
  const [active, setActive] = useState<Partner | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (active && dialog && !dialog.open) dialog.showModal();
  }, [active]);

  return (
    <div data-motion-zone data-paused={active ? "" : undefined} className="partners mt-12 lg:mt-14">
      <div className="shell max-md:px-0">
        <div className="partners-viewport overflow-hidden border-y border-line md:rounded-2xl md:border">
          <ul className="partners-track flex w-max md:grid md:w-full md:grid-cols-4">
            {[...partners, ...partners].map((partner, i) => {
              const clone = i >= partners.length;
              return (
                <li
                  key={`${partner.name}-${i}`}
                  aria-hidden={clone || undefined}
                  className={`w-[13.5rem] shrink-0 border-r border-line sm:w-[16rem] md:w-auto md:[&:nth-child(4)]:border-r-0 ${
                    clone ? "md:hidden" : ""
                  }`}
                >
                  <button
                    type="button"
                    tabIndex={clone ? -1 : undefined}
                    onClick={() => setActive(partner)}
                    aria-label={`${t.enlargeLogo} ${partner.name}`}
                    className="group flex h-full w-full cursor-zoom-in flex-col items-center px-6 py-8 transition-colors duration-300 hover:bg-brand-50/60 lg:px-10 lg:py-11"
                  >
                    <span className="relative block h-24 w-full sm:h-28 lg:h-32">
                      <Image
                        src={partner.logo}
                        alt=""
                        fill
                        sizes="(min-width: 768px) 20vw, 16rem"
                        style={partner.zoom ? { scale: partner.zoom } : undefined}
                        className="object-contain mix-blend-multiply"
                      />
                    </span>
                    <span aria-hidden="true" className="mt-6 h-px w-8 bg-accent-500 transition-[width] duration-500 ease-(--ease-premium) group-hover:w-14" />
                    <span className="mt-4 text-center text-sm font-semibold leading-snug text-navy-900 lg:text-[0.95rem]">
                      {partner.name}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        aria-label={active?.name ?? t.logoDialog}
        onClose={() => setActive(null)}
        onClick={(e) => e.target === e.currentTarget && e.currentTarget.close()}
        className="partners-dialog m-auto w-[min(92vw,34rem)] max-w-none overflow-visible rounded-2xl bg-white p-0 shadow-[0_40px_80px_-30px_rgb(0_0_0/0.6)]"
      >
        {active && (
          <figure className="flex flex-col items-center p-8 sm:p-12">
            <div className="relative aspect-square w-full max-w-[22rem] overflow-hidden">
              <Image
                src={active.logo}
                alt={`${t.logoAlt} ${active.name}`}
                fill
                sizes="(min-width: 640px) 22rem, 80vw"
                style={active.zoom ? { scale: active.zoom } : undefined}
                className="object-contain"
              />
            </div>
            <span aria-hidden="true" className="mt-8 h-px w-12 bg-accent-500" />
            <figcaption className="mt-4 text-center text-lg font-semibold tracking-tight text-navy-900 sm:text-xl">
              {active.name}
            </figcaption>
          </figure>
        )}
        <button
          type="button"
          onClick={() => dialogRef.current?.close()}
          aria-label={close}
          className="absolute right-3 top-3 grid size-11 place-items-center rounded-full text-navy-900 transition-colors hover:bg-surface"
        >
          <Icon name="close" className="size-5" />
        </button>
      </dialog>
    </div>
  );
}
