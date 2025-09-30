import { SECTION_TITLES } from "@/lib/constants"
import TechWithHoverCard from "@/components/shared/TechWithHoverCard"

const About = () => {
  return (
    <section id="about" className="w-full pt-40 pb-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-16">
          <h2 className="text-3xl font-bold text-custom-accent">{SECTION_TITLES.about}</h2>
          <div className="flex-1 h-px bg-secondary/20 ml-8"></div>
        </div>

        <div className="">
          <div className="space-y-6 text-custom-secondary text-lg leading-relaxed">
            <p>
              Hello! I&apos;m Ridwan, and I enjoy creating things that live on the internet. My interest in web
              development started back in 2018 when I decided to try building my first website — turns out learning HTML
              & CSS taught me a lot about frontend development!
            </p>

            <p>
              Fast-forward to today, and I&apos;ve had the privilege of working at various companies, from startups to
              established businesses. My main focus these days is building accessible, inclusive products and digital
              experiences for a variety of clients.
            </p>

            <p>
              I recently started studying Computer Science and Engineering at Bangladesh University of Business and
              Technology, while continuing to work as a Software Developer. I&apos;m passionate about learning new
              technologies and solving complex problems.
            </p>

            <div>
              I specialize in building applications with <TechWithHoverCard text="React" />,{" "}
              <TechWithHoverCard text="Next.js" />, and <TechWithHoverCard text="Laravel" />, creating both frontend
              interfaces and robust backend systems. My experience spans from <TechWithHoverCard text="JavaScript" />{" "}
              and <TechWithHoverCard text="PHP" /> development to <TechWithHoverCard text="Node.js" /> server
              applications and <TechWithHoverCard text="MySQL" /> database design.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default About
