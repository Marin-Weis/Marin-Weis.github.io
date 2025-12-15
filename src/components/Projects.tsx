import Title from "./Title"

import secouriste from "../assets/projects/secouriste.png";
import dual from "../assets/projects/Dual.png";

import github from "../assets/icons/github.png";
import youtube from "../assets/icons/youtube.png";


const projects = [
    {
        id: 1,
        title : "First Aid Application",
        description : "A web application for managing rescue workers and their assignments. Rescuers can register, declare their certifications (PSE1, PSE2, SSA, etc.), and consult their deployments, while administrators manage competencies and automatically assign missions based on skills and availability.",
        technologies : ["Java", "SQL", "DHCP", "DNS"],
        demolink : "https://www.youtube.com/watch?v=h1l--gwkGtM",
        repolink : "https://github.com/Marin-Weis/PROJECT-First-aid-application",
        image: secouriste,
    },
    {
        id: 2,
        title : "Dual Application",
        description : "An Android application designed to support PE teachers during biathlon evaluation sessions. Developed in collaboration with the IUT de Vannes and Collège Notre-Dame-La-Blanche, the app works fully offline and manages student performance in real time.",
        technologies : ["Java", "Kotlin"],
        demolink : "#Projects",
        repolink : "https://github.com/Marin-Weis/Dual-projectBiathlon",
        image: dual,
    },
] 

const Projects = () => {
    return (
        <div className="p-10 mb-10 md:mb-3" id="Projects">
            <Title title="Projects" />
            <div className ="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-10 mt-0 md:mt-10">
                { projects.map((project) => (
                    <div key={project.id} className="bg-base-300 p-5 h-fit rounded-xl shadow-lg">
                        <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-46 h-80 object-cover"
                        />
                        <div>
                            <h1 className="my-2 font-bold">
                                {project.title}
                            </h1>
                            <p className="text-sm">
                                {project.description}
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-2 my-3">
                            {project.technologies.map((tech, index) => (
                                <span 
                                    key={index}
                                    className="badge badge-accent badge-sm"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div>
                            <a 
                                href={project.demolink} 
                                className="btn w-1/3 btn-base-300 mr-2"
                            >
                                Demo
                                <img src={youtube} alt="YouTube" className="w-5 h-5"/>
                            </a>
                            <a 
                                href={project.repolink}
                                className="btn w-1/3 btn-base-300"
                            >
                                Repo
                                <img src={github} alt="GitHub" className="w-5 h-5"/>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects;