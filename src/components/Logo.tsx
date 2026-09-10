export default function Logo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 120" className={className} xmlns="http://www.w3.org/2000/svg" fill="none">
      {/* Sun */}
      <circle cx="80" cy="55" r="38" fill="var(--color-sun, #E2B04F)" />
      
      {/* River Mask */}
      <mask id="riverMask">
        <rect width="160" height="120" fill="white" />
        {/* River curving from bottom right, to middle left, to upper center */}
        <path d="M 140 115 C 80 115, 30 85, 90 65" fill="none" stroke="black" strokeWidth="12" strokeLinecap="round" />
      </mask>
      
      {/* Mountains */}
      <g mask="url(#riverMask)">
        {/* Central main peak (Alpine Blue) */}
        <path d="M 80 25 L 20 110 L 140 110 Z" fill="var(--color-alpine, #4F8CA8)" />
        {/* Left small peak (Deep Blue) */}
        <path d="M 35 60 L -15 115 L 85 115 Z" fill="var(--color-primary, #0F3B5B)" />
        {/* Right small peak (Deep Blue) */}
        <path d="M 125 55 L 75 115 L 175 115 Z" fill="var(--color-primary, #0F3B5B)" />
        
        {/* Base strip to smooth the bottom edge */}
        <rect x="-10" y="112" width="180" height="8" fill="var(--color-primary, #0F3B5B)" />
      </g>
    </svg>
  );
}
