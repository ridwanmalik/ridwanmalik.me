"use client"

import { cn } from "@/lib/utils"
import { SOCIAL_LINKS } from "@/lib/constants"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Instagram } from "lucide-react"
import { HackerRankIcon } from "@/lib/icons"

interface SocialIconMenuProps {
  orientation?: "horizontal" | "vertical"
  className?: string
  showHoverCards?: boolean
  size?: "sm" | "md" | "lg"
}

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
  hackerrank: () => <HackerRankIcon />
}

const sizeMap = {
  sm: "h-4 w-4",
  md: "h-5 w-5", 
  lg: "h-6 w-6"
}

export default function SocialIconMenu({ 
  orientation = "horizontal", 
  className,
  showHoverCards = false,
  size = "md"
}: SocialIconMenuProps) {
  const containerClasses = cn(
    "flex gap-4",
    {
      "flex-row": orientation === "horizontal",
      "flex-col": orientation === "vertical"
    },
    className
  )

  const iconSize = sizeMap[size]

  const renderSocialLink = (link: typeof SOCIAL_LINKS[0], index: number) => {
    const IconComponent = iconMap[link.icon as keyof typeof iconMap]
    
    const socialButton = (
      <Button
        variant="ghost"
        size="icon"
        className="text-custom-secondary hover:text-custom-secondary/80 hover:bg-transparent transition-colors duration-200"
        asChild
      >
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.name}
        >
          {link.icon === "hackerrank" ? (
            <HackerRankIcon />
          ) : (
            <IconComponent className={iconSize} />
          )}
        </a>
      </Button>
    )

    if (!showHoverCards) {
      return <div key={index}>{socialButton}</div>
    }

    return (
      <HoverCard key={index} openDelay={300} closeDelay={150}>
        <HoverCardTrigger asChild>
          {socialButton}
        </HoverCardTrigger>
        <HoverCardContent 
          className="w-80 bg-slate-800/90 border-slate-700 backdrop-blur-sm"
          side={orientation === "vertical" ? "right" : "top"}
        >
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              {link.icon === "hackerrank" ? (
                <HackerRankIcon />
              ) : (
                <IconComponent className="h-4 w-4 text-accent" />
              )}
              <h4 className="text-sm font-semibold text-foreground">{link.name}</h4>
            </div>
            <p className="text-xs text-secondary">{link.description}</p>
            <div className="flex items-center pt-2">
              <Button
                variant="outline"
                size="sm"
                className="text-xs h-7 px-2 border-accent text-accent hover:bg-accent/10"
                asChild
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Profile
                </a>
              </Button>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    )
  }

  return (
    <div className={containerClasses}>
      {SOCIAL_LINKS.map(renderSocialLink)}
    </div>
  )
}