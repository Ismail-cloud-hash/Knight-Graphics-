"use client";

import { useEffect, useState } from "react";

export default function Marquee() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden z-20"
      style={{
        marginTop: isMobile ? "-20px" : "-40px",
        clipPath: isMobile 
          ? "polygon(0 8%, 100% 0%, 100% 92%, 0% 100%)" 
          : "polygon(0 15%, 100% 0%, 100% 85%, 0% 100%)",
        background: "linear-gradient(135deg, #8B0000 0%, #CC0000 40%, #FF0000 60%, #CC0000 80%, #8B0000 100%)",
        padding: isMobile ? "50px 0" : "80px 0",
      }}
    >
      {/* Star dots */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px),
            radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)
          `,
          backgroundSize: "140px 50px, 100px 50px",
          backgroundPosition: "20px 12px, 70px 30px",
        }}
      />

      {/* Scrolling marquee */}
      <div 
        className="relative z-10 flex"
        style={{
          transform: isMobile ? "rotate(-1deg)" : "rotate(-1.5deg)",
          transformOrigin: "center"
        }}
      >
        <div
          className="flex shrink-0 whitespace-nowrap"
          style={{ animation: "marqueeScroll 22s linear infinite" }}
        >
          {[0, 1].map((i) => (
            <span key={i} className="flex items-center">
              {[
                "BRANDING",
                "WEB DESIGN",
                "SOCIAL MEDIA",
                "PRINTING",
                "DIGITAL MARKETING",
                "CREATIVE SOLUTIONS",
              ].map((item) => (
                <span key={item} className="flex items-center">
                  <span
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontWeight: 900,
                      fontSize: isMobile ? "12px" : "15px",
                      letterSpacing: "0.22em",
                      color: "#ffffff",
                      padding: "0 32px",
                      textShadow: "0 0 20px rgba(255,255,255,0.3)",
                    }}
                  >
                    {item}
                  </span>
                  <span
                    style={{
                      color: "rgba(255,255,255,0.95)",
                      marginRight: "4px",
                    }}
                  >
                    <svg width={isMobile ? "10" : "14"} height={isMobile ? "10" : "14"} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{ filter: "drop-shadow(0 0 8px rgba(255,255,255,0.8))" }}>
                      <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
                    </svg>
                  </span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
