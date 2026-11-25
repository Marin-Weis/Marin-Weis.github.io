import Title from "./Title";
import { useLanguage } from "../i18n/language";
import {
  Check,
  ShieldCheck,
  Database,
  Server,
  FileCode2,
  Github,
} from "lucide-react";

import cover from "../assets/projects/Incident Tracker/incident-tracker-swagger.webp";

const REPO_URL = "https://github.com/Marin-Weis/incident-tracker-api";

const archIcons = [
  <Server className="w-4 h-4" />,
  <ShieldCheck className="w-4 h-4" />,
  <Database className="w-4 h-4" />,
  <FileCode2 className="w-4 h-4" />,
];

const IncidentTrackerCaseStudy = () => {
  const { t } = useLanguage();
  const item = t.incidentTracker;

  return (
    <div className="space-y-10" id="IncidentTracker">
      <Title title={item.title} />

      {/* Hero / Intro */}
      <section className="grid lg:grid-cols-[1.05fr,0.95fr] gap-8 items-start">
        <div className="space-y-4">
          <span className="badge badge-accent badge-sm">{item.badge}</span>
          <h2 className="font-display text-xl md:text-2xl font-semibold">
            {item.heading}
          </h2>
          <p className="text-sm md:text-base text-base-content/80">
            {item.intro}
          </p>

          <div className="glass-card-soft p-4 md:p-5 grid sm:grid-cols-3 gap-4 text-xs md:text-sm">
            <div>
              <p className="text-xs uppercase tracking-wide text-base-content/60">
                {item.meta.roleLabel}
              </p>
              <p className="font-medium">{item.meta.role}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-base-content/60">
                {item.meta.stackLabel}
              </p>
              <p className="font-medium">{item.meta.stack}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-base-content/60">
                {item.meta.focusLabel}
              </p>
              <p className="font-medium">{item.meta.focus}</p>
            </div>
          </div>

          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-accent btn-sm gap-2"
          >
            <Github className="w-4 h-4" />
            {item.repoButton}
          </a>
        </div>

        <div className="glass-card relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 via-primary/10 to-secondary/20 pointer-events-none" />
          <div className="p-3 md:p-4">
            <img
              src={cover}
              alt={item.coverAlt}
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Context */}
      <section className="glass-card-soft p-5 md:p-7">
        <h3 className="font-display text-lg md:text-xl font-semibold mb-2">
          {item.context.title}
        </h3>
        <p className="text-sm md:text-base text-base-content/80 max-w-3xl">
          {item.context.text}
        </p>
      </section>

      {/* Architecture */}
      <section className="space-y-4">
        <div className="max-w-2xl">
          <h3 className="font-display text-lg md:text-xl font-semibold mb-1">
            {item.architecture.title}
          </h3>
          <p className="text-sm md:text-base text-base-content/80">
            {item.architecture.text}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {item.architecture.points.map((point, i) => (
            <div key={point.label} className="glass-card p-4 flex flex-col gap-2">
              <div className="btn btn-circle btn-sm btn-ghost border border-base-300/70 text-accent pointer-events-none">
                {archIcons[i]}
              </div>
              <p className="text-xs uppercase tracking-wide text-base-content/60">
                {point.label}
              </p>
              <p className="text-sm font-medium leading-snug">{point.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="grid sm:grid-cols-2 gap-6">
        {item.features.map((feature) => (
          <div key={feature.title} className="glass-card-soft p-4 md:p-5">
            <h3 className="font-semibold text-base md:text-lg mb-2">
              {feature.title}
            </h3>
            <p className="text-xs md:text-sm text-base-content/80 mb-3">
              {feature.text}
            </p>
            <ul className="text-xs md:text-sm text-base-content/80 space-y-1.5">
              {feature.items.map((it) => (
                <li key={it} className="flex gap-2">
                  <Check className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Takeaway */}
      <section className="glass-card-soft p-5 md:p-7 space-y-2 text-sm md:text-base text-base-content/80">
        <p>{item.takeaway.p1}</p>
        <p>{item.takeaway.p2}</p>
      </section>
    </div>
  );
};

export default IncidentTrackerCaseStudy;
