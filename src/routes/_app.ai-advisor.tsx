import { createFileRoute } from "@tanstack/react-router";
import { Bot } from "lucide-react";
import { PlaceholderPage } from "@/components/common/PlaceholderPage";

export const Route = createFileRoute("/_app/ai-advisor")({
  head: () => ({
    meta: [
      { title: "AI Advisor — SmartAgri AI" },
      { name: "description", content: "Ask farming questions and get grounded advisory answers." },
      { property: "og:title", content: "AI Advisor — SmartAgri AI" },
      { property: "og:description", content: "Ask farming questions and get grounded advisory answers." },
    ],
  }),
  component: () => <PlaceholderPage title="AI Advisor" description="Ask farming questions and get grounded advisory answers." icon={Bot} />,
});
