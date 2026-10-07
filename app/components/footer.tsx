"use client";

import { useState } from "react";
import Image from "next/image";

export default function Footer() {
  const [modalContent, setModalContent] = useState<"privacy" | "terms" | null>(null);

  const serviceLinks = [
    { label: "BRANDING & IDENTITY", href: "#services" },
    { label: "BESPOKE WEBSITES", href: "#services" },
    { label: "SOCIAL MEDIA GROWTH", href: "#services" },
    { label: "SIGNAGE & PRINT", href: "#portfolio" },
    { label: "DIRECT WHATSAPP", href: "https://wa.me/94742440640?text=Hi%20Knight%20Graphics,%20I'd%20like%20to%20discuss%20a%20project.", external: true },
  ];

  const pageLinks = [
    { label: "HOME", href: "#hero" },
    { label: "SERVICES", href: "#services" },
    { label: "PORTFOLIO", href: "#portfolio" },
    { label: "ABOUT FOUNDER", href: "#about" },
    { label: "PROJECT INQUIRY", href: "#contact" },
  ];

  return (
    <footer className="bg-white border-t border-red-100 w-full px-6 md:px-16 pt-16 md:pt-24 pb-8 md:pb-12 flex flex-col gap-16 relative">
      
      {/* TOP SECTION — MAIN CONTENT ROW */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-16">
        
        {/* LEFT COLUMN */}
        <div className="flex flex-col justify-between max-w-full md:max-w-sm w-full">
          <div className="mb-8 relative w-64 h-20 sm:w-80 sm:h-24 mix-blend-multiply">
            <Image
              src="/kgfooter.jpg"
              alt="Knight Graphics"
              fill
              sizes="320px"
              className="object-contain object-left contrast-125 brightness-110"
              priority
              unoptimized
            />
          </div>
          <h2>
            <span className="block font-playfair italic text-4xl md:text-5xl text-black font-normal mb-2">
              Let's
            </span>
            <span className="block font-inter text-5xl md:text-6xl text-black font-black uppercase leading-none">
              BUILD
            </span>
            <span className="block font-inter text-5xl md:text-6xl text-black font-black uppercase leading-none">
              SOMETHING
            </span>
            <span className="block font-inter text-5xl md:text-6xl text-black font-black uppercase leading-none text-red-600">
              MEANINGFUL
            </span>
          </h2>

          <a 
            href="#contact" 
            className="group mt-10 border border-black rounded-full px-7 py-3.5 text-black text-xs uppercase tracking-widest font-bold hover:bg-red-600 hover:border-red-600 hover:text-white transition-all duration-300 inline-flex items-center gap-3 w-fit shadow-sm"
          >
            Start a project 
            <span className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 flex items-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </span>
          </a>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start w-full md:w-auto">
          
          {/* SUB-COLUMN 1: EXPERTISE */}
          <div className="flex flex-col w-full md:w-auto border-b border-red-100 md:border-none pb-8 md:pb-0">
            <div className="text-[#666] font-mono text-[10px] uppercase tracking-[0.2em] mb-4 font-bold">
              WHAT WE BUILD
            </div>
            <div className="flex flex-col gap-2.5">
              {serviceLinks.map((item) => (
                <a 
                  key={item.label} 
                  href={item.href} 
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="text-black font-inter text-xs tracking-wider font-medium hover:text-[#FF0000] transition-colors duration-200 flex items-center gap-1.5 cursor-pointer group"
                >
                  <span>{item.label}</span>
                  <span className="opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0.5 transition-all text-red-600">
                    &rarr;
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* SUB-COLUMN 2: NAVIGATION */}
          <div className="flex flex-col w-full md:w-auto border-b border-red-100 md:border-none pb-8 md:pb-0">
            <div className="text-[#666] font-mono text-[10px] uppercase tracking-[0.2em] mb-4 font-bold">
              EXPLORE
            </div>
            <div className="flex flex-col gap-2.5">
              {pageLinks.map((item) => (
                <a 
                  key={item.label} 
                  href={item.href} 
                  className="text-black font-inter text-xs tracking-wider font-medium hover:text-[#FF0000] transition-colors duration-200 flex items-center gap-1 cursor-pointer"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* SUB-COLUMN 3: CONTACT */}
          <div className="flex flex-col gap-6 w-full md:w-auto border-b border-red-100 md:border-none pb-8 md:pb-0">
            <div className="flex flex-col">
              <div className="text-[#666] font-mono text-[10px] uppercase tracking-[0.2em] mb-2 font-bold">
                LOCATION:
              </div>
              <p className="text-black font-inter text-xs font-medium leading-relaxed max-w-[180px]">
                Kolonnawa, Western Province, Sri Lanka
              </p>
            </div>
            <div className="flex flex-col">
              <div className="text-[#666] font-mono text-[10px] uppercase tracking-[0.2em] mb-2 font-bold">
                HOTLINES & EMAIL:
              </div>
              <a 
                href="tel:+94742440640" 
                className="text-black font-mono text-xs font-semibold hover:text-[#FF0000] transition-colors duration-200 mb-1"
              >
                +94 74 244 0640
              </a>
              <a 
                href="mailto:knightgraphicsl@gmail.com" 
                className="text-zinc-600 font-inter text-xs hover:text-[#FF0000] transition-colors duration-200"
              >
                knightgraphicsl@gmail.com
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-red-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 text-center md:text-left">
        <div className="text-zinc-500 font-inter text-[11px] tracking-[0.05em]">
          © {new Date().getFullYear()} KNIGHT GRAPHICS. All rights reserved.
        </div>
        
        <div className="flex gap-6">
          <button 
            onClick={() => setModalContent("privacy")} 
            className="text-zinc-500 font-inter text-[11px] hover:text-black transition-colors duration-200 cursor-pointer underline-offset-4 hover:underline"
          >
            Privacy Policy
          </button>
          <button 
            onClick={() => setModalContent("terms")} 
            className="text-zinc-500 font-inter text-[11px] hover:text-black transition-colors duration-200 cursor-pointer underline-offset-4 hover:underline"
          >
            Terms of Service
          </button>
        </div>

        <div className="text-zinc-500 font-mono text-[10px] tracking-[0.1em] uppercase flex items-center justify-center md:justify-start gap-1">
          MADE WITH <span className="text-[#FF0000]">♥</span> IN SRI LANKA
        </div>
      </div>

      {/* LEGAL MODAL */}
      {modalContent && (
        <div 
          className="fixed inset-0 z-[120] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 md:p-6"
          onClick={() => setModalContent(null)}
        >
          <div 
            className="bg-white text-black max-w-xl w-full rounded-2xl p-8 shadow-2xl border border-zinc-200 relative max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-zinc-100 mb-6">
              <h3 className="text-xl font-black uppercase tracking-tight text-black">
                {modalContent === "privacy" ? "Privacy Policy" : "Terms of Service"}
              </h3>
              <button 
                onClick={() => setModalContent(null)}
                className="w-8 h-8 rounded-full bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center text-black font-bold text-sm"
              >
                ✕
              </button>
            </div>

            <div className="text-xs text-zinc-600 leading-relaxed space-y-4">
              {modalContent === "privacy" ? (
                <>
                  <p>
                    <strong>Knight Graphics</strong> respects your privacy. When you request a project audit or reach out through our questionnaire or WhatsApp channels, we collect only the necessary details (such as your name, business name, project scope, and contact details) required to provide design and digital production services.
                  </p>
                  <p>
                    We never sell, rent, or trade client information to third parties. All client files, assets, and project data are treated with strict confidentiality.
                  </p>
                  <p>
                    For inquiries about data management, contact us directly at <span className="font-mono text-black">knightgraphicsl@gmail.com</span>.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    All creative deliverables produced by <strong>Knight Graphics</strong>—including brand identity kits, website source code, commercial marketing collateral, and storefront signage—are transferred to the client upon full project settlement according to agreed scope statements.
                  </p>
                  <p>
                    Project timelines, milestone schedules, and fabrication warranties are established in our initial project agreement. Revisions are honored within the specified milestone parameters.
                  </p>
                  <p>
                    For official contract inquiries, contact founder Ismail Yousuf at <span className="font-mono text-black">+94 74 244 0640</span>.
                  </p>
                </>
              )}
            </div>

            <div className="mt-8 pt-4 border-t border-zinc-100 flex justify-end">
              <button 
                onClick={() => setModalContent(null)}
                className="px-6 py-2.5 bg-black text-white text-xs font-mono uppercase tracking-widest font-bold hover:bg-red-600 transition-colors rounded-full"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </footer>
  );
}
