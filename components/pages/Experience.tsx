"use client"

import TechWithHoverCard from "@/components/shared/TechWithHoverCard"
import { SECTION_TITLES } from "@/lib/constants"
import Link from "next/link"
import { useState } from "react"

// Local constants - only used in this component (outside component to avoid recreation)
const EXPERIENCE_CONTENT = {
  experiences: [
    {
      company: "Equal & Co.",
      url: "https://equalandco.com",
      role: "Software Developer",
      period: "January 2022 - Present",
      description: [
        "Working the development of a React-based Industrial Liquid Management system, optimizing interface interactions for both admin and customer panels.",
        "Utilized WebSockets to efficiently handle high-frequency data streams, ensuring accurate and timely updates to interactive graphs.",
      ],
    },
    {
      company: "Talent Pro",
      url: "https://talentpro.global",
      role: "Software Developer",
      period: "February 2022 - July 2023",
      description: [
        "Worked on a React & Laravel based Stock Exchange Project.",
        "Developed and deployed a Next.js-based Real Estate Web Application, improving load times by 30% through optimization techniques.",
        "Built a Vue.js and Laravel-based admin panel for a Real Estate Project, enhancing user management capabilities.",
      ],
    },
    {
      company: "Dynamicflow",
      url: "https://dynamicflowit.com",
      role: "Web Developer",
      period: "May 2021 - January 2022",
      description: [
        "Created a React-based Tournament Management Website, reducing admin overhead by automating scheduling and team coordination.",
        "Built a website for a prominent music artist, increasing online visibility and fan engagement through interactive elements.",
        "Launched an Online Exam System for over 10,000 users, implementing secure, scalable testing features.",
      ],
    },
    {
      company: "Dream Diver",
      url: "https://dreamdiver.nl",
      role: "Web & Apps Developer",
      period: "July 2020 - December 2021",
      description: [
        "Engineered a robust Laravel-based patient management solution to streamline patient records, appointments, and billing processes.",
        "Designed and launched a React (Next.js) Website & Ionic PWA for a Package Delivery Company, achieving a 25% increase in customer satisfaction.",
        "Designed and developed a cross-platform mobile app using Ionic Framework to provide seamless food ordering experiences for users on iOS and Android devices.",
      ],
    },
    {
      company: "Watchflix, Pty Ltd.",
      url: null,
      role: "Executive, (Web Application Developer)",
      period: "October 2020 - May 2021",
      description: [
        "Developed a Laravel OTT Platform Web App, which scaled to over 10,000 active users with optimized video streaming capabilities.",
        "Integrated PayPal, SSLCOMMERZ Payment Gateway, and SMS APIs, improving user payment experience and transaction reliability.",
      ],
    },
    {
      company: "7 Info Tech",
      url: "https://7infotech.com.bd",
      role: "Junior Web Developer",
      period: "August 2018 - July 2020",
      description: [
        "Built a Raw PHP-based Inventory Management System with data tracking, enhancing inventory accuracy for 1,000+ users.",
        "Developed and customized WordPress E-commerce sites, improving site speed and user engagement.",
      ],
    },
  ],
}

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0)

  const handleTabClick = (index: number) => {
    console.log("Tab clicked:", index)
    setActiveTab(index)
  }

  // Using EXPERIENCES from constants

  return (
    <section id="experience" className="w-full flex justify-center items-center py-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-16">
          <h2 className="text-3xl font-bold text-custom-accent">{SECTION_TITLES.experience}</h2>
          <div className="flex-1 h-px bg-secondary/20 ml-8"></div>
        </div>

        <div>
          <div className="flex flex-col md:flex-row">
            {/* Tab List */}
            <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible mb-4 md:mb-0 md:mr-8">
              {EXPERIENCE_CONTENT.experiences.map((exp, index) => (
                <button
                  key={index}
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
                    <span className="text-custom-accent">
                      <span className="text-gray-500/50 px-px">@</span>{" "}
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
                    <div key={index} className="flex items-start">
                      <span className="text-custom-accent mr-3 -mt-0.5">▸</span>
                      <div className="text-custom-secondary">
                        <TechWithHoverCard text={desc} />
                      </div>
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
