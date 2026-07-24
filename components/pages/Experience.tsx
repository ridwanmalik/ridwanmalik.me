"use client"

import TechWithHoverCard from "@/components/shared/TechWithHoverCard"
import { SECTION_TITLES, EXPERIENCES } from "@/lib/constants"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

// Local constants - only used in this component (outside component to avoid recreation)
const EXPERIENCE_CONTENT = {
  experiences: EXPERIENCES,
}

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0)
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])
  const isFirstRender = useRef(true)

  // Snap the active company tab into view in the horizontal strip when it changes
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    tabRefs.current[activeTab]?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" })
  }, [activeTab])

  const handleTabClick = (index: number) => {
    setActiveTab(index)
  }

  const lastIndex = EXPERIENCE_CONTENT.experiences.length - 1
  const goPrev = () => setActiveTab(i => Math.max(0, i - 1))
  const goNext = () => setActiveTab(i => Math.min(lastIndex, i + 1))

  // Using EXPERIENCES from constants

  return (
    <section id="experience" className="w-full flex justify-center items-center pt-20 pb-40 sm:pt-40">
      <div className="container mx-auto">
        <div className="flex items-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-custom-accent">{SECTION_TITLES.experience}</h2>
          <div className="flex-1 h-px bg-custom-secondary/40 ml-4 sm:ml-8"></div>
        </div>

        <div>
          <div className="flex flex-col md:flex-row">
            {/* Tab List */}
            <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible -mx-4 px-4 md:mx-0 md:px-0 mb-4 md:mb-0 md:mr-8">
              {EXPERIENCE_CONTENT.experiences.map((exp, index) => (
                <button
                  key={index}
                  ref={el => {
                    tabRefs.current[index] = el
                  }}
                  onClick={() => handleTabClick(index)}
                  type="button"
                  className={`font-mono text-sm whitespace-nowrap px-4 py-3 text-left border-b-2 md:border-b-0 md:border-l-2 transition-colors duration-200 cursor-pointer focus:outline-none ${
                    activeTab === index
                      ? "border-accent text-custom-accent bg-accent/10"
                      : "border-slate-600 text-custom-secondary hover:text-custom-accent hover:bg-slate-800/50"
                  }`}>
                  {exp.company}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="flex-1">
              <div className="space-y-4" key={activeTab}>
                <div>
                  <h3 className="text-xl font-semibold text-custom-foreground">
                    {EXPERIENCE_CONTENT.experiences[activeTab]?.role}{" "}
                    <span className="text-custom-accent block sm:inline">
                      <span className="text-gray-500/50 px-px hidden sm:inline">@</span>{" "}
                      {EXPERIENCE_CONTENT.experiences[activeTab]?.url ? (
                        <Link
                          href={EXPERIENCE_CONTENT.experiences[activeTab].url!}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline">
                          {EXPERIENCE_CONTENT.experiences[activeTab]?.company}
                        </Link>
                      ) : (
                        EXPERIENCE_CONTENT.experiences[activeTab]?.company
                      )}
                    </span>
                  </h3>
                  <p className="text-sm text-custom-secondary font-mono">
                    {EXPERIENCE_CONTENT.experiences[activeTab]?.period}
                  </p>
                </div>

                <div className="space-y-3">
                  {EXPERIENCE_CONTENT.experiences[activeTab]?.description?.map((desc, index) => (
                    <div key={index} className="flex items-start text-sm md:text-base">
                      <span className="text-custom-accent mr-3 -mt-0.5">▸</span>
                      <div className="text-custom-secondary">
                        <TechWithHoverCard text={desc} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Prev/next company arrows — mobile only, centered below the text */}
              <div className="flex md:hidden justify-center gap-4 mt-8">
                <button
                  type="button"
                  onClick={goPrev}
                  disabled={activeTab === 0}
                  aria-label="Previous company"
                  className="p-2 border border-slate-600 rounded text-custom-accent transition-colors hover:border-accent disabled:opacity-30 disabled:pointer-events-none">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  disabled={activeTab === lastIndex}
                  aria-label="Next company"
                  className="p-2 border border-slate-600 rounded text-custom-accent transition-colors hover:border-accent disabled:opacity-30 disabled:pointer-events-none">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Experience
