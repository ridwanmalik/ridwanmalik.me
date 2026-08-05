"use client"

import type { ReactNode } from "react"
import { motion } from "motion/react"

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  from?: "bottom" | "left" | "right"
}

const OFFSETS = {
  bottom: { x: 0, y: 24 },
  left: { x: -24, y: 0 },
  right: { x: 24, y: 0 },
} as const

const Reveal = ({ children, className, delay = 0, from = "bottom" }: RevealProps) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, ...OFFSETS[from] }}
    whileInView={{ opacity: 1, x: 0, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
)

export default Reveal
