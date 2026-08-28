import type { ReactNode } from "react";
import { Brand } from "@/components/layout/Brand";

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  children: ReactNode;
  footer?: ReactNode;
}

/** Centered layout used by login and register screens. */
export function AuthLayout({ title, subtitle, children, footer }: AuthLayoutProps) {
  return (
    <div className="field-hero flex min-h-screen flex-col items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        <div className="mb-6 flex justify-center">
          <Brand />
        </div>
        <div className="surface-card p-6 sm:p-8">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="mt-2 text-base text-muted-foreground">{subtitle}</p>
          <div className="mt-6">{children}</div>
        </div>
        {footer ? <div className="mt-5 text-center text-base">{footer}</div> : null}
      </div>
    </div>
  );
}
