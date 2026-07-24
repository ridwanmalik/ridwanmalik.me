"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { TECHNICAL_SKILLS } from "@/lib/constants"

export type Tech = {
  name: string
  category: string
  description: string
  features: string[]
  color: string
}

const getSkillLevel = (name: string) => TECHNICAL_SKILLS.find(s => s.name === name)?.level

// Shared card body used by both the desktop hover card and the mobile modal
export const TechDetails = ({ tech }: { tech: Tech }) => {
  const level = getSkillLevel(tech.name)
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-2">
        <h4 className="text-sm font-semibold text-custom-foreground">{tech.name}</h4>
        <span className={`px-2 py-1 text-xs rounded-full text-white/70 ${tech.color}`}>{tech.category}</span>
      </div>
      <p className="text-xs text-custom-secondary leading-relaxed">{tech.description}</p>
      <div className="space-y-1">
        <p className="text-xs font-medium text-custom-accent">Key Features:</p>
        <ul className="text-xs text-custom-secondary space-y-1">
          {tech.features.map((feature, idx) => (
            <li key={idx} className="flex items-center">
              <span className="text-custom-accent mr-2">•</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      {level !== undefined && (
        <div className="flex items-center justify-between pt-2 border-t border-slate-700">
          <span className="text-xs text-custom-secondary">Proficiency Level</span>
          <span className="text-xs font-mono text-custom-accent">{level}%</span>
        </div>
      )}
    </div>
  )
}

// True when the device supports real hover (desktop); false on touch screens
export const useCanHover = () => {
  const [canHover, setCanHover] = useState(true)
  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      setCanHover(window.matchMedia("(hover: hover)").matches)
    }
  }, [])
  return canHover
}

// Bottom-sheet / centered modal shown when a tech is tapped on touch devices
export const TechModal = ({ tech, onClose }: { tech: Tech; onClose: () => void }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose()
    document.addEventListener("keydown", onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = prev
    }
  }, [onClose])

  if (!mounted) return null

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={tech.name}>
      <div
        className="absolute inset-0 bg-oxford-blue/70 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={onClose}
      />
      <div className="relative w-full max-w-sm bg-slate-800 border border-slate-700 rounded-xl p-5 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        <TechDetails tech={tech} />
      </div>
    </div>,
    document.body
  )
}
