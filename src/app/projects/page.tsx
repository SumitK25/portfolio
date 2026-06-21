import { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects — Sumit Kumar",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="archive"
        title="Projects"
        description="Production work, hackathon builds, and personal experiments — spanning backend systems, data pipelines, and GenAI agents."
      />
      <section>
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project, i) => (
              <Reveal key={project.slug} delay={(i % 4) * 60}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
