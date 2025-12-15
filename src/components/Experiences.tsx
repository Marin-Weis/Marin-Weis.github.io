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
        <div id="Education">
            <Title title="Education"/>
            <div className="flex flex-col-reverse md:flex-row justify-center items-center " >
                <div className="flex flex-wrap gap-4 justify-center items-center md:w-1/3 mt-4 md:mt-0">
                    {
                        skills.map((skill) => (
                            <div key={skill.id} className="flex justify-center items-center flex-col">
                                <div className="w-24 h-24 p-2 rounded-full border-2 border-accent">
                                    <img src={skill.img} alt={skill.name} 
                                    className="object-cover rounded-full h-full w-full"/>
                                </div>
                                <span className="mt-2 text-sm">{skill.name}</span>
                            </div>
                        ))
                    }
                
                </div>

                <div className="md:ml-4 flex flex-col space-y-4">
                    {
                        education.map((education) => (
                            <div
                                key={education.id}
                                className="flex-col bg-base-200 p-5 rounded-xl shadow-lg"
                            >
                                <div className="flex items-center">
                                    <img 
                                    src={education.image}
                                    alt={education.institution}
                                    className="object-cover h-10 w-10"
                                    />
                                    <div className="ml-4">
                                        <h1 className="text-xl text-accent font-bold">
                                            {education.title}, {education.institution}
                                        </h1>
                                        <span className="italic">{education.Result}</span><br/>
                                        <span>{education.duration}</span>
                                    </div>
                                </div>
                                <p className="mt-4">
                                    {education.description}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Experiences;