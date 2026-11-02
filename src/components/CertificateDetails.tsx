import { useState } from "react";
import { ArrowUpRight, ZoomIn, ZoomOut } from "lucide-react";
import type { Certificate } from "../data/certificates";
import { usePortfolioContent } from "../hooks/usePortfolioContent";

export function CertificateDetails({ certificate, onOpenProject }: {
  certificate: Certificate;
  onOpenProject: (id: string) => void;
}) {
  const { t, language } = usePortfolioContent();
  const text = t("certificates", { returnObjects: true });
  const projectId = certificate.projectId;
  const [zoomed, setZoomed] = useState(false);
  const ZoomIcon = zoomed ? ZoomOut : ZoomIn;
  return (
    <>
      <div className="certificate-heading">
        {certificate.logo && <img className="certificate-issuer-logo" src={certificate.logo.src} width={certificate.logo.width} height={certificate.logo.height} alt="" />}
        <p className="certificate-kind">{text.kinds[certificate.kind]}</p>
        <h2 id="detail-modal-title">{certificate.title[language]}</h2>
        <dl className="certificate-metadata">
          <div><dt>{text.issuer}</dt><dd>{certificate.issuer}</dd></div>
          <div><dt>{text.periodLabels[certificate.kind]}</dt><dd>{certificate.period[language]}</dd></div>
        </dl>
      </div>
      <figure className="certificate-preview">
        <figcaption className="certificate-preview-heading">
          <span>{text.preview}</span>
          <button className="text-link certificate-zoom" type="button" aria-pressed={zoomed} onClick={() => setZoomed(!zoomed)}>{zoomed ? text.fit : text.zoom}<ZoomIcon size={18} aria-hidden="true" /></button>
        </figcaption>
        <div className={`certificate-preview-image${zoomed ? " is-zoomed" : ""}`} tabIndex={zoomed ? 0 : undefined} role={zoomed ? "region" : undefined} aria-label={zoomed ? text.zoomedDocument : undefined}>
          <img src={certificate.preview.src} width={certificate.preview.width} height={certificate.preview.height} alt={t("certificates.previewAlt", { title: certificate.title[language] })} decoding="async" />
        </div>
      </figure>
      <div className="certificate-summary">
        <p className="certificate-description">{certificate.description[language]}</p>
        {(certificate.verificationUrl || projectId) && <div className="certificate-actions">
          {certificate.verificationUrl && <a className="text-link" href={certificate.verificationUrl} target="_blank" rel="noopener noreferrer">{text.verify}<ArrowUpRight size={18} aria-hidden="true" /></a>}
          {projectId && <button className="text-link certificate-related-project" type="button" onClick={() => onOpenProject(projectId)}>{text.relatedProject}<ArrowUpRight size={18} aria-hidden="true" /></button>}
        </div>}
      </div>
    </>
  );
}
