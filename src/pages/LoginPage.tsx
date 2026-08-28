import { Link } from "@tanstack/react-router";
import { AuthLayout } from "@/layouts/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginPage() {
  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to your SmartAgri AI account."
      footer={
        <span className="text-muted-foreground">
          New here?{" "}
          <Link to="/register" className="font-semibold text-primary hover:underline">
            Create an account
          </Link>
        </span>
      }
    >
      <form
        className="space-y-4"
        onSubmit={(event) => {
          // Authentication is not implemented in this foundation build.
          event.preventDefault();
        }}
      >
        <div className="space-y-2">
          <Label htmlFor="login-email" className="text-base">
            Email or phone
          </Label>
          <Input id="login-email" name="email" autoComplete="username" placeholder="you@farm.in" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="login-password" className="text-base">
            Password
          </Label>
          <Input
            id="login-password"
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder="••••••••"
          />
        </div>
        <Button type="submit" size="lg" className="w-full" disabled>
          Sign in
        </Button>
        <p className="text-center text-sm text-muted-foreground">
          Login is a placeholder — authentication arrives with the backend milestone.
        </p>
      </form>
    </AuthLayout>
  );
}
