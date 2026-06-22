import Link from "next/link";
import { Container } from "@/components/Container";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="py-24">
      <Container className="max-w-xl text-center">
        <div className="text-6xl">💧</div>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900">
          Page Not Found
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Looks like this page sprang a leak and drained away. Let&apos;s get you
          back on dry land.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-sky-600 px-6 py-3 text-base font-semibold text-white hover:bg-sky-700"
          >
            Back to Home
          </Link>
          <a
            href={site.phoneHref}
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-800 hover:border-sky-300 hover:text-sky-700"
          >
            📞 {site.phone}
          </a>
        </div>
      </Container>
    </section>
  );
}
