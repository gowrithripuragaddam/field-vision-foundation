import { createFileRoute } from "@tanstack/react-router";
import {  } from "lucide-react";
import { PlaceholderPage } from "@/components/common/PlaceholderPage";

export const Route = createFileRoute("/_app/profile")({
  head: () => ({
    meta: [
      { title: "Profile — SmartAgri AI" },
      { name: "description", content: "Your farmer profile and account preferences." },
      { property: "og:title", content: "Profile — SmartAgri AI" },
      { property: "og:description", content: "Your farmer profile and account preferences." },
    ],
  }),
  component: () => <PlaceholderPage title="Profile" description="Your farmer profile and account preferences." icon={} />,
});
