"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { Menu, X } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { PERSONAL_INFO } from "@/lib/constants"

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
]

// Mirrors the desktop header CTA — downloads the PDF from pages/api/resume.ts
const RESUME_CTA = {
  label: "Resume",
  href: PERSONAL_INFO.resume,
}

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false)
    }
    document.addEventListener("keydown", handleKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen])

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
        className="btn-pop -mr-3 p-2 text-custom-accent hover:text-custom-accent/80 transition-colors">
        <Menu className="w-6 h-6" />
      </button>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {isOpen && (
              <div className="fixed inset-0 z-[100] md:hidden" role="dialog" aria-modal="true" aria-label="Menu">
                <motion.div
                  key="backdrop"
                  onClick={() => setIsOpen(false)}
                  className="absolute inset-0 bg-oxford-blue/60 backdrop-blur-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />

                <motion.div
                  key="drawer"
                  className="absolute right-0 top-0 h-full w-3/4 max-w-xs bg-[#112240] shadow-2xl flex flex-col"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close menu"
                    className="btn-pop self-end p-5 text-custom-accent hover:text-custom-accent/80 transition-colors">
                    <X className="w-6 h-6" />
                  </button>

                  <nav className="flex-1 flex flex-col justify-center items-center gap-8 px-6">
                    {NAV_LINKS.map(link => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-lg text-custom-foreground hover:text-custom-accent transition-colors">
                        {link.label}
                      </a>
                    ))}

                    <a
                      href={RESUME_CTA.href}
                      download
                      onClick={() => setIsOpen(false)}
                      className="btn-pop mt-6 border border-accent text-custom-accent px-8 py-3 rounded hover:bg-accent/10 transition-colors font-mono text-sm">
                      {RESUME_CTA.label}
                    </a>
                  </nav>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  )
}

export default MobileMenu
