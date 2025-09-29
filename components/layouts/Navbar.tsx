"use client"

import { useState, useEffect } from "react"
import Header from "@/components/shared/Header"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const container = document.querySelector(".section-wrapper")
      if (container) {
        // Simple scroll threshold - show header after scrolling down a bit
        const threshold = window.innerHeight * 0.9 // 90% of viewport height
        setIsScrolled(container.scrollTop > threshold)
      }
    }

    const container = document.querySelector(".section-wrapper")
    if (container) {
      container.addEventListener("scroll", handleScroll, { passive: true })
      return () => container.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <Header
      variant="sticky"
      isScrolled={isScrolled}
      className={`fixed w-screen z-50 transition-all duration-500 ease-out ${
        isScrolled ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{
        backgroundColor: isScrolled ? "rgba(10, 25, 47, 0.85)" : "transparent",
        backdropFilter: isScrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: isScrolled ? "blur(12px)" : "none",
        // borderBottom: isScrolled ? '1px solid rgba(71, 85, 105, 0.3)' : 'none',
      }}
    />
  )
}
export default Navbar
// <Nav>
//   <Nav.Brand href="#home">
//     <div className="flex w-8 h-8">
//       <Image src={logoWhite} layout="fixed" />
//     </div>
//     {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span> */}
//   </Nav.Brand>
//   <Nav.Toggle />
//   <Nav.Collapse>
//     <Nav.Link href="#home" active={true}>
//       Home
//     </Nav.Link>
//     <Nav.Link href="#about">About</Nav.Link>
//     <Nav.Link href="#experience">Experience</Nav.Link>
//     <Nav.Link href="#work">Work</Nav.Link>
//     <Nav.Link href="#contact">Contact</Nav.Link>
//   </Nav.Collapse>
// </Nav>
