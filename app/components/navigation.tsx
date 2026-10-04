"use client";

import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

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
  const isClickingRef = useRef(false);

  useEffect(() => {
    const sectionIds = ["hero", "services", "portfolio", "about", "contact"];

    const handleScroll = () => {
      setScrolled(window.scrollY > 25);

      // If user recently clicked a nav item, don't let scroll spy overwrite momentarily
      if (isClickingRef.current) return;

      // Handle top of page edge case
      if (window.scrollY < 120) {
        setActiveSection("hero");
        return;
      }

      // Handle bottom of page edge case
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 90) {
        setActiveSection("contact");
        return;
      }

      // Viewport-relative measurement
      const scrollPivot = 180; // distance from top of viewport
      let currentSection = "";

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= scrollPivot && rect.bottom > scrollPivot) {
            currentSection = id;
            break;
          }
        }
      }

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
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

  // Smooth scroll handler with offset for fixed navbar
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    setActiveSection(id);
    isClickingRef.current = true;

    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -80; // account for navbar height
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }

    setTimeout(() => {
      isClickingRef.current = false;
    }, 800);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out px-3 sm:px-6 md:px-10 ${
          scrolled ? "pt-2 sm:pt-3 pb-2" : "pt-4 sm:pt-6 pb-3"
        }`}
      >
        <div className="max-w-[1360px] mx-auto rounded-full transition-all duration-300 flex items-center justify-between px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 bg-[#0a0a0a] border border-white/[0.12] hover:border-white/[0.2]">
          {/* Authentic Knight Graphics Brand Logo */}
          <Link
            href="#hero"
            className="flex items-center group shrink-0 transition-opacity duration-200 hover:opacity-90"
            onClick={(e) => handleNavClick(e, "#hero")}
          >
            <div className="relative h-8 sm:h-10 w-32 sm:w-44 flex items-center">
              <Image
                src="/logo.png"
                alt="Knight Graphics"
                width={782}
                height={274}
                className="h-full w-auto object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links with Flat, Exact Active Match */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#141414] p-1.5 rounded-full border border-white/[0.08]">
            {navItems.map((item) => {
              const itemId = item.href.replace("#", "");
              const isActive = activeSection === itemId;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-4 sm:px-5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-white text-black font-bold"
                      : "text-zinc-400 hover:bg-white hover:text-black font-medium"
                  }`}
                >
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action Elements */}
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            {/* Live Availability Badge */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 bg-[#141414] border border-white/[0.08] rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[10px] font-mono font-bold text-zinc-300 uppercase tracking-widest">
                Accepting Clients
              </span>
            </div>

            {/* Direct WhatsApp Quick Chat */}
            <a
              href="https://wa.me/94778545574?text=Hi%20Knight%20Graphics,%20I'd%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center justify-center w-9 sm:w-10 h-9 sm:h-10 rounded-full bg-[#141414] hover:bg-[#25D366] text-zinc-300 hover:text-white transition-colors duration-200 border border-white/[0.08]"
              title="Chat on WhatsApp"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </a>

            {/* Primary High-Contrast Red CTA */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="flex items-center gap-2 bg-[#E60000] hover:bg-[#cc0000] text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-colors duration-200 group shrink-0 cursor-pointer"
            >
              <span>Get Started</span>
              <svg
                className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-200"
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
            </a>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-9 sm:w-10 h-9 sm:h-10 rounded-full bg-[#141414] flex flex-col items-center justify-center gap-1.5 border border-white/[0.1] text-white hover:bg-zinc-800 transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <span
                className={`w-4 h-0.5 bg-white transition-all duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-2 bg-red-500" : ""
                }`}
              ></span>
              <span
                className={`w-4 h-0.5 bg-white transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`w-4 h-0.5 bg-white transition-all duration-300 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-2 bg-red-500" : ""
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
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-[#0a0a0a] lg:hidden flex flex-col justify-between pt-28 pb-10 px-8 text-white border-b border-white/[0.1]"
          >
            {/* Logo inside mobile menu */}
            <div className="flex flex-col gap-6">
              <div className="relative h-10 w-44">
                <Image
                  src="/logo.png"
                  alt="Knight Graphics"
                  width={782}
                  height={274}
                  className="h-full w-auto object-contain object-left"
                />
              </div>

              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-red-500 font-bold">
                Menu Directory
              </span>

              {/* Links */}
              <div className="flex flex-col gap-5">
                {navItems.map((item, idx) => {
                  const itemId = item.href.replace("#", "");
                  const isActive = activeSection === itemId;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => {
                        setMobileMenuOpen(false);
                        handleNavClick(e, item.href);
                      }}
                      className={`group text-3xl font-black uppercase tracking-tight flex items-center justify-between transition-colors ${
                        isActive ? "text-white" : "text-zinc-500 hover:text-white"
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className={`text-xs font-mono transition-colors ${
                        isActive ? "text-white" : "text-zinc-600 group-hover:text-white"
                      }`}>
                        0{idx + 1} &rarr;
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Mobile Footer & Quick Hotlines */}
            <div className="border-t border-white/[0.1] pt-6 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-400 font-bold uppercase tracking-wider">
                  Direct Hotline
                </span>
                <a
                  href="tel:+94778545574"
                  className="text-xs font-mono font-bold text-white hover:text-red-500"
                >
                  +94 77 854 5574
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-400 font-bold uppercase tracking-wider">
                  Studio Email
                </span>
                <a
                  href="mailto:knightgraphicsl@gmail.com"
                  className="text-xs font-mono font-bold text-white hover:text-red-500"
                >
                  knightgraphicsl@gmail.com
                </a>
              </div>

              <a
                href="https://wa.me/94778545574?text=Hi%20Knight%20Graphics,%20I'd%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 w-full py-4 bg-[#E60000] hover:bg-[#cc0000] text-white font-mono text-xs uppercase tracking-widest font-bold text-center rounded-full transition-colors"
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
