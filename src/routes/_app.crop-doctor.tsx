import { createFileRoute } from "@tanstack/react-router";
import { Stethoscope } from "lucide-react";
import { PlaceholderPage } from "@/components/common/PlaceholderPage";

export const Route = createFileRoute("/_app/crop-doctor")({
  head: () => ({
    meta: [
      { title: "Crop Doctor — SmartAgri AI" },
      { name: "description", content: "Upload a crop photo to diagnose diseases and get treatment guidance." },
      { property: "og:title", content: "Crop Doctor — SmartAgri AI" },
      { property: "og:description", content: "Upload a crop photo to diagnose diseases and get treatment guidance." },
    ],
  }),
  component: () => <PlaceholderPage title="Crop Doctor" description="Upload a crop photo to diagnose diseases and get treatment guidance." icon={Stethoscope} />,
});
