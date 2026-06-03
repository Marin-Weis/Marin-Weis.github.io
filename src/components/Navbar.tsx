import { useEffect, useState } from "react";
import { Pi, Moon, Sun, List, Languages, ChevronDown, Check } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "../i18n/language";
import type { Lang } from "../i18n/translations";
import { scrollToSection } from "../lib/scroll";

type Theme = "light" | "dark";

const THEME_KEY = "portfolio-theme";

const languages: { code: Lang; label: string; short: string }[] = [
  { code: "en", label: "English", short: "EN" },
  { code: "fr", label: "Français", short: "FR" },
  { code: "de", label: "Deutsch", short: "DE" },
];

const LanguageDropdown = () => {
  const { t, lang, setLang } = useLanguage();
  const current = languages.find((l) => l.code === lang) ?? languages[0];

  const choose = (code: Lang) => {
    setLang(code);
    // Close the daisyUI dropdown after selection.
    (document.activeElement as HTMLElement | null)?.blur();
  };

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        aria-label={t.nav.languageLabel}
        className="btn btn-ghost btn-sm rounded-full gap-1"
      >
        <Languages className="w-4 h-4" />
        <span className="font-semibold">{current.short}</span>
        <ChevronDown className="w-3 h-3 opacity-60" />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu mt-2 z-50 p-1.5 shadow-xl bg-base-100 rounded-2xl border border-base-300/60 w-40"
      >
        {languages.map((l) => (
          <li key={l.code}>
            <button
              onClick={() => choose(l.code)}
              className={`flex items-center gap-2 rounded-xl ${
                lang === l.code ? "bg-accent/15 font-semibold" : ""
              }`}
            >
              <span className="text-xs opacity-50 w-6">{l.short}</span>
              <span className="flex-1 text-left">{l.label}</span>
              {lang === l.code && <Check className="w-4 h-4 text-accent" />}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const sectionIds = [
  "Home",
  "About",
  "Education",
  "Competences",
  "Projects",
  "Experience",
  "Contact",
] as const;

const getInitialTheme = (): Theme => {
  const stored = window.localStorage.getItem(THEME_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return (document.documentElement.getAttribute("data-theme") as Theme) || "light";
};

const Navbar = () => {
  const { t } = useLanguage();
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [active, setActive] = useState<string>("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLabels: Record<(typeof sectionIds)[number], string> = {
    Home: t.nav.home,
    About: t.nav.about,
    Education: t.nav.education,
    Competences: t.nav.skills,
    Projects: t.nav.projects,
    Experience: t.nav.experience,
    Contact: t.nav.contact,
  };

  // Apply + persist theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  // Active link based on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const scrollPosition = window.scrollY + 120;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    if (location.pathname !== "/") {
      setMenuOpen(false);
      navigate("/", { state: { scrollTo: id } });
      return;
    }
    setMenuOpen(false);
    scrollToSection(id);
  };

  // The scroll-away compact pill only makes sense on the homepage; on case
  // study pages keep the full navbar visible at all times.
  const showCompact = scrolled && location.pathname === "/";

  return (
    <header className="sticky top-0 z-40">
      <div className="page-inner">
      <div className="relative">
      <div
        className={`navbar bg-base-100/80 backdrop-blur-xl border border-base-300/60 rounded-2xl px-4 md:px-6 shadow-sm transition-all duration-300 ${
          showCompact
            ? "opacity-0 -translate-y-1 pointer-events-none"
            : "opacity-100"
        }`}
      >
        <div className="flex-1">
          <button
            onClick={() => handleNavClick("Home")}
            className="flex items-center gap-2 font-display font-bold text-2xl md:text-3xl tracking-tight hover:opacity-90 transition-opacity"
          >
            <Pi className="w-7 h-7 text-accent" />
            <span className="hidden sm:inline">MARIN</span>
            <span className="text-accent">WEIS</span>
          </button>
        </div>

        <div className="hidden md:flex items-center gap-1">
          <ul className="menu menu-horizontal gap-1 px-1 text-sm">
            {sectionIds.map((id) => (
              <li key={id}>
                <button
                  onClick={() => handleNavClick(id)}
                  className={`btn btn-ghost btn-sm rounded-full px-3 transition-all duration-200 ${
                    active === id
                      ? "bg-accent text-accent-content shadow-md"
                      : "hover:bg-base-200/80"
                  }`}
                >
                  {navLabels[id]}
                </button>
              </li>
            ))}
          </ul>

          <div className="ml-1">
            <LanguageDropdown />
          </div>

          <button
            onClick={toggleTheme}
            className="btn btn-ghost btn-circle btn-sm"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-1">
          <LanguageDropdown />
          <button
            onClick={toggleTheme}
            className="btn btn-ghost btn-circle btn-sm"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>
          <button
            className="btn btn-ghost btn-circle btn-sm"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <List className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Discreet compact navbar — fades in once the main one scrolls away */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
          showCompact
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-1 pointer-events-none"
        }`}
      >
        {/* Desktop: slim pill of links — discreet by its size, crisp on hover */}
        <nav className="hidden md:flex items-center gap-0.5 rounded-full bg-base-100/80 backdrop-blur-md border border-base-300/50 px-2 py-1 shadow-md opacity-90 hover:opacity-100 hover:bg-base-100/95 transition-all duration-200">
          {sectionIds.map((id) => (
            <button
              key={id}
              onClick={() => handleNavClick(id)}
              className={`btn btn-ghost btn-xs rounded-full px-2.5 transition-all duration-200 ${
                active === id
                  ? "bg-accent text-accent-content"
                  : "hover:bg-base-200/70"
              }`}
            >
              {navLabels[id]}
            </button>
          ))}
          <span className="mx-1 h-4 w-px bg-base-300/60" />
          <LanguageDropdown />
          <button
            onClick={toggleTheme}
            className="btn btn-ghost btn-circle btn-xs"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-3.5 h-3.5" />
            ) : (
              <Moon className="w-3.5 h-3.5" />
            )}
          </button>
        </nav>

        {/* Mobile: minimal pill with brand + theme + menu */}
        <nav className="flex md:hidden items-center gap-0.5 rounded-full bg-base-100/85 backdrop-blur-md border border-base-300/50 px-2 py-1 shadow-md">
          <button
            onClick={() => handleNavClick("Home")}
            className="btn btn-ghost btn-xs gap-1 font-display font-bold"
            aria-label="Home"
          >
            <Pi className="w-4 h-4 text-accent" />
            <span className="text-accent">WEIS</span>
          </button>
          <button
            onClick={toggleTheme}
            className="btn btn-ghost btn-circle btn-xs"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-3.5 h-3.5" />
            ) : (
              <Moon className="w-3.5 h-3.5" />
            )}
          </button>
          <button
            className="btn btn-ghost btn-circle btn-xs"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <List className="w-4 h-4" />
          </button>
        </nav>
      </div>
      </div>

      {menuOpen && (
        <div className="mt-2 p-3 rounded-2xl bg-base-100/95 backdrop-blur-xl border border-base-300/60 shadow-xl md:hidden fade-in-up">
          <ul className="flex flex-col gap-1">
            {sectionIds.map((id) => (
              <li key={id}>
                <button
                  onClick={() => handleNavClick(id)}
                  className={`btn btn-ghost btn-sm w-full justify-start rounded-xl ${
                    active === id ? "bg-accent text-accent-content" : ""
                  }`}
                >
                  {navLabels[id]}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      </div>
    </header>
  );
};

export default Navbar;
