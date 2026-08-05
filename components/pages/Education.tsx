import { SECTION_TITLES, EDUCATION } from "@/lib/constants"
import { GraduationCap } from "lucide-react"
import { Reveal } from "@/components/shared"

const Education = () => {
  return (
    <section id="education" className="w-full pt-10 pb-20 sm:pt-20">
      <div className="container mx-auto">
        <div className="flex items-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-custom-accent">{SECTION_TITLES.education}</h2>
          <div className="flex-1 h-px bg-custom-secondary/40 ml-4 sm:ml-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EDUCATION.map((edu, index) => (
            <Reveal key={index} delay={index * 0.06}>
              <div className="h-full relative overflow-hidden bg-slate-800/50 p-6 rounded-lg border border-slate-700/50 hover:border-custom-accent/30 transition-all duration-300">
                <GraduationCap className="pointer-events-none absolute -bottom-3 right-2 h-32 w-32 text-custom-accent opacity-5 sm:hidden" />
                <div className="relative flex flex-col">
                  <div className="order-last mt-3 flex items-start justify-start sm:order-first sm:mt-0 sm:mb-4 sm:justify-between">
                    <GraduationCap className="hidden sm:block w-8 h-8 shrink-0 text-custom-accent" />
                    <span className="text-sm text-custom-secondary font-mono whitespace-nowrap text-left sm:text-right">
                      {edu.period}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-custom-foreground mb-1">{edu.degree}</h3>
                  <p className="text-custom-secondary text-sm">
                    {edu.institution}, {edu.location}
                  </p>
                  {edu.note && <p className="text-custom-accent text-sm font-mono mt-2">{edu.note}</p>}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
