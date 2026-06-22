import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { QuickAnswer } from "@/components/QuickAnswer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Leak Detection Services in Bradenton, FL",
  description:
    "Slab, water line, pool, and sewer leak detection in Bradenton, FL. Non-invasive, accurate, and fully reported. Explore Bradenton Leak Scan's services.",
  keywords: [
    "leak detection Bradenton",
    "slab leak detection Bradenton",
    "water leak detection Bradenton",
    "pool leak detection Bradenton",
  ],
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-sky-50 to-white py-12">
        <Container>
          <Breadcrumbs
            items={[
              { name: "Home", url: "/" },
              { name: "Services", url: "/services" },
            ]}
          />
          <div className="mt-6 max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Leak Detection Services in Bradenton, FL
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Whatever is leaking — under your slab, in your pool, beneath your
              yard, or inside your sewer line — Bradenton Leak Scan has the
              equipment and experience to find it without tearing your property
              apart. Explore our leak detection services across {site.county}.
            </p>
          </div>
        </Container>
      </section>

      <Section className="py-12!" containerClassName="max-w-4xl">
        <QuickAnswer question="What leak detection services does Bradenton Leak Scan offer?">
          Bradenton Leak Scan offers slab leak detection, water line and
          underground leak detection, pool leak detection, and sewer camera
          inspection across Bradenton and Manatee County. Every service is
          non-invasive — we pinpoint the leak with acoustic, thermal, and
          pressure equipment before any digging, then provide a written report.
        </QuickAnswer>
      </Section>

      <Section className="pt-4!">
        <div className="grid gap-8">
          {services.map((s, i) => (
            <div
              key={s.slug}
              className="grid items-center gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:grid-cols-5 sm:p-8"
            >
              <div className={`sm:col-span-2 ${i % 2 ? "sm:order-last" : ""}`}>
                <Image
                  src={s.image.src}
                  alt={s.image.alt}
                  width={800}
                  height={600}
                  sizes="(max-width: 640px) 100vw, 40vw"
                  className="w-full rounded-xl object-cover ring-1 ring-slate-200"
                />
              </div>
              <div className="sm:col-span-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{s.icon}</span>
                  <h2 className="text-xl font-bold text-slate-900">{s.title}</h2>
                </div>
                <p className="mt-3 leading-relaxed text-slate-600">{s.summary}</p>
                <Link
                  href={`/services/${s.slug}`}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-sky-600 hover:text-sky-700"
                >
                  Learn about {s.title.toLowerCase()} in Bradenton →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
