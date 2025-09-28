"use client"

import { useState } from "react"
import { SECTION_TITLES, EXPERIENCES } from "@/lib/constants"

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0)

  const handleTabClick = (index: number) => {
    console.log("Tab clicked:", index)
    setActiveTab(index)
  }

  // Using EXPERIENCES from constants

  return (
    <section id="experience" className="w-full flex justify-center items-center py-40">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-center mb-16">
          <h2 className="text-3xl font-bold text-accent">{SECTION_TITLES.experience}</h2>
          <div className="flex-1 h-px bg-secondary/20 ml-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row">
            {/* Tab List */}
            <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible mb-4 md:mb-0 md:mr-8">
              {EXPERIENCES.map((exp, index) => (
                <button
                  key={index}
                  onClick={() => handleTabClick(index)}
                  type="button"
                  className={`font-mono text-sm whitespace-nowrap px-4 py-3 text-left border-b-2 md:border-b-0 md:border-l-2 transition-colors duration-200 cursor-pointer focus:outline-none ${
                    activeTab === index
                      ? "border-accent text-accent bg-accent/10"
                      : "border-slate-600 text-secondary hover:text-accent hover:bg-slate-800/50"
                  }`}>
                  {exp.company}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="flex-1">
              <div className="space-y-4" key={activeTab}>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {EXPERIENCES[activeTab]?.role}{" "}
                    <span className="text-accent">@ {EXPERIENCES[activeTab]?.company}</span>
                  </h3>
                  <p className="text-sm text-secondary font-mono">{EXPERIENCES[activeTab]?.period}</p>
                </div>

                <div className="space-y-3">
                  {EXPERIENCES[activeTab]?.description?.map((desc, index) => (
                    <div key={index} className="flex items-start">
                      <span className="text-accent mr-3 mt-1">▸</span>
                      <p className="text-secondary">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Experience
