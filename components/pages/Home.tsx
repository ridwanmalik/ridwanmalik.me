import { ridwan } from "@/public/assets"
import Image from "next/image"

const Home = () => {
  return (
    <section className="page-section">
      <div className="container mx-auto flex h-full">
        <div className="md:w-1/2 flex justify-center flex-col">
          <p className="mb-3">Hi, I&apos;m</p>
          <h1 className="font-merriweather font-extrabold text-6xl mb-3">Ridwan Malik.</h1>
          {/* <p className="mb-3">Problem Solver . Quick Learner . Programmer</p> */}
          <p className="text-2xl font-medium mb-3">Full Stack Web Developer</p>
          <p>
            with excellent problem-solving skills. Passionate about coding and learning new technologies. Comes with
            more than 5 years of experience with React (Next.js), Laravel (PHP), Node.js, and WordPress to provide
            quality support to the organization in developing web-based applications.
          </p>
        </div>
        <div className="md:w-1/2 flex items-center justify-center">
          <div className="w-40">
            <Image src={ridwan} alt="Ridwan Malik" />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Home
