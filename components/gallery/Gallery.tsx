import type { Dictionary } from "@/content";
import { Rich, SectionHeading } from "@/components/ui/SectionHeading";
import { GalleryViewer } from "./GalleryViewer";

export function Gallery({ t }: { t: Dictionary }) {
  const { gallery } = t;
  return (
    <section id="galerie" aria-labelledby="gallery-title" className="section-y overflow-hidden bg-surface">
      <div className="shell">
        <SectionHeading
          index="05"
          eyebrow={gallery.eyebrow}
          id="gallery-title"
          title={<Rich parts={gallery.title} />}
          intro={gallery.intro}
        />
      </div>
      <GalleryViewer t={gallery} close={t.common.close} />
    </section>
  );
}
