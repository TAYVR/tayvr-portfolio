import { useEffect, useRef, useState, type ReactNode } from "react";
import { useI18n } from "@/lib/i18n";
import { profile, stack, type StackGroup } from "@/data/portfolio";
import { ScrollVideo } from "./ScrollVideo";

type SceneId = "story" | "skills" | "final";

const SCENES: Record<SceneId, { in0: number; in1: number; out0: number; out1: number }> = {
  story: { in0: 0.03, in1: 0.08, out0: 0.18, out1: 0.23 },
  // skills stays fully visible from in1 to out0 — that plateau is the window
  // the horizontal card "walk" is mapped onto (see SKILLS_WALK below).
  skills: { in0: 0.19, in1: 0.24, out0: 0.8, out1: 0.85 },
  final: { in0: 0.82, in1: 0.87, out0: 1.01, out1: 1.01 },
};

const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);
const ease = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

function Scene({
  id,
  register,
  children,
}: {
  id: SceneId;
  register: (id: SceneId, el: HTMLElement | null) => void;
  children: ReactNode;
}) {
  return (
    <div
      ref={(el) => register(id, el)}
      data-scene={id}
      className="pointer-events-none absolute inset-0 flex w-full items-end justify-center px-4 pb-[9vh] sm:px-6 sm:pb-[11vh] xl:items-center xl:justify-start xl:px-0 xl:pb-0 xl:pe-[2vw] xl:ps-[6vw]"
    >
      <div className="w-full max-w-2xl rounded-xl border border-line bg-background/85 p-5 backdrop-blur-md sm:max-w-3xl sm:p-6 xl:max-w-md xl:rounded-none xl:border-0 xl:bg-transparent xl:backdrop-blur-none xl:p-0 2xl:max-w-lg">
        {children}
      </div>
    </div>
  );
}

