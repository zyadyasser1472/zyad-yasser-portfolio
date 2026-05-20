"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import Image from "next/image";

// High-End mask-reveal text animation component (Locomotive / Apple style)
interface TextRevealProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}

const TextReveal: React.FC<TextRevealProps> = ({ text, className, style, delay = 0 }) => {
  const letters = text.split("");
  return (
    <span className={`inline-flex overflow-hidden py-2 ${className}`} style={style}>
      {letters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ y: "110%", rotate: 6, scale: 0.95 }}
          animate={{ y: 0, rotate: 0, scale: 1 }}
          transition={{
            duration: 1.2,
            delay: delay + index * 0.03,
            ease: [0.16, 1, 0.3, 1], // Epic ultra-smooth cubic bezier curve
          }}
          className="inline-block origin-bottom-left"
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};

// Word-by-word fade up for tagline
const TaglineReveal: React.FC<{ text: string; className?: string; style?: React.CSSProperties; delay?: number }> = ({
  text,
  className,
  style,
  delay = 0.8,
}) => {
  const words = text.split(" ");
  return (
    <p className={`inline-flex flex-wrap justify-center ${className}`} style={style}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden py-0.5">
          <motion.span
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: delay + i * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="inline-block mr-1.5"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </p>
  );
};

// BlurText animation component powered by Framer Motion for premium hardware acceleration
interface BlurTextProps {
  text: string;
  delay?: number;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  className?: string;
  style?: React.CSSProperties;
}

