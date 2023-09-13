import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import { Navbar } from "../components"
import { ridwan } from "../public/assets"

const Home: NextPage = () => {
  return (
    <div className="home">
      <Head>
        <title>Sk. Ridwanul Malik</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="body-wrapper">
        <Navbar />
        <div className="section-wrapper">
          <section className="page-section">
            <div className="container mx-auto flex h-full">
              <div className="md:w-1/2 flex justify-center flex-col">
                <p className="mb-3">Hi, I'm</p>
                <h1 className="font-merriweather font-extrabold text-6xl mb-3">Ridwan Malik.</h1>
                {/* <p className="mb-3">Problem Solver . Quick Learner . Programmer</p> */}
                <p className="text-2xl font-medium mb-3">Full Stack Web Developer</p>
                <p>
                  with excellent problem-solving skills. Passionate about coding and learning new technologies. Comes
                  with more than 4 years of experience with React (Next.js), Laravel (PHP), Node.js, and WordPress to
                  provide quality support to the organization in developing web-based applications.
                </p>
              </div>
              <div className="md:w-1/2 flex items-center justify-center">
                <Image src={ridwan} alt="Ridwan Malik" className="rounded" width={805 / 3.5} height={2577 / 3.5} />
              </div>
            </div>
          </section>
          <section className="page-section">
            <h1>About</h1>
          </section>
          <section className="page-section">
            <h1>Experience</h1>
          </section>
        </div>
      </main>
    </div>
  )
}

export default Home
