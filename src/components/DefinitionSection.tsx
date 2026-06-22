import type { Definition } from "@/lib/geo";

/** Entity-rich GEO definition block ("What Is …?"). */
export function DefinitionSection({
  definition,
  as: Tag = "h2",
}: {
  definition: Definition;
  as?: "h2" | "h3";
}) {
  return (
    <div id={definition.id} className="scroll-mt-24">
      <Tag className="text-2xl font-bold tracking-tight text-slate-900">
        {definition.term}
      </Tag>
      <p className="mt-3 rounded-xl border-l-4 border-sky-500 bg-sky-50/60 p-4 text-base font-medium leading-relaxed text-slate-800">
        {definition.answer}
      </p>
      <div className="mt-4 space-y-3 text-base leading-relaxed text-slate-600">
        {definition.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  );
}
