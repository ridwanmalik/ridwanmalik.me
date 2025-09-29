import Image from "next/image"
import { ridwan } from "@/lib/assets"
import { SECTION_TITLES, TECH_STACK } from "@/lib/constants"

const About = () => {
  return (
    <section id="about" className="w-full py-10">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 items-start">
          <div className="lg:col-span-2 space-y-4 text-custom-secondary">
            <div className="flex items-center mb-10">
              <h2 className="text-3xl font-bold text-custom-accent">{SECTION_TITLES.about}</h2>
              <div className="flex-1 h-px bg-secondary/20 ml-8"></div>
            </div>
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

            <p>Here are a few technologies I&apos;ve been working with recently:</p>

            <div className="grid grid-cols-2 gap-2 mt-12 font-mono">
              {TECH_STACK.map((tech, index) => (
                <div key={index} className="flex items-center space-y-2">
                  <span className="text-custom-accent mr-2">▸</span>
                  <span className="text-xs">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end pt-12">
            <div className="relative">
              <div className="w-64 h-64 rounded-lg overflow-hidden border-2 border-accent transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <Image
                  src={ridwan}
                  alt="Ridwan Malik"
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default About
