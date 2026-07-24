"use client"

import { useState } from "react"
import { TECHNOLOGIES } from "@/lib/constants"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { TechDetails, TechModal, useCanHover, type Tech } from "@/components/shared/TechDetail"

interface TechHoverCardProps {
  techName: string
  className?: string
  children: React.ReactNode
}

export default function TechHoverCard({ techName, className = "", children }: TechHoverCardProps) {
  const canHover = useCanHover()
  const [open, setOpen] = useState(false)
  const tech = TECHNOLOGIES[techName as keyof typeof TECHNOLOGIES] as Tech | undefined

  if (!tech) {
    return <span className={className}>{children}</span>
  }

  const trigger = (
    <span
      className={`text-custom-accent cursor-pointer hover:underline ${className}`}
      onClick={() => !canHover && setOpen(true)}>
      {children}
    </span>
  )

  return (
    <>
      {canHover ? (
        <HoverCard openDelay={300} closeDelay={150}>
          <HoverCardTrigger asChild>{trigger}</HoverCardTrigger>
          <HoverCardContent className="w-80 bg-slate-800/90 border-slate-700 backdrop-blur-sm" side="top">
            <TechDetails tech={tech} />
          </HoverCardContent>
        </HoverCard>
      ) : (
        trigger
      )}

      {open && <TechModal tech={tech} onClose={() => setOpen(false)} />}
    </>
  )
}
