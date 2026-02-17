import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="bg-black">
      <Hero />
      <Services />
      
      {/* Dynamic SEO Section Placeholder */}
      <section className="py-24 bg-zinc-950 border-y border-zinc-900 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold text-white mb-8 tracking-tighter uppercase italic">Strategic Partner</h2>
          <div className="flex flex-wrap justify-center gap-16 opacity-30 grayscale contrast-125">
             <span className="text-2xl font-black italic">CARRIER</span>
             <span className="text-2xl font-black italic">TRANE</span>
             <span className="text-2xl font-black italic">LENNOX</span>
             <span className="text-2xl font-black italic">RHEEM</span>
          </div>
        </div>
      </section>
    </main>
  );
}
