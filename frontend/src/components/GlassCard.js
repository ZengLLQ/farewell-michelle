export const GlassCard = ({ children, className = "", ...props }) => (
  <div
    className={`relative rounded-[2rem] bg-white/[0.03] backdrop-blur-2xl backdrop-saturate-150 border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden ${className}`}
    {...props}
  >
    <div className="absolute inset-0 rounded-[2rem] pointer-events-none" style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08), inset 0 0 60px rgba(139,92,246,0.06)" }} />
    <div className="relative">{children}</div>
  </div>
);
