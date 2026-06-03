import Title from "./Title";
import { useLanguage } from "../i18n/language";

import imgCSS from "../assets/techno/CSS.png";
import imgHTML from "../assets/techno/HTML.png";
import imgJS from "../assets/techno/JavaScript.png";
import imgJava from "../assets/techno/java.png";
import imgPython from "../assets/techno/pyhton.png";
import imgKotlin from "../assets/techno/Kotlin.jpg";
import imgSQL from "../assets/techno/SQL.png";
import imgC from "../assets/techno/C.png";
import imgPhp from "../assets/techno/Php.png";
import imgReact from "../assets/techno/react.svg";
import imgTS from "../assets/techno/typescript.svg";
import imgVue from "../assets/techno/vuedotjs.svg";
import imgNode from "../assets/techno/nodedotjs.svg";
import imgMongo from "../assets/techno/mongodb.svg";

import lycee from "../assets/education/lycee2.webp";
import iut from "../assets/education/iut.png";
import saintMalo from "../assets/education/saintMalo.png";

const skills = [
  { name: "Java", img: imgJava },
  { name: "Kotlin", img: imgKotlin },
  { name: "Python", img: imgPython },
  { name: "C", img: imgC },
  { name: "SQL", img: imgSQL },
  { name: "PHP", img: imgPhp },
  { name: "JavaScript", img: imgJS },
  { name: "TypeScript", img: imgTS },
  { name: "React", img: imgReact },
  { name: "Vue.js", img: imgVue },
  { name: "Node.js", img: imgNode },
  { name: "MongoDB", img: imgMongo },
  { name: "HTML", img: imgHTML },
  { name: "CSS", img: imgCSS },
];

const educationImages = [iut, lycee, saintMalo];

const Experiences = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-8 fade-in-up">
      <Title title={t.education.title} />

      <div className="flex flex-col md:flex-row items-start gap-8">
        <div className="md:w-1/3 space-y-3">
          <p className="text-xs uppercase tracking-[0.2em] text-base-content/60 text-center md:text-left">
            {t.education.skillsTitle}
          </p>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center gap-2 glass-card-soft px-3 py-3 hover:-translate-y-1 hover:shadow-xl transition-transform duration-200 w-24"
              >
                <div className="w-12 h-12 p-1.5 rounded-full border border-accent/40 bg-base-100/80 flex items-center justify-center">
                  <img
                    src={skill.img}
                    alt={skill.name}
                    className="object-contain h-full w-full"
                  />
                </div>
                <span className="text-xs font-medium text-center">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 flex flex-col space-y-4">
          {t.education.items.map((item, index) => (
            <div
              key={item.title}
              className="glass-card p-5 md:p-6 relative overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-transform duration-200"
            >
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-accent to-primary/60" />
              <div className="flex items-start gap-4">
                <img
                  src={educationImages[index]}
                  alt={item.institution}
                  className="object-cover h-10 w-10 rounded-md border border-base-300/70"
                />
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-accent">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-base-content/80 font-medium">
                    {item.institution}
                  </p>
                  <p className="text-xs italic mt-1">
                    {item.result} · {item.duration}
                  </p>
                </div>
              </div>
              <p className="mt-3 text-xs md:text-sm text-base-content/80">
                {item.description}
              </p>
              <span className="badge badge-ghost badge-xs absolute right-4 top-4">
                {index === 0
                  ? t.education.badges.current
                  : t.education.badges.completed}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
