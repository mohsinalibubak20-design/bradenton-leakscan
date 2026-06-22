import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { QuickAnswer } from "@/components/QuickAnswer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { getPost, posts } from "@/lib/blog";
import { getService } from "@/lib/site";
import { JsonLd, articleSchema } from "@/lib/schema";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = post.relatedServices
    .map((s) => getService(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      <JsonLd
        data={articleSchema({
          title: post.title,
          description: post.excerpt,
          slug: post.slug,
          datePublished: post.date,
        })}
      />

      <section className="bg-gradient-to-b from-sky-50 to-white py-12">
        <Container className="max-w-3xl">
          <Breadcrumbs
            items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: post.title, url: `/blog/${post.slug}` },
            ]}
          />
          <div className="mt-6">
            <span className="inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
              {post.category}
            </span>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              {post.title}
            </h1>
            <p className="mt-3 text-sm text-slate-500">
              {formatDate(post.date)} · {post.readMinutes} min read
            </p>
          </div>
        </Container>
      </section>

      <Section className="py-12!" containerClassName="max-w-3xl">
        <QuickAnswer question="Quick answer">{post.quickAnswer}</QuickAnswer>

        <div className="mt-10 space-y-10">
          {post.sections.map((sec) => (
            <div key={sec.heading}>
              <h2 className="text-2xl font-bold text-slate-900">{sec.heading}</h2>
              <div className="mt-3 space-y-4 text-base leading-relaxed text-slate-700">
                {sec.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {related.length > 0 && (
          <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Related Services
            </h2>
            <ul className="mt-4 space-y-3">
              {related.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="flex items-center gap-2 font-medium text-sky-700 hover:underline"
                  >
                    <span aria-hidden>{s.icon}</span>
                    {s.title} in Bradenton
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-10">
          <Link
            href="/blog"
            className="text-sm font-semibold text-sky-600 hover:underline"
          >
            ← Back to all posts
          </Link>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
