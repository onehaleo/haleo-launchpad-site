import { Badge } from "@/components/ui/badge";

type StatusBadgeProps = {
  status: string;
};

const statusClasses: Record<string, string> = {
  Active: "bg-emerald-100 text-emerald-800",
  "In Progress": "bg-blue-100 text-blue-800",
  Done: "bg-emerald-100 text-emerald-800",
  Overdue: "bg-rose-100 text-rose-800",
  "Pending Approval": "bg-amber-100 text-amber-800",
  "Pending Internal": "bg-indigo-100 text-indigo-800",
  "Pending Client": "bg-orange-100 text-orange-800",
  "Changes Requested": "bg-rose-100 text-rose-800",
  Onboarding: "bg-violet-100 text-violet-800",
  "Churn Risk": "bg-rose-100 text-rose-800",
};

export const StatusBadge = ({ status }: StatusBadgeProps) => {
  return <Badge className={statusClasses[status] ?? "bg-slate-100 text-slate-800"}>{status}</Badge>;
};
