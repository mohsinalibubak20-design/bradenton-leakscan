import Image from "next/image";
import { Container } from "@/components/Container";
import { LeadSmartForm } from "@/components/LeadSmartForm";
import { site } from "@/lib/site";

/* Inline, dependency-free icons (stroke = currentColor). No emojis. */
type IconProps = { className?: string };

function PhoneIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function ClockIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function ScanIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function BoltIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />
    </svg>
  );
}

function MapPinIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ShieldCheckIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function StarIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.5l2.9 5.9 6.5.95-4.7 4.58 1.11 6.47L12 17.4l-5.81 3.05 1.11-6.47L2.6 9.35l6.5-.95L12 2.5z" />
    </svg>
  );
}

const highlights = [
  { icon: ClockIcon, title: "24/7 Emergency Service" },
  { icon: ScanIcon, title: "Advanced Detection Tech" },
  { icon: BoltIcon, title: "Fast Local Response" },
  { icon: MapPinIcon, title: `Serving ${site.county}` },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Full-bleed background photo */}
      <Image
        src="/images/hero-leak-detection.png"
        alt="Bradenton LeakScan technician using a thermal imaging camera to find a hidden water leak inside a bright Florida home"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[60%_center]"
      />
      {/* Readability overlay — keeps the photo visible while the copy stays legible */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950/85 via-slate-950/70 to-slate-950/75 lg:bg-gradient-to-r lg:from-slate-950/90 lg:via-slate-950/70 lg:to-slate-950/40"
        aria-hidden
      />

      <Container className="relative grid items-center gap-10 py-14 lg:grid-cols-2 lg:gap-14 lg:py-24">
        {/* Copy column */}
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-sky-100 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-400" />
            </span>
            Advanced Non-Invasive Leak Detection
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Find Hidden Leaks Fast.
            <span className="mt-1 block text-sky-400">
              Prevent Costly Damage.
            </span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-slate-200">
            Bradenton LeakScan pinpoints{" "}
            <strong className="font-semibold text-white">
              slab, pool, and underground leaks
            </strong>{" "}
            to the inch — using thermal imaging, acoustic listening, and pressure
            testing. No digging, no demolition, no guesswork. Just fast, same-day
            answers across Bradenton and all of {site.county}.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={site.phoneHref}
              className="group inline-flex w-full items-center justify-center gap-2.5 whitespace-nowrap rounded-xl bg-sky-500 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-sky-900/40 transition-all hover:-translate-y-0.5 hover:bg-sky-400 sm:w-auto"
            >
              <PhoneIcon className="h-5 w-5 shrink-0 transition-transform group-hover:rotate-12" />
              Call {site.phone}
            </a>
            <a
              href="#quote-form"
              className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-xl border border-white/30 bg-white/10 px-6 py-4 text-base font-semibold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/20 sm:w-auto"
            >
              Request a Free Quote
            </a>
          </div>

          {/* Rating / trust line */}
          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-300">
            <span className="flex items-center gap-0.5 text-amber-400">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </span>
            <span className="font-medium text-white">
              Trusted by Suncoast homeowners
            </span>
            <span className="text-white/30" aria-hidden>
              |
            </span>
            <span className="inline-flex items-center gap-1">
              <ShieldCheckIcon className="h-4 w-4 text-sky-400" />
              Licensed &amp; Insured · {site.license}
            </span>
          </div>

          {/* Trust / service highlights */}
          <dl className="mt-8 grid grid-cols-2 gap-x-5 gap-y-4 border-t border-white/15 pt-7">
            {highlights.map((h) => (
              <div key={h.title} className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-500/20 text-sky-300 ring-1 ring-inset ring-sky-400/30">
                  <h.icon className="h-5 w-5" />
                </span>
                <dt className="text-sm font-semibold leading-tight text-white">
                  {h.title}
                </dt>
              </div>
            ))}
          </dl>
        </div>

        {/* LeadSmart form card */}
        <div id="quote-form" className="w-full lg:justify-self-end lg:max-w-md">
          <div className="rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-slate-900/10 sm:p-7">
            <div className="mb-5">
              <p className="text-xl font-extrabold tracking-tight text-slate-900">
                Request Your Free Quote
              </p>
              <p className="mt-1.5 text-sm text-slate-500">
                Same-day response · No obligation · Flat-rate pricing quoted
                before we start.
              </p>
            </div>
            <LeadSmartForm
              funnel={4}
              title="Request a Free Leak Detection Estimate"
              height={560}
              priority
              className="ring-1 ring-slate-200"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
