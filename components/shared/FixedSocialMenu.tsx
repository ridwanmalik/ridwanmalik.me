"use client"

import { SOCIAL_LINKS } from "@/lib/constants"
import { Github, Linkedin, Twitter, Instagram } from "lucide-react"
import { HackerRankIcon } from "@/lib/icons"

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
  hackerrank: () => <HackerRankIcon />
}

export default function FixedSocialMenu() {
  return (
    <div className="fixed left-6 bottom-0 z-50 hidden lg:block">
      <div className="flex flex-col items-center space-y-6">
        {/* Social Icons */}
        <div className="flex flex-col space-y-4">
          {SOCIAL_LINKS.map((link, index) => {
            const IconComponent = iconMap[link.icon as keyof typeof iconMap]
            
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-custom-secondary hover:text-custom-accent hover:-translate-y-1 transition-all duration-200 group"
                aria-label={link.name}
              >
                {link.icon === "hackerrank" ? (
                  <HackerRankIcon className="w-5 h-5" />
                ) : (
                  <IconComponent className="w-5 h-5" />
                )}
              </a>
            )
          })}
        </div>
        
        {/* Vertical Line */}
        <div className="w-px h-24 bg-custom-secondary"></div>
      </div>
    </div>
  )
}