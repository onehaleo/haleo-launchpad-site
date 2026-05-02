export const TABS = [
  "Prospects",
  "Companies",
  "Messages Log",
  "Research Insights",
  "WR Submissions",
  "Call Notes",
  "Metrics",
] as const;

export type TabId = (typeof TABS)[number];

export const STAGE_COLORS: Record<string, string> = {
  New: "#E6F1FB",
  Connected: "#D3D1C7",
  Outreached: "#EEEDFE",
  Replied: "#B5D4F4",
  Researching: "#FAEEDA",
  "Review Offered": "#FAC775",
  "Audit Offered": "#F5C4B3",
  "Build Offered": "#F0997B",
  Client: "#C0DD97",
  Closed: "#F7C1C1",
  Paused: "#D3D1C7",
};

export const STAGE_TEXT: Record<string, string> = {
  New: "#0C447C",
  Connected: "#444441",
  Outreached: "#3C3489",
  Replied: "#185FA5",
  Researching: "#633806",
  "Review Offered": "#854F0B",
  "Audit Offered": "#993C1D",
  "Build Offered": "#993C1D",
  Client: "#3B6D11",
  Closed: "#A32D2D",
  Paused: "#5F5E5A",
};

export const REPLY_COLORS: Record<string, string> = {
  "No Reply": "#F7C1C1",
  Replied: "#C0DD97",
  "Ghosted After Reply": "#FAC775",
  "Opted Out": "#F0997B",
};

export type ColDef = {
  key: string;
  label: string;
  w: number;
  type: "text" | "url" | "date" | "select";
  opts?: string[];
};

export const PROSPECTS_COLS: ColDef[] = [
  { key: "name", label: "Contact Name", w: 140, type: "text" },
  { key: "company", label: "Company", w: 130, type: "text" },
  { key: "role", label: "Role / Title", w: 130, type: "text" },
  { key: "linkedin", label: "LinkedIn URL", w: 120, type: "url" },
  { key: "website", label: "Website", w: 110, type: "url" },
  {
    key: "industry",
    label: "Industry",
    w: 120,
    type: "select",
    opts: ["Agency", "Studio", "PR", "Marketing", "Recruiting", "Service", "F&B", "Other"],
  },
  { key: "location", label: "Location", w: 110, type: "text" },
  {
    key: "teamSize",
    label: "Team Size",
    w: 100,
    type: "select",
    opts: ["1–5", "6–15", "16–30", "30+", "Unknown"],
  },
  {
    key: "relStrength",
    label: "Relationship",
    w: 120,
    type: "select",
    opts: ["Cold", "Loose Acquaintance", "Warm", "Strong"],
  },
  {
    key: "prospectType",
    label: "Prospect Type",
    w: 130,
    type: "select",
    opts: ["Founder", "Ops Manager", "Client Services", "Marketing Lead", "Other"],
  },
  {
    key: "likelyPain",
    label: "Likely Pain",
    w: 150,
    type: "select",
    opts: ["Client intake", "Project tracking", "Reporting", "Handoffs", "Onboarding", "Mixed mess"],
  },
  {
    key: "source",
    label: "Source",
    w: 120,
    type: "select",
    opts: ["LinkedIn Search", "Referral", "Event", "Existing Network", "Other"],
  },
  { key: "connSent", label: "Conn. Sent", w: 110, type: "date" },
  {
    key: "connected",
    label: "Connected?",
    w: 100,
    type: "select",
    opts: ["Yes", "No", "Pending"],
  },
  { key: "firstMsgDate", label: "First Msg Date", w: 120, type: "date" },
  {
    key: "replyStatus",
    label: "Reply Status",
    w: 140,
    type: "select",
    opts: ["No Reply", "Replied", "Ghosted After Reply", "Opted Out"],
  },
  { key: "replyDate", label: "Reply Date", w: 110, type: "date" },
  { key: "fu1", label: "Follow-Up 1", w: 110, type: "date" },
  { key: "fu2", label: "Follow-Up 2", w: 110, type: "date" },
  { key: "fu3", label: "Follow-Up 3", w: 110, type: "date" },
  { key: "stage", label: "Stage", w: 140, type: "select", opts: Object.keys(STAGE_COLORS) },
  { key: "painPoints", label: "Pain Points", w: 200, type: "text" },
  { key: "toolStack", label: "Tool Stack", w: 140, type: "text" },
  {
    key: "wrOffered",
    label: "WR Offered?",
    w: 110,
    type: "select",
    opts: ["Yes", "No"],
  },
  {
    key: "wrSubmitted",
    label: "WR Submitted?",
    w: 120,
    type: "select",
    opts: ["Yes", "No", "N/A"],
  },
  {
    key: "callBooked",
    label: "Call Booked?",
    w: 110,
    type: "select",
    opts: ["Yes", "No"],
  },
  { key: "callDate", label: "Call Date", w: 110, type: "date" },
  {
    key: "auditOffered",
    label: "Audit Offered?",
    w: 120,
    type: "select",
    opts: ["Yes", "No"],
  },
  {
    key: "buildPotential",
    label: "Build Potential",
    w: 120,
    type: "select",
    opts: ["High", "Medium", "Low", "None"],
  },
  { key: "nextAction", label: "Next Action", w: 180, type: "text" },
  { key: "nextActionDate", label: "Next Action Date", w: 130, type: "date" },
  { key: "notes", label: "Notes", w: 220, type: "text" },
];

