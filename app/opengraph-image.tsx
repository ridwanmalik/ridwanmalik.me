import { PERSONAL_INFO } from "@/lib/constants"
import { ImageResponse } from "next/og"

// File-based OG image: Next serves this at /opengraph-image and injects the
// og:image tags itself, so there is no static JPG to keep in sync.
export const alt = `${PERSONAL_INFO.name} - Full Stack Developer`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

// Mirrors the site's palette (tailwind.config.ts): oxford-blue, foreground, accent.
const COLORS = {
  background: "#0A192F",
  foreground: "#ccd6f6",
  secondary: "#8892b0",
  accent: "#7CFAD6",
}

const STACK = ["React", "Next.js", "React Native", "TypeScript", "Node.js"]

// Displayed without the protocol, but still sourced from the one constant.
const DOMAIN = PERSONAL_INFO.website.replace(/^https?:\/\//, "")

const OpenGraphImage = () =>
  new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: COLORS.background,
          backgroundImage: `radial-gradient(circle at 75% 15%, rgba(124, 250, 214, 0.16), transparent 55%)`,
        }}>
        <div style={{ display: "flex", fontSize: 72, fontWeight: 700, color: COLORS.foreground }}>
          {PERSONAL_INFO.name}
        </div>
        <div style={{ display: "flex", marginTop: 16, fontSize: 40, color: COLORS.accent }}>
          Full Stack Developer
        </div>
        <div style={{ display: "flex", marginTop: 24, fontSize: 28, color: COLORS.secondary }}>
          8+ years building web and mobile products end to end
        </div>
        <div style={{ display: "flex", gap: 16, marginTop: 48 }}>
          {STACK.map(item => (
            <div
              key={item}
              style={{
                display: "flex",
                padding: "10px 22px",
                borderRadius: 999,
                border: `1px solid ${COLORS.accent}`,
                color: COLORS.accent,
                fontSize: 24,
              }}>
              {item}
            </div>
          ))}
        </div>
        <div style={{ display: "flex", marginTop: 56, fontSize: 30, color: COLORS.foreground }}>
          {DOMAIN}
        </div>
      </div>
    ),
    size,
  )

export default OpenGraphImage
