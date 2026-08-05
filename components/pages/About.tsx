import { SECTION_TITLES } from "@/lib/constants"
import TechWithHoverCard from "@/components/shared/TechWithHoverCard"
import { Reveal } from "@/components/shared"

// Local constants - only used in this component (outside component to avoid recreation)
const ABOUT_CONTENT = {
  paragraphs: [
    "Hello! I'm Ridwan, and I enjoy creating things that live on the internet. My interest in web development started back in 2017 when I decided to try building my first website — turns out learning HTML & CSS taught me a lot about frontend development!",
    "Fast-forward to today, and I've had the privilege of working at various companies, from startups to established businesses. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.",
    "I'm studying Computer Science and Engineering at Bangladesh University of Business and Technology, while continuing to work as a Software Developer. I'm passionate about learning new technologies and solving complex problems.",
    "I specialize in building applications with React, Next.js, React Native, and Laravel, creating everything from frontend interfaces and cross-platform mobile apps to robust backend systems. My experience spans from JavaScript and PHP development to Node.js server applications and MySQL database design.",
  ],
}

const About = () => {
  return (
    <section id="about" className="w-full pt-20 pb-20 sm:pt-40">
      <div className="container mx-auto">
        <div className="flex items-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-custom-accent">{SECTION_TITLES.about}</h2>
          <div className="flex-1 h-px bg-custom-secondary/40 ml-4 sm:ml-8"></div>
        </div>

        <Reveal className="space-y-6 text-custom-secondary text-sm md:text-base leading-relaxed">
          {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
            <div key={index}>
              <TechWithHoverCard text={paragraph} />
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
export default About
