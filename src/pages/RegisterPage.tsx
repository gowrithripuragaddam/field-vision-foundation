import { Link } from "@tanstack/react-router";
import { AuthLayout } from "@/layouts/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function RegisterPage() {
  return (
    <AuthLayout
      title="Create your account"
      subtitle="Set up a farmer profile to use SmartAgri AI."
      footer={
        <span className="text-muted-foreground">
          Already registered?{" "}
          <Link to="/login" className="font-semibold text-primary hover:underline">
            Log in
          </Link>
        </span>
      }
    >
      <form
        className="space-y-4"
        onSubmit={(event) => {
          // Registration is not implemented in this foundation build.
          event.preventDefault();
        }}
      >
        <div className="space-y-2">
          <Label htmlFor="register-name" className="text-base">
            Full name
          </Label>
          <Input id="register-name" name="name" autoComplete="name" placeholder="Ramesh Kumar" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="register-email" className="text-base">
            Email or phone
          </Label>
          <Input
            id="register-email"
            name="email"
            autoComplete="username"
            placeholder="you@farm.in"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="register-password" className="text-base">
            Password
          </Label>
          <Input
            id="register-password"
            name="password"
            type="password"
            autoComplete="new-password"
            placeholder="••••••••"
          />
        </div>
        <Button type="submit" size="lg" className="w-full" disabled>
          Create account
        </Button>
        <p className="text-center text-sm text-muted-foreground">
          Registration is a placeholder — accounts arrive with the backend milestone.
        </p>
      </form>
    </AuthLayout>
  );
}
