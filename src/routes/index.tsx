import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { ThemeProvider } from "@/lib/theme";
import Portfolio from "@/components/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elmahdi Tayar — Full-Stack Engineer · Scraping & AI Agents" },
      { name: "description", content: "Full-stack engineer based in Morocco. Laravel, React, Python, AI agents, industrial scraping, ERP systems." },
      { property: "og:title", content: "Elmahdi Tayar — TAYVR" },
      { property: "og:description", content: "Full-stack engineer building scraping pipelines, ERP systems, and AI-agent workflows." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <ThemeProvider>
      <I18nProvider>
        <Portfolio />
      </I18nProvider>
    </ThemeProvider>
  );
}
