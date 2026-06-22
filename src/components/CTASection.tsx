import Link from "next/link";
import { Container } from "@/components/Container";
import { site } from "@/lib/site";

export function CTASection({
  title = "Think You Have a Leak in Bradenton? Let's Find It — Fast.",
  subtitle = "Same-day and next-day leak detection across Manatee County. Get an exact, flat-rate quote before any work begins.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-600 to-sky-800">
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, white 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden
      />
      <Container className="relative flex flex-col items-center gap-6 py-16 text-center">
        <h2 className="max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-sky-100">
          {subtitle}
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={site.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-base font-semibold text-sky-700 shadow-sm transition-colors hover:bg-sky-50"
          >
            <span aria-hidden>📞</span> Call {site.phone}
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg border border-white/40 bg-sky-500/20 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-sky-500/40"
          >
            Request a Free Quote
          </Link>
        </div>
        <p className="text-xs font-medium text-sky-200">
          Licensed &amp; Insured · {site.license} · Serving all of {site.county}
        </p>
      </Container>
    </section>
  );
}

/** Compact inline CTA used between content sections on long pages. */
export function InlineCTA({
  text = "Need leak detection in Bradenton today?",
}: {
  text?: string;
}) {
  return (
    <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-sky-200 bg-sky-50 p-5 sm:flex-row">
      <p className="text-base font-semibold text-slate-900">{text}</p>
      <div className="flex shrink-0 gap-3">
        <a
          href={site.phoneHref}
          className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-sky-700"
        >
          📞 {site.phone}
        </a>
        <Link
          href="/contact"
          className="inline-flex items-center rounded-lg border border-sky-300 bg-white px-4 py-2.5 text-sm font-semibold text-sky-700 hover:bg-sky-100"
        >
          Free Quote
        </Link>
      </div>
    </div>
  );
}
