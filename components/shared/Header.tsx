import Image from "next/image"
import Link from "next/link"
import { logoWhite } from "@/lib/assets"
import { CSSProperties } from "react"
import ContactModal from "@/components/shared/ContactModal"
import MobileMenu from "@/components/shared/MobileMenu"

interface HeaderProps {
  variant?: "default" | "sticky"
  className?: string
  style?: CSSProperties
  isScrolled?: boolean
}

const Header = ({ variant = "default", className = "", style, isScrolled = false }: HeaderProps) => {
  return (
    <nav className={`px-2 sm:px-4 py-2.5 ${className}`} style={style}>
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="/" className="flex items-center">
          <div className="flex w-8 h-8">
            <Image src={logoWhite} layout="fixed" alt="Ridwan Malik Logo" />
          </div>
        </Link>

        <div className="flex items-center md:hidden">
          <MobileMenu />
        </div>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <div className="flex items-center space-x-8">
            <ul className="nav">
              <li>
                <Link href="#about" className="nav-item">
                  About
                </Link>
              </li>
              <li>
                <Link href="#experience" className="nav-item">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="#work" className="nav-item">
                  Work
                </Link>
              </li>
              <li>
                <Link href="#contact" className="nav-item">
                  Contact
                </Link>
              </li>
            </ul>
            <ContactModal
              label="Get In Touch"
              className="hidden md:inline-block border border-accent text-custom-accent px-4 py-2 rounded hover:bg-accent/10 transition-colors font-mono text-sm"
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
