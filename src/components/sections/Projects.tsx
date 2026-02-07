import { TagList } from "@/components/TagList";
import { Section } from "@/components/Section";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <TagList items={project.stack} />
          </article>
        ))}
      </div>
    </Section>
  );
}
