import { readFileSync } from "node:fs";
import path from "node:path";
import { ImageResponse } from "next/og";
import { getDictionary } from "@/content";
import { defaultLocale, hasLocale, locales } from "@/lib/i18n";

export const alt = "GOSAFE Association";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function OpengraphImage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = getDictionary(hasLocale(lang) ? lang : defaultLocale);
  const logo = `data:image/png;base64,${readFileSync(path.join(process.cwd(), "public/logo2.png")).toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 72px",
          background: "linear-gradient(135deg, #04132e 0%, #0b2c63 100%)",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", background: "#ffffff", borderRadius: 24, padding: "4px 12px" }}>
            <img src={logo} width={260} height={130} alt="" />
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "#8db2f2" }}>{t.organization.headquarters}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", width: 96, height: 8, borderRadius: 4, background: "#f26b1d", marginBottom: 24 }} />
          <div style={{ display: "flex", fontSize: 60, lineHeight: 1.1, letterSpacing: -1 }}>{t.organization.tagline}</div>
          <div style={{ display: "flex", fontSize: 28, lineHeight: 1.35, color: "#c9d8f5", marginTop: 20 }}>
            {t.meta.ogDescription}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#8db2f2" }}>
          <span>{t.organization.name}</span>
          <span>gosafe-association.org</span>
        </div>
      </div>
    ),
    size,
  );
}
