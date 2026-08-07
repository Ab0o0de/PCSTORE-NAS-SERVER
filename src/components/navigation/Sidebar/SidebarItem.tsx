import { NavLink } from "react-router-dom";

import type { SidebarItemModel } from "./Sidebar.types";

interface Props {
  readonly item: SidebarItemModel;
}

export function SidebarItem({ item }: Props) {
  const Icon = item.icon;

  return (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        [
          "flex items-center gap-3 rounded-lg px-4 py-3 transition-colors",
          isActive
            ? "bg-blue-600 text-white"
            : "text-slate-300 hover:bg-slate-800 hover:text-white",
        ].join(" ")
      }
    >
      <Icon size={20} />

      <span>{item.title}</span>
    </NavLink>
  );
}