import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DxzxYrWy.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var LANGS = [
	{
		code: "en",
		label: "EN",
		native: "English"
	},
	{
		code: "fr",
		label: "FR",
		native: "Français"
	},
	{
		code: "es",
		label: "ES",
		native: "Español"
	},
	{
		code: "ar",
		label: "AR",
		native: "العربية"
	}
];
var dicts = {
	en: {
		nav_about: "About",
		nav_stack: "Stack",
		nav_work: "Work",
		nav_experience: "Experience",
		nav_contact: "Contact",
		hero_status: "Available for senior contracts · Q1 2026",
		hero_role: "Full-stack engineer building scraping, ERP, and AI-agent systems",
		hero_intro: "I design and ship production systems end-to-end — from UML to a VPS handling traffic at 3am. 3 years of Laravel, React, and Python; the last two writing autonomous agents that replace whole workflows.",
		hero_cta_work: "See selected work",
		hero_cta_contact: "Start a project",
		stat_years: "years shipping",
		stat_projects: "projects delivered",
		stat_tech: "technologies in rotation",
		stat_clients: "happy clients",
		section_about: "About",
		about_kicker: "// who",
		about_body: "Based in Kénitra, Morocco. I work where business logic gets messy: religious-travel ERPs, real-time gaming-currency marketplaces, multi-portal school systems. My favorite problems are the ones that need scraping at scale on Monday and a clean admin UI by Friday.",
		about_focus: "Currently focused on:",
		about_f1: "AI agents that own a workflow, not just a prompt",
		about_f2: "Industrial-grade scraping with Playwright + queues",
		about_f3: "ERPs that survive five years of feature drift",
		about_learning: "Currently learning Java + Spring Boot — beginner, building toward backend interop with JVM-heavy enterprise stacks.",
		section_stack: "Stack",
		stack_kicker: "// tools",
		g_frontend: "Frontend",
		g_backend: "Backend & languages",
		g_data: "Data",
		g_ai: "AI · automation · scraping",
		learning_badge: "learning",
		section_work: "Selected work",
		work_kicker: "// builds",
		work_view: "Visit",
		work_private: "Private",
		section_experience: "Experience",
		experience_kicker: "// timeline",
		section_contact: "Contact",
		contact_kicker: "// reach",
		contact_lead: "Best for: full-stack builds, scraping pipelines, AI-agent workflows, ERP rescues.",
		contact_email: "Email",
		contact_whatsapp: "WhatsApp",
		contact_github: "GitHub",
		contact_linkedin: "LinkedIn",
		contact_location: "Based in",
		footer_built: "Built in Morocco — Laravel, React, late espresso.",
		theme_label: "Theme",
		lang_label: "Language",
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
			"E-commerce, real-time inventory, booking, and a medical (eSanté) platform."
		],
		r_aptiv_role: "Full-Stack Developer Intern",
		r_aptiv_bullets: ["Built a robust C# desktop app with SQL Server backend.", "Full system modeling via UML, end-to-end."]
	},
	fr: {
		nav_about: "Profil",
		nav_stack: "Stack",
		nav_work: "Réalisations",
		nav_experience: "Parcours",
		nav_contact: "Contact",
		hero_status: "Disponible pour missions seniors · T1 2026",
		hero_role: "Ingénieur full-stack — scraping, ERP, agents IA",
		hero_intro: "Je conçois et livre des systèmes de bout en bout — du modèle UML jusqu'au VPS qui encaisse le trafic à 3h du matin. 3 ans de Laravel, React et Python ; les deux dernières années à écrire des agents autonomes qui remplacent des workflows entiers.",
		hero_cta_work: "Voir les projets",
		hero_cta_contact: "Démarrer un projet",
		stat_years: "ans en production",
		stat_projects: "projets livrés",
		stat_tech: "technologies en rotation",
		stat_clients: "clients satisfaits",
		section_about: "À propos",
		about_kicker: "// qui",
		about_body: "Basé à Kénitra, Maroc. J'interviens là où la logique métier devient dense : ERP pour agences Hajj & Omra, marketplaces temps réel, systèmes scolaires multi-portails. Mes problèmes préférés combinent du scraping à grande échelle le lundi et une interface admin propre le vendredi.",
		about_focus: "En ce moment :",
		about_f1: "Agents IA qui possèdent un workflow, pas juste un prompt",
		about_f2: "Scraping industriel avec Playwright + files de messages",
		about_f3: "ERP qui tiennent cinq ans de dérive fonctionnelle",
		about_learning: "Actuellement en apprentissage : Java + Spring Boot — débutant, en vue d'interop backend avec des stacks JVM en entreprise.",
		section_stack: "Stack",
		stack_kicker: "// outils",
		g_frontend: "Frontend",
		g_backend: "Backend & langages",
		g_data: "Données",
		g_ai: "IA · automatisation · scraping",
		learning_badge: "en apprentissage",
		section_work: "Réalisations",
		work_kicker: "// projets",
		work_view: "Voir",
		work_private: "Privé",
		section_experience: "Parcours",
		experience_kicker: "// timeline",
		section_contact: "Contact",
		contact_kicker: "// joindre",
		contact_lead: "Pour : développements full-stack, pipelines de scraping, agents IA, sauvetages d'ERP.",
		contact_email: "E-mail",
		contact_whatsapp: "WhatsApp",
		contact_github: "GitHub",
		contact_linkedin: "LinkedIn",
		contact_location: "Basé à",
		footer_built: "Construit au Maroc — Laravel, React, expresso tardif.",
		theme_label: "Thème",
		lang_label: "Langue",
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
			"E-commerce, inventaire temps réel, booking, plateforme médicale (eSanté)."
		],
		r_aptiv_role: "Stagiaire Développeur Full-Stack",
		r_aptiv_bullets: ["Application desktop C# robuste avec backend SQL Server.", "Modélisation complète du système en UML, de bout en bout."]
	},
	es: {
		nav_about: "Perfil",
		nav_stack: "Stack",
		nav_work: "Trabajos",
		nav_experience: "Trayectoria",
		nav_contact: "Contacto",
		hero_status: "Disponible para contratos senior · T1 2026",
		hero_role: "Ingeniero full-stack — scraping, ERP y agentes de IA",
		hero_intro: "Diseño y entrego sistemas de extremo a extremo — desde UML hasta un VPS aguantando tráfico a las 3am. 3 años de Laravel, React y Python; los dos últimos escribiendo agentes autónomos que reemplazan flujos enteros.",
		hero_cta_work: "Ver proyectos",
		hero_cta_contact: "Iniciar un proyecto",
		stat_years: "años en producción",
		stat_projects: "proyectos entregados",
		stat_tech: "tecnologías en rotación",
		stat_clients: "clientes satisfechos",
		section_about: "Sobre mí",
		about_kicker: "// quién",
		about_body: "Con base en Kénitra, Marruecos. Trabajo donde la lógica de negocio se complica: ERPs para viajes religiosos, mercados de divisas virtuales en tiempo real, sistemas escolares multi-portal. Mis problemas favoritos requieren scraping a escala el lunes y un panel admin limpio el viernes.",
		about_focus: "Actualmente enfocado en:",
		about_f1: "Agentes de IA que poseen un flujo completo, no solo un prompt",
		about_f2: "Scraping industrial con Playwright + colas",
		about_f3: "ERPs que sobreviven cinco años de cambios",
		about_learning: "Aprendiendo Java + Spring Boot — principiante, apuntando a interoperar con stacks JVM empresariales.",
		section_stack: "Stack",
		stack_kicker: "// herramientas",
		g_frontend: "Frontend",
		g_backend: "Backend y lenguajes",
		g_data: "Datos",
		g_ai: "IA · automatización · scraping",
		learning_badge: "aprendiendo",
		section_work: "Trabajos seleccionados",
		work_kicker: "// builds",
		work_view: "Visitar",
		work_private: "Privado",
		section_experience: "Trayectoria",
		experience_kicker: "// timeline",
		section_contact: "Contacto",
		contact_kicker: "// contactar",
		contact_lead: "Ideal para: desarrollos full-stack, pipelines de scraping, agentes de IA, rescate de ERPs.",
		contact_email: "Correo",
		contact_whatsapp: "WhatsApp",
		contact_github: "GitHub",
		contact_linkedin: "LinkedIn",
		contact_location: "Ubicado en",
		footer_built: "Hecho en Marruecos — Laravel, React, café tarde.",
		theme_label: "Tema",
		lang_label: "Idioma",
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
			"E-commerce, inventario en tiempo real, reservas, plataforma médica (eSanté)."
		],
		r_aptiv_role: "Becario Desarrollador Full-Stack",
		r_aptiv_bullets: ["Aplicación desktop robusta en C# con backend SQL Server.", "Modelado completo del sistema en UML, de principio a fin."]
	},
	ar: {
		nav_about: "من أنا",
		nav_stack: "تقنياتي",
		nav_work: "أعمالي",
		nav_experience: "المسار",
		nav_contact: "تواصل",
		hero_status: "متاح لعقود Senior · الربع الأول 2026",
		hero_role: "مهندس Full-Stack — متخصص في Scraping، أنظمة ERP، و AI Agents",
		hero_intro: "أقوم بتصميم وتطوير أنظمة متكاملة من الصفر — من نمذجة UML وحتى خادم VPS يعمل على مدار الساعة. لدي 3 سنوات من الخبرة في Laravel و React و Python؛ ركزت في العامين الأخيرين على بناء وكلاء ذكاء اصطناعي (Agents) يقومون بأتمتة سير العمل بالكامل.",
		hero_cta_work: "شاهد أعمالي",
		hero_cta_contact: "ابدأ مشروعاً جديداً",
		stat_years: "سنوات خبرة",
		stat_projects: "مشروع منجز",
		stat_tech: "تقنية مستخدمة",
		stat_clients: "عميل راضٍ",
		section_about: "من أنا",
		about_kicker: "// من",
		about_body: "أعمل من مدينة القنيطرة بالمغرب. أتخصص في المشاريع ذات المنطق البرمجي المعقد: مثل أنظمة ERP للحج والعمرة، وأسواق العملات الرقمية في الألعاب، والأنظمة المدرسية. أفضل التحديات هي التي تتطلب Scraping ضخم يوم الاثنين، ولوحة تحكم احترافية بحلول الجمعة.",
		about_focus: "مركز حالياً على:",
		about_f1: "وكلاء ذكاء اصطناعي يديرون سير عمل كاملاً، وليس مجرد دردشة",
		about_f2: "كشط بيانات (Scraping) احترافي باستخدام Playwright",
		about_f3: "أنظمة ERP قوية تصمد أمام التغييرات لسنوات",
		about_learning: "أتعلم حالياً: Java + Spring Boot — أطور مهاراتي للعمل على مشاريع برمجية كبرى لمستوى الشركات (Enterprise).",
		section_stack: "التقنيات",
		stack_kicker: "// الأدوات",
		g_frontend: "الواجهة (Frontend)",
		g_backend: "الخادم (Backend)",
		g_data: "البيانات",
		g_ai: "ذكاء · أتمتة · Scraping",
		learning_badge: "قيد التعلم",
		section_work: "أعمال مختارة",
		work_kicker: "// ماذا بنيت",
		work_view: "زيارة الموقع",
		work_private: "مشروع خاص",
		section_experience: "المسار المهني",
		experience_kicker: "// الخط الزمني",
		section_contact: "تواصل معي",
		contact_kicker: "// تواصل",
		contact_lead: "متاح لـ: بناء تطبيقات متكاملة، خطوط كشط البيانات، وكلاء AI، وحلول أنظمة ERP.",
		contact_email: "البريد الإلكتروني",
		contact_whatsapp: "واتساب",
		contact_github: "GitHub",
		contact_linkedin: "LinkedIn",
		contact_location: "المقر الرئيسي",
		footer_built: "صُنع في المغرب — باستخدام Laravel و React وقهوة المساء.",
		theme_label: "المظهر",
		lang_label: "اللغة",
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
			"مشاريع تجارة إلكترونية، أنظمة مخزون، ومنصات طبية (eSanté)."
		],
		r_aptiv_role: "متدرب مطور Full-Stack",
		r_aptiv_bullets: ["بناء تطبيق سطح مكتب باستخدام C# وقاعدة بيانات SQL Server.", "نمذجة كاملة للنظام باستخدام UML من البداية حتى النهاية."]
	}
};
var I18nCtx = (0, import_react.createContext)(null);
function I18nProvider({ children }) {
	const [lang, setLangState] = (0, import_react.useState)("en");
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setMounted(true);
		const saved = window.localStorage.getItem("lang");
		if (saved && dicts[saved]) setLangState(saved);
		else {
			const nav = window.navigator.language.slice(0, 2);
			if (dicts[nav]) setLangState(nav);
		}
	}, []);
	const dir = lang === "ar" ? "rtl" : "ltr";
	(0, import_react.useEffect)(() => {
		if (!mounted) return;
		document.documentElement.lang = lang;
		document.documentElement.dir = dir;
		window.localStorage.setItem("lang", lang);
	}, [
		lang,
		dir,
		mounted
	]);
	const value = (0, import_react.useMemo)(() => ({
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
		}
	}), [lang, dir]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I18nCtx.Provider, {
		value,
		children
	});
}
function useI18n() {
	const ctx = (0, import_react.useContext)(I18nCtx);
	if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
	return ctx;
}
var ThemeCtx = (0, import_react.createContext)(null);
function ThemeProvider({ children }) {
	const [theme, setTheme] = (0, import_react.useState)(() => {
		if (typeof window === "undefined") return "dark";
		const saved = window.localStorage.getItem("theme");
		if (saved) return saved;
		return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
	});
	(0, import_react.useEffect)(() => {
		document.documentElement.classList.toggle("dark", theme === "dark");
		window.localStorage.setItem("theme", theme);
	}, [theme]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeCtx.Provider, {
		value: {
			theme,
			toggle: () => setTheme((t) => t === "dark" ? "light" : "dark")
		},
		children
	});
}
function useTheme() {
	const ctx = (0, import_react.useContext)(ThemeCtx);
	if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
	return ctx;
}
var profile = {
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
		clients: "30+"
	}
};
var projects = [
	{
		id: "masterfut",
		name: "MasterFut",
		tagKey: "p_masterfut_tag",
		descKey: "p_masterfut_desc",
		url: "https://masterfut.com",
		stack: [
			"Laravel",
			"React",
			"MySQL",
			"Stripe",
			"PayPal"
		],
		year: "2024"
	},
	{
		id: "ka3ba",
		name: "Ka3ba",
		tagKey: "p_ka3ba_tag",
		descKey: "p_ka3ba_desc",
		url: "https://ka3ba.com",
		stack: [
			"Next.js",
			"Laravel",
			"MySQL",
			"LLM"
		],
		year: "2024"
	},
	{
		id: "almoulate",
		name: "Almoulate Immobilier",
		tagKey: "p_almoulate_tag",
		descKey: "p_almoulate_desc",
		stack: [
			"Laravel",
			"Livewire",
			"MySQL"
		],
		year: "2023"
	},
	{
		id: "aligarage",
		name: "AliGarage",
		tagKey: "p_aligarage_tag",
		descKey: "p_aligarage_desc",
		stack: [
			"Vue.js",
			"Laravel",
			"SQL Server"
		],
		year: "2023"
	},
	{
		id: "smile",
		name: "SmileBusiness",
		tagKey: "p_smile_tag",
		descKey: "p_smile_desc",
		url: "https://smilebusiness.ma",
		stack: [
			"Laravel",
			"MySQL",
			"CMS"
		],
		year: "2023"
	},
	{
		id: "school",
		name: "SchoolSystem",
		tagKey: "p_school_tag",
		descKey: "p_school_desc",
		stack: [
			"Laravel",
			"MySQL",
			"REST API"
		],
		year: "2022"
	},
	{
		id: "codev",
		name: "CodeVentures",
		tagKey: "p_codev_tag",
		descKey: "p_codev_desc",
		stack: [
			"React",
			"Laravel",
			"AI"
		],
		year: "2024"
	},
	{
		id: "solo",
		name: "Solo Gym",
		tagKey: "p_solo_tag",
		descKey: "p_solo_desc",
		stack: ["Godot Engine"],
		year: "2025"
	},
	{
		id: "shorts",
		name: "YouTube Shorts Bot",
		tagKey: "p_shorts_tag",
		descKey: "p_shorts_desc",
		stack: ["Python", "GitHub Actions"],
		year: "2024"
	}
];
var stack = [
	{
		titleKey: "g_frontend",
		items: [
			{
				name: "React.js",
				level: "95"
			},
			{
				name: "Next.js",
				level: "90"
			},
			{
				name: "TypeScript",
				level: "88"
			},
			{
				name: "Vue.js",
				level: "85"
			},
			{
				name: "Tailwind CSS",
				level: "95"
			},
			{
				name: "Flutter",
				level: "70"
			}
		]
	},
	{
		titleKey: "g_backend",
		items: [
			{
				name: "Laravel / PHP",
				level: "95"
			},
			{
				name: "Node.js / Express",
				level: "85"
			},
			{
				name: "Django / Python",
				level: "75"
			},
			{
				name: "C#",
				level: "70"
			},
			{
				name: "Java",
				learning: true
			},
			{
				name: "Spring Boot",
				learning: true
			}
		]
	},
	{
		titleKey: "g_data",
		items: [
			{
				name: "MySQL",
				level: "92"
			},
			{
				name: "PostgreSQL",
				level: "85"
			},
			{
				name: "MongoDB",
				level: "80"
			},
			{
				name: "SQL Server",
				level: "78"
			},
			{
				name: "Redis",
				level: "75"
			}
		]
	},
	{
		titleKey: "g_ai",
		items: [
			{
				name: "n8n",
				level: "90"
			},
			{
				name: "LangChain",
				level: "82"
			},
			{
				name: "Playwright",
				level: "90"
			},
			{
				name: "BeautifulSoup / Scrapy",
				level: "88"
			},
			{
				name: "OpenRouter / Gemini",
				level: "85"
			}
		]
	}
];
var experience = [{
	role: "r_zoom_role",
	company: "Zoominmedia",
	place: "Kénitra, Morocco",
	period: "Dec 2023 — May 2026",
	bulletsKey: "r_zoom_bullets"
}, {
	role: "r_aptiv_role",
	company: "APTIV",
	place: "Morocco",
	period: "2023",
	bulletsKey: "r_aptiv_bullets"
}];
function Nav() {
	const { t, lang, setLang, dir } = useI18n();
	const { theme, toggle } = useTheme();
	const [open, setOpen] = (0, import_react.useState)(false);
	const links = [
		{
			href: "#about",
			label: t("nav_about")
		},
		{
			href: "#stack",
			label: t("nav_stack")
		},
		{
			href: "#work",
			label: t("nav_work")
		},
		{
			href: "#experience",
			label: t("nav_experience")
		},
		{
			href: "#contact",
			label: t("nav_contact")
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-line",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 sm:px-8 h-14 flex items-center justify-between gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "mono font-bold tracking-wider text-sm shrink-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: "<"
						}),
						"TAYVR",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: "/>"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden md:flex items-center gap-1 mono text-[12px]",
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: "px-3 py-1.5 rounded text-muted-foreground hover:text-foreground hover:bg-secondary transition",
						children: l.label
					}, l.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							"aria-label": t("lang_label"),
							value: lang,
							onChange: (e) => setLang(e.target.value),
							className: "mono text-[11px] bg-transparent hairline rounded px-2 py-1.5 hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring",
							children: LANGS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
								value: l.code,
								className: "bg-background",
								children: [
									l.label,
									" · ",
									l.native
								]
							}, l.code))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: toggle,
							"aria-label": t("theme_label"),
							className: "mono text-[11px] hairline rounded px-2 py-1.5 hover:bg-secondary",
							children: theme === "dark" ? "☀ LIGHT" : "☾ DARK"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setOpen((v) => !v),
							"aria-label": "Menu",
							className: "md:hidden mono text-[11px] hairline rounded px-2 py-1.5",
							children: open ? "✕" : "≡"
						})
					]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "md:hidden border-t border-line bg-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "mx-auto max-w-6xl px-5 py-3 flex flex-col gap-1 mono text-sm",
				dir,
				children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: l.href,
					onClick: () => setOpen(false),
					className: "px-3 py-2 rounded hover:bg-secondary",
					children: l.label
				}, l.href))
			})
		})]
	});
}
function Ticker() {
	const items = [
		"Laravel",
		"React",
		"Next.js",
		"TypeScript",
		"Python",
		"Playwright",
		"n8n",
		"LangChain",
		"PostgreSQL",
		"Redis",
		"Docker",
		"Vue.js",
		"Flutter",
		"Java · learning",
		"Spring Boot · learning"
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "border-y border-line py-3 overflow-hidden bg-card/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "ticker flex gap-8 whitespace-nowrap mono text-[11px] tracking-widest uppercase text-muted-foreground",
			style: { width: "max-content" },
			children: [...items, ...items].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: s }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-primary",
					children: "◆"
				})]
			}, i))
		})
	});
}
function Hero() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative scan-line",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": true,
			className: "absolute inset-0 grid-bg opacity-40 pointer-events-none"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-6xl px-5 sm:px-8 pt-14 sm:pt-20 pb-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden lg:block absolute top-1/2 -translate-y-1/2 ltr:right-0 rtl:left-0 h-[600px] w-auto pointer-events-none",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
						src: "/character-alpha.webm",
						autoPlay: true,
						loop: true,
						muted: true,
						playsInline: true,
						"aria-hidden": true,
						className: "h-full w-auto ltr:scale-x-100 rtl:-scale-x-100"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 mb-8 mono text-[11px] uppercase tracking-widest",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block size-1.5 rounded-full bg-acid animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground",
						children: t("hero_status")
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mono text-muted-foreground text-xs mb-3",
					children: "/* identity */"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "font-sans font-black tracking-tight leading-[0.95] text-5xl sm:text-7xl lg:text-8xl",
					children: ["Elmahdi ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-primary",
						children: "Tayar"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mono text-sm sm:text-base mt-4 text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: "$"
						}),
						" whoami ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "caret" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-2xl text-lg sm:text-xl leading-relaxed",
					children: t("hero_role")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-sm sm:text-base text-muted-foreground leading-relaxed",
					children: t("hero_intro")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#work",
						className: "mono text-xs uppercase tracking-widest px-5 py-3 rounded bg-primary text-primary-foreground hover:opacity-90 transition",
						children: ["→ ", t("hero_cta_work")]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#contact",
						className: "mono text-xs uppercase tracking-widest px-5 py-3 rounded hairline hover:bg-secondary transition",
						children: t("hero_cta_contact")
					})]
				})
			]
		})]
	});
}
function Stats() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-y border-line bg-card/30",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl px-5 sm:px-8 grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-line",
			children: [
				{
					k: profile.stats.years,
					l: t("stat_years")
				},
				{
					k: profile.stats.projects,
					l: t("stat_projects")
				},
				{
					k: profile.stats.technologies,
					l: t("stat_tech")
				},
				{
					k: profile.stats.clients,
					l: t("stat_clients")
				}
			].map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-6 sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2",
						children: [
							"0",
							i + 1,
							" / 04"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mono text-4xl sm:text-5xl font-bold",
						children: it.k
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 text-xs sm:text-sm text-muted-foreground",
						children: it.l
					})
				]
			}, i))
		})
	});
}
function SectionHeader({ kicker, title }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex items-end justify-between gap-6 mb-10 pb-4 border-b border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "eyebrow",
			children: kicker
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-2 text-3xl sm:text-4xl font-black tracking-tight",
			children: title
		})] })
	});
}
function About() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "about",
		className: "mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
			kicker: t("about_kicker"),
			title: t("section_about")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid lg:grid-cols-5 gap-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-3 space-y-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lg leading-relaxed",
					children: t("about_body")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mono text-xs uppercase tracking-widest text-muted-foreground mb-3",
					children: t("about_focus")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-2",
					children: [
						t("about_f1"),
						t("about_f2"),
						t("about_f3")
					].map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3 text-base",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mono text-primary shrink-0",
							children: "→"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: line })]
					}, i))
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "lg:col-span-2 hairline rounded-lg p-5 bg-card/60 mono text-[12px] leading-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-muted-foreground",
						children: "# learning.log"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2",
						children: t("about_learning")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 text-muted-foreground",
						children: "# env"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						"location ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: "="
						}),
						" \"",
						profile.location,
						"\""
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						"email    ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: "="
						}),
						" \"",
						profile.email,
						"\""
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						"phone    ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: "="
						}),
						" \"",
						profile.phone,
						"\""
					] })
				]
			})]
		})]
	});
}
function Stack() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "stack",
		className: "border-t border-line bg-card/20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				kicker: t("stack_kicker"),
				title: t("section_stack")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid sm:grid-cols-2 gap-px bg-line hairline rounded-lg overflow-hidden",
				children: stack.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-background p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mono text-[11px] uppercase tracking-widest text-primary mb-4",
						children: t(g.titleKey)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-2.5",
						children: g.items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center justify-between gap-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mono text-muted-foreground text-xs",
										children: "▸"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: it.name }),
									it.learning && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mono text-[9px] uppercase tracking-widest px-1.5 py-0.5 rounded bg-acid/20 text-foreground border border-acid/40",
										children: t("learning_badge")
									})
								]
							}), it.level && !it.learning && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden sm:block h-1 w-24 rounded-full bg-secondary overflow-hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block h-full bg-primary",
										style: { width: `${it.level}%` }
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mono text-[11px] text-muted-foreground tabular-nums w-8 text-right",
									children: it.level
								})]
							})]
						}, it.name))
					})]
				}, g.titleKey))
			})]
		})
	});
}
function Work() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "work",
		className: "mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
			kicker: t("work_kicker"),
			title: t("section_work")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid md:grid-cols-2 gap-5",
			children: projects.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "group hairline rounded-lg p-6 bg-card hover:border-primary/60 transition relative overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute top-0 ltr:right-0 rtl:left-0 mono text-[10px] uppercase tracking-widest text-muted-foreground px-3 py-1.5 border-b border-line ltr:border-l rtl:border-r",
						children: [
							String(i + 1).padStart(2, "0"),
							" / ",
							String(projects.length).padStart(2, "0")
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mono text-[11px] uppercase tracking-widest text-primary mt-4",
						children: t(p.tagKey)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-2 text-2xl font-bold tracking-tight",
						children: p.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted-foreground leading-relaxed",
						children: t(p.descKey)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 flex flex-wrap gap-1.5",
						children: p.stack.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "chip",
							children: s
						}, s))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex items-center justify-between mono text-[11px] uppercase tracking-widest",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: p.year
						}), p.url ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: p.url,
							target: "_blank",
							rel: "noreferrer",
							className: "text-primary hover:underline",
							children: [t("work_view"), " ↗"]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: t("work_private")
						})]
					})
				]
			}, p.id))
		})]
	});
}
function Experience() {
	const { t, tList } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "experience",
		className: "border-t border-line bg-card/20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				kicker: t("experience_kicker"),
				title: t("section_experience")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-px bg-line hairline rounded-lg overflow-hidden",
				children: experience.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-background p-6 sm:p-8 grid md:grid-cols-[180px_1fr] gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mono text-[12px] text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-foreground",
							children: e.period
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1",
							children: e.place
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mono text-[11px] uppercase tracking-widest text-primary",
							children: e.company
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-1 text-xl font-bold",
							children: t(e.role)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-2",
							children: tList(e.bulletsKey).map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mono text-primary shrink-0",
									children: "·"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: b
								})]
							}, i))
						})
					] })]
				}, e.company))
			})]
		})
	});
}
function Contact() {
	const { t } = useI18n();
	const wa = profile.phone.replace(/[^0-9]/g, "");
	const items = [
		{
			k: t("contact_email"),
			v: profile.email,
			href: `mailto:${profile.email}`
		},
		{
			k: t("contact_whatsapp"),
			v: profile.phone,
			href: `https://wa.me/${wa}`
		},
		{
			k: t("contact_github"),
			v: "github.com/TAYVR",
			href: profile.github
		},
		{
			k: t("contact_linkedin"),
			v: "linkedin.com/in/tayvr",
			href: profile.linkedin
		},
		{
			k: t("contact_location"),
			v: profile.location
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "contact",
		className: "mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				kicker: t("contact_kicker"),
				title: t("section_contact")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-lg max-w-2xl mb-10",
				children: t("contact_lead")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hairline rounded-lg divide-y divide-line",
				children: items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-[minmax(0,1fr)_auto] sm:grid-cols-[220px_1fr] items-center gap-4 p-5 hover:bg-card/60 transition",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mono text-[11px] uppercase tracking-widest text-muted-foreground",
						children: it.k
					}), it.href ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: it.href,
						target: it.href.startsWith("http") ? "_blank" : void 0,
						rel: "noreferrer",
						className: "mono text-sm sm:text-base text-foreground hover:text-primary truncate text-right sm:text-left",
						children: [
							it.v,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "↗"
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mono text-sm sm:text-base truncate text-right sm:text-left",
						children: it.v
					})]
				}, it.k))
			})
		]
	});
}
function Footer() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 mono text-[11px] uppercase tracking-widest text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" · ELMAHDI TAYAR"
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("footer_built") })]
		})
	});
}
function Portfolio() {
	(0, import_react.useEffect)(() => {
		document.documentElement.style.scrollBehavior = "smooth";
		return () => {
			document.documentElement.style.scrollBehavior = "";
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ticker, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stats, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stack, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Work, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experience, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I18nProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portfolio, {}) }) });
}
//#endregion
export { Index as component };
