import { Link } from "@tanstack/react-router";
import { Leaf } from "lucide-react";
import { cn } from "@/lib/utils";

interface BrandProps {
  className?: string;
  onDark?: boolean;
}

export function Brand({ className, onDark = false }: BrandProps) {
  return (
    <Link to="/" className={cn("flex items-center gap-2.5", className)}>
      <span
        className={cn(
          "flex size-9 items-center justify-center rounded-xl",
          onDark ? "bg-sidebar-primary text-sidebar-primary-foreground" : "bg-primary text-primary-foreground",
        )}
      >
        <Leaf className="size-5" aria-hidden />
      </span>
      <span className="leading-tight">
        <span className="block font-display text-lg font-bold">SmartAgri AI</span>
        <span
          className={cn(
            "block text-xs",
            onDark ? "text-sidebar-foreground/70" : "text-muted-foreground",
          )}
        >
          Farm advisory system
        </span>
      </span>
    </Link>
  );
}
