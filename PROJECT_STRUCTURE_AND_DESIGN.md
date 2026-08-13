# TAYVR Portfolio — Project Structure & Design Specification

> **Developer & Author:** Elmahdi Tayar ([TAYVR](https://github.com/TAYVR))  
> **Tech Stack:** TanStack Start (SSR/Vite) • React 19 • TypeScript • Tailwind CSS v4 • Radix UI • Custom i18n (EN / FR / AR RTL)

---

## 📁 1. Project Directory Tree

Below is the complete file directory tree for `tayvr-portfolio`:

```text
tayvr-portfolio/
├── .gitignore                      # Git ignore configurations
├── package.json                    # Project metadata, dependencies, and NPM scripts
├── package-lock.json               # Locked dependency tree
├── tsconfig.json                   # TypeScript configuration
├── README.md                       # Default project README
│
├── public/                         # Static assets and media files
│   ├── favicon.ico                 # Site icon
│   ├── character-alpha.webm        # Transparent WebM interactive video hero asset
│   ├── character-green.mp4         # Fallback MP4 hero video asset
│   ├── appromoteur/                # Screenshots for Appromoteur project
│   │   ├── herro.png
│   │   ├── mobile.png
│   │   ├── logo1.png
│   │   ├── personaliser.png
│   │   └── selectProjet.png
│   ├── ka3ba/                      # Screenshots for Ka3ba project showcase
│   │   ├── localhost_3000_.png
│   │   ├── localhost_3000_ (1).png
│   │   ├── localhost_3000_ (2).png
│   │   ├── localhost_3000_ (3).png
│   │   ├── localhost_3000_ (5).png
│   │   ├── localhost_3000_ (6).png
│   │   └── localhost_3000_ (7).png
│   └── masterfut/                  # Screenshots for MasterFut project showcase
│       ├── www.masterfut.com_.png
│       ├── www.masterfut.com_ (1).png
│       ├── www.masterfut.com_ (2).png
│       ├── www.masterfut.com_ (4).png
│       ├── www.masterfut.com_ (5).png
│       ├── www.masterfut.com_ (6).png
│       ├── www.masterfut.com_ (7).png
│       └── localhost_3000_ (4).png
│
└── src/                            # Main application source code
    ├── routeTree.gen.ts            # Auto-generated route tree for TanStack Router
    ├── router.tsx                  # TanStack Router instance & configuration
    ├── server.ts                  # Server entry point for SSR / Nitro integration
    ├── start.ts                   # Client start entry point for TanStack Start
    ├── styles.css                 # Global CSS import & Tailwind CSS setup
    │
    ├── routes/                    # File-based router routes
    │   ├── __root.tsx             # Root layout component, HTML shell, meta tags, and error boundaries
    │   ├── index.tsx              # Home page route rendering the main Portfolio component
    │   └── README.md              # Router documentation
    │
    ├── components/                # Application React UI components
    │   ├── Portfolio.tsx          # Comprehensive single-page portfolio layout & interactive sections
    │   └── ui/                    # Reusable Radix UI & Shadcn-style UI primitives (46 components)
    │       ├── accordion.tsx
    │       ├── alert-dialog.tsx
    │       ├── alert.tsx
    │       ├── aspect-ratio.tsx
    │       ├── avatar.tsx
    │       ├── badge.tsx
    │       ├── breadcrumb.tsx
    │       ├── button.tsx
    │       ├── calendar.tsx
    │       ├── card.tsx
    │       ├── carousel.tsx
    │       ├── chart.tsx
    │       ├── checkbox.tsx
    │       ├── collapsible.tsx
    │       ├── command.tsx
    │       ├── context-menu.tsx
    │       ├── dialog.tsx
    │       ├── drawer.tsx
    │       ├── dropdown-menu.tsx
    │       ├── form.tsx
    │       ├── hover-card.tsx
    │       ├── input-otp.tsx
    │       ├── input.tsx
    │       ├── label.tsx
    │       ├── menubar.tsx
    │       ├── navigation-menu.tsx
    │       ├── pagination.tsx
    │       ├── popover.tsx
    │       ├── progress.tsx
    │       ├── radio-group.tsx
    │       ├── resizable.tsx
    │       ├── scroll-area.tsx
    │       ├── select.tsx
    │       ├── separator.tsx
    │       ├── sheet.tsx
    │       ├── sidebar.tsx
    │       ├── skeleton.tsx
    │       ├── slider.tsx
    │       ├── sonner.tsx
    │       ├── switch.tsx
    │       ├── table.tsx
    │       ├── tabs.tsx
    │       ├── textarea.tsx
    │       ├── toggle-group.tsx
    │       ├── toggle.tsx
    │       └── tooltip.tsx
    │
    ├── data/                      # Structured static content and dataset models
    │   └── portfolio.ts           # Profile bio, projects list, tech stack categories, and experience history
    │
    ├── hooks/                     # Custom React hooks
    │   └── use-mobile.tsx         # Hook for detecting mobile screen breakpoints
    │
    └── lib/                       # Utility libraries, context providers, & error handlers
        ├── error-capture.ts       # Global unhandled error & promise rejection capturer
        ├── error-page.ts          # Error rendering helper
        ├── i18n.tsx               # Multilingual translation dictionary & RTL context provider
        ├── lovable-error-reporting.ts # Telemetry error reporting utility
        ├── theme.tsx              # Dark/Light theme mode provider
        └── utils.ts               # Classname utility helper (`clsx` + `tailwind-merge`)
```

---

## 🎨 2. System Architecture & Design Specification

### 2.1 Framework & Rendering Stack
* **Framework:** **TanStack Start** (`@tanstack/react-start`) combined with **Vite 8** and **Nitro**.
* **Router:** **TanStack Router** (`@tanstack/react-router`) utilizing strict TypeScript file-based routing (`src/routes/__root.tsx` & `src/routes/index.tsx`).
* **State & Query Management:** **TanStack React Query** (`@tanstack/react-query`) initialized at the root route context.
* **Build System:** **Vite** with TSConfig path aliases (`@/*` mapping to `src/*`).

---

### 2.2 UI Design & Component System
* **Styling Framework:** **Tailwind CSS v4** (`@tailwindcss/vite`) with custom fonts loaded from Google Fonts (`Inter`, `JetBrains Mono`, `Cairo`).
* **Primitives Component Library:** Customized **Radix UI** primitives (`@radix-ui/react-*`) powering accessible, high-performance UI widgets inside `src/components/ui/`.
* **Icons:** **Lucide React** (`lucide-react`) for crisp visual icon representations throughout the portfolio.
* **Layout Structure:**
  1. **Header & Navigation:** Sticky blur header featuring quick navigation links, language selector dropdown, and live availability badge.
  2. **Hero Section:** Dynamic hero featuring headline text, interactive video character element (`character-alpha.webm`), contact buttons, and live experience metrics.
  3. **Projects Showcase:** Interactive card grid with tag filters, live website links, tech stack badges, and modal preview dialogs.
  4. **Tech Stack & Skills:** Skill grouping tabs (Frontend, Backend, Database/Data, AI/Automation) with proficiency progress indicators.
  5. **Experience Timeline:** Work history breakdown detailing role achievements and technology usage.
  6. **Contact & Footer:** Direct email/phone details, social media links (GitHub, LinkedIn), and copyright footer.

---

### 2.3 Internationalization (i18n) & Accessibility
* **Multilingual Support:** Full support for three languages:
  * **English (`en`)**: Default language layout.
  * **French (`fr`)**: Standard LTR layout.
  * **Arabic (`ar`)**: Full **RTL (Right-to-Left)** layout direction dynamically toggling the `dir="rtl"` attribute and applying font class `font-cairo`.
* **Context Provider:** `LanguageProvider` defined in `src/lib/i18n.tsx` maintaining active language state in `localStorage`.

---

### 2.4 Data Architecture
All content data is decoupled from the UI code and maintained in `src/data/portfolio.ts`:
* `profile`: Developer metadata (Name, alias, email, phone, location, GitHub, LinkedIn, stats).
* `projects`: Array of portfolio projects including stack tags, years, translation keys, and external URLs.
* `stack`: Categorized skill items (`g_frontend`, `g_backend`, `g_data`, `g_ai`).
* `experience`: Work experience history entries linked to translation keys.

---

### 2.5 Error Handling & Quality Assurance
* Root error boundary integrated inside `src/routes/__root.tsx` via `ErrorComponent` and `NotFoundComponent`.
* Unhandled runtime error capturing handled via `src/lib/error-capture.ts` and `src/lib/lovable-error-reporting.ts`.
