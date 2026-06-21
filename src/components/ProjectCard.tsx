import { Project } from "@/data/projects";

const statusStyles: Record<Project["status"], string> = {
  shipped: "border-signal-dim bg-signal-dim text-signal",
  "in-progress": "border-amber-dim bg-amber-dim text-amber",
  competition: "border-border-bright bg-elevated text-muted",
};

const statusLabel: Record<Project["status"], string> = {
  shipped: "shipped",
  "in-progress": "in progress",
  competition: "competition",
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group rounded-md border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-border-bright hover:shadow-[0_12px_28px_-12px_rgba(0,255,163,0.18)]">
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="font-mono text-base text-ink leading-snug">{project.name}</h3>
        <span
          className={`shrink-0 rounded-sm border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${statusStyles[project.status]}`}
        >
          {statusLabel[project.status]}
        </span>
      </div>

      <p className="font-mono text-[11px] text-faint mb-3">{project.period}</p>

      <p className="text-sm text-muted leading-relaxed mb-3">{project.summary}</p>
      <p className="text-sm text-faint leading-relaxed mb-4">{project.detail}</p>

      <div className="flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-sm border border-border px-2 py-1 font-mono text-[10px] text-muted transition-colors group-hover:border-border-bright hover:!border-signal-dim hover:!text-signal"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
