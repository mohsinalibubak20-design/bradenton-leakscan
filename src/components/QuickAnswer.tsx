import type { ReactNode } from "react";

/**
 * Featured-snippet / voice-search "Quick Answer" block.
 * Place near the top of a page. Keep the answer 40–70 words.
 */
export function QuickAnswer({
  question,
  children,
}: {
  question: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-sky-200 bg-sky-50/70 p-6 shadow-sm">
      <div className="flex items-center gap-2">
        <span
          className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-600 text-sm font-bold text-white"
          aria-hidden
        >
          Q
        </span>
        <h2 className="text-base font-bold uppercase tracking-wide text-sky-800">
          Quick Answer
        </h2>
      </div>
      <p className="mt-3 text-lg font-semibold text-slate-900">{question}</p>
      <p className="mt-2 text-base leading-relaxed text-slate-700">{children}</p>
    </div>
  );
}
