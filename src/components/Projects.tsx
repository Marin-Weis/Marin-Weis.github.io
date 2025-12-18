import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Title from "./Title";

import secouriste from "../assets/projects/secouriste.png";
import dual from "../assets/projects/Dual.png";

import github from "../assets/icons/github.png";
import youtube from "../assets/icons/youtube.png";

type ProjectCategory = "web" | "mobile";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  demolink: string;
  repolink: string;
  image: string;
  category: ProjectCategory;
}

const projects: Project[] = [
  {
    id: 1,
    title: "First Aid Application",
    description:
      "A mobile application for managing rescue workers and their assignments. Rescuers can register, declare their certifications (PSE1, PSE2, SSA, etc.), and consult their deployments, while administrators manage competencies and automatically assign missions based on skills and availability.",
    technologies: ["Java", "SQL", "DHCP", "DNS"],
    demolink: "https://www.youtube.com/watch?v=h1l--gwkGtM",
    repolink: "https://github.com/Marin-Weis/PROJECT-First-aid-application",
    image: secouriste,
    category: "mobile",
  },
  {
    id: 2,
    title: "Dual Application",
    description:
      "An Android application designed to support PE teachers during biathlon evaluation sessions. Developed in collaboration with the IUT de Vannes and Collège Notre-Dame-La-Blanche, the app works fully offline and manages student performance in real time.",
    technologies: ["Java", "Kotlin"],
    demolink: "#Projects",
    repolink: "https://github.com/Marin-Weis/Dual-projectBiathlon",
    image: dual,
    category: "mobile",
  },
];

const filterOptions: { label: string; value: ProjectCategory | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Web", value: "web" },
  { label: "Mobile", value: "mobile" },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | "all">(
    "all"
  );

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="space-y-6 fade-in-up">
      <Title title="Projects" />

      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs md:text-sm text-base-content/80 max-w-xl">
          A selection of my recent academic and personal projects. Filter by
          type to explore web or mobile work.
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

      <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-4">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className="glass-card overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-2xl transition-transform duration-200 group"
          >
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover md:h-64 transition-transform duration-300 group-hover:scale-105"
              />
              <span className="badge badge-accent badge-sm absolute left-4 top-4">
                {project.category === "web" ? "Web app" : "Mobile app"}
              </span>
            </div>

            <div className="p-5 flex flex-col flex-1 gap-3">
              <div>
                <h2 className="font-semibold text-lg mb-1">{project.title}</h2>
                <p className="text-xs md:text-sm text-base-content/80">
                  {project.description}
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

              <div className="mt-3 flex flex-wrap gap-3">
                <a
                  href={project.demolink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm md:btn-md gap-2"
                >
                  <span>Demo</span>
                  <img src={youtube} alt="YouTube" className="w-4 h-4" />
                </a>
                <a
                  href={project.repolink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost btn-sm md:btn-md gap-2"
                >
                  <span>Code</span>
                  <img src={github} alt="GitHub" className="w-4 h-4" />
                </a>
                {project.id === 1 && (
                  <Link
                    to="/first-aid"
                    className="btn btn-ghost btn-sm md:btn-md"
                  >
                    Case study
                  </Link>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Projects;