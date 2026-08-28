import type { LucideIcon } from "lucide-react";
import { PageHeader } from "@/components/common/PageHeader";
import { EmptyState } from "@/components/common/EmptyState";
import { StatusBadge } from "@/components/common/StatusBadge";

interface PlaceholderPageProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  note?: string;
}

/** Shared shell for modules that are not implemented yet. */
export function PlaceholderPage({ title, description, icon, note }: PlaceholderPageProps) {
  return (
    <div>
      <PageHeader
        title={title}
        description={description}
        actions={<StatusBadge tone="neutral">Coming soon</StatusBadge>}
      />
      <EmptyState
        title={`${title} is not built yet`}
        description={note ?? "This module is part of a later milestone. The route and navigation are ready."}
        {...(icon ? { icon } : {})}
      />
    </div>
  );
}
