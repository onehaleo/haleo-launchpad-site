import { Activity, Layers3, Sparkles } from "lucide-react";

export const Sidebar = () => {
  return (
    <aside className="w-80 p-5 hidden lg:block">
      <div className="sticky top-5 space-y-4">
        <div className="rounded-2xl bg-[#070A1C] p-4 border border-white/5 shadow-[0_25px_45px_-28px_rgba(2,6,23,1)]">
          <img
            src={`${import.meta.env.BASE_URL}lovable-uploads/parlay-logo.png`}
            alt="Parlay Creative Co."
            className="w-full rounded-lg border border-white/10"
          />
          <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400 mt-3">Demo Workspace</p>
          <p className="text-white text-sm mt-1">PR / Creative Studio Operations Layer</p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <p className="text-xs uppercase tracking-wide text-slate-500 mb-3">System Highlights</p>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-2 text-slate-700">
              <Layers3 className="h-4 w-4 mt-0.5 text-violet-600" />
              <span>One command view for clients, delivery, approvals, and deadlines.</span>
            </div>
            <div className="flex items-start gap-2 text-slate-700">
              <Activity className="h-4 w-4 mt-0.5 text-emerald-600" />
              <span>Realtime health signals instead of spreadsheet status checks.</span>
            </div>
            <div className="flex items-start gap-2 text-slate-700">
              <Sparkles className="h-4 w-4 mt-0.5 text-amber-600" />
              <span>Built by Haleo as a 10-day internal operating system deployment.</span>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <p className="text-xs uppercase tracking-wide text-slate-500 mb-3">Design Intent</p>
          <p className="text-sm text-slate-600 leading-relaxed">
            This layout is intentionally shaped around agency operations: approvals and deadlines stay visible at all times, with client context one click away.
          </p>
        </div>
      </div>
    </aside>
  );
};
