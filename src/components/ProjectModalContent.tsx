import { ExternalLink } from "lucide-react";
import type { Project } from "../data/portfolio";
import { usePortfolioContent } from "../hooks/usePortfolioContent";
import { ProjectArtwork } from "./ProjectArtwork";
import { ProjectDetails } from "./ProjectDetails";
import { CertificateLink } from "./CertificateLink";
import { certificates } from "../data/certificates";

export function ProjectModalContent({ project, onOpenCertificate }: {
  project: Project;
  onOpenCertificate: (id: string) => void;
}) {
  const { t, content, language } = usePortfolioContent();
  const certificate = certificates.find((item) => item.projectId === project.id);
  return (
    <>
      {project.videoId ? (
        <div className="project-video">
          <iframe src={`https://www.youtube-nocookie.com/embed/${project.videoId}?playsinline=1&rel=0`}
            title={t("ui.projectVideo", { name: project.name })}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" />
        </div>
      ) : <div className="project-modal-cover"><ProjectArtwork project={project} language={language} /></div>}
      <div className="project-modal-body">
        {project.videoId && <div className="project-video-note"><p>{t("ui.videoHint")}</p><a href={`https://www.youtube.com/watch?v=${project.videoId}`} target="_blank" rel="noopener noreferrer">{t("ui.watchYouTube")}<ExternalLink size={16} aria-hidden="true" /></a></div>}
        <p className="project-modal-meta">{content.projectsSection[project.kind]}{project.period && <> · {project.period[language]}</>}</p>
        <div className="project-modal-heading">{project.icon && <img className="project-icon" src={project.icon.src} alt="" width={project.icon.width} height={project.icon.height} />}<h2 id="detail-modal-title">{project.name}</h2></div>
        {certificate && <div className="project-recognition"><CertificateLink id={certificate.id} onOpen={onOpenCertificate} label={t("certificates.viewRecognition")} /></div>}
        {project.description && <p className="project-modal-description">{project.description[language]}</p>}
        <ProjectDetails project={project} />
      </div>
    </>
  );
}
