import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Client } from "@/lib/demo-data";
import { formatCurrency, daysUntil, getProjectsForClient, getTeamMemberName } from "@/lib/demo-utils";
import { RiskBadge } from "./RiskBadge";
import { StatusBadge } from "./StatusBadge";

type ClientHealthCardProps = {
  client: Client;
};

export const ClientHealthCard = ({ client }: ClientHealthCardProps) => {
  const activeProjectCount = getProjectsForClient(client.id).length;
  const renewalDays = daysUntil(client.contractEnd);
  const renewalLabel = renewalDays <= 30 ? "Renewal soon" : "Renewal window";

  return (
    <Link to={`/demos/pr-studio/clients/${client.id}`}>
      <Card className="hover:shadow-md transition-shadow border-slate-200 bg-white/95">
        <CardHeader className="pb-2 border-b border-slate-100">
          <CardTitle className="text-lg text-slate-900">{client.name}</CardTitle>
          <p className="text-sm text-slate-500">{client.industry}</p>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-slate-500">Account Manager</span>
            <span className="font-medium">{getTeamMemberName(client.accountManagerId)}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-500">Retainer</span>
            <span className="font-semibold">{formatCurrency(client.retainer)}</span>
          </div>
          <div className="flex items-center justify-between">
            <RiskBadge risk={client.risk} />
            <StatusBadge status={client.status} />
          </div>
          <div className="flex items-center justify-between text-slate-600 pt-1">
            <span>{renewalDays} days to renewal</span>
            <span>{activeProjectCount} active projects</span>
          </div>
          <div className="rounded-lg bg-slate-50 border border-slate-200 px-3 py-2 text-xs text-slate-600">
            <span className="font-semibold text-slate-700">{renewalLabel}:</span> {client.services.slice(0, 2).join(" + ")}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
