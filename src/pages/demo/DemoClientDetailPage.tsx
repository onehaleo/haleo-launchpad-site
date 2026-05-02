import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useParams } from "react-router-dom";
import { approvals, reports, renewals } from "@/lib/demo-data";
import { daysUntil, formatCurrency, getApprovalsForClient, getClientById, getDeliverablesForClient, getProjectsForClient, getTeamMemberName } from "@/lib/demo-utils";
import { EmptyState } from "@/components/demo/EmptyState";
import { RiskBadge } from "@/components/demo/RiskBadge";
import { StatusBadge } from "@/components/demo/StatusBadge";

const DemoClientDetailPage = () => {
  const { id = "" } = useParams();
  const client = getClientById(id);

  if (!client) {
    return <EmptyState title="Client not found" description="This client does not exist in the demo data." />;
  }

  const clientProjects = getProjectsForClient(client.id);
  const clientDeliverables = getDeliverablesForClient(client.id);
  const clientApprovals = getApprovalsForClient(client.id);
  const clientReports = reports.filter((report) => report.clientId === client.id);
  const clientRenewal = renewals.find((renewal) => renewal.clientId === client.id);

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{client.name}</CardTitle>
          <div className="text-sm text-slate-500">{client.industry}</div>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <p className="text-slate-500">Retainer</p>
            <p className="font-semibold">{formatCurrency(client.retainer)}</p>
          </div>
          <div>
            <p className="text-slate-500">Account Manager</p>
            <p className="font-semibold">{getTeamMemberName(client.accountManagerId)}</p>
          </div>
          <div className="flex items-start gap-2">
            <RiskBadge risk={client.risk} />
            <StatusBadge status={client.status} />
          </div>
          <div>
            <p className="text-slate-500">Communication Channel</p>
            <p className="font-semibold">{client.communicationChannel}</p>
          </div>
          <div>
            <p className="text-slate-500">Primary Contact</p>
            <p className="font-semibold">{client.primaryContact}</p>
            <p className="text-slate-500">{client.primaryContactEmail}</p>
          </div>
          <div>
            <p className="text-slate-500">Days Until Renewal</p>
            <p className="font-semibold">{daysUntil(client.contractEnd)}</p>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="overview">
        <TabsList className="grid grid-cols-6 w-full">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="deliverables">Deliverables</TabsTrigger>
          <TabsTrigger value="approvals">Approvals</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="renewal">Renewal</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card><CardContent className="p-6 text-sm text-slate-600">This account currently has {clientProjects.length} projects, {clientDeliverables.length} deliverables, and {clientApprovals.length} active approvals.</CardContent></Card>
        </TabsContent>
        <TabsContent value="projects">
          <Card><CardContent className="p-0">
            <Table><TableHeader><TableRow><TableHead>Campaign</TableHead><TableHead>Status</TableHead><TableHead>Go Live</TableHead></TableRow></TableHeader>
              <TableBody>{clientProjects.map((project) => <TableRow key={project.id}><TableCell>{project.campaignName}</TableCell><TableCell><StatusBadge status={project.status} /></TableCell><TableCell>{project.goLiveDate}</TableCell></TableRow>)}</TableBody>
            </Table>
          </CardContent></Card>
        </TabsContent>
        <TabsContent value="deliverables">
          <Card><CardContent className="p-0">
            <Table><TableHeader><TableRow><TableHead>Deliverable</TableHead><TableHead>Due</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
              <TableBody>{clientDeliverables.map((item) => <TableRow key={item.id}><TableCell>{item.title}</TableCell><TableCell>{item.dueDate}</TableCell><TableCell><StatusBadge status={item.status} /></TableCell></TableRow>)}</TableBody>
            </Table>
          </CardContent></Card>
        </TabsContent>
        <TabsContent value="approvals">
          <Card><CardContent className="p-0">
            <Table><TableHeader><TableRow><TableHead>Submitted</TableHead><TableHead>Internal Approver</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
              <TableBody>{clientApprovals.map((item) => <TableRow key={item.id}><TableCell>{item.submittedDate}</TableCell><TableCell>{getTeamMemberName(item.internalApproverId)}</TableCell><TableCell><StatusBadge status={item.status} /></TableCell></TableRow>)}</TableBody>
            </Table>
          </CardContent></Card>
        </TabsContent>
        <TabsContent value="reports">
          <Card><CardContent className="p-6 space-y-3">{clientReports.map((report) => <div key={report.id}><p className="font-medium">{report.month}</p><p className="text-sm text-slate-600">{report.summary}</p></div>)}</CardContent></Card>
        </TabsContent>
        <TabsContent value="renewal">
          <Card><CardContent className="p-6 text-sm">
            {clientRenewal ? (
              <div className="space-y-2">
                <p><span className="text-slate-500">Renewal Date:</span> {clientRenewal.renewalDate}</p>
                <p><span className="text-slate-500">Renewal Value:</span> {formatCurrency(clientRenewal.value)}</p>
                <p><span className="text-slate-500">Status:</span> {clientRenewal.status}</p>
              </div>
            ) : "No renewal record available."}
          </CardContent></Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DemoClientDetailPage;
