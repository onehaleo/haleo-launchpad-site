import React, { useMemo, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import SEOHead from "@/components/SEOHead";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

const TEAM_OPTIONS = [
  "Agency / studio",
  "Service business",
  "Operations-heavy small team",
  "Other",
] as const;

const CURRENT_TOOL_OPTIONS: { id: string; label: string }[] = [
  { id: "spreadsheets", label: "Spreadsheets" },
  { id: "notion", label: "Notion" },
  { id: "airtable", label: "Airtable" },
  { id: "clickup_asana_trello", label: "ClickUp / Asana / Trello" },
  { id: "crm", label: "CRM" },
  { id: "email_slack", label: "Email / Slack" },
  { id: "paper_manual", label: "Paper or manual notes" },
  { id: "other_tools", label: "Other" },
];

const IMPROVE_FIRST_OPTIONS: { id: string; label: string }[] = [
  { id: "tracking_work", label: "Tracking work" },
  { id: "client_onboarding", label: "Client onboarding" },
  { id: "reporting", label: "Reporting" },
  { id: "follow_up", label: "Follow-up" },
  { id: "ownership_handoffs", label: "Ownership / handoffs" },
  { id: "lead_intake", label: "Lead intake" },
  { id: "fulfillment_task", label: "Fulfillment / task tracking" },
  { id: "inventory_production", label: "Inventory / production tracking" },
  { id: "improve_other", label: "Other" },
];

const initialToolState = () =>
  Object.fromEntries(CURRENT_TOOL_OPTIONS.map(({ id }) => [id, false])) as Record<string, boolean>;

const initialImproveState = () =>
  Object.fromEntries(IMPROVE_FIRST_OPTIONS.map(({ id }) => [id, false])) as Record<string, boolean>;

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

const normalizeWebsite = (raw: string) => {
  const t = raw.trim();
  if (!t) return "";
  try {
    new URL(t);
    return t;
  } catch {
    try {
      const withProto = `https://${t}`;
      new URL(withProto);
      return withProto;
    } catch {
      return t;
    }
  }
};

/** Default Formspree form; override with `VITE_WORKFLOW_FORM_ENDPOINT` in `.env` if needed. */
const DEFAULT_WORKFLOW_FORM_ENDPOINT = "https://formspree.io/f/mojrjebn";

const WorkflowReview = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [website, setWebsite] = useState("");
  const [teamType, setTeamType] = useState<string>("");
  const [messiest, setMessiest] = useState("");
  const [currentTools, setCurrentTools] = useState(initialToolState);
  const [improveFirst, setImproveFirst] = useState(initialImproveState);
  const [notes, setNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [touched, setTouched] = useState(false);

  const endpoint = useMemo(
    () =>
      (import.meta.env.VITE_WORKFLOW_FORM_ENDPOINT as string | undefined)?.trim() ||
      DEFAULT_WORKFLOW_FORM_ENDPOINT,
    []
  );

  const selectedTools = useMemo(
    () =>
      CURRENT_TOOL_OPTIONS.filter(({ id }) => currentTools[id]).map(({ label }) => label),
    [currentTools]
  );

  const selectedImprove = useMemo(
    () =>
      IMPROVE_FIRST_OPTIONS.filter(({ id }) => improveFirst[id]).map(({ label }) => label),
    [improveFirst]
  );

  const websiteHasError = useMemo(() => {
    if (!touched || !website.trim()) return false;
    try {
      new URL(normalizeWebsite(website));
      return false;
    } catch {
      return true;
    }
  }, [touched, website]);

  const validate = (): string | null => {
    if (!name.trim()) return "Please enter your name.";
    if (!email.trim() || !isValidEmail(email)) return "Please enter a valid email.";
    if (!company.trim()) return "Please enter your business or company name.";
    if (!teamType) return "Please select what kind of team you are.";
    if (!messiest.trim()) return "Please describe the workflow that feels messiest right now.";
    if (selectedTools.length === 0) return "Please select at least one tool you are currently using.";
    if (website.trim()) {
      const w = normalizeWebsite(website);
      try {
        new URL(w);
      } catch {
        return "Please enter a valid website URL, or leave the field blank.";
      }
    }
    return null;
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setCompany("");
    setWebsite("");
    setTeamType("");
    setMessiest("");
    setCurrentTools(initialToolState());
    setImproveFirst(initialImproveState());
    setNotes("");
    setTouched(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    setError(null);

    const v = validate();
    if (v) {
      setError(v);
      return;
    }

    const websiteNormalized = website.trim() ? normalizeWebsite(website) : "";

    const payload: Record<string, string> = {
      _subject: `Workflow review request — ${company.trim()}`,
      _replyto: email.trim(),
      name: name.trim(),
      email: email.trim(),
      company_name: company.trim(),
      website: websiteNormalized,
      team_type: teamType,
      messiest_workflow: messiest.trim(),
      current_tools: selectedTools.join(", "),
      improve_first: selectedImprove.length ? selectedImprove.join(", ") : "—",
      additional_notes: notes.trim() || "—",
      intended_recipient: "hello@onehaleo.com",
      message: [
        `Name: ${name.trim()}`,
        `Email: ${email.trim()}`,
        `Company: ${company.trim()}`,
        `Website: ${websiteNormalized || "—"}`,
        `Team: ${teamType}`,
        "",
        "Messiest workflow:",
        messiest.trim(),
        "",
        "Currently using:",
        selectedTools.join(", "),
        "",
        "Improve first:",
        selectedImprove.length ? selectedImprove.join(", ") : "—",
        "",
        "Notes:",
        notes.trim() || "—",
      ].join("\n"),
    };

    setSubmitting(true);
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      let data: { error?: string; errors?: unknown; ok?: boolean } | null = null;
      try {
        const text = await res.text();
        if (text) data = JSON.parse(text) as typeof data;
      } catch {
        data = null;
      }

      if (!res.ok) {
        const msg =
          (typeof data?.error === "string" && data.error) ||
          (data?.errors ? "Validation failed. Check your entries." : null) ||
          `Request failed (${res.status})`;
        throw new Error(msg);
      }

      setSuccess(true);
      resetForm();
    } catch (err) {
      console.error(err);
      setError(
        "Something went wrong. Please try again, or email hello@onehaleo.com directly."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const fieldClass = (invalid: boolean) =>
    cn(invalid && touched && "border-red-500 focus-visible:ring-red-500");

  const toolsInvalid = touched && selectedTools.length === 0;

  return (
    <PageTransition animate>
      <SEOHead
        title="Request a Workflow Review | Haleo"
        description="Tell Haleo what workflow is managed manually or across tools. We review it and reply with the clearest next step."
        keywords="workflow review, internal systems, Haleo"
      />
      <div className="min-h-screen bg-haleo-cloud">
        <Navigation />
        <main className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h1 className="text-3xl sm:text-4xl font-bold text-haleo-ink leading-tight">
                Request a Workflow Review
              </h1>
              <p className="text-haleo-gray mt-4 text-base sm:text-lg leading-relaxed">
                Tell us what workflow is currently being managed manually, across spreadsheets, or between disconnected tools. We&apos;ll review it and reply with the clearest next step.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 border border-purple-100/80">
              {success ? (
                <p className="text-haleo-ink text-center text-base sm:text-lg leading-relaxed">
                  Thanks — your workflow review request was sent. We&apos;ll review it and reply with next steps.
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {error && (
                    <div
                      className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900"
                      role="alert"
                    >
                      {error}
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="wf-name">Name</Label>
                    <Input
                      id="wf-name"
                      name="name"
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={fieldClass(touched && !name.trim())}
                      disabled={submitting}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="wf-email">Email</Label>
                    <Input
                      id="wf-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={fieldClass(touched && (!email.trim() || !isValidEmail(email)))}
                      disabled={submitting}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="wf-company">Business / company name</Label>
                    <Input
                      id="wf-company"
                      name="company"
                      autoComplete="organization"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className={fieldClass(touched && !company.trim())}
                      disabled={submitting}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="wf-website">Website (optional)</Label>
                    <Input
                      id="wf-website"
                      name="website"
                      type="url"
                      inputMode="url"
                      placeholder="https://"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      className={fieldClass(websiteHasError)}
                      disabled={submitting}
                    />
                  </div>

                  <fieldset className="space-y-3">
                    <legend className="text-sm font-medium text-haleo-ink mb-1">
                      What kind of team are you?
                    </legend>
                    <RadioGroup
                      value={teamType}
                      onValueChange={setTeamType}
                      disabled={submitting}
                      className="grid gap-3 sm:grid-cols-2"
                    >
                      {TEAM_OPTIONS.map((opt, idx) => (
                        <label
                          key={opt}
                          className={cn(
                            "flex items-center gap-3 rounded-lg border border-input px-3 py-2.5 cursor-pointer hover:bg-haleo-cloud/60",
                            teamType === opt && "border-haleo-core bg-haleo-cloud/40"
                          )}
                        >
                          <RadioGroupItem value={opt} id={`team-opt-${idx}`} />
                          <span className="text-sm text-haleo-gray">{opt}</span>
                        </label>
                      ))}
                    </RadioGroup>
                    {touched && !teamType && (
                      <p className="text-sm text-red-600">Please select an option.</p>
                    )}
                  </fieldset>

                  <div className="space-y-2">
                    <Label htmlFor="wf-messy">What workflow feels messiest right now?</Label>
                    <Textarea
                      id="wf-messy"
                      name="messiest_workflow"
                      required
                      rows={5}
                      placeholder="Example: client onboarding, lead intake, project tracking, reporting, fulfillment, handoffs, approvals…"
                      value={messiest}
                      onChange={(e) => setMessiest(e.target.value)}
                      className={fieldClass(touched && !messiest.trim())}
                      disabled={submitting}
                    />
                  </div>

                  <fieldset className="space-y-3">
                    <legend className="text-sm font-medium text-haleo-ink">
                      What are you currently using to manage it?
                    </legend>
                    <p className="text-xs text-haleo-gray">Select all that apply.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {CURRENT_TOOL_OPTIONS.map(({ id, label }) => (
                        <label
                          key={id}
                          className={cn(
                            "flex items-center gap-3 rounded-lg border px-3 py-2.5 cursor-pointer text-sm text-haleo-gray",
                            toolsInvalid ? "border-red-300" : "border-input",
                            currentTools[id] && "border-haleo-core bg-haleo-cloud/40"
                          )}
                        >
                          <Checkbox
                            id={`tool-${id}`}
                            checked={currentTools[id]}
                            onCheckedChange={(v) =>
                              setCurrentTools((prev) => ({ ...prev, [id]: v === true }))
                            }
                            disabled={submitting}
                          />
                          <span>{label}</span>
                        </label>
                      ))}
                    </div>
                    {toolsInvalid && (
                      <p className="text-sm text-red-600">Select at least one option.</p>
                    )}
                  </fieldset>

                  <fieldset className="space-y-3">
                    <legend className="text-sm font-medium text-haleo-ink">
                      What would you like to improve first?{" "}
                      <span className="font-normal text-haleo-gray">(optional)</span>
                    </legend>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {IMPROVE_FIRST_OPTIONS.map(({ id, label }) => (
                        <label
                          key={id}
                          className="flex items-center gap-3 rounded-lg border border-input px-3 py-2.5 cursor-pointer text-sm text-haleo-gray hover:bg-haleo-cloud/60"
                        >
                          <Checkbox
                            id={`improve-${id}`}
                            checked={improveFirst[id]}
                            onCheckedChange={(v) =>
                              setImproveFirst((prev) => ({ ...prev, [id]: v === true }))
                            }
                            disabled={submitting}
                          />
                          <span>{label}</span>
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  <div className="space-y-2">
                    <Label htmlFor="wf-notes">
                      Anything else we should know?{" "}
                      <span className="font-normal text-haleo-gray">(optional)</span>
                    </Label>
                    <Textarea
                      id="wf-notes"
                      name="notes"
                      rows={4}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      disabled={submitting}
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="gradient-bg text-white px-8 py-3.5 rounded-full font-semibold hover:opacity-90 transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none w-full sm:w-auto"
                    >
                      {submitting ? "Sending…" : "Send Workflow Review Request"}
                    </button>
                  </div>

                  <p className="text-xs text-haleo-gray text-center sm:text-left pt-2 border-t border-haleo-cloud">
                    Prefer email? Reach us at hello@onehaleo.com.
                  </p>
                </form>
              )}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default WorkflowReview;
