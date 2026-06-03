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
import Footer from "./components/Footer";
import Contact from "./components/Contact";

import { HashRouter, Route, Routes, Link, useLocation } from "react-router-dom";
import { useLanguage } from "./i18n/language";
import { scrollToSection } from "./lib/scroll";

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
        </Routes>
      </div>
    </main>
  );
};

export default function App() {
  return (
    <HashRouter>
      <div className="page-shell">
        <Navbar />

        <RoutedContent />

        <div className="page-inner">
          <Footer />
        </div>
      </div>
    </HashRouter>
  );
}