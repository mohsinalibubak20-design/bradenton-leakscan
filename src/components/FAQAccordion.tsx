import type { Faq } from "@/lib/site";
import { JsonLd, faqSchema } from "@/lib/schema";

/**
 * Accessible FAQ accordion (native <details>) that also emits FAQPage schema.
 * Set `withSchema={false}` if another FAQ block on the same page already emits it.
 */
export function FAQAccordion({
  items,
  withSchema = true,
}: {
  items: Faq[];
  withSchema?: boolean;
}) {
  return (
    <div className="space-y-4">
      {withSchema && <JsonLd data={faqSchema(items)} />}
      {items.map((f) => (
        <details
          key={f.q}
          className="group rounded-2xl border border-slate-200 bg-white p-6 open:border-sky-200 open:bg-sky-50/40"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900">
            {f.q}
            <span
              className="shrink-0 text-2xl leading-none text-sky-600 transition-transform group-open:rotate-45"
              aria-hidden
            >
              +
            </span>
          </summary>
          <p className="mt-3 text-base leading-relaxed text-slate-600">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
