import { useEffect } from "react";
import Lenis from "lenis";
import "@/App.css";
import { AuroraBackground } from "@/components/AuroraBackground";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Letter } from "@/components/Letter";
import { Signature } from "@/components/Signature";

function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.4, smoothWheel: true });
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen text-white" data-testid="app-root">
      <AuroraBackground />
      <div className="grain-overlay" aria-hidden="true" />
      <main className="relative z-10">
        <Hero />
        <Marquee />
        <Letter />
        <Signature />
      </main>
    </div>
  );
}

export default App;
