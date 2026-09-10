import { useId } from 'react';

export default function Logo({ 
  className = "w-12 h-12",
  variant = "mark" 
}: { 
  className?: string;
  variant?: "mark" | "horizontal";
}) {
  const id = useId();
  const maskId = `riverMask-${id}`;

  const Mark = (
    <g>
      {/* Sun */}
      <circle cx="80" cy="55" r="38" fill="var(--color-sun, #E2B04F)" />
      
      {/* River Mask */}
      <mask id={maskId}>
        <rect width="160" height="120" fill="white" />
        <path d="M 140 115 C 80 115, 30 85, 90 65" fill="none" stroke="black" strokeWidth="12" strokeLinecap="round" />
      </mask>
      
      {/* Mountains */}
      <g mask={`url(#${maskId})`}>
        <path d="M 80 25 L 20 110 L 140 110 Z" fill="var(--color-alpine, #4F8CA8)" />
        <path d="M 35 60 L -15 115 L 85 115 Z" fill="var(--color-primary, #0F3B5B)" />
        <path d="M 125 55 L 75 115 L 175 115 Z" fill="var(--color-primary, #0F3B5B)" />
        <rect x="-10" y="112" width="180" height="8" fill="var(--color-primary, #0F3B5B)" />
      </g>
    </g>
  );

  if (variant === "horizontal") {
    return (
      <svg viewBox="0 0 800 120" className={className} xmlns="http://www.w3.org/2000/svg" fill="none">
        {Mark}
        {/* Text Lockup */}
        <text x="180" y="70" fill="var(--color-primary, #0F3B5B)" fontFamily="var(--font-display, Lora, serif)" fontSize="42" fontWeight="700">Youth Trauma Institute</text>
        <text x="182" y="95" fill="var(--color-secondary, #249D8F)" fontFamily="var(--font-sans, Inter, sans-serif)" fontSize="14" fontWeight="600" letterSpacing="0.1em">BRIGHTER TOMORROWS FOR BRAVER KIDS</text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 160 120" className={className} xmlns="http://www.w3.org/2000/svg" fill="none">
      {Mark}
    </svg>
  );
}
