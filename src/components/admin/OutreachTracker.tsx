import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import {
  type TabId,
  TABS,
  STAGE_COLORS,
  STAGE_TEXT,
  REPLY_COLORS,
  COLS_MAP,
  METRICS_ROWS,
  buildInitialData,
  STORAGE_KEY,
  type TrackerData,
  type TrackerRow,
} from "./outreachTrackerConfig";

function daySince(dateStr: string | undefined): number | null {
  if (!dateStr) return null;
  const d = new Date(dateStr);
  const diff = Math.floor((Date.now() - d.getTime()) / 86400000);
  return Number.isNaN(diff) ? null : diff;
}

function staggerDue(row: TrackerRow) {
  if (!row.firstMsgDate || row.replyStatus === "Replied") return false;
  const days = daySince(row.firstMsgDate);
  return days !== null && days >= 5;
}

function loadStoredData(): TrackerData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return buildInitialData();
    const parsed = JSON.parse(raw) as TrackerData;
    if (!parsed || typeof parsed !== "object") return buildInitialData();
    const base = buildInitialData();
    (Object.keys(base) as (keyof TrackerData)[]).forEach((k) => {
      if (Array.isArray(parsed[k])) base[k] = parsed[k] as never;
    });
    if (!Array.isArray(base.Metrics) || base.Metrics.length !== METRICS_ROWS.length) {
      base.Metrics = METRICS_ROWS.map((r) => ({ metric: r, week: "", month: "", notes: "" }));
    }
    return base;
  } catch {
    return buildInitialData();
  }
}

type RowRef = { row: TrackerRow; index: number };

