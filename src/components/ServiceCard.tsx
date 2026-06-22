import Link from "next/link";
import type { Service } from "@/lib/site";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-50 to-sky-100 text-2xl ring-1 ring-sky-100">
        {service.icon}
      </span>
      <h3 className="mt-4 text-lg font-bold text-slate-900 group-hover:text-sky-700">
        {service.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
        {service.short}
      </p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-sky-600">
        Learn more
        <span className="transition-transform group-hover:translate-x-1" aria-hidden>
          →
        </span>
      </span>
    </Link>
  );
}
