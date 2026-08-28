import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Brand } from "@/components/layout/Brand";

export function NotFoundPage() {
  return (
    <div className="field-hero flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <Brand className="mb-8" />
      <p className="font-display text-6xl font-bold text-primary sm:text-7xl">404</p>
      <h1 className="mt-3 text-2xl font-bold sm:text-3xl">This field doesn&apos;t exist</h1>
      <p className="mt-3 max-w-md text-base text-muted-foreground sm:text-lg">
        The page you were looking for has moved or was never planted.
      </p>
      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <Button size="lg" asChild>
          <Link to="/">Back home</Link>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link to="/dashboard">Go to dashboard</Link>
        </Button>
      </div>
    </div>
  );
}
