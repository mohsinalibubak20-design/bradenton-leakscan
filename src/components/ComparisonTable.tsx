import type { Comparison } from "@/lib/geo";

/** GEO comparison section ("X vs Y") with two entity columns. */
export function ComparisonTable({
  comparison,
  as: Tag = "h2",
}: {
  comparison: Comparison;
  as?: "h2" | "h3";
}) {
  return (
    <div id={comparison.id} className="scroll-mt-24">
      <Tag className="text-2xl font-bold tracking-tight text-slate-900">
        {comparison.title}
      </Tag>
      <p className="mt-3 text-base leading-relaxed text-slate-600">
        {comparison.intro}
      </p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {[comparison.left, comparison.right].map((col, i) => (
          <div
            key={col.label}
            className={`rounded-2xl border p-6 ${
              i === 0
                ? "border-sky-200 bg-sky-50/60"
                : "border-slate-200 bg-slate-50"
            }`}
          >
            <h3 className="text-lg font-bold text-slate-900">{col.label}</h3>
            <ul className="mt-4 space-y-2.5">
              {col.points.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="mt-0.5 text-sky-600" aria-hidden>
                    ✓
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-4 rounded-xl bg-slate-900 p-4 text-sm font-medium leading-relaxed text-slate-100">
        <span className="font-bold text-sky-400">Bottom line: </span>
        {comparison.takeaway}
      </p>
    </div>
  );
}
