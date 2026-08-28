import { Link } from "@tanstack/react-router";
import { Bot, CloudSun, Droplets, Leaf, Sprout, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Brand } from "@/components/layout/Brand";
import { StatusBadge } from "@/components/common/StatusBadge";

const FEATURES = [
  {
    icon: Stethoscope,
    title: "Crop Doctor",
    text: "Photograph a leaf and get a disease diagnosis with treatment steps.",
  },
  {
    icon: Leaf,
    title: "Crop Health",
    text: "Track field-by-field crop condition across the whole season.",
  },
  { icon: CloudSun, title: "Weather", text: "Local forecasts turned into simple farm actions." },
  { icon: Droplets, title: "Irrigation", text: "Know when and how much to water each plot." },
  { icon: Sprout, title: "Soil Health", text: "Nutrients, moisture and pH in plain language." },
  { icon: Bot, title: "AI Advisor", text: "Ask farming questions and get grounded answers." },
];

export function LandingPage() {
  return (
    <div className="min-h-screen">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5">
        <Brand />
        <div className="flex items-center gap-2">
          <Button variant="ghost" asChild>
            <Link to="/login">Log in</Link>
          </Button>
          <Button asChild>
            <Link to="/register">Get started</Link>
          </Button>
        </div>
      </header>

      <section className="field-hero px-4 py-14 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <StatusBadge tone="info">Foundation release</StatusBadge>
          <h1 className="mt-5 text-3xl font-bold leading-tight sm:text-5xl">
            Healthier crops, simpler decisions
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            SmartAgri AI will help farmers spot crop disease early and get clear advice on weather,
            irrigation and soil — all in one place.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button variant="hero" size="xl" asChild>
              <Link to="/register">Create an account</Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/dashboard">View dashboard</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="text-2xl font-bold sm:text-3xl">Modules planned for this system</h2>
        <p className="mt-2 text-base text-muted-foreground">
          The interface is ready. Each module will be built in the next steps.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, text }) => (
            <article key={title} className="surface-card p-6">
              <span className="flex size-12 items-center justify-center rounded-xl bg-primary-soft">
                <Icon className="size-6 text-primary" aria-hidden />
              </span>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-base text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-border px-4 py-8">
        <p className="mx-auto max-w-6xl text-sm text-muted-foreground">
          SmartAgri AI — hackathon project foundation.
        </p>
      </footer>
    </div>
  );
}
