import { createFileRoute } from "@tanstack/react-router";
import { Tractor } from "lucide-react";
import { PlaceholderPage } from "@/components/common/PlaceholderPage";

export const Route = createFileRoute("/_app/farm")({
  head: () => ({
    meta: [
      { title: "My Farm — SmartAgri AI" },
      { name: "description", content: "Manage your plots, crops and seasons in one place." },
      { property: "og:title", content: "My Farm — SmartAgri AI" },
      { property: "og:description", content: "Manage your plots, crops and seasons in one place." },
    ],
  }),
  component: () => (
    <PlaceholderPage
      title="My Farm"
      description="Manage your plots, crops and seasons in one place."
      icon={Tractor}
    />
  ),
});
