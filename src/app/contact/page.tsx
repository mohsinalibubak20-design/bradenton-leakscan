import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Free Quote",
  description:
    "Request a leak detection quote or schedule service in Bradenton, FL. Call us or fill out the form for a fast, same-day response.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" },
        ])}
      />

      <section className="bg-gradient-to-b from-sky-50 to-white py-16">
        <Container className="max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Tell us what&apos;s going on and we&apos;ll get you a fast, honest
            quote. For active leaks, call us directly for same-day service.
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-12 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-bold text-slate-900">
                Request a Free Quote
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                * Required fields. We&apos;ll never share your information.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              <div className="rounded-2xl bg-sky-600 p-6 text-white">
                <h2 className="text-lg font-semibold">Call or Email</h2>
                <a
                  href={site.phoneHref}
                  className="mt-3 block text-2xl font-bold hover:text-sky-100"
                >
                  {site.phone}
                </a>
                <a
                  href={site.emailHref}
                  className="mt-2 block text-sm text-sky-100 hover:text-white"
                >
                  {site.email}
                </a>
              </div>

              <div className="rounded-2xl border border-slate-200 p-6">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                  Office
                </h2>
                <address className="mt-3 not-italic text-slate-700">
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.state} {site.address.zip}
                </address>
              </div>

              <div className="rounded-2xl border border-slate-200 p-6">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                  Hours
                </h2>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {site.hours.map((h) => (
                    <li key={h.days} className="flex justify-between gap-4">
                      <span className="font-medium">{h.days}</span>
                      <span className="text-slate-500">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
