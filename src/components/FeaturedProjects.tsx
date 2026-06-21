import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20">
        <Reveal>
          <div className="flex items-end justify-between gap-4 mb-8">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal mb-2">
                featured work
              </p>
              <h2 className="text-2xl sm:text-3xl font-mono font-bold text-ink">
                Recent builds
              </h2>
            </div>
            <Link
              href="/projects"
              className="hidden sm:inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-signal focus-ring"
            >
              All projects <ArrowRight size={13} />
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={i * 80}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Link
          href="/projects"
          className="sm:hidden mt-6 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-muted"
        >
          All projects <ArrowRight size={13} />
        </Link>
      </div>
    </section>
  );
}
