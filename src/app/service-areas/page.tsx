import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { QuickAnswer } from "@/components/QuickAnswer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { locations } from "@/lib/locations";
import { serviceAreas, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Leak Detection Service Areas in Manatee County, FL",
  description:
    "Bradenton Leak Scan provides leak detection across Manatee County — Bradenton, Lakewood Ranch, Palmetto, Parrish, Ellenton, Cortez, Sarasota, and the Anna Maria Island communities.",
  keywords: [
    "leak detection Bradenton",
    "leak detection near me",
    "leak detection Manatee County",
  ],
  alternates: { canonical: "/service-areas" },
};

export default function ServiceAreasPage() {
  const extraAreas = serviceAreas.filter(
    (a) => !locations.some((l) => l.city === a) && a !== "Bradenton",
  );

  return (
    <>
      <section className="bg-gradient-to-b from-sky-50 to-white py-12">
        <Container>
          <Breadcrumbs
            items={[
              { name: "Home", url: "/" },
              { name: "Service Areas", url: "/service-areas" },
            ]}
          />
          <div className="mt-6 max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Leak Detection Service Areas in {site.county}, FL
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              We provide non-invasive leak detection in Bradenton and throughout
              the surrounding {site.county} communities. Choose your city below
              for local leak issues, location-specific FAQs, and same-day
              service.
            </p>
          </div>
        </Container>
      </section>

      <Section className="py-12!" containerClassName="max-w-4xl">
        <QuickAnswer question="What areas does Bradenton Leak Scan serve for leak detection?">
          Bradenton Leak Scan serves all of {site.county}, including Bradenton,
          Lakewood Ranch, Palmetto, Parrish, Ellenton, and Cortez, plus Sarasota
          and the Anna Maria Island communities of Anna Maria, Holmes Beach,
          Bradenton Beach, and Longboat Key. Same-day and emergency leak
          detection is available in most areas.
        </QuickAnswer>
      </Section>

      <Section className="pt-4!">
        <h2 className="text-2xl font-bold text-slate-900">
          Cities We Serve for Leak Detection
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((l) => (
            <Link
              key={l.slug}
              href={`/locations/${l.slug}`}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg"
            >
              <div className="flex items-center gap-2">
                <span className="text-xl" aria-hidden>
                  📍
                </span>
                <h3 className="font-bold text-slate-900 group-hover:text-sky-700">
                  Leak Detection {l.city}, FL
                </h3>
              </div>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                {l.intro[0].slice(0, 130)}…
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-sky-600">
                View {l.city} page →
              </span>
            </Link>
          ))}
        </div>

        {extraAreas.length > 0 && (
          <div className="mt-10 rounded-2xl bg-slate-50 p-6">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              We also serve
            </h2>
            <div className="mt-3 flex flex-wrap gap-2.5">
              {extraAreas.map((a) => (
                <span
                  key={a}
                  className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 ring-1 ring-slate-200"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
        )}
      </Section>

      <CTASection />
    </>
  );
}
