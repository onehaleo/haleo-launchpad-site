import { Badge } from "@/components/ui/badge";

type RiskBadgeProps = {
  risk: string;
};

const riskClasses: Record<string, string> = {
  Low: "bg-emerald-100 text-emerald-800",
  Medium: "bg-amber-100 text-amber-800",
  High: "bg-orange-100 text-orange-800",
  Urgent: "bg-rose-100 text-rose-800",
};

export const RiskBadge = ({ risk }: RiskBadgeProps) => {
  return <Badge className={riskClasses[risk] ?? "bg-slate-100 text-slate-800"}>{risk}</Badge>;
};
