"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-anim",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.1,
          ease: "power2.out",
        }
      );
      gsap.fromTo(
        ".hero-image",
        { y: 50, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.5,
          delay: 0.4,
          ease: "power3.out",
        }
      );
      gsap.fromTo(
        ".hero-badge",
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          delay: 1,
          ease: "back.out(1.5)"
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full flex flex-col bg-[#050505]">
      
      {/* Top Section (Light) */}
      <div className="w-full bg-[#fdfdfd] pt-40 pb-48 md:pb-64 px-6 flex flex-col items-center text-center relative z-0">
        
        {/* Elegant Premium Gradient Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-100 via-white to-white opacity-80 z-0"></div>
        
        <div className="hero-anim relative z-10 inline-flex items-center gap-2 px-4 py-1.5 bg-zinc-100 rounded-full mb-8">
           <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse"></span>
           <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-600">Elevating Digital Experiences</span>
        </div>

        <h1 className="hero-anim relative z-10 text-5xl md:text-7xl lg:text-[85px] font-black uppercase text-[#111] max-w-6xl leading-[1.05] tracking-tighter mb-6">
          Scaling Your Business With <br className="hidden lg:block" />
          <span className="font-playfair italic font-light text-red-600 lowercase tracking-normal px-2">precision-driven</span> <br className="hidden lg:block" />
          Digital Marketing
        </h1>
        
        <p className="hero-anim relative z-10 text-zinc-500 text-sm md:text-base max-w-2xl font-light mb-10 leading-relaxed">
          We don't just run ads; we build visually stunning ecosystems and data-backed strategies that turn clicks into consistent revenue.
        </p>
        
        <Link 
          href="#contact" 
          className="hero-anim relative z-10 bg-black text-white px-10 py-4 text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-red-600 transition-colors shadow-2xl"
        >
          Book a Strategy Audit
        </Link>
      </div>

      {/* Bottom Section (Dark) with Overlapping Image */}
      <div className="w-full relative z-10 flex flex-col items-center px-6 pb-24 md:pb-32">
        
        {/* Premium Overlapping Image Container */}
        <div className="hero-image relative w-[95%] max-w-[1200px] aspect-[16/10] md:aspect-[21/9] rounded-[24px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.4)] -mt-32 md:-mt-48 border border-white/10 bg-zinc-900 group">
          <Image 
            src="/hero_studio.jpg" 
            alt="Agency Strategy" 
            fill 
            className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>
        </div>

        {/* Elegant Glassmorphism Badge */}
        <div className="hero-badge relative -mt-12 md:-mt-16 z-20 w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/90 backdrop-blur-md border border-white/50 flex flex-col items-center justify-center text-black shadow-[0_20px_40px_rgba(0,0,0,0.2)]">
          <span className="text-2xl md:text-4xl font-black leading-none mb-1 tracking-tighter text-red-600">5.0</span>
          <span className="text-[7px] md:text-[8px] uppercase tracking-widest font-bold text-center text-zinc-500">Google<br/>Rating</span>
        </div>

        {/* Premium Minimal Service Pillars Grid */}
        <div className="hero-anim w-full max-w-[1200px] mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          
          <div className="bg-[#0f0f0f] rounded-[20px] p-8 md:p-10 flex flex-col items-center text-center gap-4 border border-white/5 hover:border-red-600/20 transition-colors group">
            <span className="text-white text-2xl md:text-3xl font-black tracking-tighter uppercase group-hover:text-red-600 transition-colors">Brand<br/>Identity</span>
            <span className="text-zinc-500 text-[10px] uppercase tracking-[0.2em] font-medium leading-tight max-w-[180px]">Strategic positioning & visual design</span>
          </div>

          <div className="bg-[#0f0f0f] rounded-[20px] p-8 md:p-10 flex flex-col items-center text-center gap-4 border border-white/5 hover:border-red-600/20 transition-colors group">
            <span className="text-white text-2xl md:text-3xl font-black tracking-tighter uppercase group-hover:text-red-600 transition-colors">Digital<br/>Marketing</span>
            <span className="text-zinc-500 text-[10px] uppercase tracking-[0.2em] font-medium leading-tight max-w-[180px]">Data-driven campaigns that convert</span>
          </div>

          <div className="bg-[#0f0f0f] rounded-[20px] p-8 md:p-10 flex flex-col items-center text-center gap-4 border border-white/5 hover:border-red-600/20 transition-colors group">
            <span className="text-white text-2xl md:text-3xl font-black tracking-tighter uppercase group-hover:text-red-600 transition-colors">Premium<br/>Printing</span>
            <span className="text-zinc-500 text-[10px] uppercase tracking-[0.2em] font-medium leading-tight max-w-[180px]">High-end physical collateral</span>
          </div>

        </div>
      </div>
    </section>
  );
}
