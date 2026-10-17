import { notFound } from "next/navigation";
import { About } from "@/components/about/About";
import { Contact } from "@/components/contact/Contact";
import { FinalCta } from "@/components/cta/FinalCta";
import { Expertise } from "@/components/expertise/Expertise";
import { Footer } from "@/components/footer/Footer";
import { Gallery } from "@/components/gallery/Gallery";
import { Hero } from "@/components/hero/Hero";
import { HumanImpact } from "@/components/human-impact/HumanImpact";
import { LuluStory } from "@/components/lulu/LuluStory";
import { MissionVision } from "@/components/mission/MissionVision";
import { Navbar } from "@/components/navbar/Navbar";
import { Partners } from "@/components/partners/Partners";
import { Presence } from "@/components/presence/Presence";
import { Services } from "@/components/services/Services";
import { Statistics } from "@/components/statistics/Statistics";
import { MotionObserver } from "@/components/ui/MotionObserver";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { getDictionary } from "@/content";
import { hasLocale } from "@/lib/i18n";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang);

  return (
    <>
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-navy-900"
      >
        {t.common.skipLink}
      </a>
      <Navbar
        locale={lang}
        t={t.navbar}
        navigation={t.navigation}
        organizationName={t.organization.name}
        tagline={t.organization.tagline}
      />
      <main id="contenu" className="flex-1">
        <Hero t={t} />
        <SectionDivider />
        <About t={t} />
        <SectionDivider />
        <Statistics t={t} />
        <SectionDivider />
        <Services t={t} />
        <SectionDivider />
        <Partners t={t} />
        <SectionDivider />
        <Expertise t={t} />
        <SectionDivider />
        <Gallery t={t} />
        <SectionDivider />
        <MissionVision t={t} />
        <SectionDivider />
        <Presence t={t} />
        <SectionDivider />
        <HumanImpact t={t} />
        <SectionDivider />
        <LuluStory t={t} locale={lang} />
        <SectionDivider />
        {/* <FinalCta t={t} /> */}
        <Contact t={t} />
      </main>
      <Footer t={t} />
      <MotionObserver />
    </>
  );
}
