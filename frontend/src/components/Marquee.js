const items = [
  "don't be a stranger",
  "i'm counting on u, sis",
  "ur china era",
  "twilight sparkle",
  "late-night yaps forever",
];

export const Marquee = () => {
  const row = [...items, ...items].map((t, i) => (
    <span key={i} className="font-heading text-sm sm:text-base tracking-[0.3em] uppercase text-purple-200/50 mx-6 whitespace-nowrap">
      {t} <span className="text-purple-400/70 ml-6">✦</span>
    </span>
  ));
  return (
    <div data-testid="marquee" className="relative py-6 overflow-hidden border-y border-white/[0.06] my-8">
      <div className="marquee-track flex w-max">{row}{row}</div>
    </div>
  );
};
