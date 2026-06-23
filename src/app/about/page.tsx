import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Bradenton Leak Scan is a licensed, locally owned leak detection company serving Manatee County with non-invasive technology and honest, flat-rate pricing.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: "🔍",
    title: "Find First, Fix Smart",
    body: "We believe no one should jackhammer a floor or trench a yard hoping to find a leak. We locate it precisely so the repair is small.",
  },
  {
    icon: "🤝",
    title: "Straight Talk",
    body: "Flat-rate quotes, plain-English reports, and zero pressure. If you don't have a leak, we'll tell you that too.",
  },
  {
    icon: "🛠️",
    title: "Right Tools, Trained Hands",
    body: "Acoustic correlators, thermal cameras, and line tracers are only as good as the technician using them. Ours are trained and certified.",
  },
  {
    icon: "📍",
    title: "Local & Accountable",
    body: "We live and work here on the Suncoast. Our reputation in Bradenton is the whole business.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "About", url: "/about" },
        ])}
      />

      <section className="bg-gradient-to-b from-sky-50 to-white py-16">
        <Container className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            About {site.name}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            We&apos;re a locally owned leak detection company built on a simple
            idea: finding a leak shouldn&apos;t mean destroying your home to look
            for it.
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-12 lg:grid-cols-3">
          <div className="space-y-5 text-base leading-relaxed text-slate-700 lg:col-span-2">
            <h2 className="text-2xl font-bold text-slate-900">Our Story</h2>
            <p>
              Bradenton Leak Scan started after watching too many homeowners pay
              to have floors torn up and yards dug out — only to discover the
              leak was three feet away from where the demolition began. There
              had to be a better way.
            </p>
            <p>
              Today we focus on one thing and do it exceptionally well:
              non-invasive leak detection. Using acoustic listening equipment,
              thermal imaging, pressure testing, and electronic line tracing, we
              pinpoint hidden leaks under slabs, in pools, beneath yards, and
              inside sewer lines — usually within inches.
            </p>
            <p>
              That precision saves our customers thousands of dollars in
              unnecessary repairs, restoration, and wasted water. And because we
              hand you a clear written report, any licensed plumber can make the
              fix quickly and affordably.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              At a Glance
            </h3>
            <dl className="mt-4 space-y-4 text-sm">
              <div>
                <dt className="font-medium text-slate-500">Service Area</dt>
                <dd className="text-slate-900">
                  Bradenton &amp; Manatee County, FL
                </dd>
              </div>
              <div>
                <dt className="font-medium text-slate-500">Specialty</dt>
                <dd className="text-slate-900">Non-invasive leak detection</dd>
              </div>
              <div>
                <dt className="font-medium text-slate-500">Phone</dt>
                <dd>
                  <a
                    href={site.phoneHref}
                    className="text-sky-600 hover:text-sky-700"
                  >
                    {site.phone}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-16">
        <Container>
          <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900">
            What We Stand For
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100"
              >
                <div className="text-3xl">{v.icon}</div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
