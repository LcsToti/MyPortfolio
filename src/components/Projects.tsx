import { ArrowUpRight } from "lucide-react";
import { ProjectArtwork } from "./ProjectArtwork";
import { portfolio } from "../data/portfolio";
import { usePortfolioContent } from "../hooks/usePortfolioContent";

export function Projects({ onOpenProject }: { onOpenProject: (id: string) => void }) {
  const { t, content, language } = usePortfolioContent();
  return (
    <section id="projetos" className="projects-section" aria-labelledby="projects-title">
      <div className="page-shell">
        <div className="section-heading">
          <h2 id="projects-title">{content.projectsSection.title}</h2>
          <p>{content.projectsSection.description}</p>
        </div>
        <div className="project-list">
          {portfolio.projects.map((project) => {
            const hasDetails = Boolean(project.context || project.contributions.length || project.solution || project.results);
            const action = project.videoId ? content.projectsSection.videoAction : content.projectsSection.action;
            return (
              <article key={project.id} className="project">
                <ProjectArtwork project={project} language={language} />
                <div className="project-body">
                  <div className="project-heading">
                    {project.icon && <img className="project-icon" src={project.icon.src} alt="" width={project.icon.width} height={project.icon.height} loading="lazy" decoding="async" />}
                    <h3>{project.name}</h3>
                  </div>
                  <p className="project-meta">
                    <span>{content.projectsSection[project.kind]}</span>
                    {project.period && <span>{project.period[language]}</span>}
                  </p>
                  <p>{project.description?.[language] ?? content.projectsSection.previewPending}</p>
                  {hasDetails ? (
                    <button className="project-open" type="button" onClick={() => onOpenProject(project.id)} aria-haspopup="dialog" aria-label={t("ui.projectDetails", { action, name: project.name })}>
                      {action}<ArrowUpRight size={17} aria-hidden="true" />
                    </button>
                  ) : <span className="project-status">{content.projectsSection.pending}</span>}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
