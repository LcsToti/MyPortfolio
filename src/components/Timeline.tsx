import { ArrowDownRight } from "lucide-react";
import type { TimelineEntry } from "../data/portfolio";
import { usePortfolioContent } from "../hooks/usePortfolioContent";
import { certificates } from "../data/certificates";
import { CertificateLink } from "./CertificateLink";

export function Timeline({
  entries,
  action,
  onOpenCertificate,
}: {
  entries: TimelineEntry[];
  action: "contributions" | "recognition";
  onOpenCertificate: (id: string) => void;
}) {
  const { t, content, language } = usePortfolioContent();
  return (
    <ol className={`timeline${action === "contributions" ? " timeline--experience" : ""}`}>
      {entries.map((entry) => (
        <li key={entry.id}>
          <p className="timeline-period">{entry.period[language]}</p>
          <div className="timeline-copy">
            {entry.organizationLogo && (
              <img
                className="timeline-organization-logo"
                src={entry.organizationLogo.src}
                width={entry.organizationLogo.width}
                height={entry.organizationLogo.height}
                alt=""
                loading="lazy"
                decoding="async"
              />
            )}
            <h4>{entry.title[language]}</h4>
            <p className="timeline-organization">{entry.organization[language]}</p>
            <p>{entry.description[language]}</p>
            {(entry.contributions.length > 0 || Boolean(entry.certificateIds?.length)) && (
              <details className="journey-details">
                <summary aria-label={t("ui.entryDetails", {
                  action: content.journey[action],
                  organization: entry.organization[language],
                  period: entry.period[language],
                })}>
                  {content.journey[action]}
                  <ArrowDownRight size={16} aria-hidden="true" />
                </summary>
                {entry.certificateIds?.length ? (
                  <ul className="recognition-list">
                    {entry.certificateIds.map((id) => {
                      const certificate = certificates.find((item) => item.id === id);
                      return certificate && <li key={id}><CertificateLink id={id} onOpen={onOpenCertificate} /><p>{certificate.period[language]}</p></li>;
                    })}
                  </ul>
                ) : (
                  <ul className="contribution-list">
                    {entry.contributions.map((item, index) => <li key={index}>{item[language]}</li>)}
                  </ul>
                )}
              </details>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
