import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";

export const DemoShell = () => {
  return (
    <div className="min-h-screen bg-[#f3f4f8] text-slate-900">
      <div className="flex min-h-screen items-start">
        <Sidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <Topbar />
          <main className="relative p-4 sm:p-6">
            <div className="pointer-events-none absolute inset-0 -z-10 opacity-60">
              <div className="absolute -top-16 right-10 h-64 w-64 rounded-full bg-violet-200/40 blur-3xl" />
              <div className="absolute top-44 left-20 h-56 w-56 rounded-full bg-cyan-100/40 blur-3xl" />
            </div>
            <div className="mx-auto max-w-[1320px]">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
