import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Lang = "en" | "fr" | "es" | "ar";
export const LANGS: { code: Lang; label: string; native: string }[] = [
  { code: "en", label: "EN", native: "English" },
  { code: "fr", label: "FR", native: "Français" },
  { code: "es", label: "ES", native: "Español" },
  { code: "ar", label: "AR", native: "العربية" },
];

type Dict = Record<string, string | string[]>;

const dicts: Record<Lang, Dict> = {
  en: {
    nav_about: "About", nav_stack: "Stack", nav_work: "Work", nav_experience: "Experience", nav_contact: "Contact",
    hero_status: "Available for senior contracts · Q1 2026",
    hero_role: "Full-stack engineer building scraping, ERP, and AI-agent systems",
    hero_intro: "I design and ship production systems end-to-end — from UML to a VPS handling traffic at 3am. 3 years of Laravel, React, and Python; the last two writing autonomous agents that replace whole workflows.",
    hero_cta_work: "See selected work", hero_cta_contact: "Start a project",
    stat_years: "years shipping", stat_projects: "projects delivered", stat_tech: "technologies in rotation", stat_clients: "happy clients",
    section_about: "About", about_kicker: "// who",
    about_body: "Based in Kénitra, Morocco. I work where business logic gets messy: religious-travel ERPs, real-time gaming-currency marketplaces, multi-portal school systems. My favorite problems are the ones that need scraping at scale on Monday and a clean admin UI by Friday.",
    about_focus: "Currently focused on:",
    about_f1: "AI agents that own a workflow, not just a prompt",
    about_f2: "Industrial-grade scraping with Playwright + queues",
    about_f3: "ERPs that survive five years of feature drift",
    about_learning: "Currently learning Java + Spring Boot — beginner, building toward backend interop with JVM-heavy enterprise stacks.",
    section_stack: "Stack", stack_kicker: "// tools",
    g_frontend: "Frontend", g_backend: "Backend & languages", g_data: "Data", g_ai: "AI · automation · scraping",
    learning_badge: "learning",
    section_work: "Selected work", work_kicker: "// builds", work_view: "Visit", work_private: "Private",
    section_experience: "Experience", experience_kicker: "// timeline",
    section_contact: "Contact", contact_kicker: "// reach",
    contact_lead: "Best for: full-stack builds, scraping pipelines, AI-agent workflows, ERP rescues.",
    contact_email: "Email", contact_whatsapp: "WhatsApp", contact_github: "GitHub", contact_linkedin: "LinkedIn", contact_location: "Based in",
    footer_built: "Built in Morocco — Laravel, React, late espresso.",
    theme_label: "Theme", lang_label: "Language",
    p_masterfut_tag: "EA FC coins · multi-gateway",
    p_masterfut_desc: "International marketplace for virtual gaming currency. Real-time stock, ten languages, Stripe + PayPal + crypto rails.",
    p_ka3ba_tag: "Hajj & Omra ERP",
    p_ka3ba_desc: "Quotes, accounting, suppliers, programs, plus an LLM assistant that drafts controllers and PDF quotes from a chat box.",
    p_almoulate_tag: "Real-estate ops",
    p_almoulate_desc: "All-in-one platform: financial transactions, construction projects, full HR module, analytics on top.",
    p_aligarage_tag: "Garage SaaS",
    p_aligarage_desc: "Stock, service history, POS, and profit tracking for a private garage network.",
    p_smile_tag: "B2B distribution",
    p_smile_desc: "Professional cleaning-products distribution with a client quotation engine and CMS-driven catalog.",
    p_school_tag: "School platform",
    p_school_desc: "Four portals — admin, teacher, parent, student — with attendance, LMS integration, and fee management over REST.",
    p_codev_tag: "EdTech · AI",
    p_codev_desc: "Multilingual EdTech platform (AR/FR/EN) with AI-powered code-analysis tooling.",
    p_solo_tag: "Mobile RPG",
    p_solo_desc: "Turn-based RPG set in a fitness universe. Personal project, Godot Engine.",
    p_shorts_tag: "Content automation",
    p_shorts_desc: "Autonomous Python bot on GitHub Actions — extracts, edits, and publishes three Shorts per day.",
    r_zoom_role: "Full-Stack Developer · Scraping & AI Automation",
    r_zoom_bullets: [
      "Designed, modeled (UML), and shipped web/mobile apps in Laravel, React, Next.js, Flutter.",
      "Built n8n + custom-agent workflows that retired entire repetitive processes.",
      "Industrial scraping with Python + Playwright for lead generation and data products.",
      "E-commerce, real-time inventory, booking, and a medical (eSanté) platform.",
    ],
    r_aptiv_role: "Full-Stack Developer Intern",
    r_aptiv_bullets: [
      "Built a robust C# desktop app with SQL Server backend.",
      "Full system modeling via UML, end-to-end.",
    ],
  },
  fr: {
    nav_about: "Profil", nav_stack: "Stack", nav_work: "Réalisations", nav_experience: "Parcours", nav_contact: "Contact",
    hero_status: "Disponible pour missions seniors · T1 2026",
    hero_role: "Ingénieur full-stack — scraping, ERP, agents IA",
    hero_intro: "Je conçois et livre des systèmes de bout en bout — du modèle UML jusqu'au VPS qui encaisse le trafic à 3h du matin. 3 ans de Laravel, React et Python ; les deux dernières années à écrire des agents autonomes qui remplacent des workflows entiers.",
    hero_cta_work: "Voir les projets", hero_cta_contact: "Démarrer un projet",
    stat_years: "ans en production", stat_projects: "projets livrés", stat_tech: "technologies en rotation", stat_clients: "clients satisfaits",
    section_about: "À propos", about_kicker: "// qui",
    about_body: "Basé à Kénitra, Maroc. J'interviens là où la logique métier devient dense : ERP pour agences Hajj & Omra, marketplaces temps réel, systèmes scolaires multi-portails. Mes problèmes préférés combinent du scraping à grande échelle le lundi et une interface admin propre le vendredi.",
    about_focus: "En ce moment :",
    about_f1: "Agents IA qui possèdent un workflow, pas juste un prompt",
    about_f2: "Scraping industriel avec Playwright + files de messages",
    about_f3: "ERP qui tiennent cinq ans de dérive fonctionnelle",
    about_learning: "Actuellement en apprentissage : Java + Spring Boot — débutant, en vue d'interop backend avec des stacks JVM en entreprise.",
    section_stack: "Stack", stack_kicker: "// outils",
    g_frontend: "Frontend", g_backend: "Backend & langages", g_data: "Données", g_ai: "IA · automatisation · scraping",
    learning_badge: "en apprentissage",
    section_work: "Réalisations", work_kicker: "// projets", work_view: "Voir", work_private: "Privé",
    section_experience: "Parcours", experience_kicker: "// timeline",
    section_contact: "Contact", contact_kicker: "// joindre",
    contact_lead: "Pour : développements full-stack, pipelines de scraping, agents IA, sauvetages d'ERP.",
    contact_email: "E-mail", contact_whatsapp: "WhatsApp", contact_github: "GitHub", contact_linkedin: "LinkedIn", contact_location: "Basé à",
    footer_built: "Construit au Maroc — Laravel, React, expresso tardif.",
    theme_label: "Thème", lang_label: "Langue",
    p_masterfut_tag: "EA FC coins · multi-paiement",
    p_masterfut_desc: "Marketplace internationale de monnaie virtuelle. Stock temps réel, dix langues, Stripe + PayPal + crypto.",
    p_ka3ba_tag: "ERP Hajj & Omra",
    p_ka3ba_desc: "Devis, comptabilité, fournisseurs, programmes, plus un assistant LLM qui rédige des contrôleurs et des devis PDF depuis un chat.",
    p_almoulate_tag: "Gestion immobilière",
    p_almoulate_desc: "Plateforme tout-en-un : transactions financières, projets de construction, module RH complet, analytics.",
    p_aligarage_tag: "SaaS garage",
    p_aligarage_desc: "Stock, historique service, POS et suivi de marge pour un réseau de garages privé.",
    p_smile_tag: "Distribution B2B",
    p_smile_desc: "Distribution de produits de nettoyage professionnels avec moteur de devis et catalogue CMS.",
    p_school_tag: "Plateforme scolaire",
    p_school_desc: "Quatre portails — admin, enseignant, parent, élève — avec présence, intégration LMS et gestion des frais via REST.",
    p_codev_tag: "EdTech · IA",
    p_codev_desc: "Plateforme EdTech multilingue (AR/FR/EN) avec outils d'analyse de code propulsés par IA.",
    p_solo_tag: "RPG mobile",
    p_solo_desc: "RPG au tour par tour dans un univers fitness. Projet personnel, Godot Engine.",
    p_shorts_tag: "Automatisation contenu",
    p_shorts_desc: "Bot Python autonome sur GitHub Actions — extrait, monte et publie trois Shorts par jour.",
    r_zoom_role: "Développeur Full-Stack · Scraping & Automatisation IA",
    r_zoom_bullets: [
      "Conception, modélisation UML et déploiement d'apps web/mobile en Laravel, React, Next.js, Flutter.",
      "Workflows n8n + agents sur-mesure qui ont retiré des processus répétitifs entiers.",
      "Scraping industriel avec Python + Playwright pour la génération de leads et la data.",
      "E-commerce, inventaire temps réel, booking, plateforme médicale (eSanté).",
    ],
    r_aptiv_role: "Stagiaire Développeur Full-Stack",
    r_aptiv_bullets: [
      "Application desktop C# robuste avec backend SQL Server.",
      "Modélisation complète du système en UML, de bout en bout.",
    ],
  },
  es: {
    nav_about: "Perfil", nav_stack: "Stack", nav_work: "Trabajos", nav_experience: "Trayectoria", nav_contact: "Contacto",
    hero_status: "Disponible para contratos senior · T1 2026",
    hero_role: "Ingeniero full-stack — scraping, ERP y agentes de IA",
    hero_intro: "Diseño y entrego sistemas de extremo a extremo — desde UML hasta un VPS aguantando tráfico a las 3am. 3 años de Laravel, React y Python; los dos últimos escribiendo agentes autónomos que reemplazan flujos enteros.",
    hero_cta_work: "Ver proyectos", hero_cta_contact: "Iniciar un proyecto",
    stat_years: "años en producción", stat_projects: "proyectos entregados", stat_tech: "tecnologías en rotación", stat_clients: "clientes satisfechos",
    section_about: "Sobre mí", about_kicker: "// quién",
    about_body: "Con base en Kénitra, Marruecos. Trabajo donde la lógica de negocio se complica: ERPs para viajes religiosos, mercados de divisas virtuales en tiempo real, sistemas escolares multi-portal. Mis problemas favoritos requieren scraping a escala el lunes y un panel admin limpio el viernes.",
    about_focus: "Actualmente enfocado en:",
    about_f1: "Agentes de IA que poseen un flujo completo, no solo un prompt",
    about_f2: "Scraping industrial con Playwright + colas",
    about_f3: "ERPs que sobreviven cinco años de cambios",
    about_learning: "Aprendiendo Java + Spring Boot — principiante, apuntando a interoperar con stacks JVM empresariales.",
    section_stack: "Stack", stack_kicker: "// herramientas",
    g_frontend: "Frontend", g_backend: "Backend y lenguajes", g_data: "Datos", g_ai: "IA · automatización · scraping",
    learning_badge: "aprendiendo",
    section_work: "Trabajos seleccionados", work_kicker: "// builds", work_view: "Visitar", work_private: "Privado",
    section_experience: "Trayectoria", experience_kicker: "// timeline",
    section_contact: "Contacto", contact_kicker: "// contactar",
    contact_lead: "Ideal para: desarrollos full-stack, pipelines de scraping, agentes de IA, rescate de ERPs.",
    contact_email: "Correo", contact_whatsapp: "WhatsApp", contact_github: "GitHub", contact_linkedin: "LinkedIn", contact_location: "Ubicado en",
    footer_built: "Hecho en Marruecos — Laravel, React, café tarde.",
    theme_label: "Tema", lang_label: "Idioma",
    p_masterfut_tag: "EA FC coins · multi-pasarela",
    p_masterfut_desc: "Mercado internacional de moneda virtual. Stock en tiempo real, diez idiomas, Stripe + PayPal + cripto.",
    p_ka3ba_tag: "ERP Hajj y Omra",
    p_ka3ba_desc: "Presupuestos, contabilidad, proveedores, programas y un asistente LLM que redacta controladores y PDFs desde un chat.",
    p_almoulate_tag: "Gestión inmobiliaria",
    p_almoulate_desc: "Plataforma todo-en-uno: transacciones, proyectos de construcción, módulo RH completo, analítica.",
    p_aligarage_tag: "SaaS de taller",
    p_aligarage_desc: "Stock, historial de servicios, TPV y seguimiento de margen para una red privada de talleres.",
    p_smile_tag: "Distribución B2B",
    p_smile_desc: "Distribución de productos de limpieza profesional con motor de cotizaciones y catálogo CMS.",
    p_school_tag: "Plataforma escolar",
    p_school_desc: "Cuatro portales — admin, profesor, padre, alumno — con asistencia, integración LMS y gestión de pagos vía REST.",
    p_codev_tag: "EdTech · IA",
    p_codev_desc: "Plataforma EdTech multilingüe (AR/FR/EN) con análisis de código asistido por IA.",
    p_solo_tag: "RPG móvil",
    p_solo_desc: "RPG por turnos ambientado en el mundo fitness. Proyecto personal, Godot Engine.",
    p_shorts_tag: "Automatización de contenido",
    p_shorts_desc: "Bot Python autónomo en GitHub Actions — extrae, edita y publica tres Shorts al día.",
    r_zoom_role: "Desarrollador Full-Stack · Scraping y Automatización IA",
    r_zoom_bullets: [
      "Diseño, modelado UML y despliegue de apps web/mobile en Laravel, React, Next.js, Flutter.",
      "Flujos n8n + agentes a medida que eliminaron procesos repetitivos enteros.",
      "Scraping industrial con Python + Playwright para generación de leads y data.",
      "E-commerce, inventario en tiempo real, reservas, plataforma médica (eSanté).",
    ],
    r_aptiv_role: "Becario Desarrollador Full-Stack",
    r_aptiv_bullets: [
      "Aplicación desktop robusta en C# con backend SQL Server.",
      "Modelado completo del sistema en UML, de principio a fin.",
    ],
  },
  ar: {
    nav_about: "من أنا", nav_stack: "تقنياتي", nav_work: "أعمالي", nav_experience: "المسار", nav_contact: "تواصل",
    hero_status: "متاح لعقود Senior · الربع الأول 2026",
    hero_role: "مهندس Full-Stack — متخصص في Scraping، أنظمة ERP، و AI Agents",
    hero_intro: "أقوم بتصميم وتطوير أنظمة متكاملة من الصفر — من نمذجة UML وحتى خادم VPS يعمل على مدار الساعة. لدي 3 سنوات من الخبرة في Laravel و React و Python؛ ركزت في العامين الأخيرين على بناء وكلاء ذكاء اصطناعي (Agents) يقومون بأتمتة سير العمل بالكامل.",
    hero_cta_work: "شاهد أعمالي", hero_cta_contact: "ابدأ مشروعاً جديداً",
    stat_years: "سنوات خبرة", stat_projects: "مشروع منجز", stat_tech: "تقنية مستخدمة", stat_clients: "عميل راضٍ",
    section_about: "من أنا", about_kicker: "// من",
    about_body: "أعمل من مدينة القنيطرة بالمغرب. أتخصص في المشاريع ذات المنطق البرمجي المعقد: مثل أنظمة ERP للحج والعمرة، وأسواق العملات الرقمية في الألعاب، والأنظمة المدرسية. أفضل التحديات هي التي تتطلب Scraping ضخم يوم الاثنين، ولوحة تحكم احترافية بحلول الجمعة.",
    about_focus: "مركز حالياً على:",
    about_f1: "وكلاء ذكاء اصطناعي يديرون سير عمل كاملاً، وليس مجرد دردشة",
    about_f2: "كشط بيانات (Scraping) احترافي باستخدام Playwright",
    about_f3: "أنظمة ERP قوية تصمد أمام التغييرات لسنوات",
    about_learning: "أتعلم حالياً: Java + Spring Boot — أطور مهاراتي للعمل على مشاريع برمجية كبرى لمستوى الشركات (Enterprise).",
    section_stack: "التقنيات", stack_kicker: "// الأدوات",
    g_frontend: "الواجهة (Frontend)", g_backend: "الخادم (Backend)", g_data: "البيانات", g_ai: "ذكاء · أتمتة · Scraping",
    learning_badge: "قيد التعلم",
    section_work: "أعمال مختارة", work_kicker: "// ماذا بنيت", work_view: "زيارة الموقع", work_private: "مشروع خاص",
    section_experience: "المسار المهني", experience_kicker: "// الخط الزمني",
    section_contact: "تواصل معي", contact_kicker: "// تواصل",
    contact_lead: "متاح لـ: بناء تطبيقات متكاملة، خطوط كشط البيانات، وكلاء AI، وحلول أنظمة ERP.",
    contact_email: "البريد الإلكتروني", contact_whatsapp: "واتساب", contact_github: "GitHub", contact_linkedin: "LinkedIn", contact_location: "المقر الرئيسي",
    footer_built: "صُنع في المغرب — باستخدام Laravel و React وقهوة المساء.",
    theme_label: "المظهر", lang_label: "اللغة",
    p_masterfut_tag: "EA FC coins · بوابات دفع متعددة",
    p_masterfut_desc: "سوق دولي لبيع عملات الألعاب. مخزون في الوقت الحقيقي، 10 لغات، وربط مع Stripe و PayPal و Crypto.",
    p_ka3ba_tag: "ERP للحج والعمرة",
    p_ka3ba_desc: "نظام شامل للمحاسبة والموردين، مع مساعد ذكاء اصطناعي يقوم بكتابة الأكواد وعروض الأسعار من خلال الدردشة.",
    p_almoulate_tag: "إدارة العقارات",
    p_almoulate_desc: "منصة متكاملة: معاملات مالية، تتبع مشاريع البناء، وحدة موارد بشرية كاملة، وتحليلات البيانات.",
    p_aligarage_tag: "SaaS لإدارة الورش",
    p_aligarage_desc: "إدارة المخزون، سجل الخدمات، ونقاط البيع لشبكة ورش خاصة.",
    p_smile_tag: "توزيع B2B",
    p_smile_desc: "نظام توزيع منتجات تنظيف احترافية مع محرك عروض أسعار وكتالوج متطور.",
    p_school_tag: "نظام مدرسي",
    p_school_desc: "أربع بوابات (إدارة، أستاذ، أب، طالب) مع تتبع الحضور وإدارة الرسوم عبر REST API.",
    p_codev_tag: "EdTech · ذكاء اصطناعي",
    p_codev_desc: "منصة تعليمية بثلاث لغات (AR/FR/EN) مع أدوات تحليل الكود بالذكاء الاصطناعي.",
    p_solo_tag: "لعبة RPG للجوال",
    p_solo_desc: "لعبة أدوار في عالم الرياضة واللياقة. مشروع شخصي باستخدام محرك Godot.",
    p_shorts_tag: "أتمتة المحتوى",
    p_shorts_desc: "بوت Python يعمل عبر GitHub Actions — يقوم باستخراج وتحرير ونشر 3 فيديوهات قصيرة يومياً تلقائياً.",
    r_zoom_role: "مطور Full-Stack · Scraping وأتمتة الذكاء الاصطناعي",
    r_zoom_bullets: [
      "تصميم ونشر تطبيقات ويب وموبايل باستخدام Laravel و React و Next.js و Flutter.",
      "بناء مسارات عمل عبر n8n ووكلاء مخصصين وفروا الكثير من الجهد البشري.",
      "كشط بيانات (Scraping) صناعي باستخدام Python و Playwright للبيانات الضخمة.",
      "مشاريع تجارة إلكترونية، أنظمة مخزون، ومنصات طبية (eSanté).",
    ],
    r_aptiv_role: "متدرب مطور Full-Stack",
    r_aptiv_bullets: [
      "بناء تطبيق سطح مكتب باستخدام C# وقاعدة بيانات SQL Server.",
      "نمذجة كاملة للنظام باستخدام UML من البداية حتى النهاية.",
    ],
  },
};

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
  tList: (key: string) => string[];
  dir: "ltr" | "rtl";
};
const I18nCtx = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = window.localStorage.getItem("lang") as Lang | null;
    if (saved && dicts[saved]) {
      setLangState(saved);
    } else {
      const nav = window.navigator.language.slice(0, 2) as Lang;
      if (dicts[nav]) {
        setLangState(nav);
      }
    }
  }, []);

  const dir = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    window.localStorage.setItem("lang", lang);
  }, [lang, dir, mounted]);

  const value = useMemo<Ctx>(() => ({
    lang,
    setLang: setLangState,
    dir,
    t: (k) => {
      const v = dicts[lang][k];
      return typeof v === "string" ? v : k;
    },
    tList: (k) => {
      const v = dicts[lang][k];
      return Array.isArray(v) ? v : [];
    },
  }), [lang, dir]);

  return <I18nCtx.Provider value={value}>{children}</I18nCtx.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nCtx);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
