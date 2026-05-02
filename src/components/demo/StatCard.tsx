import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type StatCardProps = {
  title: string;
  value: string | number;
  subtitle?: string;
  accent?: "violet" | "emerald" | "amber" | "slate";
};

const accentStyles: Record<NonNullable<StatCardProps["accent"]>, string> = {
  violet: "before:bg-violet-500",
  emerald: "before:bg-emerald-500",
  amber: "before:bg-amber-500",
  slate: "before:bg-slate-500",
};

export const StatCard = ({ title, value, subtitle, accent = "slate" }: StatCardProps) => {
  return (
    <Card className={`relative overflow-hidden shadow-sm border-slate-200 bg-white/95 before:absolute before:left-0 before:top-0 before:h-full before:w-1 ${accentStyles[accent]}`}>
      <CardHeader className="pb-2">
        <CardTitle className="text-[13px] font-medium text-slate-600 tracking-wide">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-semibold text-slate-900">{value}</div>
        {subtitle ? <p className="text-xs text-slate-500 mt-1">{subtitle}</p> : null}
      </CardContent>
    </Card>
  );
};
