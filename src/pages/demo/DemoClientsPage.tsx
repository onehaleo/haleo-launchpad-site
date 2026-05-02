import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { clients } from "@/lib/demo-data";
import { formatCurrency, getTeamMemberName } from "@/lib/demo-utils";
import { RiskBadge } from "@/components/demo/RiskBadge";
import { StatusBadge } from "@/components/demo/StatusBadge";

const DemoClientsPage = () => {
  const [managerFilter, setManagerFilter] = useState("all");
  const [riskFilter, setRiskFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const filtered = useMemo(() => {
    return clients.filter((client) => {
      if (managerFilter !== "all" && client.accountManagerId !== managerFilter) return false;
      if (riskFilter !== "all" && client.risk !== riskFilter) return false;
      if (statusFilter !== "all" && client.status !== statusFilter) return false;
      return true;
    });
  }, [managerFilter, riskFilter, statusFilter]);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Clients</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <Select value={managerFilter} onValueChange={setManagerFilter}>
          <SelectTrigger><SelectValue placeholder="Filter by account manager" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Account Managers</SelectItem>
            {[...new Set(clients.map((client) => client.accountManagerId))].map((id) => (
              <SelectItem key={id} value={id}>{getTeamMemberName(id)}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={riskFilter} onValueChange={setRiskFilter}>
          <SelectTrigger><SelectValue placeholder="Filter by risk" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Risk Levels</SelectItem>
            {["Low", "Medium", "High", "Urgent"].map((risk) => <SelectItem key={risk} value={risk}>{risk}</SelectItem>)}
          </SelectContent>
        </Select>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger><SelectValue placeholder="Filter by status" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            {[...new Set(clients.map((client) => client.status))].map((status) => <SelectItem key={status} value={status}>{status}</SelectItem>)}
          </SelectContent>
        </Select>
      </div>

      <div className="rounded-lg border bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Client Name</TableHead>
              <TableHead>Industry</TableHead>
              <TableHead>Retainer</TableHead>
              <TableHead>Account Manager</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Risk</TableHead>
              <TableHead>Contract End</TableHead>
              <TableHead>Services</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((client) => (
              <TableRow key={client.id}>
                <TableCell className="font-medium">{client.name}</TableCell>
                <TableCell>{client.industry}</TableCell>
                <TableCell>{formatCurrency(client.retainer)}</TableCell>
                <TableCell>{getTeamMemberName(client.accountManagerId)}</TableCell>
                <TableCell><StatusBadge status={client.status} /></TableCell>
                <TableCell><RiskBadge risk={client.risk} /></TableCell>
                <TableCell>{client.contractEnd}</TableCell>
                <TableCell>{client.services.join(", ")}</TableCell>
                <TableCell>
                  <Link className="text-slate-900 underline underline-offset-2" to={`/demos/pr-studio/clients/${client.id}`}>
                    View
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DemoClientsPage;
