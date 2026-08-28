export const GlassCard = ({ children, className = "", ...props }) => (
  <div
    className={`relative rounded-[2.5rem] bg-white/[0.08] backdrop-blur-[32px] backdrop-saturate-[180%] border border-white/[0.18] shadow-[0_24px_60px_rgba(0,0,0,0.5)] overflow-hidden ${className}`}
    {...props}
  >
    <div className="absolute inset-0 rounded-[2.5rem] pointer-events-none" style={{ boxShadow: "inset 0 1.5px 1px rgba(255,255,255,0.35), inset 0 -1px 1px rgba(255,255,255,0.08), inset 0 0 80px rgba(196,181,253,0.08)" }} />
    <div className="absolute inset-0 rounded-[2.5rem] pointer-events-none" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.03) 35%, transparent 60%)" }} />
    <div className="relative">{children}</div>
  </div>
);
