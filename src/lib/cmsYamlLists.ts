/**
 * Decap CMS list widgets often persist entries as `{ item: "text" }` while hand-edited YAML
 * may use plain strings. Normalize to string[] for the site.
 */
export function asStringList(raw: unknown): string[] {
  if (!Array.isArray(raw)) return [];
  const out: string[] = [];
  for (const entry of raw) {
    if (typeof entry === "string" && entry.trim()) {
      out.push(entry);
      continue;
    }
    if (entry && typeof entry === "object") {
      const o = entry as Record<string, unknown>;
      const item = o.item ?? o.Item;
      if (typeof item === "string" && item.trim()) out.push(item);
    }
  }
  return out;
}
