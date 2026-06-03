import { useMemo, useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import Title from "./Title";
import { useLanguage } from "../i18n/language";

import secouriste from "../assets/projects/Secouriste.webp";
import dual from "../assets/projects/Dual.webp";
import askCombakCover from "../assets/projects/Ask Combak/askcombak-cover.webp";
import mongolingoCover from "../assets/projects/Mongolingo/mongolingo-cover.webp";

import github from "../assets/icons/github.png";
import youtube from "../assets/icons/youtube.png";

type ProjectCategory = "web" | "mobile";
type ProjectKey = "firstAid" | "dual" | "askCombak" | "mongolingo";

interface Project {
  key: ProjectKey;
  technologies: string[];
  demolink?: string;
  repolink?: string;
  image: string;
  category: ProjectCategory;
  caseStudyPath?: string;
}

const projects: Project[] = [
  {
    key: "askCombak",
    technologies: ["Next.js", "React", "TypeScript", "MongoDB", "Claude"],
    demolink: "https://www.combak.co/ask",
    image: askCombakCover,
    category: "web",
    caseStudyPath: "/ask-combak",
  },
  {
    key: "dual",
    technologies: ["Kotlin", "Jetpack Compose", "Ktor", "SQLite"],
    repolink: "https://github.com/Marin-Weis/Dual-projectBiathlon",
    image: dual,
    category: "mobile",
    caseStudyPath: "/dual",
  },
  {
    key: "mongolingo",
    technologies: ["React", "Vite", "Node", "Express", "MongoDB"],
    demolink: "https://youtu.be/CKsS4sp4e6w",
    repolink: "https://github.com/Marin-Weis/mongolingo",
    image: mongolingoCover,
    category: "web",
    caseStudyPath: "/mongolingo",
  },
  {
    key: "firstAid",
    technologies: ["Java", "SQL", "DHCP", "DNS"],
    demolink: "https://www.youtube.com/watch?v=h1l--gwkGtM",
    repolink: "https://github.com/Marin-Weis/PROJECT-First-aid-application",
    image: secouriste,
    category: "mobile",
    caseStudyPath: "/first-aid",
  },
];

const Projects = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | "all">(
    "all"
  );

  const filterOptions: { label: string; value: ProjectCategory | "all" }[] = [
    { label: t.projects.filters.all, value: "all" },
    { label: t.projects.filters.web, value: "web" },
    { label: t.projects.filters.mobile, value: "mobile" },
  ];

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  // Build a seamless marquee loop: repeat the (filtered) list until it's wide
  // enough to overflow the container, then duplicate it for the -50% loop.
  const marqueeItems = useMemo(() => {
    if (filteredProjects.length === 0) return [];
    const base = [...filteredProjects];
    while (base.length < 4) base.push(...filteredProjects);
    return [...base, ...base];
  }, [filteredProjects]);
  const half = marqueeItems.length / 2;

  return (
    <div className="space-y-6 fade-in-up">
      <Title title={t.projects.title} />

      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs md:text-sm text-base-content/80 max-w-xl">
          {t.projects.intro}
        </p>

        <div className="inline-flex gap-2 rounded-full bg-base-200/70 p-1 border border-base-300/70">
          {filterOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setActiveFilter(option.value)}
              className={`btn btn-ghost btn-xs md:btn-sm rounded-full px-3 md:px-4 transition-all duration-150 ${
                activeFilter === option.value
                  ? "bg-accent text-accent-content shadow-sm"
                  : "hover:bg-base-100/80"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div className="marquee -mx-4 sm:-mx-6 lg:-mx-8">
        <div
          key={activeFilter}
          className="marquee__track gap-6 md:gap-8 px-4 sm:px-6 lg:px-8 py-2"
          style={{ "--marquee-duration": "44s" } as CSSProperties}
        >
          {marqueeItems.map((project, index) => {
            const item = t.projects.items[project.key];
            const isClone = index >= half;
            return (
              <article
                key={index}
                aria-hidden={isClone}
                className="glass-card w-80 shrink-0 overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-2xl transition-transform duration-200 group"
              >
                <div className="relative overflow-hidden bg-base-200/40 aspect-[7/5]">
                  <img
                    src={project.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <span className="badge badge-accent badge-sm absolute left-4 top-4">
                    {project.category === "web"
                      ? t.projects.badges.web
                      : t.projects.badges.mobile}
                  </span>
                </div>

                <div className="p-5 flex flex-col flex-1 gap-3">
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-xs md:text-sm text-base-content/80">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="badge badge-outline badge-xs md:badge-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-2 flex flex-wrap gap-2">
                    {project.caseStudyPath && (
                      <Link
                        to={project.caseStudyPath}
                        tabIndex={isClone ? -1 : 0}
                        className="btn btn-accent btn-sm"
                      >
                        {t.projects.buttons.caseStudy}
                      </Link>
                    )}
                    {project.demolink && (
                      <a
                        href={project.demolink}
                        target="_blank"
                        rel="noopener noreferrer"
                        tabIndex={isClone ? -1 : 0}
                        className="btn btn-outline btn-sm gap-2"
                      >
                        <span>{t.projects.buttons.demo}</span>
                        {project.demolink.includes("youtu") ? (
                          <img src={youtube} alt="" className="w-4 h-4" />
                        ) : (
                          <ExternalLink className="w-4 h-4" />
                        )}
                      </a>
                    )}
                    {project.repolink && (
                      <a
                        href={project.repolink}
                        target="_blank"
                        rel="noopener noreferrer"
                        tabIndex={isClone ? -1 : 0}
                        className="btn btn-ghost btn-sm gap-2"
                      >
                        <span>{t.projects.buttons.code}</span>
                        <img src={github} alt="" className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
