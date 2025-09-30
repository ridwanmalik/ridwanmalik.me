import { findTechnology, TECHNICAL_SKILLS } from "@/lib/constants"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"

interface TechWithHoverCardProps {
  text: string
  className?: string
}

export default function TechWithHoverCard({ text, className = "" }: TechWithHoverCardProps) {
  const words = text.split(' ')
  
  return (
    <>
      {words.map((word, index) => {
        const tech = findTechnology(word)
        
        if (tech) {
          const skill = TECHNICAL_SKILLS.find(s => s.name === tech.name)
          
          return (
            <span key={index}>
              {index > 0 && ' '}
              <HoverCard openDelay={300} closeDelay={150}>
                <HoverCardTrigger asChild>
                  <span className={`text-custom-accent cursor-pointer hover:underline ${className}`}>
                    {word}
                  </span>
                </HoverCardTrigger>
                <HoverCardContent 
                  className="w-80 bg-slate-800/90 border-slate-700 backdrop-blur-sm"
                  side="top"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-semibold text-custom-foreground">{tech.name}</h4>
                      <span className={`px-2 py-1 text-xs rounded-full text-white ${tech.color}`}>
                        {tech.category}
                      </span>
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
                    {skill && (
                      <div className="flex items-center justify-between pt-2 border-t border-slate-700">
                        <span className="text-xs text-custom-secondary">Proficiency Level</span>
                        <span className="text-xs font-mono text-custom-accent">{skill.level}%</span>
                      </div>
                    )}
                  </div>
                </HoverCardContent>
              </HoverCard>
            </span>
          )
        }
        
        return <span key={index}>{index > 0 && ' '}{word}</span>
      })}
    </>
  )
}