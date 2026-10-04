import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-red-100 w-full px-6 md:px-16 pt-12 md:pt-20 pb-8 md:pb-10 flex flex-col gap-16">
      
      {/* TOP SECTION — MAIN CONTENT ROW */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-16">
        
        {/* LEFT COLUMN */}
        <div className="flex flex-col justify-between max-w-full md:max-w-sm w-full">
          <div className="border border-[#FF0000] rounded-full px-3 py-1 inline-block w-fit mb-6">
            <span className="text-[#FF0000] text-[10px] font-bold tracking-[0.25em] uppercase">
              KNIGHT GRAPHICS
            </span>
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
            <span className="block font-inter text-5xl md:text-6xl text-black font-black uppercase leading-none">
              MEANINGFUL
            </span>
          </h2>

          <a 
            href="#contact" 
            className="group mt-10 border border-black rounded-full px-6 py-3 text-black text-sm font-medium hover:bg-black hover:text-white transition-all duration-300 inline-flex items-center gap-2 w-fit"
          >
            Start a project 
            <span className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 flex items-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </span>
          </a>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start w-full md:w-auto">
          
          {/* SUB-COLUMN 1 */}
          <div className="flex flex-col w-full md:w-auto border-b border-red-100 md:border-none pb-8 md:pb-0">
            <div className="text-[#666] font-inter text-[10px] uppercase tracking-[0.15em] mb-4 leading-relaxed">
              TELL US WHAT YOU'RE<br />BUILDING
            </div>
            <div className="flex flex-col gap-2">
              {['BRANDING', 'WEBSITES', 'SOCIAL MEDIA', 'LINKEDIN', 'BEHANCE'].map((link) => (
                <a key={link} href="#" className="text-black font-inter text-sm font-normal hover:text-[#FF0000] transition-colors duration-200 flex items-center gap-1 cursor-pointer">
                  {link} <span className="flex items-center opacity-70"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></span>
                </a>
              ))}
            </div>
          </div>

          {/* SUB-COLUMN 2 */}
          <div className="flex flex-col w-full md:w-auto border-b border-red-100 md:border-none pb-8 md:pb-0">
            <div className="text-[#666] font-inter text-[10px] uppercase tracking-[0.15em] mb-4 leading-relaxed">
              PAGES
            </div>
            <div className="flex flex-col gap-2">
              {['HOME', 'ABOUT', 'OUR PROJECTS', 'CONTACT'].map((link) => (
                <a key={link} href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-black font-inter text-sm font-normal hover:text-[#FF0000] transition-colors duration-200 flex items-center gap-1 cursor-pointer">
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* SUB-COLUMN 3 */}
          <div className="flex flex-col gap-6 w-full md:w-auto border-b border-red-100 md:border-none pb-8 md:pb-0">
            <div className="flex flex-col">
              <div className="text-[#666] font-inter text-[10px] uppercase tracking-[0.15em] mb-2 leading-relaxed">
                LOCATION:
              </div>
              <p className="text-black font-inter text-sm font-light leading-relaxed max-w-[160px]">
                Kolonnawa, Western Province, Sri Lanka
              </p>
            </div>
            <div className="flex flex-col">
              <div className="text-[#666] font-inter text-[10px] uppercase tracking-[0.15em] mb-2 leading-relaxed">
                E-MAIL:
              </div>
              <a href="mailto:knightgraphicsl@gmail.com" className="text-black font-inter text-sm font-light hover:text-[#FF0000] transition-colors duration-200">
                knightgraphicsl@gmail.com
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-red-100 pt-8 mt-4 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0 text-center md:text-left">
        <div className="text-[#555] font-inter text-[11px] tracking-[0.1em] uppercase">
          © 2026 KNIGHT GRAPHICS. All rights reserved.
        </div>
        
        <div className="flex gap-6">
          <Link href="/privacy" className="text-[#555] font-inter text-[11px] hover:text-black transition-colors duration-200">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-[#555] font-inter text-[11px] hover:text-black transition-colors duration-200">
            Terms of Service
          </Link>
        </div>

        <div className="text-[#555] font-inter text-[11px] tracking-[0.1em] uppercase flex items-center justify-center md:justify-start gap-1">
          MADE WITH <span className="text-[#FF0000] flex items-center"><svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></span> IN SRI LANKA
        </div>
      </div>

    </footer>
  );
}
