import { SECTION_TITLES, TECHNICAL_SKILLS } from "@/lib/constants"
import { Progress } from "@/components/ui/progress"
import TechWithHoverCard from "@/components/shared/TechWithHoverCard"
import TechHoverCard from "@/components/shared/TechHoverCard"

// Local constants - only used in this component (outside component to avoid recreation)
const TECHNOLOGIES_CONTENT = {
  introduction:
    "I specialize in building applications with React, Next.js, and Laravel, creating both frontend interfaces and robust backend systems. My experience spans from JavaScript and PHP development to Node.js server applications and MySQL database design.",
}

const Technologies = () => {
  // Get technical skills (excluding any hidden from this section) and sort by level (highest first)
  const allSkills = TECHNICAL_SKILLS.filter(
    skill => !(skill as { hideFromSkills?: boolean }).hideFromSkills
  ).sort((a, b) => b.level - a.level)

  return (
    <section id="technologies" className="w-full pt-10 pb-20 sm:pt-20">
      <div className="container mx-auto">
        <div className="flex items-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-custom-accent">{SECTION_TITLES.technologies}</h2>
          <div className="flex-1 h-px bg-custom-secondary/40 ml-4 sm:ml-8"></div>
        </div>

        {/* One continuous column on mobile, two columns on desktop */}
        <div className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-16 lg:gap-y-4">
          {allSkills.map(skill => (
            <div
              key={skill.name}
              className={`space-y-2 ${(skill as { hideOnMobile?: boolean }).hideOnMobile ? "hidden sm:block" : ""}`}>
              <div className="flex justify-between items-center">
                <TechHoverCard
                  techName={skill.name}
                  className="text-sm font-medium text-custom-foreground hover:text-custom-accent">
                  {skill.name}
                </TechHoverCard>
                <span className="text-xs text-custom-accent font-mono">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2 bg-slate-800" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Technologies
