import Link from "next/link";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export type Crumb = { name: string; url: string };

/** Visible breadcrumb trail that also emits BreadcrumbList schema. */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
      <JsonLd data={breadcrumbSchema(items)} />
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.url} className="flex items-center gap-1.5">
              {isLast ? (
                <span className="font-medium text-slate-700">{item.name}</span>
              ) : (
                <>
                  <Link href={item.url} className="hover:text-sky-600">
                    {item.name}
                  </Link>
                  <span aria-hidden>/</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
