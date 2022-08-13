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
          <section className="page-section image-bg">
            <div className="container mx-auto">
              <div className="w-1/3">
                <h1 className="font-merriweather font-extrabold text-6xl mb-3">Ridwan Malik</h1>
                <p className="tracking-15 mb-3">Problem Solver . Quick Learner . Programmer</p>
                <p className="tracking-widest">
                  A Full Stack Web Developer with excellent problem-solving skills. Passionate about coding and learning
                  new technologies.
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
