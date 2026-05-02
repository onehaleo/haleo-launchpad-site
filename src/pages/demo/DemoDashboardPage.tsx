import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { approvals, clients, deliverables, renewals } from "@/lib/demo-data";
import { daysUntil, formatCurrency, getProjectsForClient, getRiskSort, getTeamMemberName } from "@/lib/demo-utils";
import { ClientHealthCard } from "@/components/demo/ClientHealthCard";
import { StatCard } from "@/components/demo/StatCard";
import { StatusBadge } from "@/components/demo/StatusBadge";
import { AlertTriangle, ArrowUpRight, Sparkles } from "lucide-react";

const DemoDashboardPage = () => {
  const totalMrr = clients.reduce((sum, client) => sum + client.retainer, 0);
  const activeClients = clients.filter((client) => client.status === "Active").length;
  const atRiskClients = clients.filter((client) => client.risk === "High" || client.risk === "Urgent").length;
  const openApprovals = approvals.filter((approval) => approval.status !== "Approved").length;
  const overdueDeliverables = deliverables.filter((item) => item.status === "Overdue").length;
  const renewals90 = renewals.filter((renewal) => daysUntil(renewal.renewalDate) <= 90).length;
  const pendingApprovals = approvals.filter((approval) => approval.status === "Pending Client" || approval.status === "Pending Internal");
  const upcomingDeadlines = [...deliverables].sort((a, b) => a.dueDate.localeCompare(b.dueDate)).slice(0, 5);
  const highestRiskClient = [...clients].sort((a, b) => getRiskSort(b.risk) - getRiskSort(a.risk))[0];

  return (
    <div className="space-y-6">
      <section className="grid grid-cols-1 xl:grid-cols-[1.4fr_0.8fr] gap-4">
        <div className="rounded-2xl bg-slate-900 text-white p-5 sm:p-6 shadow-[0_22px_40px_-30px_rgba(15,23,42,1)]">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-slate-300">Agency Health Dashboard</p>
            <h1 className="text-2xl sm:text-3xl font-semibold mt-1">Parlay Creative Co. Ops Command Center</h1>
            <p className="text-slate-300 text-sm mt-2 max-w-2xl">
              A custom Haleo operating layer replacing spreadsheet status checks with live visibility across client health, approvals, and production deadlines.
            </p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
              <div className="rounded-lg bg-white/10 border border-white/10 px-3 py-2">
                <p className="text-slate-300 text-xs">Execution Load</p>
                <p className="font-semibold">{deliverables.length} active deliverables</p>
              </div>
              <div className="rounded-lg bg-white/10 border border-white/10 px-3 py-2">
                <p className="text-slate-300 text-xs">Review Bottleneck</p>
                <p className="font-semibold">{openApprovals} approvals open</p>
              </div>
              <div className="rounded-lg bg-white/10 border border-white/10 px-3 py-2">
                <p className="text-slate-300 text-xs">Revenue at Renewal</p>
                <p className="font-semibold">{formatCurrency(renewals.reduce((sum, item) => sum + item.value, 0))}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Priority Watchlist</p>
          {highestRiskClient ? (
            <div className="mt-3 rounded-xl bg-rose-50 border border-rose-200 p-4">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-rose-900">{highestRiskClient.name}</p>
                <AlertTriangle className="h-4 w-4 text-rose-600" />
              </div>
              <p className="text-sm text-rose-700 mt-1">{highestRiskClient.risk} risk, {daysUntil(highestRiskClient.contractEnd)} days to renewal.</p>
              <p className="text-xs text-rose-700 mt-2">Recommended next action: lock renewal narrative + executive check-in.</p>
            </div>
          ) : null}
          <div className="mt-3 rounded-xl bg-slate-50 border border-slate-200 p-4">
            <p className="text-sm font-semibold text-slate-800 inline-flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-violet-600" />
              Haleo Insight
            </p>
            <p className="text-xs text-slate-600 mt-2">
              Approval queue and deliverable deadlines are now visible in one command center, replacing three spreadsheet trackers.
            </p>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-6 gap-4">
        <StatCard title="Total MRR" value={formatCurrency(totalMrr)} accent="violet" />
        <StatCard title="Active Clients" value={activeClients} accent="emerald" />
        <StatCard title="At Risk Clients" value={atRiskClients} accent="amber" />
        <StatCard title="Open Approvals" value={openApprovals} accent="violet" />
        <StatCard title="Overdue Deliverables" value={overdueDeliverables} accent="amber" />
        <StatCard title="Renewals in 90 Days" value={renewals90} accent="slate" />
      </div>

      <section>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold">Client Health Grid</h2>
          <p className="text-xs text-slate-500 uppercase tracking-wide">Sorted for account visibility</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {clients.map((client) => (
            <ClientHealthCard key={client.id} client={client} />
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <Card className="bg-white/95">
          <CardHeader>
            <CardTitle>Pending Approval Queue</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Deliverable</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Route</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pendingApprovals.map((approval) => {
                  const deliverable = deliverables.find((item) => item.id === approval.deliverableId);
                  const client = clients.find((item) => item.id === approval.clientId);
                  return (
                    <TableRow key={approval.id}>
                      <TableCell>{deliverable?.title}</TableCell>
                      <TableCell>{client?.name}</TableCell>
                      <TableCell><StatusBadge status={approval.status} /></TableCell>
                      <TableCell className="text-right text-slate-500">
                        <ArrowUpRight className="h-4 w-4 inline" />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="bg-white/95">
          <CardHeader>
            <CardTitle>Upcoming Deadlines</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Deliverable</TableHead>
                  <TableHead>Due</TableHead>
                  <TableHead>Owner</TableHead>
                  <TableHead>State</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {upcomingDeadlines.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <div>{item.title}</div>
                      <div className="text-xs text-slate-500">{getProjectsForClient(item.clientId).length} projects active</div>
                    </TableCell>
                    <TableCell>{item.dueDate}</TableCell>
                    <TableCell>{getTeamMemberName(item.assigneeId)}</TableCell>
                    <TableCell><StatusBadge status={item.status} /></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DemoDashboardPage;
