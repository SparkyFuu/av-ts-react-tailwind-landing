import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";
import { FaBriefcase, FaLink } from "react-icons/fa";

const portfolioData = [
  {
    title: "UptoLimitGym",
    description:
      "UptoLimitGym App de escritorio, mantenedor de usuarios simple, programada en Java y MySQL.",
    image: "/images/portfolio-1.jpg",
    category: "filter-app",
    link: "",
  },
  {
    title: "EntrenandoConDiego",
    description:
      "Desarrollo página web de contacto para entrenador de gimnasio, programada en HTML, CSS, JavaScript, Bootstrap.",
    image: "/images/portfolio-2.jpg",
    category: "filter-web",
    link: "https://entrenandocondiego.pages.dev",
  },
  {
    title: "UptoLimitGym 2.0",
    description:
      "UptoLimitGym 2.0 App de escritorio, mantenedor de usuarios (clientes y entrenadores), generador de informes de ventas y informes personales de los clientes del gimnasio, programado en Java y MySQL.",
    image: "/images/portfolio-3.jpg",
    category: "filter-app",
    link: "",
  },
  {
    title: "Bar88",
    description:
      "Desarrollo página web de contacto y reservas para Restobar, programada en HTML, CSS, JavaScript, Bootstrap, jQuery y PHP.",
    image: "/images/bar88-details-1.jpg",
    category: "filter-web",
    link: "https://Bar88.cl",
  },
  {
    title: "Hqs Consultores",
    description:
      "Desarrollo página web de contacto y informaciones para empresa de contadores auditores, programada en HTML, CSS, JavaScript, Bootstrap, jQuery y PHP.",
    image: "/images/hqsconsultores-details-1.jpg",
    category: "filter-web",
    link: "https://hqsconsultores.cl",
  },
  {
    title: "Taller DyP FenixSpa",
    description:
      "Desarrollo página web de contacto y informaciones para empresa de desaboladura y pintura, programada en HTML, CSS, JavaScript, Bootstrap, jQuery y PHP.",
    image: "/images/portfolio-4.jpg",
    category: "filter-web",
    link: "https://tallerdypfenixspa.cl",
  },
  {
    title: "Comunidad Hispano",
    description:
      "Desarrollo página web con tecnologias tales como, react, nextJs, tailwind, shadcn.",
    image: "/images/portfolio-6.jpg",
    category: "filter-web",
    link: "https://comunidad-hispano.com",
  },
];

const Portfolio: React.FC = () => {
  const [filterKey, setFilterKey] = useState<string>("*");
  const isotope = useRef<Isotope | null>(null);

  useEffect(() => {
    if (document.querySelector(".portfolio-container")) {
      isotope.current = new Isotope(".portfolio-container", {
        itemSelector: ".portfolio-item",
        layoutMode: "fitRows",
      });
    }

    return () => {
      isotope.current?.destroy();
    };
  }, []);

  useEffect(() => {
    if (isotope.current) {
      isotope.current.arrange({ filter: filterKey });
    }
  }, [filterKey]);

  useEffect(() => {
    const lightbox = GLightbox({
      selector: ".portfolio-lightbox",
    });

    const detailsLightbox = GLightbox({
      selector: ".portfolio-details-lightbox",
      width: "90%",
      height: "90vh",
    });

    return () => {
      lightbox.destroy();
      detailsLightbox.destroy();
    };
  }, []);

  const handleFilterKeyChange = (key: string) => () => {
    setFilterKey(key);
  };

  return (
    <section id="portfolio" className="text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="flex justify-center items-center gap-4 text-white">
            <FaBriefcase size={40} className="hover:animate-bounce" />
            <h2 className="text-4xl font-bold uppercase tracking-wide">
              Portafolio
            </h2>
          </div>
        </div>

        <div className="flex justify-center mb-8">
          <ul className="flex space-x-3 bg-white/10 px-4 py-2 rounded-full">
            <li
              className={`cursor-pointer px-4 py-2 text-sm font-semibold uppercase ${
                filterKey === "*"
                  ? "bg-[#4ade80] text-white"
                  : "bg-white/10 text-gray-300 hover:bg-[#4ade80] hover:text-white"
              } rounded-md transition-colors duration-300`}
              onClick={handleFilterKeyChange("*")}
            >
              Todo
            </li>
            <li
              className={`cursor-pointer px-4 py-2 text-sm font-semibold uppercase ${
                filterKey === ".filter-app"
                  ? "bg-[#4ade80] text-white"
                  : "bg-white/10 text-gray-300 hover:bg-[#4ade80] hover:text-white"
              } rounded-md transition-colors duration-300`}
              onClick={handleFilterKeyChange(".filter-app")}
            >
              Apps
            </li>
            <li
              className={`cursor-pointer px-4 py-2 text-sm font-semibold uppercase ${
                filterKey === ".filter-web"
                  ? "bg-[#4ade80] text-white"
                  : "bg-white/10 text-gray-300 hover:bg-[#4ade80] hover:text-white"
              } rounded-md transition-colors duration-300`}
              onClick={handleFilterKeyChange(".filter-web")}
            >
              Webs
            </li>
          </ul>
        </div>

        <div className="portfolio-container flex flex-wrap -mx-4">
          {portfolioData.map((item, index) => (
            <div
              key={index}
              className={`portfolio-item w-full md:w-1/2 lg:w-1/3 px-4 mb-8 ${item.category}`}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg bg-gray-800 transition-transform transform hover:scale-105">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                  <p className="text-white text-sm">{item.description}</p>
                  <div className="mt-4 flex space-x-2">
                    {item.link != "" && (
                      <a
                        href={item.link}
                        className="text-white text-2xl"
                        title="Portfolio Details"
                        target="_blank"
                      >
                        <FaLink />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
