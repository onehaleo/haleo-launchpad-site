export type ClientStatus = "Active" | "Paused" | "Onboarding" | "Churn Risk";
export type RiskLevel = "Low" | "Medium" | "High" | "Urgent";
export type ItemStatus = "Not Started" | "In Progress" | "Done" | "Overdue" | "Pending Review" | "Pending Approval";

export interface Client {
  id: string;
  name: string;
  industry: string;
  accountManagerId: string;
  retainer: number;
  status: ClientStatus;
  risk: RiskLevel;
  contractEnd: string;
  services: string[];
  communicationChannel: string;
  primaryContact: string;
  primaryContactEmail: string;
}

export interface Lead {
  id: string;
  company: string;
  contact: string;
  source: string;
  ownerId: string;
  status: ItemStatus;
  estimatedValue: number;
}

export interface Project {
  id: string;
  clientId: string;
  campaignName: string;
  type: string;
  channel: string;
  goLiveDate: string;
  status: ItemStatus;
  ownerId: string;
  pmId: string;
}

export interface Deliverable {
  id: string;
  clientId: string;
  projectId: string;
  title: string;
  type: string;
  assigneeId: string;
  dueDate: string;
  status: ItemStatus;
  approvalRequired: boolean;
  notes: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
}

export interface Approval {
  id: string;
  deliverableId: string;
  clientId: string;
  projectId: string;
  submittedById: string;
  submittedDate: string;
  internalApproverId: string;
  clientApprover: string;
  status: "Pending Internal" | "Pending Client" | "Approved" | "Changes Requested";
  revisionNotes: string;
}

export interface Report {
  id: string;
  clientId: string;
  month: string;
  summary: string;
}

export interface Renewal {
  id: string;
  clientId: string;
  renewalDate: string;
  value: number;
  status: "Pending" | "Confirmed" | "At Risk";
}

export interface Contractor {
  id: string;
  name: string;
  specialty: string;
  projectIds: string[];
}

export const DEMO_TODAY = "2025-04-25";

export const normalizeStatus = (value: string): ItemStatus => {
  const map: Record<string, ItemStatus> = {
    "in progress": "In Progress",
    "wip": "In Progress",
    "done": "Done",
    "overdue": "Overdue",
    "pending approval": "Pending Approval",
    "pending review": "Pending Review",
    "not started": "Not Started",
  };
  const normalized = value.trim().toLowerCase();
  return map[normalized] ?? "Not Started";
};

export const normalizePriority = (value: string): RiskLevel => {
  const map: Record<string, RiskLevel> = {
    "h": "High",
    "!!": "Urgent",
    "high": "High",
    "urgent": "Urgent",
    "medium": "Medium",
    "low": "Low",
  };
  return map[value.trim().toLowerCase()] ?? "Low";
};

export const parseCurrency = (value: string): number => Number(value.replace("$", "").replace(/,/g, "").trim());

export const teamMembers: TeamMember[] = [
  { id: "tm-1", name: "Maya Thompson", role: "Account Manager" },
  { id: "tm-2", name: "Eli Brooks", role: "Project Manager" },
  { id: "tm-3", name: "Jordan Kim", role: "Creative Lead" },
  { id: "tm-4", name: "Noah Patel", role: "Paid Media Specialist" },
  { id: "tm-5", name: "Ava Rivera", role: "Operations Lead" },
];

export const clients: Client[] = [
  {
    id: "cl-1",
    name: "Northline Wellness",
    industry: "Health & Wellness",
    accountManagerId: "tm-1",
    retainer: parseCurrency("$9500"),
    status: "Active",
    risk: normalizePriority("H"),
    contractEnd: "2025-07-10",
    services: ["Paid Media", "Creative", "Lifecycle Email"],
    communicationChannel: "Slack Connect",
    primaryContact: "Lena Ortiz",
    primaryContactEmail: "lena@northlinewellness.com",
  },
  {
    id: "cl-2",
    name: "Harbor Legal Group",
    industry: "Legal Services",
    accountManagerId: "tm-1",
    retainer: parseCurrency("$12000"),
    status: "Active",
    risk: "Medium",
    contractEnd: "2025-09-02",
    services: ["SEO", "Content", "Web Ops"],
    communicationChannel: "Email",
    primaryContact: "James Wong",
    primaryContactEmail: "james@harborlegal.com",
  },
  {
    id: "cl-3",
    name: "Bramble Home",
    industry: "Ecommerce",
    accountManagerId: "tm-5",
    retainer: parseCurrency("$7800"),
    status: "Churn Risk",
    risk: normalizePriority("!!"),
    contractEnd: "2025-05-18",
    services: ["Retention", "Paid Social"],
    communicationChannel: "Slack Connect",
    primaryContact: "Rina Kapoor",
    primaryContactEmail: "rina@bramblehome.co",
  },
  {
    id: "cl-4",
    name: "Summit Roofing",
    industry: "Construction",
    accountManagerId: "tm-5",
    retainer: parseCurrency("$6400"),
    status: "Onboarding",
    risk: "Low",
    contractEnd: "2026-01-01",
    services: ["Local Ads", "CRM Pipeline Ops"],
    communicationChannel: "Email + Weekly Call",
    primaryContact: "Marcus Hale",
    primaryContactEmail: "marcus@summitroofing.com",
  },
];

