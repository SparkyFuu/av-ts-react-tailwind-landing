import { FaExternalLinkAlt } from "react-icons/fa";

const experiences = [
  {
    company: "Energy Asset",
    role: "Jefe de Tecnologia e Informacion",
    description:
      "Liderazgo tecnico para plataformas web, software interno, arquitectura serverless, despliegues multi-mercado y productos digitales del ecosistema EnergyAsset.",
    stack: [
      "React",
      "TypeScript",
      "NestJS",
      "AWS Lambda",
      "PostgreSQL",
      "Serverless",
    ],
    dates: "Septiembre 2025 - Actualidad",
    imageUrl: "/images/energyassetweb.jpg",
    website: "https://energyasset.cl",
    highlight: "Tecnologia, producto e infraestructura cloud",
  },
  {
    company: "Evol Services",
    role: "Desarrollador Front-End",
    description:
      "Desarrollo de aplicaciones web para el sector energetico, conectando interfaces React con servicios backend en Java Spring y NestJS.",
    stack: ["React", "Redux", "TypeScript", "Java Spring", "NestJS", "PostgreSQL"],
    dates: "Octubre 2023 - Septiembre 2025",
    imageUrl: "/images/evolbanner.png",
    website: "https://services.evol.energy",
    highlight: "Operacion interna, datos y eficiencia",
  },
  {
    company: "Comunidad Hispano",
    role: "Desarrollador Front-End",
    description:
      "Interfaces para una comunidad de videojuegos con Next.js, React, Tailwind, shadcn y autenticacion con NextAuth.",
    stack: ["Next.js", "React", "Tailwind", "shadcn", "NextAuth"],
    dates: "Octubre 2023 - Actualidad",
    imageUrl: "/images/fivem.jpg",
    website: "https://comunidad-hispano.com",
    highlight: "UX para comunidad y autenticacion",
  },
  {
    company: "Freelance",
    role: "Desarrollador Web",
    description:
      "Sitios a medida para clientes: talleres, entrenadores, restobares y negocios que necesitaban presencia web clara, rapida y administrable.",
    stack: ["React", "Bootstrap", "Tailwind", "PHP", "SEO", "REST APIs"],
    dates: "Enero 2022 - Actualidad",
    imageUrl: "/images/freelancebanner.png",
    website: "https://tallerdypfenixspa.cl",
    highlight: "Clientes reales y entregas completas",
  },
  {
    company: "Red de HQS",
    role: "Desarrollador Front-End",
    description:
      "Construccion de sitios corporativos y de reservas, priorizando performance, accesibilidad, SEO y experiencia clara para usuarios finales.",
    stack: ["React", "Bootstrap", "TypeScript", "HTML", "CSS", "Lighthouse"],
    dates: "Enero 2023 - Abril 2023",
    imageUrl: "/images/hqsbanner.png",
    website: "https://hqsconsultores.cl",
    highlight: "Web corporativa y reservas",
  },
];

const WorkExperience = () => {
  return (
    <section id="workEx" className="bg-white px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6e6e73]">
            Experiencia
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-[#1d1d1f] sm:text-5xl">
            Trabajo aplicado en productos, clientes y sistemas internos.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {experiences.map((exp) => (
            <article
              key={exp.company}
              className="group grid overflow-hidden rounded-[2rem] border border-black/10 bg-[#f5f5f7] shadow-sm md:grid-cols-[0.9fr_1.1fr]"
            >
              <div className="relative min-h-64 overflow-hidden">
                <img
                  src={exp.imageUrl}
                  alt={exp.company}
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-full bg-white/85 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#1d1d1f] backdrop-blur">
                  {exp.dates}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.02em] text-[#1d1d1f]">
                      {exp.company}
                    </h3>
                    <p className="mt-1 font-semibold text-[#0071e3]">
                      {exp.role}
                    </p>
                  </div>
                  <a
                    href={exp.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-black/10 bg-white text-[#1d1d1f] shadow-sm transition hover:border-[#0071e3]/40 hover:text-[#0071e3]"
                    aria-label={`Abrir sitio de ${exp.company}`}
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>

                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#6e6e73]">
                  {exp.highlight}
                </p>
                <p className="mt-4 leading-7 text-[#424245]">
                  {exp.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {exp.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-white px-3 py-2 text-sm text-[#424245] shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
