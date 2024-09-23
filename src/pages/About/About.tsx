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
        <FaPerson size={40} className="animate-bounce" />
        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wide">
          Acerca de mí
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
        <div className="lg:col-span-4" data-aos="fade-right">
          <img
            src="../public/assets/me.jpg"
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
                <strong className="mr-2">Nacimiento:</strong>
                <span>25 Dic 2002</span>
              </li>
              <li className="flex items-center text-white">
                <FaChevronRight color="#4ade80" className="mr-2" />
                <strong className="mr-2">Website:</strong>
                <span>www.alejandrovgallardo.com</span>
              </li>
              <li className="flex items-center text-white">
                <FaChevronRight color="#4ade80" className="mr-2" />
                <strong className="mr-2">Teléfono:</strong>
                <span>+569 5486 2744</span>
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
                <strong className="mr-2">Edad:</strong>
                <span>21</span>
              </li>
              <li className="flex items-center text-white">
                <FaChevronRight color="#4ade80" className="mr-2" />
                <strong className="mr-2">Grade:</strong>
                <span>Junior</span>
              </li>
              <li className="flex items-center text-white">
                <FaChevronRight color="#4ade80" className="mr-2" />
                <strong className="mr-2">Email:</strong>
                <span>contacto@alejandrovgallardo.com</span>
              </li>
              <li className="flex items-center text-white">
                <FaChevronRight color="#4ade80" className="mr-2" />
                <strong className="mr-2">Freelance:</strong>
                <span>Disponible</span>
              </li>
            </ul>
          </div>
          <p className="mt-2 text-white">
            Soy un desarrollador front-end apasionado por la creación de sitios
            web atractivos y funcionales, con un sólido historial en la
            implementación de diseños responsivos y la integración de
            tecnologías modernas como HTML5, CSS3 y JavaScript. He trabajado en
            una amplia gama de proyectos, desde sitios web simples hasta
            aplicaciones web complejas, siempre enfocado en brindar soluciones
            innovadoras y eficientes.
          </p>

          <p className="mt-2 text-white">
            Tengo experiencia en el uso de frameworks y librerías populares como
            Bootstrap y jQuery, y también he desarrollado habilidades en la
            programación del lado del servidor con PHP. Además, he ampliado mi
            expertise al trabajar con React y TypeScript para el desarrollo de
            interfaces de usuario dinámicas y escalables.
          </p>

          {showMore && (
            <>
              <p className="mt-2 text-white">
                En el ámbito del backend, tengo experiencia con Java Spring, lo
                que me permite crear aplicaciones robustas y seguras. También
                soy competente en la gestión de bases de datos, específicamente
                con PostgreSQL, lo que garantiza una integración fluida y
                eficiente de los datos en mis proyectos.
              </p>

              <p className="mt-2 text-white">
                Me mantengo al tanto de las últimas tendencias en diseño y
                desarrollo web para ofrecer siempre las mejores soluciones a mis
                clientes, combinando creatividad y tecnología para crear
                experiencias web excepcionales.
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
