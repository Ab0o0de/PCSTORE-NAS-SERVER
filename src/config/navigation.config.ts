import {
  LayoutDashboard,
  HardDrive,
  Network,
  Users,
  FolderTree,
  Database,
  Activity,
  Settings,
  Container,
  ShieldCheck,
} from "lucide-react";

export const NavigationItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },

  {
    title: "Storage",
    icon: HardDrive,
    path: "/storage",
  },

  {
    title: "Docker",
    icon: Container,
    path: "/docker",
  },

  {
    title: "Network",
    icon: Network,
    path: "/network",
  },

  {
    title: "Users",
    icon: Users,
    path: "/users",
  },

  {
    title: "Shares",
    icon: FolderTree,
    path: "/shares",
  },

  {
    title: "Database",
    icon: Database,
    path: "/database",
  },

  {
    title: "Monitoring",
    icon: Activity,
    path: "/monitoring",
  },

  {
    title: "Security",
    icon: ShieldCheck,
    path: "/security",
  },

  {
    title: "Settings",
    icon: Settings,
    path: "/settings",
  },
] as const;