"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { Mail, Download, Copy, Check, X } from "lucide-react"
import { PERSONAL_INFO, CONTACT_MODAL } from "@/lib/constants"
import SocialIconMenu from "@/components/shared/SocialIconMenu"

interface ContactModalProps {
  label: string
  className?: string
}

const ContactModal = ({ label, className = "" }: ContactModalProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => setMounted(true), [])

  // Close on Escape and lock body scroll while open
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

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard API unavailable — silently ignore
    }
  }

  const closeModal = () => setIsOpen(false)

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={className}>
        {label}
      </button>

      {mounted &&
        isOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label={CONTACT_MODAL.title}>
            {/* Backdrop */}
            <div
              onClick={closeModal}
              className="absolute inset-0 bg-oxford-blue/80 backdrop-blur-sm animate-in fade-in duration-200"
            />

            {/* Panel */}
            <div className="relative w-full max-w-md rounded-xl border border-accent/20 bg-[#112240] p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
              <button
                type="button"
                onClick={closeModal}
                aria-label="Close"
                className="absolute right-4 top-4 text-custom-secondary hover:text-custom-accent transition-colors">
                <X className="h-5 w-5" />
              </button>

              <h3 className="text-xl font-bold text-custom-foreground">{CONTACT_MODAL.title}</h3>
              <p className="mt-1 text-sm text-custom-secondary">{CONTACT_MODAL.description}</p>

              <div className="mt-6 space-y-3">
                {/* Email */}
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  onClick={closeModal}
                  className="group flex items-center gap-4 rounded-lg border border-accent/20 bg-accent/5 px-4 py-3 transition-colors hover:border-accent/50 hover:bg-accent/10">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-custom-accent">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-medium text-custom-foreground">
                      {CONTACT_MODAL.options.email.label}
                    </span>
                    <span className="block truncate text-xs text-custom-secondary">
                      {CONTACT_MODAL.options.email.description}
                    </span>
                  </span>
                </a>

                {/* Copy email */}
                <button
                  type="button"
                  onClick={handleCopy}
                  className="group flex w-full items-center gap-4 rounded-lg border border-accent/20 px-4 py-3 text-left transition-colors hover:border-accent/50 hover:bg-accent/5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-custom-accent">
                    {copied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-medium text-custom-foreground">
                      {copied ? CONTACT_MODAL.options.copy.copiedLabel : CONTACT_MODAL.options.copy.label}
                    </span>
                    <span className="block truncate text-xs text-custom-secondary">{PERSONAL_INFO.email}</span>
                  </span>
                </button>

                {/* Download résumé */}
                <a
                  href={PERSONAL_INFO.resume}
                  download
                  onClick={closeModal}
                  className="group flex items-center gap-4 rounded-lg border border-accent/20 px-4 py-3 transition-colors hover:border-accent/50 hover:bg-accent/5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-custom-accent">
                    <Download className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-medium text-custom-foreground">
                      {CONTACT_MODAL.options.resume.label}
                    </span>
                    <span className="block truncate text-xs text-custom-secondary">
                      {CONTACT_MODAL.options.resume.description}
                    </span>
                  </span>
                </a>
              </div>

              {/* Socials */}
              <div className="mt-6 border-t border-accent/10 pt-4">
                <p className="mb-2 text-center font-mono text-xs text-custom-secondary">{CONTACT_MODAL.socialsLabel}</p>
                <div className="flex justify-center">
                  <SocialIconMenu orientation="horizontal" size="md" />
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  )
}

export default ContactModal
