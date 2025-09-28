import Image from "next/image"
import Link from "next/link"
import { logoWhite } from "../../public/assets"
import { CSSProperties } from "react"

interface HeaderProps {
  variant?: "default" | "sticky"
  className?: string
  style?: CSSProperties
  isScrolled?: boolean
}

const Header = ({ variant = "default", className = "", style, isScrolled = false }: HeaderProps) => {

  return (
    <nav 
      className={`px-2 sm:px-4 py-2.5 ${className}`}
      style={style}
    >
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="/" className="flex items-center">
          <div className="flex w-8 h-8">
            <Image src={logoWhite} layout="fixed" alt="Ridwan Malik Logo" />
          </div>
        </Link>

        <div className="flex items-center md:hidden">
          <a
            href="mailto:skridwanulmalik@gmail.com"
            className="border border-accent text-accent px-3 py-1 rounded hover:bg-accent/10 transition-colors font-mono text-xs mr-3">
            Contact
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
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
            <a
              href="mailto:skridwanulmalik@gmail.com"
              className="hidden md:inline-block border border-accent text-accent px-4 py-2 rounded hover:bg-accent/10 transition-colors font-mono text-sm">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
