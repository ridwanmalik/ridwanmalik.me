import Header from "@/components/shared/Header"
import { ridwan } from "@/lib/assets"
import { PERSONAL_INFO } from "@/lib/constants"
import Image from "next/image"
import Link from "next/link"

const Home = () => {
  return (
    <section id="home" className="min-h-screen w-full flex flex-col bg-gradient-to-t from-[#020b16]/50 to-transparent">
      <Header className="w-full" />
      <div className="flex-1 flex flex-col">
        <div className="container mx-auto px-4 flex-1 flex flex-col lg:flex-row justify-center items-center h-full gap-8">
          <div className="flex-1 space-y-4">
            <p className="text-custom-accent font-mono text-lg">{PERSONAL_INFO.intro}</p>
            <h1 className="text-5xl md:text-7xl font-bold text-custom-foreground leading-tight">
              {PERSONAL_INFO.name}
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-custom-secondary leading-tight">
              {PERSONAL_INFO.title}
            </h2>
            <div className="max-w-2xl">
              <p className="text-custom-secondary leading-relaxed">{PERSONAL_INFO.description}</p>
            </div>
            <div className="pt-8">
              <Link
                href="#work"
                className="text-sm inline-block border border-accent text-custom-accent px-6 py-3 rounded hover:bg-accent/10 transition-colors font-mono">
                Check out my work!
              </Link>
            </div>
          </div>
          <div className="flex justify-end items-end self-end">
            <Image src={ridwan} alt="Ridwan Malik" width={455} height={1106} className="h-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Home
