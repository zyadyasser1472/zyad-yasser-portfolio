"use client";

import React from "react";
import { ArrowUp } from "lucide-react";



export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-neutral-200 dark:border-neutral-900 bg-white dark:bg-black text-black dark:text-white py-12 px-6 md:px-12 lg:px-24 transition-colors duration-300">
      <div className="max-w-screen-2xl mx-auto flex flex-col gap-10">
        
        {/* Top Row: Brand & Socials & Nav */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 border-b border-neutral-100 dark:border-neutral-900 pb-10">
          
          {/* Brand/Signature */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
            <span 
              className="text-4xl text-[#C2A56D] hover:scale-105 transition-transform duration-300 select-none" 
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              Zyad Yasser
            </span>
            <p className="text-sm tracking-wider text-neutral-400 font-['Antic', sans-serif] uppercase">
              Creative Front-End Developer
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 font-['Antic', sans-serif] text-sm font-medium tracking-wider">
            <a href="#about" className="hover:text-[#C2A56D] transition-colors duration-300">ABOUT</a>
            <a href="#projects" className="hover:text-[#C2A56D] transition-colors duration-300">PROJECTS</a>
            <a href="#experience" className="hover:text-[#C2A56D] transition-colors duration-300">EXPERIENCE</a>
            <a href="#education" className="hover:text-[#C2A56D] transition-colors duration-300">EDUCATION</a>
            <a href="#contact" className="hover:text-[#C2A56D] transition-colors duration-300">CONTACT</a>
          </div>


        </div>

        {/* Bottom Row: Copyright & Back to Top */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left text-xs font-['Antic', sans-serif] text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">
          <div>
            &copy; {currentYear} Zyad Yasser Hussien. All rights reserved.
          </div>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 group hover:text-[#C2A56D] transition-colors duration-300 py-2"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>

      </div>
    </footer>
  );
}
