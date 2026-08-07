import { Outlet } from "react-router-dom";

import { Sidebar } from "@/components/navigation/Sidebar";
import { Topbar } from "@/components/navigation/Topbar";

export function AppLayout() {
  return (
    <div className="flex min-h-screen">

      <Sidebar />

      <div className="flex flex-1 flex-col">

        <Topbar />

        <main className="flex-1 bg-slate-100 p-6">
          <Outlet />
        </main>

      </div>

    </div>
  );
}