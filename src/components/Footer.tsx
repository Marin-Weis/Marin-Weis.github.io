import { Pi } from "lucide-react";
import { useLanguage } from "../i18n/language";

import github from "../assets/icons/github.png";
import linkedin from "../assets/icons/linkedin.webp";

const Footer = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-12 mb-6">
      <div className="glass-card-soft px-6 py-8 md:px-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 font-display font-bold text-xl">
              <Pi className="w-5 h-5 text-accent" />
              <span>
                MARIN<span className="text-accent">WEIS</span>
              </span>
            </div>
            <p className="text-xs md:text-sm text-base-content/70">
              {t.footer.tagline}
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3">
            <span className="text-xs uppercase tracking-[0.2em] text-base-content/60">
              {t.footer.social}
            </span>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Marin-Weis"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="btn btn-ghost btn-circle btn-sm hover:scale-105 transition-transform"
              >
                <img src={github} alt="GitHub" className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/marin-weis-22143a353/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="btn btn-ghost btn-circle btn-sm hover:scale-105 transition-transform"
              >
                <img src={linkedin} alt="LinkedIn" className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="divider-gradient w-full opacity-40 my-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-base-content/60">
          <span>© {year} Marin Weis</span>
          <span>{t.footer.builtWith}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
