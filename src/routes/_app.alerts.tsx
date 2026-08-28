import { createFileRoute } from "@tanstack/react-router";
import { TriangleAlert } from "lucide-react";
import { PlaceholderPage } from "@/components/common/PlaceholderPage";

export const Route = createFileRoute("/_app/alerts")({
  head: () => ({
    meta: [
      { title: "Alerts — SmartAgri AI" },
      { name: "description", content: "Disease, pest and weather alerts for your farm." },
      { property: "og:title", content: "Alerts — SmartAgri AI" },
      { property: "og:description", content: "Disease, pest and weather alerts for your farm." },
    ],
  }),
  component: () => (
    <PlaceholderPage
      title="Alerts"
      description="Disease, pest and weather alerts for your farm."
      icon={TriangleAlert}
    />
  ),
});
