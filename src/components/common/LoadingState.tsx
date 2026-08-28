import { Loader2 } from "lucide-react";

interface LoadingStateProps {
  label?: string;
}

export function LoadingState({ label = "Loading…" }: LoadingStateProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex flex-col items-center justify-center gap-3 rounded-xl border border-border bg-card px-6 py-14 text-center"
    >
      <Loader2 className="size-7 animate-spin text-primary" aria-hidden />
      <p className="text-base text-muted-foreground">{label}</p>
    </div>
  );
}
