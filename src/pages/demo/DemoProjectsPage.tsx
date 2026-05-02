import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { clients, projects } from "@/lib/demo-data";
import { getTeamMemberName } from "@/lib/demo-utils";
import { StatusBadge } from "@/components/demo/StatusBadge";

const DemoProjectsPage = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Projects / Campaigns</h1>
      <div className="rounded-lg border bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Campaign Name</TableHead>
              <TableHead>Client</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Channel</TableHead>
              <TableHead>Go-Live Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Owner</TableHead>
              <TableHead>PM</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.map((project) => (
              <TableRow key={project.id}>
                <TableCell className="font-medium">{project.campaignName}</TableCell>
                <TableCell>{clients.find((client) => client.id === project.clientId)?.name}</TableCell>
                <TableCell>{project.type}</TableCell>
                <TableCell>{project.channel}</TableCell>
                <TableCell>{project.goLiveDate}</TableCell>
                <TableCell><StatusBadge status={project.status} /></TableCell>
                <TableCell>{getTeamMemberName(project.ownerId)}</TableCell>
                <TableCell>{getTeamMemberName(project.pmId)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DemoProjectsPage;
