import { Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { StatusBadge } from "@/components/common/StatusBadge";
import { Button } from "@/components/ui/button";
import { DASHBOARD_CARDS } from "@/utils/nav";
import { getIcon } from "@/utils/icons";

export function DashboardPage() {
  return (
    <div>
      <PageHeader
        title="Farmer dashboard"
        description="Your farm overview will live here. These cards are UI placeholders for now."
        actions={
          <Button variant="soft" asChild>
            <Link to="/farm">My farm</Link>
          </Button>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {DASHBOARD_CARDS.map((card) => {
          const Icon = getIcon(card.icon);
          return (
            <article key={card.id} className="surface-card flex flex-col gap-4 p-6">
              <div className="flex items-start justify-between gap-3">
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary-soft">
                  <Icon className="size-6 text-primary" aria-hidden />
                </span>
                <StatusBadge tone={card.tone}>{card.statusLabel}</StatusBadge>
              </div>
              <div>
                <h2 className="text-lg font-semibold">{card.title}</h2>
                <p className="mt-1.5 text-base text-muted-foreground">{card.description}</p>
              </div>
              <div className="mt-auto h-2 rounded-full bg-muted" aria-hidden />
            </article>
          );
        })}
      </div>

      <p className="mt-8 text-base text-muted-foreground">
        No live data is connected yet. Detection, weather, soil and advisory modules come next.
      </p>
    </div>
  );
}
