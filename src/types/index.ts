/** Shared application types for SmartAgri AI (foundation stage). */

export type StatusTone = "healthy" | "warning" | "critical" | "info" | "neutral";

export interface NavItem {
  label: string;
  to: string;
  icon: string;
}

export interface DashboardCardPlaceholder {
  id: string;
  title: string;
  description: string;
  icon: string;
  tone: StatusTone;
  statusLabel: string;
}

export interface Farmer {
  id: string;
  name: string;
  phone?: string;
  region?: string;
}

export interface ApiResult<T> {
  data: T | null;
  error: string | null;
}
