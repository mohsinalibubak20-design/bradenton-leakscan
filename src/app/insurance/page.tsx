import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { QuickAnswer } from "@/components/QuickAnswer";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SiteImage } from "@/components/SiteImage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Leak Detection for Insurance Claims in Bradenton, FL",
  description:
    "Filing a water damage claim? Bradenton Leak Scan's documented leak detection reports with photos and leak locations support homeowners insurance claims in Florida.",
  keywords: [
    "leak detection insurance claim Bradenton",
    "water damage leak detection Bradenton",
    "leak detection Bradenton",
  ],
  alternates: { canonical: "/insurance" },
};

const helps = [
  {
    title: "Documented source of loss",
    detail:
      "Our written report identifies exactly where the leak is, which insurers require to confirm a covered, sudden loss.",
  },
  {
    title: "Photos and location data",
    detail:
      "Photos, leak locations, and moisture findings give your adjuster clear evidence of the damage and its cause.",
  },
  {
    title: "Non-invasive proof",
    detail:
      "Because we locate the leak without demolition, you document the problem before opening walls or floors.",
  },
  {
    title: "Faster, cleaner claims",
    detail:
      "Clear documentation reduces back-and-forth with your insurer and supports a fair, timely settlement.",
  },
];

const insuranceFaqs = [
  {
    q: "Does homeowners insurance cover leak detection in Florida?",
    a: "Many Florida policies cover the cost of locating and accessing a sudden, covered leak, plus the resulting water damage — even when the failed pipe itself isn't covered. Our documented detection report helps establish the claim.",
  },
  {
    q: "Will a leak detection report help my insurance claim?",
    a: "Yes. Insurers want proof of where the leak is and that it caused the damage. Our written report with photos and leak locations gives your adjuster the documentation they need.",
  },
  {
    q: "Should I call you before or after my insurer?",
    a: "Call us first if water is active — stopping and locating the leak limits damage. Our report then strengthens the claim you file. For non-emergencies, either order works.",
  },
  {
    q: "Do you work with insurance adjusters?",
    a: "We provide the detailed detection documentation your adjuster needs and can explain our findings. We focus on detection; your insurer and restoration company handle the claim and repairs.",
  },
  {
    q: "What's the difference between leak detection and water damage restoration?",
    a: "Leak detection finds and documents the source; a restoration company dries out and rebuilds what got wet. Starting with detection prevents paying to open areas that didn't need it.",
  },
];

export default function InsurancePage() {
  return (
    <>
      <section className="bg-gradient-to-b from-sky-50 to-white py-12">
        <Container>
          <Breadcrumbs
            items={[
              { name: "Home", url: "/" },
              { name: "Insurance Claims", url: "/insurance" },
            ]}
          />
          <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                Leak Detection for Insurance Claims
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                Filing a water damage claim in Bradenton? Our documented,
                non-invasive leak detection gives your insurer the proof they
                need — the source of the leak, its location, and photos of the
                damage.
              </p>
              <a
                href={site.phoneHref}
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-sky-600 px-6 py-3 text-base font-semibold text-white hover:bg-sky-700"
              >
                📞 Call {site.phone}
              </a>
            </div>
            <SiteImage name="ceilingStain" priority />
          </div>
        </Container>
      </section>

      <Section className="py-12!" containerClassName="max-w-4xl">
        <QuickAnswer question="Does homeowners insurance cover leak detection in Bradenton?">
          Many Florida homeowners policies cover the cost of locating and
          accessing a sudden, covered water leak, along with the resulting
          damage. Bradenton Leak Scan provides a documented detection report with
          photos and the exact leak location, which supports your insurance claim
          and helps your adjuster confirm a covered loss.
        </QuickAnswer>
      </Section>

      <Section className="pt-4!" containerClassName="max-w-4xl">
        <h2 className="text-2xl font-bold text-slate-900">
          How Leak Detection Supports Your Claim
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {helps.map((h) => (
            <div
              key={h.title}
              className="rounded-xl border border-slate-200 bg-white p-5"
            >
              <h3 className="font-bold text-slate-900">{h.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                {h.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-slate-900">Insurance FAQs</h2>
          <div className="mt-6">
            <FAQAccordion items={insuranceFaqs} />
          </div>
        </div>

        <p className="mt-10 text-center text-slate-600">
          Learn more in our{" "}
          <Link
            href="/leak-detection-guide"
            className="font-semibold text-sky-600 hover:underline"
          >
            leak detection guide
          </Link>{" "}
          or{" "}
          <Link href="/contact" className="font-semibold text-sky-600 hover:underline">
            request a detection report
          </Link>
          .
        </p>
      </Section>

      <CTASection
        title="Need Documentation for a Water Damage Claim?"
        subtitle="Get a clear, photo-documented leak detection report to support your Florida insurance claim."
      />
    </>
  );
}
