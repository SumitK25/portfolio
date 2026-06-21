import { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Reveal from "@/components/Reveal";
import { education, certifications } from "@/data/experience";
import { profile } from "@/data/site";

export const metadata: Metadata = {
  title: "About — Sumit Kumar",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="persona" title="About" />

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-12 sm:py-16">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-12">
              <div className="group relative h-48 w-48 lg:h-full lg:w-full lg:max-h-[200px] overflow-hidden rounded-md border border-border-bright bg-elevated mx-auto lg:mx-0 transition-transform duration-500 hover:scale-[1.03]">
                <Image
                  src={profile.photoHref}
                  alt={profile.name}
                  fill
                  sizes="200px"
                  className="object-cover grayscale-[15%] contrast-[1.05]"
                />
              </div>

              <div>
                <p className="text-muted leading-relaxed mb-4">
                  I&apos;m a full stack developer based in {profile.location}, originally from{" "}
                  {profile.origin}. Most of my day job lives in backend systems — designing and
                  running services that keep large-scale telecom network management software
                  stable, fast, and observable in production.
                </p>
                <p className="text-muted leading-relaxed mb-4">
                  Outside of work, I push GenAI agents through hackathons and competitions:
                  multi-modal verification pipelines, triage agents, merchant assistants —
                  anything that forces me to ship something real against a clock. I&apos;m
                  currently deepening my AI/ML foundations through a certification at IIT
                  Patna.
                </p>
                <p className="text-muted leading-relaxed">
                  I&apos;m actively looking for backend, full stack, or GenAI engineering roles
                  at product companies, SaaS teams, and fast-growing startups across India —
                  remote, hybrid, or onsite.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {["clean architecture", "production reliability", "data pipelines", "shipping under deadline"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="rounded-sm border border-border px-2.5 py-1 font-mono text-[11px] text-faint transition-colors hover:border-signal-dim hover:text-signal cursor-default"
                      >
                        {tag}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-12 sm:py-16">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal mb-2">
              career log
            </p>
            <h2 className="text-2xl sm:text-3xl font-mono font-bold text-ink mb-10">
              Experience
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <ExperienceTimeline />
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-12 sm:py-16">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal mb-2">
              foundation
            </p>
            <h2 className="text-2xl sm:text-3xl font-mono font-bold text-ink mb-10">
              Education
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {education.map((item, i) => (
              <Reveal key={item.degree + item.school} delay={i * 80}>
                <div className="rounded-md border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-border-bright hover:shadow-[0_12px_28px_-12px_rgba(0,255,163,0.18)]">
                  <div className="flex items-baseline justify-between mb-1">
                    <h3 className="font-mono text-sm text-ink">{item.degree}</h3>
                    <span className="font-mono text-[11px] text-faint">{item.period}</span>
                  </div>
                  <p className="text-sm text-muted mb-1">{item.field}</p>
                  <p className="text-sm text-faint mb-2">{item.school}</p>
                  <p className="font-mono text-[11px] text-signal">{item.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-12 sm:py-16">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal mb-2">
              credentials
            </p>
            <h2 className="text-2xl sm:text-3xl font-mono font-bold text-ink mb-8">
              Certifications
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="rounded-sm border border-border bg-surface px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:border-signal-dim hover:text-signal cursor-default"
                >
                  {cert}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
