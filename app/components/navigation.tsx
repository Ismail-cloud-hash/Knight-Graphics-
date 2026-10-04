"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { List } from "@phosphor-icons/react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-12 transition-all duration-300 ${
        scrolled ? "h-20 bg-white/90 backdrop-blur-md border-b border-black/5 shadow-sm" : "h-24 bg-transparent"
      }`}
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-red-600 flex items-center justify-center text-white font-playfair italic font-bold text-xl rounded-sm">
          K
        </div>
        <div className="text-lg font-black tracking-tighter text-black uppercase">
          Knight
        </div>
      </div>
      
      <nav className="hidden lg:flex items-center gap-8 text-[10px] font-bold tracking-widest uppercase text-zinc-500">
        <Link href="#" className="text-black transition-colors">Home</Link>
        <Link href="#services" className="hover:text-red-600 transition-colors">Services</Link>
        <Link href="#portfolio" className="hover:text-red-600 transition-colors">Portfolio</Link>
        <Link href="#about" className="hover:text-red-600 transition-colors">Company</Link>
        <Link href="#contact" className="hover:text-red-600 transition-colors">Contact</Link>
      </nav>

      <div className="flex items-center gap-6">
        <Link href="#contact" className="hidden md:flex items-center justify-center bg-black text-white px-7 py-3.5 text-[10px] font-bold uppercase tracking-widest hover:bg-red-600 transition-colors shadow-lg">
          Get Started
        </Link>

        {/* Mobile Menu Button */}
        <button className="lg:hidden flex flex-col gap-1.5 p-2 text-black" aria-label="Menu">
          <List size={28} />
        </button>
      </div>
    </motion.header>
  );
}
