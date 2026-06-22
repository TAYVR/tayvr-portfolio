export const profile = {
  name: "Elmahdi Tayar",
  alias: "TAYVR",
  location: "Kénitra, Morocco",
  email: "mahditayar.25@gmail.com",
  phone: "+212 717 383 956",
  github: "https://github.com/TAYVR",
  linkedin: "https://www.linkedin.com/in/tayvr",
  stats: {
    years: "3",
    projects: "20+",
    technologies: "15+",
    clients: "30+",
  },
};

export type Project = {
  id: string;
  name: string;
  tagKey: string;
  descKey: string;
  url?: string;
  stack: string[];
  year: string;
};

export const projects: Project[] = [
  { id: "masterfut", name: "MasterFut", tagKey: "p_masterfut_tag", descKey: "p_masterfut_desc", url: "https://masterfut.com", stack: ["Laravel", "React", "MySQL", "Stripe", "PayPal"], year: "2024" },
  { id: "ka3ba", name: "Ka3ba", tagKey: "p_ka3ba_tag", descKey: "p_ka3ba_desc", url: "https://ka3ba.com", stack: ["Next.js", "Laravel", "MySQL", "LLM"], year: "2024" },
  { id: "almoulate", name: "Almoulate Immobilier", tagKey: "p_almoulate_tag", descKey: "p_almoulate_desc", stack: ["Laravel", "Livewire", "MySQL"], year: "2023" },
  { id: "aligarage", name: "AliGarage", tagKey: "p_aligarage_tag", descKey: "p_aligarage_desc", stack: ["Vue.js", "Laravel", "SQL Server"], year: "2023" },
  { id: "smile", name: "SmileBusiness", tagKey: "p_smile_tag", descKey: "p_smile_desc", url: "https://smilebusiness.ma", stack: ["Laravel", "MySQL", "CMS"], year: "2023" },
  { id: "school", name: "SchoolSystem", tagKey: "p_school_tag", descKey: "p_school_desc", stack: ["Laravel", "MySQL", "REST API"], year: "2022" },
  { id: "codev", name: "CodeVentures", tagKey: "p_codev_tag", descKey: "p_codev_desc", stack: ["React", "Laravel", "AI"], year: "2024" },
  { id: "solo", name: "Solo Gym", tagKey: "p_solo_tag", descKey: "p_solo_desc", stack: ["Godot Engine"], year: "2025" },
  { id: "shorts", name: "YouTube Shorts Bot", tagKey: "p_shorts_tag", descKey: "p_shorts_desc", stack: ["Python", "GitHub Actions"], year: "2024" },
];

export type StackGroup = { titleKey: string; items: { name: string; level?: string; learning?: boolean }[] };

export const stack: StackGroup[] = [
  { titleKey: "g_frontend", items: [
    { name: "React.js", level: "95" },
    { name: "Next.js", level: "90" },
    { name: "TypeScript", level: "88" },
    { name: "Vue.js", level: "85" },
    { name: "Tailwind CSS", level: "95" },
    { name: "Flutter", level: "70" },
  ]},
  { titleKey: "g_backend", items: [
    { name: "Laravel / PHP", level: "95" },
    { name: "Node.js / Express", level: "85" },
    { name: "Django / Python", level: "75" },
    { name: "C#", level: "70" },
    { name: "Java", learning: true },
    { name: "Spring Boot", learning: true },
  ]},
  { titleKey: "g_data", items: [
    { name: "MySQL", level: "92" },
    { name: "PostgreSQL", level: "85" },
    { name: "MongoDB", level: "80" },
    { name: "SQL Server", level: "78" },
    { name: "Redis", level: "75" },
  ]},
  { titleKey: "g_ai", items: [
    { name: "n8n", level: "90" },
    { name: "LangChain", level: "82" },
    { name: "Playwright", level: "90" },
    { name: "BeautifulSoup / Scrapy", level: "88" },
    { name: "OpenRouter / Gemini", level: "85" },
  ]},
];

export const experience = [
  {
    role: "r_zoom_role",
    company: "Zoominmedia",
    place: "Kénitra, Morocco",
    period: "Dec 2023 — May 2026",
    bulletsKey: "r_zoom_bullets",
  },
  {
    role: "r_aptiv_role",
    company: "APTIV",
    place: "Morocco",
    period: "2023",
    bulletsKey: "r_aptiv_bullets",
  },
];
