import Image from "next/image"
import Link from "next/link"
import { logoWhite } from "@/lib/assets"
import { PERSONAL_INFO } from "@/lib/constants"
import { CSSProperties } from "react"
import MobileMenu from "@/components/shared/MobileMenu"
import { StaggerGroup, StaggerItem } from "@/components/shared/StaggerReveal"

// Local constants - only used in this component (outside component to avoid recreation)
const HEADER_CONTENT = {
  resume: {
    label: "Resume",
    // Served by pages/api/resume.ts, which streams the generated PDF as an attachment
    href: PERSONAL_INFO.resume,
  },
}

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
              <a
                href={HEADER_CONTENT.resume.href}
                download
                className="hidden md:inline-block border border-accent text-custom-accent px-4 py-2 rounded hover:bg-accent/10 transition-colors font-mono text-sm">
                {HEADER_CONTENT.resume.label}
              </a>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </div>
    </nav>
  )
}

export default Header
