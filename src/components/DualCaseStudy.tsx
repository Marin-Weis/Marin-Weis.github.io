import Title from "./Title";
import { useLanguage } from "../i18n/language";
import { Check, Wifi, Server, Radio, Database, Globe } from "lucide-react";

import githubIcon from "../assets/icons/github.png";
import linkedinIcon from "../assets/icons/linkedin.webp";

import photoMarin from "../assets/projects/Dual Application/team-marin.webp";
import photoMatthieu from "../assets/projects/Dual Application/team-matthieu.webp";
import photoNolann from "../assets/projects/Dual Application/team-nolann.webp";
import photoGlen from "../assets/projects/Dual Application/team-glen.webp";
import photoLucien from "../assets/projects/Dual Application/team-lucien.webp";

import home from "../assets/projects/Dual Application/dual-home.webp";
import sessionType from "../assets/projects/Dual Application/dual-session-type.webp";
import qr from "../assets/projects/Dual Application/dual-qr.webp";
import leaderboard from "../assets/projects/Dual Application/dual-leaderboard.webp";
import medals from "../assets/projects/Dual Application/dual-medals.webp";
import progressTir from "../assets/projects/Dual Application/dual-progress-tir.webp";
import progressCourse from "../assets/projects/Dual Application/dual-progress-course.webp";
import studentDetail from "../assets/projects/Dual Application/dual-student-detail.webp";

const archIcons = [
  <Server className="w-4 h-4" />,
  <Wifi className="w-4 h-4" />,
  <Radio className="w-4 h-4" />,
  <Database className="w-4 h-4" />,
];

type RoleKey = "scrum" | "comm" | "dev";

interface Member {
  name: string;
  roleKey: RoleKey;
  badge?: string;
  photo?: string;
  github?: string;
  linkedin?: string;
}

const team: Member[] = [
  {
    name: "Matthieu Gouélo",
    roleKey: "scrum",
    photo: photoMatthieu,
    github: "https://github.com/mgouelo",
    linkedin: "https://www.linkedin.com/in/matthieu-gouelo/",
  },
  {
    name: "Marin Weis",
    roleKey: "comm",
    photo: photoMarin,
    github: "https://github.com/Marin-Weis",
    linkedin: "https://www.linkedin.com/in/marin-weis-22143a353/",
  },
  {
    name: "Nolann Lescop",
    roleKey: "dev",
    photo: photoNolann,
    github: "https://github.com/nolann-alt",
    linkedin: "https://www.linkedin.com/in/nolann-lescop-00427233a/",
  },
  {
    name: "Glen Potay",
    roleKey: "dev",
    badge: "S3",
    photo: photoGlen,
    linkedin: "https://www.linkedin.com/in/glenpotay/",
  },
  {
    name: "Lucien Carré",
    roleKey: "dev",
    badge: "S4",
    photo: photoLucien,
    linkedin: "https://www.linkedin.com/in/lucien-carr%C3%A9-473816354/",
  },
];

interface Supervisor {
  name: string;
  kind: "client" | "referent";
  website?: string;
}

const supervisors: Supervisor[] = [
  { name: "Thierry Le Goff", kind: "client" },
  {
    name: "Jean-François Kamp",
    kind: "referent",
    website:
      "https://www-facultesciences.univ-ubs.fr/fr/contacts-2/annuaire/k/a/m/personnel-jean-francois-kamp-fr.html",
  },
];

const initials = (name: string) =>
  name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

