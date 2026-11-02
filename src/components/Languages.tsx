import { ArrowUpRight } from "lucide-react";
import { efSetLogo } from "../data/certificates";
import { usePortfolioContent } from "../hooks/usePortfolioContent";
import { ConceptIcon } from "./ContentIcon";

export function Languages({ onOpenCertificate }: { onOpenCertificate: (id: string) => void }) {
  const { t } = usePortfolioContent();
  const text = t("skillsContent.languages", { returnObjects: true });
  return (
    <section className="skills-languages" aria-labelledby="languages-title">
      <h3 id="languages-title" className="icon-heading"><ConceptIcon name="languages" />{text.title}</h3>
      <div className="languages-content">
        <div className="language-item">
          <div className="language-summary"><h4>{text.portuguese}</h4><p>{text.native}</p></div>
        </div>
        <div className="language-item">
          <div className="language-summary">
            <h4>{text.english}</h4><p>{text.advanced}</p>
            <p className="language-description">{text.englishDescription}</p>
          </div>
          <div className="language-certificate">
            <img src={efSetLogo.src} width={efSetLogo.width} height={efSetLogo.height} alt="" loading="lazy" decoding="async" />
            <div>
              <p className="language-certificate-name">{text.certification}</p>
              <p className="language-certificate-score">{text.score}</p>
              <p className="language-description">{text.assessedSkills}</p>
              <button className="text-link" type="button" aria-haspopup="dialog" onClick={() => onOpenCertificate("ef-set")}>{t("certificates.view")}<ArrowUpRight size={18} aria-hidden="true" /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
