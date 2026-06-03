import Title from "./Title";
import { useLanguage } from "../i18n/language";
import { Check, Layout, Server, Database, FileJson } from "lucide-react";

import cover from "../assets/projects/Mongolingo/mongolingo-cover.webp";
import shot1 from "../assets/projects/Mongolingo/mongolingo-1.webp";
import shot2 from "../assets/projects/Mongolingo/mongolingo-2.webp";
import shot3 from "../assets/projects/Mongolingo/mongolingo-3.webp";
import shot4 from "../assets/projects/Mongolingo/mongolingo-4.webp";
import shot5 from "../assets/projects/Mongolingo/mongolingo-5.webp";
import shot6 from "../assets/projects/Mongolingo/mongolingo-6.webp";
import collections from "../assets/projects/Mongolingo/mongolingo-collections.webp";

const archIcons = [
  <Layout className="w-4 h-4" />,
  <Server className="w-4 h-4" />,
  <Database className="w-4 h-4" />,
  <FileJson className="w-4 h-4" />,
];

const gallery = [shot1, shot2, shot3, shot4, shot5, shot6];

const MongolingoCaseStudy = () => {
  const { t } = useLanguage();
  const m = t.mongolingo;

  return (
    <div className="space-y-10" id="Mongolingo">
      <Title title={m.title} />

      {/* Hero / Intro */}
      <section className="grid lg:grid-cols-[1.05fr,0.95fr] gap-8 items-start">
        <div className="space-y-4">
          <span className="badge badge-accent badge-sm">{m.badge}</span>
          <h2 className="font-display text-xl md:text-2xl font-semibold">
            {m.heading}
          </h2>
          <p className="text-sm md:text-base text-base-content/80">{m.intro}</p>

          <div className="glass-card-soft p-4 md:p-5 grid sm:grid-cols-3 gap-4 text-xs md:text-sm">
            <div>
              <p className="text-xs uppercase tracking-wide text-base-content/60">
                {m.meta.roleLabel}
              </p>
              <p className="font-medium">{m.meta.role}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-base-content/60">
                {m.meta.stackLabel}
              </p>
              <p className="font-medium">{m.meta.stack}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-base-content/60">
                {m.meta.focusLabel}
              </p>
              <p className="font-medium">{m.meta.focus}</p>
            </div>
          </div>
        </div>

        <div className="glass-card relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 via-primary/10 to-secondary/20 pointer-events-none" />
          <div className="p-3 md:p-4">
            <img
              src={cover}
              alt="Mongolingo"
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Context */}
      <section className="glass-card-soft p-5 md:p-7">
        <h3 className="font-display text-lg md:text-xl font-semibold mb-2">
          {m.context.title}
        </h3>
        <p className="text-sm md:text-base text-base-content/80 max-w-3xl">
          {m.context.text}
        </p>
      </section>

      {/* Architecture */}
      <section className="space-y-4">
        <div className="max-w-2xl">
          <h3 className="font-display text-lg md:text-xl font-semibold mb-1">
            {m.architecture.title}
          </h3>
          <p className="text-sm md:text-base text-base-content/80">
            {m.architecture.text}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {m.architecture.points.map((point, i) => (
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
        {m.features.map((feature) => (
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

      {/* Gallery */}
      <section className="space-y-4">
        <h3 className="font-display text-base md:text-lg font-semibold">
          {m.galleryTitle}
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {gallery.map((src, i) => (
            <div
              key={i}
              className="glass-card bg-base-200/70 flex items-center justify-center p-3"
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                className="max-h-60 w-auto object-contain rounded-lg"
              />
            </div>
          ))}
        </div>
        <div className="glass-card bg-base-200/70 flex items-center justify-center p-3 md:p-4">
          <img
            src={collections}
            alt=""
            loading="lazy"
            className="max-h-[34rem] w-auto object-contain rounded-lg"
          />
        </div>
      </section>

      {/* Takeaway */}
      <section className="glass-card-soft p-5 md:p-7 space-y-2 text-sm md:text-base text-base-content/80">
        <p>{m.takeaway.p1}</p>
        <p>{m.takeaway.p2}</p>
      </section>
    </div>
  );
};

export default MongolingoCaseStudy;
