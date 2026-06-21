import { experience } from "@/data/experience";

export default function ExperienceTimeline({ compact = false }: { compact?: boolean }) {
  const items = compact ? experience.slice(0, 2) : experience;

  return (
    <div className="relative">
      <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />
      <div className="space-y-8">
        {items.map((job) => (
          <div key={job.role + job.org} className="relative pl-8">
            <span
              className={`absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 ${
                job.current ? "border-signal bg-bg" : "border-border-bright bg-surface"
              }`}
            >
              {job.current && (
                <span className="absolute inset-0.5 rounded-full bg-signal animate-pulseDot" />
              )}
            </span>

            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
              <h3 className="font-mono text-sm sm:text-base text-ink">
                {job.role} <span className="text-faint">·</span>{" "}
                <span className="text-muted">{job.org}</span>
              </h3>
              <span className="font-mono text-[11px] text-faint">{job.period}</span>
            </div>
            <p className="font-mono text-[11px] text-faint mb-3">{job.location}</p>

            {!compact && (
              <ul className="space-y-1.5 mb-3">
                {job.points.map((point, i) => (
                  <li key={i} className="text-sm text-muted leading-relaxed pl-3 relative">
                    <span className="absolute left-0 text-signal">›</span>
                    {point}
                  </li>
                ))}
              </ul>
            )}

            <div className="flex flex-wrap gap-2">
              {job.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-sm border border-border px-2 py-0.5 font-mono text-[10px] text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
