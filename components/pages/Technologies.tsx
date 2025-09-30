import { SECTION_TITLES, TECHNICAL_SKILLS } from "@/lib/constants"
import { Progress } from "@/components/ui/progress"
import TechWithHoverCard from "@/components/shared/TechWithHoverCard"
import TechHoverCard from "@/components/shared/TechHoverCard"

const Technologies = () => {
  // Get technical skills and sort by level (highest first)
  const allSkills = TECHNICAL_SKILLS.sort((a, b) => b.level - a.level)
  
  // Split skills into two columns
  const midPoint = Math.ceil(allSkills.length / 2)
  const leftColumnSkills = allSkills.slice(0, midPoint)
  const rightColumnSkills = allSkills.slice(midPoint)
  
  return (
    <section id="technologies" className="w-full py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-16">
          <h2 className="text-3xl font-bold text-custom-accent">{SECTION_TITLES.technologies}</h2>
          <div className="flex-1 h-px bg-secondary/20 ml-8"></div>
        </div>
        
        <div className="space-y-12">
          {/* Introduction */}
          <div className="space-y-4">
            <div className="text-lg text-custom-secondary leading-relaxed">
              I specialize in building applications with <TechWithHoverCard text="React" />, <TechWithHoverCard text="Next.js" />, 
              and <TechWithHoverCard text="Laravel" />, creating both frontend interfaces and robust backend systems. 
              My experience spans from <TechWithHoverCard text="JavaScript" /> and <TechWithHoverCard text="PHP" /> development 
              to <TechWithHoverCard text="Node.js" /> server applications and <TechWithHoverCard text="MySQL" /> database design.
            </div>
          </div>

          {/* Technical Skills Two-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column */}
            <div className="space-y-4">
              {leftColumnSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <TechHoverCard 
                      techName={skill.name} 
                      className="text-sm font-medium text-custom-foreground hover:text-custom-accent"
                    >
                      {skill.name}
                    </TechHoverCard>
                    <span className="text-xs text-custom-accent font-mono">{skill.level}%</span>
                  </div>
                  <Progress 
                    value={skill.level} 
                    className="h-2 bg-slate-800"
                  />
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              {rightColumnSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <TechHoverCard 
                      techName={skill.name} 
                      className="text-sm font-medium text-custom-foreground hover:text-custom-accent"
                    >
                      {skill.name}
                    </TechHoverCard>
                    <span className="text-xs text-custom-accent font-mono">{skill.level}%</span>
                  </div>
                  <Progress 
                    value={skill.level} 
                    className="h-2 bg-slate-800"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Technologies