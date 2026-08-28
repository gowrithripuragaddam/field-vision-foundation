import { Link } from "@tanstack/react-router";
import { Brand } from "@/components/layout/Brand";
import { NAV_ITEMS } from "@/utils/nav";
import { getIcon } from "@/utils/icons";
import { cn } from "@/lib/utils";

interface SidebarProps {
  onNavigate?: () => void;
  className?: string;
}

export function Sidebar({ onNavigate, className }: SidebarProps) {
  return (
    <div className={cn("flex h-full flex-col bg-sidebar text-sidebar-foreground", className)}>
      <div className="px-5 py-5">
        <Brand onDark />
      </div>

      <nav aria-label="Main navigation" className="flex-1 overflow-y-auto px-3 pb-4">
        <ul className="space-y-1">
          {NAV_ITEMS.map((item) => {
            const Icon = getIcon(item.icon);
            return (
              <li key={item.to}>
                <Link
                  to={item.to as "/dashboard"}
                  onClick={onNavigate}
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-base font-medium text-sidebar-foreground/85 transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  activeProps={{
                    className:
                      "bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary hover:text-sidebar-primary-foreground",
                  }}
                >
                  <Icon className="size-5 shrink-0" aria-hidden />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="border-t border-sidebar-border px-5 py-4 text-xs text-sidebar-foreground/60">
        Foundation build — modules coming soon
      </div>
    </div>
  );
}
