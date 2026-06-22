import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { QuickAnswer } from "@/components/QuickAnswer";
import { DefinitionSection } from "@/components/DefinitionSection";
import { ComparisonTable } from "@/components/ComparisonTable";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { definitions, comparisons } from "@/lib/geo";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Leak Detection Guide: Definitions, Methods & Comparisons",
  description:
    "A complete leak detection guide for Bradenton homeowners: what slab, water, pool, and underground leak detection are, the methods used (acoustic, thermal, pressure testing), and how detection compares to repair and plumbing.",
  keywords: [
    "what is leak detection",
    "slab leak detection",
    "acoustic leak detection",
    "thermal imaging leak detection",
    "leak detection Bradenton",
  ],
  alternates: { canonical: "/leak-detection-guide" },
};

const entities = [
  "Bradenton, FL",
  "Manatee County",
  "Leak Detection",
  "Water Leak Detection",
  "Slab Leak Detection",
  "Pool Leak Detection",
  "Pipe Leak Detection",
  "Acoustic Leak Detection",
  "Thermal Imaging",
  "Pressure Testing",
  "Moisture Mapping",
];

export default function GuidePage() {
  return (
    <>
      <section className="bg-gradient-to-b from-sky-50 to-white py-12">
        <Container>
          <Breadcrumbs
            items={[
              { name: "Home", url: "/" },
              { name: "Leak Detection Guide", url: "/leak-detection-guide" },
            ]}
          />
          <div className="mt-6 max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              The Complete Leak Detection Guide
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Everything Bradenton homeowners need to understand leak detection —
              clear definitions of each service and method, plus side-by-side
              comparisons that answer the questions people ask most.
            </p>
          </div>
        </Container>
      </section>

      <Section className="py-12!" containerClassName="max-w-4xl">
        <QuickAnswer question="What is leak detection and what methods are used?">
          Leak detection is the non-invasive process of finding hidden water
          leaks in slabs, pipes, pools, and underground lines. The main methods
          are acoustic leak detection (listening for escaping water), thermal
          imaging (spotting temperature changes), pressure testing (isolating
          which line leaks), and moisture mapping (charting where water spread) —
          combined to pinpoint the leak before any repair.
        </QuickAnswer>
      </Section>

      <Section className="pt-4!" containerClassName="max-w-4xl">
        {/* Table of contents */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
            On this page
          </h2>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {definitions.map((d) => (
              <a
                key={d.id}
                href={`#${d.id}`}
                className="text-sm font-medium text-sky-700 hover:underline"
              >
                {d.term}
              </a>
            ))}
            {comparisons.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="text-sm font-medium text-sky-700 hover:underline"
              >
                {c.title}
              </a>
            ))}
          </div>
        </div>

        {/* Definitions */}
        <h2 className="mt-12 text-3xl font-extrabold tracking-tight text-slate-900">
          Definitions
        </h2>
        <div className="mt-8 space-y-12">
          {definitions.map((d) => (
            <DefinitionSection key={d.id} definition={d} as="h3" />
          ))}
        </div>

        {/* Comparisons */}
        <h2 className="mt-16 text-3xl font-extrabold tracking-tight text-slate-900">
          Comparisons
        </h2>
        <div className="mt-8 space-y-12">
          {comparisons.map((c) => (
            <ComparisonTable key={c.id} comparison={c} as="h3" />
          ))}
        </div>

        {/* Entity relationships */}
        <div className="mt-16 rounded-2xl bg-slate-900 p-8 text-slate-200">
          <h2 className="text-2xl font-bold text-white">
            Leak Detection in Bradenton: How It All Connects
          </h2>
          <p className="mt-3 leading-relaxed text-slate-300">
            Bradenton Leak Scan provides leak detection throughout Bradenton, FL
            and Manatee County. Our work spans water leak detection, slab leak
            detection, pool leak detection, and pipe leak detection — delivered
            with acoustic leak detection, thermal imaging, pressure testing, and
            moisture mapping. These services and methods are deeply related: a
            single slab leak call may combine acoustic detection, thermal
            imaging, and pressure testing to pinpoint the source.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {entities.map((e) => (
              <span
                key={e}
                className="rounded-full bg-slate-800 px-3 py-1.5 text-xs font-medium text-slate-200 ring-1 ring-slate-700"
              >
                {e}
              </span>
            ))}
          </div>
        </div>

        {/* Service links */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-slate-900">
            Explore Our Services
          </h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-700 hover:border-sky-300 hover:text-sky-700"
              >
                <span aria-hidden>{s.icon}</span>
                {s.title} in Bradenton
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
