import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { site } from "@/lib/site";
import { landingServices } from "@/lib/landingServices";
import { locations } from "@/lib/locations";

const resourceLinks = [
  { label: "Leak Detection Guide", href: "/leak-detection-guide" },
  { label: "Pricing", href: "/pricing" },
  { label: "Insurance Claims", href: "/insurance" },
  { label: "Emergency Service", href: "/emergency" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-800 bg-slate-900 text-slate-300">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-1">
          <Link href="/" aria-label={`${site.name} — Home`} className="inline-block">
            <Image
              src="/Logo.png"
              alt="Bradenton LeakScan Logo"
              width={2720}
              height={880}
              className="h-12 w-auto sm:h-14"
            />
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            Non-invasive leak detection in Bradenton, FL and across Manatee
            County — slab, water line, pool, and sewer leaks pinpointed without
            demolition.
          </p>
          <p className="mt-4 text-xs font-medium text-slate-500">
            Licensed &amp; Insured · {site.license}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Services
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {landingServices.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/${s.slug}`}
                  className="text-slate-400 transition-colors hover:text-sky-400"
                >
                  {s.navLabel}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Service Areas
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {locations.slice(0, 8).map((l) => (
              <li key={l.slug}>
                <Link
                  href={`/locations/${l.slug}`}
                  className="text-slate-400 transition-colors hover:text-sky-400"
                >
                  Leak Detection {l.city}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/service-areas"
                className="font-medium text-sky-400 hover:text-sky-300"
              >
                All locations →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Resources
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {resourceLinks.map((r) => (
              <li key={r.href}>
                <Link
                  href={r.href}
                  className="text-slate-400 transition-colors hover:text-sky-400"
                >
                  {r.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Contact
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
            <li>
              <a href={site.phoneHref} className="hover:text-sky-400">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={site.emailHref} className="hover:text-sky-400">
                {site.email}
              </a>
            </li>
            <li>
              {site.address.street}
              <br />
              {site.address.city}, {site.address.state} {site.address.zip}
            </li>
          </ul>
          <h4 className="mt-5 text-xs font-semibold uppercase tracking-wider text-slate-300">
            Hours
          </h4>
          <ul className="mt-2 space-y-1 text-xs text-slate-400">
            {site.hours.map((h) => (
              <li key={h.days} className="flex justify-between gap-4">
                <span>{h.days}</span>
                <span>{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-slate-800">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-xs text-slate-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Leak Detection Bradenton · Serving all of {site.county}, Florida</p>
        </Container>
      </div>
    </footer>
  );
}
