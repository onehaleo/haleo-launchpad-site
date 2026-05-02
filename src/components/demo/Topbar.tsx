import { Badge } from "@/components/ui/badge";
import { Link, NavLink } from "react-router-dom";
import { CalendarDays } from "lucide-react";

const navItems = [
  { to: "/demos/pr-studio/dashboard", label: "Dashboard" },
  { to: "/demos/pr-studio/clients", label: "Clients" },
  { to: "/demos/pr-studio/projects", label: "Projects" },
  { to: "/demos/pr-studio/deliverables", label: "Deliverables" },
  { to: "/demos/pr-studio/approvals", label: "Approvals" },
];

export const Topbar = () => {
  return (
    <header className="border-b border-slate-200/90 bg-white/90 backdrop-blur px-4 sm:px-6 py-3">
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-3">
        <div>
          <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500">Parlay Creative Co.</p>
          <p className="text-sm font-semibold text-slate-900">Operating System Dashboard</p>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <Badge className="bg-emerald-100 text-emerald-800">This is a live demo</Badge>
          <Badge className="bg-violet-100 text-violet-800">Built by Haleo</Badge>
          <div className="inline-flex items-center gap-1 rounded-md border border-slate-200 px-2.5 py-1 text-xs text-slate-600 bg-white">
            <CalendarDays className="h-3.5 w-3.5" />
            Demo Date: 2025-04-25
          </div>
          <Link
            to="/"
            className="text-xs font-semibold text-slate-700 border border-slate-300 rounded-md px-2.5 py-1 hover:bg-slate-100 transition-colors"
          >
            Back to Haleo
          </Link>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-2 overflow-x-auto pb-1">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `rounded-full px-4 py-1.5 text-sm whitespace-nowrap transition-colors ${
                isActive ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </header>
  );
};
