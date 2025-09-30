import About from "@/components/pages/About"
import Certification from "@/components/pages/Certification"
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
      <Certification />
      <Projects />
      <Contact />
    </>
  )
}
export default Home
