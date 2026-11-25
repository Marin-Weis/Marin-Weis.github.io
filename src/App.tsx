import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experiences from "./components/Experiences";
import Competences from "./components/Competences";
import WorkExperiences from "./components/WorkExperiences";
import Projects from "./components/Projects";
import FirstAidCaseStudy from "./components/FirstAidCaseStudy";
import DualCaseStudy from "./components/DualCaseStudy";
import AskCombakCaseStudy from "./components/AskCombakCaseStudy";
import MongolingoCaseStudy from "./components/MongolingoCaseStudy";
import DevopsLabCaseStudy from "./components/DevopsLabCaseStudy";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import { useLanguage } from "./i18n/language";
import { scrollToSection } from "./lib/scroll";

const ROUTE_SEO: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Marin Weis — Développeur Full-Stack, Web & Mobile | Portfolio BUT Informatique Vannes (UBS)",
    description:
      "Portfolio officiel de Marin Weis, étudiant en BUT Informatique à l'IUT de Vannes (Université Bretagne Sud) et développeur Full-Stack Web & Mobile (React, Next.js, TypeScript, Java, Kotlin, SQL, MongoDB).",
  },
  "/devops-lab": {
    title: "DevOps Monitoring Lab — Docker, Ansible, Prometheus & Grafana | Marin Weis",
    description:
      "Étude de cas DevOps Monitoring Lab : service Python déployé avec un playbook Ansible idempotent et supervisé par Prometheus et Grafana (alertes et dashboard as code), par Marin Weis.",
  },
  "/ask-combak": {
    title: "Ask Combak — Assistant Shopping IA Conversationnel (Stage Full-Stack) | Marin Weis",
    description:
      "Étude de cas Ask Combak : conception d'un assistant conversationnel IA (Next.js, React, TypeScript, Claude) lors du stage de Marin Weis chez Combak.",
  },
  "/mongolingo": {
    title: "Mongolingo — Apprendre MongoDB & NoSQL en Temps Réel | Marin Weis",
    description:
      "Étude de cas Mongolingo : application web interactive style Duolingo avec 30 défis MongoDB exécutés en temps réel, développée par Marin Weis (IUT de Vannes).",
  },
  "/dual": {
    title: "Dual Application — Application Android (Kotlin) Biathlon EPS | Marin Weis",
    description:
      "Étude de cas Dual : application mobile Android hors-ligne développée en Kotlin avec l'IUT de Vannes pour gérer les évaluations de biathlon en EPS.",
  },
  "/first-aid": {
    title: "First Aid Application — Gestion & Affectation de Secouristes en Java | Marin Weis",
    description:
      "Étude de cas First Aid : application Java/JavaFX de gestion des secouristes (certifications PSE1, PSE2, SSA) et d'affectation algorithmique aux missions.",
  },
};

const SeoHeadManager = () => {
  const location = useLocation();

  useEffect(() => {
    const cleanPath = location.pathname.replace(/\/+$/, "") || "/";
    const meta = ROUTE_SEO[cleanPath] ?? ROUTE_SEO["/"];
    document.title = meta.title;

    const descEl = document.querySelector('meta[name="description"]');
    if (descEl) descEl.setAttribute("content", meta.description);

    const ogTitleEl = document.querySelector('meta[property="og:title"]');
    if (ogTitleEl) ogTitleEl.setAttribute("content", meta.title);

    const ogDescEl = document.querySelector('meta[property="og:description"]');
    if (ogDescEl) ogDescEl.setAttribute("content", meta.description);

    const canonicalUrl = `https://marin-weis.github.io${cleanPath === "/" ? "/" : cleanPath}`;
    const canonicalEl = document.querySelector('link[rel="canonical"]');
    if (canonicalEl) canonicalEl.setAttribute("href", canonicalUrl);
  }, [location.pathname]);

  return null;
};

const ScrollManager = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });

    const state = location.state as { scrollTo?: string } | null;
    if (location.pathname === "/" && state?.scrollTo) {
      const targetId = state.scrollTo;
      // Wait for the page (and its entrance transition) to render before
      // measuring positions, then land the section consistently.
      setTimeout(() => scrollToSection(targetId), 120);
    }
  }, [location.pathname, location.state]);

  return null;
};

const PortfolioLayout = () => (
  <>
    <section className="page-inner section">
      <Home />
    </section>

    <section className="section-alt" id="About">
      <div className="page-inner">
        <About />
      </div>
    </section>

    <section className="section-alt" id="Education">
      <div className="page-inner">
        <Experiences />
      </div>
    </section>

    <section className="page-inner section" id="Competences">
      <Competences />
    </section>

    <section className="page-inner section" id="Projects">
      <div className="page-inner">
        <Projects />
      </div>
    </section>
    
    <section className="page-inner section" id="Experience">
      <WorkExperiences />
    </section>

    <section className="page-inner section" id="Contact">
      <Contact />
    </section>
  </>
);

const CaseStudyPage = ({ children }: { children: React.ReactNode }) => {
  const { t } = useLanguage();
  return (
    <section className="page-inner section">
      <div className="mb-6">
        <Link to="/" className="btn btn-ghost btn-sm md:btn-md">
          ← {t.backToPortfolio}
        </Link>
      </div>
      {children}
    </section>
  );
};

const RoutedContent = () => {
  const location = useLocation();
  return (
    <main>
      <SeoHeadManager />
      <ScrollManager />
      <div key={location.pathname} className="page-transition">
        <Routes location={location}>
          <Route path="/" element={<PortfolioLayout />} />
          <Route
            path="/first-aid"
            element={
              <CaseStudyPage>
                <FirstAidCaseStudy />
              </CaseStudyPage>
            }
          />
          <Route
            path="/dual"
            element={
              <CaseStudyPage>
                <DualCaseStudy />
              </CaseStudyPage>
            }
          />
          <Route
            path="/ask-combak"
            element={
              <CaseStudyPage>
                <AskCombakCaseStudy />
              </CaseStudyPage>
            }
          />
          <Route
            path="/mongolingo"
            element={
              <CaseStudyPage>
                <MongolingoCaseStudy />
              </CaseStudyPage>
            }
          />
          <Route
            path="/devops-lab"
            element={
              <CaseStudyPage>
                <DevopsLabCaseStudy />
              </CaseStudyPage>
            }
          />
        </Routes>
      </div>
    </main>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <div className="page-shell">
        <Navbar />

        <RoutedContent />

        <div className="page-inner">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}