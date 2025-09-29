import Header from "@/components/shared/Header"
import Link from "next/link"
import { PERSONAL_INFO } from "@/lib/constants"

const Home = () => {
  return (
    <section id="home" className="min-h-screen w-full flex flex-col">
      <Header className="w-full" />
      <div className="flex-1 flex justify-center items-center">
        <div className="container mx-auto px-4 flex flex-col justify-center h-full max-w-4xl">
          <div className="space-y-4">
            <p className="text-custom-accent font-mono text-lg">{PERSONAL_INFO.intro}</p>
            <h1 className="text-5xl md:text-7xl font-bold text-custom-foreground leading-tight">{PERSONAL_INFO.name}</h1>
            <h2 className="text-4xl md:text-6xl font-bold text-custom-secondary leading-tight">{PERSONAL_INFO.title}</h2>
            <div className="max-w-2xl">
              <p className="text-custom-secondary leading-relaxed">
                {PERSONAL_INFO.description}
              </p>
            </div>
            <div className="pt-8">
              <Link
                href="#work"
                className="text-sm inline-block border border-accent text-custom-accent px-6 py-3 rounded hover:bg-accent/10 transition-colors font-mono">
                Check out my work!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Home
