"use client"

import { useState } from "react"
import { findTechnology } from "@/lib/constants"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { TechDetails, TechModal, useCanHover, type Tech } from "@/components/shared/TechDetail"

interface TechWithHoverCardProps {
  text: string
  className?: string
}

export default function TechWithHoverCard({ text, className = "" }: TechWithHoverCardProps) {
  // On touch devices (no hover), tapping opens a modal instead of the hover card
  const canHover = useCanHover()
  const [activeTech, setActiveTech] = useState<Tech | null>(null)

  // Process the text to find technology matches
  const processText = (inputText: string) => {
    const words = inputText.split(" ")
    const result: Array<{ type: "tech" | "text"; content: string; tech?: any; originalWord?: string }> = []
    let i = 0

    while (i < words.length) {
      let matched = false

      // Try to match multi-word technologies (up to 3 words)
      for (let wordCount = 3; wordCount >= 1; wordCount--) {
        if (i + wordCount <= words.length) {
          const phrase = words.slice(i, i + wordCount).join(" ")
          let tech = findTechnology(phrase)
          let matchedPart = phrase
          const originalPhrase = phrase

          // If no direct match, try compound word extraction for single words only
          if (!tech && wordCount === 1) {
            const word = phrase
            // Check if word contains a hyphen and try the first part
            const hyphenIndex = word.indexOf("-")
            if (hyphenIndex > 0) {
              const firstPart = word.substring(0, hyphenIndex)
              tech = findTechnology(firstPart)
              if (tech) {
                matchedPart = firstPart
              }
            }

            // Check if word is enclosed in parentheses (with possible trailing punctuation)
            if (!tech && word.startsWith("(")) {
              const closingParenIndex = word.indexOf(")")
              if (closingParenIndex > 0) {
                const innerText = word.slice(1, closingParenIndex)
                tech = findTechnology(innerText)
                if (tech) {
                  matchedPart = innerText
                }
              }
            }
          }

          if (tech) {
            result.push({ type: "tech", content: matchedPart, tech, originalWord: originalPhrase })
            i += wordCount
            matched = true
            break
          }
        }
      }

      if (!matched) {
        result.push({ type: "text", content: words[i] })
        i++
      }
    }

    return result
  }

  const processedText = processText(text)

  const renderSuffix = (item: { content: string; originalWord?: string }) => {
    if (item.content === item.originalWord) return ""
    if (item.originalWord?.startsWith("(")) {
      const closingParenIndex = item.originalWord.indexOf(")")
      if (closingParenIndex > 0) {
        return item.originalWord.substring(1 + item.content.length)
      }
    }
    return item.originalWord?.substring(item.content.length) || ""
  }

  return (
    <>
      {processedText.map((item, index) => {
        if (item.type === "tech" && item.tech) {
          const trigger = (
            <span
              className={`text-custom-accent cursor-pointer hover:underline ${className}`}
              onClick={() => !canHover && setActiveTech(item.tech)}>
              {item.content}
            </span>
          )

          return (
            <span key={index}>
              {index > 0 && " "}
              {item.originalWord?.startsWith("(") && "("}
              {canHover ? (
                <HoverCard openDelay={300} closeDelay={150}>
                  <HoverCardTrigger asChild>{trigger}</HoverCardTrigger>
                  <HoverCardContent
                    className="w-80 bg-slate-800/90 border-slate-700 backdrop-blur-sm text-left"
                    side="top">
                    <TechDetails tech={item.tech} />
                  </HoverCardContent>
                </HoverCard>
              ) : (
                trigger
              )}
              {renderSuffix(item)}
            </span>
          )
        }
        return (
          <span key={index}>
            {index > 0 && " "}
            {item.content}
          </span>
        )
      })}

      {activeTech && <TechModal tech={activeTech} onClose={() => setActiveTech(null)} />}
    </>
  )
}
