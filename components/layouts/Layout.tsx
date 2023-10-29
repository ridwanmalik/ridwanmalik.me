import Head from "next/head"
import { ReactNode } from "react"
import Navbar from "./Navbar"

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="home">
      <Head>
        <title>Sk. Ridwanul Malik</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="body-wrapper">
        <Navbar />
        <div className="section-wrapper">{children}</div>
      </main>
    </div>
  )
}
export default Layout
