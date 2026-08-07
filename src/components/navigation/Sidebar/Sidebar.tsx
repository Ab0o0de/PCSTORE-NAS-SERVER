import { NavigationItems } from "@/config";

import { SidebarItem } from "./SidebarItem";

export function Sidebar() {
  return (
    <aside className="flex h-full w-72 flex-col bg-slate-900 p-4">

      <div className="mb-8 px-2 text-xl font-bold text-white">
        PCSTORE Server
      </div>

      <nav className="flex flex-1 flex-col gap-2">
        {NavigationItems.map((item) => (
          <SidebarItem
            key={item.path}
            item={item}
          />
        ))}
      </nav>

    </aside>
  );
}