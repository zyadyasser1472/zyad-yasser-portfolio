"use client";

import React from "react";
import { Folder, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { getAssetPath } from "@/lib/utils";

const projects = [
  {
    title: "Codetoon",
    image: "/Codetoon.webp",
    category: "Web Development",
    tall: true,
    href: "https://codetoon.net",
  },
  {
    title: "EBP Real Estate",
    image: "/CT-EBP.webp",
    category: "Real Estate Website",
    href: "https://egyptbestproperties.com",
  },
  {
    title: "mealify",
    image: "/mealify.webp",
    category: "Restaurants Website",
    href: "#",
  },
  {
    title: "Weather App",
    image: "/Weather app.webp",
    category: "Front-End Project",
  },
  {
    title: "portfolio",
    image: "/portfolio.webp",
    category: "Portfolio Website",
    tall: true,
    href: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="pt-0 pb-10 px-6 md:px-12 lg:px-24 transition-colors duration-300 dark:bg-black bg-neutral-50 dark:text-white text-black">
      <div className="max-w-screen-2xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row gap-12 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/4 flex items-start gap-2 pt-2"
          >
            <Folder className="w-5 h-5 text-neutral-500" />
            <span className="text-sm font-medium tracking-widest uppercase text-neutral-500 font-['Antic', sans-serif]">Projects</span>
          </motion.div>

          <div className="md:w-3/4">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-6xl font-bold mb-4 tracking-tight"
              style={{ fontFamily: "'Antic', sans-serif" }}
            >
              All projects
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-neutral-500 dark:text-neutral-400 font-['Antic', sans-serif]"
            >
              A gallery of my journey through code and design (2025—2026).
            </motion.p>
          </div>
        </div>

        {/* Masonry-style Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="break-inside-avoid group cursor-pointer block"
            >
              <div className="flex justify-start mb-4">
                <Plus className="w-4 h-4 text-neutral-300 dark:text-neutral-800" />
              </div>
              <div 
                className={`relative overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-900 ${
                  project.tall ? "aspect-3/4" : "aspect-square"
                }`}
              >
                <img
                  src={getAssetPath(project.image)}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="mt-4 flex flex-col">
                <h3 className="text-xl font-bold tracking-tight" style={{ fontFamily: "'Antic', sans-serif" }}>
                  {project.title}
                </h3>
                <span className="text-sm text-neutral-500 uppercase tracking-wider mt-1 font-['Antic', sans-serif]">
                  {project.category}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
