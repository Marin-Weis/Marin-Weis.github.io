import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experiences from "./components/Experiences";
import WorkExperiences from "./components/WorkExperiences";
import Projects from "./components/Projects";
import FirstAidCaseStudy from "./components/FirstAidCaseStudy";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

import { HashRouter, Route, Routes, Link, useLocation } from "react-router-dom";

const ScrollManager = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });

    const state = location.state as { scrollTo?: string } | null;
    if (location.pathname === "/" && state?.scrollTo) {
      const targetId = state.scrollTo;
      // Attendre que la page soit rendue avant de scroller vers la section
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 0);
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

const FirstAidPage = () => (
  <>
    <section className="page-inner section">
      <div className="mb-6">
        <Link to="/" className="btn btn-ghost btn-sm md:btn-md">
          ← Back to portfolio
        </Link>
      </div>
      <FirstAidCaseStudy />
    </section>
  </>
);

export default function App() {
  return (
    <HashRouter>
      <div className="page-shell">
        <div className="page-inner">
          <Navbar />
        </div>

        <main>
          <ScrollManager />
          <Routes>
            <Route path="/" element={<PortfolioLayout />} />
            <Route path="/first-aid" element={<FirstAidPage />} />
          </Routes>
        </main>

        <div className="page-inner">
          <Footer />
        </div>
      </div>
    </HashRouter>
  );
}