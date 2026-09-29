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
  accent: "#7CFAD6",
}

// WhatsApp, Slack and Telegram crop the card to its centre square and render it
// small, so every element sits inside a 630-wide centre column and the type is
// sized to survive a thumbnail. That width is also what caps the name's size.
const SAFE_WIDTH = size.height - 40

const BADGES = ["React", "Next.js", "React Native"]

const OpenGraphImage = () =>
  new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: COLORS.background,
          // Off-centre glows: accent from the upper left, a cooler blue from the
          // lower right. A centred glow reads flat once the card is cropped square.
          backgroundImage: `radial-gradient(circle at 20% 15%, rgba(124, 250, 214, 0.22), transparent 55%), radial-gradient(circle at 88% 92%, rgba(56, 130, 246, 0.22), transparent 55%)`,
        }}>
        <div
          style={{
            width: SAFE_WIDTH,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <div
            style={{
              display: "flex",
              fontSize: 62,
              fontWeight: 700,
              color: COLORS.foreground,
              whiteSpace: "nowrap",
            }}>
            {PERSONAL_INFO.name}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 18,
              fontSize: 48,
              fontWeight: 600,
              color: COLORS.accent,
            }}>
            Full Stack Developer
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 16,
              marginTop: 44,
            }}>
            {BADGES.map(badge => (
              <div
                key={badge}
                style={{
                  display: "flex",
                  padding: "10px 24px",
                  borderRadius: 999,
                  border: `2px solid rgba(124, 250, 214, 0.45)`,
                  color: COLORS.foreground,
                  fontSize: 27,
                }}>
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size,
  )

export default OpenGraphImage
