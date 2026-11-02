import { Code2, ExternalLink } from "lucide-react";
import { BrandIcon, ConceptIcon } from "./ContentIcon";
import type { Project } from "../data/portfolio";
import { usePortfolioContent } from "../hooks/usePortfolioContent";

export function ProjectDetails({ project }: { project: Project }) {
  const { t, language } = usePortfolioContent();
  return (
    <div className="project-details-content">
      {project.role && <p className="project-role"><strong>{t("ui.role")}</strong> {project.role[language]}</p>}
      {project.context && <section className="project-detail-section"><h3 className="icon-heading"><ConceptIcon name="context" />{t("ui.context")}</h3><p>{project.context[language]}</p></section>}
      {project.contributions.length > 0 && (
        <section className="project-detail-section">
          <h3 className="icon-heading"><ConceptIcon name="contributions" />{t("ui.contributions")}</h3>
          <ul className="contribution-list">{project.contributions.map((item, index) => <li key={index}>{item[language]}</li>)}</ul>
        </section>
      )}
      {project.solution && <section className="project-detail-section"><h3 className="icon-heading"><ConceptIcon name="solution" />{t("ui.solution")}</h3><p>{project.solution[language]}</p></section>}
      {project.results && <section className="project-detail-section"><h3 className="icon-heading"><ConceptIcon name="results" />{t("ui.results")}</h3><p>{project.results[language]}</p></section>}
      {project.technologies.length > 0 && (
        <section className="project-detail-section">
          <h3>{t("ui.technologies")}</h3>
          <ul className="project-tags">{project.technologies.map((technology) => <li key={technology}><BrandIcon name={technology} /><span>{technology}</span></li>)}</ul>
        </section>
      )}
      {project.status && <section className="project-detail-section"><h3>{t("ui.status")}</h3><p>{project.status[language]}</p></section>}
      {(project.url || project.repository) && (
        <div className="project-links">
          {project.url && <a href={project.url} target="_blank" rel="noopener noreferrer">{t("ui.visitProject")}<ExternalLink size={15} aria-hidden="true" /></a>}
          {project.repository && <a href={project.repository} target="_blank" rel="noopener noreferrer">{t("ui.code")}<Code2 size={15} aria-hidden="true" /></a>}
        </div>
      )}
    </div>
  );
}
