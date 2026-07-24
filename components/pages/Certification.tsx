import { SECTION_TITLES, CERTIFICATIONS } from "@/lib/constants"
import { Award, ExternalLink } from "lucide-react"
import Link from "next/link"

// Local constants - only used in this component (outside component to avoid recreation)
const CERTIFICATION_CONTENT = {
  certifications: CERTIFICATIONS,
}

const Certification = () => {
  return (
    <section id="certification" className="w-full py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-16">
          <h2 className="text-3xl font-bold text-custom-accent">{SECTION_TITLES.certification}</h2>
          <div className="flex-1 h-px bg-secondary/20 ml-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {CERTIFICATION_CONTENT.certifications.map((cert, index) => (
            <Link
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              href={cert.url}
              className="block bg-slate-800/50 p-6 rounded-lg hover:bg-slate-800/70 transition-all duration-300 group border border-slate-700/50 hover:border-custom-accent/30 cursor-pointer">
              <div className="flex justify-between items-start mb-4">
                <Award className="w-8 h-8 text-custom-accent group-hover:scale-110 transition-transform duration-300" />
                <ExternalLink className="w-5 h-5 text-custom-secondary group-hover:text-custom-accent transition-colors" />
              </div>

              <h3 className="text-lg font-semibold text-custom-foreground mb-2 group-hover:text-custom-accent transition-colors">
                {cert.title}
              </h3>

              <p className="text-custom-secondary text-sm mb-4">{cert.issuer}</p>

              <div className="inline-flex items-center text-custom-accent text-sm">
                View Certificate
                <ExternalLink className="w-3 h-3 ml-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certification
