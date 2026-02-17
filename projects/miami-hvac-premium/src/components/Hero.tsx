"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Thermometer, Shield, Zap, ChevronRight } from "lucide-react";

export default function Hero() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.5 } });
    tl.from(".hero-line", { y: 100, opacity: 0, stagger: 0.2 })
      .from(".hero-ui", { scale: 0.95, opacity: 0 }, "-=1");
  }, { scope: container });

  return (
    <div ref={container} className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 text-center max-w-5xl">
        <div className="hero-line inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-sm font-bold tracking-widest uppercase mb-10">
          <Zap size={14} fill="currentColor" />
          Elite Engineering for South Florida
        </div>
        
        <h1 className="hero-line text-7xl md:text-9xl font-black tracking-tighter leading-[0.85] mb-8">
          MIAMI <span className="text-zinc-600">HVAC</span> <br/>
          <span className="italic bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">EXCELLENCE.</span>
        </h1>

        <p className="hero-line text-zinc-400 text-xl md:text-2xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          Operational mastery for $4M+ infrastructure. We don't just fix AC units; we engineer precision climates for Miami's most prestigious estates.
        </p>

        <div className="hero-line flex flex-col md:flex-row items-center justify-center gap-6">
          <button className="group relative px-10 py-5 bg-white text-black font-bold uppercase tracking-tighter rounded-xl transition-all hover:bg-cyan-500 hover:text-white hover:scale-105 active:scale-95">
            Book Priority Service
          </button>
          <button className="flex items-center gap-2 text-zinc-400 hover:text-white font-bold uppercase tracking-tighter transition-colors group">
            Our Portfolio <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <div className="hero-ui absolute bottom-12 flex gap-12 text-zinc-700 font-bold text-xs uppercase tracking-[0.4em]">
        <span>Certified Engineers</span>
        <span>24/7 Response</span>
        <span>Florida Licensed</span>
      </div>
    </div>
  );
}
