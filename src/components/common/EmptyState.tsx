import type { LucideIcon } from "lucide-react";
import { Sprout } from "lucide-react";
import type { ReactNode } from "react";

interface EmptyStateProps {
  title: string;
  description?: string;
  icon?: LucideIcon;
  action?: ReactNode;
}

export function EmptyState({ title, description, icon: Icon = Sprout, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-border bg-card px-6 py-14 text-center">
      <span className="flex size-14 items-center justify-center rounded-full bg-primary-soft">
        <Icon className="size-7 text-primary" aria-hidden />
      </span>
      <h3 className="text-lg font-semibold">{title}</h3>
      {description ? (
        <p className="max-w-md text-base text-muted-foreground">{description}</p>
      ) : null}
      {action}
    </div>
  );
}
