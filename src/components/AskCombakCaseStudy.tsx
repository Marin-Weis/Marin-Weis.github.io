import Title from "./Title";
import { useLanguage } from "../i18n/language";
import { Check, Layout, Webhook, Sparkles, Database } from "lucide-react";

import logo from "../assets/projects/Ask Combak/askcombak-logo.webp";
import welcome from "../assets/projects/Ask Combak/askcombak-welcome.webp";
import chat from "../assets/projects/Ask Combak/askcombak-chat.webp";
import reco from "../assets/projects/Ask Combak/askcombak-reco.webp";
import site from "../assets/projects/Ask Combak/askcombak-site.webp";
import suggestions from "../assets/projects/Ask Combak/askcombak-suggestions.webp";
import lists from "../assets/projects/Ask Combak/askcombak-lists.webp";
import mobile from "../assets/projects/Ask Combak/askcombak-mobile.webp";

const archIcons = [
  <Layout className="w-4 h-4" />,
  <Webhook className="w-4 h-4" />,
  <Sparkles className="w-4 h-4" />,
  <Database className="w-4 h-4" />,
];

const AskCombakCaseStudy = () => {
  const { t } = useLanguage();
  const a = t.askCombak;

  const heroShots = [welcome, reco];
  const screens = [
    { src: site, wide: true, ...a.screens.site },
    { src: chat, wide: true, ...a.screens.chat },
    { src: reco, wide: true, ...a.screens.reco },
    { src: suggestions, wide: true, ...a.screens.suggestions },
    { src: lists, wide: true, ...a.screens.lists },
    { src: mobile, wide: false, ...a.screens.mobile },
  ];

  return (
    <div className="space-y-10" id="AskCombak">
      <Title title={a.title} />

      {/* Hero / Intro */}
      <section className="grid lg:grid-cols-[1.05fr,0.95fr] gap-8 items-start">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Ask Combak"
              className="w-10 h-10 rounded-xl border border-base-300/60"
            />
            <span className="badge badge-accent badge-sm">{a.badge}</span>
          </div>
          <h2 className="font-display text-xl md:text-2xl font-semibold">
            {a.heading}
          </h2>
          <p className="text-sm md:text-base text-base-content/80">{a.intro}</p>

          <div className="glass-card-soft p-4 md:p-5 grid sm:grid-cols-3 gap-4 text-xs md:text-sm">
            <div>
              <p className="text-xs uppercase tracking-wide text-base-content/60">
                {a.meta.roleLabel}
              </p>
              <p className="font-medium">{a.meta.role}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-base-content/60">
                {a.meta.stackLabel}
              </p>
              <p className="font-medium">{a.meta.stack}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-base-content/60">
                {a.meta.focusLabel}
              </p>
              <p className="font-medium">{a.meta.focus}</p>
            </div>
          </div>
        </div>

        <div className="glass-card relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 via-primary/10 to-secondary/20 pointer-events-none" />
          <div className="flex flex-col gap-2 p-3 md:p-4">
            {heroShots.map((src, i) => (
              <div
                key={i}
                className="bg-base-200/70 rounded-xl border border-base-300/60 overflow-hidden"
              >
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Context */}
      <section className="glass-card-soft p-5 md:p-7">
        <h3 className="font-display text-lg md:text-xl font-semibold mb-2">
          {a.context.title}
        </h3>
        <p className="text-sm md:text-base text-base-content/80 max-w-3xl">
          {a.context.text}
        </p>
      </section>

      {/* Architecture */}
      <section className="space-y-4">
        <div className="max-w-2xl">
          <h3 className="font-display text-lg md:text-xl font-semibold mb-1">
            {a.architecture.title}
          </h3>
          <p className="text-sm md:text-base text-base-content/80">
            {a.architecture.text}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {a.architecture.points.map((point, i) => (
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
      <section className="grid md:grid-cols-3 gap-6">
        {a.features.map((feature) => (
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
          {a.galleryTitle}
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {screens.map((screen) => (
            <div
              key={screen.title}
              className={`glass-card flex flex-col ${
                screen.wide ? "" : "sm:col-span-1"
              }`}
            >
              <div className="bg-base-200/70 flex items-center justify-center p-3 overflow-hidden">
                <img
                  src={screen.src}
                  alt={screen.title}
                  loading="lazy"
                  className={`w-auto object-contain rounded-lg ${
                    screen.wide ? "max-h-72" : "max-h-80"
                  }`}
                />
              </div>
              <div className="p-3 md:p-4 text-xs md:text-sm">
                <p className="font-medium mb-1">{screen.title}</p>
                <p className="text-base-content/80">{screen.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Takeaway */}
      <section className="glass-card-soft p-5 md:p-7 space-y-2 text-sm md:text-base text-base-content/80">
        <p>{a.takeaway.p1}</p>
        <p>{a.takeaway.p2}</p>
      </section>
    </div>
  );
};

export default AskCombakCaseStudy;
