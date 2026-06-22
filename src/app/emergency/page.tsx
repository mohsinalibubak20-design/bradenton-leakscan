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
  title: "Emergency Leak Detection in Bradenton, FL — Same-Day Service",
  description:
    "Active leak flooding your home? Get emergency leak detection in Bradenton, FL. Fast same-day response across Manatee County to locate and stop hidden leaks.",
  keywords: [
    "emergency leak detection Bradenton",
    "24 hour leak detection Bradenton",
    "leak detection near me",
  ],
  alternates: { canonical: "/emergency" },
};

const steps = [
  {
    title: "Shut off your main water valve",
    detail:
      "If water is actively flooding, turn off the main supply to stop the flow before damage spreads.",
  },
  {
    title: "Kill power to affected areas",
    detail:
      "If water is near outlets or appliances, switch off power at the breaker for safety.",
  },
  {
    title: "Call Bradenton Leak Scan",
    detail: `Call ${site.phone}. We prioritize active-leak calls for same-day emergency detection.`,
  },
  {
    title: "We locate and mark the leak",
    detail:
      "We pinpoint the source non-invasively so a plumber can make a fast, targeted repair.",
  },
];

const emergencyFaqs = [
  {
    q: "Do you offer emergency leak detection in Bradenton?",
    a: "Yes. We prioritize active-leak calls for same-day emergency leak detection across Bradenton and Manatee County. If water is flooding or causing damage, call us right away and we'll get to you fast.",
  },
  {
    q: "What should I do first during a water leak emergency?",
    a: "Shut off your main water valve to stop the flow, switch off power to any affected areas for safety, then call us. Stopping the water and getting fast detection limits the damage.",
  },
  {
    q: "How fast can you respond to an emergency?",
    a: "We aim for same-day response on active-leak emergencies in most of Manatee County. Call us and we'll give you the soonest available arrival window.",
  },
  {
    q: "Can you detect the leak if my water is shut off?",
    a: "Yes. We can pressurize and isolate sections of plumbing to locate the leak even with the main off, then mark the exact spot for repair.",
  },
];

export default function EmergencyPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-amber-50 to-white py-12">
        <Container>
          <Breadcrumbs
            items={[
              { name: "Home", url: "/" },
              { name: "Emergency Service", url: "/emergency" },
            ]}
          />
          <div className="mt-6 max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-800">
              🚨 24/7 Active-Leak Response
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Emergency Leak Detection in Bradenton, FL
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              An active leak gets worse by the minute. We provide fast, same-day
              emergency leak detection across Bradenton and {site.county} to
              locate and stop hidden leaks before they cause major damage.
            </p>
            <a
              href={site.phoneHref}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-7 py-4 text-lg font-bold text-white shadow-sm transition-colors hover:bg-amber-600"
            >
              📞 Call Now: {site.phone}
            </a>
          </div>
        </Container>
      </section>

      <Section className="py-12!" containerClassName="max-w-4xl">
        <QuickAnswer question="Do you offer emergency leak detection in Bradenton?">
          Yes. Bradenton Leak Scan provides same-day emergency leak detection
          across Bradenton and Manatee County for active leaks that are flooding
          or causing damage. Shut off your main water valve, then call us — we
          prioritize emergency calls and locate the leak fast so a targeted
          repair can begin immediately.
        </QuickAnswer>
      </Section>

      <Section className="pt-4!" containerClassName="max-w-4xl">
        <h2 className="text-2xl font-bold text-slate-900">
          What to Do During a Leak Emergency
        </h2>
        <ol className="mt-6 space-y-5">
          {steps.map((s, i) => (
            <li key={s.title} className="flex gap-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-500 text-sm font-bold text-white">
                {i + 1}
              </span>
              <div>
                <h3 className="font-bold text-slate-900">{s.title}</h3>
                <p className="mt-1 text-slate-600">{s.detail}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-slate-900">Emergency FAQs</h2>
          <div className="mt-6">
            <FAQAccordion items={emergencyFaqs} />
          </div>
        </div>

        <p className="mt-10 text-center text-slate-600">
          Not an emergency?{" "}
          <Link href="/contact" className="font-semibold text-sky-600 hover:underline">
            Request a standard quote
          </Link>{" "}
          or{" "}
          <Link href="/pricing" className="font-semibold text-sky-600 hover:underline">
            view our pricing
          </Link>
          .
        </p>
      </Section>

      <CTASection
        title="Active Leak? Call Bradenton Leak Scan Now"
        subtitle="Same-day emergency leak detection across Manatee County. We locate it fast so repairs start sooner."
      />
    </>
  );
}
