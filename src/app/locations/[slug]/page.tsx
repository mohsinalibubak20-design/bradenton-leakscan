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
import { leadSmartUrl } from "@/components/LeadSmartForm";
import { getLocation, locations } from "@/lib/locations";
import { site } from "@/lib/site";
import { landingServices } from "@/lib/landingServices";
import { images } from "@/lib/images";
import { JsonLd, locationServiceSchema } from "@/lib/schema";

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const loc = getLocation(slug);
  if (!loc) return { title: "Location Not Found" };
  return {
    title: `Leak Detection ${loc.city}, FL | Slab, Water & Pool Leaks`,
    description: loc.quickAnswer,
    keywords: [
      `leak detection ${loc.city}`,
      `water leak detection ${loc.city}`,
      `slab leak detection ${loc.city}`,
      "leak detection near me",
    ],
    alternates: { canonical: `/locations/${loc.slug}` },
    openGraph: {
      title: `Leak Detection in ${loc.city}, FL | ${site.name}`,
      description: loc.quickAnswer,
    },
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const loc = getLocation(slug);
  if (!loc) notFound();

  const ld = locationServiceSchema(slug);
  const nearby = locations.filter((l) => l.slug !== slug).slice(0, 6);

  return (
    <>
      {ld && <JsonLd data={ld} />}

      {/* Hero */}
      <section className="bg-gradient-to-b from-sky-50 to-white py-12">
        <Container>
          <Breadcrumbs
            items={[
              { name: "Home", url: "/" },
              { name: "Service Areas", url: "/service-areas" },
              { name: loc.city, url: `/locations/${loc.slug}` },
            ]}
          />
          <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-sky-700">
                📍 {loc.city}, {loc.state} {loc.zip}
              </span>
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Leak Detection in {loc.city}, FL
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                Non-invasive leak detection for {loc.city} homeowners and
                businesses — {loc.driveTime}. We pinpoint slab, water line, pool,
                and underground leaks without demolition.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-sky-600 px-6 py-3 text-base font-semibold text-white hover:bg-sky-700"
                >
                  📞 Call {site.phone}
                </a>
                <a
                  href={leadSmartUrl(3)}
                  className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-800 hover:border-sky-300 hover:text-sky-700"
                >
                  Get a Free Estimate
                </a>
              </div>
            </div>
            <figure>
              <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-slate-200">
                <Image
                  src={loc.heroImage.src}
                  alt={`Bradenton LeakScan technician providing leak detection in ${loc.city}, ${loc.state}`}
                  title={`Leak Detection in ${loc.city}, ${loc.state}`}
                  width={loc.heroImage.width}
                  height={loc.heroImage.height}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="mt-2 text-center text-xs text-slate-500">
                Professional non-invasive leak detection service in {loc.city},{" "}
                {loc.state} by Bradenton LeakScan.
              </figcaption>
            </figure>
          </div>
        </Container>
      </section>

      {/* Quick Answer */}
      <Section className="py-12!" containerClassName="max-w-4xl">
        <QuickAnswer
          question={`Do you offer leak detection in ${loc.city}, FL?`}
        >
          {loc.quickAnswer}
        </QuickAnswer>
      </Section>

      <Section className="pt-4!">
        <Container className="grid gap-12 px-0 lg:grid-cols-3">
          <div className="space-y-12 lg:col-span-2">
            {/* Local intro */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Leak Detection Specialists Serving {loc.city}
              </h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-slate-700">
                {loc.intro.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            <InlineCTA text={`Need leak detection in ${loc.city} today?`} />

            {/* Local issues */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Common Leak Issues in {loc.city}
              </h2>
              <div className="mt-5 grid gap-4">
                {loc.localIssues.map((issue) => (
                  <div
                    key={issue.title}
                    className="rounded-xl border border-slate-200 bg-white p-5"
                  >
                    <h3 className="font-bold text-slate-900">{issue.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                      {issue.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Services offered here */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Our Leak Detection Services in {loc.city}
              </h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {landingServices.map((s) => {
                  const img = images[s.imageKey];
                  return (
                    <Link
                      key={s.slug}
                      href={`/${s.slug}`}
                      className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition-colors hover:border-sky-300 hover:bg-sky-50"
                    >
                      <Image
                        src={img.src}
                        alt={`${s.navLabel} in ${loc.city}, FL`}
                        width={img.width}
                        height={img.height}
                        sizes="(max-width: 640px) 100vw, 50vw"
                        className="h-32 w-full object-cover"
                      />
                      <div className="flex items-start gap-3 p-5">
                        <span className="text-2xl">{s.icon}</span>
                        <span>
                          <span className="block font-bold text-slate-900 group-hover:text-sky-700">
                            {s.navLabel}
                          </span>
                          <span className="mt-1 block text-sm text-slate-600">
                            {s.short}
                          </span>
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Neighborhoods */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                {loc.city} Neighborhoods We Serve
              </h2>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {loc.neighborhoods.map((n) => (
                  <span
                    key={n}
                    className="rounded-full bg-sky-50 px-4 py-2 text-sm font-medium text-sky-800 ring-1 ring-sky-100"
                  >
                    {n}
                  </span>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Leak Detection {loc.city} — FAQs
              </h2>
              <div className="mt-6">
                <FAQAccordion items={loc.faqs} />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-36 space-y-6">
              <div className="rounded-2xl border border-sky-100 bg-sky-50 p-6">
                <h2 className="text-lg font-bold text-slate-900">
                  Same-Day Service in {loc.city}
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  {loc.driveTime}. Call now for fast, non-invasive leak
                  detection.
                </p>
                <a
                  href={site.phoneHref}
                  className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-sky-600 px-4 py-3 text-sm font-semibold text-white hover:bg-sky-700"
                >
                  📞 {site.phone}
                </a>
                <a
                  href={leadSmartUrl(3)}
                  className="mt-3 flex items-center justify-center rounded-lg border border-sky-200 bg-white px-4 py-3 text-sm font-semibold text-sky-700 hover:bg-sky-100"
                >
                  Get a Free Estimate
                </a>
              </div>

              <div className="rounded-2xl border border-slate-200 p-6">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                  Nearby Service Areas
                </h2>
                <ul className="mt-4 space-y-3">
                  {nearby.map((l) => (
                    <li key={l.slug}>
                      <Link
                        href={`/locations/${l.slug}`}
                        className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-sky-700"
                      >
                        <span aria-hidden>📍</span>
                        Leak Detection {l.city}
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
        title={`Leak Detection in ${loc.city}, FL — Book Today`}
        subtitle={`Fast, non-invasive leak detection in ${loc.city} and across ${site.county}. Flat-rate quote before any work begins.`}
      />
    </>
  );
}
