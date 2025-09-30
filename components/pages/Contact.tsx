import { PERSONAL_INFO } from "@/lib/constants"
import SocialIconMenu from "@/components/shared/SocialIconMenu"

// Local constants - only used in this component (outside component to avoid recreation)
const CONTACT_CONTENT = {
  title: "What's Next?",
  subtitle: "Get In Touch",
  description: "Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
  cta: "Say Hello",
  footer: "Designed & Built by Sk. Ridwanul Malik"
}

const Contact = () => {
  return (
    <section id="contact" className="w-full flex flex-col justify-center items-center">
      <div className="container mx-auto px-4 text-center pt-40 pb-48">
        <p className="text-custom-accent font-mono mb-4">{CONTACT_CONTENT.title}</p>
        <h2 className="text-4xl md:text-5xl font-bold text-custom-foreground mb-6">{CONTACT_CONTENT.subtitle}</h2>

        <p className="text-lg text-custom-secondary mb-8 leading-relaxed max-w-2xl mx-auto">
          {CONTACT_CONTENT.description}
        </p>

        <a
          href={`mailto:${PERSONAL_INFO.email}`}
          className="text-sm inline-block border border-accent text-custom-accent px-6 py-3 rounded hover:bg-accent/10 transition-colors font-mono">
          {CONTACT_CONTENT.cta}
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
        <p className="text-custom-accent/70 text-sm font-mono">{CONTACT_CONTENT.footer}</p>
      </div>
    </section>
  )
}

export default Contact
