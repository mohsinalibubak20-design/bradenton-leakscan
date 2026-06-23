"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { mainNav, site } from "@/lib/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-sky-900 hover:bg-sky-50"
      >
        <span className="sr-only">Menu</span>
        <div className="space-y-1.5">
          <span
            className={`block h-0.5 w-6 bg-current transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-current transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-current transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </div>
      </button>

      {open && (
        <div className="absolute inset-x-0 top-full border-b border-sky-100 bg-white shadow-lg">
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
            <Link href="/" onClick={() => setOpen(false)} aria-label={`${site.name} — Home`}>
              <Image
                src="/Logo.png"
                alt="Bradenton LeakScan Logo"
                width={2720}
                height={880}
                className="h-12 w-auto"
              />
            </Link>
          </div>
          <nav className="flex flex-col px-5 py-4">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-700"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={site.phoneHref}
              className="mt-3 inline-flex items-center justify-center rounded-lg bg-sky-600 px-4 py-3 text-base font-semibold text-white hover:bg-sky-700"
            >
              Call {site.phone}
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
