"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isMobile = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isMobile) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Use quickTo for better performance instead of creating a new tween every frame
    const xDot = gsap.quickTo(dot, "x", { duration: 0.1, ease: "power2.out" });
    const yDot = gsap.quickTo(dot, "y", { duration: 0.1, ease: "power2.out" });
    const xRing = gsap.quickTo(ring, "x", { duration: 0.4, ease: "power2.out" });
    const yRing = gsap.quickTo(ring, "y", { duration: 0.4, ease: "power2.out" });

    const onMouseMove = (e: MouseEvent) => {
      xDot(e.clientX);
      yDot(e.clientY);
      xRing(e.clientX);
      yRing(e.clientY);
    };

    window.addEventListener("mousemove", onMouseMove);
    gsap.set([dot, ring], { opacity: 1 });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <div 
        ref={dotRef} 
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] opacity-0 -translate-x-1/2 -translate-y-1/2 hidden md:block mix-blend-difference"
      ></div>
      <div 
        ref={ringRef} 
        className="fixed top-0 left-0 w-8 h-8 border-2 border-[#FF0000] rounded-full pointer-events-none z-[9998] opacity-0 -translate-x-1/2 -translate-y-1/2 hidden md:block"
      ></div>
    </>
  );
}
