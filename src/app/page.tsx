import Link from "next/link";
import { Container } from "@/components/Container";
import { Section, SectionHeading } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { QuickAnswer } from "@/components/QuickAnswer";
import { DefinitionSection } from "@/components/DefinitionSection";
import { ComparisonTable } from "@/components/ComparisonTable";
import { FAQAccordion } from "@/components/FAQAccordion";
import { SiteImage } from "@/components/SiteImage";
import { faqs, services, serviceAreas, site } from "@/lib/site";
import { getDefinition, getComparison } from "@/lib/geo";
import { locations } from "@/lib/locations";

const trustPoints = [
  { stat: "Same Day", label: "Appointments available" },
  { stat: "No Digging", label: "Non-invasive technology" },
  { stat: "Flat Rate", label: "Quoted before we start" },
  { stat: "Licensed", label: site.license },
];

const whyUs = [
  {
    icon: "🎯",
    title: "Pinpoint Accuracy",
    body: "We locate leaks to within inches using acoustic, thermal, and pressure equipment — so repairs are surgical, not destructive.",
  },
  {
    icon: "⚡",
    title: "Fast Response",
    body: "Active leak flooding your home? We offer same-day and emergency leak detection throughout Manatee County.",
  },
  {
    icon: "💵",
    title: "Honest Pricing",
    body: "You get a clear, flat-rate quote before any work begins. No hourly surprises, no pressure to upsell.",
  },
  {
    icon: "📋",
    title: "Detailed Reporting",
    body: "Every job includes photos, locations, and a written report you can hand to any plumber or insurer.",
  },
];

export default function Home() {
  const whatIsLeakDetection = getDefinition("what-is-leak-detection")!;
  const detectionVsRepair = getComparison("leak-detection-vs-leak-repair")!;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-white">
        <Container className="grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-sky-700">
              Serving Bradenton &amp; {site.county}
            </span>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Leak Detection in Bradenton, FL
              <span className="block text-sky-600">
                Find the Leak. Skip the Demolition.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              Bradenton Leak Scan provides fast, non-invasive{" "}
              <strong>leak detection in Bradenton</strong> and across Manatee
              County. We pinpoint slab leaks, water line leaks, pool leaks, and
              underground leaks using acoustic listening, thermal imaging, and
              pressure testing — so you fix the problem without tearing up your
              home or yard.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-sky-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-sky-700"
              >
                <span aria-hidden>📞</span> Call {site.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-800 transition-colors hover:border-sky-300 hover:text-sky-700"
              >
                Request a Free Quote
              </Link>
            </div>
            <p className="mt-4 text-sm text-slate-500">
              ⭐⭐⭐⭐⭐ Trusted by homeowners across the Suncoast · Same-day
              service
            </p>
          </div>

          <div className="relative">
            <SiteImage name="technician" priority />
            <div className="mt-4 grid grid-cols-2 gap-4">
              {trustPoints.map((t) => (
                <div
                  key={t.label}
                  className="rounded-2xl bg-white p-4 text-center shadow-sm ring-1 ring-slate-100"
                >
                  <div className="text-lg font-extrabold text-sky-700">
                    {t.stat}
                  </div>
                  <div className="mt-1 text-xs font-medium text-slate-600">
                    {t.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Quick Answer (AEO) */}
      <Section className="py-12!" containerClassName="max-w-4xl">
        <QuickAnswer question="What is leak detection in Bradenton, and how does it work?">
          Leak detection in Bradenton is the non-invasive process of locating
          hidden water leaks — under slabs, in pools, or in underground pipes —
          without demolition. Bradenton Leak Scan uses acoustic listening,
          thermal imaging, and pressure testing to pinpoint the leak to within
          inches, usually the same day, so repairs are targeted and affordable.
        </QuickAnswer>
      </Section>

      {/* Services — first H2 optimized */}
      <Section className="pt-8!">
        <SectionHeading
          eyebrow="Our Services"
          title="Leak Detection Services in Bradenton, FL"
          intro="One specialty, done right: finding water where it shouldn't be — slab, water line, pool, and sewer."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </Section>

      {/* What is leak detection (GEO) + image */}
      <Section className="bg-slate-50">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <DefinitionSection definition={whatIsLeakDetection} />
          <SiteImage name="thermal" />
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/leak-detection-guide"
            className="inline-flex items-center gap-1 text-base font-semibold text-sky-600 hover:text-sky-700"
          >
            Read the full Leak Detection Guide (definitions &amp; comparisons) →
          </Link>
        </div>
      </Section>

      {/* Why us */}
      <Section>
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why Bradenton Homeowners Call Us First"
          intro="Technology and honesty that save you money and stress."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((w) => (
            <div
              key={w.title}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100"
            >
              <div className="text-3xl">{w.icon}</div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">{w.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {w.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Process + image */}
      <Section className="bg-slate-50">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <SiteImage name="moisture" />
          <div>
            <SectionHeading
              align="left"
              eyebrow="How It Works"
              title="From Symptom to Marked-Up Answer in 3 Steps"
            />
            <ol className="mt-8 space-y-6">
              {[
                {
                  title: "Tell us the symptoms",
                  body: "Call or fill out our form. We'll ask a few questions and schedule a visit — often the same day.",
                },
                {
                  title: "We scan & pinpoint",
                  body: "Our tech arrives with detection gear and locates the leak without breaking anything.",
                },
                {
                  title: "You get answers",
                  body: "We mark the exact spot and hand you a report so the repair is quick, cheap, and targeted.",
                },
              ].map((p, i) => (
                <li key={p.title} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-600 text-base font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900">{p.title}</h3>
                    <p className="mt-1 text-slate-600">{p.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      {/* Comparison (GEO) */}
      <Section>
        <SectionHeading
          eyebrow="Know the Difference"
          title="Leak Detection vs Leak Repair"
          intro="Two steps, two specialists. Here's how they fit together."
        />
        <div className="mx-auto mt-10 max-w-4xl">
          <ComparisonTable comparison={detectionVsRepair} />
        </div>
      </Section>

      {/* Areas */}
      <section className="bg-slate-900 py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Leak Detection Across the Suncoast
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">
              From Anna Maria Island to Lakewood Ranch, we provide leak detection
              in Bradenton and the surrounding {site.county} communities. Find
              your city below for local leak issues and same-day service.
            </p>
            <Link
              href="/service-areas"
              className="mt-6 inline-flex items-center gap-1 text-base font-semibold text-sky-400 hover:text-sky-300"
            >
              See all service areas →
            </Link>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {locations.map((l) => (
              <Link
                key={l.slug}
                href={`/locations/${l.slug}`}
                className="rounded-full bg-slate-800 px-4 py-2 text-sm font-medium text-slate-200 ring-1 ring-slate-700 transition-colors hover:bg-sky-600 hover:text-white"
              >
                {l.city}
              </Link>
            ))}
            {serviceAreas
              .filter((a) => !locations.some((l) => l.city === a))
              .map((area) => (
                <span
                  key={area}
                  className="rounded-full bg-slate-800 px-4 py-2 text-sm font-medium text-slate-200 ring-1 ring-slate-700"
                >
                  {area}
                </span>
              ))}
          </div>
        </Container>
      </section>

      {/* FAQ teaser (AEO) */}
      <Section containerClassName="max-w-3xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Common Leak Detection Questions"
          intro="A few of the things Bradenton homeowners ask us most."
        />
        <div className="mt-10">
          <FAQAccordion items={faqs.slice(0, 4)} />
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-1 text-base font-semibold text-sky-600 hover:text-sky-700"
          >
            Read all FAQs →
          </Link>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
