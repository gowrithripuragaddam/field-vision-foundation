import {
  Bell,
  Bot,
  CloudSun,
  Droplets,
  History,
  LayoutDashboard,
  Leaf,
  Sprout,
  Stethoscope,
  Tractor,
  TriangleAlert,
  User,
  type LucideIcon,
} from "lucide-react";

/** Icon registry so navigation/card data stays serializable strings. */
export const ICONS: Record<string, LucideIcon> = {
  LayoutDashboard,
  Tractor,
  Stethoscope,
  Leaf,
  CloudSun,
  Droplets,
  Sprout,
  TriangleAlert,
  Bot,
  History,
  Bell,
  User,
};

export function getIcon(name: string): LucideIcon {
  return ICONS[name] ?? Leaf;
}
