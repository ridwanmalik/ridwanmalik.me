"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { Menu, X } from "lucide-react"
import ContactModal from "@/components/shared/ContactModal"

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
]

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
        className="-mr-3 p-2 text-custom-accent hover:text-custom-accent/80 transition-colors">
        <Menu className="w-6 h-6" />
      </button>

      {mounted &&
        isOpen &&
        createPortal(
          <div className="fixed inset-0 z-[100] md:hidden" role="dialog" aria-modal="true" aria-label="Menu">
            {/* Backdrop */}
            <div
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-oxford-blue/60 backdrop-blur-sm animate-in fade-in duration-200"
            />

            {/* Drawer */}
            <div className="absolute right-0 top-0 h-full w-3/4 max-w-xs bg-[#112240] shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                className="self-end p-5 text-custom-accent hover:text-custom-accent/80 transition-colors">
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

                <ContactModal
                  label="Get In Touch"
                  className="mt-6 border border-accent text-custom-accent px-8 py-3 rounded hover:bg-accent/10 transition-colors font-mono text-sm"
                />
              </nav>
            </div>
          </div>,
          document.body
        )}
    </>
  )
}

export default MobileMenu
