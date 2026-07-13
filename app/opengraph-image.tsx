import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} - ${siteConfig.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "64px",
          color: "white",
          background:
            "radial-gradient(circle at top left, rgba(0,245,255,0.22), transparent 32%), linear-gradient(135deg, #020617 0%, #0f172a 50%, #050816 100%)",
        }}
      >
        <div style={{ fontSize: 24, letterSpacing: "0.28em", textTransform: "uppercase", color: "#8efcff" }}>
          Digital DK
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 860 }}>
          <div style={{ fontSize: 70, lineHeight: 1.04, fontWeight: 700 }}>
            AI Marketing Expert & Consultant
          </div>
          <div style={{ marginTop: 24, fontSize: 30, lineHeight: 1.4, color: "rgba(255,255,255,0.74)" }}>
            Helping businesses grow faster with AI automation, digital marketing, and intelligent growth strategies.
          </div>
        </div>
        <div style={{ display: "flex", gap: 16, fontSize: 20, color: "rgba(255,255,255,0.72)" }}>
          <span>{siteConfig.location}</span>
          <span>AI Marketing Studio</span>
        </div>
      </div>
    ),
    size
  );
}
