"use client";

import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="w-full bg-white py-24 md:py-32 border-b border-red-100">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        {/* Left Column */}
        <div className="lg:w-1/2 flex flex-col items-start justify-center">
          <div className="text-[#FF0000] text-[10px] font-bold uppercase tracking-[0.3em] mb-12 flex items-center gap-4 font-mono">
            <span className="w-12 h-[1px] bg-[#FF0000]"></span>
            ABOUT THE FOUNDER
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-[80px] text-black tracking-tighter mb-8 leading-[0.85]">
            <span className="font-playfair italic font-light block mb-2">Built on Craft.</span>
            <span className="font-black uppercase">Driven by Data.</span>
          </h2>
          <div className="w-12 h-1 bg-[#FF0000] mb-10"></div>
          <p className="text-zinc-600 text-sm md:text-base leading-relaxed max-w-md mb-6 font-light">
            Knight Graphics is a premium design and branding studio based in Sri Lanka. We believe that your brand&apos;s visual identity is the most powerful tool for growth in the modern digital economy.
          </p>
          <p className="text-zinc-600 text-sm md:text-base leading-relaxed max-w-md mb-12 font-light">
            Led by founder Ismail Yousuf, we blend high-end aesthetics with data-driven strategy to deliver websites, social media content, and branding that doesn&apos;t just look good - it performs.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 bg-black text-white hover:bg-red-600 px-8 py-4 text-[10px] font-black tracking-[0.2em] uppercase transition-all duration-300 shadow-lg hover:shadow-red-600/20"
          >
            Let&apos;s Talk &rarr;
          </a>
        </div>
        
        {/* Right Column: Stylized Founder Image */}
        <div className="lg:w-1/2 w-full flex justify-end">
          <div className="relative w-full max-w-lg aspect-[3/4] overflow-hidden group border border-red-200 bg-white">
            
            {/* The Image itself with brutalist filters */}
            <Image 
              src="/founder.jpeg" 
              alt="Ismail Yousuf - Founder of Knight Graphics" 
              fill
              className="object-cover grayscale contrast-125 brightness-90 group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)]"
            />
            
            {/* Red Overlay for Vibe */}
            <div className="absolute inset-0 bg-[#FF0000] mix-blend-multiply opacity-40 group-hover:opacity-10 transition-opacity duration-700"></div>

            {/* Grain Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.1] pointer-events-none mix-blend-screen" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '12px 12px' }}></div>

            {/* Decorative Brutalist Elements */}
            <div className="absolute bottom-6 right-6 border border-red-200 bg-white px-4 py-2">
              <span className="text-black text-[10px] uppercase tracking-[0.2em] font-mono font-bold">ISMAIL YOUSUF - FOUNDER</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
