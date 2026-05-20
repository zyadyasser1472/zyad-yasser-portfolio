"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";

const Linkedin = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const Github = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

export default function ContactSection() {


  return (
    <section id="contact" className="py-20 px-6 md:px-12 lg:px-24 transition-colors duration-300 dark:bg-black bg-neutral-50 dark:text-white text-black">
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
            <Mail className="w-5 h-5 text-neutral-500" />
            <span className="text-sm font-medium tracking-widest uppercase text-neutral-500 font-['Antic', sans-serif]">Contact</span>
          </motion.div>

          {/* Right Side - Content */}
          <div className="md:w-3/4">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-6xl font-bold mb-8 tracking-tight"
              style={{ fontFamily: "'Antic', sans-serif" }}
            >
              Let's connect
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-neutral-500 dark:text-neutral-400 font-['Antic', sans-serif] mb-16 max-w-2xl"
            >
              Have a project in mind, want to collaborate, or just want to say hello? Drop me a message and I'll get back to you as soon as possible.
            </motion.p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-10"
              >
                <div className="space-y-6">
                  <a 
                    href="mailto:zyadyasser1420@gmail.com" 
                    className="flex items-center gap-6 group cursor-pointer"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white dark:bg-[#0a0a0a] border border-neutral-200 dark:border-neutral-900 flex items-center justify-center group-hover:border-[#C2A56D]/50 transition-all duration-300 shadow-sm">
                      <Mail className="w-6 h-6 text-neutral-500 group-hover:text-[#C2A56D] transition-colors duration-300" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest text-neutral-400 font-['Antic', sans-serif] mb-1">Email</div>
                      <div className="text-lg font-bold font-['Antic', sans-serif] group-hover:text-[#C2A56D] transition-colors duration-300">zyadyasser1420@gmail.com</div>
                    </div>
                  </a>

                  <a 
                    href="tel:+201112557579" 
                    className="flex items-center gap-6 group cursor-pointer"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white dark:bg-[#0a0a0a] border border-neutral-200 dark:border-neutral-900 flex items-center justify-center group-hover:border-[#C2A56D]/50 transition-all duration-300 shadow-sm">
                      <Phone className="w-6 h-6 text-neutral-500 group-hover:text-[#C2A56D] transition-colors duration-300" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest text-neutral-400 font-['Antic', sans-serif] mb-1">Phone</div>
                      <div className="text-lg font-bold font-['Antic', sans-serif] group-hover:text-[#C2A56D] transition-colors duration-300">+20 111 255 7579</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-white dark:bg-[#0a0a0a] border border-neutral-200 dark:border-neutral-900 flex items-center justify-center group-hover:border-[#C2A56D]/50 transition-all duration-300 shadow-sm">
                      <MapPin className="w-6 h-6 text-neutral-500 group-hover:text-[#C2A56D] transition-colors duration-300" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest text-neutral-400 font-['Antic', sans-serif] mb-1">Location</div>
                      <div className="text-lg font-bold font-['Antic', sans-serif]">El Nozha, Cairo, Egypt</div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-neutral-200 dark:border-neutral-900">
                  <div className="text-xs uppercase tracking-widest text-neutral-400 font-['Antic', sans-serif] mb-6">Social Profiles</div>
                  <div className="flex gap-4">
                    <a 
                      href="https://linkedin.com/in/zyad-yasser-8316b01a9" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-white dark:bg-[#0a0a0a] border border-neutral-200 dark:border-neutral-900 flex items-center justify-center hover:border-[#C2A56D]/50 hover:scale-105 transition-all duration-300 shadow-sm"
                    >
                      <Linkedin className="w-5 h-5 text-neutral-500 hover:text-[#C2A56D] transition-colors duration-300" />
                    </a>
                    <a 
                      href="https://github.com/zyadyasser1472" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-white dark:bg-[#0a0a0a] border border-neutral-200 dark:border-neutral-900 flex items-center justify-center hover:border-[#C2A56D]/50 hover:scale-105 transition-all duration-300 shadow-sm"
                    >
                      <Github className="w-5 h-5 text-neutral-500 hover:text-[#C2A56D] transition-colors duration-300" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
