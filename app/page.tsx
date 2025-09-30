import About from "@/components/pages/About"
import Contact from "@/components/pages/Contact"
import Experience from "@/components/pages/Experience"
import HomeSection from "@/components/pages/Home"
import Projects from "@/components/pages/Projects"
import Technologies from "@/components/pages/Technologies"

const Home = () => {
  return (
    <>
      <HomeSection />
      <About />
      <Technologies />
      <Experience />
      <Projects />
      <Contact />
    </>
  )
}
export default Home
