import Header from "@/components/shared/Header"
import SocialIconMenu from "@/components/shared/SocialIconMenu"
import { ridwan } from "@/lib/assets"
import { PERSONAL_INFO } from "@/lib/constants"
import TechWithHoverCard from "@/components/shared/TechWithHoverCard"
import Image from "next/image"
import Link from "next/link"

// Local constants - only used in this component (outside component to avoid recreation)
const HOME_CONTENT = {
  cta: {
    text: "Check out my work!",
    href: "#work",
  },
  profileImage: {
    alt: "Ridwan Malik",
    width: 455,
    height: 1106,
  },
}

const Home = () => {
  return (
    <section id="home" className="min-h-screen w-full flex flex-col bg-gradient-to-t from-[#020b16]/50 to-transparent">
      <Header className="w-full" />
      <div className="flex-1 flex flex-col">
        <div className="container mx-auto flex-1 flex flex-col lg:flex-row justify-center items-center h-full gap-8">
          <div className="w-full space-y-4 lg:flex-1">
            <p className="text-custom-accent font-mono text-sm sm:text-base md:text-lg">{PERSONAL_INFO.intro}</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-custom-foreground leading-tight">
              {PERSONAL_INFO.name}
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-custom-secondary leading-tight">
              {PERSONAL_INFO.title}
            </h2>
            <div className="max-w-xl">
              <div className="text-custom-secondary leading-relaxed text-sm md:text-base">
                <TechWithHoverCard text={PERSONAL_INFO.description} />
              </div>
            </div>
            <div className="pt-8 space-y-6">
              <Link
                href={HOME_CONTENT.cta.href}
                className="text-sm inline-block border border-accent text-custom-accent px-6 py-3 rounded hover:bg-accent/10 transition-colors font-mono">
                {HOME_CONTENT.cta.text}
              </Link>
              <div className="flex justify-start lg:hidden">
                <SocialIconMenu orientation="horizontal" size="md" className="gap-4" />
              </div>
            </div>
          </div>
          <div className="hidden lg:flex justify-end items-end self-end">
            <Image
              src={ridwan}
              alt={HOME_CONTENT.profileImage.alt}
              width={HOME_CONTENT.profileImage.width}
              height={HOME_CONTENT.profileImage.height}
              className="h-full max-h-[90vh] object-contain pt-8"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Home
