"use client";

import React from "react";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Front-End Developer",
    company: "Codetoon - software house",
    period: "09/2025 — Present",
    description: "Built and maintained responsive and scalable user interfaces using Next.js and React. Integrated GraphQL APIs with Apollo Client to optimize data fetching and caching. Developed unit and integration tests using React Testing Library. Refactored core UI/UX components to improve consistency and accessibility.",
  },
  {
    title: "Front-End Developer",
    company: "Egypt Best Properties",
    period: "09/2025 — 12/2025",
    description: "Contributed to a production-level real estate web platform by translating UI/UX designs into responsive, accessible components using Tailwind CSS. Implemented advanced search and filtering functionality for properties and optimized SEO structure and metadata across pages.",
  },
  {
    title: "Front End Developer Diploma",
    company: "Route Academy",
    period: "01/2025 — 08/2025",
    description: "Completed an intensive front-end development diploma in Cairo, focusing on HTML/CSS, JavaScript, React.js, Tailwind CSS, and RESTful APIs to build robust modern web applications.",
  },
  {
     title: "Freelance Web Developer",
    company: "Self-Employed",
    period: "2023 — 2024",
    description: "Designed and developed custom web applications for various clients. Focused on creating intuitive user interfaces and responsive layouts. Collaborated directly with clients to translate business requirements into technical solutions.",
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="pt-20 pb-20 px-6 md:px-12 lg:px-24 transition-colors duration-300 dark:bg-black bg-neutral-50 dark:text-white text-black">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Side - Label */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/4 flex items-start gap-2 pt-2"
          >
            <Briefcase className="w-5 h-5 text-neutral-500" />
            <span className="text-sm font-medium tracking-widest uppercase text-neutral-500 font-['Antic', sans-serif]">Experience</span>
          </motion.div>

          {/* Right Side - Content */}
          <div className="md:w-3/4">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-6xl font-bold mb-16 tracking-tight"
              style={{ fontFamily: "'Antic', sans-serif" }}
            >
              My journey
            </motion.h2>

            <div className="relative border-l border-neutral-200 dark:border-neutral-800 ml-3 md:ml-0">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="mb-16 last:mb-0 relative pl-8 md:pl-12"
                >
                  {/* Timeline Dot */}
                  <div className="absolute w-6 h-6 rounded-full bg-neutral-50 dark:bg-black border-2 border-[#C2A56D] left-[-12px] top-1 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#C2A56D]" />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight" style={{ fontFamily: "'Antic', sans-serif" }}>
                      {exp.title}
                    </h3>
                    <span className="text-[#C2A56D] text-sm md:text-base font-medium mt-2 sm:mt-0 font-['Fira Code', monospace] uppercase tracking-wider">
                      {exp.period}
                    </span>
                  </div>
                  
                  <div className="text-xl text-neutral-500 dark:text-neutral-400 mb-6 font-['Antic', sans-serif] uppercase tracking-widest">
                    {exp.company}
                  </div>
                  
                  <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed font-['Antic', sans-serif]">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
