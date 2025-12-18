import { useEffect, useState } from "react";
import { Pi, Moon, Sun, List } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

type Theme = string;

const sections = [
  { id: "Home", label: "Home" },
  { id: "About", label: "About" },
  { id: "Education", label: "Education" },
  { id: "Projects", label: "Projects" },
  { id: "Experience", label: "Experiences" },
  { id: "Contact", label: "Contact" },
];

const Navbar = () => {
  const [theme, setTheme] = useState<Theme>("cupcake" as Theme);
  const [active, setActive] = useState<string>("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Sync theme with <html data-theme>
  useEffect(() => {
    const html = document.documentElement;
    const current = (html.getAttribute("data-theme") as Theme) || "cupcake";
    setTheme(current);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "cupcake" : "dark";
    setTheme(next as Theme);
    document.documentElement.setAttribute("data-theme", next);
  };

  // Active link based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (!el) continue;
        const top = el.offsetTop;
        const height = el.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActive(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    // Si on n'est pas sur la page principale, on navigue d'abord vers "/" avec l'info de la section
    if (location.pathname !== "/") {
      setMenuOpen(false);
      navigate("/", { state: { scrollTo: id } });
      return;
    }

    const el = document.getElementById(id);
    if (!el) return;
    setMenuOpen(false);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="sticky top-0 z-40">
      <div className="navbar bg-base-100/80 backdrop-blur-xl border border-base-300/60 rounded-2xl mt-4 px-4 md:px-6 shadow-sm">
        <div className="flex-1">
          <button
            onClick={() => handleNavClick("Home")}
            className="flex items-center gap-2 font-bold text-2xl md:text-3xl tracking-tight hover:opacity-90 transition-opacity"
          >
            <Pi className="w-7 h-7" />
            <span className="hidden sm:inline">MARIN</span>
            <span className="text-accent">WEIS</span>
          </button>
        </div>

        <div className="hidden md:flex items-center gap-1">
          <ul className="menu menu-horizontal gap-1 px-1 text-sm">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => handleNavClick(section.id)}
                  className={`btn btn-ghost btn-sm rounded-full px-3 transition-all duration-200 ${
                    active === section.id
                      ? "bg-accent text-accent-content shadow-md"
                      : "hover:bg-base-200/80"
                  }`}
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={toggleTheme}
            className="btn btn-ghost btn-circle btn-sm ml-1"
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
        <div className="flex md:hidden items-center gap-2">
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

      {menuOpen && (
        <div className="mt-2 p-3 rounded-2xl bg-base-100/95 backdrop-blur-xl border border-base-300/60 shadow-xl md:hidden fade-in-up">
          <ul className="flex flex-col gap-1">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => handleNavClick(section.id)}
                  className={`btn btn-ghost btn-sm w-full justify-start rounded-xl ${
                    active === section.id ? "bg-accent text-accent-content" : ""
                  }`}
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;