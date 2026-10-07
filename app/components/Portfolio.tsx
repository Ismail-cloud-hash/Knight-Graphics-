"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type Category = "ALL" | "WEB" | "SOCIAL" | "PRINT";

interface Project {
  id: string;
  number: string;
  title: string;
  client: string;
  category: "WEB" | "SOCIAL" | "PRINT";
  categoryLabel: string;
  tag: string;
  badge?: string;
  image: string;
  secondaryImage?: string;
  location: string;
  verifiedDetails: {
    addressOrChannel: string;
    contactOrMetric: string;
    highlights: string[];
  };
  summary: string;
  craftNarrative: string;
  deliverables: string[];
  externalUrl?: string;
  metricPills?: { label: string; value: string }[];
}

// Exactly 6 curated flagship works prioritized: Web First -> Social Media -> Print & Signage
const portfolioProjects: Project[] = [
  // 01: Top Big Flagship Card (Web: Takumi Halal Mart E-Commerce Platform)
  {
    id: "takumi-ecommerce-web",
    number: "01",
    title: "Takumi Halal Mart Store",
    client: "Takumi Halal Mart (Kabir Motors)",
    category: "WEB",
    categoryLabel: "Web & E-Commerce",
    tag: "Bespoke Cross-Border Store",
    badge: "Live E-Commerce",
    image: "/takumi.png",
    secondaryImage: "/portfolio/takumi-storefront.jpg",
    location: "Chiba-ken, Japan",
    verifiedDetails: {
      addressOrChannel: "takumihalalmart.store · Crest Togane 102, Chiba-ken, Japan",
      contactOrMetric: "Stripe Payment Gateway · 080 3439 6522 · Nationwide Japan Delivery",
      highlights: [
        "Full-stack custom online supermarket bridging international shoppers across Japan",
        "Streamlined Stripe checkout engine supporting credit cards and mobile payments",
        "Mobile-first product catalog for fresh Halal meats, produce, and Asian pantry staples",
        "Seamless digital-to-retail integration with Takumi's physical store in Chiba"
      ]
    },
    summary: "Bespoke cross-border e-commerce web platform powered by Stripe, delivering authentic halal groceries and Sri Lankan essentials nationwide across Japan.",
    craftNarrative: "Engineered an ultra-fast, high-converting digital storefront for Takumi Halal Mart in Japan. We designed the complete digital customer journey from intuitive category browsing and real-time inventory displays to frictionless single-click Stripe checkout, driving immediate organic online orders from the Asian diaspora throughout Japan.",
    deliverables: [
      "Custom E-Commerce Web Architecture",
      "Stripe Checkout & Payment Gateway",
      "Mobile-Optimized Inventory Catalog",
      "Cart & Checkout Order Automation",
      "Cross-Border Domain & SSL Configuration"
    ],
    externalUrl: "https://takumihalalmart.store",
    metricPills: [
      { label: "Platform", value: "Stripe Storefront" },
      { label: "Reach", value: "All Prefectures (Japan)" },
      { label: "Performance", value: "Mobile Optimized" }
    ]
  },

  // 02: Bottom Left Card (Web: TripVibe Lanka Private Tours)
  {
    id: "tripvibe-lanka-platform",
    number: "02",
    title: "TripVibe Lanka",
    client: "TripVibe Lanka Pvt Ltd",
    category: "WEB",
    categoryLabel: "Web Development",
    tag: "Tourism Booking Engine",
    badge: "5.0★ TripAdvisor",
    image: "/tripvibe.png",
    location: "Colombo, Sri Lanka",
    verifiedDetails: {
      addressOrChannel: "tripvibelanka.com · WhatsApp Booking Hub",
      contactOrMetric: "Official Hotline: +94 77 021 7733 · 5.0★ Rated",
      highlights: [
        "Dedicated private tour inquiry and itinerary exploration engine",
        "Fast Next.js architecture optimized for international inbound travelers",
        "Direct WhatsApp instant reservation and bespoke itinerary consultation",
        "Integrated SEO, AEO, and GEO search discoverability"
      ]
    },
    summary: "High-performance web platform and custom booking engine for Sri Lanka's private tour specialists, featuring interactive itinerary exploration and instant WhatsApp reservation.",
    craftNarrative: "Built for Sri Lanka's leading private travel operator, TripVibe Lanka. We designed and developed an ultra-responsive web platform engineered around seamless traveler conversion, featuring multi-day tour packages, driver-guide showcases, and automated WhatsApp inquiry routing.",
    deliverables: [
      "Custom Next.js Web Architecture",
      "Interactive Route & Package Showcases",
      "Direct WhatsApp Booking Funnel",
      "Mobile-First Responsive Interface",
      "Search & Answer Engine Optimization"
    ],
    externalUrl: "https://tripvibelanka.com",
    metricPills: [
      { label: "Platform", value: "Next.js App" },
      { label: "Rating", value: "5.0★ TripAdvisor" }
    ]
  },

  // 03: Bottom Center Card (Social: Diner's Deli Takeaway)
  {
    id: "diners-deli-social",
    number: "03",
    title: "Diner's Deli",
    client: "Diner's Deli Restaurant",
    category: "SOCIAL",
    categoryLabel: "Social Media",
    tag: "Craving-Driven Food Marketing",
    badge: "23.2K+ Views",
    image: "/portfolio/diners-deli.jpg",
    location: "Dehiwala, Colombo",
    verifiedDetails: {
      addressOrChannel: "100A, Hill Street, Dehiwala · @diners.deli",
      contactOrMetric: "Tel: 0114 178664 · 23.2K Views / 30 Days · UberEats Partner",
      highlights: [
        "Verified 23,200+ video views in 30-day Instagram dashboard audit",
        "High-conversion promo campaigns: 'Weekend Special 5 Subs for Rs. 3,500'",
        "Specialty snack campaigns: '4 Hotdogs for Rs. 999' & 'Mid-Week Mini Subs'",
        "Direct UberEats Colombo integration funnels driving takeout and delivery"
      ]
    },
    summary: "Appetite-driven social media growth and promotional campaign design, generating over 23.2K video views in 30 days and driving direct UberEats delivery volume.",
    craftNarrative: "Engineered a high-velocity digital campaign strategy for Diner's Deli takeaway on Hill Street, Dehiwala. We created thumb-stopping promotional carousels, hunger-inducing video reels, and limited-time bundle promotions ('5 Subs for Rs. 3,500', '4 Hotdogs for Rs. 999', 'Double the Crunch Burger').",
    deliverables: [
      "Promotional Campaign Ad Visuals",
      "Short-Form Video Reels & TikTok Creative",
      "UberEats Delivery Integration Artwork",
      "Weekend Bundle & Flash Deal Creatives",
      "Instagram & Facebook Feed Curation"
    ],
    metricPills: [
      { label: "Reach", value: "23.2K Views / 30d" },
      { label: "Delivery", value: "UberEats Partner" }
    ]
  },

  // 04: Bottom Right Card (Social: Fixtacts Haute Perfumery)
  {
    id: "fixtacts-perfumery-social",
    number: "04",
    title: "Fixtacts Haute Perfumery",
    client: "Fixtacts Lk",
    category: "SOCIAL",
    categoryLabel: "Social Media",
    tag: "Luxury Fragrance Direction",
    badge: "Editorial Grid",
    image: "/portfolio/fixtacts-perfume.jpg",
    location: "Colombo, Sri Lanka",
    verifiedDetails: {
      addressOrChannel: "Colombo, Sri Lanka · fixtacts@gmail.com · @fixtacts",
      contactOrMetric: "Featured: French Avenue · Rayhaan Tiger · Lattafa · Calvin Klein",
      highlights: [
        "Verified campaign ads: 'End of Year Up to 25% Off' & '11.11 Big Sale'",
        "Specialty fragrance launches: Rayhaan Tiger Rs. 7,800, Meme Birds Kids collection",
        "National cultural campaigns: Sri Lanka Independence Day celebration creative",
        "Coordinated multi-platform aesthetic across Instagram, Facebook, and TikTok"
      ]
    },
    summary: "Editorial visual direction and promotional advertising for an authentic Arabian and French fragrance house, driving direct WhatsApp and DM customer inquiries.",
    craftNarrative: "Curated a luxury editorial social identity for Fixtacts Lk in Colombo. We produced cinematic, high-contrast product photocomposites highlighting authentic Arabian and French perfume lines (French Avenue, Lattafa Khamrah, Calvin Klein CK One Shock, Afnan, Hawas).",
    deliverables: [
      "Editorial Fragrance Product Photography Direction",
      "Promotional Campaign Banners (End of Year, 11.11 Sale)",
      "Cross-Platform Social Grid Layout (IG, FB, TikTok)",
      "National Day & Event Creative Assets",
      "WhatsApp & Direct Message Sales Graphics"
    ],
    metricPills: [
      { label: "Focus", value: "Arabian & French" },
      { label: "Platforms", value: "IG · FB · TikTok" }
    ]
  },

  // 05: Row 3 Card (Print: Knight Modifications Colombo)
  {
    id: "knight-modifications-colombo",
    number: "05",
    title: "Knight Modifications",
    client: "Knight Modifications Colombo",
    category: "PRINT",
    categoryLabel: "Signage & Print",
    tag: "Storefront Fascia & Lightbox Displays",
    badge: "Automotive Signage",
    image: "/portfolio/knight-modifications-signage.jpg",
    location: "Colombo 10, Sri Lanka",
    verifiedDetails: {
      addressOrChannel: "174 - B, Jayantha Weerasekara Mawatha, Colombo - 10",
      contactOrMetric: "Hotline: 0742440640",
      highlights: [
        "Wholesale & Retail Bike Modification: Exhausts, Body Kits, LED Lights, Helmets",
        "Heavy-duty outdoor roadside storefront fascia billboard mounted high on facade",
        "Double-sided illuminated standing sidewalk lightboxes for day & night visibility",
        "High-contrast 3D digital showroom banners: 'Upgrade your ride with style'"
      ]
    },
    summary: "Complete commercial storefront branding and illuminated signage suite for Colombo's premier motorcycle modification and wholesale performance studio.",
    craftNarrative: "Engineered and installed the commercial signage package for Knight Modifications on Jayantha Weerasekara Mawatha, Colombo 10. Designed the bold geometric 'KM' brandmark, fabricated an expansive outdoor overhead fascia billboard engineered for weather durability, standing double-sided illuminated lightboxes, and 3D showroom performance displays.",
    deliverables: [
      "Main Overhead Storefront Fascia Billboard",
      "Double-Sided Illuminated Standing Lightbox Displays",
      "Showroom 3D Performance Promotion Posters",
      "Category Iconography (Exhausts, Body Kits, LED, Helmets)",
      "Precision Metal & Acrylic Signage Fabrication"
    ],
    metricPills: [
      { label: "Location", value: "Colombo 10" },
      { label: "Signage", value: "Fascia & Lightboxes" }
    ]
  },

  // 06: Row 3 Card (Print: Haute Retail Boutique Environmental Installation)
  {
    id: "luxury-boutique-installation",
    number: "06",
    title: "Haute Retail Boutique",
    client: "Luxury Cosmetics & Handbag Showroom",
    category: "PRINT",
    categoryLabel: "Signage & Print",
    tag: "Environmental Retail Wall Murals",
    badge: "Turnkey Installation",
    image: "/portfolio/luxury-retail-installation.jpg",
    location: "Colombo Commercial Hub",
    verifiedDetails: {
      addressOrChannel: "Multi-Brand Luxury Showroom, Colombo",
      contactOrMetric: "Commercial UV Matte Vinyl · On-Site Installation by Knight Graphics",
      highlights: [
        "Large-format feature wall backdrops for luxury handbag collection (Chanel, LV, Givenchy)",
        "Dedicated perfume exhibition murals featuring Hawas, Calvin Klein, and Armaf",
        "Documented on-site physical vinyl installation by Knight Graphics crew",
        "Commercial-grade glare-free matte finish tailored for retail showroom lighting"
      ]
    },
    summary: "Turnkey architectural interior transformation for a premier commercial boutique, featuring panoramic high-definition vinyl wall murals and on-site physical mounting.",
    craftNarrative: "Delivered a complete interior environmental graphics revamp for an exclusive luxury boutique in Colombo. Knight Graphics handled both design and physical execution: engineering ultra-high-resolution panoramic wall backdrops, printing on heavy-duty commercial vinyl, and mounting on-site with zero-bubble precision.",
    deliverables: [
      "Wide-Format Boutique Wall Murals",
      "Designer Handbag Feature Graphics",
      "Niche Fragrance Display Backdrops",
      "Commercial-Grade UV Vinyl Printing",
      "On-Site Physical Mounting & Installation"
    ],
    metricPills: [
      { label: "Material", value: "UV Matte Vinyl" },
      { label: "Mounting", value: "Turnkey On-Site" }
    ]
  }
];

