"use client"

import { useState } from "react"
import { SECTION_TITLES, FEATURED_PROJECTS, OTHER_PROJECTS } from "@/lib/constants"
import { Github, ExternalLink, FolderOpen } from "lucide-react"
import TechWithHoverCard from "@/components/shared/TechWithHoverCard"

const Projects = () => {
  // Using FEATURED_PROJECTS from constants

  // Using OTHER_PROJECTS from constants

  const [showMore, setShowMore] = useState(false)
  const visibleProjects = showMore ? OTHER_PROJECTS : OTHER_PROJECTS.slice(0, 6)

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
            {FEATURED_PROJECTS.map((project, index) => (
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
                    <a href={project.github} className="text-custom-secondary hover:text-custom-accent transition-colors">
                      <Github className="w-6 h-6" />
                    </a>
                    <a href={project.external} className="text-custom-secondary hover:text-custom-accent transition-colors">
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-16">Other Noteworthy Projects</h2>
          <p className="text-center text-custom-accent mb-12 cursor-pointer hover:underline">view the archive</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleProjects.map((project, index) => (
              <div key={index} className="bg-slate-800/50 p-6 rounded-lg hover:bg-slate-800/70 transition-colors group">
                <div className="flex justify-between items-start mb-4">
                  <FolderOpen className="w-8 h-8 text-custom-accent" />
                  <div className="flex gap-3">
                    <a href={project.github} className="text-custom-secondary hover:text-custom-accent transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                    {project.external && (
                      <a href={project.external} className="text-custom-secondary hover:text-custom-accent transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
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

          {OTHER_PROJECTS.length > 6 && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowMore(!showMore)}
                className="inline-block border border-accent text-custom-accent px-6 py-3 rounded hover:bg-accent/10 transition-colors">
                {showMore ? "Show Less" : "Show More"}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Projects
