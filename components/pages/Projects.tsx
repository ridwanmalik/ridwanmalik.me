"use client"

import TechWithHoverCard from "@/components/shared/TechWithHoverCard"
import { SECTION_TITLES } from "@/lib/constants"
import { ExternalLink, FolderOpen, Github } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

// Local constants - only used in this component (outside component to avoid recreation)
const PROJECTS_CONTENT = {
  featured: [
    {
      title: "Scouty",
      description:
        "A football team management application that enables efficient team and player management. Features a Next.js web app and cross-platform mobile app using React Native with real-time communication features for coaches, players, and administrators.",
      tech: ["React", "Next.js", "React Native", "Firebase", "Laravel"],
      // github: "https://github.com/ridwanmalik",
      external: "https://scouty.io",
      image: "/assets/scouty.png",
    },
    {
      title: "RealEzy",
      description:
        "A comprehensive real estate web application for apartment bookings, improving booking efficiency and user interface satisfaction. Built with Next.js for the frontend and Vue.js & Laravel for the admin panel, providing backend flexibility for property management.",
      tech: ["React", "Next.js", "Vue.js", "Laravel", "MySQL"],
      // github: "https://github.com/ridwanmalik",
      external: "https://realezy.com",
      image: "/assets/realezy.png",
    },
    {
      title: "SENSE HAIR",
      description:
        "A professional hair salon booking website designed and built with Next.js. The platform enhances booking accuracy and user engagement with a beautiful, intuitive interface for stylist appointments and service scheduling.",
      tech: ["Next.js", "React", "Tailwind CSS", "Laravel", "MySQL"],
      github: "https://github.com/ridwanmalik",
      external: "https://sensehair.nl",
      image: "/assets/sensehair.png",
    },
  ],
  other: [
    {
      title: "Netflix Clone",
      description:
        "A Netflix-like web application that you can use to browse movies and TV shows. As like as Netflix movie slider in dark mode.",
      tech: ["React", "Next.js", "Tailwind CSS", "TMDB API"],
      github: "https://github.com/ridwanmalik/netflix-clone",
      external: "https://rio-watch.vercel.app/",
    },
    {
      title: "Garam Masala Food Ordering",
      description:
        "A PHP-based food ordering system with table booking capabilities, which boosted customer convenience and reservation volume for the restaurant.",
      tech: ["PHP", "MySQL", "JavaScript", "CSS"],
      // github: "https://github.com/ridwanmalik",
      external: "https://garam-masala.nl",
    },
    {
      title: "ETS Telco ISP Website",
      description:
        "A Node.js web platform to streamline the process of ordering and managing internet services for customers.",
      tech: ["Node.js", "Express", "MongoDB", "React"],
      // github: "https://github.com/ridwanmalik",
      external: "https://etstelco.com",
    },
    {
      title: "Tournament Management System",
      description:
        "A React-based Tournament Management Website that reduces admin overhead by automating scheduling and team coordination.",
      tech: ["React", "Node.js", "MongoDB", "Socket.io"],
      // github: "https://github.com/ridwanmalik",
      external: null,
    },
    {
      title: "Patient Management System",
      description:
        "A robust Laravel-based patient management solution to streamline patient records, appointments, and billing processes.",
      tech: ["Laravel", "PHP", "MySQL", "Vue.js"],
      // github: "https://github.com/ridwanmalik",
      external: null,
    },
    {
      title: "Online Exam System",
      description:
        "An Online Exam System for over 10,000 users, implementing secure, scalable testing features with real-time monitoring.",
      tech: ["React", "Node.js", "WebSocket", "MongoDB"],
      // github: "https://github.com/ridwanmalik",
      external: null,
    },
  ],
  ui: {
    showMoreText: "Show More",
    showLessText: "Show Less",
    initialDisplayCount: 6,
  },
}

