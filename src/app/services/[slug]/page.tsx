import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { CTASection, InlineCTA } from "@/components/CTASection";
import { QuickAnswer } from "@/components/QuickAnswer";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { getService, services, site } from "@/lib/site";
import { landingServices } from "@/lib/landingServices";
import { locations } from "@/lib/locations";
import { JsonLd, serviceSchema } from "@/lib/schema";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.title} in Bradenton — Cost, Process & Methods`,
    description: service.quickAnswer,
    keywords: [service.keyword, "leak detection Bradenton", "leak detection near me"],
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} in Bradenton — Cost, Process & Methods | ${site.name}`,
      description: service.quickAnswer,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = landingServices;
  const serviceLd = serviceSchema(slug);
  const featuredLocations = locations.slice(0, 6);

  return (
    <>
      {serviceLd && <JsonLd data={serviceLd} />}

      {/* Hero */}
      <section className="bg-gradient-to-b from-sky-50 to-white py-12">
        <Container>
          <Breadcrumbs
            items={[
              { name: "Home", url: "/" },
              { name: "Services", url: "/services" },
              { name: service.title, url: `/services/${service.slug}` },
            ]}
          />
          <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-2xl">
                  {service.icon}
                </span>
                <span className="text-sm font-bold uppercase tracking-wider text-sky-700">
                  {service.keyword}
                </span>
              </div>
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                {service.title} in Bradenton &amp; Manatee County
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                {service.summary}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-sky-600 px-6 py-3 text-base font-semibold text-white hover:bg-sky-700"
                >
                  📞 Call {site.phone}
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-800 hover:border-sky-300 hover:text-sky-700"
                >
                  Request a Free Quote
                </Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl ring-1 ring-slate-200">
              <Image
                src={service.image.src}
                alt={service.image.alt}
                width={800}
                height={600}
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <Section className="py-12!">
        <Container className="grid gap-12 px-0 lg:grid-cols-3">
          {/* Main content */}
          <div className="space-y-12 lg:col-span-2">
            {/* Quick Answer */}
            <QuickAnswer question={`What is ${service.title.toLowerCase()} in Bradenton?`}>
              {service.quickAnswer}
            </QuickAnswer>

            {/* What is this service? */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                What Is {service.title}?
              </h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-slate-700">
                {service.definition.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            {/* Who needs it? */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Who Needs {service.title}?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-700">
                {service.whoNeeds}
              </p>
            </div>

            {/* CTA after intro */}
            <InlineCTA text={`Suspect you need ${service.title.toLowerCase()}?`} />

            {/* Signs & Symptoms */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Signs &amp; Symptoms to Watch For
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {service.signs.map((sign) => (
                  <li
                    key={sign}
                    className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4"
                  >
                    <span className="mt-0.5 text-sky-600" aria-hidden>
                      ✓
                    </span>
                    <span className="text-slate-700">{sign}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA after signs */}
            <InlineCTA text="Seeing the warning signs above? Don't wait." />

            {/* Inspection / repair process */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                {service.processHeading ?? "Our Inspection Process"}
              </h2>
              <ol className="mt-5 space-y-5">
                {service.process.map((step, i) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-600 text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-bold text-slate-900">{step.title}</h3>
                      <p className="mt-1 text-slate-600">{step.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Detection / repair methods */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                {service.methodsHeading ?? "Detection Methods We Use"}
              </h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {service.detectionMethods.map((m) => (
                  <div
                    key={m.name}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <h3 className="font-bold text-slate-900">{m.name}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                      {m.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA after process */}
            <InlineCTA />

            {/* Why act quickly? */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                {service.whyFastHeading ?? "Why Fast Detection Matters"}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-700">
                {service.whyFast}
              </p>
            </div>

            {/* Bradenton relevance */}
            <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
              <h2 className="text-2xl font-bold text-slate-900">
                {service.title} in Bradenton &amp; Manatee County
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-700">
                {service.bradentonRelevance}
              </p>
            </div>

            {/* What happens next? */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                What Happens Next?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-700">
                {service.whatNext}
              </p>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                {service.title} FAQs
              </h2>
              <p className="mt-2 text-slate-600">
                Common questions about {service.keyword}.
              </p>
              <div className="mt-6">
                <FAQAccordion items={service.faqs} />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-36 space-y-6">
              <div className="rounded-2xl border border-sky-100 bg-sky-50 p-6">
                <h2 className="text-lg font-bold text-slate-900">
                  Suspect a leak?
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  Call now for same-day {service.title.toLowerCase()} in
                  Bradenton and {site.county}.
                </p>
                <a
                  href={site.phoneHref}
                  className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-sky-600 px-4 py-3 text-sm font-semibold text-white hover:bg-sky-700"
                >
                  📞 {site.phone}
                </a>
                <Link
                  href="/contact"
                  className="mt-3 flex items-center justify-center rounded-lg border border-sky-200 bg-white px-4 py-3 text-sm font-semibold text-sky-700 hover:bg-sky-100"
                >
                  Request a Quote
                </Link>
                <Link
                  href="/emergency"
                  className="mt-3 flex items-center justify-center rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-semibold text-amber-800 hover:bg-amber-100"
                >
                  🚨 Emergency Service
                </Link>
              </div>

              {/* Related services */}
              <div className="rounded-2xl border border-slate-200 p-6">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                  Related Services
                </h2>
                <ul className="mt-4 space-y-3">
                  {others.map((o) => (
                    <li key={o.slug}>
                      <Link
                        href={`/${o.slug}`}
                        className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-sky-700"
                      >
                        <span aria-hidden>{o.icon}</span>
                        {o.navLabel}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related locations */}
              <div className="rounded-2xl border border-slate-200 p-6">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                  Service Areas
                </h2>
                <ul className="mt-4 space-y-3">
                  {featuredLocations.map((l) => (
                    <li key={l.slug}>
                      <Link
                        href={`/locations/${l.slug}`}
                        className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-sky-700"
                      >
                        <span aria-hidden>📍</span>
                        {service.title} {l.city}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="/service-areas"
                      className="text-sm font-semibold text-sky-600 hover:text-sky-700"
                    >
                      All locations →
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </Container>
      </Section>

      <CTASection
        title={`Get ${service.title} in Bradenton Today`}
        subtitle="Same-day and next-day appointments across Manatee County. Flat-rate quote before any work begins."
      />
    </>
  );
}
