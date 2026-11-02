import { ArrowDown, ArrowUp, ArrowUpRight } from "lucide-react";
import { lazy, Suspense, useState } from "react";
import { AIWorkflow } from "./components/AIWorkflow";
import type { DetailSelection } from "./components/DetailsModal";
import { motion, MotionConfig, useReducedMotion } from "motion/react";
import { GradientASCII } from "./components/GradientASCII";
import { Header } from "./components/Header";
import { Portrait } from "./components/Portrait";
import { Projects } from "./components/Projects";
import { BrandIcon, ConceptIcon } from "./components/ContentIcon";
import { Technologies } from "./components/Technologies";
import { Journey } from "./components/Journey";
import { portfolio } from "./data/portfolio";
import { usePortfolioContent } from "./hooks/usePortfolioContent";

const DetailsModal = lazy(() => import("./components/DetailsModal").then((module) => ({ default: module.DetailsModal })));

export default function App() {
  const [selectedDetail, setSelectedDetail] = useState<DetailSelection | null>(null);
  const openProject = (id: string) => setSelectedDetail({ kind: "project", id });
  const openCertificate = (id: string) => setSelectedDetail({ kind: "certificate", id });
  const { t, content } = usePortfolioContent();
  const reducedMotion = useReducedMotion();
  const [firstName, ...familyName] = portfolio.name.split(" ");

  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#conteudo">
        {t("ui.skip")}
      </a>
      <Header />
      <main id="conteudo">
        <section id="inicio" className="hero" aria-labelledby="hero-title">
          <GradientASCII />
          <div className="page-shell hero-layout">
            <motion.div
              className="hero-copy"
              initial={reducedMotion ? false : { y: 12 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 id="hero-title">
                <strong>{firstName}</strong> <span>{familyName.join(" ")}</span>
              </h1>
              <p className="hero-role">{content.hero.role}</p>
              <p className="hero-location">
                <span className="sr-only">{t("ui.location", { location: portfolio.location })}</span>
                <span aria-hidden="true">{portfolio.location}</span>
              </p>
              <p className="hero-description">{content.hero.description}</p>
              <div className="hero-actions flex flex-wrap items-center">
                <a className="button-primary" href="#projetos">
                  {content.hero.primaryAction}
                  <ArrowDown size={16} aria-hidden="true" />
                </a>
                <a className="button-secondary" href="#sobre">
                  {content.hero.secondaryAction}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </div>
            </motion.div>
            <Portrait variant="hero" />
          </div>
        </section>

        <Projects onOpenProject={openProject} />

        <Technologies onOpenProject={openProject} onOpenCertificate={openCertificate} />
        <AIWorkflow />

        <Journey onOpenCertificate={openCertificate} />

        <section
          id="sobre"
          className="section about-section"
          aria-labelledby="about-title"
        >
          <div className="page-shell about-layout">
            <Portrait variant="about" />
            <div className="about-copy">
              <h2 id="about-title">{content.about.title}</h2>
              <p className="about-role">{content.hero.role}</p>
              {content.about.paragraphs.map((paragraph, index) => (
                <p className="about-paragraph" key={index}>
                  {paragraph}
                </p>
              ))}
              <a className="text-link" href="#contato">
                {t("ui.contact")}
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer
        id="contato"
        className="contact-section"
        aria-labelledby="contact-title"
      >
        <div className="page-shell">
          <h2 id="contact-title">{content.contact.title}</h2>
          <p className="contact-description">{content.contact.description}</p>
          <div className="contact-channels">
            {portfolio.contact.email ? (
              <a
                className="contact-email"
                href={`mailto:${portfolio.contact.email}`}
              >
                <ConceptIcon name="email" />
                {portfolio.contact.email}
              </a>
            ) : portfolio.contact.links.length === 0 ? (
              <p className="contact-pending">{content.contact.pending}</p>
            ) : null}
            {portfolio.contact.links.map((link) => (
              <a
                className="text-link"
                href={link.url}
                key={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BrandIcon name={link.label} />
                {link.label}
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            ))}
          </div>
          <div className="footer-bottom">
            <p>
              {portfolio.name}
              <span aria-hidden="true"> · </span>
              {content.footer.note}
            </p>
            <a className="back-top" href="#inicio">
              {content.footer.top}
              <ArrowUp size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
      </footer>
      {selectedDetail && <Suspense fallback={<p className="details-loading" role="status">{t("ui.loadingDetails")}</p>}>
        <DetailsModal selection={selectedDetail} onSelect={setSelectedDetail} onClose={() => setSelectedDetail(null)} />
      </Suspense>}
    </MotionConfig>
  );
}
