import type { Dictionary } from "@/content";
import { Rich, SectionHeading } from "@/components/ui/SectionHeading";
import { PartnersStrip } from "./PartnersStrip";

export function Partners({ t }: { t: Dictionary }) {
  const { partners } = t;
  return (
    <section
      id="nos-partenaires"
      aria-labelledby="partners-title"
      className="bg-white py-[clamp(4rem,7vw,6rem)]"
    >
      <div className="shell">
        <SectionHeading
          index="03"
          eyebrow={partners.eyebrow}
          id="partners-title"
          title={<Rich parts={partners.title} />}
          intro={partners.intro}
        />
      </div>
      <PartnersStrip t={partners} close={t.common.close} />
    </section>
  );
}
