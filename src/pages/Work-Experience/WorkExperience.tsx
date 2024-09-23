import { FaGlobe, FaLinkedin } from "react-icons/fa";

const experiences = [
  {
    company: "Red de HQS",
    role: "Desarrollador Front-End",
    description:
      "Ingresé como desarrollador front-end para trabajar en los sitios web de la red de HQS, desarrollando las páginas hqsconsultores.cl y bar88.cl. Ambas fueron desarrolladas utilizando React y Bootstrap, enfocándome en crear interfaces intuitivas y eficientes que mejoran la experiencia de usuario.",
    stack: [
      "Desarrollo front-end: React, Bootstrap, TypeScript, HTML, CSS",
      "Optimización de rendimiento: Webpack, Lighthouse",
      "Control de versiones: Git, GitHub",
      "Implementación de SEO y accesibilidad web",
    ],
    dates: "ENERO 2023 - ABRIL 2023",
    imageUrl: "/images/hqsbanner.png",
    website: "https://hqsconsultores.cl",
    linkedin: "#",
  },
  {
    company: "Freelance",
    role: "Desarrollador Web Freelance",
    description:
      "Trabajé como desarrollador web freelance, creando páginas web personalizadas para diferentes clientes. Desarrollé proyectos como tallerdypfenixspa.cl y entrenandocondiego.page.dev, además de varios sitios privados. Me especialicé en la creación de soluciones front-end a medida, proporcionando un diseño visual atractivo y funcionalidad avanzada.",
    stack: [
      "Desarrollo front-end: React, Bootstrap, Tailwind CSS, TypeScript",
      "Diseño UI/UX: Adobe XD, Figma",
      "Implementación de SEO y accesibilidad web",
      "Integración de API REST",
    ],
    dates: "MAYO 2023 - OCTUBRE 2023",
    imageUrl: "/images/freelancebanner.png",
    website: "https://tallerdypfenixspa.cl",
    linkedin: "#",
  },
  {
    company: "Evol Services",
    role: "Desarrollador Junior Full Stack",
    description:
      "Actualmente trabajo en Evol Services, una empresa del sector energético, como desarrollador junior full stack. Me encargo del desarrollo de aplicaciones web utilizando React para el front-end y Java Spring para el backend. Trabajo en estrecha colaboración con los equipos de ingeniería para implementar soluciones innovadoras que mejoren la eficiencia operativa de la empresa.",
    stack: [
      "Desarrollo front-end: React, Redux, TypeScript",
      "Desarrollo back-end: Java Spring",
      "Base de datos: PostgreSQL",
      "DevOps: Docker",
    ],
    dates: "OCTUBRE 2023 - ACTUALIDAD",
    imageUrl: "/images/evolbanner.png",
    website: "https://services.evol.energy",
    linkedin: "#",
  },
  {
    company: "Comunidad Hispano",
    role: "Desarrollador Front-End",
    description:
      "Trabajo de manera paralela como desarrollador front-end para Comunidad Hispano, una amplia comunidad de servidores de videojuegos. Desarrollo interfaces intuitivas y dinámicas utilizando tecnologías modernas como React, Tailwind CSS y Next.js, enfocándome en mejorar la experiencia de usuario y la seguridad de la autenticación con NextAuth.",
    stack: [
      "Desarrollo front-end: React, Tailwind CSS, Shadcn",
      "Framework: Next.js",
      "Autenticación: NextAuth",
    ],
    dates: "JULIO 2024 - ACTUALIDAD",
    imageUrl: "/images/hispanobanner.png",
    website: "https://comunidad-hispano.com",
    linkedin: "#",
  },
];

const WorkExperience = () => {
  return (
    <section id="workEx" className="px-6 py-12 md:px-12 lg:px-28 lg:py-16">
      <div className="text-center mb-10">
        <div className="flex justify-center items-center gap-4 text-white">
          <FaGlobe size={40} className="hover:animate-bounce" />
          <h2 className="text-4xl font-bold uppercase tracking-wide">
            Experiencia Laboral
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:portrait:grid-cols-2 lg:landscape:grid-cols-4 gap-8 md:gap-12">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col h-full"
          >
            <img
              src={exp.imageUrl}
              alt={exp.company}
              className="w-full h-40 object-cover rounded-md mb-4"
            />

            <div className="flex flex-col flex-grow">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-2xl font-semibold">{exp.company}</h3>
                <div className="flex gap-2">
                  <a
                    href={exp.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGlobe
                      className="text-blue-500 hover:text-blue-300"
                      size={20}
                    />
                  </a>
                  <a
                    href={exp.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin
                      className="text-blue-500 hover:text-blue-300"
                      size={20}
                    />
                  </a>
                </div>
              </div>
              <h4 className="text-xl font-medium text-green-400">{exp.role}</h4>
              <p className="text-gray-400 mb-4">{exp.description}</p>
              <ul className="text-gray-400 mb-4 flex-grow">
                {exp.stack.map((item, idx) => (
                  <li key={idx} className="mb-1">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-gray-500 mt-auto">{exp.dates}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
