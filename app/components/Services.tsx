"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const categories = ["All", "Web Building", "Branding", "Social Media", "Printing"];

const servicesData = [
  { id: "01", category: "Branding", name: "Brand Identity", desc: "Logos, brand identity, and comprehensive brand kits that tell your story." },
  { id: "02", category: "Web Building", name: "Web Development", desc: "Fast, responsive, and high-converting web experiences built on modern stacks." },
  { id: "03", category: "Social Media", name: "Social Management", desc: "Strategic content and community management to grow your audience." },
  { id: "04", category: "Printing", name: "Premium Printing", desc: "High-quality physical assets and marketing collateral for your business." },
  { id: "05", category: "Web Building", name: "E-Commerce Solutions", desc: "Scalable online stores optimized for conversion and seamless checkout." },
  { id: "06", category: "Branding", name: "UI/UX Design", desc: "User-centric interface design that elevates digital products." }
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredServices = servicesData.filter(s => activeCategory === "All" || s.category === activeCategory);

  return (
    <section id="services" className="w-full bg-[#fafafa] py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-black uppercase tracking-tighter mb-8">
            Our <span className="text-red-600">Services</span>
          </h2>
          
          {/* Pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                  activeCategory === cat 
                  ? "bg-red-600 text-white shadow-lg shadow-red-600/30" 
                  : "bg-white text-zinc-500 border border-zinc-200 hover:border-red-600 hover:text-red-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "backOut" }}
                key={service.id}
                className="bg-white rounded-2xl p-8 border border-zinc-100 shadow-sm hover:shadow-xl hover:border-red-100 transition-all duration-300 group flex flex-col h-full"
              >
                <div className="flex items-start justify-between mb-12">
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-black text-lg group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                    {service.id}
                  </div>
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest bg-zinc-50 px-3 py-1 rounded-full border border-zinc-100">
                    {service.category}
                  </span>
                </div>
                
                <div className="mt-auto">
                  <h3 className="text-2xl font-black text-black uppercase tracking-tight mb-4 group-hover:text-red-600 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed font-light mb-8">
                    {service.desc}
                  </p>
                  
                  <button 
                    className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-black group-hover:text-red-600 transition-colors"
                    onClick={() => {
                      if (typeof window !== 'undefined') {
                        window.dispatchEvent(new CustomEvent('start-questionnaire', { detail: { service: service.name } }));
                      }
                    }}
                  >
                    <span className="border-b border-black group-hover:border-red-600 pb-0.5 transition-colors">Learn More</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform">
                      <path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
