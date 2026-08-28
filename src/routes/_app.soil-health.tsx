import { createFileRoute } from "@tanstack/react-router";
import { Sprout } from "lucide-react";
import { PlaceholderPage } from "@/components/common/PlaceholderPage";

export const Route = createFileRoute("/_app/soil-health")({
  head: () => ({
    meta: [
      { title: "Soil Health — SmartAgri AI" },
      { name: "description", content: "Soil nutrients, moisture and pH insights for your land." },
      { property: "og:title", content: "Soil Health — SmartAgri AI" },
      {
        property: "og:description",
        content: "Soil nutrients, moisture and pH insights for your land.",
      },
    ],
  }),
  component: () => (
    <PlaceholderPage
      title="Soil Health"
      description="Soil nutrients, moisture and pH insights for your land."
      icon={Sprout}
    />
  ),
});
