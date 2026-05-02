import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { clients, deliverables, projects } from "@/lib/demo-data";
import { getTeamMemberName } from "@/lib/demo-utils";
import { StatusBadge } from "@/components/demo/StatusBadge";

const DemoDeliverablesPage = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Deliverables Tracker</h1>
      <div className="rounded-lg border bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Deliverable</TableHead>
              <TableHead>Client</TableHead>
              <TableHead>Project</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Assignee</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Approval Required</TableHead>
              <TableHead>Notes</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {deliverables.map((item) => (
              <TableRow key={item.id} className={item.status === "Overdue" ? "bg-rose-50" : ""}>
                <TableCell className="font-medium">{item.title}</TableCell>
                <TableCell>{clients.find((client) => client.id === item.clientId)?.name}</TableCell>
                <TableCell>{projects.find((project) => project.id === item.projectId)?.campaignName}</TableCell>
                <TableCell>{item.type}</TableCell>
                <TableCell>{getTeamMemberName(item.assigneeId)}</TableCell>
                <TableCell>{item.dueDate}</TableCell>
                <TableCell><StatusBadge status={item.status} /></TableCell>
                <TableCell>{item.approvalRequired ? "Yes" : "No"}</TableCell>
                <TableCell className="max-w-[220px] truncate">{item.notes}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DemoDeliverablesPage;
