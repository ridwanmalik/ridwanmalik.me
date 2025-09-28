"use client"

import { useState } from "react"
import { SECTION_TITLES, FEATURED_PROJECTS, OTHER_PROJECTS } from "@/lib/constants"

const Projects = () => {
  // Using FEATURED_PROJECTS from constants

  // Using OTHER_PROJECTS from constants

  const [showMore, setShowMore] = useState(false)
  const visibleProjects = showMore ? OTHER_PROJECTS : OTHER_PROJECTS.slice(0, 6)

  return (
    <section id="work" className="w-full py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Featured Projects */}
        <div className="mb-20">
          <div className="flex items-center mb-16">
            <h2 className="text-3xl font-bold text-accent">{SECTION_TITLES.projects}</h2>
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
                        <span className="text-accent text-lg font-mono">{project.title}</span>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-accent/20 rounded-lg group-hover:bg-transparent transition-colors duration-300"></div>
                  </div>
                </div>

                {/* Project Info */}
                <div className={`lg:w-2/5 ${index % 2 === 1 ? "lg:text-left" : "lg:text-right"}`}>
                  <p className="text-accent text-sm font-mono mb-2">Featured Project</p>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">{project.title}</h3>

                  <div className="bg-slate-800/50 p-6 rounded-lg mb-4 backdrop-blur-sm">
                    <p className="text-secondary">{project.description}</p>
                  </div>

                  <div
                    className={`flex flex-wrap gap-2 mb-4 font-mono text-xs text-secondary ${
                      index % 2 === 1 ? "lg:justify-start" : "lg:justify-end"
                    }`}>
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex}>{tech}</span>
                    ))}
                  </div>

                  <div className={`flex gap-4 ${index % 2 === 1 ? "lg:justify-start" : "lg:justify-end"}`}>
                    <a href={project.github} className="text-secondary hover:text-accent transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </a>
                    <a href={project.external} className="text-secondary hover:text-accent transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
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
          <p className="text-center text-accent mb-12 cursor-pointer hover:underline">view the archive</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleProjects.map((project, index) => (
              <div key={index} className="bg-slate-800/50 p-6 rounded-lg hover:bg-slate-800/70 transition-colors group">
                <div className="flex justify-between items-start mb-4">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 5a2 2 0 012-2h4a2 2 0 012 2v0a2 2 0 01-2 2H10a2 2 0 01-2-2v0z"
                    />
                  </svg>
                  <div className="flex gap-3">
                    <a href={project.github} className="text-secondary hover:text-accent transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </a>
                    {project.external && (
                      <a href={project.external} className="text-secondary hover:text-accent transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-secondary mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 font-mono text-sm text-secondary">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex}>{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {OTHER_PROJECTS.length > 6 && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowMore(!showMore)}
                className="inline-block border border-accent text-accent px-6 py-3 rounded hover:bg-accent/10 transition-colors">
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
