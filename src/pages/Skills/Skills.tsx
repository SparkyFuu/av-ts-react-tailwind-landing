import {
  FaAws,
  FaChartLine,
  FaDatabase,
  FaJava,
  FaReact,
  FaServer,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiNestjs,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const skillGroups = [
  {
    title: "Frontend productivo",
    icon: <FaReact />,
    color: "text-[#0071e3]",
    items: ["React", "Next.js", "TypeScript", "Tailwind", "Radix/shadcn"],
  },
  {
    title: "Estado y datos",
    icon: <SiRedux />,
    color: "text-[#5856d6]",
    items: ["Redux Toolkit", "Axios", "Recharts", "JWT decode", "Forms"],
  },
  {
    title: "Backend",
    icon: <SiNestjs />,
    color: "text-[#ff375f]",
    items: ["NestJS", "Node.js", "JWT", "class-validator", "REST APIs"],
  },
  {
    title: "Cloud y deploy",
    icon: <FaAws />,
    color: "text-[#ff9f0a]",
    items: ["AWS Lambda", "S3", "SQS", "Serverless", "CI-ready scripts"],
  },
  {
    title: "Datos",
    icon: <FaDatabase />,
    color: "text-[#30d158]",
    items: ["PostgreSQL", "Sequelize", "TypeORM", "SQL", "Excel/CSV"],
  },
  {
    title: "Base tecnica",
    icon: <FaJava />,
    color: "text-[#bf5af2]",
    items: ["Java Spring", "HTML/CSS", "Bootstrap", "GitHub", "SEO"],
  },
];

const currentSignals = [
  { icon: <SiTypescript />, label: "TypeScript como base" },
  { icon: <SiTailwindcss />, label: "Tailwind y sistemas UI" },
  { icon: <SiNextdotjs />, label: "NextAuth y Next.js" },
  { icon: <FaChartLine />, label: "Dashboards y visualizacion" },
  { icon: <FaServer />, label: "Servicios y APIs" },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-[#f5f5f7] px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6e6e73]">
              Stack
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.035em] text-[#1d1d1f] sm:text-5xl">
              Skills demostrables por capas, desde UI hasta infraestructura.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 md:max-w-md md:justify-end">
            {currentSignals.map((signal) => (
              <span
                key={signal.label}
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-2 text-sm text-[#424245] shadow-sm"
              >
                <span className="text-[#0071e3]">{signal.icon}</span>
                {signal.label}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center gap-3">
                <span className={`text-3xl ${group.color}`}>{group.icon}</span>
                <h3 className="text-xl font-semibold tracking-[-0.02em] text-[#1d1d1f]">
                  {group.title}
                </h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-[#f5f5f7] px-3 py-2 text-sm font-medium text-[#424245]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