const categoryFilters: { label: string; value: Category }[] = [
  { label: "ALL", value: "ALL" },
  { label: "WEB DESIGN", value: "WEB" },
  { label: "SOCIAL MEDIA", value: "SOCIAL" },
  { label: "PRINT & SIGNAGE", value: "PRINT" }
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<Category>("ALL");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeHeroSubTab, setActiveHeroSubTab] = useState<number>(0);

  // Filter projects based on activeTab
  const visibleProjects = portfolioProjects.filter((p) =>
    activeTab === "ALL" ? true : p.category === activeTab
  );

  // Keyboard navigation & lock body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  const handleNext = () => {
    if (!selectedProject) return;
    const currentIndex = visibleProjects.findIndex((p) => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % visibleProjects.length;
    setSelectedProject(visibleProjects[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedProject) return;
    const currentIndex = visibleProjects.findIndex((p) => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + visibleProjects.length) % visibleProjects.length;
    setSelectedProject(visibleProjects[prevIndex]);
  };

  // Specific project references for the curated bento layout
  const heroProject = portfolioProjects[0]; // Takumi Web
  const colLeftProject = portfolioProjects[1]; // TripVibe Web
  const colCenterProject = portfolioProjects[2]; // Diner's Deli Social
  const colRightProject = portfolioProjects[3]; // Fixtacts Social
  const row3LeftProject = portfolioProjects[4]; // Knight Modifications Print
  const row3RightProject = portfolioProjects[5]; // Haute Boutique Print

  return (
    <section id="portfolio" className="bg-[#fafafa] py-24 md:py-36 w-full relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-14 gap-8">
          <div>
            <p className="text-[#E60000] text-[11px] font-mono uppercase tracking-[0.25em] mb-4 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#E60000]"></span>
              Selected Works · Flagship 6
            </p>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-black uppercase tracking-tighter leading-[0.92]">
              Digital Craft & <br />
              <span className="text-transparent" style={{ WebkitTextStroke: "1.5px black" }}>Real Impact.</span>
            </h2>
            <p className="mt-4 text-zinc-600 text-sm md:text-base font-normal leading-relaxed max-w-xl">
              Prioritized from bespoke web platforms & e-commerce to viral social media campaigns and commercial storefront signage.
            </p>
          </div>

          {/* Single-Row Clean Segmented Filter Bar: Web First -> Social -> Print */}
          <div className="inline-flex p-1.5 bg-zinc-200/70 rounded-full border border-zinc-300/60 backdrop-blur-sm self-start lg:self-end overflow-x-auto max-w-full">
            {categoryFilters.map((tab) => {
              const count = tab.value === "ALL" 
                ? portfolioProjects.length 
                : portfolioProjects.filter((p) => p.category === tab.value).length;
              const isActive = activeTab === tab.value;

              return (
                <button
                  key={tab.value}
                  onClick={() => setActiveTab(tab.value)}
                  className={`px-4 py-2 rounded-full text-[10px] sm:text-[11px] font-mono uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "bg-black text-white shadow-md font-bold"
                      : "text-zinc-600 hover:text-black font-medium"
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`text-[9px] px-1.5 py-0.2 rounded-full ${
                      isActive ? "bg-[#E60000] text-white" : "bg-zinc-300/80 text-zinc-700"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 
          BENTO GRID LAYOUT MATCHING USER REFERENCE DESIGN:
          - ROW 1: Wide Full-Width Feature Card (Takumi Halal Mart E-Commerce Web)
          - ROW 2: 3-Column Bento (TripVibe Web, Diner's Deli Social, Fixtacts Social)
          - ROW 3: 2-Column Split (Knight Modifications Print & Haute Boutique Print)
        */}

        {activeTab === "ALL" ? (
          <div className="space-y-8">
            
            {/* ============================================================== */}
            {/* ROW 1: TOP WIDE HERO CARD (Takumi Halal Mart E-Commerce Web)   */}
            {/* ============================================================== */}
            <div
              onClick={() => setSelectedProject(heroProject)}
              className="group cursor-pointer bg-white rounded-[32px] border border-zinc-200/90 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_24px_50px_rgba(0,0,0,0.08)] transition-all duration-300 p-6 md:p-10 lg:p-12 relative overflow-hidden"
            >
              {/* Subtle red accent line at top */}
              <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-red-500/20 to-transparent"></div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left Column: Eyebrow, Title, Body, CTA & Metric Pills */}
                <div className="lg:col-span-6 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#E60000] font-bold">
                        Feature / {heroProject.number}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-300"></span>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                        {heroProject.categoryLabel}
                      </span>
                    </div>

                    <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black leading-[0.95] mb-5 group-hover:text-[#E60000] transition-colors">
                      {heroProject.title}
                    </h3>

                    <p className="text-zinc-600 text-sm md:text-base font-normal leading-relaxed max-w-lg mb-8">
                      {heroProject.summary}
                    </p>

                    {/* Action buttons */}
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="inline-flex items-center gap-3 px-6 py-3.5 bg-black text-white hover:bg-[#E60000] rounded-full text-xs font-mono font-bold uppercase tracking-widest transition-all duration-300 shadow-md group-hover:shadow-lg">
                        <span>Explore Case Study</span>
                        <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>

                      {heroProject.externalUrl && (
                        <a
                          href={heroProject.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="px-5 py-3 rounded-full text-xs font-mono uppercase tracking-wider font-bold text-zinc-700 bg-zinc-100 hover:bg-zinc-200 transition-colors flex items-center gap-2"
                        >
                          <span>Visit Store</span>
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Micro Metric Pills on Bottom Left */}
                  <div className="pt-8 mt-8 border-t border-zinc-100 flex flex-wrap items-center gap-6">
                    {heroProject.metricPills?.map((m, mi) => (
                      <div key={mi} className="flex flex-col">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">
                          {m.label}
                        </span>
                        <span className="text-xs sm:text-sm font-mono font-bold text-black mt-0.5">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column: Full-Bleed High-Res E-Commerce Media Showcase */}
                <div className="lg:col-span-6 flex flex-col items-center">
                  
                  {/* Top Mini Pill Tabs matching reference style */}
                  <div className="flex items-center gap-2 mb-4 self-center lg:self-end bg-zinc-100/90 p-1 rounded-full border border-zinc-200">
                    {["E-Commerce UI", "Storefront Facade", "Stripe Engine"].map((tabLabel, ti) => (
                      <button
                        key={ti}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveHeroSubTab(ti);
                        }}
                        className={`px-3 py-1 rounded-full text-[9px] font-mono uppercase tracking-wider transition-all ${
                          activeHeroSubTab === ti
                            ? "bg-white text-black shadow-sm font-bold"
                            : "text-zinc-500 hover:text-black"
                        }`}
                      >
                        {tabLabel}
                      </button>
                    ))}
                  </div>

                  {/* Proper Full Rectangular Showcase Container */}
                  <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-zinc-950 shadow-xl border border-black/10 group-hover:border-black/20 transition-all">
                    <Image
                      src={activeHeroSubTab === 1 && heroProject.secondaryImage ? heroProject.secondaryImage : heroProject.image}
                      alt={heroProject.title}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      priority
                    />

                    {/* Floating Overlay Badge */}
                    <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-black/5 flex items-center gap-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#E60000] animate-pulse"></span>
                      <div>
                        <p className="text-[9px] font-mono uppercase tracking-wider text-zinc-400 font-bold">Client</p>
                        <p className="text-[11px] font-mono font-bold text-black">{heroProject.client}</p>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>

            {/* ============================================================== */}
            {/* ROW 2: 3-COLUMN BENTO (Full Rectangular Media on all 3 Cards)  */}
            {/* Col 1: TripVibe (Web) | Col 2: Diner's Deli | Col 3: Fixtacts   */}
            {/* ============================================================== */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* CARD 2 (LEFT): TripVibe Lanka Web Engine */}
              <div
                onClick={() => setSelectedProject(colLeftProject)}
                className="group cursor-pointer bg-white rounded-[32px] border border-zinc-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)] transition-all duration-300 p-6 md:p-8 flex flex-col justify-between hover:-translate-y-1"
              >
                {/* Full Rectangular Visual Container */}
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-950 shadow-md border border-zinc-100 mb-6">
                  <Image
                    src={colLeftProject.image}
                    alt={colLeftProject.title}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider text-black shadow-sm">
                    {colLeftProject.badge}
                  </div>
                </div>

                {/* Bottom Half: Eyebrow, Title, Copy */}
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.2em] text-[#E60000] font-bold mb-2">
                    <span>Feature / {colLeftProject.number}</span>
                    <span className="text-zinc-400 font-normal">{colLeftProject.categoryLabel}</span>
                  </div>
                  <h4 className="text-2xl font-black uppercase tracking-tight text-black group-hover:text-[#E60000] transition-colors leading-tight mb-2">
                    {colLeftProject.title}
                  </h4>
                  <p className="text-zinc-600 text-xs md:text-sm font-normal leading-relaxed line-clamp-2 mb-4">
                    {colLeftProject.summary}
                  </p>
                  <div className="pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-mono">
                    <span className="text-zinc-500 font-bold">tripvibelanka.com</span>
                    <span className="text-[#E60000] font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Explore &rarr;
                    </span>
                  </div>
                </div>
              </div>

              {/* CARD 3 (CENTER): Diner's Deli Viral Food Marketing */}
              <div
                onClick={() => setSelectedProject(colCenterProject)}
                className="group cursor-pointer bg-white rounded-[32px] border border-zinc-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)] transition-all duration-300 p-6 md:p-8 flex flex-col justify-between hover:-translate-y-1"
              >
                {/* Full Rectangular Visual Container (No circles!) */}
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-950 shadow-md border border-zinc-100 mb-6">
                  <Image
                    src={colCenterProject.image}
                    alt={colCenterProject.title}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-[#E60000] text-white px-3 py-1 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider shadow-sm">
                    {colCenterProject.badge}
                  </div>
                </div>

                {/* Bottom Half: Eyebrow, Title, Copy */}
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.2em] text-[#E60000] font-bold mb-2">
                    <span>Feature / {colCenterProject.number}</span>
                    <span className="text-zinc-400 font-normal">{colCenterProject.categoryLabel}</span>
                  </div>
                  <h4 className="text-2xl font-black uppercase tracking-tight text-black group-hover:text-[#E60000] transition-colors leading-tight mb-2">
                    {colCenterProject.title}
                  </h4>
                  <p className="text-zinc-600 text-xs md:text-sm font-normal leading-relaxed line-clamp-2 mb-4">
                    {colCenterProject.summary}
                  </p>
                  <div className="pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-mono">
                    <span className="text-zinc-500 font-bold">100A Hill St · Dehiwala</span>
                    <span className="text-[#E60000] font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Campaigns &rarr;
                    </span>
                  </div>
                </div>
              </div>

              {/* CARD 4 (RIGHT): Fixtacts Haute Perfumery Social Direction */}
              <div
                onClick={() => setSelectedProject(colRightProject)}
                className="group cursor-pointer bg-white rounded-[32px] border border-zinc-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)] transition-all duration-300 p-6 md:p-8 flex flex-col justify-between hover:-translate-y-1"
              >
                {/* Full Rectangular Visual Container */}
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-950 shadow-md border border-zinc-100 mb-6">
                  <Image
                    src={colRightProject.image}
                    alt={colRightProject.title}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider text-black shadow-sm">
                    {colRightProject.badge}
                  </div>
                </div>

                {/* Bottom Half: Eyebrow, Title, Copy */}
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.2em] text-[#E60000] font-bold mb-2">
                    <span>Feature / {colRightProject.number}</span>
                    <span className="text-zinc-400 font-normal">{colRightProject.categoryLabel}</span>
                  </div>
                  <h4 className="text-2xl font-black uppercase tracking-tight text-black group-hover:text-[#E60000] transition-colors leading-tight mb-2">
                    {colRightProject.title}
                  </h4>
                  <p className="text-zinc-600 text-xs md:text-sm font-normal leading-relaxed line-clamp-2 mb-4">
                    {colRightProject.summary}
                  </p>
                  <div className="pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-mono">
                    <span className="text-zinc-500 font-bold">French & Arabic Perfumes</span>
                    <span className="text-[#E60000] font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Creative &rarr;
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* ============================================================== */}
            {/* ROW 3: PRINT & SIGNAGE SHOWCASE (Knight Modifications + Boutique) */}
            {/* ============================================================== */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* CARD 5: Knight Modifications Colombo (Span 7) */}
              <div
                onClick={() => setSelectedProject(row3LeftProject)}
                className="lg:col-span-7 group cursor-pointer bg-white rounded-[32px] border border-zinc-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)] transition-all duration-300 p-6 md:p-8 flex flex-col justify-between hover:-translate-y-1"
              >
                <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-zinc-950 shadow-md border border-zinc-100 mb-6">
                  <Image
                    src={row3LeftProject.image}
                    alt={row3LeftProject.title}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-[#E60000] text-white px-3 py-1 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider shadow-sm">
                    {row3LeftProject.badge}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.2em] text-[#E60000] font-bold mb-2">
                    <span>Feature / {row3LeftProject.number}</span>
                    <span className="text-zinc-400 font-normal">{row3LeftProject.categoryLabel}</span>
                  </div>
                  <h4 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-black group-hover:text-[#E60000] transition-colors leading-tight mb-2">
                    {row3LeftProject.title}
                  </h4>
                  <p className="text-zinc-600 text-xs md:text-sm font-normal leading-relaxed line-clamp-2 mb-4">
                    {row3LeftProject.summary}
                  </p>
                  <div className="pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-mono">
                    <span className="text-zinc-500 font-bold">Colombo 10 · 0742440640</span>
                    <span className="text-[#E60000] font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Fascia & Signage &rarr;
                    </span>
                  </div>
                </div>
              </div>

              {/* CARD 6: Haute Retail Boutique Environmental Print (Span 5) */}
              <div
                onClick={() => setSelectedProject(row3RightProject)}
                className="lg:col-span-5 group cursor-pointer bg-white rounded-[32px] border border-zinc-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)] transition-all duration-300 p-6 md:p-8 flex flex-col justify-between hover:-translate-y-1"
              >
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-950 shadow-md border border-zinc-100 mb-6">
                  <Image
                    src={row3RightProject.image}
                    alt={row3RightProject.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider text-black shadow-sm">
                    {row3RightProject.badge}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.2em] text-[#E60000] font-bold mb-2">
                    <span>Feature / {row3RightProject.number}</span>
                    <span className="text-zinc-400 font-normal">{row3RightProject.categoryLabel}</span>
                  </div>
                  <h4 className="text-2xl font-black uppercase tracking-tight text-black group-hover:text-[#E60000] transition-colors leading-tight mb-2">
                    {row3RightProject.title}
                  </h4>
                  <p className="text-zinc-600 text-xs md:text-sm font-normal leading-relaxed line-clamp-2 mb-4">
                    {row3RightProject.summary}
                  </p>
                  <div className="pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-mono">
                    <span className="text-zinc-500 font-bold">Commercial UV Vinyl · Turnkey Mounting</span>
                    <span className="text-[#E60000] font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Installation &rarr;
                    </span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        ) : (
          /* Filtered View Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleProjects.map((p) => (
              <div
                key={p.id}
                onClick={() => setSelectedProject(p)}
                className="group cursor-pointer bg-white rounded-[32px] border border-zinc-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)] transition-all duration-300 p-6 md:p-8 flex flex-col justify-between hover:-translate-y-1"
              >
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-950 shadow-md border border-zinc-100 mb-6">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  {p.badge && (
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider text-black shadow-sm">
                      {p.badge}
                    </div>
                  )}
                </div>

                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.2em] text-[#E60000] font-bold mb-2">
                    <span>Feature / {p.number}</span>
                    <span className="text-zinc-400 font-normal">{p.categoryLabel}</span>
                  </div>
                  <h4 className="text-2xl font-black uppercase tracking-tight text-black group-hover:text-[#E60000] transition-colors leading-tight mb-2">
                    {p.title}
                  </h4>
                  <p className="text-zinc-600 text-xs md:text-sm font-normal leading-relaxed line-clamp-2 mb-4">
                    {p.summary}
                  </p>
                  <div className="pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-mono">
                    <span className="text-zinc-500 font-bold">{p.location}</span>
                    <span className="text-[#E60000] font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Details &rarr;
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Agency Credentials Footer */}
        <div className="mt-20 pt-12 border-t border-zinc-200/80 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="text-xl md:text-2xl font-black uppercase tracking-tight text-black">
              Need Verified Design & Production?
            </h4>
            <p className="text-zinc-500 text-xs md:text-sm mt-1">
              Bespoke digital platforms, high-velocity social marketing, and commercial physical signage.
            </p>
          </div>

          <a
            href="https://wa.me/94742440640?text=Hi%20Knight%20Graphics,%20I%20would%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 bg-black hover:bg-[#E60000] text-white text-xs font-mono font-bold uppercase tracking-widest rounded-full transition-colors duration-200 shadow-md flex items-center gap-2 cursor-pointer shrink-0"
          >
            <span>Start a Project</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

      </div>

      {/* FULL-SCREEN CASE STUDY DETAIL MODAL */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/85 backdrop-blur-md overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative bg-white w-full max-w-5xl rounded-[32px] overflow-hidden shadow-2xl border border-white/20 my-auto animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 md:px-8 py-4 border-b border-zinc-100 bg-white sticky top-0 z-20">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E60000]"></span>
                <span className="text-xs font-mono uppercase tracking-widest font-bold text-zinc-500">
                  Case Study · Feature / {selectedProject.number}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="w-8 h-8 rounded-full border border-zinc-200 hover:border-black flex items-center justify-center text-zinc-700 hover:text-black transition-colors cursor-pointer"
                  title="Previous project"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={handleNext}
                  className="w-8 h-8 rounded-full border border-zinc-200 hover:border-black flex items-center justify-center text-zinc-700 hover:text-black transition-colors cursor-pointer"
                  title="Next project"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-8 h-8 rounded-full bg-zinc-100 hover:bg-black hover:text-white flex items-center justify-center transition-colors cursor-pointer ml-2"
                  title="Close modal"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[82vh] overflow-y-auto">
              
              {/* Media Column (Left) */}
              <div className="lg:col-span-7 bg-zinc-950 p-6 md:p-8 flex flex-col justify-center items-center gap-4">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>

                {/* Secondary Image if available */}
                {selectedProject.secondaryImage && (
                  <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg border border-white/10">
                    <Image
                      src={selectedProject.secondaryImage}
                      alt={`${selectedProject.title} Detail`}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}

                {/* External link button */}
                {selectedProject.externalUrl && (
                  <a
                    href={selectedProject.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 px-6 py-2.5 bg-white text-black hover:bg-[#E60000] hover:text-white text-xs font-mono font-bold uppercase tracking-widest rounded-full transition-colors flex items-center gap-2 shadow-lg"
                  >
                    <span>Visit Live Website</span>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>

              {/* Data & Narrative Column (Right) */}
              <div className="lg:col-span-5 p-6 md:p-8 flex flex-col justify-between bg-white">
                <div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-3 py-1 bg-red-50 text-[#E60000] text-[10px] font-mono font-bold uppercase tracking-widest rounded-full">
                      {selectedProject.tag}
                    </span>
                    <span className="px-3 py-1 bg-zinc-100 text-zinc-700 text-[10px] font-mono font-semibold uppercase tracking-widest rounded-full">
                      {selectedProject.location}
                    </span>
                  </div>

                  <h3 className="text-3xl font-black uppercase tracking-tight text-black leading-tight mb-1">
                    {selectedProject.title}
                  </h3>
                  <p className="text-zinc-500 text-xs font-mono uppercase tracking-wider mb-6">
                    Client: {selectedProject.client}
                  </p>

                  {/* Verified Evidence Box */}
                  <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-200/80 mb-6">
                    <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-zinc-800 block mb-2">
                      Verified Client Evidence
                    </span>
                    <p className="text-xs font-mono text-zinc-600 mb-1">
                      <strong className="text-black">Address / URL:</strong> {selectedProject.verifiedDetails.addressOrChannel}
                    </p>
                    <p className="text-xs font-mono text-zinc-600 mb-3">
                      <strong className="text-black">Contact / Metric:</strong> {selectedProject.verifiedDetails.contactOrMetric}
                    </p>
                    <ul className="space-y-1 pt-2 border-t border-zinc-200">
                      {selectedProject.verifiedDetails.highlights.map((h, hi) => (
                        <li key={hi} className="text-xs text-zinc-600 flex items-start gap-2">
                          <span className="text-[#E60000] font-bold">&bull;</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Craft Narrative */}
                  <div className="mb-6">
                    <h5 className="text-[10px] font-mono uppercase tracking-widest text-black font-bold mb-2">
                      Execution & Craft
                    </h5>
                    <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                      {selectedProject.craftNarrative}
                    </p>
                  </div>

                  {/* Deliverables */}
                  <div className="mb-6">
                    <h5 className="text-[10px] font-mono uppercase tracking-widest text-black font-bold mb-2">
                      Delivered Assets
                    </h5>
                    <ul className="grid grid-cols-1 gap-1.5">
                      {selectedProject.deliverables.map((item, ii) => (
                        <li key={ii} className="text-xs text-zinc-700 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E60000]"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
}
