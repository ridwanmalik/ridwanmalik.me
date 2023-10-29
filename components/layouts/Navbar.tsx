import Image from "next/image"
import { logoWhite } from "../../public/assets"

const Navbar = () => {
  return (
    <nav className="px-2 sm:px-4 py-2.5 fixed w-screen">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="#home" className="flex items-center">
          <div className="flex w-8 h-8">
            <Image src={logoWhite} layout="fixed" />
          </div>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="nav">
            <li>
              <a href="#home" className="nav-item active" aria-current="page">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="nav-item">
                About
              </a>
            </li>
            <li>
              <a href="#experience" className="nav-item">
                Experience
              </a>
            </li>
            <li>
              <a href="#work" className="nav-item">
                Work
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-item">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
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
