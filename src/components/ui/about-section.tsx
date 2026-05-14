"use client";

import React from "react";
import { User } from "lucide-react";

import { motion } from "framer-motion";

export default function AboutSection() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
      alt: "Coding on a laptop",
    },
    {
      url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
      alt: "Source code on a screen",
    },
    {
      url: "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=2070&auto=format&fit=crop",
      alt: "Modern workspace",
    },
  ];

  return (
    <section id="about" className="py-15 px-6 md:px-12 lg:px-24 transition-colors duration-300 dark:bg-black bg-neutral-50 dark:text-white text-black overflow-hidden">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 mb-20">
          {/* Left Side - Label */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/4 flex items-start gap-2 pt-2"
          >
            <User className="w-5 h-5 text-neutral-500" />
            <span className="text-sm font-medium tracking-widest uppercase text-neutral-500 font-['Antic', sans-serif]">About</span>
          </motion.div>

          {/* Right Side - Content */}
          <div className="md:w-3/4">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-6xl font-bold mb-8 tracking-tight" 
              style={{fontFamily: "'Antic', sans-serif"}}
            >
              About me
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-xl md:text-2xl leading-relaxed text-neutral-500 dark:text-neutral-400 max-w-4xl" 
              style={{fontFamily: "'  Great Vibes', cursive"}}
            >
              Front-end Developer specializing in React and Next.js, building high-performance web applications at CodeToon. 
              I bridge the gap between design and code by converting Figma layouts into reusable UI with Tailwind CSS. 
              My expertise lies in integrating GraphQL/Apollo APIs and optimizing for speed, accessibility, and SEO.
            </motion.p>
          </div>
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.2, ease: "easeOut" }}
              className="group relative"
            >
              <div className="flex justify-start mb-4">
                <span className="text-2xl font-light text-neutral-300 dark:text-neutral-700">+</span>
              </div>
              <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-xl transition-transform duration-500 group-hover:scale-[1.02]">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
