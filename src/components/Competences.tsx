import { useState, type ReactNode } from "react";
import {
  Code2,
  Gauge,
  Server,
  Database,
  Compass,
  Users,
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";
import Title from "./Title";
import { useLanguage } from "../i18n/language";

type CompKey =
  | "realiser"
  | "optimiser"
  | "administrer"
  | "gerer"
  | "conduire"
  | "collaborer";
type Year = "but1" | "but2";

const N = "https://weis-marin.notion.site/";

const competences: {
  key: CompKey;
  icon: ReactNode;
  but1: string;
  but2: string;
}[] = [
  {
    key: "realiser",
    icon: <Code2 className="w-5 h-5" />,
    but1: N + "12906e88014681948abdd1cc53661ca8",
    but2: N + "74206e88014683718bf28194b1ab3773",
  },
  {
    key: "optimiser",
    icon: <Gauge className="w-5 h-5" />,
    but1: N + "12906e88014681a1ac1fed56c624a65d",
    but2: N + "99706e88014682b8bf73816527646ffb",
  },
  {
    key: "administrer",
    icon: <Server className="w-5 h-5" />,
    but1: N + "12906e880146812391a7f4d6ead892e9",
    but2: N + "d4806e8801468309a4f68137fd7b3f60",
  },
  {
    key: "gerer",
    icon: <Database className="w-5 h-5" />,
    but1: N + "12906e880146810cbe16eabc300878a1",
    but2: N + "09006e880146824d904081ec667df649",
  },
  {
    key: "conduire",
    icon: <Compass className="w-5 h-5" />,
    but1: N + "12906e880146816d863ae8875823202f",
    but2: N + "7fe06e88014683ca86480145b59737fe",
  },
  {
    key: "collaborer",
    icon: <Users className="w-5 h-5" />,
    but1: N + "12906e88014681e09644cf04eaa8344e",
    but2: N + "4c906e8801468367a0e601de70fcdb00",
  },
];

const overview: Record<Year, string> = {
  but1: N + "12906e88014681d4b8a9d3125f536eac",
  but2: N + "36e06e88014680c99957c4a84e1b7fd7",
};

const Competences = () => {
  const { t } = useLanguage();
  const [year, setYear] = useState<Year>("but2");

  const years: { value: Year; label: string }[] = [
    { value: "but1", label: t.skills.but1 },
    { value: "but2", label: t.skills.but2 },
  ];

  return (
    <div className="space-y-6 fade-in-up">
      <Title title={t.skills.title} />

      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs md:text-sm text-base-content/80 max-w-xl">
          {t.skills.intro}
        </p>

        <div className="inline-flex gap-2 rounded-full bg-base-200/70 p-1 border border-base-300/70">
          {years.map((y) => (
            <button
              key={y.value}
              onClick={() => setYear(y.value)}
              className={`btn btn-ghost btn-xs md:btn-sm rounded-full px-4 transition-all duration-150 ${
                year === y.value
                  ? "bg-accent text-accent-content shadow-sm"
                  : "hover:bg-base-100/80"
              }`}
            >
              {y.label}
            </button>
          ))}
        </div>
      </div>

      <div
        key={year}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 items-stretch"
      >
        {competences.map((comp, index) => {
          const item = t.skills.items[comp.key];
          return (
            <div
              key={comp.key}
              className="skill-card-in"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <a
                href={comp[year]}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card-soft h-full p-5 flex flex-col gap-3 hover:-translate-y-1 hover:shadow-xl transition-transform duration-200 group"
              >
                <div className="flex items-center justify-between">
                  <div className="btn btn-circle btn-sm btn-ghost border border-base-300/70 text-accent pointer-events-none">
                    {comp.icon}
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-base-content/40 group-hover:text-accent transition-colors" />
                </div>
                <div>
                  <h3 className="font-semibold text-base md:text-lg">
                    {item.name}
                  </h3>
                  <p className="text-xs md:text-sm text-base-content/80 mt-1">
                    {item.desc}
                  </p>
                </div>
                <span className="text-xs font-medium text-accent inline-flex items-center gap-1 mt-auto">
                  {t.skills.viewOnNotion}
                  <ExternalLink className="w-3 h-3" />
                </span>
              </a>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center pt-2">
        <a
          href={overview[year]}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline btn-sm md:btn-md gap-2 hover:border-primary hover:bg-primary hover:text-primary-content"
        >
          {t.skills.fullPortfolio} — {year === "but1" ? t.skills.but1 : t.skills.but2}
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default Competences;