const DualCaseStudy = () => {
  const { t } = useLanguage();
  const d = t.dualStudy;

  const heroShots = [home, leaderboard, medals, progressCourse];
  const screens = [
    { src: sessionType, ...d.screens.session },
    { src: qr, ...d.screens.qr },
    { src: medals, ...d.screens.results },
    { src: progressTir, ...d.screens.progress },
  ];

  return (
    <div className="space-y-10" id="Dual">
      <Title title={d.title} />

      {/* Hero / Intro */}
      <section className="grid lg:grid-cols-[1.2fr,0.8fr] gap-8 items-start">
        <div className="space-y-4">
          <span className="badge badge-accent badge-sm">{d.badge}</span>
          <h2 className="font-display text-xl md:text-2xl font-semibold">
            {d.heading}
          </h2>
          <p className="text-sm md:text-base text-base-content/80">{d.intro}</p>

          <div className="glass-card-soft p-4 md:p-5 grid sm:grid-cols-3 gap-4 text-xs md:text-sm">
            <div>
              <p className="text-xs uppercase tracking-wide text-base-content/60">
                {d.meta.roleLabel}
              </p>
              <p className="font-medium">{d.meta.role}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-base-content/60">
                {d.meta.stackLabel}
              </p>
              <p className="font-medium">{d.meta.stack}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-base-content/60">
                {d.meta.focusLabel}
              </p>
              <p className="font-medium">{d.meta.focus}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs uppercase tracking-[0.2em] text-base-content/50">
              {d.grades.label}
            </span>
            {[
              { note: "13.79", label: d.grades.s3 },
              { note: "15.02", label: d.grades.s4 },
            ].map((g) => (
              <div
                key={g.label}
                className="glass-card-soft px-4 py-2 flex items-baseline gap-2"
              >
                <span className="font-display font-bold text-lg md:text-xl text-gradient">
                  {g.note}
                </span>
                <span className="text-xs text-base-content/50">/ 20</span>
                <span className="text-xs text-base-content/70 ml-1">
                  {g.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 via-primary/10 to-secondary/20 pointer-events-none" />
          <div className="grid grid-cols-2 gap-2 p-3 md:p-4">
            {heroShots.map((src, i) => (
              <div
                key={i}
                className="bg-base-200/70 rounded-xl border border-base-300/60 flex items-center justify-center p-2"
              >
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  className="max-h-56 md:max-h-72 w-auto object-contain rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="glass-card-soft p-5 md:p-7 grid md:grid-cols-[0.9fr,1.1fr] gap-6 items-center">
        <div>
          <h3 className="font-display text-lg md:text-xl font-semibold mb-2">
            {d.challenge.title}
          </h3>
          <p className="text-sm md:text-base text-base-content/80">
            {d.challenge.text}
          </p>
        </div>
        <ul className="grid sm:grid-cols-2 gap-3">
          {d.challenge.points.map((point) => (
            <li
              key={point}
              className="flex items-start gap-2 text-xs md:text-sm bg-base-100/60 rounded-xl border border-base-300/50 p-3"
            >
              <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Architecture */}
      <section className="space-y-4">
        <div className="max-w-2xl">
          <h3 className="font-display text-lg md:text-xl font-semibold mb-1">
            {d.architecture.title}
          </h3>
          <p className="text-sm md:text-base text-base-content/80">
            {d.architecture.text}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {d.architecture.points.map((point, i) => (
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
        {d.features.map((feature) => (
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
                  <span className="mt-[6px] h-[3px] w-[3px] rounded-full bg-accent shrink-0" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Screens gallery */}
      <section className="space-y-4">
        <h3 className="font-display text-base md:text-lg font-semibold">
          {d.galleryTitle}
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {screens.map((screen) => (
            <div key={screen.title} className="glass-card flex flex-col">
              <div className="bg-base-200/70 flex items-center justify-center p-3">
                <img
                  src={screen.src}
                  alt={screen.title}
                  loading="lazy"
                  className="max-h-64 w-auto object-contain rounded-lg"
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
      <section className="glass-card-soft p-4 md:p-5 flex flex-col sm:flex-row items-start gap-4">
        <div className="bg-base-200/70 rounded-xl border border-base-300/60 flex items-center justify-center p-3 w-full sm:w-48 shrink-0">
          <img
            src={studentDetail}
            alt=""
            loading="lazy"
            className="max-h-72 w-auto object-contain rounded-lg mx-auto"
          />
        </div>
        <div className="text-xs md:text-sm text-base-content/80 space-y-2">
          <h3 className="font-display font-semibold text-base md:text-lg text-base-content">
            {d.team.title}
          </h3>
          <p>{d.team.text}</p>
          <p className="font-medium text-base-content">{d.team.role}</p>
          <p>{d.takeaway.p1}</p>
          <p>{d.takeaway.p2}</p>
        </div>
      </section>

      {/* Team members */}
      <section className="space-y-4">
        <h3 className="font-display text-base md:text-lg font-semibold">
          {d.team.membersTitle}
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {team.map((member) => (
            <div
              key={member.name}
              className="glass-card-soft p-4 flex items-center gap-3 hover:-translate-y-1 hover:shadow-xl transition-transform duration-200"
            >
              {member.photo ? (
                <img
                  src={member.photo}
                  alt={member.name}
                  loading="lazy"
                  className="w-12 h-12 shrink-0 rounded-full object-cover border-2 border-base-300/60"
                />
              ) : (
                <div className="w-12 h-12 shrink-0 rounded-full grid place-items-center font-display font-semibold text-sm text-accent-content bg-gradient-to-br from-accent to-primary">
                  {initials(member.name)}
                </div>
              )}
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-sm truncate">{member.name}</p>
                  {member.badge && (
                    <span className="badge badge-ghost badge-xs shrink-0">
                      {member.badge}
                    </span>
                  )}
                </div>
                <p className="text-xs text-base-content/70 leading-snug">
                  {d.team.roles[member.roleKey]}
                </p>
              </div>
              {(member.github || member.linkedin) && (
                <div className="flex items-center gap-1 shrink-0">
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} · GitHub`}
                      className="btn btn-ghost btn-circle btn-xs hover:scale-110 transition-transform"
                    >
                      <img src={githubIcon} alt="GitHub" className="w-4 h-4" />
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} · LinkedIn`}
                      className="btn btn-ghost btn-circle btn-xs hover:scale-110 transition-transform"
                    >
                      <img src={linkedinIcon} alt="LinkedIn" className="w-4 h-4" />
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Supervision & client */}
        <h4 className="font-display text-sm md:text-base font-semibold text-base-content/80 pt-2">
          {d.team.supervisionTitle}
        </h4>
        <div className="grid sm:grid-cols-2 gap-4">
          {supervisors.map((sup) => {
            const info = d.team[sup.kind];
            return (
              <div
                key={sup.name}
                className="glass-card-soft p-4 flex items-center gap-3 hover:-translate-y-1 hover:shadow-xl transition-transform duration-200"
              >
                <div className="w-12 h-12 shrink-0 rounded-full grid place-items-center font-display font-semibold text-sm text-base-content bg-base-300/70">
                  {initials(sup.name)}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-sm truncate">{sup.name}</p>
                  <p className="text-xs text-base-content/70 leading-snug">
                    {info.role}
                  </p>
                  <p className="text-xs text-base-content/50 leading-snug">
                    {info.org}
                  </p>
                </div>
                {sup.website && (
                  <a
                    href={sup.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${sup.name} · UBS`}
                    className="btn btn-ghost btn-circle btn-xs text-base-content/60 hover:text-accent hover:scale-110 transition-transform shrink-0"
                  >
                    <Globe className="w-4 h-4" />
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default DualCaseStudy;
