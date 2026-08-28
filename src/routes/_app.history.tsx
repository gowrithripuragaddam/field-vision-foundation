import { createFileRoute } from "@tanstack/react-router";
import { History } from "lucide-react";
import { PlaceholderPage } from "@/components/common/PlaceholderPage";

export const Route = createFileRoute("/_app/history")({
  head: () => ({
    meta: [
      { title: "History — SmartAgri AI" },
      { name: "description", content: "Past scans, advisories and farm activity records." },
      { property: "og:title", content: "History — SmartAgri AI" },
      { property: "og:description", content: "Past scans, advisories and farm activity records." },
    ],
  }),
  component: () => <PlaceholderPage title="History" description="Past scans, advisories and farm activity records." icon={History} />,
});
