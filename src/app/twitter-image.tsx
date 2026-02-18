import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Chilli Flakes Studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(join(process.cwd(), "public", "logo.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#0B0B0B",
          gap: "20px",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          width={180}
          height={266}
          alt="Chilli Flakes Studio"
          style={{ borderRadius: "16px" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <div
            style={{
              color: "#FFFFFF",
              fontSize: 48,
              fontWeight: 700,
              letterSpacing: "2px",
            }}
          >
            CHILLI FLAKES STUDIO
          </div>
          <div
            style={{
              color: "#999999",
              fontSize: 24,
            }}
          >
            Bold conversations that matter
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
