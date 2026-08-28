import { createFileRoute } from "@tanstack/react-router";
import { Bell } from "lucide-react";
import { PlaceholderPage } from "@/components/common/PlaceholderPage";

export const Route = createFileRoute("/_app/notifications")({
  head: () => ({
    meta: [
      { title: "Notifications — SmartAgri AI" },
      { name: "description", content: "Your SmartAgri AI notification centre." },
      { property: "og:title", content: "Notifications — SmartAgri AI" },
      { property: "og:description", content: "Your SmartAgri AI notification centre." },
    ],
  }),
  component: () => (
    <PlaceholderPage
      title="Notifications"
      description="Your SmartAgri AI notification centre."
      icon={Bell}
    />
  ),
});
