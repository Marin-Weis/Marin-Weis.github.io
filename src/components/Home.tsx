import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Send, ArrowRight, Eye, X, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import img from "../assets/profil/pp.jpg";
import github from "../assets/icons/github.png";
import linkedin from "../assets/icons/linkedin.webp";
import ubs from "../assets/education/ubs.jpg";
import iut from "../assets/education/iut.png";
import { useLanguage } from "../i18n/language";

const CV_URL = `${import.meta.env.BASE_URL}CV_Weis_Marin.pdf`;

const Home = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  const [cvOpen, setCvOpen] = useState(false);

  const handleViewProjects = () => {
    navigate("/", { state: { scrollTo: "Projects" } });
  };

  // Close the CV preview on Escape and lock body scroll while it's open.
  useEffect(() => {
    if (!cvOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setCvOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [cvOpen]);

  return (
    <section
      className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16 fade-in-up"
      id="Home"
    >
      <div className="flex-1 space-y-5">
        <p className="text-xs uppercase tracking-[0.3em] text-accent/80">
          {t.home.eyebrow.replace("{year}", String(year))}
        </p>

        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          {t.home.greeting}
          <br />
          {t.home.iam}{" "}
          <span className="text-gradient">Marin Weis</span>
          <span className="block text-lg md:text-2xl font-semibold mt-3 text-base-content/80">
            {t.home.role}
          </span>
        </h1>

        <p className="text-sm md:text-base text-base-content/80 max-w-xl">
          {t.home.intro}
        </p>

        <div className="flex flex-wrap items-center gap-3 md:gap-4">
          <a
            href="mailto:marin.weis@gmail.com"
            className="btn btn-accent md:btn-md btn-sm shadow-lg shadow-accent/30"
          >
            <Send className="w-4 h-4 md:w-5 md:h-5" />
            <span>{t.home.contactBtn}</span>
          </a>

          <button
            type="button"
            onClick={handleViewProjects}
            className="btn btn-outline md:btn-md btn-sm gap-2 hover:border-primary hover:bg-primary hover:text-primary-content"
          >
            <span>{t.home.projectsBtn}</span>
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </button>

          <button
            type="button"
            onClick={() => setCvOpen(true)}
            className="btn btn-ghost md:btn-md btn-sm gap-2 hover:bg-base-200/80"
          >
            <Eye className="w-4 h-4 md:w-5 md:h-5" />
            <span>{t.home.cvBtn}</span>
          </button>

          <div className="flex items-center gap-2 ml-1">
            <a
              href="https://github.com/Marin-Weis"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="btn btn-ghost btn-circle btn-xs md:btn-sm hover:scale-105 transition-transform"
            >
              <img src={github} alt="GitHub" className="w-4 h-4 md:w-5 md:h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/marin-weis-22143a353/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="btn btn-ghost btn-circle btn-xs md:btn-sm hover:scale-105 transition-transform"
            >
              <img
                src={linkedin}
                alt="LinkedIn"
                className="w-4 h-4 md:w-5 md:h-5"
              />
            </a>
          </div>
        </div>

        <div className="inline-flex items-center gap-3 rounded-2xl bg-base-100/80 border border-base-300/70 px-4 py-3 text-xs md:text-sm">
          <span className="badge badge-accent badge-sm">
            {t.home.currentlyBadge}
          </span>
          <span className="text-base-content/80">
            {t.home.currentlyText}{" "}
            <span className="font-semibold">{t.home.internships}</span>
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          <span className="text-[11px] uppercase tracking-[0.2em] text-base-content/50">
            {t.home.affiliatedWith}
          </span>
          <a
            href="https://www.univ-ubs.fr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Université Bretagne Sud"
            className="flex items-center justify-center bg-white rounded-lg border border-base-300/60 px-2.5 py-1.5 shadow-sm hover:scale-105 transition-transform"
          >
            <img src={ubs} alt="Université Bretagne Sud" className="h-7 w-auto" />
          </a>
          <a
            href="https://www.iutvannes.fr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="IUT de Vannes"
            className="flex items-center justify-center bg-white rounded-lg border border-base-300/60 px-2.5 py-1.5 shadow-sm hover:scale-105 transition-transform"
          >
            <img src={iut} alt="IUT de Vannes" className="h-7 w-auto" />
          </a>
        </div>
      </div>

      <div className="flex-1 flex justify-center lg:justify-end">
        <div className="relative w-52 h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 floating">
          <div className="absolute inset-0 rounded-[42%_58%_45%_55%/60%_45%_55%_40%] bg-gradient-to-tr from-accent/40 via-primary/40 to-secondary/40 blur-2xl -z-10" />

          <img
            src={img}
            alt="Marin Weis"
            className="w-full h-full object-cover border-4 border-base-100/80 shadow-2xl"
            style={{
              borderRadius: "42% 58% 45% 55% / 60% 45% 55% 40%",
            }}
          />

          <div className="absolute -bottom-4 -right-3 md:-bottom-5 md:-right-5 glass-card-soft px-3 py-2 text-xs md:text-sm flex flex-col gap-1">
            <span className="font-semibold">{t.home.chipTitle}</span>
            <span className="text-[11px] md:text-xs text-base-content/80">
              {t.home.chipSub}
            </span>
          </div>
        </div>
      </div>

      {cvOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8 bg-base-300/70 backdrop-blur-sm fade-in-up"
            onClick={() => setCvOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label={t.home.cvBtn}
          >
          <div
            className="relative w-full max-w-4xl h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-3 right-3 z-10 flex items-center gap-2">
              <a
                href={CV_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm gap-2 bg-base-100/40 hover:bg-base-100/80 backdrop-blur-md border border-base-100/30 text-base-content shadow-lg"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="hidden sm:inline">{t.home.cvNewTab}</span>
              </a>
              <button
                type="button"
                onClick={() => setCvOpen(false)}
                className="btn btn-sm btn-circle bg-base-100/40 hover:bg-base-100/80 backdrop-blur-md border border-base-100/30 shadow-lg"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <iframe
              src={`${CV_URL}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
              title="CV Marin Weis"
              className="w-full h-full rounded-2xl shadow-2xl bg-white"
            />
          </div>
        </div>,
          document.body
        )}
    </section>
  );
};

export default Home;