export const leads: Lead[] = [
  { id: "ld-1", company: "Atlas Dental", contact: "R. Quinn", source: "Referral", ownerId: "tm-1", status: normalizeStatus("in progress"), estimatedValue: parseCurrency("$8500") },
  { id: "ld-2", company: "Cinder Fitness", contact: "M. Green", source: "Inbound", ownerId: "tm-5", status: normalizeStatus("WIP"), estimatedValue: parseCurrency("$5600") },
];

export const projects: Project[] = [
  { id: "pr-1", clientId: "cl-1", campaignName: "Q2 Product Awareness", type: "Integrated", channel: "Meta + Email", goLiveDate: "2025-05-01", status: normalizeStatus("in progress"), ownerId: "tm-4", pmId: "tm-2" },
  { id: "pr-2", clientId: "cl-1", campaignName: "Summer Offer Funnel", type: "Lifecycle", channel: "Klaviyo", goLiveDate: "2025-05-15", status: normalizeStatus("done"), ownerId: "tm-3", pmId: "tm-2" },
  { id: "pr-3", clientId: "cl-2", campaignName: "Authority Content Sprint", type: "SEO + Content", channel: "Organic", goLiveDate: "2025-05-03", status: normalizeStatus("in progress"), ownerId: "tm-3", pmId: "tm-2" },
  { id: "pr-4", clientId: "cl-3", campaignName: "Retention Recovery", type: "Paid Social", channel: "Meta", goLiveDate: "2025-04-28", status: normalizeStatus("OVERDUE"), ownerId: "tm-4", pmId: "tm-2" },
];

export const deliverables: Deliverable[] = [
  { id: "dl-1", clientId: "cl-1", projectId: "pr-1", title: "Creative Batch v1", type: "Design", assigneeId: "tm-3", dueDate: "2025-04-24", status: normalizeStatus("OVERDUE"), approvalRequired: true, notes: "Waiting on revised CTA direction." },
  { id: "dl-2", clientId: "cl-1", projectId: "pr-2", title: "Lifecycle Flow Map", type: "Automation", assigneeId: "tm-5", dueDate: "2025-04-30", status: normalizeStatus("in progress"), approvalRequired: false, notes: "Draft in review with PM." },
  { id: "dl-3", clientId: "cl-2", projectId: "pr-3", title: "Pillar Article #1", type: "Content", assigneeId: "tm-3", dueDate: "2025-04-29", status: normalizeStatus("WIP"), approvalRequired: true, notes: "Legal review needed before publish." },
  { id: "dl-4", clientId: "cl-3", projectId: "pr-4", title: "Retention Offer Landing Page", type: "Web", assigneeId: "tm-5", dueDate: "2025-04-23", status: normalizeStatus("OVERDUE"), approvalRequired: true, notes: "Client requested copy changes." },
];

export const approvals: Approval[] = [
  { id: "ap-1", deliverableId: "dl-1", clientId: "cl-1", projectId: "pr-1", submittedById: "tm-3", submittedDate: "2025-04-22", internalApproverId: "tm-2", clientApprover: "Lena Ortiz", status: "Pending Client", revisionNotes: "Need headline variant B." },
  { id: "ap-2", deliverableId: "dl-3", clientId: "cl-2", projectId: "pr-3", submittedById: "tm-3", submittedDate: "2025-04-24", internalApproverId: "tm-2", clientApprover: "James Wong", status: "Pending Internal", revisionNotes: "Check legal claims language." },
  { id: "ap-3", deliverableId: "dl-4", clientId: "cl-3", projectId: "pr-4", submittedById: "tm-5", submittedDate: "2025-04-20", internalApproverId: "tm-2", clientApprover: "Rina Kapoor", status: "Changes Requested", revisionNotes: "Adjust value proposition and hero copy." },
];

export const reports: Report[] = [
  { id: "rp-1", clientId: "cl-1", month: "2025-03", summary: "MRR steady. CTR +17% after creative refresh." },
  { id: "rp-2", clientId: "cl-2", month: "2025-03", summary: "Organic leads up 11%. Funnel conversion stable." },
];

export const renewals: Renewal[] = [
  { id: "rn-1", clientId: "cl-1", renewalDate: "2025-07-10", value: parseCurrency("$28500"), status: "Pending" },
  { id: "rn-2", clientId: "cl-3", renewalDate: "2025-05-18", value: parseCurrency("$7800"), status: "At Risk" },
  { id: "rn-3", clientId: "cl-2", renewalDate: "2025-09-02", value: parseCurrency("$36000"), status: "Pending" },
];

export const contractors: Contractor[] = [
  { id: "ct-1", name: "Nova Motion Studio", specialty: "Video Editing", projectIds: ["pr-1"] },
  { id: "ct-2", name: "Kai Analytics", specialty: "Attribution Reporting", projectIds: ["pr-3"] },
];
