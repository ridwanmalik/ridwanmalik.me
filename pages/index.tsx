import type { NextPage } from "next"
import Head from "next/head"
import { Navbar } from "../components"

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
            <div className="container mx-auto">
              <div className="md:w-1/2 mx-auto">
                <p className="mb-3">Hi, This is</p>
                <h1 className="font-merriweather font-extrabold text-6xl mb-3">Ridwan Malik</h1>
                {/* <p className="mb-3">Problem Solver . Quick Learner . Programmer</p> */}
                <p className="text-2xl font-medium mb-3">I'm a Full Stack Web Developer</p>
                <p>
                  with excellent problem-solving skills. Passionate about coding and learning new technologies. Comes
                  with more than 3 years of experience with Laravel (PHP), React (Next.js), Node.js, Ionic
                  Cross-Platform Mobile App Development, and WordPress to provide quality support to the company in
                  developing web-based applications.
                </p>
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
