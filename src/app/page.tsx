import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20">
          <Reveal>
            <div className="flex items-end justify-between gap-4 mb-10">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal mb-2">
                  career log
                </p>
                <h2 className="text-2xl sm:text-3xl font-mono font-bold text-ink">
                  Where I&apos;ve worked
                </h2>
              </div>
              <Link
                href="/about"
                className="hidden sm:inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-signal focus-ring"
              >
                Full history <ArrowRight size={13} />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <ExperienceTimeline compact />
          </Reveal>

          <Link
            href="/about"
            className="sm:hidden mt-8 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-muted"
          >
            Full history <ArrowRight size={13} />
          </Link>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20 text-center">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal mb-3">
              let&apos;s talk
            </p>
            <h2 className="text-2xl sm:text-3xl font-mono font-bold text-ink mb-4">
              Hiring for backend, full stack, or GenAI?
            </h2>
            <p className="text-muted max-w-lg mx-auto mb-8">
              I&apos;m actively looking for my next role — product companies, SaaS teams, and
              fast-growing startups across India, remote or onsite.
            </p>
            <a
              href="mailto:sumit25mgr@gmail.com"
              className="group inline-flex items-center gap-2 rounded-sm bg-signal px-6 py-3 font-mono text-xs uppercase tracking-widest text-bg font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-6px_rgba(0,255,163,0.45)] focus-ring"
            >
              Get in touch{" "}
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
