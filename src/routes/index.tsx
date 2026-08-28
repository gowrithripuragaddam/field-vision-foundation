import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/pages/LandingPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SmartAgri AI — Crop Disease & Farm Advisory" },
      {
        name: "description",
        content:
          "SmartAgri AI helps farmers detect crop disease early and get clear weather, irrigation and soil advice in one simple app.",
      },
      { property: "og:title", content: "SmartAgri AI — Crop Disease & Farm Advisory" },
      {
        property: "og:description",
        content:
          "Smart agriculture platform for crop disease detection and farm advisory. Foundation release.",
      },
    ],
  }),
  component: LandingPage,
});
