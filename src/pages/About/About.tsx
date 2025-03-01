import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";

const AboutMe = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <section id="about" className="px-6 py-12 md:px-12 lg:px-28 lg:py-16">
      <div className="flex justify-center items-center gap-4 text-white">
        <FaPerson size={40} className="hover:animate-bounce" />
        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wide">
          Acerca de mí
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
        <div className="lg:col-span-4" data-aos="fade-right">
          <img
            src="/images/menew.jpg"
            alt=""
            className="w-full h-auto rounded shadow-lg"
          />
        </div>
        <div className="lg:col-span-8 pt-4 lg:pt-0" data-aos="fade-left">
          <h3 className="text-lg md:text-xl font-bold text-[#4ade80] mb-4">
            Front-End Dev, Experiencia en creación de sitios web
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="space-y-4 md:space-y-9">
              <li className="flex items-center text-white">
                <FaChevronRight color="#4ade80" className="mr-2" />
                <strong className="mr-2">Nombre:</strong>
                <span>Alejandro Valenzuela</span>
              </li>
              <li className="flex items-center text-white">
                <FaChevronRight color="#4ade80" className="mr-2" />
                <strong className="mr-2">Stack:</strong>
                <span>React, NodeJs, NestJs, TypeScript</span>
              </li>
              <li className="flex items-center text-white">
                <FaChevronRight color="#4ade80" className="mr-2" />
                <strong className="mr-2">Ciudad:</strong>
                <span>Santiago, Chile</span>
              </li>
            </ul>
            <ul className="space-y-4 md:space-y-9">
              <li className="flex items-center text-white">
                <FaChevronRight color="#4ade80" className="mr-2" />
                <strong className="mr-2">Email:</strong>
                <a href="mailto:djehjjkf@gmail.com" className="text-white">
                  <span>contacto@alejandrovgallardo.com</span>
                </a>
              </li>
              <li className="flex items-center text-white">
                <FaChevronRight color="#4ade80" className="mr-2" />
                <strong className="mr-2">Freelance:</strong>
                <span>Disponible</span>
              </li>
            </ul>
          </div>
          <p className="mt-4 text-white text-justify">
            Soy un desarrollador full stack apasionado por la creación de
            soluciones web integrales y robustas, con un sólido historial en el
            diseño e implementación de aplicaciones escalables y eficientes. He
            trabajado en proyectos que van desde sistemas sencillos hasta
            plataformas complejas, siempre enfocado en brindar soluciones
            innovadoras que combinan lo mejor del front-end y el back-end.
          </p>

          <p className="mt-2 text-white text-justify">
            En el front-end, me especializo en React para desarrollar interfaces
            de usuario dinámicas y responsivas, ofreciendo experiencias modernas
            y atractivas. En el back-end, cuento con amplia experiencia
            utilizando NestJS y Java Spring, lo que me permite crear
            aplicaciones seguras y de alto rendimiento. Además, manejo ORMs como
            seuquelice y TypeORM para optimizar la integración y gestión de
            bases de datos.
          </p>

          {showMore && (
            <>
              <p className="mt-2 text-white text-justify">
                Me mantengo actualizado con las últimas tendencias en tecnología
                y desarrollo, lo que me permite ofrecer soluciones que se
                adaptan a las necesidades actuales de mis clientes y garantizan
                experiencias digitales excepcionales.
              </p>
            </>
          )}

          <button
            className="text-[#4ade80] bg-[#090029] font-bold mt-4 focus:outline-none"
            onClick={handleToggle}
          >
            {showMore ? "Leer menos..." : "Leer más..."}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
