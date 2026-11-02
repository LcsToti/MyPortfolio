import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { portfolio } from "../data/portfolio";
import { certificates } from "../data/certificates";
import { usePortfolioContent } from "../hooks/usePortfolioContent";
import { CertificateDetails } from "./CertificateDetails";
import { ProjectModalContent } from "./ProjectModalContent";

export type DetailSelection = { kind: "project" | "certificate"; id: string };

export function DetailsModal({ selection, onSelect, onClose }: {
  selection: DetailSelection | null;
  onSelect: (selection: DetailSelection) => void;
  onClose: () => void;
}) {
  const { t } = usePortfolioContent();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const project = selection?.kind === "project" ? portfolio.projects.find((item) => item.id === selection.id) : null;
  const certificate = selection?.kind === "certificate" ? certificates.find((item) => item.id === selection.id) : null;
  const open = Boolean(project || certificate);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !open) return;
    const trigger = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.showModal();
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      const fallback = trigger?.closest(".skill-area")?.querySelector<HTMLButtonElement>(".skill-trigger");
      const focusTarget = trigger?.isConnected && trigger.getClientRects().length && !trigger.closest("[inert]") ? trigger : fallback;
      focusTarget?.focus({ preventScroll: true });
    };
  }, [open]);

  const selectionId = selection?.id;
  const selectionKind = selection?.kind;
  useEffect(() => {
    if (!selectionId) return;
    dialogRef.current?.scrollTo({ top: 0, behavior: "instant" });
    dialogRef.current?.querySelector<HTMLButtonElement>(".project-modal-close")?.focus({ preventScroll: true });
  }, [selectionId, selectionKind]);

  return (
    <dialog ref={dialogRef} className={`project-modal${certificate ? " certificate-modal" : ""}`} aria-labelledby="detail-modal-title"
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) onClose();
      }}>
      {open && <>
        <div className="project-modal-toolbar"><button className="project-modal-close" type="button" onClick={onClose} aria-label={t("ui.closeDetails")}><X size={24} aria-hidden="true" /></button></div>
        {project && <ProjectModalContent key={project.id} project={project} onOpenCertificate={(id) => onSelect({ kind: "certificate", id })} />}
        {certificate && <CertificateDetails key={certificate.id} certificate={certificate} onOpenProject={(id) => onSelect({ kind: "project", id })} />}
      </>}
    </dialog>
  );
}
