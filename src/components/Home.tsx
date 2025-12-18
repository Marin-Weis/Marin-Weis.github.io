import { Send, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import img from "../assets/profil/pp.jpg";
import github from "../assets/icons/github.png";
import linkedin from "../assets/icons/linkedin.webp";

const Home = () => {
  const navigate = useNavigate();

  const handleViewProjects = () => {
    navigate("/", { state: { scrollTo: "Projects" } });
  };

  return (
    <section
      className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16 fade-in-up"
      id="Home"
    >
      <div className="flex-1 space-y-5">
        <p className="text-xs uppercase tracking-[0.3em] text-accent/80">
          Portfolio 2025 · Web & Mobile
        </p>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Hello,
          <br />
          I'm{" "}
          <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            Marin Weis
          </span>
          <span className="block text-lg md:text-2xl font-semibold mt-3 text-base-content/80">
            Computer science student & aspiring software engineer.
          </span>
        </h1>

        <p className="text-sm md:text-base text-base-content/80 max-w-xl">
          I design and build clean, thoughtful web and mobile experiences. From
          Java and Kotlin backends to modern frontends with React, I love
          turning ideas into usable products.
        </p>

        <div className="flex flex-wrap items-center gap-3 md:gap-4">
          <a
            href="mailto:marin.weis@gmail.com"
            className="btn btn-accent md:btn-md btn-sm shadow-lg shadow-accent/30"
          >
            <Send className="w-4 h-4 md:w-5 md:h-5" />
            <span>Contact me</span>
          </a>

          <button
            type="button"
            onClick={handleViewProjects}
            className="btn btn-outline md:btn-md btn-sm border-none bg-gradient-to-r from-base-200/80 to-base-300/80 hover:from-accent/90 hover:to-primary/90 hover:text-accent-content shadow-sm gap-2"
          >
            <span>View projects</span>
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </button>

          <div className="flex items-center gap-2 ml-1">
            <a
              href="https://github.com/Marin-Weis"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-circle btn-xs md:btn-sm hover:scale-105 transition-transform"
            >
              <img src={github} alt="GitHub" className="w-4 h-4 md:w-5 md:h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/marin-weis-22143a353/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-circle btn-xs md:btn-sm hover:scale-105 transition-transform"
            >
              <img
                src={linkedin}
                alt="LinkedIn"
                className="w-4 h-4 md:w-5 md:h-5"
              />
            </a>
          </div>
        </div>

        <div className="inline-flex items-center gap-3 rounded-2xl bg-base-100/80 border border-base-300/70 px-4 py-3 text-xs md:text-sm">
          <span className="badge badge-accent badge-sm">Currently</span>
          <span className="text-base-content/80">
            Student at IUT of Vannes · Open to{" "}
            <span className="font-semibold">internships & projects</span>
          </span>
        </div>
      </div>

      <div className="flex-1 flex justify-center lg:justify-end">
        <div className="relative w-52 h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 floating">
          <div className="absolute inset-0 rounded-[42%_58%_45%_55%/60%_45%_55%_40%] bg-gradient-to-tr from-accent/40 via-primary/40 to-secondary/40 blur-2xl -z-10" />

          <img
            src={img}
            alt="Marin Weis"
            className="w-full h-full object-cover border-4 border-base-100/80 shadow-2xl"
            style={{
              borderRadius: "42% 58% 45% 55% / 60% 45% 55% 40%",
            }}
          />

          <div className="absolute -bottom-4 -right-3 md:-bottom-5 md:-right-5 glass-card-soft px-3 py-2 text-xs md:text-sm flex flex-col gap-1">
            <span className="font-semibold">Web · Mobile · Backend</span>
            <span className="text-[11px] md:text-xs text-base-content/80">
              Java · Kotlin · React · SQL · PHP
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;