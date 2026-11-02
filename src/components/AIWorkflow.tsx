import { Bot, Cable, ScanEye } from "lucide-react";
import { usePortfolioContent } from "../hooks/usePortfolioContent";
import { aiToolGroups } from "../data/aiTools";
import { TechnologyNames } from "./ContentIcon";

const steps = [
  { id: "assistance", icon: Bot },
  { id: "automation", icon: Cable },
  { id: "review", icon: ScanEye },
] as const;

export function AIWorkflow() {
  const { t, language } = usePortfolioContent();
  const text = t("skillsContent.workflow", { returnObjects: true });
  return (
    <section id="workflow-ia" className="section workflow-section" aria-labelledby="workflow-title">
      <div className="page-shell">
        <div className="workflow-context">
          <div className="section-intro">
            <h2 id="workflow-title">{text.title}</h2>
            <p>{text.description}</p>
          </div>
          <div className="workflow-topics">
            {steps.map(({ id, icon: Icon }) => (
              <div className="workflow-topic" key={id}>
                <Icon size={23} strokeWidth={1.6} aria-hidden="true" />
                <h3>{text[id].title}</h3>
                <p>{text[id].description}</p>
              </div>
            ))}
          </div>
        </div>
        <section className="workflow-tools" aria-labelledby="workflow-tools-title">
          <h3 id="workflow-tools-title">{text.tools}</h3>
          {aiToolGroups.map((group) => (
            <div className="workflow-tool-group" key={group.id}>
              <h4>{group.title[language]}</h4>
              <TechnologyNames names={group.technologies} />
              <p>{group.description[language]}</p>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
}
