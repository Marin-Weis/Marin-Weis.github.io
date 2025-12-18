import Title from "./Title";

import homeScreen from "../assets/projects/First Aid Application/Page d'accueil.png";
import loginScreen from "../assets/projects/First Aid Application/Page de connexion.png";
import profileScreen from "../assets/projects/First Aid Application/Page de profil secouriste.png";
import adminDashboard from "../assets/projects/First Aid Application/Tableau de bord _ Admin.png";
import rescuerDashboard from "../assets/projects/First Aid Application/Tableau de bord Secouriste (1).png";
import calendarMonth from "../assets/projects/First Aid Application/Onglet Calendrier Secouriste - Mois.png";
import alertsTab from "../assets/projects/First Aid Application/Onglet alertes admin.png";
import notificationsTab from "../assets/projects/First Aid Application/Onglet notifications.png";

const FirstAidCaseStudy = () => {
  return (
    <div className="space-y-10 fade-in-up" id="FirstAid">
      <Title title="First Aid Application" />

      {/* Hero / Intro */}
      <section className="grid lg:grid-cols-[1.2fr,0.8fr] gap-8 items-start">
        <div className="space-y-4">
          <p className="badge badge-accent badge-sm">Mobile app · Academic project</p>
          <h2 className="text-xl md:text-2xl font-semibold">
            Managing rescue workers, missions and skills in one mobile app.
          </h2>
          <p className="text-sm md:text-base text-base-content/80">
            First Aid Application is a mobile app designed to help organizations
            manage their rescue workers. It centralizes profiles, certifications
            and deployments, and assists administrators in assigning the right
            people to the right missions based on skills and availability.
          </p>

          <div className="glass-card-soft p-4 md:p-5 grid sm:grid-cols-3 gap-4 text-xs md:text-sm">
            <div>
              <p className="text-xs uppercase tracking-wide text-base-content/60">
                Role
              </p>
              <p className="font-medium">Full-stack student developer</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-base-content/60">
                Tech stack
              </p>
              <p className="font-medium">Java · SQL · Networking (DHCP / DNS)</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-base-content/60">
                Focus
              </p>
              <p className="font-medium">Scheduling · Skills management · UX</p>
            </div>
          </div>
        </div>

        <div className="glass-card relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 via-primary/10 to-secondary/20 pointer-events-none" />
          <div className="grid grid-cols-2 gap-2 p-3 md:p-4">
            {[
              { src: homeScreen, alt: "First Aid Application home screen" },
              { src: loginScreen, alt: "First Aid Application login screen" },
              { src: profileScreen, alt: "Rescuer profile screen" },
              { src: rescuerDashboard, alt: "Rescuer dashboard" },
            ].map((img) => (
              <div
                key={img.alt}
                className="bg-base-200/70 rounded-xl border border-base-300/60 flex items-center justify-center p-2"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="max-h-56 md:max-h-72 w-auto object-contain rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-6">
        <div className="glass-card-soft p-4 md:p-5">
          <h3 className="font-semibold text-base md:text-lg mb-2">
            Rescuer experience
          </h3>
          <p className="text-xs md:text-sm text-base-content/80 mb-3">
            Each rescuer has a dedicated profile with certifications and
            availability, and can easily keep track of their missions.
          </p>
          <ul className="text-xs md:text-sm text-base-content/80 space-y-1.5">
            <li>· Personal dashboard with upcoming missions.</li>
            <li>· Certifications like PSE1, PSE2, SSA, etc.</li>
            <li>· Calendar view to visualize deployments.</li>
          </ul>
        </div>

        <div className="glass-card-soft p-4 md:p-5">
          <h3 className="font-semibold text-base md:text-lg mb-2">
            Admin & scheduling
          </h3>
          <p className="text-xs md:text-sm text-base-content/80 mb-3">
            Administrators can see a global overview of needs and resources,
            and assign people to missions in a structured way.
          </p>
          <ul className="text-xs md:text-sm text-base-content/80 space-y-1.5">
            <li>· Dashboard with key indicators.</li>
            <li>· Assignment based on skills and availability.</li>
            <li>· Tools to maintain up-to-date skill records.</li>
          </ul>
        </div>

        <div className="glass-card-soft p-4 md:p-5">
          <h3 className="font-semibold text-base md:text-lg mb-2">
            Alerts & communication
          </h3>
          <p className="text-xs md:text-sm text-base-content/80 mb-3">
            The app helps keep everyone informed with alerts and notifications
            tailored to admins and rescuers.
          </p>
          <ul className="text-xs md:text-sm text-base-content/80 space-y-1.5">
            <li>· Admin alerts for missing skills or low staff.</li>
            <li>· Rescuer notifications for new or updated missions.</li>
            <li>· Clear status for each deployment request.</li>
          </ul>
        </div>
      </section>

      {/* Screens gallery */}
      <section className="space-y-4">
        <h3 className="text-base md:text-lg font-semibold">
          A closer look at key screens
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="glass-card flex flex-col">
            <div className="bg-base-200/70 flex items-center justify-center p-3">
              <img
                src={adminDashboard}
                alt="Admin dashboard"
                className="max-h-64 w-auto object-contain rounded-lg"
              />
            </div>
            <div className="p-3 md:p-4 text-xs md:text-sm">
              <p className="font-medium mb-1">Admin dashboard</p>
              <p className="text-base-content/80">
                Overview of missions, available rescuers and alerts to quickly
                identify issues.
              </p>
            </div>
          </div>

          <div className="glass-card flex flex-col">
            <div className="bg-base-200/70 flex items-center justify-center p-3">
              <img
                src={calendarMonth}
                alt="Rescuer calendar"
                className="max-h-64 w-auto object-contain rounded-lg"
              />
            </div>
            <div className="p-3 md:p-4 text-xs md:text-sm">
              <p className="font-medium mb-1">Rescuer calendar</p>
              <p className="text-base-content/80">
                Monthly view of missions to help each rescuer plan their
                engagements.
              </p>
            </div>
          </div>

          <div className="glass-card flex flex-col">
            <div className="bg-base-200/70 flex items-center justify-center p-3">
              <img
                src={alertsTab}
                alt="Admin alerts tab"
                className="max-h-64 w-auto object-contain rounded-lg"
              />
            </div>
            <div className="p-3 md:p-4 text-xs md:text-sm">
              <p className="font-medium mb-1">Alerts & notifications</p>
              <p className="text-base-content/80">
                Centralized alerts and notifications so administrators never
                miss a critical change.
              </p>
            </div>
          </div>
        </div>

        <div className="glass-card-soft p-4 md:p-5 flex flex-col md:flex-row items-start gap-4">
          <div className="bg-base-200/70 rounded-xl border border-base-300/60 flex items-center justify-center p-3 md:p-4 w-full md:w-60">
            <img
              src={notificationsTab}
              alt="Notifications tab"
              className="max-h-72 w-auto object-contain rounded-lg"
            />
          </div>
          <div className="text-xs md:text-sm text-base-content/80 space-y-2">
            <p>
              Designing this project taught me how important clear information
              hierarchy is when dealing with time-sensitive data like
              deployments and alerts.
            </p>
            <p>
              I focused on making the interface readable and structured even on
              smaller screens, while still exposing all the data administrators
              need to make decisions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FirstAidCaseStudy;


