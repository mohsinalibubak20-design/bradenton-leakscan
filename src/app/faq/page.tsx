import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { QuickAnswer } from "@/components/QuickAnswer";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { faqs } from "@/lib/site";

export const metadata: Metadata = {
  title: "Leak Detection FAQ — Bradenton, FL",
  description:
    "Answers to common questions about leak detection cost, process, scheduling, insurance, and licensing from Bradenton Leak Scan.",
  keywords: ["leak detection FAQ Bradenton", "leak detection Bradenton"],
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-sky-50 to-white py-12">
        <Container>
          <Breadcrumbs
            items={[
              { name: "Home", url: "/" },
              { name: "FAQ", url: "/faq" },
            ]}
          />
          <div className="mt-6 max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Leak Detection FAQ — Bradenton, FL
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Everything you might want to know before you call. Don&apos;t see
              your question? Reach out — we&apos;re happy to help.
            </p>
          </div>
        </Container>
      </section>

      <Section className="py-12!" containerClassName="max-w-3xl">
        <QuickAnswer question="How does leak detection work, and how much does it cost in Bradenton?">
          Leak detection in Bradenton uses acoustic listening, thermal imaging,
          and pressure testing to pinpoint hidden leaks without demolition. Most
          residential visits cost $250–$500 with a flat quote up front, and
          same-day appointments are available across Manatee County.
        </QuickAnswer>

        <div className="mt-10">
          <FAQAccordion items={faqs} />
        </div>
      </Section>

      <CTASection />
    </>
  );
}
