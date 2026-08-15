import { useEffect, useState } from "react";

const OVERLAY_BG = "color-mix(in oklab, var(--color-background) 14%, black)";
const BASE_LINE = "color-mix(in oklab, var(--color-primary-foreground) 22%, transparent)";

const BASE_PROGRESS = 5;
const WEIGHTS: Record<string, number> = {
  fonts: 25,
  load: 25,
  hero: 20,
  scroll: 25,
};

function watchVideo(el: HTMLVideoElement, onDone: () => void) {
  if (el.readyState >= 2) {
    onDone();
    return;
  }
  const done = () => onDone();
  el.addEventListener("loadeddata", done, { once: true });
  el.addEventListener("error", done, { once: true });
  el.addEventListener("abort", done, { once: true });
  return () => {
    el.removeEventListener("loadeddata", done);
    el.removeEventListener("error", done);
    el.removeEventListener("abort", done);
  };
}

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "split" | "gone">("loading");
  const done = progress >= 100;

  useEffect(() => {
    let alive = true;
    const cleanups: (() => void)[] = [];
    const resolved = new Set<string>();

    const finish = (key: string) => {
      if (!alive || resolved.has(key)) return;
      resolved.add(key);
      let total = BASE_PROGRESS;
      for (const k of Object.keys(WEIGHTS)) {
        if (resolved.has(k)) total += WEIGHTS[k];
      }
      setProgress(Math.min(100, total));
    };

    if (document.fonts?.ready) {
      document.fonts.ready.then(() => finish("fonts")).catch(() => finish("fonts"));
    } else {
      finish("fonts");
    }

    const onLoad = () => finish("load");
    if (document.readyState === "complete") {
      finish("load");
    } else {
      window.addEventListener("load", onLoad, { once: true });
      cleanups.push(() => window.removeEventListener("load", onLoad));
    }

    const videos = Array.from(document.querySelectorAll("video"));
    const hero = videos.find((v) => (v.getAttribute("src") ?? "").includes("character-alpha"));
    const scroll = videos.find((v) => (v.getAttribute("src") ?? "").includes("video-project"));
    const watch = (el: HTMLVideoElement | undefined, key: string) => {
      if (!el) {
        finish(key);
        return;
      }
      const un = watchVideo(el, () => finish(key));
      if (un) cleanups.push(un);
    };
    watch(hero, "hero");
    watch(scroll, "scroll");

    const safety = window.setTimeout(() => {
      Object.keys(WEIGHTS).forEach((k) => finish(k));
    }, 9000);

    return () => {
      alive = false;
      window.clearTimeout(safety);
      cleanups.forEach((fn) => fn());
    };
  }, []);

  useEffect(() => {
    if (!done) return;
    const t = window.setTimeout(() => setPhase("split"), 400);
    return () => window.clearTimeout(t);
  }, [done]);

  useEffect(() => {
    if (phase !== "split") return;
    const t = window.setTimeout(() => setPhase("gone"), 1250);
    return () => window.clearTimeout(t);
  }, [phase]);

  if (phase === "gone") return null;

  const pct = Math.round(progress);
  const panelCls = `absolute inset-x-0 h-1/2 transition-transform delay-150 duration-[900ms] ease-[cubic-bezier(0.76,0,0.24,1)]`;

  return (
    <div className="fixed inset-0 z-[100]" role="status" aria-live="polite" aria-label="Loading">
      <div
        aria-hidden
        className={`${panelCls} top-0 ${phase === "split" ? "-translate-y-full" : "translate-y-0"}`}
        style={{ background: OVERLAY_BG }}
      />
      <div
        aria-hidden
        className={`${panelCls} bottom-0 ${phase === "split" ? "translate-y-full" : "translate-y-0"}`}
        style={{ background: OVERLAY_BG }}
      />

      <div
        className={`absolute inset-0 transition-opacity duration-300 ${phase === "split" ? "opacity-0" : "opacity-100"}`}
      >
        <div className="absolute inset-x-0 top-1/2 flex -translate-y-[calc(100%+2rem)] flex-col items-center gap-3">
          <div className="font-sans text-6xl font-extralight tracking-tight text-primary-foreground">
            {pct}
            <span className="align-top text-[0.45em]">%</span>
          </div>
          <div className="mono pl-[0.5em] text-[10px] uppercase tracking-[0.5em] text-primary-foreground/60">
            L O A D I N G
          </div>
        </div>

        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2">
          <div className="absolute inset-0" style={{ background: BASE_LINE }} />
          <div
            className="absolute inset-y-0 left-0 bg-primary transition-[width] duration-500 ease-out"
            style={{
              width: `${pct}%`,
              boxShadow:
                "0 0 12px 1.5px color-mix(in oklab, var(--color-primary) 40%, transparent)",
            }}
          />
          <div
            className="absolute top-1/2 size-[7px] -translate-y-1/2 rounded-full bg-primary transition-[left] duration-500 ease-out"
            style={{
              left: `clamp(0px, calc(${pct}% - 3.5px), calc(100% - 7px))`,
              boxShadow: "0 0 10px 2px color-mix(in oklab, var(--color-primary) 55%, transparent)",
            }}
          />
        </div>

        <div className="absolute inset-x-0 top-1/2 flex translate-y-[2rem] justify-center">
          <span className="mono text-[10px] lowercase tracking-widest text-primary-foreground/45">
            please wait...
          </span>
        </div>
      </div>
    </div>
  );
}
