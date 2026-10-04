"use client";

export default function Stats() {
  return (
    <section className="w-full bg-red-600 py-16 md:py-24 relative z-10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-wrap justify-between items-center gap-10 text-white">
        
        <div className="flex flex-col items-center md:items-start group w-[40%] md:w-auto">
          <div className="flex items-baseline gap-1">
            <span className="font-black text-5xl md:text-7xl leading-none tracking-tighter">20</span>
            <span className="font-black text-3xl md:text-5xl">+</span>
          </div>
          <span className="text-white/80 text-[10px] md:text-xs uppercase tracking-[0.2em] mt-3 font-bold">Projects Completed</span>
        </div>

        <div className="flex flex-col items-center md:items-start group w-[40%] md:w-auto">
          <div className="flex items-baseline gap-1">
            <span className="font-black text-5xl md:text-7xl leading-none tracking-tighter">10</span>
            <span className="font-black text-3xl md:text-5xl">+</span>
          </div>
          <span className="text-white/80 text-[10px] md:text-xs uppercase tracking-[0.2em] mt-3 font-bold">Expert Team</span>
        </div>

        <div className="flex flex-col items-center md:items-start group w-[40%] md:w-auto">
          <div className="flex items-baseline gap-1">
            <span className="font-black text-5xl md:text-7xl leading-none tracking-tighter">5.0</span>
            <span className="font-black text-3xl md:text-5xl">★</span>
          </div>
          <span className="text-white/80 text-[10px] md:text-xs uppercase tracking-[0.2em] mt-3 font-bold">Client Rating</span>
        </div>

        <div className="flex flex-col items-center md:items-start group w-[40%] md:w-auto">
          <div className="flex items-baseline gap-1">
            <span className="font-black text-5xl md:text-7xl leading-none tracking-tighter">100</span>
            <span className="font-black text-3xl md:text-5xl">%</span>
          </div>
          <span className="text-white/80 text-[10px] md:text-xs uppercase tracking-[0.2em] mt-3 font-bold">Satisfaction</span>
        </div>

      </div>
    </section>
  );
}
