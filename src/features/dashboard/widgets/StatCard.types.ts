import type { LucideIcon } from "lucide-react";

export interface StatCardProps {
  readonly title: string;
  readonly value: string | number;
  readonly description?: string;
  readonly icon: LucideIcon;
}