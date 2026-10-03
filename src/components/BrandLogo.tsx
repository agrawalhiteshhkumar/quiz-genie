import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const BrightPathLogoMark: React.FC<{ size?: number; className?: string }> = ({ size = 40, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      <defs>
        {/* Royal Blue to Emerald Green Gradient */}
        <linearGradient id="bpRoyalToEmerald" x1="4" y1="44" x2="44" y2="4" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1D4ED8" />
          <stop offset="50%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>

        <linearGradient id="bpPathGradient" x1="12" y1="42" x2="36" y2="18" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1E40AF" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>

        <linearGradient id="bpBeaconCore" x1="24" y1="6" x2="24" y2="18" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
      </defs>

      {/* Rounded hexagon/shield container */}
      <rect x="3" y="3" width="42" height="42" rx="12" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5" />

      {/* Dynamic converging forward pathway lines */}
      <path
        d="M14 40L21 21H27L34 40H28L25.5 27H22.5L20 40H14Z"
        fill="url(#bpPathGradient)"
      />

      {/* Forward central beam arrow */}
      <path
        d="M24 16L29 23H25.5V36H22.5V23H19L24 16Z"
        fill="url(#bpRoyalToEmerald)"
      />

      {/* Zenith Beacon Spark */}
      <circle cx="24" cy="10" r="4" fill="url(#bpBeaconCore)" />
      <path
        d="M24 4V7M24 13V16M18 10H21M27 10H30"
        stroke="#059669"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const BrandHeader: React.FC<BrandLogoProps> = ({ size = 'md', showText = true }) => {
  return (
    <div className="flex items-center gap-3 select-none">
      <BrightPathLogoMark size={size === 'lg' ? 46 : size === 'sm' ? 32 : 40} />
      {showText && (
        <div>
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-base tracking-tight text-slate-900 font-sans">
              Bright Path Quiz Genie
            </span>
            <span className="text-[10px] font-bold tracking-wider uppercase text-blue-700 bg-blue-50 border border-blue-200 px-1.5 py-0.5 rounded">
              D.Pharm Exit Exam
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <span className="font-semibold text-slate-700">Learn. Skill. Succeed.</span>
            <span className="text-slate-300">·</span>
            <span className="text-emerald-700 font-medium text-[11px]">Faculty AI Genie &amp; Office AI Ecosystem</span>
          </div>
        </div>
      )}
    </div>
  );
};
