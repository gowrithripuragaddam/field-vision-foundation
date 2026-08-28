import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage } from "@/pages/DashboardPage";

export const Route = createFileRoute("/_app/dashboard")({
  head: () => ({
    meta: [
      { title: "Farmer Dashboard — SmartAgri AI" },
      {
        name: "description",
        content: "Overview of crop health, weather, irrigation, soil health and alerts.",
      },
      { property: "og:title", content: "Farmer Dashboard — SmartAgri AI" },
      {
        property: "og:description",
        content: "Overview of crop health, weather, irrigation, soil health and alerts.",
      },
    ],
  }),
  component: DashboardPage,
});
