import { createFileRoute } from "@tanstack/react-router";
import { Leaf } from "lucide-react";
import { PlaceholderPage } from "@/components/common/PlaceholderPage";

export const Route = createFileRoute("/_app/crop-health")({
  head: () => ({
    meta: [
      { title: "Crop Health — SmartAgri AI" },
      { name: "description", content: "Track crop condition and growth across every field." },
      { property: "og:title", content: "Crop Health — SmartAgri AI" },
      { property: "og:description", content: "Track crop condition and growth across every field." },
    ],
  }),
  component: () => <PlaceholderPage title="Crop Health" description="Track crop condition and growth across every field." icon={Leaf} />,
});
