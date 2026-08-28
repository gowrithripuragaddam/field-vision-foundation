import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import type { StatusTone } from "@/types";

const statusBadgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-semibold",
  {
    variants: {
      tone: {
        healthy: "bg-success/15 text-success",
        warning: "bg-warning/20 text-warning-foreground",
        critical: "bg-destructive/15 text-destructive",
        info: "bg-info/15 text-info",
        neutral: "bg-muted text-muted-foreground",
      },
    },
    defaultVariants: { tone: "neutral" },
  },
);

interface StatusBadgeProps extends VariantProps<typeof statusBadgeVariants> {
  children: React.ReactNode;
  tone?: StatusTone;
  className?: string;
}

export function StatusBadge({ children, tone = "neutral", className }: StatusBadgeProps) {
  return (
    <span className={cn(statusBadgeVariants({ tone }), className)}>
      <span className="size-2 rounded-full bg-current" aria-hidden />
      {children}
    </span>
  );
}
