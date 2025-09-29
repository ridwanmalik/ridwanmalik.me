import Navbar from "@/components/layouts/Navbar"
import { PERSONAL_INFO } from "@/lib/constants"
import "@/styles/globals.css"
import type { Metadata } from "next"
import { ReactNode } from "react"

export const metadata: Metadata = {
  title: {
    default: PERSONAL_INFO.name,
    template: `%s | ${PERSONAL_INFO.name}`,
  },
  description: PERSONAL_INFO.description,
  keywords: [
    "Sk. Ridwanul Malik",
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Laravel",
    "PHP",
    "Node.js",
    "Vue.js",
    "JavaScript",
    "TypeScript",
    "Web Development",
    "Frontend",
    "Backend",
    "Portfolio",
  ],
  authors: [{ name: PERSONAL_INFO.name, url: "https://ridwanmalik.me" }],
  creator: PERSONAL_INFO.name,
  publisher: PERSONAL_INFO.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ridwanmalik.me",
    siteName: PERSONAL_INFO.name,
    title: PERSONAL_INFO.name,
    description: PERSONAL_INFO.description,
    images: [
      {
        url: "https://ridwanmalik.me/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${PERSONAL_INFO.name} - Software Engineer Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PERSONAL_INFO.name,
    description: PERSONAL_INFO.description,
    images: ["https://ridwanmalik.me/og-image.jpg"],
  },
  alternates: {
    canonical: "https://ridwanmalik.me",
  },
  metadataBase: new URL("https://ridwanmalik.me"),
}

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en" className="dark">
      <body
        className="h-screen w-screen bg-slate-900 text-slate-400 bg-glowing-blue font-sans tracking-wide"
        style={{
          fontFamily: "var(--font-sans)",
        }}>
        <div className="h-screen w-screen relative">
          <Navbar />
          <div className="section-wrapper">{children}</div>
        </div>
      </body>
    </html>
  )
}

export default RootLayout
