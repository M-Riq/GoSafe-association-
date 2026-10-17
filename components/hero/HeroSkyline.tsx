import { cssVars } from "@/lib/motion";

const VIEW_W = 1000;
const VIEW_H = 280;

type Building = { x: number; w: number; h: number };
type Window = { x: number; y: number; lit: number };

// Deterministic pseudo-random so the skyline is stable between renders.
const rand = (seed: number) => {
  const v = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
  return v - Math.floor(v);
};

function buildLayer(opts: {
  seed: number;
  minW: number;
  maxW: number;
  step: number;
  height: (centerDistance: number, r: number) => number;
}) {
  const buildings: Building[] = [];
  const windows: Window[] = [];
  let x = -10;
  for (let i = 0; x < VIEW_W + 10; i++) {
    const w = Math.round(opts.minW + rand(opts.seed + i) * (opts.maxW - opts.minW));
    const d = Math.abs(x + w / 2 - VIEW_W / 2) / (VIEW_W / 2);
    const h = Math.round(opts.height(d, rand(opts.seed + i + 50)));
    if (h > 0) {
      buildings.push({ x, w, h });
      for (let wy = VIEW_H - h + 10; wy < VIEW_H - 8; wy += opts.step) {
        for (let wx = x + 6; wx < x + w - 8; wx += opts.step) {
          const lit = rand(opts.seed + wx * 3.1 + wy * 7.7);
          if (lit > 0.66) windows.push({ x: wx, y: wy, lit });
        }
      }
    }
    x += w + Math.round(rand(opts.seed + i + 99) * 6);
  }
  return { buildings, windows };
}

// Many small window rects merged into one path to keep the DOM light.
const windowsPath = (windows: Window[], w: number, h: number) =>
  windows.map((p) => `M${p.x} ${p.y}h${w}v${h}h-${w}Z`).join("");

// Far skyline: low near the vanishing point, rising toward the edges.
const far = buildLayer({ seed: 1, minW: 22, maxW: 48, step: 10, height: (d, r) => 30 + d * 90 + r * 50 });

// Near towers framing the avenue on both sides only.
const near = buildLayer({
  seed: 7,
  minW: 46,
  maxW: 92,
  step: 13,
  height: (d, r) => (d < 0.42 ? 0 : 110 + (d - 0.42) * 220 + r * 60),
});

const nearDim = near.windows.filter((w) => w.lit <= 0.85);
const nearBright = near.windows.filter((w) => w.lit > 0.85 && w.lit <= 0.95);
const nearTwinkle = near.windows.filter((w) => w.lit > 0.95);

/** Decorative city skyline sitting on the hero horizon. */
export function HeroSkyline({ className = "" }: { className?: string }) {
  return (
    <svg viewBox={`0 0 ${VIEW_W} ${VIEW_H}`} preserveAspectRatio="xMidYMax slice" className={className}>
      <defs>
        <linearGradient id="sky-far" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0b2c63" />
          <stop offset="1" stopColor="#071f47" />
        </linearGradient>
        <linearGradient id="sky-near" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0a2655" />
          <stop offset="1" stopColor="#04132e" />
        </linearGradient>
        <radialGradient id="sky-glow" cx="0.5" cy="1" r="0.6">
          <stop offset="0" stopColor="#2a6ae0" stopOpacity="0.45" />
          <stop offset="1" stopColor="#2a6ae0" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width={VIEW_W} height={VIEW_H} fill="url(#sky-glow)" />

      <g opacity="0.9">
        {far.buildings.map((b, i) => (
          <rect key={i} x={b.x} y={VIEW_H - b.h} width={b.w} height={b.h} fill="url(#sky-far)" />
        ))}
        <path d={windowsPath(far.windows, 3, 3)} fill="#8db2f2" opacity="0.35" />
      </g>

      <g>
        {near.buildings.map((b, i) => (
          <g key={i}>
            <rect x={b.x} y={VIEW_H - b.h} width={b.w} height={b.h} fill="url(#sky-near)" />
            <rect x={b.x} y={VIEW_H - b.h} width={b.w} height="1.5" fill="#8db2f2" opacity="0.35" />
          </g>
        ))}
        <path d={windowsPath(nearDim, 5, 4)} fill="#e3ecfb" opacity="0.18" />
        <path d={windowsPath(nearBright, 5, 4)} fill="#e3ecfb" opacity="0.55" />
        {nearTwinkle.map((w, i) => (
          <rect
            key={i}
            x={w.x}
            y={w.y}
            width="5"
            height="4"
            fill={i % 3 === 0 ? "#f26b1d" : "#e3ecfb"}
            className="twinkle"
            style={cssVars({ "--d": `${(i * 730) % 5000}ms` })}
          />
        ))}
      </g>
    </svg>
  );
}
