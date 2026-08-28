import type { DashboardCardPlaceholder, NavItem } from "@/types";

/** Sidebar navigation structure. Routes exist as placeholders only. */
export const NAV_ITEMS: NavItem[] = [
  { label: "Dashboard", to: "/dashboard", icon: "LayoutDashboard" },
  { label: "My Farm", to: "/farm", icon: "Tractor" },
  { label: "Crop Doctor", to: "/crop-doctor", icon: "Stethoscope" },
  { label: "Crop Health", to: "/crop-health", icon: "Leaf" },
  { label: "Weather", to: "/weather", icon: "CloudSun" },
  { label: "Irrigation", to: "/irrigation", icon: "Droplets" },
  { label: "Soil Health", to: "/soil-health", icon: "Sprout" },
  { label: "Alerts", to: "/alerts", icon: "TriangleAlert" },
  { label: "AI Advisor", to: "/ai-advisor", icon: "Bot" },
  { label: "History", to: "/history", icon: "History" },
  { label: "Notifications", to: "/notifications", icon: "Bell" },
  { label: "Profile", to: "/profile", icon: "User" },
];

export const DASHBOARD_CARDS: DashboardCardPlaceholder[] = [
  {
    id: "crop-health",
    title: "Crop Health",
    description: "Field-level crop condition tracking will appear here.",
    icon: "Leaf",
    tone: "neutral",
    statusLabel: "Not connected",
  },
  {
    id: "weather",
    title: "Weather",
    description: "Local forecast and field advisories will appear here.",
    icon: "CloudSun",
    tone: "neutral",
    statusLabel: "Not connected",
  },
  {
    id: "irrigation",
    title: "Irrigation",
    description: "Watering schedule and recommendations will appear here.",
    icon: "Droplets",
    tone: "neutral",
    statusLabel: "Not connected",
  },
  {
    id: "soil-health",
    title: "Soil Health",
    description: "Soil nutrients, moisture and pH will appear here.",
    icon: "Sprout",
    tone: "neutral",
    statusLabel: "Not connected",
  },
  {
    id: "alerts",
    title: "Alerts",
    description: "Disease, pest and weather alerts will appear here.",
    icon: "TriangleAlert",
    tone: "neutral",
    statusLabel: "Not connected",
  },
];
