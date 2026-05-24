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
    color: "text-[#38bdf8]",
    items: ["React", "Next.js", "TypeScript", "Tailwind", "Radix/shadcn"],
  },
  {
    title: "Estado y datos",
    icon: <SiRedux />,
    color: "text-[#a78bfa]",
    items: ["Redux Toolkit", "Axios", "Recharts", "JWT decode", "Forms"],
  },
  {
    title: "Backend",
    icon: <SiNestjs />,
    color: "text-[#fb7185]",
    items: ["NestJS", "Node.js", "JWT", "class-validator", "REST APIs"],
  },
  {
    title: "Cloud y deploy",
    icon: <FaAws />,
    color: "text-[#f97316]",
    items: ["AWS Lambda", "S3", "SQS", "Serverless", "CI-ready scripts"],
  },
  {
    title: "Datos",
    icon: <FaDatabase />,
    color: "text-[#34d399]",
    items: ["PostgreSQL", "Sequelize", "TypeORM", "SQL", "Excel/CSV"],
  },
  {
    title: "Base tecnica",
    icon: <FaJava />,
    color: "text-[#facc15]",
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
    <section id="skills" className="bg-[#071013] px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#34d399]">
              Stack
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black text-white sm:text-5xl">
              Skills demostrables por capas, desde UI hasta infraestructura.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 md:max-w-md md:justify-end">
            {currentSignals.map((signal) => (
              <span
                key={signal.label}
                className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.05] px-3 py-2 text-sm text-slate-200"
              >
                <span className="text-[#f97316]">{signal.icon}</span>
                {signal.label}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-[#34d399]/40"
            >
              <div className="flex items-center gap-3">
                <span className={`text-3xl ${group.color}`}>{group.icon}</span>
                <h3 className="text-xl font-bold text-white">{group.title}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md bg-[#0b1718] px-3 py-2 text-sm font-medium text-slate-300"
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
