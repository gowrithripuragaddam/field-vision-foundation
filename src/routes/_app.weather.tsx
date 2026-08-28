import { createFileRoute } from "@tanstack/react-router";
import { CloudSun } from "lucide-react";
import { PlaceholderPage } from "@/components/common/PlaceholderPage";

export const Route = createFileRoute("/_app/weather")({
  head: () => ({
    meta: [
      { title: "Weather — SmartAgri AI" },
      { name: "description", content: "Local weather and forecast-based farm advisories." },
      { property: "og:title", content: "Weather — SmartAgri AI" },
      { property: "og:description", content: "Local weather and forecast-based farm advisories." },
    ],
  }),
  component: () => (
    <PlaceholderPage
      title="Weather"
      description="Local weather and forecast-based farm advisories."
      icon={CloudSun}
    />
  ),
});
