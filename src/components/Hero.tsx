import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import StatusPanel from "./StatusPanel";
import { profile } from "@/data/site";

const techStack = [
  "Java",
  "Spring Boot",
  "Apache Kafka",
  "PostgreSQL",
  "React",
  "Python",
  "LangChain",
  "Node.js",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      {/* Decorative grid layer — kept separate from content so the radial
          mask never fades the text above it (see globals.css note). */}
      <div className="pointer-events-none absolute inset-0 bg-grid-fade" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 pt-14 pb-16 sm:pt-20 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-10 items-center">
          {/* Left: intro */}
          <div className="animate-fadeUp">
            <div className="inline-flex items-center gap-2 rounded-sm border border-border bg-surface px-3 py-1 mb-6 transition-colors hover:border-signal-dim">
              <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulseDot" />
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                open to backend / full stack / genai roles
              </span>
            </div>

            <p className="font-mono text-sm text-signal mb-3">
              <span className="text-faint">$</span> whoami
              <span className="inline-block w-2 h-4 bg-signal/80 align-middle ml-1 animate-blink" />
            </p>

            <h1 className="group text-4xl sm:text-5xl lg:text-[3.4rem] font-mono font-bold leading-[1.08] tracking-tight text-ink transition-[text-shadow] duration-500 hover:text-glow">
              {profile.name}
            </h1>
            <p className="mt-3 text-lg sm:text-xl text-muted max-w-xl">
              {profile.title} building{" "}
              <span className="text-ink">backend systems</span>,{" "}
              <span className="text-ink">data pipelines</span>, and{" "}
              <span className="text-ink">GenAI agents</span> — currently shipping
              production network-management software in Kolkata.
            </p>

            <p className="mt-4 text-sm text-faint max-w-lg leading-relaxed">
              {profile.blurb}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 rounded-sm bg-signal px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-bg font-medium shadow-[0_0_0_0_rgba(0,255,163,0)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-6px_rgba(0,255,163,0.45)] focus-ring"
              >
                View Projects{" "}
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a
                href={profile.resumeHref}
                download
                className="inline-flex items-center gap-2 rounded-sm border border-border-bright px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-signal hover:text-signal hover:shadow-[0_8px_24px_-8px_rgba(0,255,163,0.3)] focus-ring"
              >
                <Download size={14} /> Resume
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-5 gap-y-2">
              {techStack.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[11px] text-faint transition-colors duration-200 hover:text-signal cursor-default"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right: photo + status panel */}
          <div className="flex flex-col items-center gap-5 animate-fadeUp [animation-delay:120ms]">
            <div className="group relative">
              <div className="absolute -inset-3 rounded-lg border border-signal-dim transition-all duration-500 group-hover:-inset-4 group-hover:border-signal/60" />
              <div className="relative h-44 w-44 sm:h-52 sm:w-52 overflow-hidden rounded-md border border-border-bright bg-elevated transition-transform duration-500 group-hover:scale-[1.03]">
                <Image
                  src={profile.photoHref}
                  alt={profile.name}
                  fill
                  sizes="208px"
                  className="object-cover grayscale-[15%] contrast-[1.05]"
                  priority
                />
              </div>
              <span className="absolute -bottom-2 -right-2 flex items-center gap-1.5 rounded-sm border border-signal-dim bg-bg px-2 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulseDot" />
                <span className="font-mono text-[10px] uppercase tracking-wider text-signal">
                  online
                </span>
              </span>
            </div>

            <div className="w-full max-w-sm">
              <StatusPanel />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
