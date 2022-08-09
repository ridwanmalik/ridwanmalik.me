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
            <h1>Home</h1>
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
