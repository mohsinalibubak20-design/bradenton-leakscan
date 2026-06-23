import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { MobileNav } from "@/components/MobileNav";
import { mainNav, site } from "@/lib/site";

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
            <span className="hidden text-slate-400 md:inline">
              Licensed &amp; Insured · {site.license}
            </span>
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
              src="/Logo.png"
              alt="Bradenton LeakScan Logo"
              width={2720}
              height={880}
              priority
              className="h-12 w-auto sm:h-16"
            />
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-2.5 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-sky-50 hover:text-sky-700"
              >
                {item.label}
              </Link>
            ))}
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
