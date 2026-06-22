import { useEffect, useState } from "react";
import { useI18n, LANGS, type Lang } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";
import { profile, projects, stack, experience } from "@/data/portfolio";

function Nav() {
  const { t, lang, setLang, dir } = useI18n();
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#about", label: t("nav_about") },
    { href: "#stack", label: t("nav_stack") },
    { href: "#work", label: t("nav_work") },
    { href: "#experience", label: t("nav_experience") },
    { href: "#contact", label: t("nav_contact") },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-line">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 h-14 flex items-center justify-between gap-4">
        <a href="#top" className="mono font-bold tracking-wider text-sm shrink-0">
          <span className="text-primary">&lt;</span>TAYVR<span className="text-primary">/&gt;</span>
        </a>
        <nav className="hidden md:flex items-center gap-1 mono text-[12px]">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="px-3 py-1.5 rounded text-muted-foreground hover:text-foreground hover:bg-secondary transition">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <select
            aria-label={t("lang_label")}
            value={lang}
            onChange={(e) => setLang(e.target.value as Lang)}
            className="mono text-[11px] bg-transparent hairline rounded px-2 py-1.5 hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring"
          >
            {LANGS.map((l) => (
              <option key={l.code} value={l.code} className="bg-background">{l.label} · {l.native}</option>
            ))}
          </select>
          <button
            onClick={toggle}
            aria-label={t("theme_label")}
            className="mono text-[11px] hairline rounded px-2 py-1.5 hover:bg-secondary"
          >
            {theme === "dark" ? "☀ LIGHT" : "☾ DARK"}
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="md:hidden mono text-[11px] hairline rounded px-2 py-1.5"
          >
            {open ? "✕" : "≡"}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-line bg-background">
          <nav className="mx-auto max-w-6xl px-5 py-3 flex flex-col gap-1 mono text-sm" dir={dir}>
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="px-3 py-2 rounded hover:bg-secondary">{l.label}</a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function Ticker() {
  const items = ["Laravel", "React", "Next.js", "TypeScript", "Python", "Playwright", "n8n", "LangChain", "PostgreSQL", "Redis", "Docker", "Vue.js", "Flutter", "Java · learning", "Spring Boot · learning"];
  const row = [...items, ...items];
  return (
    <div className="border-y border-line py-3 overflow-hidden bg-card/40">
      <div className="ticker flex gap-8 whitespace-nowrap mono text-[11px] tracking-widest uppercase text-muted-foreground" style={{ width: "max-content" }}>
        {row.map((s, i) => (
          <span key={i} className="flex items-center gap-8">
            <span>{s}</span>
            <span className="text-primary">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  const { t } = useI18n();
  return (
    <section id="top" className="relative scan-line">
      <div aria-hidden className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 pt-14 sm:pt-20 pb-12">
        <div className="flex items-center gap-3 mb-8 mono text-[11px] uppercase tracking-widest">
          <span className="inline-block size-1.5 rounded-full bg-acid animate-pulse" />
          <span className="text-muted-foreground">{t("hero_status")}</span>
        </div>

        <div className="mono text-muted-foreground text-xs mb-3">/* identity */</div>
        <h1 className="font-sans font-black tracking-tight leading-[0.95] text-5xl sm:text-7xl lg:text-8xl">
          Elmahdi <span className="text-primary">Tayar</span>
        </h1>
        <div className="mono text-sm sm:text-base mt-4 text-muted-foreground">
          <span className="text-primary">$</span> whoami <span className="caret" />
        </div>
        <p className="mt-6 max-w-2xl text-lg sm:text-xl leading-relaxed">{t("hero_role")}</p>
        <p className="mt-4 max-w-2xl text-sm sm:text-base text-muted-foreground leading-relaxed">{t("hero_intro")}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#work" className="mono text-xs uppercase tracking-widest px-5 py-3 rounded bg-primary text-primary-foreground hover:opacity-90 transition">
            → {t("hero_cta_work")}
          </a>
          <a href="#contact" className="mono text-xs uppercase tracking-widest px-5 py-3 rounded hairline hover:bg-secondary transition">
            {t("hero_cta_contact")}
          </a>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const { t } = useI18n();
  const items = [
    { k: profile.stats.years, l: t("stat_years") },
    { k: profile.stats.projects, l: t("stat_projects") },
    { k: profile.stats.technologies, l: t("stat_tech") },
    { k: profile.stats.clients, l: t("stat_clients") },
  ];
  return (
    <section className="border-y border-line bg-card/30">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-line">
        {items.map((it, i) => (
          <div key={i} className="p-6 sm:p-8">
            <div className="mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
              0{i + 1} / 04
            </div>
            <div className="mono text-4xl sm:text-5xl font-bold">{it.k}</div>
            <div className="mt-1 text-xs sm:text-sm text-muted-foreground">{it.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionHeader({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="flex items-end justify-between gap-6 mb-10 pb-4 border-b border-line">
      <div>
        <div className="eyebrow">{kicker}</div>
        <h2 className="mt-2 text-3xl sm:text-4xl font-black tracking-tight">{title}</h2>
      </div>
    </div>
  );
}

function About() {
  const { t } = useI18n();
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28">
      <SectionHeader kicker={t("about_kicker")} title={t("section_about")} />
      <div className="grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-3 space-y-5">
          <p className="text-lg leading-relaxed">{t("about_body")}</p>
          <div>
            <div className="mono text-xs uppercase tracking-widest text-muted-foreground mb-3">{t("about_focus")}</div>
            <ul className="space-y-2">
              {[t("about_f1"), t("about_f2"), t("about_f3")].map((line, i) => (
                <li key={i} className="flex gap-3 text-base">
                  <span className="mono text-primary shrink-0">→</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <aside className="lg:col-span-2 hairline rounded-lg p-5 bg-card/60 mono text-[12px] leading-7">
          <div className="text-muted-foreground"># learning.log</div>
          <div className="mt-2">{t("about_learning")}</div>
          <div className="mt-4 text-muted-foreground"># env</div>
          <div>location <span className="text-primary">=</span> "{profile.location}"</div>
          <div>email    <span className="text-primary">=</span> "{profile.email}"</div>
          <div>phone    <span className="text-primary">=</span> "{profile.phone}"</div>
        </aside>
      </div>
    </section>
  );
}

function Stack() {
  const { t } = useI18n();
  return (
    <section id="stack" className="border-t border-line bg-card/20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28">
        <SectionHeader kicker={t("stack_kicker")} title={t("section_stack")} />
        <div className="grid sm:grid-cols-2 gap-px bg-line hairline rounded-lg overflow-hidden">
          {stack.map((g) => (
            <div key={g.titleKey} className="bg-background p-6">
              <div className="mono text-[11px] uppercase tracking-widest text-primary mb-4">{t(g.titleKey)}</div>
              <ul className="space-y-2.5">
                {g.items.map((it) => (
                  <li key={it.name} className="flex items-center justify-between gap-3 text-sm">
                    <span className="flex items-center gap-2">
                      <span className="mono text-muted-foreground text-xs">▸</span>
                      <span>{it.name}</span>
                      {it.learning && (
                        <span className="mono text-[9px] uppercase tracking-widest px-1.5 py-0.5 rounded bg-acid/20 text-foreground border border-acid/40">
                          {t("learning_badge")}
                        </span>
                      )}
                    </span>
                    {it.level && !it.learning && (
                      <span className="flex items-center gap-2">
                        <span className="hidden sm:block h-1 w-24 rounded-full bg-secondary overflow-hidden">
                          <span className="block h-full bg-primary" style={{ width: `${it.level}%` }} />
                        </span>
                        <span className="mono text-[11px] text-muted-foreground tabular-nums w-8 text-right">{it.level}</span>
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Work() {
  const { t } = useI18n();
  return (
    <section id="work" className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28">
      <SectionHeader kicker={t("work_kicker")} title={t("section_work")} />
      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <article key={p.id} className="group hairline rounded-lg p-6 bg-card hover:border-primary/60 transition relative overflow-hidden">
            <div className="absolute top-0 ltr:right-0 rtl:left-0 mono text-[10px] uppercase tracking-widest text-muted-foreground px-3 py-1.5 border-b border-line ltr:border-l rtl:border-r">
              {String(i + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
            </div>
            <div className="mono text-[11px] uppercase tracking-widest text-primary mt-4">{t(p.tagKey)}</div>
            <h3 className="mt-2 text-2xl font-bold tracking-tight">{p.name}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{t(p.descKey)}</p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <span key={s} className="chip">{s}</span>
              ))}
            </div>
            <div className="mt-5 flex items-center justify-between mono text-[11px] uppercase tracking-widest">
              <span className="text-muted-foreground">{p.year}</span>
              {p.url ? (
                <a href={p.url} target="_blank" rel="noreferrer" className="text-primary hover:underline">
                  {t("work_view")} ↗
                </a>
              ) : (
                <span className="text-muted-foreground">{t("work_private")}</span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  const { t, tList } = useI18n();
  return (
    <section id="experience" className="border-t border-line bg-card/20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28">
        <SectionHeader kicker={t("experience_kicker")} title={t("section_experience")} />
        <div className="space-y-px bg-line hairline rounded-lg overflow-hidden">
          {experience.map((e) => (
            <div key={e.company} className="bg-background p-6 sm:p-8 grid md:grid-cols-[180px_1fr] gap-4">
              <div className="mono text-[12px] text-muted-foreground">
                <div className="text-foreground">{e.period}</div>
                <div className="mt-1">{e.place}</div>
              </div>
              <div>
                <div className="mono text-[11px] uppercase tracking-widest text-primary">{e.company}</div>
                <h3 className="mt-1 text-xl font-bold">{t(e.role)}</h3>
                <ul className="mt-4 space-y-2">
                  {tList(e.bulletsKey).map((b, i) => (
                    <li key={i} className="flex gap-3 text-sm">
                      <span className="mono text-primary shrink-0">·</span>
                      <span className="text-muted-foreground">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { t } = useI18n();
  const wa = profile.phone.replace(/[^0-9]/g, "");
  const items = [
    { k: t("contact_email"), v: profile.email, href: `mailto:${profile.email}` },
    { k: t("contact_whatsapp"), v: profile.phone, href: `https://wa.me/${wa}` },
    { k: t("contact_github"), v: "github.com/TAYVR", href: profile.github },
    { k: t("contact_linkedin"), v: "linkedin.com/in/tayvr", href: profile.linkedin },
    { k: t("contact_location"), v: profile.location },
  ];
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28">
      <SectionHeader kicker={t("contact_kicker")} title={t("section_contact")} />
      <p className="text-lg max-w-2xl mb-10">{t("contact_lead")}</p>
      <div className="hairline rounded-lg divide-y divide-line">
        {items.map((it) => (
          <div key={it.k} className="grid grid-cols-[minmax(0,1fr)_auto] sm:grid-cols-[220px_1fr] items-center gap-4 p-5 hover:bg-card/60 transition">
            <div className="mono text-[11px] uppercase tracking-widest text-muted-foreground">{it.k}</div>
            {it.href ? (
              <a href={it.href} target={it.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="mono text-sm sm:text-base text-foreground hover:text-primary truncate text-right sm:text-left">
                {it.v} <span className="text-primary">↗</span>
              </a>
            ) : (
              <span className="mono text-sm sm:text-base truncate text-right sm:text-left">{it.v}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 mono text-[11px] uppercase tracking-widest text-muted-foreground">
        <span>&copy; {new Date().getFullYear()} · ELMAHDI TAYAR</span>
        <span>{t("footer_built")}</span>
      </div>
    </footer>
  );
}

export default function Portfolio() {
  // close any open hash on mount; smooth scroll
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => { document.documentElement.style.scrollBehavior = ""; };
  }, []);
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <Ticker />
      <Stats />
      <About />
      <Stack />
      <Work />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