function SkillCard({
  group,
  index = 0,
  registerCard,
  className = "",
}: {
  group: StackGroup;
  index?: number;
  registerCard?: (i: number, el: HTMLDivElement | null) => void;
  className?: string;
}) {
  const { t } = useI18n();
  return (
    <div
      ref={registerCard ? (el) => registerCard(index, el) : undefined}
      className={`hairline relative overflow-hidden rounded-2xl bg-background/85 p-5 [transform-origin:center_bottom] ${className}`}
    >
      <span
        aria-hidden
        className="mono pointer-events-none absolute -right-1 -top-4 select-none text-[64px] font-black leading-none text-foreground/[0.06]"
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="relative mono mb-4 flex items-center justify-between gap-2 text-[10px] uppercase tracking-widest text-primary">
        <span>{t(group.titleKey)}</span>
        <span className="mono text-[9px] text-muted-foreground tabular-nums">
          {group.items.filter((it) => !it.learning).length}/{group.items.length}
        </span>
      </div>
      <ul className="relative space-y-2.5">
        {group.items.map((it) => (
          <li key={it.name} className="flex items-center justify-between gap-3">
            <span className="mono shrink-0 text-[11px] text-foreground/90">{it.name}</span>
            {it.learning ? (
              <span className="mono rounded border border-acid/40 bg-acid/20 px-1.5 py-0.5 text-[8px] uppercase tracking-widest text-foreground">
                {t("learning_badge")}
              </span>
            ) : (
              <span className="flex min-w-0 flex-1 items-center gap-2">
                <span className="h-1 flex-1 overflow-hidden rounded-full bg-secondary">
                  <span
                    className="block h-full rounded-full bg-primary transition-[width] duration-500 ease-out"
                    style={{ width: `${it.level}%` }}
                  />
                </span>
                <span className="mono w-7 shrink-0 text-right text-[10px] text-muted-foreground tabular-nums">
                  {it.level}%
                </span>
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function StoryScene() {
  const { t } = useI18n();
  return (
    <div className="space-y-5 xl:space-y-6">
      <div className="flex items-center gap-4">
        <span className="mono text-[11px] uppercase tracking-widest text-primary marker-bracket">
          01 / story
        </span>
        <span className="h-px flex-1 bg-line" />
      </div>
      <div className="hairline relative overflow-hidden rounded-2xl bg-background/85 p-6 xl:p-8">
        <span
          aria-hidden
          className="mono pointer-events-none absolute -right-1 -top-4 select-none text-[80px] font-black leading-none text-foreground/[0.04]"
        >
          01
        </span>
        <p className="relative text-lg leading-relaxed xl:text-xl">{t("about_body")}</p>
        <div className="relative mt-5 border-s-2 border-primary ps-4 mono text-[11px] leading-6 text-muted-foreground">
          <span className="text-primary">//</span> {t("about_learning")}
        </div>
      </div>
    </div>
  );
}

function SkillsScene({
  viewportRef,
  trackRef,
  registerCard,
  counterRef,
  railRef,
}: {
  viewportRef: (el: HTMLDivElement | null) => void;
  trackRef: (el: HTMLDivElement | null) => void;
  registerCard: (i: number, el: HTMLDivElement | null) => void;
  counterRef: (el: HTMLSpanElement | null) => void;
  railRef: (el: HTMLSpanElement | null) => void;
}) {
  return (
    <div className="space-y-3 xl:space-y-4">
      <div className="flex items-center gap-4">
        <span className="mono text-[11px] uppercase tracking-widest text-primary marker-bracket">
          02 / stack
        </span>
        <span className="h-px flex-1 bg-line" />
        <span
          ref={counterRef}
          className="mono shrink-0 text-[10px] text-muted-foreground tabular-nums"
        >
          {`01 / ${String(stack.length).padStart(2, "0")}`}
        </span>
      </div>
      <div ref={viewportRef} className="relative -mx-1 overflow-hidden px-1">
        <div ref={trackRef} className="flex gap-3 pb-1 will-change-transform">
          {stack.map((g, i) => (
            <SkillCard
              key={g.titleKey}
              group={g}
              index={i}
              registerCard={registerCard}
              className="w-[78%] shrink-0 will-change-transform sm:w-[64%] md:w-[56%] xl:w-[62%]"
            />
          ))}
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-[linear-gradient(to_left,color-mix(in_oklab,var(--color-background)_90%,transparent),transparent)]"
        />
      </div>
      <div className="mono flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground">
        <span className="h-px flex-1 overflow-hidden bg-line">
          <span ref={railRef} className="block h-px w-full origin-start scale-x-0 bg-primary" />
        </span>
        <span className="shrink-0">scroll ↓</span>
      </div>
    </div>
  );
}

function FinalScene() {
  const { t } = useI18n();
  return (
    <div className="space-y-5 xl:space-y-6">
      <div className="flex items-center gap-4">
        <span className="mono text-[11px] uppercase tracking-widest text-primary marker-bracket">
          03 / focus
        </span>
        <span className="h-px flex-1 bg-line" />
      </div>
      <div className="hairline relative overflow-hidden rounded-2xl bg-background/85 p-6 xl:p-8">
        <span
          aria-hidden
          className="mono pointer-events-none absolute -right-1 -top-4 select-none text-[80px] font-black leading-none text-foreground/[0.04]"
        >
          03
        </span>
        <h3 className="relative text-2xl font-bold leading-tight tracking-tight xl:text-3xl">
          {t("about_statement")}
        </h3>
        <ul className="relative mt-4 flex flex-wrap gap-x-6 gap-y-2">
          {[t("about_f1"), t("about_f2"), t("about_f3")].map((line) => (
            <li key={line} className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="mono shrink-0 text-primary">◆</span>
              <span>{line}</span>
            </li>
          ))}
        </ul>
        <div className="relative mono mt-5 space-y-1 border-t border-line pt-3 text-[11px] text-muted-foreground">
          <div>
            location <span className="text-primary">=</span> "{profile.location}"
          </div>
          <div>
            email <span className="text-primary">=</span> "{profile.email}"
          </div>
        </div>
      </div>
    </div>
  );
}

function Cinematic() {
  const { t, lang } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);
  const sceneEls = useRef<Record<string, HTMLElement[]>>({});

  const skillsViewportRef = useRef<HTMLDivElement>(null);
  const skillsTrackRef = useRef<HTMLDivElement>(null);
  const skillsCounterRef = useRef<HTMLSpanElement>(null);
  const skillsRailRef = useRef<HTMLSpanElement>(null);
  const skillCardEls = useRef<(HTMLDivElement | null)[]>([]);
  const registerCard = (i: number, el: HTMLDivElement | null) => {
    skillCardEls.current[i] = el;
  };

  const register = (id: SceneId, el: HTMLElement | null) => {
    if (!el) return;
    const arr = sceneEls.current[id] ?? (sceneEls.current[id] = []);
    if (!arr.includes(el)) arr.push(el);
  };

  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    let sectionTop = 0;
    let travel = 1;
    let skillsMaxTranslate = 0;
    let negRate = false;
    let negRateChecked = false;
    let rafId = 0;

    const measure = () => {
      sectionTop = sectionEl.getBoundingClientRect().top + window.scrollY;
      travel = Math.max(1, sectionEl.offsetHeight - window.innerHeight);
      const track = skillsTrackRef.current;
      const viewport = skillsViewportRef.current;
      skillsMaxTranslate =
        track && viewport ? Math.max(0, track.scrollWidth - viewport.clientWidth) : 0;
    };
    measure();

    const update = () => {
      const p = clamp01((window.scrollY - sectionTop) / travel);

      (Object.keys(SCENES) as SceneId[]).forEach((id) => {
        const cfg = SCENES[id];
        let o = 0;
        let ty = 28;
        let blur = 8;
        if (p > cfg.in0 && p < cfg.out1) {
          if (p < cfg.in1) {
            const k = ease((p - cfg.in0) / (cfg.in1 - cfg.in0));
            o = k;
            ty = lerp(28, 0, k);
            blur = lerp(8, 0, k);
          } else if (p < cfg.out0) {
            o = 1;
            ty = 0;
            blur = 0;
          } else {
            const k = ease((p - cfg.out0) / (cfg.out1 - cfg.out0));
            o = 1 - k;
            ty = lerp(0, -24, k);
            blur = lerp(0, 8, k);
          }
        }
        const els = sceneEls.current[id];
        if (els)
          for (const el of els) {
            el.style.opacity = o.toFixed(3);
            el.style.transform = `translate3d(0, ${ty.toFixed(1)}px, 0)`;
            el.style.filter = blur > 0.5 ? `blur(${blur.toFixed(1)}px)` : "none";
            const wc = o > 0.01 ? "transform, opacity" : "auto";
            if (el.style.willChange !== wc) el.style.willChange = wc;
          }
      });

      const sk = SCENES.skills;
      const walkSpan = Math.max(0.0001, sk.out0 - sk.in1);
      const k = clamp01((p - sk.in1) / walkSpan);
      const n = stack.length;

      if (skillsTrackRef.current) {
        skillsTrackRef.current.style.transform = `translate3d(${(-skillsMaxTranslate * k).toFixed(1)}px, 0, 0)`;
      }
      const activeFloat = k * (n - 1);
      for (let i = 0; i < skillCardEls.current.length; i++) {
        const el = skillCardEls.current[i];
        if (!el) continue;
        const dist = Math.abs(activeFloat - i);
        const tt = clamp01(dist / 1.35);
        const scale = lerp(1, 0.9, tt);
        const cardO = lerp(1, 0.55, tt);
        const cardTy = lerp(0, 6, tt);
        el.style.transform = `translate3d(0, ${cardTy.toFixed(1)}px, 0) scale(${scale.toFixed(3)})`;
        el.style.opacity = cardO.toFixed(3);
      }
      if (skillsRailRef.current) skillsRailRef.current.style.transform = `scaleX(${k.toFixed(4)})`;
      if (skillsCounterRef.current) {
        const activeIdx = Math.min(n - 1, Math.round(activeFloat));
        skillsCounterRef.current.textContent = `${String(activeIdx + 1).padStart(2, "0")} / ${String(n).padStart(2, "0")}`;
      }

      const bg = bgRef.current;
      if (bg) {
        bg.style.transform = `translate3d(0, ${lerp(0, -10, p).toFixed(1)}vh, 0) scale(${(1 + 0.06 * p).toFixed(4)})`;
      }

      const v = videoRef.current;
      if (v && v.readyState >= 1) {
        const dur = Number.isFinite(v.duration) && v.duration > 0 ? v.duration : 7.3;
        const target = p * (dur - 0.06);
        const delta = target - v.currentTime;

        if (!negRateChecked && v.readyState >= 2) {
          negRateChecked = true;
          try {
            v.playbackRate = -0.5;
            negRate = v.playbackRate < 0;
            v.playbackRate = 1;
          } catch {
            negRate = false;
          }
        }

        const far = Math.abs(delta) > 0.6;
        if (far) {
          if (!v.paused) v.pause();
          if (v.playbackRate !== 1) v.playbackRate = 1;
          v.currentTime = target;
          if (rafId) cancelAnimationFrame(rafId);
          rafId = 0;
        } else {
          const needReverse = delta < 0 && !negRate;
          if (needReverse) {
            v.currentTime = target;
            if (rafId) cancelAnimationFrame(rafId);
            rafId = 0;
          } else {
            const rate = Math.max(-2.5, Math.min(2.5, delta * 8));
            const stop = Math.abs(rate) < 0.15;
            if (stop) {
              if (!v.paused) v.pause();
              if (rafId) cancelAnimationFrame(rafId);
              rafId = 0;
            } else {
              if (v.paused) {
                const pr = v.play();
                if (pr) pr.catch(() => {});
              }
              if (v.playbackRate !== rate) v.playbackRate = rate;
              if (!rafId) {
                const step = () => {
                  rafId = requestAnimationFrame(step);
                  update();
                };
                rafId = requestAnimationFrame(step);
              }
            }
          }
        }
      }

      if (progressRef.current) progressRef.current.textContent = `${Math.round(p * 100)}%`;
      if (barRef.current) barRef.current.style.transform = `scaleX(${p.toFixed(4)})`;
    };

    update();

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        update();
      });
    };
    const onResize = () => {
      measure();
      update();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onResize);
    if (document.fonts?.ready) document.fonts.ready.then(() => onResize());

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onResize);
      ticking = false;
    };
  }, [lang]);

  return (
    <section id="about" ref={sectionRef} className="relative overflow-x-clip">
      <div className="relative h-[560vh]">
        <div className="sticky top-0 h-screen overflow-hidden [perspective:1400px]">
          <div ref={bgRef} aria-hidden className="absolute inset-0 bg-background">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_45%,color-mix(in_oklab,white_72%,transparent),transparent_72%)] dark:bg-[radial-gradient(circle_at_60%_45%,color-mix(in_oklab,black_50%,transparent),transparent_72%)]" />
          </div>

          <ScrollVideo panelRef={panelRef} videoRef={videoRef} />

          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-[2] hidden bg-[linear-gradient(to_right,color-mix(in_oklab,var(--color-background)_94%,transparent)_0%,color-mix(in_oklab,var(--color-background)_70%,transparent)_34%,transparent_56%)] rtl:bg-[linear-gradient(to_left,color-mix(in_oklab,var(--color-background)_94%,transparent)_0%,color-mix(in_oklab,var(--color-background)_70%,transparent)_34%,transparent_56%)] xl:block"
          />

          <div className="pointer-events-none absolute inset-0 z-10">
            <Scene id="story" register={register}>
              <StoryScene />
            </Scene>
            <Scene id="skills" register={register}>
              <SkillsScene
                viewportRef={(el) => (skillsViewportRef.current = el)}
                trackRef={(el) => (skillsTrackRef.current = el)}
                registerCard={registerCard}
                counterRef={(el) => (skillsCounterRef.current = el)}
                railRef={(el) => (skillsRailRef.current = el)}
              />
            </Scene>
            <Scene id="final" register={register}>
              <FinalScene />
            </Scene>
          </div>

          <div className="absolute bottom-3 start-5 z-20 flex items-center gap-2 mono text-[10px] uppercase tracking-widest text-muted-foreground">
            <span className="inline-block h-px w-16 overflow-hidden bg-line">
              <span ref={barRef} className="block h-px w-full origin-start bg-primary" />
            </span>
            <span ref={progressRef}>0%</span>
            <span className="hidden sm:inline">· {t("about_scroll")}</span>
          </div>

          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-20 bg-linear-to-b from-transparent to-background"
          />
        </div>
      </div>
    </section>
  );
}

