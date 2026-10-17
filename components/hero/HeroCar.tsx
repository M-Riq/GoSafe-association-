/** Rear view of an SUV driving away on the hero road. Decorative. */
export function HeroCar({ className = "" }: { className?: string }) {
  return (
    <div className={`car-in ${className}`}>
      <div className="car-sway relative">
        {/* Headlight throw on the road ahead */}
        <div className="absolute bottom-[55%] left-1/2 h-[180%] w-[130%] -translate-x-1/2 bg-[radial-gradient(50%_60%_at_50%_100%,rgb(241_245_253/0.16),transparent)]" />
        {/* Taillight reflection on the asphalt */}
        <div className="car-glow absolute -bottom-[18%] left-1/2 h-[40%] w-[115%] -translate-x-1/2 bg-[radial-gradient(closest-side,rgb(242_107_29/0.35),transparent)]" />

        <div className="car-bob relative">
          <svg viewBox="0 0 240 170" className="h-auto w-full overflow-visible">
            <defs>
              <linearGradient id="car-body" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#ffffff" />
                <stop offset="1" stopColor="#c3d1e8" />
              </linearGradient>
              <linearGradient id="car-roof" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#e3ecfb" />
                <stop offset="1" stopColor="#ffffff" />
              </linearGradient>
              <linearGradient id="car-glass" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#1652b8" />
                <stop offset="0.55" stopColor="#071f47" />
                <stop offset="1" stopColor="#04132e" />
              </linearGradient>
            </defs>

            <ellipse cx="120" cy="160" rx="118" ry="9" fill="#000" opacity="0.55" />

            {/* Tyres */}
            <rect x="20" y="118" width="34" height="44" rx="7" fill="#04132e" />
            <rect x="186" y="118" width="34" height="44" rx="7" fill="#04132e" />

            {/* Mirrors */}
            <path d="M14 64h16v12H10a4 4 0 0 1 0-8Z" fill="url(#car-body)" />
            <path d="M226 64h-16v12h20a4 4 0 0 0 0-8Z" fill="url(#car-body)" />

            {/* Cabin and body */}
            <path d="M40 74 56 20a10 10 0 0 1 9.6-7.2h108.8A10 10 0 0 1 184 20l16 54Z" fill="url(#car-roof)" />
            <rect x="10" y="70" width="220" height="70" rx="18" fill="url(#car-body)" />
            <path d="M54 68 67 26h106l13 42Z" fill="url(#car-glass)" />
            <path d="M74 28h22l-22 38H60Z" fill="#ffffff" opacity="0.12" />
            <rect x="62" y="14" width="116" height="5" rx="2.5" fill="#0b2c63" />
            <rect x="112" y="20" width="16" height="3" rx="1.5" fill="#f26b1d" />

            {/* Light bar */}
            <path d="M14 86a4 4 0 0 1 4-4h46a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H22a8 8 0 0 1-8-8Z" fill="#f26b1d" />
            <path d="M226 86a4 4 0 0 0-4-4h-46a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h42a8 8 0 0 0 8-8Z" fill="#f26b1d" />
            <rect x="68" y="88" width="104" height="4" rx="2" fill="#f26b1d" opacity="0.75" />
            <path d="M20 86h40M180 86h40" stroke="#fde8da" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />

            {/* Plate */}
            <rect x="90" y="102" width="60" height="18" rx="3" fill="#ffffff" stroke="#0b2c63" strokeWidth="1.5" />
            <text
              x="120"
              y="115"
              textAnchor="middle"
              fontSize="10"
              fontWeight="700"
              letterSpacing="1.5"
              fontFamily="ui-monospace, monospace"
              fill="#0b2c63"
            >
              GOSAFE
            </text>

            {/* Bumper */}
            <rect x="10" y="124" width="220" height="16" rx="8" fill="#0b2c63" />
            <rect x="44" y="134" width="152" height="6" rx="3" fill="#04132e" />
            <rect x="20" y="128" width="14" height="4" rx="2" fill="#f26b1d" opacity="0.6" />
            <rect x="206" y="128" width="14" height="4" rx="2" fill="#f26b1d" opacity="0.6" />
          </svg>

          {/* Taillight glow */}
          <div className="car-glow pointer-events-none absolute left-[2%] top-[44%] h-[18%] w-[30%] bg-[radial-gradient(closest-side,rgb(242_107_29/0.55),transparent)]" />
          <div className="car-glow pointer-events-none absolute right-[2%] top-[44%] h-[18%] w-[30%] bg-[radial-gradient(closest-side,rgb(242_107_29/0.55),transparent)]" />
        </div>
      </div>
    </div>
  );
}