export const COMPANIES_COLS: ColDef[] = [
  { key: "company", label: "Company", w: 150, type: "text" },
  { key: "website", label: "Website", w: 130, type: "url" },
  {
    key: "industry",
    label: "Industry",
    w: 120,
    type: "select",
    opts: ["Agency", "Studio", "PR", "Marketing", "Recruiting", "Service", "F&B", "Other"],
  },
  {
    key: "teamSize",
    label: "Team Size",
    w: 100,
    type: "select",
    opts: ["1–5", "6–15", "16–30", "30+", "Unknown"],
  },
  { key: "location", label: "Location", w: 120, type: "text" },
  { key: "decisionMaker", label: "Decision Maker", w: 150, type: "text" },
  { key: "secondary", label: "Secondary Contact", w: 160, type: "text" },
  { key: "tools", label: "Current Tools", w: 170, type: "text" },
  {
    key: "maturity",
    label: "Workflow Maturity",
    w: 150,
    type: "select",
    opts: ["Chaotic", "Functional", "Optimized", "Unknown"],
  },
  {
    key: "fit",
    label: "Overall Fit",
    w: 110,
    type: "select",
    opts: ["High", "Medium", "Low"],
  },
  { key: "notes", label: "Notes", w: 220, type: "text" },
];

export const MESSAGES_COLS: ColDef[] = [
  { key: "contact", label: "Contact Name", w: 140, type: "text" },
  { key: "company", label: "Company", w: 130, type: "text" },
  { key: "date", label: "Date", w: 110, type: "date" },
  {
    key: "direction",
    label: "Direction",
    w: 100,
    type: "select",
    opts: ["Sent", "Received"],
  },
  {
    key: "msgType",
    label: "Message Type",
    w: 160,
    type: "select",
    opts: [
      "Connection Request",
      "First Message",
      "Follow-Up",
      "Response",
      "Call Prep",
      "Post-Call",
      "Offer",
    ],
  },
  { key: "text", label: "Message Text", w: 300, type: "text" },
  {
    key: "tone",
    label: "Tone / Reaction",
    w: 140,
    type: "select",
    opts: ["Positive", "Neutral", "Skeptical", "Not Interested", "Very Engaged"],
  },
  { key: "notes", label: "Notes", w: 200, type: "text" },
];

export const INSIGHTS_COLS: ColDef[] = [
  { key: "date", label: "Date", w: 110, type: "date" },
  { key: "source", label: "Source Contact", w: 140, type: "text" },
  { key: "industry", label: "Industry", w: 120, type: "text" },
  { key: "pattern", label: "Pain Pattern", w: 220, type: "text" },
  { key: "tools", label: "Tool(s) Involved", w: 160, type: "text" },
  { key: "language", label: "Common Language", w: 200, type: "text" },
  { key: "freq", label: "Frequency", w: 100, type: "text" },
  {
    key: "buildOpp",
    label: "Build Opp?",
    w: 110,
    type: "select",
    opts: ["Yes", "No", "Maybe"],
  },
  { key: "notes", label: "Notes", w: 200, type: "text" },
];

