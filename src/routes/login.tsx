import { createFileRoute } from "@tanstack/react-router";
import { LoginPage } from "@/pages/LoginPage";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Log in — SmartAgri AI" },
      { name: "description", content: "Sign in to your SmartAgri AI farmer account." },
      { property: "og:title", content: "Log in — SmartAgri AI" },
      { property: "og:description", content: "Sign in to your SmartAgri AI farmer account." },
    ],
  }),
  component: LoginPage,
});
