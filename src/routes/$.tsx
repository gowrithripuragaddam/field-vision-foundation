import { createFileRoute } from "@tanstack/react-router";
import { NotFoundPage } from "@/pages/NotFoundPage";

export const Route = createFileRoute("/$")({
  head: () => ({
    meta: [
      { title: "Page not found — SmartAgri AI" },
      { name: "description", content: "This SmartAgri AI page could not be found." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Page not found — SmartAgri AI" },
      { property: "og:description", content: "This SmartAgri AI page could not be found." },
    ],
  }),
  component: NotFoundPage,
});
