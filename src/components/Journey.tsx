import { portfolio } from "../data/portfolio";
import { usePortfolioContent } from "../hooks/usePortfolioContent";
import { CertificateLink } from "./CertificateLink";
import { ConceptIcon } from "./ContentIcon";
import { Timeline } from "./Timeline";
import { ChevronDown } from "lucide-react";

export function Journey({ onOpenCertificate }: { onOpenCertificate: (id: string) => void }) {
  const { t, content } = usePortfolioContent();
  return (
    <section id="trajetoria" className="section journey-section" aria-labelledby="journey-title">
      <div className="page-shell journey-layout">
        <h2 id="journey-title">{content.journey.title}</h2>
        <div className="journey-content">
          {portfolio.journey.length > 0 ? (
            <section aria-labelledby="experience-title">
              <h3 id="experience-title" className="journey-group-title icon-heading"><ConceptIcon name="experience" />{content.journey.experience}</h3>
              <Timeline entries={portfolio.journey} action="contributions" onOpenCertificate={onOpenCertificate} />
            </section>
          ) : <div className="journey-empty"><h3>{content.journey.emptyTitle}</h3><p>{content.journey.emptyDescription}</p></div>}
          {portfolio.education.length > 0 && (
            <section id="formacao" aria-labelledby="education-title">
              <h3 id="education-title" className="journey-group-title icon-heading"><ConceptIcon name="education" />{content.journey.education}</h3>
              <div>
                <Timeline entries={portfolio.education} action="recognition" onOpenCertificate={onOpenCertificate} />
                <details className="journey-details learning-certificates">
                  <summary>{t("certificates.furtherLearning")}<ChevronDown size={18} aria-hidden="true" /></summary>
                  <CertificateLink id="dsa-galeog" onOpen={onOpenCertificate} />
                </details>
              </div>
            </section>
          )}
        </div>
      </div>
    </section>
  );
}
