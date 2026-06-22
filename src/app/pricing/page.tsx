import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { QuickAnswer } from "@/components/QuickAnswer";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Leak Detection Cost & Pricing in Bradenton, FL",
  description:
    "How much does leak detection cost in Bradenton? See typical pricing for slab, water line, pool, and sewer leak detection — flat-rate quotes before any work begins.",
  keywords: [
    "leak detection cost Bradenton",
    "leak detection pricing Bradenton",
    "leak detection Bradenton",
  ],
  alternates: { canonical: "/pricing" },
};

const priceTable = [
  {
    service: "Sewer Camera Inspection",
    range: "$200 – $400",
    href: "/services/sewer-camera-inspection",
    note: "Includes recorded HD footage and locating.",
  },
  {
    service: "Water Line / Underground Leak Detection",
    range: "$250 – $450",
    href: "/services/water-line-leak-detection",
    note: "Line tracing plus acoustic correlation.",
  },
  {
    service: "Slab Leak Detection",
    range: "$300 – $500",
    href: "/services/slab-leak-detection",
    note: "Acoustic, thermal, and pressure testing.",
  },
  {
    service: "Pool Leak Detection",
    range: "$300 – $500",
    href: "/services/pool-leak-detection",
    note: "Dye testing, pressure testing, equipment check.",
  },
];

const factors = [
  "Property and pool size",
  "How much pipe or line must be traced",
  "Ease of access to clean-outs and equipment",
  "Whether more than one leak type is suspected",
  "Emergency or after-hours scheduling",
];

const pricingFaqs = [
  {
    q: "How much does leak detection cost in Bradenton?",
    a: "Most residential leak detection in Bradenton costs between $250 and $500 depending on the leak type, property size, and access. Sewer camera inspections start lower; slab and pool leak detection sit at the higher end. You always get a flat quote before work begins.",
  },
  {
    q: "Do you charge by the hour?",
    a: "No. We quote a flat rate for the detection visit after understanding your situation, so there are no hourly surprises. You know the price before we start.",
  },
  {
    q: "Is the detection fee credited toward repair?",
    a: "We specialize in detection, not repair, so the fee covers locating and documenting the leak. Accurate detection keeps the separate repair far cheaper by targeting one small spot.",
  },
  {
    q: "Why is leak detection worth the cost?",
    a: "Paying for accurate detection avoids the much larger expense of jackhammering floors or trenching a whole yard to find a leak by trial and error — and it limits ongoing water damage and waste.",
  },
  {
    q: "Does insurance cover leak detection?",
    a: "Many Florida homeowners policies cover the cost of locating and accessing a covered leak. Our written report with photos and leak location supports your claim. See our insurance page for details.",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-sky-50 to-white py-12">
        <Container>
          <Breadcrumbs
            items={[
              { name: "Home", url: "/" },
              { name: "Pricing", url: "/pricing" },
            ]}
          />
          <div className="mt-6 max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Leak Detection Cost in Bradenton, FL
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Transparent, flat-rate leak detection pricing for Bradenton and
              {" "}
              {site.county}. Here&apos;s what to expect by service — and exactly
              what affects the price.
            </p>
          </div>
        </Container>
      </section>

      <Section className="py-12!" containerClassName="max-w-4xl">
        <QuickAnswer question="How much does leak detection cost in Bradenton?">
          Leak detection in Bradenton typically costs $250 to $500 for
          residential properties, depending on the leak type, home size, and
          access. Slab and pool leak detection sit at the higher end; sewer
          camera inspections start lower. Bradenton Leak Scan quotes a flat rate
          before any work begins, so there are no hourly surprises.
        </QuickAnswer>
      </Section>

      <Section className="pt-4!" containerClassName="max-w-4xl">
        <h2 className="text-2xl font-bold text-slate-900">
          Typical Leak Detection Pricing
        </h2>
        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="px-5 py-3 font-semibold">Service</th>
                <th className="px-5 py-3 font-semibold">Typical Range</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {priceTable.map((row) => (
                <tr key={row.service} className="bg-white">
                  <td className="px-5 py-4">
                    <Link
                      href={row.href}
                      className="font-semibold text-sky-700 hover:underline"
                    >
                      {row.service}
                    </Link>
                    <p className="mt-1 text-xs text-slate-500">{row.note}</p>
                  </td>
                  <td className="px-5 py-4 font-bold text-slate-900">
                    {row.range}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-slate-500">
          Ranges are estimates for typical residential properties in the
          Bradenton area. Your exact, flat-rate quote is provided before any work
          begins.
        </p>

        <h2 className="mt-12 text-2xl font-bold text-slate-900">
          What Affects the Price
        </h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {factors.map((f) => (
            <li
              key={f}
              className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4"
            >
              <span className="mt-0.5 text-sky-600" aria-hidden>
                ✓
              </span>
              <span className="text-slate-700">{f}</span>
            </li>
          ))}
        </ul>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-slate-900">Pricing FAQs</h2>
          <div className="mt-6">
            <FAQAccordion items={pricingFaqs} />
          </div>
        </div>
      </Section>

      <CTASection
        title="Get a Flat-Rate Leak Detection Quote"
        subtitle="Tell us what's happening and we'll give you an exact price — no hourly surprises."
      />
    </>
  );
}