export const WR_COLS: ColDef[] = [
  { key: "date", label: "Submission Date", w: 130, type: "date" },
  { key: "contact", label: "Contact Name", w: 140, type: "text" },
  { key: "company", label: "Company", w: 130, type: "text" },
  { key: "tools", label: "Current Tools", w: 160, type: "text" },
  { key: "pain", label: "Biggest Pain", w: 220, type: "text" },
  {
    key: "teamSize",
    label: "Team Size",
    w: 100,
    type: "select",
    opts: ["1–5", "6–15", "16–30", "30+", "Unknown"],
  },
  { key: "timeline", label: "Timeline", w: 130, type: "text" },
  { key: "budget", label: "Budget Signal", w: 140, type: "text" },
  {
    key: "auditOffered",
    label: "Audit Offered?",
    w: 120,
    type: "select",
    opts: ["Yes", "No"],
  },
  {
    key: "auditAccepted",
    label: "Audit Accepted?",
    w: 130,
    type: "select",
    opts: ["Yes", "No", "Pending"],
  },
  {
    key: "buildPotential",
    label: "Build Potential",
    w: 120,
    type: "select",
    opts: ["High", "Medium", "Low"],
  },
  { key: "notes", label: "Notes", w: 200, type: "text" },
];

export const CALLS_COLS: ColDef[] = [
  { key: "date", label: "Call Date", w: 110, type: "date" },
  { key: "contact", label: "Contact Name", w: 140, type: "text" },
  { key: "company", label: "Company", w: 130, type: "text" },
  { key: "duration", label: "Duration", w: 100, type: "text" },
  { key: "workflow", label: "Workflow Summary", w: 220, type: "text" },
  { key: "painPoints", label: "Pain Points", w: 200, type: "text" },
  { key: "tools", label: "Tools Mentioned", w: 160, type: "text" },
  { key: "teamStruct", label: "Team Structure", w: 170, type: "text" },
  { key: "bottleneck", label: "Biggest Bottleneck", w: 190, type: "text" },
  {
    key: "fit",
    label: "Fit Assessment",
    w: 130,
    type: "select",
    opts: ["Strong", "Moderate", "Poor"],
  },
  {
    key: "auditOffered",
    label: "Audit Offered?",
    w: 120,
    type: "select",
    opts: ["Yes", "No"],
  },
  {
    key: "buildOffered",
    label: "Build Offered?",
    w: 120,
    type: "select",
    opts: ["Yes", "No"],
  },
  {
    key: "fuSent",
    label: "Follow-Up Sent?",
    w: 130,
    type: "select",
    opts: ["Yes", "No"],
  },
  { key: "nextStep", label: "Next Step", w: 180, type: "text" },
  { key: "notes", label: "Notes", w: 200, type: "text" },
];

export const METRICS_ROWS = [
  "Connection Requests Sent",
  "New Connections Made",
  "First Messages Sent",
  "Replies Received",
  "Reply Rate (%)",
  "Research Conversations Active",
  "WR Forms Sent",
  "WR Forms Completed",
  "Calls Booked",
  "Audits Offered",
  "Audits Accepted",
  "Builds Proposed",
  "Revenue Closed ($)",
] as const;

export type TrackerRow = Record<string, string>;
export type MetricsRow = { metric: string; week: string; month: string; notes: string };

export type TrackerData = {
  Prospects: TrackerRow[];
  Companies: TrackerRow[];
  "Messages Log": TrackerRow[];
  "Research Insights": TrackerRow[];
  "WR Submissions": TrackerRow[];
  "Call Notes": TrackerRow[];
  Metrics: MetricsRow[];
};

export const makeRows = (n: number): TrackerRow[] =>
  Array.from({ length: n }, () => ({}));

export const buildInitialData = (): TrackerData => ({
  Prospects: makeRows(10),
  Companies: makeRows(8),
  "Messages Log": makeRows(8),
  "Research Insights": makeRows(6),
  "WR Submissions": makeRows(5),
  "Call Notes": makeRows(5),
  Metrics: METRICS_ROWS.map((r) => ({ metric: r, week: "", month: "", notes: "" })),
});

export const COLS_MAP: Partial<Record<TabId, ColDef[]>> = {
  Prospects: PROSPECTS_COLS,
  Companies: COMPANIES_COLS,
  "Messages Log": MESSAGES_COLS,
  "Research Insights": INSIGHTS_COLS,
  "WR Submissions": WR_COLS,
  "Call Notes": CALLS_COLS,
};

export const STORAGE_KEY = "haleo-internal-outreach-v1";
