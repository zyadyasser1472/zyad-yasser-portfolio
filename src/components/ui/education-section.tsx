"use client";

import React from "react";
import { GraduationCap, Award } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function EducationSection() {
  return (
    <section id="education" className="pt-10 pb-20 px-6 md:px-12 lg:px-24 transition-colors duration-300 dark:bg-black bg-neutral-50 dark:text-white text-black">
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
            <GraduationCap className="w-5 h-5 text-neutral-500" />
            <span className="text-sm font-medium tracking-widest uppercase text-neutral-500 font-['Antic', sans-serif]">Education</span>
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
              Academic Background
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group relative p-8 md:p-12 rounded-3xl bg-white dark:bg-[#0a0a0a] border border-neutral-200 dark:border-neutral-900 shadow-sm hover:shadow-xl hover:border-[#C2A56D]/30 transition-all duration-500 overflow-hidden"
            >
              {/* Subtle background decoration */}
              <div className="absolute -right-8 -bottom-8 opacity-[0.03] dark:opacity-[0.05] group-hover:opacity-[0.08] group-hover:scale-110 transition-all duration-700 pointer-events-none">
                <Award className="w-64 h-64" />
              </div>

              <div className="relative z-10 flex flex-col gap-10">
                {/* Information */}
                <div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-1" style={{ fontFamily: "'Antic', sans-serif" }}>
                        Bachelor of Fine Arts
                      </h3>
                      <div className="text-lg text-[#C2A56D] font-['Antic', sans-serif] uppercase tracking-widest">
                        Helwan University
                      </div>
                    </div>
                    <div className="text-neutral-400 dark:text-neutral-500 font-['Fira Code', monospace] font-medium tracking-wider text-sm md:text-base md:pt-2">
                      09/2018 — 07/2023
                    </div>
                  </div>
                  
                  <p className="text-lg text-neutral-600 dark:text-neutral-400 font-['Antic', sans-serif] leading-relaxed max-w-4xl">
                    A rigorous academic journey that formed a strong foundation in design principles, aesthetics, and creative problem solving. These artistic sensibilities now bridge the gap between UI/UX design and frontend development, ensuring that everything I build is pixel-perfect and visually stunning.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-4 items-center">
                    <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-neutral-100 dark:bg-neutral-900 rounded-full text-sm font-medium font-['Antic', sans-serif] border border-neutral-200 dark:border-neutral-800">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C2A56D] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#C2A56D]"></span>
                      </span>
                      Graduation Project: Excellent
                    </div>
                  </div>
                </div>

                 {/* Massive Full-Width Project Image Showcase */}
                <div className="w-full">
                  <div className="group/img relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-900 bg-neutral-100 dark:bg-neutral-950 aspect-video md:max-h-[600px] w-full shadow-lg hover:border-[#C2A56D]/30 transition-all duration-500">
                    {/* Real Image */}
                    <Image 
                      src="/project-img.webp" 
                      alt="Graduation Project Showcase" 
                      className="w-full h-full object-contain p-2 group-hover/img:scale-[1.01] transition-transform duration-700 ease-out opacity-90 group-hover/img:opacity-100"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          const fallback = parent.querySelector('.fallback-graphic') as HTMLElement;
                          if (fallback) fallback.style.display = 'flex';
                        }
                      }}
                      width={1200}
                      height={675}
                      priority
                    />
                    
                    {/* Elegant fallback if image is not present yet */}
                    <div 
                      className="fallback-graphic absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-linear-to-br from-neutral-50 to-neutral-100 dark:from-[#080808] dark:to-[#121212]"
                      style={{ display: 'none' }}
                    >
                      <div className="w-16 h-16 rounded-full border border-neutral-200 dark:border-neutral-800 flex items-center justify-center mb-4">
                        <span className="text-[#C2A56D] text-2xl font-bold">🎨</span>
                      </div>
                      <h4 className="text-lg font-bold mb-2 font-['Antic', sans-serif]">Graduation Artwork</h4>
                      <p className="text-sm text-neutral-400 font-['Antic', sans-serif] max-w-[300px] leading-relaxed">
                        Artwork photo named <code className="font-mono text-xs bg-neutral-200 dark:bg-neutral-800 px-1.5 py-0.5 rounded">project-img.webp</code> inside the <code className="font-mono text-xs">public/</code> folder is active!
                      </p>
                    </div>

                    {/* Dark/Light overlay */}
                    <div className="absolute inset-0 bg-black/5 dark:bg-black/15 group-hover/img:bg-transparent transition-colors duration-500" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
