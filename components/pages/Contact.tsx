import { CONTACT_INFO, SOCIAL_LINKS, PERSONAL_INFO } from "@/lib/constants"
import { GitHubIcon, LinkedInIcon, HackerRankIcon } from "@/lib/icons"

const Contact = () => {
  return (
    <section id="contact" className="w-full flex flex-col justify-center items-center">
      <div className="container mx-auto px-4 text-center max-w-4xl pt-40 pb-48">
        <p className="text-accent font-mono mb-4">{CONTACT_INFO.title}</p>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{CONTACT_INFO.subtitle}</h2>

        <p className="text-lg text-secondary mb-8 leading-relaxed">
          {CONTACT_INFO.description}
        </p>

        <a
          href={`mailto:${PERSONAL_INFO.email}`}
          className="text-sm inline-block border border-accent text-accent px-6 py-3 rounded hover:bg-accent/10 transition-colors font-mono">
          {CONTACT_INFO.cta}
        </a>

        <div className="mt-16 flex justify-center space-x-6">
          {SOCIAL_LINKS.map((link, index) => {
            const IconComponent = link.icon === 'github' ? GitHubIcon : link.icon === 'linkedin' ? LinkedInIcon : HackerRankIcon
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-accent transition-colors"
                aria-label={link.name}>
                <IconComponent />
              </a>
            )
          })}
        </div>
      </div>
      <div className="flex justify-center items-center mb-8">
        <p className="text-accent/70 text-sm font-mono">{CONTACT_INFO.footer}</p>
      </div>
    </section>
  )
}

export default Contact
