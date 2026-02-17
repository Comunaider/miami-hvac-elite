import Hero from "@/components/Hero";

/**
 * PRODUCTION BUILD TEST
 * Verifying: 
 * 1. Tailwind v4 layer imports
 * 2. GSAP Initialization
 * 3. Type Safety for Components
 */

export default function TestPage() {
  return (
    <main className="min-h-screen bg-black overflow-hidden">
      <Hero />
      <section className="py-20 px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-10 bg-zinc-900 border border-zinc-800 rounded-3xl hover:border-cyan-500 transition-all">
              <h3 className="text-xl font-bold text-white">Verification Card {i}</h3>
              <p className="text-zinc-500 mt-4">Testing design system consistency and build stability.</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
