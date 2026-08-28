import { motion, useScroll, useTransform } from "framer-motion";
import { GlassCard } from "./GlassCard";

const lines = ["hi,", "Michelle."];

const MaskedLine = ({ text, delay, className }) => (
  <div className="overflow-hidden">
    <motion.div
      initial={{ y: "115%" }}
      animate={{ y: 0 }}
      transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {text}
    </motion.div>
  </div>
);

export const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, -80]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.2]);

  return (
    <section className="min-h-[100svh] flex items-center justify-center px-4 py-10">
      <motion.div style={{ y, opacity }} className="w-full max-w-lg">
        <GlassCard className="px-7 py-12 sm:px-10 sm:py-16" data-testid="hero-card">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex items-start justify-between mb-14 sm:mb-20"
          >
            <div className="font-heading">
              <p className="text-xs sm:text-sm font-bold tracking-[0.25em] text-white uppercase">One Last Letter</p>
              <p className="text-xs sm:text-sm text-purple-300/70 tracking-widest mt-0.5">2026</p>
            </div>
            <p className="font-heading text-xs sm:text-sm text-purple-200/80 tracking-wide">b4 u leave ✦</p>
          </motion.div>

          <h1 data-testid="hero-heading" className="font-heading font-bold tracking-tighter text-white leading-[1.02] mb-10 sm:mb-14">
            {lines.map((line, i) => (
              <MaskedLine key={line} text={line} delay={0.45 + i * 0.18} className="text-5xl sm:text-6xl lg:text-7xl" />
            ))}
            <MaskedLine text="read this slow." delay={0.95} className="text-5xl sm:text-6xl lg:text-7xl text-purple-300" />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.4 }}
            className="font-serif italic text-base sm:text-lg text-gray-300 leading-relaxed mb-14 sm:mb-20"
          >
            i wrote u something before ur flight. no skipping, sis.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.7 }}
            className="flex items-center justify-between"
          >
            <p className="font-heading text-xs sm:text-sm text-white/60 tracking-widest">@from.jaycee</p>
            <div data-testid="scroll-hint" className="flex items-center gap-2 text-purple-200/70">
              <span className="font-heading text-[10px] tracking-[0.3em] uppercase">scroll</span>
              <motion.span
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                className="text-sm"
              >
                ↓
              </motion.span>
            </div>
          </motion.div>
        </GlassCard>
      </motion.div>
    </section>
  );
};
