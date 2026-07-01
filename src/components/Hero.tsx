import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
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

const features = [
  { icon: ClockIcon, title: "24/7 Emergency Service", sub: "Active leak? We respond fast." },
  { icon: ScanIcon, title: "Advanced Detection Tech", sub: "Thermal, acoustic & pressure." },
  { icon: BoltIcon, title: "Fast Local Response", sub: "Same-day appointments." },
  { icon: MapPinIcon, title: "Bradenton & Manatee County", sub: "Serving the full Suncoast." },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white">
      {/* Decorative background accents */}
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-sky-200/40 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-sky-100/60 blur-3xl"
        aria-hidden
      />

      <Container className="relative grid items-center gap-12 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
        {/* Copy column */}
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-sky-700 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-600" />
            </span>
            Advanced Non-Invasive Leak Detection
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Find Hidden Leaks Fast.
            <span className="mt-1 block text-sky-600">
              Prevent Costly Damage.
            </span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Bradenton LeakScan pinpoints{" "}
            <strong className="font-semibold text-slate-800">
              slab, pool, and underground leaks
            </strong>{" "}
            to the inch — using thermal imaging, acoustic listening, and pressure
            testing. No digging, no demolition, no guesswork. Just fast, same-day
            answers across Bradenton and all of {site.county}.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={site.phoneHref}
              className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-sky-600 px-7 py-4 text-base font-semibold text-white shadow-lg shadow-sky-600/25 transition-all hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-xl hover:shadow-sky-600/30"
            >
              <PhoneIcon className="h-5 w-5 transition-transform group-hover:rotate-12" />
              Call Now
              <span className="hidden font-bold sm:inline">· {site.phone}</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-7 py-4 text-base font-semibold text-slate-800 shadow-sm transition-all hover:-translate-y-0.5 hover:border-sky-400 hover:text-sky-700 hover:shadow-md"
            >
              Request a Free Quote
            </Link>
          </div>

          {/* Rating / trust line */}
          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-500">
            <span className="flex items-center gap-0.5 text-amber-400">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </span>
            <span className="font-medium text-slate-700">
              Trusted by Suncoast homeowners
            </span>
            <span className="text-slate-300" aria-hidden>
              |
            </span>
            <span className="inline-flex items-center gap-1">
              <ShieldCheckIcon className="h-4 w-4 text-sky-600" />
              Licensed &amp; Insured · {site.license}
            </span>
          </div>

          {/* Trust / feature row */}
          <dl className="mt-9 grid grid-cols-2 gap-x-5 gap-y-5 border-t border-slate-200/80 pt-8 sm:grid-cols-4">
            {features.map((f) => (
              <div key={f.title} className="flex flex-col gap-2">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-700 ring-1 ring-sky-200/70">
                  <f.icon className="h-5 w-5" />
                </span>
                <dt className="text-sm font-bold leading-tight text-slate-900">
                  {f.title}
                </dt>
                <dd className="text-xs leading-snug text-slate-500">{f.sub}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Image column */}
        <div className="relative lg:pl-4">
          {/* Glow accent behind the image */}
          <div
            className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-sky-500/20 via-sky-300/10 to-transparent blur-2xl"
            aria-hidden
          />
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-slate-900/10 sm:aspect-[4/3] lg:aspect-[5/6]">
            <Image
              src="/images/hero-technician-thermal.webp"
              alt="Bradenton LeakScan technician using a thermal imaging camera to find a hidden water leak inside a Florida home"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover"
            />
            {/* Subtle bottom gradient for legibility of the floating badge */}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-900/50 to-transparent"
              aria-hidden
            />
          </div>

          {/* Floating credibility badge */}
          <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white/95 px-5 py-3.5 shadow-xl backdrop-blur sm:left-6">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-600 text-white">
              <ShieldCheckIcon className="h-6 w-6" />
            </span>
            <div className="leading-tight">
              <div className="text-sm font-extrabold text-slate-900">
                Pinpoint Accuracy
              </div>
              <div className="text-xs font-medium text-slate-500">
                Located to the inch — no demolition
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
