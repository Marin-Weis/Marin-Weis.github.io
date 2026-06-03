import { useState } from "react";
import {
  Briefcase,
  LifeBuoy,
  ShoppingCart,
  Waves,
  Code2,
  ChevronDown,
  Globe,
} from "lucide-react";
import Title from "./Title";
import { useLanguage } from "../i18n/language";
import linkedinIcon from "../assets/icons/linkedin.webp";

// Icons map to the work items in their original (chronological) order.
const typeIcons = [
  <Waves className="w-5 h-5" />,
  <ShoppingCart className="w-5 h-5" />,
  <LifeBuoy className="w-5 h-5" />,
  <Code2 className="w-5 h-5" />,
];

// Company links, in the same original (chronological) order as the items.
const companyLinks: { linkedin?: string; website?: string }[] = [
  {}, // Oyster farmer
  {}, // Stock clerk (Leclerc)
  {
    linkedin: "https://www.linkedin.com/company/aquamalo/",
    website: "https://www.aquamalo.com/",
  }, // Lifeguard (Aquamalo)
  {
    linkedin: "https://www.linkedin.com/company/combak-co/",
    website: "https://www.combak.co/",
  }, // Combak internship
];

const VISIBLE_COUNT = 3;

const WorkExperiences = () => {
  const { t } = useLanguage();
  const [showAll, setShowAll] = useState(false);

  // Pair each item with its icon, then show most recent first.
  const ordered = t.work.items
    .map((exp, i) => ({ ...exp, icon: typeIcons[i], links: companyLinks[i] }))
    .reverse();

  const visible = showAll ? ordered : ordered.slice(0, VISIBLE_COUNT);
  const hasMore = ordered.length > VISIBLE_COUNT;

  return (
    <div className="space-y-8 fade-in-up">
      <Title title={t.work.title} />

      <div className="grid md:grid-cols-[1.2fr,0.8fr] gap-8">
        <div className="space-y-4">
          {visible.map((exp, index) => (
            <article
              key={exp.company + exp.period}
              className="glass-card relative overflow-hidden px-5 py-4 md:px-6 md:py-5 hover:-translate-y-1 hover:shadow-2xl transition-transform duration-200"
            >
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-accent to-primary/70" />

              <div className="flex items-start gap-4">
                <div className="btn btn-circle btn-sm btn-ghost border border-base-300/70 text-accent mt-1">
                  {exp.icon ?? <Briefcase className="w-5 h-5" />}
                </div>
                <div>
                  <h3 className="font-semibold text-base md:text-lg">
                    {exp.role}
                  </h3>
                  <p className="text-xs md:text-sm text-base-content/80 font-medium">
                    {exp.company}
                  </p>
                  <p className="text-xs text-base-content/70 mt-1">
                    {exp.period}
                  </p>
                  {(exp.links?.linkedin || exp.links?.website) && (
                    <div className="flex items-center gap-1 mt-2">
                      {exp.links?.linkedin && (
                        <a
                          href={exp.links.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${exp.company} · LinkedIn`}
                          className="btn btn-ghost btn-circle btn-xs hover:scale-110 transition-transform"
                        >
                          <img
                            src={linkedinIcon}
                            alt="LinkedIn"
                            className="w-4 h-4"
                          />
                        </a>
                      )}
                      {exp.links?.website && (
                        <a
                          href={exp.links.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${exp.company} · ${exp.links.website}`}
                          className="btn btn-ghost btn-circle btn-xs text-base-content/60 hover:text-accent hover:scale-110 transition-transform"
                        >
                          <Globe className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>

              <ul className="mt-3 space-y-1.5 text-xs md:text-sm text-base-content/80">
                {exp.tasks.map((task) => (
                  <li key={task} className="flex gap-2">
                    <span className="mt-[6px] h-[3px] w-[3px] rounded-full bg-accent" />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>

              <span className="badge badge-ghost badge-xs absolute right-4 top-4">
                {index === 0 ? t.work.badges.recent : t.work.badges.past}
              </span>
            </article>
          ))}

          {hasMore && (
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="btn btn-ghost btn-sm rounded-full gap-1 mx-auto flex"
            >
              <span>{showAll ? t.work.seeLess : t.work.seeMore}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  showAll ? "rotate-180" : ""
                }`}
              />
            </button>
          )}
        </div>

        <aside className="glass-card-soft p-5 md:p-6 space-y-3 text-xs md:text-sm text-base-content/80">
          <h3 className="font-semibold text-base md:text-lg flex items-center gap-2">
            <Briefcase className="w-4 h-4" />
            {t.work.aside.title}
          </h3>
          <p>{t.work.aside.p1}</p>
          <p>{t.work.aside.p2}</p>
        </aside>
      </div>
    </div>
  );
};

export default WorkExperiences;
