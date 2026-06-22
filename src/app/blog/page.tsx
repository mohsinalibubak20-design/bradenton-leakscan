import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { posts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Leak Detection Blog & Tips for Bradenton Homeowners",
  description:
    "Practical leak detection tips for Bradenton homeowners — spotting slab leaks, the pool bucket test, leak detection costs, and more from Bradenton Leak Scan.",
  keywords: ["leak detection tips Bradenton", "leak detection Bradenton"],
  alternates: { canonical: "/blog" },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndex() {
  return (
    <>
      <section className="bg-gradient-to-b from-sky-50 to-white py-12">
        <Container>
          <Breadcrumbs
            items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
            ]}
          />
          <div className="mt-6 max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Leak Detection Blog &amp; Tips
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Practical advice for Bradenton homeowners on spotting, diagnosing,
              and acting on hidden leaks before they cause costly damage.
            </p>
          </div>
        </Container>
      </section>

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg"
            >
              <span className="inline-flex w-fit items-center rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
                {p.category}
              </span>
              <h2 className="mt-3 text-lg font-bold text-slate-900 group-hover:text-sky-700">
                {p.title}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                {p.excerpt}
              </p>
              <span className="mt-4 text-xs text-slate-400">
                {formatDate(p.date)} · {p.readMinutes} min read
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