export default function OutreachTracker() {
  const [activeTab, setActiveTab] = useState<TabId>("Prospects");
  const [data, setData] = useState<TrackerData>(() => loadStoredData());
  const [editCell, setEditCell] = useState<{ r: number; k: string } | null>(null);
  const [filter, setFilter] = useState("");
  const [stageFilter, setStageFilter] = useState("All");
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      } catch {
        /* quota */
      }
    }, 400);
    return () => {
      if (saveTimer.current) clearTimeout(saveTimer.current);
    };
  }, [data]);

  const cols = COLS_MAP[activeTab] ?? [];

  const updateCell = useCallback((tab: TabId, row: number, key: string, val: string) => {
    setData((prev) => {
      if (tab === "Metrics") {
        const rows = [...prev.Metrics];
        rows[row] = { ...rows[row], [key]: val };
        return { ...prev, Metrics: rows };
      }
      const rows = [...(prev[tab] as TrackerRow[])];
      rows[row] = { ...rows[row], [key]: val };
      return { ...prev, [tab]: rows };
    });
    setEditCell(null);
  }, []);

  const addRow = useCallback(() => {
    if (activeTab === "Metrics") return;
    setData((prev) => ({
      ...prev,
      [activeTab]: [...(prev[activeTab] as TrackerRow[]), {}],
    }));
  }, [activeTab]);

  const exportJson = useCallback(() => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `haleo-outreach-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(a.href);
  }, [data]);

  const importJson = useCallback((file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(String(reader.result)) as Partial<TrackerData>;
        const fresh = buildInitialData();
        (Object.keys(fresh) as (keyof TrackerData)[]).forEach((k) => {
          if (Array.isArray(parsed[k])) fresh[k] = parsed[k] as never;
        });
        setData(fresh);
      } catch {
        /* ignore */
      }
    };
    reader.readAsText(file);
  }, []);

  const filteredRows: RowRef[] = useMemo(() => {
    if (activeTab === "Metrics") return [];
    let rows: RowRef[] = (data[activeTab] as TrackerRow[]).map((row, index) => ({ row, index }));
    if (filter) {
      const f = filter.toLowerCase();
      rows = rows.filter(({ row }) =>
        Object.values(row).some((v) => String(v || "").toLowerCase().includes(f))
      );
    }
    if (activeTab === "Prospects" && stageFilter !== "All") {
      rows = rows.filter(({ row }) => row.stage === stageFilter);
    }
    return rows;
  }, [activeTab, data, filter, stageFilter]);

  const metrics = useMemo(() => {
    if (activeTab !== "Prospects") return null;
    const rows = data.Prospects;
    return {
      total: rows.filter((r) => r.name).length,
      replied: rows.filter((r) => r.replyStatus === "Replied").length,
      active: rows.filter((r) =>
        ["Researching", "Review Offered", "Audit Offered", "Build Offered"].includes(r.stage || "")
      ).length,
      clients: rows.filter((r) => r.stage === "Client").length,
    };
  }, [activeTab, data.Prospects]);

  const dueProspects = useMemo(
    () => data.Prospects.filter((r) => r.name && staggerDue(r)),
    [data.Prospects]
  );

  const tableMinWidth = cols.reduce((a, c) => a + c.w, 0);

  return (
    <div className="min-w-0 max-w-full text-[13px] text-haleo-ink min-h-[320px] font-sans">
      <h2 className="sr-only">Haleo Outreach Tracker</h2>

      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={exportJson}
            className="rounded-md border border-haleo-core/30 bg-white px-3 py-1.5 text-xs font-medium text-haleo-core hover:bg-haleo-cloud"
          >
            Export JSON
          </button>
          <label className="cursor-pointer rounded-md border border-haleo-core/30 bg-white px-3 py-1.5 text-xs font-medium text-haleo-core hover:bg-haleo-cloud">
            Import JSON
            <input
              type="file"
              accept="application/json,.json"
              className="hidden"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) importJson(f);
                e.target.value = "";
              }}
            />
          </label>
        </div>
      </div>

      <div className="mb-3 flex gap-1 overflow-x-auto border-b border-slate-200/90 pb-px">
        {TABS.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => {
              setActiveTab(t);
              setFilter("");
              setStageFilter("All");
            }}
            className={cn(
              "whitespace-nowrap rounded-t-md border px-3.5 py-1.5 text-xs transition-colors",
              activeTab === t
                ? "border-slate-300 border-b-white bg-white font-medium text-haleo-ink -mb-px"
                : "border-transparent bg-transparent font-normal text-haleo-gray hover:text-haleo-ink"
            )}
          >
            {t}
          </button>
        ))}
      </div>

      {activeTab === "Prospects" && metrics && (
        <div className="mb-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {[
            { label: "Total Prospects", val: metrics.total },
            { label: "Replied", val: metrics.replied },
            { label: "Active Convos", val: metrics.active },
            { label: "Clients", val: metrics.clients },
          ].map((m) => (
            <div
              key={m.label}
              className="rounded-md bg-haleo-cloud px-3.5 py-2.5"
            >
              <div className="mb-0.5 text-[11px] text-haleo-gray">{m.label}</div>
              <div className="text-[22px] font-medium">{m.val}</div>
            </div>
          ))}
        </div>
      )}

      {activeTab !== "Metrics" && (
        <div className="mb-2.5 flex flex-wrap items-center gap-2">
          <input
            placeholder="Search…"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="min-w-[120px] max-w-[260px] flex-1 rounded-md border border-input px-2.5 py-1.5 text-xs"
          />
          {activeTab === "Prospects" && (
            <select
              value={stageFilter}
              onChange={(e) => setStageFilter(e.target.value)}
              className="rounded-md border border-input px-2.5 py-1.5 text-xs"
            >
              <option value="All">All Stages</option>
              {Object.keys(STAGE_COLORS).map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          )}
          <button
            type="button"
            onClick={addRow}
            className="rounded-md border border-input bg-white px-3 py-1.5 text-xs hover:bg-haleo-cloud"
          >
            + Add Row
          </button>
        </div>
      )}

      {activeTab === "Metrics" && (
        <div className="w-full min-w-0 max-w-full rounded-lg border border-slate-200/90">
          <div className="max-h-[min(72dvh,calc(100dvh-14rem))] min-h-[200px] overflow-auto overscroll-contain">
          <table className="w-full min-w-[520px] border-collapse text-xs">
            <thead className="sticky top-0 z-[1] bg-haleo-cloud shadow-[inset_0_-1px_0_0_rgb(226_232_240)]">
              <tr className="border-b border-slate-200/90">
                {["Metric", "This Week", "Month Total", "Notes"].map((h) => (
                  <th
                    key={h}
                    className="whitespace-nowrap px-2.5 py-2 text-left font-medium text-haleo-gray"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.Metrics.map((row, ri) => (
                <tr key={row.metric} className="border-b border-slate-200/90">
                  <td className="whitespace-nowrap px-2.5 py-1.5 font-medium">{row.metric}</td>
                  {(["week", "month", "notes"] as const).map((k) => (
                    <td key={k} className="px-1.5 py-1">
                      {editCell?.r === ri && editCell?.k === k ? (
                        <input
                          autoFocus
                          defaultValue={row[k] || ""}
                          className="w-full rounded border border-input px-1 py-0.5 text-xs"
                          onBlur={(e) => updateCell("Metrics", ri, k, e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter")
                              updateCell("Metrics", ri, k, (e.target as HTMLInputElement).value);
                          }}
                        />
                      ) : (
                        <button
                          type="button"
                          onClick={() => setEditCell({ r: ri, k })}
                          className={cn(
                            "min-h-6 w-full cursor-text rounded px-1.5 py-0.5 text-left",
                            row[k] ? "text-haleo-ink" : "text-slate-400"
                          )}
                        >
                          {row[k] || "—"}
                        </button>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
      )}

      {activeTab !== "Metrics" && (
        <div className="w-full min-w-0 max-w-full rounded-lg border border-slate-200/90 bg-white">
          <div className="max-h-[min(72dvh,calc(100dvh-14rem))] min-h-[240px] overflow-auto overscroll-contain">
          <table
            className="w-full table-fixed border-collapse text-[12px] leading-snug sm:text-[13px]"
            style={{ minWidth: tableMinWidth }}
          >
            <colgroup>
              {cols.map((c) => (
                <col key={c.key} style={{ width: c.w }} />
              ))}
            </colgroup>
            <thead className="sticky top-0 z-[1] bg-haleo-cloud shadow-[inset_0_-1px_0_0_rgb(226_232_240)]">
              <tr className="border-b border-slate-200/90">
                {cols.map((c) => (
                  <th
                    key={c.key}
                    className="whitespace-normal px-2 py-2 text-left text-[11px] font-semibold leading-tight text-haleo-gray"
                    title={c.label}
                  >
                    {c.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {(filteredRows as RowRef[]).map(({ row, index: ri }) => {
                const due = activeTab === "Prospects" && staggerDue(row);
                return (
                  <tr
                    key={`${ri}-${activeTab}`}
                    className={cn(
                      "border-b border-slate-200/90",
                      due && "bg-[#FAEEDA]/15"
                    )}
                  >
                    {cols.map((col) => {
                      const val = row[col.key] || "";
                      const isEditing = editCell?.r === ri && editCell?.k === col.key;
                      let cellBg = "transparent";
                      if (col.key === "stage" && val) cellBg = STAGE_COLORS[val] || "transparent";
                      if (col.key === "replyStatus" && val)
                        cellBg = REPLY_COLORS[val] || "#F1EFE8";
                      if (col.key === "buildPotential") {
                        if (val === "High") cellBg = "#C0DD97";
                        else if (val === "Medium") cellBg = "#FAEEDA";
                        else if (val === "Low") cellBg = "#F7C1C1";
                      }
                      return (
                        <td key={col.key} className="align-top px-1.5 py-1.5">
                          {isEditing ? (
                            col.type === "select" ? (
                              <select
                                autoFocus
                                value={val}
                                onChange={(e) => updateCell(activeTab, ri, col.key, e.target.value)}
                                onBlur={() => setEditCell(null)}
                                className="w-full rounded border border-input py-0.5 text-xs"
                              >
                                <option value="">—</option>
                                {(col.opts || []).map((o) => (
                                  <option key={o} value={o}>
                                    {o}
                                  </option>
                                ))}
                              </select>
                            ) : col.type === "date" ? (
                              <input
                                type="date"
                                autoFocus
                                defaultValue={val}
                                className="w-full rounded border border-input py-0.5 text-xs"
                                onBlur={(e) =>
                                  updateCell(activeTab, ri, col.key, e.target.value)
                                }
                                onKeyDown={(e) => {
                                  if (e.key === "Enter")
                                    updateCell(
                                      activeTab,
                                      ri,
                                      col.key,
                                      (e.target as HTMLInputElement).value
                                    );
                                }}
                              />
                            ) : (
                              <input
                                autoFocus
                                defaultValue={val}
                                className="w-full rounded border border-input py-0.5 text-xs"
                                onBlur={(e) =>
                                  updateCell(activeTab, ri, col.key, e.target.value)
                                }
                                onKeyDown={(e) => {
                                  if (e.key === "Enter")
                                    updateCell(
                                      activeTab,
                                      ri,
                                      col.key,
                                      (e.target as HTMLInputElement).value
                                    );
                                }}
                              />
                            )
                          ) : (
                            <button
                              type="button"
                              onClick={() => setEditCell({ r: ri, k: col.key })}
                              title={val ? String(val) : undefined}
                              className={cn(
                                "min-h-[1.75rem] w-full max-w-full cursor-text rounded px-1.5 py-1 text-left text-[12px] sm:text-[13px]",
                                col.type === "text" || col.key === "notes" || col.key === "painPoints" || col.key === "nextAction" || col.key === "text"
                                  ? "line-clamp-3 break-words text-left"
                                  : "truncate",
                                col.key === "stage" && val && "font-medium"
                              )}
                              style={{
                                backgroundColor: cellBg === "transparent" ? undefined : cellBg,
                                color:
                                  col.key === "stage" && val
                                    ? STAGE_TEXT[val] || "inherit"
                                    : undefined,
                              }}
                            >
                              {col.type === "url" && val ? (
                                <span className="text-haleo-core underline">{val}</span>
                              ) : val ? (
                                val
                              ) : (
                                "—"
                              )}
                            </button>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
          </div>
        </div>
      )}

      {activeTab === "Prospects" && dueProspects.length > 0 && (
        <div className="mt-3 rounded-md border border-amber-400/60 bg-[#FAEEDA] px-3.5 py-2 text-xs leading-relaxed text-[#633806]">
          <span aria-hidden>⚠ </span>
          {dueProspects.length} prospect{dueProspects.length > 1 ? "s" : ""} overdue for follow-up
          (5+ days, no reply):{" "}
          <strong className="break-words font-semibold">{dueProspects.map((r) => r.name).join(", ")}</strong>
        </div>
      )}

      <p className="mt-2 text-[11px] text-haleo-gray">
        Click any cell to edit · Data saves to this browser (localStorage) · Back up with Export JSON
      </p>
    </div>
  );
}
