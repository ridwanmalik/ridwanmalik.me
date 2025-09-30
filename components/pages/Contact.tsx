import { CONTACT_INFO, PERSONAL_INFO } from "@/lib/constants"
import SocialIconMenu from "@/components/shared/SocialIconMenu"

const Contact = () => {
  return (
    <section id="contact" className="w-full flex flex-col justify-center items-center">
      <div className="container mx-auto px-4 text-center pt-40 pb-48">
        <p className="text-custom-accent font-mono mb-4">{CONTACT_INFO.title}</p>
        <h2 className="text-4xl md:text-5xl font-bold text-custom-foreground mb-6">{CONTACT_INFO.subtitle}</h2>

        <p className="text-lg text-custom-secondary mb-8 leading-relaxed">
          {CONTACT_INFO.description}
        </p>

        <a
          href={`mailto:${PERSONAL_INFO.email}`}
          className="text-sm inline-block border border-accent text-custom-accent px-6 py-3 rounded hover:bg-accent/10 transition-colors font-mono">
          {CONTACT_INFO.cta}
        </a>

        <div className="mt-16 flex justify-center">
          <SocialIconMenu 
            orientation="horizontal"
            size="lg"
            className="gap-4"
          />
        </div>
      </div>
      <div className="flex justify-center items-center mb-8">
        <p className="text-custom-accent/70 text-sm font-mono">{CONTACT_INFO.footer}</p>
      </div>
    </section>
  )
}

export default Contact
