import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { MobileNav } from "@/components/MobileNav";
import { mainNav, site } from "@/lib/site";
import { landingServices } from "@/lib/landingServices";

export function Header() {
  return (
    <header className="sticky top-0 z-50 shadow-sm">
      {/* Emergency / trust utility bar */}
      <div className="bg-slate-900 text-slate-200">
        <Container className="flex h-9 items-center justify-between text-xs">
          <span className="hidden items-center gap-2 sm:flex">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            Same-Day &amp; Emergency Leak Detection in Bradenton
          </span>
          <span className="flex items-center gap-4">
            <Link
              href="/emergency"
              className="font-semibold text-amber-300 hover:text-amber-200"
            >
              🚨 Emergency Service
            </Link>
          </span>
        </Container>
      </div>

      {/* Main nav */}
      <div className="border-b border-sky-100 bg-white/95 backdrop-blur">
        <Container className="relative flex h-20 items-center justify-between gap-4 sm:h-24">
          <Link href="/" className="flex items-center" aria-label={`${site.name} — Home`}>
            <Image
              src="/logo.png"
              alt="Bradenton LeakScan Logo"
              width={2172}
              height={724}
              priority
              className="h-12 w-auto sm:h-16"
            />
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex">
            {mainNav.map((item) =>
              item.label === "Services" ? (
                <div key={item.href} className="group relative">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1 rounded-lg px-2.5 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-sky-50 hover:text-sky-700 group-focus-within:bg-sky-50 group-focus-within:text-sky-700"
                    aria-haspopup="true"
                  >
                    Services
                    <span aria-hidden className="text-xs">
                      ▾
                    </span>
                  </Link>
                  <div className="invisible absolute left-0 top-full z-50 w-64 translate-y-1 rounded-xl border border-slate-200 bg-white p-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    {landingServices.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/${s.slug}`}
                        className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-700"
                      >
                        <span aria-hidden>{s.icon}</span>
                        {s.navLabel}
                      </Link>
                    ))}
                    <Link
                      href="/services"
                      className="mt-1 block rounded-lg px-3 py-2 text-sm font-semibold text-sky-600 hover:bg-sky-50"
                    >
                      All services →
                    </Link>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-2.5 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-sky-50 hover:text-sky-700"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden lg:block">
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-sky-700"
            >
              <span aria-hidden>📞</span>
              {site.phone}
            </a>
          </div>

          <MobileNav />
        </Container>
      </div>
    </header>
  );
}
