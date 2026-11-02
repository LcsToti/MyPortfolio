import { portfolio } from "../data/portfolio";
import { usePortfolioContent } from "../hooks/usePortfolioContent";

export function Portrait({ variant }: { variant: "hero" | "about" }) {
  const { content, language } = usePortfolioContent();
  const image = variant === "hero" ? portfolio.photo?.cutout : portfolio.photo;
  return (
    <figure className={`portrait portrait-${variant}`}>
      <div className="portrait-visual">
        {portfolio.photo ? (
          <img
            src={image?.src}
            width={image?.width}
            height={image?.height}
            decoding="async"
            alt={portfolio.photo.alt[language]}
            loading={variant === "hero" ? "eager" : "lazy"}
            fetchPriority={variant === "hero" ? "high" : "auto"}
          />
        ) : (
          <span className="portrait-monogram" aria-hidden="true">
            {portfolio.initials}
          </span>
        )}
      </div>
      {!portfolio.photo && <figcaption>{content.about.photoNote}</figcaption>}
    </figure>
  );
}
