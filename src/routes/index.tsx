import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { ThemeProvider } from "@/lib/theme";
import LiquidGlassHero from "@/components/LiquidGlassHero";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Taskly — Work smarter, achieve faster" },
      { name: "description", content: "High-end task management for modern teams." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <ThemeProvider>
      <I18nProvider>
        <LiquidGlassHero />
      </I18nProvider>
    </ThemeProvider>
  );
}
