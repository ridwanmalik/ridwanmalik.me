"use client"

import TechWithHoverCard from "@/components/shared/TechWithHoverCard"
import { SECTION_TITLES, PROJECTS } from "@/lib/constants"
import { AppStoreIcon, GooglePlayIcon } from "@/lib/icons"
import { ExternalLink, FolderOpen, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

// Local constants - only used in this component (outside component to avoid recreation)
const PROJECTS_CONTENT = {
  ...PROJECTS,
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
      <div className="container mx-auto">
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
                  <Link href={project.external} target="_blank" rel="noopener noreferrer">
                    <div className="relative group">
                      <div className="bg-accent/20 rounded-lg overflow-hidden">
                        <div className="aspect-video relative">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover grayscale contrast-100 brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-300"
                          />
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-oxford-blue/40 rounded-lg group-hover:bg-transparent transition-colors duration-300"></div>
                    </div>
                  </Link>
                </div>

                {/* Project Info */}
                <div className={`lg:w-2/5 ${index % 2 === 1 ? "lg:text-left" : "lg:text-right"}`}>
                  <p className="text-custom-accent text-sm font-mono mb-2">Featured Project</p>
                  <h3 className="text-2xl font-semibold text-custom-foreground mb-4">
                    <Link href={project.external} target="_blank" rel="noopener noreferrer" className="hover:text-custom-accent transition-colors">
                      {project.title}
                    </Link>
                  </h3>

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
                    {(project as { github?: string }).github && (
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={(project as { github?: string }).github as string}
                        className="text-custom-secondary hover:text-custom-accent transition-colors">
                        <Github className="w-6 h-6" />
                      </Link>
                    )}
                    {"appStore" in project && project.appStore && (
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={project.appStore as string}
                        className="text-custom-secondary hover:text-custom-accent transition-colors">
                        <AppStoreIcon className="w-6 h-6" />
                      </Link>
                    )}
                    {"playStore" in project && project.playStore && (
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={project.playStore as string}
                        className="text-custom-secondary hover:text-custom-accent transition-colors">
                        <GooglePlayIcon className="w-6 h-6" />
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
