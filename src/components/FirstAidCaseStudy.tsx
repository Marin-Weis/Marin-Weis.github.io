import Title from "./Title";
import { useLanguage } from "../i18n/language";

import githubIcon from "../assets/icons/github.png";
import linkedinIcon from "../assets/icons/linkedin.webp";
import photoMarin from "../assets/projects/Dual Application/team-marin.webp";
import photoMatthieu from "../assets/projects/Dual Application/team-matthieu.webp";
import photoNolann from "../assets/projects/Dual Application/team-nolann.webp";
import photoArthur from "../assets/team/team-arthur.webp";

import homeScreen from "../assets/projects/First Aid Application/Page d'accueil.png";
import loginScreen from "../assets/projects/First Aid Application/Page de connexion.png";
import profileScreen from "../assets/projects/First Aid Application/Page de profil secouriste.png";
import adminDashboard from "../assets/projects/First Aid Application/Tableau de bord _ Admin.png";
import rescuerDashboard from "../assets/projects/First Aid Application/Tableau de bord Secouriste (1).png";
import calendarMonth from "../assets/projects/First Aid Application/Onglet Calendrier Secouriste - Mois.png";
import alertsTab from "../assets/projects/First Aid Application/Onglet alertes admin.png";
import notificationsTab from "../assets/projects/First Aid Application/Onglet notifications.png";

const initials = (name: string) =>
  name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

const collaborators: {
  name: string;
  photo: string;
  github?: string;
  linkedin?: string;
}[] = [
  {
    name: "Marin Weis",
    photo: photoMarin,
    github: "https://github.com/Marin-Weis",
    linkedin: "https://www.linkedin.com/in/marin-weis-22143a353/",
  },
  {
    name: "Matthieu Gouélo",
    photo: photoMatthieu,
    github: "https://github.com/mgouelo",
    linkedin: "https://www.linkedin.com/in/matthieu-gouelo/",
  },
  {
    name: "Nolann Lescop",
    photo: photoNolann,
    github: "https://github.com/nolann-alt",
    linkedin: "https://www.linkedin.com/in/nolann-lescop-00427233a/",
  },
  {
    name: "Arthur Jan",
    photo: photoArthur,
    linkedin: "https://www.linkedin.com/in/arthur-jan-93128a353/",
  },
];

const FirstAidCaseStudy = () => {
  const { t } = useLanguage();
  const fa = t.firstAid;

  const heroShots = [homeScreen, loginScreen, profileScreen, rescuerDashboard];
  const screens = [
    { src: adminDashboard, ...fa.screens.admin },
    { src: calendarMonth, ...fa.screens.calendar },
    { src: alertsTab, ...fa.screens.alerts },
  ];

  return (
    <div className="space-y-10" id="FirstAid">
      <Title title={fa.title} />

      {/* Hero / Intro */}
      <section className="grid lg:grid-cols-[1.2fr,0.8fr] gap-8 items-start">
        <div className="space-y-4">
          <span className="badge badge-accent badge-sm">{fa.badge}</span>
          <h2 className="font-display text-xl md:text-2xl font-semibold">
            {fa.heading}
          </h2>
          <p className="text-sm md:text-base text-base-content/80">{fa.intro}</p>

          <div className="glass-card-soft p-4 md:p-5 grid sm:grid-cols-3 gap-4 text-xs md:text-sm">
            <div>
              <p className="text-xs uppercase tracking-wide text-base-content/60">
                {fa.meta.roleLabel}
              </p>
              <p className="font-medium">{fa.meta.role}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-base-content/60">
                {fa.meta.stackLabel}
              </p>
              <p className="font-medium">{fa.meta.stack}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-base-content/60">
                {fa.meta.focusLabel}
              </p>
              <p className="font-medium">{fa.meta.focus}</p>
            </div>
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

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-6">
        {fa.features.map((feature) => (
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
          {fa.galleryTitle}
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
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

        <div className="glass-card-soft p-4 md:p-5 flex flex-col md:flex-row items-start gap-4">
          <div className="bg-base-200/70 rounded-xl border border-base-300/60 flex items-center justify-center p-3 md:p-4 w-full md:w-60">
            <img
              src={notificationsTab}
              alt=""
              loading="lazy"
              className="max-h-72 w-auto object-contain rounded-lg"
            />
          </div>
          <div className="text-xs md:text-sm text-base-content/80 space-y-2">
            <p>{fa.takeaway.p1}</p>
            <p>{fa.takeaway.p2}</p>
          </div>
        </div>
      </section>

      {/* Collaborators */}
      <section className="space-y-4">
        <h3 className="font-display text-base md:text-lg font-semibold">
          {fa.team.title}
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {collaborators.map((member) => (
            <div
              key={member.name}
              className="glass-card-soft p-4 flex items-center gap-3 hover:-translate-y-1 hover:shadow-xl transition-transform duration-200"
            >
              <img
                src={member.photo}
                alt={member.name}
                loading="lazy"
                className="w-12 h-12 shrink-0 rounded-full object-cover border-2 border-base-300/60"
              />
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-sm truncate">{member.name}</p>
                <p className="text-xs text-base-content/70">{fa.team.role}</p>
              </div>
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
            </div>
          ))}
        </div>

        {/* Supervision */}
        <h4 className="font-display text-sm md:text-base font-semibold text-base-content/80 pt-2">
          {fa.team.supervisionTitle}
        </h4>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="glass-card-soft p-4 flex items-center gap-3">
            <div className="w-12 h-12 shrink-0 rounded-full grid place-items-center font-display font-semibold text-sm text-base-content bg-base-300/70">
              {initials(fa.team.referentName)}
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-sm truncate">
                {fa.team.referentName}
              </p>
              <p className="text-xs text-base-content/70 leading-snug">
                {fa.team.referentRole}
              </p>
              <p className="text-xs text-base-content/50 leading-snug">
                {fa.team.referentOrg}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FirstAidCaseStudy;
