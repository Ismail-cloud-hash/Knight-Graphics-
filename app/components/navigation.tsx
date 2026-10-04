"use client";

import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Inquiry", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Simple active section detection
      const sections = ["hero", "services", "portfolio", "about", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out px-4 sm:px-8 md:px-12 ${
          scrolled ? "pt-3 pb-3" : "pt-6 pb-4"
        }`}
      >
        <div
          className={`max-w-[1340px] mx-auto rounded-full transition-all duration-500 flex items-center justify-between px-5 sm:px-7 py-3 ${
            scrolled
              ? "bg-white/85 backdrop-blur-xl border border-zinc-200/90 shadow-[0_16px_40px_rgba(0,0,0,0.08)]"
              : "bg-white/60 backdrop-blur-md border border-white/40 shadow-sm"
          }`}
        >
          {/* Brand Logo & Studio Name */}
          <Link
            href="#hero"
            className="flex items-center gap-3 group shrink-0"
            onClick={() => setActiveSection("hero")}
          >
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 overflow-hidden rounded-lg bg-black flex items-center justify-center p-1 shadow-md group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/navlogoblack.png"
                alt="Knight Graphics"
                width={36}
                height={36}
                className="object-contain invert"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-black tracking-tight uppercase text-black group-hover:text-red-600 transition-colors leading-none">
                Knight
              </span>
              <span className="text-[8px] sm:text-[9px] font-mono tracking-[0.25em] uppercase text-zinc-500 font-bold leading-tight">
                Graphics
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-zinc-100/80 p-1.5 rounded-full border border-zinc-200/60 backdrop-blur-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setActiveSection(item.href.replace("#", ""))}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 ${
                    isActive
                      ? "text-white bg-black shadow-sm"
                      : "text-zinc-600 hover:text-black hover:bg-white/80"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activePill"
                      className="absolute inset-0 rounded-full bg-black -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Elements */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Live Availability Badge (Desktop) */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 bg-green-50/80 border border-green-200/60 rounded-full">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-[10px] font-mono font-bold text-green-800 uppercase tracking-wider">
                Q4 Ready
              </span>
            </div>

            {/* Direct WhatsApp Quick Contact */}
            <a
              href="https://wa.me/94778545574?text=Hi%20Knight%20Graphics,%20I'd%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full bg-zinc-100 hover:bg-zinc-200 text-black hover:text-red-600 transition-colors border border-zinc-200"
              title="Chat on WhatsApp"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </a>

            {/* Primary CTA */}
            <Link
              href="#contact"
              className="flex items-center gap-2 bg-black hover:bg-red-600 text-white px-5 sm:px-6 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-red-600/20 group"
            >
              <span>Get Started</span>
              <svg
                className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-9 h-9 rounded-full bg-zinc-100 flex flex-col items-center justify-center gap-1.5 border border-zinc-200 text-black hover:bg-zinc-200 transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <span
                className={`w-4 h-0.5 bg-black transition-all duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`w-4 h-0.5 bg-black transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`w-4 h-0.5 bg-black transition-all duration-300 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl md:hidden flex flex-col justify-between pt-28 pb-10 px-8"
          >
            {/* Navigation Links List */}
            <div className="flex flex-col gap-6">
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-red-600 font-bold">
                Menu Directory
              </span>
              <div className="flex flex-col gap-4">
                {navItems.map((item, idx) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setActiveSection(item.href.replace("#", ""));
                    }}
                    className="text-3xl font-black uppercase tracking-tight text-black hover:text-red-600 transition-colors flex items-center justify-between group"
                  >
                    <span>{item.label}</span>
                    <span className="text-xs font-mono text-zinc-400 group-hover:text-red-600">
                      0{idx + 1} &rarr;
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Footer & Quick Hotlines */}
            <div className="border-t border-zinc-200 pt-8 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-500 font-bold uppercase tracking-wider">
                  Direct Hotline
                </span>
                <a
                  href="tel:+94778545574"
                  className="text-xs font-mono font-bold text-black hover:text-red-600"
                >
                  +94 77 854 5574
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-500 font-bold uppercase tracking-wider">
                  Email Studio
                </span>
                <a
                  href="mailto:knightgraphicsl@gmail.com"
                  className="text-xs font-mono font-bold text-black hover:text-red-600"
                >
                  knightgraphicsl@gmail.com
                </a>
              </div>

              <a
                href="https://wa.me/94778545574?text=Hi%20Knight%20Graphics,%20I'd%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 w-full py-4 bg-red-600 text-white font-mono text-xs uppercase tracking-widest font-bold text-center rounded-full shadow-lg"
              >
                Chat on WhatsApp Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
