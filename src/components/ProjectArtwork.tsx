import type { Language, Project } from "../data/portfolio";

export function ProjectArtwork({
  project,
  language,
}: {
  project: Project;
  language: Language;
}) {
  if (project.thumbnail) {
    return (
      <img
        className="project-art project-thumbnail"
        src={project.thumbnail.src}
        alt={project.thumbnail.alt[language]}
        width={project.thumbnail.width}
        height={project.thumbnail.height}
        loading="lazy"
        decoding="async"
        style={{ objectFit: project.thumbnail.fit ?? "cover" }}
      />
    );
  }
  return (
    <div className="project-art project-art-placeholder" aria-hidden="true">
      <span className="project-placeholder">{project.name}</span>
    </div>
  );
}
