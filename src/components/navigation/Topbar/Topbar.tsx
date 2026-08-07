import {
  Bell,
  Moon,
  Search,
  Settings,
  Sun,
  User,
} from "lucide-react";

export function Topbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6">

      <div className="flex items-center gap-3">
        <Search size={18} className="text-slate-500" />

        <input
          type="text"
          placeholder="Search..."
          className="w-80 rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-blue-500"
        />
      </div>

      <div className="flex items-center gap-4">

        <button className="rounded-lg p-2 hover:bg-slate-100">
          <Bell size={20} />
        </button>

        <button className="rounded-lg p-2 hover:bg-slate-100">
          <Sun size={20} />
        </button>

        <button className="rounded-lg p-2 hover:bg-slate-100">
          <Settings size={20} />
        </button>

        <button className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-slate-100">
          <User size={20} />

          <span>Administrator</span>
        </button>

      </div>

    </header>
  );
}