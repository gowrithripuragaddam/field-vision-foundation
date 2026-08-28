import { createFileRoute } from "@tanstack/react-router";
import { Droplets } from "lucide-react";
import { PlaceholderPage } from "@/components/common/PlaceholderPage";

export const Route = createFileRoute("/_app/irrigation")({
  head: () => ({
    meta: [
      { title: "Irrigation — SmartAgri AI" },
      { name: "description", content: "Smart watering schedules based on crop and soil needs." },
      { property: "og:title", content: "Irrigation — SmartAgri AI" },
      {
        property: "og:description",
        content: "Smart watering schedules based on crop and soil needs.",
      },
    ],
  }),
  component: () => (
    <PlaceholderPage
      title="Irrigation"
      description="Smart watering schedules based on crop and soil needs."
      icon={Droplets}
    />
  ),
});
