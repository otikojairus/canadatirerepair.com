import { SITE_NAME } from "@/lib/pages";

export function BrandLogo({ compact = false }: { compact?: boolean }) {
  const title = compact ? "CTR" : SITE_NAME;
  return (
    <svg
      className={`brand-logo${compact ? " brand-logo-compact" : ""}`}
      viewBox="0 0 280 44"
      role="img"
      aria-label={SITE_NAME}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="beacon-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffb020" />
          <stop offset="100%" stopColor="#ff6b2c" />
        </linearGradient>
      </defs>
      <circle cx="22" cy="22" r="18" fill="none" stroke="url(#beacon-grad)" strokeWidth="3" />
      <circle cx="22" cy="22" r="8" fill="#141820" stroke="#5eead4" strokeWidth="2" />
      <path
        d="M22 14 L26 22 L22 30 L18 22 Z"
        fill="url(#beacon-grad)"
        opacity="0.95"
      />
      <text
        x="48"
        y="21"
        fill="currentColor"
        fontFamily="var(--font-display), system-ui, sans-serif"
        fontSize="13.5"
        fontWeight="700"
        letterSpacing="-0.02em"
      >
        {title}
      </text>
      {!compact && (
        <text
          x="48"
          y="35"
          fill="currentColor"
          opacity="0.5"
          fontFamily="var(--font-body), system-ui, sans-serif"
          fontSize="7"
          fontWeight="700"
          letterSpacing="0.22em"
        >
          MOBILE · ROADSIDE · 24/7
        </text>
      )}
    </svg>
  );
}
