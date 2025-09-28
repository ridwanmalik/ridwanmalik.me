import { Navbar } from "@/components"
import "@/styles/globals.css"
import type { Metadata } from "next"
import { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Sk. Ridwanul Malik",
  description: "Full Stack Web Developer with excellent problem-solving skills. Passionate about coding and learning new technologies.",
}

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className="h-screen w-screen bg-white dark:bg-slate-900 dark:text-slate-400 text-slate-500 dark:bg-glowing-blue font-sans tracking-wide"
        style={{
          fontFamily: 'var(--font-sans)'
        }}>
        <div className="h-screen w-screen relative">
          <Navbar />
          <div className="section-wrapper">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}

export default RootLayout
