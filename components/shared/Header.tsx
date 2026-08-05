import Image from "next/image"
import Link from "next/link"
import { logoWhite } from "@/lib/assets"
import { CSSProperties } from "react"
import ContactModal from "@/components/shared/ContactModal"
import MobileMenu from "@/components/shared/MobileMenu"
import { StaggerGroup, StaggerItem } from "@/components/shared/StaggerReveal"

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
          <StaggerGroup className="flex items-center space-x-8" stagger={0.08}>
            <ul className="nav">
              <li>
                <StaggerItem from="down">
                  <Link href="#about" className="nav-item">
                    About
                  </Link>
                </StaggerItem>
              </li>
              <li>
                <StaggerItem from="down">
                  <Link href="#experience" className="nav-item">
                    Experience
                  </Link>
                </StaggerItem>
              </li>
              <li>
                <StaggerItem from="down">
                  <Link href="#work" className="nav-item">
                    Work
                  </Link>
                </StaggerItem>
              </li>
              <li>
                <StaggerItem from="down">
                  <Link href="#contact" className="nav-item">
                    Contact
                  </Link>
                </StaggerItem>
              </li>
            </ul>
            <StaggerItem from="down">
              <ContactModal
                label="Get In Touch"
                className="hidden md:inline-block border border-accent text-custom-accent px-4 py-2 rounded hover:bg-accent/10 transition-colors font-mono text-sm"
              />
            </StaggerItem>
          </StaggerGroup>
        </div>
      </div>
    </nav>
  )
}

export default Header
