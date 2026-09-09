const WIDTH = 1440;
const HEIGHT = 700;
const START_Y = 566;
const END_Y = 196;
const RIPPLE = 26;
const BAND_WIDE = 186;
const BAND_NARROW = 122;
const SPACING = 15;
const DOT_WIDE = 3.4;
const DOT_NARROW = 2.2;

const smooth = (t: number) => t * t * (3 - 2 * t);
const clamp01 = (t: number) => Math.min(1, Math.max(0, t));
const mix = (from: number, to: number, t: number) => from + (to - from) * t;

const spine = (x: number) => {
  const t = clamp01(x / WIDTH);
  return mix(START_Y, END_Y, smooth(t)) + RIPPLE * Math.sin(2 * Math.PI * t);
};

const slope = (x: number) => spine(x + 0.5) - spine(x - 0.5);

type Dot = { x: number; y: number; r: number; opacity: number };

const DOTS: Dot[] = (() => {
  const dots: Dot[] = [];
  let travelled = 0;

  for (let x = -60; x <= WIDTH + 60; x += 1) {
    const gradient = slope(x);
    const arc = Math.sqrt(1 + gradient * gradient);

    travelled += arc;
    if (travelled < SPACING) continue;
    travelled = 0;

    const y = spine(x);
    const normalX = -gradient / arc;
    const normalY = 1 / arc;
    const along = smooth(clamp01(x / WIDTH));
    const band = mix(BAND_WIDE, BAND_NARROW, along);
    const maxRadius = mix(DOT_WIDE, DOT_NARROW, along);
    const edgeFade = Math.min(1, Math.min(x + 60, WIDTH + 60 - x) / 300);

    for (let offset = -band; offset <= band; offset += SPACING) {
      const spread = Math.min(1, Math.abs(offset) / band);
      const falloff = 0.5 * (1 + Math.cos(Math.PI * spread));
      const r = +(maxRadius * Math.pow(falloff, 0.72)).toFixed(2);
      if (r < 0.2) continue;

      dots.push({
        x: +(x + offset * normalX).toFixed(1),
        y: +(y + offset * normalY).toFixed(1),
        r,
        opacity: +(
          Math.pow(falloff, 0.85) *
          (0.25 + 0.75 * edgeFade)
        ).toFixed(2),
      });
    }
  }

  return dots;
})();

const HEADLINE_MASK =
  "radial-gradient(ellipse 40% 48% at 50% 46%, transparent 30%, #000 92%)";

export function HalftoneWave() {
  return (
    <svg
      aria-hidden="true"
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      preserveAspectRatio="xMidYMid slice"
      className="pointer-events-none absolute inset-0 size-full text-accent opacity-50"
      style={{ maskImage: HEADLINE_MASK, WebkitMaskImage: HEADLINE_MASK }}
    >
      {DOTS.map((dot, index) => (
        <circle
          key={index}
          cx={dot.x}
          cy={dot.y}
          r={dot.r}
          fill="currentColor"
          fillOpacity={dot.opacity}
        />
      ))}
    </svg>
  );
}