function StaticAbout() {
  const { t } = useI18n();
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28">
      <div className="mb-10 flex items-end justify-between gap-6 border-b border-line pb-4">
        <div>
          <div className="eyebrow">{t("about_kicker")}</div>
          <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
            {t("section_about")}
          </h2>
        </div>
      </div>
      <div className="grid items-center gap-10 lg:grid-cols-5">
        <div className="order-last flex justify-center lg:order-first lg:col-span-2">
          <img
            src="/video-project-poster.png"
            alt=""
            draggable={false}
            className="h-80 w-auto object-contain sm:h-[400px]"
          />
        </div>
        <div className="space-y-5 lg:col-span-3">
          <p className="text-lg leading-relaxed">{t("about_body")}</p>
          <div>
            <div className="mono mb-3 text-xs uppercase tracking-widest text-muted-foreground">
              {t("about_focus")}
            </div>
            <ul className="space-y-2">
              {[t("about_f1"), t("about_f2"), t("about_f3")].map((line, i) => (
                <li key={i} className="flex gap-3 text-base">
                  <span className="mono shrink-0 text-primary">◆</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="mono mb-3 text-xs uppercase tracking-widest text-muted-foreground">
              {t("about_k_skills")}
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {stack.map((g, i) => (
                <SkillCard key={g.titleKey} group={g} index={i} />
              ))}
            </div>
          </div>
          <div className="hairline rounded-lg bg-card/60 p-5 mono text-[12px] leading-7">
            <div className="text-muted-foreground"># learning.log</div>
            <div className="mt-2">{t("about_learning")}</div>
            <div className="mt-4 text-muted-foreground"># env</div>
            <div>
              location <span className="text-primary">=</span> "{profile.location}"
            </div>
            <div>
              email <span className="text-primary">=</span> "{profile.email}"
            </div>
            <div>
              phone <span className="text-primary">=</span> "{profile.phone}"
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AboutSection() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return reduced ? <StaticAbout /> : <Cinematic />;
}
