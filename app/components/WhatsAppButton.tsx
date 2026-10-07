"use client";

import { WhatsappLogo } from "@phosphor-icons/react";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function WhatsAppButton() {
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    gsap.fromTo(
      buttonRef.current,
      { y: 50, opacity: 0, scale: 0.5 },
      { y: 0, opacity: 1, scale: 1, duration: 0.8, delay: 1, ease: "back.out(1.5)" }
    );
  }, []);

  return (
    <Link
      ref={buttonRef}
      href="https://wa.me/94742440640"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] flex items-center justify-center w-[60px] h-[60px] bg-[#25D366] text-white rounded-full shadow-[0_4px_14px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.6)] hover:scale-105 hover:-translate-y-1 transition-all duration-300 opacity-0 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 group-hover:animate-none"></div>
      <WhatsappLogo weight="fill" className="w-9 h-9 relative z-10" />
    </Link>
  );
}
