import { Briefcase, LifeBuoy, ShoppingCart, Waves } from "lucide-react";
import Title from "./Title";

type WorkType = "oyster" | "retail" | "lifeguard";

interface WorkExperience {
  id: number;
  role: string;
  company: string;
  period: string;
  location?: string;
  type: WorkType;
  tasks: string[];
}

const workExperiences: WorkExperience[] = [
  {
    id: 1,
    role: "Oyster Farmer",
    company: "SCEO Les Huîtres de la Côte d’Émeraude",
    period: "July 2022 & July 2023",
    type: "oyster",
    tasks: [
      "Sorting, grading, sieving, and packaging oysters.",
      "Turning oyster bags to ensure uniform growth.",
    ],
  },
  {
    id: 2,
    role: "Stock Clerk",
    company: "Leclerc",
    period: "July 2024",
    type: "retail",
    tasks: [
      "Shelf stocking while maintaining organization and shelf-facing standards.",
      "Inventory management: product control and shelf restocking.",
    ],
  },
  {
    id: 3,
    role: "Lifeguard",
    company: "Aquamalo",
    period: "July & August 2025",
    type: "lifeguard",
    tasks: [
      "Supervised and secured swimming areas, preventing water-related risks.",
      "Responded quickly to incidents, providing assistance and first aid.",
    ],
  },
];

const iconForType = (type: WorkType) => {
  switch (type) {
    case "oyster":
      return <Waves className="w-5 h-5" />;
    case "retail":
      return <ShoppingCart className="w-5 h-5" />;
    case "lifeguard":
      return <LifeBuoy className="w-5 h-5" />;
    default:
      return <Briefcase className="w-5 h-5" />;
  }
};

const WorkExperiences = () => {
  return (
    <div className="space-y-8 fade-in-up" id="Experience">
      <Title title="Professional Experiences" />

      <div className="grid md:grid-cols-[1.2fr,0.8fr] gap-8">
        <div className="space-y-4">
          {workExperiences.map((exp, index) => (
            <article
              key={exp.id}
              className="glass-card relative overflow-hidden px-5 py-4 md:px-6 md:py-5 hover:-translate-y-1 hover:shadow-2xl transition-transform duration-200"
            >
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-accent to-primary/70" />

              <div className="flex items-start gap-4">
                <div className="btn btn-circle btn-sm btn-ghost border border-base-300/70 mt-1">
                  {iconForType(exp.type)}
                </div>
                <div>
                  <h3 className="font-semibold text-base md:text-lg">
                    {exp.role}
                  </h3>
                  <p className="text-xs md:text-sm text-base-content/80 font-medium">
                    {exp.company}
                  </p>
                  <p className="text-xs text-base-content/70 mt-1">
                    {exp.period}
                  </p>
                </div>
              </div>

              <ul className="mt-3 space-y-1.5 text-xs md:text-sm text-base-content/80">
                {exp.tasks.map((task) => (
                  <li key={task} className="flex gap-2">
                    <span className="mt-[6px] h-[3px] w-[3px] rounded-full bg-accent" />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>

              <span className="badge badge-ghost badge-xs absolute right-4 top-4">
                {index === workExperiences.length - 1
                  ? "Most recent"
                  : "Past experience"}
              </span>
            </article>
          ))}
        </div>

        <aside className="glass-card-soft p-5 md:p-6 space-y-3 text-xs md:text-sm text-base-content/80">
          <h4 className="font-semibold text-base md:text-lg flex items-center gap-2">
            <Briefcase className="w-4 h-4" />
            What these experiences say about me
          </h4>
          <p>
            Through these jobs, I developed adaptability, teamwork, and a strong
            sense of responsibility — whether in demanding physical work,
            customer-facing environments, or safety-critical situations.
          </p>
          <p>
            I bring this same reliability and attention to detail to my work in
            computer science and software development.
          </p>
        </aside>
      </div>
    </div>
  );
};

export default WorkExperiences;


