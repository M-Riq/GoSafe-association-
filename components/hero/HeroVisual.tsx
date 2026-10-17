import { delay } from "@/lib/motion";
import { HeroCar } from "./HeroCar";
import { HeroSkyline } from "./HeroSkyline";

/** Decorative hero illustration: city skyline, perspective road and a car driving on it. */
export function HeroVisual() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      <div className="hero-scroll-visual absolute inset-0">
        {/* Ambient light */}
        <div className="absolute -right-1/4 -top-1/4 h-[70vmax] w-[70vmax] rounded-full bg-[radial-gradient(closest-side,rgb(22_82_184/0.45),transparent)]" />
        <div className="absolute -bottom-1/3 left-1/4 h-[50vmax] w-[50vmax] rounded-full bg-[radial-gradient(closest-side,rgb(242_107_29/0.10),transparent)]" />

        <div className="hero-stage absolute inset-x-0 bottom-0 h-[62%] lg:inset-y-0 lg:left-[36%] lg:right-0 lg:h-auto">
          {/* Skyline: its bottom edge sits on the road's vanishing line */}
          <div
            className="hero-fade absolute inset-x-0 top-0 h-[calc(var(--horizon)+3%)] [mask-image:linear-gradient(to_bottom,#000_82%,transparent)]"
            style={delay(100)}
          >
            <HeroSkyline className="absolute inset-0 size-full" />
          </div>

          {/* Road */}
          <div className="road-scene hero-fade absolute inset-0" style={delay(200)}>
            <div className="road-plane">
              <div className="road-flow road-grid" />
              <div className="absolute inset-y-0 left-1/2 w-[420px] -translate-x-1/2 border-x-[3px] border-white/40 bg-[linear-gradient(to_right,rgb(4_19_46/0.85),rgb(11_44_99/0.85),rgb(4_19_46/0.85))]">
                <div className="road-flow road-lanes" />
              </div>
            </div>
          </div>

          <HeroCar className="absolute bottom-6 left-1/2 ml-[clamp(40px,8vw,125px)] w-[clamp(180px,23vw,330px)] -translate-x-1/2 lg:bottom-[13%]" />
        </div>

        {/* Readability veil on the text side */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgb(4_19_46/0.92)_0%,rgb(4_19_46/0.55)_45%,transparent_75%)] lg:bg-[linear-gradient(to_right,rgb(4_19_46/0.95)_0%,rgb(4_19_46/0.7)_34%,transparent_62%)]" />
      </div>
    </div>
  );
}
