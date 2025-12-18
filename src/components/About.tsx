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
    <div className="space-y-6 fade-in-up-delayed">
      <Title title="About Me" />

      <div className="grid md:grid-cols-[0.9fr,1.1fr] gap-8 items-center">
        <div className="hidden md:block">
          <div className="relative max-w-xs mx-auto floating">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/40 via-primary/30 to-secondary/40 blur-2xl -z-10" />
            <img
              src={img}
              alt="Marin Weis"
              className="w-full object-cover rounded-3xl border border-base-300/60 shadow-2xl"
            />
          </div>
        </div>

        <div className="space-y-4">
          {AboutSections.map((section) => (
            <div
              key={section.title}
              className="glass-card-soft p-4 md:p-5 flex flex-col md:flex-row items-start gap-3 hover:-translate-y-1 hover:shadow-xl transition-transform duration-200"
            >
              <div className="btn btn-circle btn-sm btn-ghost border border-base-300/70">
                {section.icons}
              </div>
              <div className="md:text-left">
                <div className="text-base md:text-lg font-semibold mb-1">
                  {section.title}
                </div>
                <p className="text-xs md:text-sm text-base-content/80">
                  {section.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;