import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { PreferenceControls } from "./PreferenceControls";
import { portfolio } from "../data/portfolio";

export function Header() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id === "workflow-ia" ? "#tecnologias" : `#${entry.target.id}`);
        });
      },
      { rootMargin: "-15% 0px -65% 0px" },
    );
    document
      .querySelectorAll("main > section[id]")
      .forEach((section) => observer.observe(section));
    const closeOnEscape = (event: KeyboardEvent) => {
      if (
        event.key === "Escape" &&
        document
          .getElementById("main-navigation")
          ?.classList.contains("is-open")
      ) {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const mobileViewport = window.matchMedia("(max-width: 860px)");
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (!event.matches) setOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    mobileViewport.addEventListener("change", closeOnDesktop);
    return () => {
      observer.disconnect();
      document.removeEventListener("keydown", closeOnEscape);
      mobileViewport.removeEventListener("change", closeOnDesktop);
    };
  }, []);

  return (
    <header className="site-header">
      <div className="page-shell header-inner">
        <a
          className="wordmark"
          href="#inicio"
          aria-label={t("ui.home", { name: portfolio.name })}
          onClick={() => setOpen(false)}
        >
          <span className="wordmark-name">{portfolio.name}</span>
        </a>
        <button
          ref={menuButtonRef}
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="main-navigation"
          aria-label={t(open ? "ui.closeMenu" : "ui.openMenu")}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav
          id="main-navigation"
          className={`main-nav ${open ? "is-open" : ""}`}
          aria-label={t("ui.navigation")}
        >
          {portfolio.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={active === item.href ? "location" : undefined}
              onClick={() => setOpen(false)}
            >
              {t(`navigation.${item.id}`)}
            </a>
          ))}
          <a
            className="nav-contact"
            href="#contato"
            onClick={() => setOpen(false)}
          >
            {t("ui.contactNavigation")}{" "}
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </nav>
        <PreferenceControls />
      </div>
    </header>
  );
}
