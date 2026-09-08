import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#08080a",
          padding: "80px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -220,
            left: -160,
            width: 700,
            height: 700,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(124,92,255,0.45), rgba(124,92,255,0) 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -260,
            right: -140,
            width: 620,
            height: 620,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(34,211,238,0.28), rgba(34,211,238,0) 70%)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 20,
              background: "linear-gradient(140deg, #7c5cff, #22d3ee)",
            }}
          />
          <div
            style={{
              fontSize: 42,
              fontWeight: 700,
              color: "#f2f2f5",
              letterSpacing: "-0.02em",
            }}
          >
            NOVA
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              display: "flex",
              fontSize: 96,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              color: "#f2f2f5",
            }}
          >
            {site.tagline}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 32,
              lineHeight: 1.4,
              color: "#9c9ca9",
              maxWidth: 860,
            }}
          >
            The AI productivity platform where your team plans, automates and
            collaborates — all in one place.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              padding: "10px 22px",
              borderRadius: 9999,
              border: "1px solid rgba(124,92,255,0.42)",
              background: "rgba(124,92,255,0.12)",
              color: "#a68fff",
              fontSize: 26,
              fontWeight: 600,
            }}
          >
            Free for 14 days
          </div>
          <div style={{ display: "flex", color: "#9c9ca9", fontSize: 26 }}>
            Set up in under 5 minutes
          </div>
        </div>
      </div>
    ),
    size,
  );
}
