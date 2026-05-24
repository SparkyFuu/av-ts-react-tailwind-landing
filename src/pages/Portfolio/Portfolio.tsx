import React, { useMemo, useState } from "react";
import { FaChevronDown, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

type ProjectType = "web" | "app" | "backend";

const projects: Array<{
  title: string;
  description: string;
  image: string;
  type: ProjectType;
  link?: string;
  links?: Array<{ label: string; href: string }>;
  repo?: string;
  stack: string[];
  impact: string;
}> = [
  {
    title: "EnergyAsset Web Multi-Mercado",
    description:
      "Ecosistema de paginas comerciales para EnergyAsset desplegado por mercado, con builds separados, dominios por pais y automatizacion de deploy via SSH/rsync.",
    image: "/images/energyassetweb.jpg",
    type: "web",
    repo: "https://github.com/SparkyFuu/ts-react-front-ea",
    links: [
      { label: "CL", href: "https://energyasset.cl" },
      { label: "ES", href: "https://energyasset.es" },
      { label: "AR", href: "https://energyasset.com.ar" },
      { label: "PE", href: "https://energyasset.pe" },
      { label: "PA", href: "https://www.energyasset.com.pa" },
      { label: "GT", href: "https://energyasset.com.gt" },
      { label: "DO", href: "https://energyasset.com.do" },
      { label: "CO", href: "https://energyasset.co" },
    ],
    stack: [
      "React 18",
      "TypeScript",
      "Vite",
      "Tailwind",
      "Recharts",
      "react-slick",
      "GLightbox",
      "Isotope",
      "SSH deploy",
    ],
    impact: "Una base front desplegada para multiples paises y dominios.",
  },
  {
    title: "EnergyAsset Backend Serverless",
    description:
      "Backend NestJS para EnergyAsset desplegable con Serverless Framework, preparado para Lambda/API Gateway, archivos, colas, secretos, correo, reportes y datos relacionales.",
    image: "/images/energyassetweb.jpg",
    type: "backend",
    repo: "https://github.com/SparkyFuu/sls-aws-nest-backend-ea",
    stack: [
      "NestJS 11",
      "AWS Lambda",
      "S3",
      "SQS",
      "Secrets Manager",
      "SendGrid",
      "PostgreSQL",
      "Sequelize",
      "JWT",
      "Jest",
    ],
    impact: "API cloud con autenticacion, archivos, colas y reporteria.",
  },
  {
    title: "EnergyAsset Software",
    description:
      "Software web para operacion EnergyAsset, construido como aplicacion React moderna con gestion de estado, reportes PDF, drag and drop, dashboards y consumo de APIs por ambiente.",
    image: "/images/energyassetweb.jpg",
    type: "web",
    link: "https://tups.cl",
    repo: "https://github.com/SparkyFuu/ts-react-front-sw-ea",
    stack: [
      "React 19",
      "TypeScript 5.9",
      "Vite 7",
      "Redux Toolkit",
      "Redux Persist",
      "Radix UI",
      "Tailwind 4",
      "Recharts",
      "React PDF",
      "dnd-kit",
      "Axios",
      "JWT",
    ],
    impact: "Herramienta interna enfocada en operacion y datos.",
  },
  {
    title: "EnergyAsset Front Espana",
    description:
      "Frontend/landing para la operacion de EnergyAsset en Espana, construido sobre React, TypeScript y Vite con componentes visuales, carruseles y visualizacion de informacion.",
    image: "/images/energyassetes.jpg",
    type: "web",
    repo: "https://github.com/SparkyFuu/ts-react-front-ea-esp",
    stack: [
      "React 18",
      "TypeScript",
      "Vite",
      "Tailwind",
      "Recharts",
      "react-slick",
      "GLightbox",
      "Isotope",
    ],
    impact: "Presencia web especializada para mercado Espana.",
  },
  {
    title: "SEF Landing",
    description:
      "Landing multilenguaje para SEF con deteccion de idioma, traducciones via i18next, secciones visuales, charts y experiencia responsive.",
    image: "/images/sef.jpg",
    type: "web",
    link: "https://santiagoeconomicforum.com",
    repo: "https://github.com/SparkyFuu/ts-react-landing-sef",
    stack: [
      "React 18",
      "TypeScript",
      "Vite",
      "Tailwind",
      "i18next",
      "react-i18next",
      "Recharts",
      "react-slick",
    ],
    impact: "Landing internacionalizable con contenido dinamico.",
  },
  {
    title: "EnergyAsset Management Software",
    description:
      "Aplicacion de gestion para EnergyAsset Management, con arquitectura frontend moderna, componentes reutilizables, autenticacion, persistencia de estado y flujos pensados para trabajo diario.",
    image: "/images/eam.jpg",
    type: "web",
    repo: "https://github.com/SparkyFuu/ts-react-front-sw-eam",
    stack: [
      "React 19",
      "TypeScript 5.9",
      "Vite 7",
      "Redux Toolkit",
      "Redux Persist",
      "Radix UI",
      "Tailwind 4",
      "Recharts",
      "Axios",
      "JWT",
    ],
    impact: "Software de gestion para procesos internos.",
  },
  {
    title: "EnergyAsset Management Web",
    description:
      "Pagina web corporativa de EnergyAsset Management, creada para presentar servicios, confianza comercial y contacto de manera clara y responsive.",
    image: "/images/eam.jpg",
    type: "web",
    link: "https://eam.capital",
    repo: "https://github.com/SparkyFuu/ts-react-landing-eam",
    stack: [
      "React 18",
      "TypeScript",
      "Vite",
      "Tailwind",
      "react-slick",
      "GLightbox",
      "Isotope",
    ],
    impact: "Landing corporativa para posicionamiento y conversion.",
  },
  {
    title: "Hermes Pisos",
    description:
      "Sitio comercial para Hermes Pisos, orientado a mostrar servicios, generar confianza y transformar visitas en solicitudes de contacto.",
    image: "/images/hermespisos.jpg",
    type: "web",
    link: "https://hermespisos.cl",
    repo: "https://github.com/SparkyFuu/ts-react-landing-hermes",
    stack: [
      "React 18",
      "TypeScript",
      "Vite",
      "Tailwind",
      "react-slick",
      "GLightbox",
      "Isotope",
      "SEO",
    ],
    impact: "Web de servicios con foco comercial y responsive.",
  },
  {
    title: "Servidor FiveM RP S8",
    description:
      "Programacion de servidor FiveM roleplay para Comunidad Hispano, con scripts de gameplay, logica de servidor, recursos y personalizacion de experiencia in-game.",
    image: "/images/fivem.jpg",
    type: "app",
    link: "https://comunidad-hispano.com",
    repo: "https://github.com/fsandov/ch-fivem-rp-s8",
    stack: ["FiveM", "Lua", "Server scripts", "Client scripts", "RP systems"],
    impact: "Desarrollo de sistemas jugables y logica de servidor.",
  },
  {
    title: "Hegemonik Backend Serverless",
    description:
      "API NestJS preparada para AWS Lambda con integraciones S3/SQS, JWT, PostgreSQL, Sequelize, procesamiento de CSV/Excel y scripts de deploy por stage.",
    image: "/images/hegemonik.jpg",
    type: "backend",
    repo: "https://github.com/SparkyFuu/sls-aws-nest-backend-hegemonik",
    stack: ["NestJS", "AWS Lambda", "S3", "SQS", "PostgreSQL"],
    impact: "Arquitectura backend lista para operar en cloud.",
  },
  {
    title: "Front TUPS",
    description:
      "Frontend React moderno con Redux Toolkit, Radix UI, Tailwind 4, Recharts, persistencia de estado y consumo de APIs protegidas.",
    image: "/images/tupscl.jpg",
    type: "web",
    link: "https://tups.cl",
    repo: "https://github.com/SparkyFuu/ts-react-front-tups",
    stack: ["React 19", "Redux", "Radix", "Recharts", "Tailwind"],
    impact: "Dashboard y flujos internos con componentes reutilizables.",
  },
  {
    title: "Front Hegemonik",
    description:
      "Aplicacion React con visualizacion de datos, HLS para video, tus-js-client para cargas resumibles, auth y una base UI orientada a producto.",
    image: "/images/hegemonik.jpg",
    type: "web",
    link: "https://hegemonik.com",
    repo: "https://github.com/SparkyFuu/ts-react-front-hegemonic",
    stack: ["React", "HLS", "TUS Upload", "Redux", "Radix"],
    impact: "Manejo de media, upload y estado de aplicacion.",
  },
  {
    title: "Comunidad Hispano",
    description:
      "Plataforma web para comunidad de videojuegos con React, Next.js, Tailwind, shadcn y autenticacion moderna.",
    image: "/images/portfolio-6.jpg",
    type: "web",
    link: "https://comunidad-hispano.com",
    stack: ["Next.js", "React", "Tailwind", "shadcn", "NextAuth"],
    impact: "Experiencia comunitaria con identidad visual y acceso seguro.",
  },
  {
    title: "Reminder Glossary",
    description:
      "Sitio web construido con React/Next, Tailwind y shadcn, orientado a una experiencia clara, responsive y mantenible.",
    image: "/images/reminderglosaryphoto.jpg",
    type: "web",
    link: "https://reminderglossary.com",
    stack: ["React", "Next.js", "Tailwind", "shadcn"],
    impact: "Producto web simple con buen polish visual.",
  },
  {
    title: "HQS Consultores",
    description:
      "Sitio corporativo para consultores auditores, trabajado con foco en informacion clara, contacto, SEO y performance.",
    image: "/images/hqsconsultores-details-1.jpg",
    type: "web",
    link: "https://hqsconsultores.cl",
    stack: ["React", "Bootstrap", "SEO", "Lighthouse"],
    impact: "Presencia digital profesional para servicios B2B.",
  },
  {
    title: "Bar88",
    description:
      "Pagina de contacto y reservas para restobar, con interfaz directa para conversion y estructura pensada para usuarios moviles.",
    image: "/images/bar88-details-1.jpg",
    type: "web",
    link: "https://Bar88.cl",
    stack: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP"],
    impact: "Reservas y contacto con baja friccion.",
  },
  {
    title: "UptoLimitGym 2.0",
    description:
      "Aplicacion de escritorio para gimnasio con mantenedores de clientes y entrenadores, informes de ventas e informes personales.",
    image: "/images/portfolio-3.jpg",
    type: "app",
    stack: ["Java", "MySQL", "Reportes", "Desktop"],
    impact: "Gestion operacional para gimnasio.",
  },
  {
    title: "Taller DyP FenixSpa",
    description:
      "Sitio de contacto e informacion para empresa de desabolladura y pintura, construido para convertir busquedas locales en clientes.",
    image: "/images/portfolio-4.jpg",
    type: "web",
    link: "https://tallerdypfenixspa.cl",
    stack: ["React", "Bootstrap", "SEO", "Responsive"],
    impact: "Web comercial enfocada en confianza y contacto.",
  },
];

const filters: Array<{ label: string; value: ProjectType | "all" }> = [
  { label: "Todo", value: "all" },
  { label: "Web", value: "web" },
  { label: "Backend", value: "backend" },
  { label: "Apps", value: "app" },
];

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectType | "all">("all");
  const [openLinksFor, setOpenLinksFor] = useState<string | null>(null);

  const visibleProjects = useMemo(() => {
    if (activeFilter === "all") {
      return projects;
    }

    return projects.filter((project) => project.type === activeFilter);
  }, [activeFilter]);

  return (
    <section id="portfolio" className="bg-[#f5f5f7] px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6e6e73]">
              Proyectos
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.035em] text-[#1d1d1f] sm:text-5xl">
              Evidencia concreta: clientes, dashboards, backend cloud y apps.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter.value}
                type="button"
                onClick={() => setActiveFilter(filter.value)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeFilter === filter.value
                    ? "bg-[#1d1d1f] text-white"
                    : "border border-black/10 bg-white text-[#424245] shadow-sm hover:border-[#0071e3]/40 hover:text-[#0071e3]"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#1d1d1f] backdrop-blur">
                  {project.type}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-semibold tracking-[-0.02em] text-[#1d1d1f]">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-[#f5f5f7] text-[#1d1d1f] transition hover:border-[#0071e3]/40 hover:text-[#0071e3]"
                        aria-label={`Repositorio de ${project.title}`}
                      >
                        <FaGithub />
                      </a>
                    )}
                    {project.links && (
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() =>
                            setOpenLinksFor((current) =>
                              current === project.title ? null : project.title
                            )
                          }
                          className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-[#f5f5f7] text-[#1d1d1f] transition hover:border-[#0071e3]/40 hover:text-[#0071e3]"
                          aria-label={`Ver opciones de ${project.title}`}
                          aria-expanded={openLinksFor === project.title}
                        >
                          <FaChevronDown />
                        </button>
                        {openLinksFor === project.title && (
                          <div className="absolute right-0 top-12 z-20 w-48 rounded-2xl border border-black/10 bg-white p-2 shadow-2xl shadow-black/20">
                            {project.links.map((link) => (
                              <a
                                key={link.href}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between rounded-xl px-3 py-2 text-sm font-semibold text-[#424245] transition hover:bg-[#f5f5f7] hover:text-[#0071e3]"
                              >
                                <span>{link.label}</span>
                                <FaExternalLinkAlt className="text-xs" />
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-[#f5f5f7] text-[#1d1d1f] transition hover:border-[#0071e3]/40 hover:text-[#0071e3]"
                        aria-label={`Abrir ${project.title}`}
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#6e6e73]">
                  {project.impact}
                </p>
                <p className="mt-4 leading-7 text-[#424245]">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-[#f5f5f7] px-3 py-2 text-sm text-[#424245]"
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

export default Portfolio;
