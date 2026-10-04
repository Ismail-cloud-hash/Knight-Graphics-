"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Preloader() {
  const preloaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(preloaderRef.current, {
        opacity: 0,
        duration: 1,
        delay: 0.5, // Brief black screen
        ease: "power2.inOut",
        onComplete: () => {
          if (preloaderRef.current) {
            preloaderRef.current.style.display = "none";
          }
        }
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={preloaderRef} 
      className="fixed inset-0 z-[10000] bg-white pointer-events-none"
    ></div>
  );
}
