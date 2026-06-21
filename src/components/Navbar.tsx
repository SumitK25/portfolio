"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { navLinks, profile } from "@/data/site";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/85 backdrop-blur supports-[backdrop-filter]:bg-bg/70">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="font-mono text-sm tracking-tight text-ink focus-ring"
            onClick={() => setOpen(false)}
          >
            <span className="text-signal">~/</span>
            sumit-kumar
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group relative px-3 py-2 font-mono text-xs uppercase tracking-widest transition-colors focus-ring ${
                    active ? "text-signal" : "text-muted hover:text-ink"
                  }`}
                >
                  <span
                    className={`absolute left-1/2 -translate-x-1/2 -bottom-px h-px bg-signal transition-all duration-300 ${
                      active ? "w-5" : "w-0 group-hover:w-5"
                    }`}
                  />
                  {link.label}
                </Link>
              );
            })}
            <a
              href={profile.resumeHref}
              download
              className="ml-3 inline-flex items-center gap-1.5 rounded-sm border border-border-bright bg-elevated px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-ink transition-colors hover:border-signal hover:text-signal focus-ring"
            >
              <Download size={13} strokeWidth={2} />
              Resume
            </a>
          </nav>

          <button
            className="md:hidden text-ink focus-ring p-1"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-border bg-bg px-5 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`px-2 py-2.5 font-mono text-sm uppercase tracking-widest focus-ring ${
                pathname === link.href ? "text-signal" : "text-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={profile.resumeHref}
            download
            className="mt-2 inline-flex items-center gap-1.5 rounded-sm border border-border-bright bg-elevated px-3 py-2.5 font-mono text-xs uppercase tracking-widest text-ink justify-center"
          >
            <Download size={13} strokeWidth={2} />
            Resume
          </a>
        </nav>
      )}
    </header>
  );
}
