import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Bot, ChevronDown, Code2, Database, Layers, Monitor, Plus, Server, Smartphone } from "lucide-react";
import { portfolio } from "../data/portfolio";
import { skills } from "../data/skills";
import type { SkillArea } from "../data/skills";
import { usePortfolioContent } from "../hooks/usePortfolioContent";
import { TechnologyNames } from "./ContentIcon";
import { Languages } from "./Languages";

const icons = { backend: Code2, frontend: Monitor, mobile: Smartphone, databases: Database, quality: Layers, infrastructure: Server, ai: Bot };

export function Technologies({ onOpenProject, onOpenCertificate }: { onOpenProject: (id: string) => void; onOpenCertificate: (id: string) => void }) {
  const { t, language } = usePortfolioContent();
  const text = t("skillsContent", { returnObjects: true });
  const [active, setActive] = useState<SkillArea | null>(null);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = () => {
      if (!document.querySelector("dialog[open]")) setActive(null);
    };
    const outside = (event: PointerEvent) => {
      if (event.target instanceof Node && !root.current?.contains(event.target)) close();
    };
    const escape = (event: KeyboardEvent) => { if (event.key === "Escape") close(); };
    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", outside);
      document.removeEventListener("keydown", escape);
    };
  }, []);

  return (
    <section id="tecnologias" className="section technology-section" aria-labelledby="technologies-title">
      <div className="page-shell">
        <div className="section-intro skills-intro">
          <h2 id="technologies-title">{text.title}</h2>
          <p>{text.description}</p>
          <p className="skills-hint">{text.hint}</p>
        </div>
        <div className="skills-list" ref={root}>
          {skills.map((skill) => {
            const Icon = icons[skill.id];
            const area = text.areas[skill.id];
            const open = active === skill.id;
            return (
              <div
                className={`skill-area skill-area--${skill.id}${open ? " is-open" : ""}`}
                key={skill.id}
              >
                <button
                  id={`skill-trigger-${skill.id}`}
                  className="skill-trigger"
                  type="button"
                  aria-expanded={open}
                  aria-controls={`skill-${skill.id}`}
                  onClick={() => setActive(open ? null : skill.id)}
                >
                  <span className="skill-heading"><Icon size={21} strokeWidth={1.7} aria-hidden="true" /><span>{area.title}</span><ChevronDown className="skill-chevron" size={17} aria-hidden="true" /></span>
                  <span className="skill-description">{area.description}</span>
                </button>
                <TechnologyNames names={skill.technologies} />
                <div className="skill-panel" id={`skill-${skill.id}`} inert={!open} aria-hidden={!open}>
                  <div className="skill-panel-inner">
                  {skill.id === "ai" && (
                    <a className="text-link skill-workflow-link" href="#workflow-ia">
                      {text.exploreWorkflow}<ArrowUpRight size={15} aria-hidden="true" />
                    </a>
                  )}
                  {skill.groups && (
                    <dl className="skill-groups">
                      {skill.groups.map((group) => (
                        <div key={group.id}>
                          <dt>{group.title[language]}</dt>
                          <dd>{group.description[language]}</dd>
                        </div>
                      ))}
                    </dl>
                  )}
                  <h3 className="skill-panel-label">{text.examples}</h3>
                  <ul className="skill-evidence">
                    {skill.evidence.map((evidence) => {
                      const project = portfolio.projects.find((item) => item.id === evidence.projectId);
                      if (!project) return null;
                      return (
                        <li key={evidence.projectId}>
                          <button className="skill-project" type="button" onClick={() => onOpenProject(project.id)} aria-label={`${text.openProject}: ${project.name}`}>
                            {project.name}<ArrowUpRight size={15} aria-hidden="true" />
                          </button>
                          <p>{evidence.description[language]}</p>
                        </li>
                      );
                    })}
                  </ul>
                  {skill.additionalTechnologies.length > 0 && (
                    <details className="skill-additional">
                      <summary>
                        <span>{t("skillsContent.moreTechnologies", { count: skill.additionalTechnologies.length })}</span>
                        <Plus size={16} aria-hidden="true" />
                      </summary>
                      <TechnologyNames names={skill.additionalTechnologies} />
                    </details>
                  )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Languages onOpenCertificate={onOpenCertificate} />
      </div>
    </section>
  );
}
