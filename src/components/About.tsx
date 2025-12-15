import Title from "./Title";
import img from "../assets/profil/photoPC.jpg";
import { Book, Laptop, Waves } from "lucide-react";

interface AboutSection {
    icons ?: React.ReactNode,
    title : string,
    content : string
}

const AboutSections : AboutSection[] = [
    {
        icons : <Book />,
        title : "Who am I?",
        content : "I'm Marin Weis, a computer science student with a passion for web development and design. I love creating beautiful and functional websites that provide great user experiences."
    },
    {
        icons : <Laptop />,
        title : "My Skills",
        content : "I have experience with HTML, CSS, JavaScript, and various frameworks such as React and Vue.js. I'm also familiar with backend technologies like Node.js and databases like MongoDB."
    },
    {   
        icons : <Waves />,
        title : "My Hobbies",
        content : "In my free time, I enjoy swimming and playing the oboe. These activities help me relax and stay creative."
    }
];

const About = () => {
    return (
        <div className="bg-base-300 p-10 mb-10 md:mb-3" id="About">
            <Title title="About Me" />
            <div className="md:h-screen flex justify-center items-center">
                <div className="hidden md:block">
                    <img src={img} alt="Marin Weis" className="w-64 object-cover rounded-xl"></img>
                </div>
                <div className="md:ml-4 space-y-4">
                    {AboutSections.map((section) => (
                        <div key={section.title} className="flex flex-col md:flex-row items-center bg-base-100 p-5 rounded-xl md:w-96 shadow-xl">
                            <div>{section.icons}</div>
                            <div className="md:ml-4 center md:text-left">
                                <div className="text-xl font-bold mb-1">{section.title}</div>
                                <div className="text-sm">
                                    <h2>{section.content}</h2>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    );
}

export default About;