const BlurText: React.FC<BlurTextProps> = ({
  text,
  delay = 50,
  animateBy = "words",
  direction = "top",
  className = "",
  style,
}) => {
  const elements = animateBy === "words" ? text.split(" ") : text.split("");
  
  return (
    <p className={`inline-flex flex-wrap justify-center ${className}`} style={style}>
      {elements.map((element, i) => (
        <motion.span
          key={i}
          initial={{ filter: "blur(10px)", opacity: 0, y: direction === "top" ? -15 : 15 }}
          whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{
            duration: 0.5,
            delay: (i * delay) / 1000,
            ease: "easeOut",
          }}
          className="inline-block"
          style={{
            transition: `color 0.5s ease-out ${i * delay}ms`,
          }}
        >
          {element}
          {animateBy === "words" && i < elements.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </p>
  );
};

export default function PortfolioHero() {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#");
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const menuItems = [
    { label: "HOME", href: "#" },
    { label: "ABOUT", href: "#about" },
    { label: "PROJECTS", href: "#projects" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "EDUCATION", href: "#education" },
    { label: "CONTACT", href: "#contact" },
  ];

  // 1. Mouse Follower / 3D Tilt Physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 120, mass: 0.6 };
  
  // Tilt values for the profile picture (opposite directions for 3D depth)
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [18, -18]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-18, 18]), springConfig);
  
  // Parallax offsets for background elements
  const textShiftX1 = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);
  const textShiftY1 = useSpring(useTransform(mouseY, [-0.5, 0.5], [-15, 15]), springConfig);
  
  const textShiftX2 = useSpring(useTransform(mouseX, [-0.5, 0.5], [15, -15]), springConfig);
  const textShiftY2 = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig);

  // Parallax offsets for floating particles
  const auraShiftX = useSpring(useTransform(mouseX, [-0.5, 0.5], [40, -40]), springConfig);
  const auraShiftY = useSpring(useTransform(mouseY, [-0.5, 0.5], [40, -40]), springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      // Map mouse coordinates from -0.5 to 0.5
      const x = (e.clientX / innerWidth) - 0.5;
      const y = (e.clientY / innerHeight) - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // 2. Scroll Parallax Animations
  const { scrollY } = useScroll();
  
  // Make background texts slide sideways apart as user scrolls down!
  const scrollTextX1 = useTransform(scrollY, [0, 800], [0, -180]);
  const scrollTextX2 = useTransform(scrollY, [0, 800], [0, 180]);
  
  // Background text fade-out on scroll
  const textOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const textScale = useTransform(scrollY, [0, 800], [1, 0.95]);
  
  // Profile picture scales and shifts up subtly on scroll
  const imageScrollY = useTransform(scrollY, [0, 800], [0, -80]);
  const imageScrollScale = useTransform(scrollY, [0, 800], [1, 1.05]);

  return (
    <div 
      className="min-h-screen text-foreground transition-colors duration-500 overflow-hidden relative"
      style={{
        backgroundColor: isDark ? "hsl(0 0% 0%)" : "hsl(0 0% 98%)",
        color: isDark ? "hsl(0 0% 100%)" : "hsl(0 0% 10%)",
      }}
    >
      {/* 3. Deep Atmospheric Spatial Background (Glowing Blur circles) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div 
          style={{ x: auraShiftX, y: auraShiftY }}
          animate={{
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#C2A56D]/5 dark:bg-[#C2A56D]/3 blur-[130px]"
        />
        <motion.div 
          style={{ x: useTransform(auraShiftX, (v) => -v), y: useTransform(auraShiftY, (v) => -v) }}
          animate={{
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-neutral-200/20 dark:bg-neutral-900/10 blur-[130px]"
        />
      </div>

      {/* Header / Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6 backdrop-blur-md bg-white/5 dark:bg-black/5 border-b border-neutral-200/10 dark:border-neutral-900/10">
        <nav className="flex items-center justify-between max-w-screen-2xl mx-auto">
          {/* Menu Button */}
          <div className="relative">
            <button
              ref={buttonRef}
              type="button"
              className="p-2 transition-colors duration-300 z-50 text-neutral-500 hover:text-black dark:hover:text-white"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-8 h-8 flex flex-col justify-center items-center gap-2 relative">
                <span
                  className={`w-8 h-0.5 transition-all duration-300 ease-in-out transform ${
                    isMenuOpen ? "rotate-45 translate-y-3" : ""
                  }`}
                  style={{ backgroundColor: "currentColor" }}
                />
                <span
                  className={`w-8 h-0.5 transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "opacity-0 scale-x-0" : "opacity-100"
                  }`}
                  style={{ backgroundColor: "currentColor" }}
                />
                <span
                  className={`w-8 h-0.5 transition-all duration-300 ease-in-out transform ${
                    isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                  style={{ backgroundColor: "currentColor" }}
                />
              </div>
            </button>

            {isMenuOpen && (
              <div
                ref={menuRef}
                className="absolute top-full left-0 w-[200px] md:w-[240px] border-none shadow-2xl mt-2 ml-4 p-4 rounded-lg z-50 bg-white/95 dark:bg-black/95 backdrop-blur-lg border border-neutral-200/20 dark:border-neutral-900/20"
              >
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block text-lg md:text-xl font-bold tracking-wider py-1.5 px-2 cursor-pointer transition-colors duration-300"
                    style={{
                      color: activeSection === item.href ? "#C2A56D" : isDark ? "hsl(0 0% 100%)" : "hsl(0 0% 10%)", fontFamily: "'Antic', sans-serif",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#C2A56D";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = activeSection === item.href ? "#C2A56D" : (isDark ? "hsl(0 0% 100%)" : "hsl(0 0% 10%)");
                    }}
                    onClick={() => {
                      setActiveSection(item.href);
                      setIsMenuOpen(false);
                    }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Signature Brand */}
          <div 
            className="text-4xl select-none cursor-pointer hover:scale-105 transition-transform duration-300" 
            style={{ color: isDark ? "hsl(0 0% 100%)" : "hsl(0 0% 10%)", fontFamily: "'Great Vibes', cursive" }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Zeyad Yasser
          </div>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="relative w-16 h-8 rounded-full hover:opacity-80 transition-opacity"
            style={{ backgroundColor: isDark ? "hsl(0 0% 15%)" : "hsl(0 0% 90%)" }}
            aria-label="Toggle theme"
          >
            <div
              className="absolute top-1 left-1 w-6 h-6 rounded-full transition-transform duration-300"
              style={{
                backgroundColor: isDark ? "hsl(0 0% 100%)" : "hsl(0 0% 10%)",
                transform: isDark ? "translateX(2rem)" : "translateX(0)",
              }}
            />
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative min-h-screen flex flex-col justify-center items-center z-10">
        
        {/* Main Interactive Stage */}
        <div className="relative w-full max-w-7xl px-4 flex flex-col items-center justify-center select-none">
          
          {/* BACKGROUND TEXTS: "ZYAD YASSER" - Cinematic Parallax & Interactive Mouse Shifts */}
          <motion.div 
            style={{ 
              x: useTransform(scrollTextX1, (v) => v + textShiftX1.get()),
              y: textShiftY1,
              opacity: textOpacity,
              scale: textScale,
            }}
            className="w-full text-center"
          >
            <TextReveal
              text="Zyad"
              delay={0.1}
              className="font-bold text-[85px] sm:text-[145px] md:text-[190px] lg:text-[280px] xl:text-[320px] leading-none tracking-tighter uppercase justify-center whitespace-nowrap"
              style={{ color: "#C2A56D", fontFamily: "'Fira Code', monospace" }}
            />
          </motion.div>

          <motion.div 
            style={{ 
              x: useTransform(scrollTextX2, (v) => v + textShiftX2.get()),
              y: textShiftY2,
              opacity: textOpacity,
              scale: textScale,
            }}
            className="w-full text-center -mt-6 sm:-mt-10 lg:-mt-14"
          >
            <TextReveal
              text="Yasser"
              delay={0.3}
              className="font-bold text-[80px] sm:text-[145px] md:text-[190px] lg:text-[280px] xl:text-[320px] leading-[0.8] tracking-tighter uppercase justify-center whitespace-nowrap"
              style={{ color: "#C2A56D", fontFamily: "'Fira Code', monospace" }}
            />
          </motion.div>

          {/* FRONT LAYER PROFILE PICTURE: Subtly overlapping text, floats on 3D Tilt mouse-follow */}
          <motion.div 
            style={{ 
              rotateX, 
              rotateY,
              y: imageScrollY,
              scale: imageScrollScale,
              transformStyle: "preserve-3d",
              perspective: 1000
            }}
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 1.5,
              delay: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="absolute z-20 cursor-pointer pointer-events-auto"
          >
            {/* Glossy/Glassy Capsule Frame with past dimensions and hover */}
            <div 
              style={{ transform: "translateZ(40px)" }} // Pop the image out in 3D space!
              className="w-[120px] h-[200px] sm:w-[130px] sm:h-[162px] md:w-[140px] md:h-[195px] lg:w-[200px] lg:h-[320px] rounded-full overflow-hidden border border-white/20 dark:border-black/40 group transition-all duration-300 hover:scale-110 cursor-pointer shadow-[0_20px_50px_rgba(194,165,109,0.25)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.8)]"
            >
              <Image
                src="/zyaaad.webp"
                alt="Zyad Yasser Hussien Profile"
                width={1200}
                height={1920}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Gloss shine overlay */}
              <div className="absolute inset-0 bg-linear-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </div>
          </motion.div>

        </div>

        {/* Tagline - Proper Distance Below Hero */}
        <div className="absolute bottom-16 sm:bottom-20 md:bottom-24 lg:bottom-32 xl:bottom-36 left-1/2 -translate-x-1/2 w-full px-6">
          <div className="flex justify-center">
            <BlurText
              text="Crafting seamless digital experiences."
              delay={150}
              animateBy="words"
              direction="top"
              className="text-[15px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-center transition-colors duration-300 text-neutral-500 hover:text-black dark:hover:text-white"
              style={{ fontFamily: "'Antic', sans-serif" }}
            />
          </div>
        </div>

        {/* Floating Scroll Down Arrow */}
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          type="button"
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 transition-colors duration-300 animate-bounce cursor-pointer z-30"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-6 h-6 md:w-8 md:h-8 text-neutral-400 hover:text-[#C2A56D] transition-colors duration-300" />
        </motion.button>
      </main>
    </div>
  );
}
