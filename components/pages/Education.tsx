import { SECTION_TITLES, EDUCATION } from "@/lib/constants"
import { GraduationCap } from "lucide-react"

const Education = () => {
  return (
    <section id="education" className="w-full py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-16">
          <h2 className="text-3xl font-bold text-custom-accent">{SECTION_TITLES.education}</h2>
          <div className="flex-1 h-px bg-secondary/20 ml-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EDUCATION.map((edu, index) => (
            <div
              key={index}
              className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50 hover:border-custom-accent/30 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <GraduationCap className="w-8 h-8 text-custom-accent" />
                <span className="text-sm text-custom-secondary font-mono whitespace-nowrap">{edu.period}</span>
              </div>

              <h3 className="text-lg font-semibold text-custom-foreground mb-1">{edu.degree}</h3>
              <p className="text-custom-secondary text-sm">
                {edu.institution}, {edu.location}
              </p>
              {edu.note && <p className="text-custom-accent text-sm font-mono mt-2">{edu.note}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
