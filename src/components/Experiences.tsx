import Title from "./Title";

import imgCSS from "../assets/techno/CSS.png";
import imgHTML from "../assets/techno/HTML.png";
import imgJS from "../assets/techno/JavaScript.png";
import imgJava from "../assets/techno/java.png";
import imgPython from "../assets/techno/pyhton.png";
import imgKotlin from "../assets/techno/Kotlin.jpg";
import imgSQL from "../assets/techno/SQL.png";
import imgC from "../assets/techno/C.png";
import imgPhp from "../assets/techno/Php.png";

import lycee from "../assets/education/lycee2.webp";
import iut from "../assets/education/iut.png";
import saintMalo from "../assets/education/saintMalo.png";


const skills = [
    {id: 1, name: "Java", img: imgJava},
    {id: 2, name: "Python", img: imgPython},
    {id: 3, name: "Kotlin", img: imgKotlin},
    {id: 4, name: "C", img: imgC},
    {id: 5, name: "SQL", img: imgSQL},
    {id: 6, name: "PHP", img: imgPhp},
    {id: 7, name: "JavaScript", img: imgJS},
    {id: 8, name: "HTML", img: imgHTML},
    {id: 9, name: "CSS", img: imgCSS},
];

const education = [
    {
        id: 1,
        title: "Diploma in Computer Science",
        institution: "IUT of Vannes",
        Result : "current student",
        duration: "2024 - 2027",
        image : iut,
        description : " Pursuing a BUT in Computer Science, focusing on software development, web technologies, and database management. "
    },
    {
        id: 2,
        title: "Bachelor's Degree in Science",
        institution: "Jaques Cartier High School of Saint-Malo",
        Result : "Baccalauréat S, high honors",
        duration: "2021 - 2024",
        image : lycee,
        description : " Completed a rigorous curriculum with a focus on mathematics, physics, and computer science, achieving high honors."
    },
    {
        id: 3,
        title: "Diploma of Musical Studies",
        institution: "Conservatory Claude Debussy of Saint-Malo",
        Result : "oboe specialty",
        duration: "2010 - 2024",
        image : saintMalo,
        description : " Developed musical skills and discipline through years of dedicated study and practice of the oboe."
    }
];

const Experiences = () => {
  return (
    <div className="space-y-8 fade-in-up" id="Education">
      <Title title="Education & Skills" />

      <div className="flex flex-col md:flex-row items-start gap-8">
        <div className="flex flex-wrap gap-4 justify-center md:justify-start md:w-1/3">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="flex flex-col items-center gap-2 glass-card-soft px-3 py-3 hover:-translate-y-1 hover:shadow-xl transition-transform duration-200 w-28"
            >
              <div className="w-14 h-14 p-1 rounded-full border border-accent/60 bg-base-100/80">
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="object-cover rounded-full h-full w-full"
                />
              </div>
              <span className="mt-1 text-xs font-medium text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        <div className="flex-1 flex flex-col space-y-4">
          {education.map((educationItem, index) => (
            <div
              key={educationItem.id}
              className="glass-card p-5 md:p-6 relative overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-transform duration-200"
            >
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-accent to-primary/60" />
              <div className="flex items-start gap-4">
                <img
                  src={educationItem.image}
                  alt={educationItem.institution}
                  className="object-cover h-10 w-10 rounded-md border border-base-300/70"
                />
                <div>
                  <h2 className="text-base md:text-lg font-semibold text-accent">
                    {educationItem.title}
                  </h2>
                  <p className="text-xs md:text-sm text-base-content/80 font-medium">
                    {educationItem.institution}
                  </p>
                  <p className="text-xs italic mt-1">
                    {educationItem.Result} · {educationItem.duration}
                  </p>
                </div>
              </div>
              <p className="mt-3 text-xs md:text-sm text-base-content/80">
                {educationItem.description}
              </p>
              <span className="badge badge-ghost badge-xs absolute right-4 top-4">
                {index === 0 ? "Current" : "Completed"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;