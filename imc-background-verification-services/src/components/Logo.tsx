export function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 60" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Light blue shadow for bottom shape */}
      <path d="M 51 31 A 18 18 0 0 0 87 31" stroke="#60A5FA" strokeWidth="14" strokeLinecap="round" />
      
      {/* Top shape (Dark Blue) */}
      <path d="M 36 32 A 18 18 0 0 1 72 32" stroke="#1E3A8A" strokeWidth="14" strokeLinecap="round" />
      
      {/* Bottom shape outline (Dark Blue) */}
      <path d="M 48 28 A 18 18 0 0 0 84 28" stroke="#1E3A8A" strokeWidth="14" strokeLinecap="round" />
      
      {/* Bottom shape inner (White) */}
      <path d="M 48 28 A 18 18 0 0 0 84 28" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" />
    </svg>
  );
}
