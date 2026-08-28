import { createFileRoute } from "@tanstack/react-router";
import { RegisterPage } from "@/pages/RegisterPage";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Create account — SmartAgri AI" },
      { name: "description", content: "Create a SmartAgri AI farmer account to get started." },
      { property: "og:title", content: "Create account — SmartAgri AI" },
      {
        property: "og:description",
        content: "Create a SmartAgri AI farmer account to get started.",
      },
    ],
  }),
  component: RegisterPage,
});
