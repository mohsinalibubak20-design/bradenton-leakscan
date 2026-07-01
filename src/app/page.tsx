import Link from "next/link";
import { Container } from "@/components/Container";
import { Section, SectionHeading } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { QuickAnswer } from "@/components/QuickAnswer";
import { DefinitionSection } from "@/components/DefinitionSection";
import { ComparisonTable } from "@/components/ComparisonTable";
import { FAQAccordion } from "@/components/FAQAccordion";
import { SiteImage } from "@/components/SiteImage";
import { faqs, serviceAreas, site } from "@/lib/site";
import { landingServices } from "@/lib/landingServices";
import { getDefinition, getComparison } from "@/lib/geo";
import { locations } from "@/lib/locations";

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
      <Hero />

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
          intro="One specialty, done right: finding water where it shouldn't be — slab, water line, pool, pipe, ceiling, wall, underground, hidden, commercial, and emergency leaks."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {landingServices.map((s) => (
            <ServiceCard
              key={s.slug}
              href={`/${s.slug}`}
              icon={s.icon}
              title={s.navLabel}
              description={s.short}
            />
          ))}
        </div>
      </Section>

      {/* What is leak detection (GEO) + image */}
      <Section className="bg-slate-50">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <DefinitionSection definition={whatIsLeakDetection} />
          <SiteImage name="hiddenThermal" />
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
          <SiteImage name="waterMoisture" />
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
