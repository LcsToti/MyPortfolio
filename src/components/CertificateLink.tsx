import { ArrowUpRight, Award } from "lucide-react";
import { certificates } from "../data/certificates";
import { usePortfolioContent } from "../hooks/usePortfolioContent";

export function CertificateLink({ id, onOpen, label }: {
  id: string;
  onOpen: (id: string) => void;
  label?: string;
}) {
  const { t, language } = usePortfolioContent();
  const certificate = certificates.find((item) => item.id === id);
  if (!certificate) return null;
  return (
    <button className="certificate-link" type="button" aria-haspopup="dialog"
      aria-label={t("certificates.openNamed", { title: certificate.title[language] })}
      onClick={() => onOpen(certificate.id)}>
      {certificate.logo ? <img src={certificate.logo.src} width={certificate.logo.width} height={certificate.logo.height} alt="" loading="lazy" decoding="async" /> : <Award size={24} aria-hidden="true" />}
      <span>{label ?? certificate.title[language]}</span>
      <ArrowUpRight size={18} aria-hidden="true" />
    </button>
  );
}
