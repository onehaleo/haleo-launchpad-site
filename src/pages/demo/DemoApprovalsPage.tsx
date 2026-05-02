import { StatCard } from "@/components/demo/StatCard";
import { StatusBadge } from "@/components/demo/StatusBadge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { approvals, clients, deliverables, projects } from "@/lib/demo-data";
import { getTeamMemberName } from "@/lib/demo-utils";

const DemoApprovalsPage = () => {
  const totalPending = approvals.filter((item) => item.status === "Pending Internal" || item.status === "Pending Client").length;
  const pendingInternal = approvals.filter((item) => item.status === "Pending Internal").length;
  const pendingClient = approvals.filter((item) => item.status === "Pending Client").length;
  const approvedThisMonth = approvals.filter((item) => item.status === "Approved").length;

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Approval Queue</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard title="Total Pending" value={totalPending} />
        <StatCard title="Pending Internal" value={pendingInternal} />
        <StatCard title="Pending Client" value={pendingClient} />
        <StatCard title="Approved This Month" value={approvedThisMonth} />
      </div>

      <div className="rounded-lg border bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Deliverable</TableHead>
              <TableHead>Client</TableHead>
              <TableHead>Project</TableHead>
              <TableHead>Submitted By</TableHead>
              <TableHead>Submitted Date</TableHead>
              <TableHead>Internal Approver</TableHead>
              <TableHead>Client Approver</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Revision Notes</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {approvals.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{deliverables.find((deliverable) => deliverable.id === item.deliverableId)?.title}</TableCell>
                <TableCell>{clients.find((client) => client.id === item.clientId)?.name}</TableCell>
                <TableCell>{projects.find((project) => project.id === item.projectId)?.campaignName}</TableCell>
                <TableCell>{getTeamMemberName(item.submittedById)}</TableCell>
                <TableCell>{item.submittedDate}</TableCell>
                <TableCell>{getTeamMemberName(item.internalApproverId)}</TableCell>
                <TableCell>{item.clientApprover}</TableCell>
                <TableCell><StatusBadge status={item.status} /></TableCell>
                <TableCell className="max-w-[220px] truncate">{item.revisionNotes}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DemoApprovalsPage;
