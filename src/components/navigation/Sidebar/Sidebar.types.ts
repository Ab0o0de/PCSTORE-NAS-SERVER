import type { LucideIcon } from "lucide-react";

export interface SidebarItemModel {
  readonly title: string;
  readonly path: string;
  readonly icon: LucideIcon;
}

export interface SidebarProps {
  readonly collapsed?: boolean;
}