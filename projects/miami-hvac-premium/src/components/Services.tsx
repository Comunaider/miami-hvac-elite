"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Shield, Zap, Thermometer, Droplets } from "lucide-react";

const services = [
  {
    title: "Commercial Engineering",
    desc: "Infrastructure solutions for $4M+ developments. Load calculations and system design that exceed Florida building codes.",
    icon: <Zap className="text-cyan-400" />,
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1200"
  },
  {
    title: "Coastal Maintenance",
    desc: "Advanced anti-corrosive protocols for Miami Beach properties. Protect your investment from salt-air degradation.",
    icon: <Shield className="text-cyan-400" />,
    image: "https://images.unsplash.com/photo-1581094281212-d191f56622f7?q=80&w=1200"
  },
  {
    title: "Luxury Installation",
    desc: "Silent, invisible, and perfect. Custom integration for architectural estates in Coral Gables and Pinecrest.",
    icon: <Thermometer className="text-cyan-400" />,
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200"
  }
];

export default function Services() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from(".service-card", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 70%",
      },
      y: 60,
      opacity: 0,
      stagger: 0.2,
      duration: 1.2,
      ease: "power3.out"
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-32 bg-black px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-6 italic">Engineering <br/> <span className="text-cyan-500">The Comfort.</span></h2>
            <p className="text-zinc-500 text-xl font-light">Delivering technical excellence across all South Florida sectors.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="service-card group relative bg-zinc-900/20 border border-zinc-800 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500">
              <div className="aspect-[4/5] relative">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-10 left-10 right-10">
                  <div className="w-12 h-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center mb-6">
                    {s.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4 tracking-tighter uppercase">{s.title}</h3>
                  <p className="text-zinc-400 font-light leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
