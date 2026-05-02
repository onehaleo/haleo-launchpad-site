import {
  DEMO_TODAY,
  approvals,
  clients,
  deliverables,
  normalizePriority,
  normalizeStatus,
  projects,
  teamMembers,
} from "./demo-data";

export { normalizeStatus, normalizePriority };

export const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);

export const daysUntil = (dateStr: string) => {
  const today = new Date(DEMO_TODAY);
  const target = new Date(dateStr);
  const diffMs = target.getTime() - today.getTime();
  return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
};

export const getRiskSort = (risk: string) => {
  const score: Record<string, number> = { Urgent: 4, High: 3, Medium: 2, Low: 1 };
  return score[risk] ?? 0;
};

export const getClientByName = (name: string) => clients.find((client) => client.name === name);
export const getClientById = (id: string) => clients.find((client) => client.id === id);

export const getProjectsForClient = (clientId: string) =>
  projects.filter((project) => project.clientId === clientId);

export const getDeliverablesForClient = (clientId: string) =>
  deliverables.filter((deliverable) => deliverable.clientId === clientId);

export const getApprovalsForClient = (clientId: string) =>
  approvals.filter((approval) => approval.clientId === clientId);

export const getTeamMemberName = (id: string) => teamMembers.find((person) => person.id === id)?.name ?? "Unassigned";
