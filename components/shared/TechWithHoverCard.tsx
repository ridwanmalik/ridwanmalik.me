import { findTechnology, TECHNICAL_SKILLS } from "@/lib/constants"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"

interface TechWithHoverCardProps {
  text: string
  className?: string
}

export default function TechWithHoverCard({ text, className = "" }: TechWithHoverCardProps) {
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
          let originalPhrase = phrase

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
              // Find the closing parenthesis
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

  return (
    <>
      {processedText.map((item, index) => {
        if (item.type === "tech" && item.tech) {
          const skill = TECHNICAL_SKILLS.find(s => s.name === item.tech.name)

          return (
            <span key={index}>
              {index > 0 && " "}
              {/* Render opening parenthesis if word was in parentheses */}
              {item.originalWord?.startsWith("(") && "("}
              <HoverCard openDelay={300} closeDelay={150}>
                <HoverCardTrigger asChild>
                  <span className={`text-custom-accent cursor-pointer hover:underline ${className}`}>
                    {item.content}
                  </span>
                </HoverCardTrigger>
                <HoverCardContent
                  className="w-80 bg-slate-800/90 border-slate-700 backdrop-blur-sm text-left"
                  side="top">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-semibold text-custom-foreground">{item.tech.name}</h4>
                      <span className={`px-2 py-1 text-xs rounded-full text-white/60 ${item.tech.color}`}>
                        {item.tech.category}
                      </span>
                    </div>
                    <p className="text-xs text-custom-secondary leading-relaxed">{item.tech.description}</p>
                    <div className="space-y-1">
                      <p className="text-xs font-medium text-custom-accent">Key Features:</p>
                      <ul className="text-xs text-custom-secondary space-y-1">
                        {item.tech.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="text-custom-accent mr-2">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {skill && (
                      <div className="flex items-center justify-between pt-2 border-t border-slate-700">
                        <span className="text-xs text-custom-secondary">Proficiency Level</span>
                        <span className="text-xs font-mono text-custom-accent">{skill.level}%</span>
                      </div>
                    )}
                  </div>
                </HoverCardContent>
              </HoverCard>
              {/* Render the remaining part of the word if it was a compound word or parentheses */}
              {item.content !== item.originalWord &&
                (() => {
                  if (item.originalWord?.startsWith("(")) {
                    // For parentheses: find closing paren and render everything after the matched content
                    const closingParenIndex = item.originalWord.indexOf(")")
                    if (closingParenIndex > 0) {
                      return item.originalWord.substring(1 + item.content.length) // +1 to account for opening paren
                    }
                  }
                  // For hyphens: render the remaining part after the matched part
                  return item.originalWord?.substring(item.content.length) || ""
                })()}
            </span>
          )
        } else {
          return (
            <span key={index}>
              {index > 0 && " "}
              {item.content}
            </span>
          )
        }
      })}
    </>
  )
}
