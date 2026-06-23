import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { CTASection, InlineCTA } from "@/components/CTASection";
import { QuickAnswer } from "@/components/QuickAnswer";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SiteImage } from "@/components/SiteImage";
import { getLandingService, landingServices } from "@/lib/landingServices";
import { getService, site } from "@/lib/site";
import { locations } from "@/lib/locations";
import { JsonLd, landingServiceSchema } from "@/lib/schema";

// Only the defined landing slugs resolve; any other top-level path 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return landingServices.map((s) => ({ landing: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ landing: string }>;
}): Promise<Metadata> {
  const { landing } = await params;
  const s = getLandingService(landing);
  if (!s) return { title: "Page Not Found" };
  return {
    title: s.title,
    description: s.metaDescription,
    keywords: [s.keyword, "leak detection Bradenton", "leak detection near me"],
    alternates: { canonical: `/${s.slug}` },
    openGraph: {
      title: `${s.title} | ${site.name}`,
      description: s.metaDescription,
    },
  };
}

export default async function LandingServicePage({
  params,
}: {
  params: Promise<{ landing: string }>;
}) {
  const { landing } = await params;
  const s = getLandingService(landing);
  if (!s) notFound();

  const ld = landingServiceSchema(s.slug);
  const related = s.relatedServices
    .map((slug) => getService(slug))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));
  const otherLanding = landingServices.filter((x) => x.slug !== s.slug).slice(0, 6);
  const featuredLocations = locations.slice(0, 6);

  return (
    <>
      {ld && <JsonLd data={ld} />}

      {/* Hero */}
      <section className="bg-gradient-to-b from-sky-50 to-white py-12">
        <Container>
          <Breadcrumbs
            items={[
              { name: "Home", url: "/" },
              { name: s.navLabel, url: `/${s.slug}` },
            ]}
          />
          <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-2xl">
                  {s.icon}
                </span>
                <span className="text-sm font-bold uppercase tracking-wider text-sky-700">
                  {s.keyword}
                </span>
              </div>
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                {s.title}
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                {s.short}
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
            <SiteImage name={s.imageKey} priority />
          </div>
        </Container>
      </section>

      {/* Quick Answer */}
      <Section className="py-12!" containerClassName="max-w-4xl">
        <QuickAnswer question={`What is ${s.navLabel.toLowerCase()} in Bradenton?`}>
          {s.quickAnswer}
        </QuickAnswer>
      </Section>

      <Section className="pt-4!">
        <Container className="grid gap-12 px-0 lg:grid-cols-3">
          {/* Main content */}
          <div className="space-y-12 lg:col-span-2">
            {/* What it is */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                What Is {s.navLabel} in Bradenton?
              </h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-slate-700">
                {s.intro.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            {/* Signs */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Signs to Watch For
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {s.signs.map((sign) => (
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

            <InlineCTA text={`Seeing the signs of a leak in Bradenton?`} />

            {/* What we do */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                How {s.navLabel} Works
              </h2>
              <ol className="mt-5 space-y-5">
                {s.whatWeDo.map((step, i) => (
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

            {/* Why fast */}
            <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6">
              <h2 className="text-2xl font-bold text-slate-900">
                Why Acting Quickly Matters
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-700">
                {s.whyFast}
              </p>
            </div>

            {/* Related detailed services */}
            {related.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Related Services
                </h2>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/services/${r.slug}`}
                      className="group flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-5 transition-colors hover:border-sky-300 hover:bg-sky-50"
                    >
                      <span className="text-2xl">{r.icon}</span>
                      <span>
                        <span className="block font-bold text-slate-900 group-hover:text-sky-700">
                          {r.title}
                        </span>
                        <span className="mt-1 block text-sm text-slate-600">
                          {r.short}
                        </span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* FAQ */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                {s.navLabel} FAQs
              </h2>
              <p className="mt-2 text-slate-600">
                Common questions about {s.keyword}.
              </p>
              <div className="mt-6">
                <FAQAccordion items={s.faqs} />
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
                  Call now for same-day {s.navLabel.toLowerCase()} in Bradenton
                  and {site.county}.
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
                  href="/emergency-leak-detection-bradenton-fl"
                  className="mt-3 flex items-center justify-center rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-semibold text-amber-800 hover:bg-amber-100"
                >
                  🚨 Emergency Service
                </Link>
              </div>

              {/* Other landing services */}
              <div className="rounded-2xl border border-slate-200 p-6">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                  More Leak Detection Services
                </h2>
                <ul className="mt-4 space-y-3">
                  {otherLanding.map((o) => (
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
                  <li>
                    <Link
                      href="/services"
                      className="text-sm font-semibold text-sky-600 hover:text-sky-700"
                    >
                      All services →
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Service areas */}
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
                        {l.city}
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
        title={`Get ${s.navLabel} in Bradenton Today`}
        subtitle={`Same-day and next-day appointments across ${site.county}. Flat-rate quote before any work begins.`}
      />
    </>
  );
}