const Projects = () => {
  const [showMore, setShowMore] = useState(false)
  const visibleProjects = showMore
    ? PROJECTS_CONTENT.other
    : PROJECTS_CONTENT.other.slice(0, PROJECTS_CONTENT.ui.initialDisplayCount)

  return (
    <section id="work" className="w-full py-20">
      <div className="container mx-auto px-4">
        {/* Featured Projects */}
        <div className="mb-20">
          <div className="flex items-center mb-16">
            <h2 className="text-3xl font-bold text-custom-accent">{SECTION_TITLES.projects}</h2>
            <div className="flex-1 h-px bg-secondary/20 ml-8"></div>
          </div>

          <div className="space-y-24">
            {PROJECTS_CONTENT.featured.map((project, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}>
                {/* Project Image */}
                <div className="lg:w-3/5">
                  <div className="relative group">
                    <div className="bg-accent/20 rounded-lg overflow-hidden">
                      <div className="aspect-video bg-slate-800/50 flex items-center justify-center">
                        <span className="text-custom-accent text-lg font-mono">{project.title}</span>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-accent/20 rounded-lg group-hover:bg-transparent transition-colors duration-300"></div>
                  </div>
                </div>

                {/* Project Info */}
                <div className={`lg:w-2/5 ${index % 2 === 1 ? "lg:text-left" : "lg:text-right"}`}>
                  <p className="text-custom-accent text-sm font-mono mb-2">Featured Project</p>
                  <h3 className="text-2xl font-semibold text-custom-foreground mb-4">{project.title}</h3>

                  <div className="bg-slate-800/50 p-6 rounded-lg mb-4 backdrop-blur-sm">
                    <div className="text-custom-secondary">
                      <TechWithHoverCard text={project.description} />
                    </div>
                  </div>

                  <div
                    className={`flex flex-wrap gap-2 mb-4 font-mono text-xs text-custom-secondary ${
                      index % 2 === 1 ? "lg:justify-start" : "lg:justify-end"
                    }`}>
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex}>
                        <TechWithHoverCard text={tech} />
                      </span>
                    ))}
                  </div>

                  <div className={`flex gap-4 ${index % 2 === 1 ? "lg:justify-start" : "lg:justify-end"}`}>
                    {project.github && (
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={project.github}
                        className="text-custom-secondary hover:text-custom-accent transition-colors">
                        <Github className="w-6 h-6" />
                      </Link>
                    )}
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href={project.external}
                      className="text-custom-secondary hover:text-custom-accent transition-colors">
                      <ExternalLink className="w-6 h-6" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-16">Other Noteworthy Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleProjects.map((project, index) => (
              <div key={index} className="bg-slate-800/50 p-6 rounded-lg hover:bg-slate-800/70 transition-colors group">
                <div className="flex justify-between items-start mb-4">
                  <FolderOpen className="w-8 h-8 text-custom-accent" />
                  <div className="flex gap-3">
                    {project.github && (
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={project.github}
                        className="text-custom-secondary hover:text-custom-accent transition-colors">
                        <Github className="w-5 h-5" />
                      </Link>
                    )}
                    {project.external && (
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={project.external}
                        className="text-custom-secondary hover:text-custom-accent transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </Link>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-custom-foreground mb-3 group-hover:text-custom-accent transition-colors">
                  {project.title}
                </h3>
                <div className="text-custom-secondary mb-4">
                  <TechWithHoverCard text={project.description} />
                </div>

                <div className="flex flex-wrap gap-2 font-mono text-sm text-custom-secondary">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex}>
                      <TechWithHoverCard text={tech} />
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {PROJECTS_CONTENT.other.length > PROJECTS_CONTENT.ui.initialDisplayCount && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowMore(!showMore)}
                className="inline-block border border-accent text-custom-accent px-6 py-3 rounded hover:bg-accent/10 transition-colors">
                {showMore ? PROJECTS_CONTENT.ui.showLessText : PROJECTS_CONTENT.ui.showMoreText}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Projects
