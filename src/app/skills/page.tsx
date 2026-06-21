import { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { skillGroups } from "@/data/skills";

export const metadata: Metadata = {
  title: "Skills — Sumit Kumar",
};

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        eyebrow="stack"
        title="Skills"
        description="The tools and technologies I reach for daily, grouped by where they sit in the stack."
      />
      <section>
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skillGroups.map((group, i) => (
              <Reveal key={group.category} delay={(i % 4) * 60}>
                <div className="rounded-md border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-border-bright hover:shadow-[0_12px_28px_-12px_rgba(0,255,163,0.18)]">
                  <div className="flex items-baseline justify-between mb-4">
                    <h3 className="font-mono text-sm text-ink uppercase tracking-wide">
                      {group.category}
                    </h3>
                    <span className="font-mono text-[10px] text-faint uppercase tracking-wider">
                      {group.note}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-sm border border-border px-2.5 py-1 font-mono text-xs text-muted transition-colors hover:border-signal-dim hover:text-signal cursor-default"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
