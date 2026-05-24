import { FaChevronRight, FaMapMarkerAlt, FaRocket } from "react-icons/fa";

const focusAreas = [
  "Interfaces React/Next con TypeScript, Tailwind, shadcn/Radix y estados predecibles.",
  "Backends NestJS con JWT, validaciones, PostgreSQL, Sequelize/TypeORM e integraciones REST.",
  "Automatizacion y despliegue serverless en AWS con Lambda, S3, SQS y Serverless Framework.",
  "Productos para clientes reales: reservas, sitios corporativos, comunidades, dashboards y herramientas internas.",
];

const AboutMe = () => {
  return (
    <section id="about" className="bg-white px-5 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6e6e73]">
            Perfil
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-[#1d1d1f] sm:text-5xl">
            Desarrollo productos que se pueden usar, mantener y escalar.
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#424245]">
            Mi trabajo vive entre la interfaz y la arquitectura: traduzco ideas
            de negocio a experiencias web claras, conectadas con APIs,
            autenticacion, datos y despliegues que soportan operacion diaria.
          </p>

          <div className="mt-8 grid gap-3">
            {[
              ["Nombre", "Alejandro Valenzuela"],
              ["Ciudad", "Santiago, Chile"],
              ["Email", "contacto@alejandrovgallardo.com"],
              ["Freelance", "Disponible"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex items-center gap-3 border-b border-black/10 pb-3 text-[#424245]"
              >
                <FaChevronRight className="text-[#0071e3]" />
                <strong className="min-w-24 font-semibold text-[#1d1d1f]">
                  {label}
                </strong>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-5">
          <div className="rounded-[2rem] border border-black/10 bg-[#f5f5f7] p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-[#0071e3] shadow-sm">
                <FaRocket />
              </span>
              <div>
                <h3 className="text-2xl font-semibold tracking-[-0.02em] text-[#1d1d1f]">
                  Lo que hago bien
                </h3>
                <p className="text-sm text-[#6e6e73]">
                  Basado en mi portafolio.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {focusAreas.map((area) => (
                <div
                  key={area}
                  className="rounded-2xl border border-black/10 bg-white p-4 text-sm leading-6 text-[#424245] shadow-sm"
                >
                  {area}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm">
              <FaMapMarkerAlt className="text-2xl text-[#0071e3]" />
              <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em] text-[#1d1d1f]">
                Mirada de producto
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#6e6e73]">
                He trabajado con rubros distintos: energia, comunidades de
                videojuegos, servicios profesionales, fitness, restobares y
                talleres. Eso me permite adaptar el tono, la UI y la
                arquitectura al problema real.
              </p>
            </div>
            <div className="rounded-[2rem] border border-black/10 bg-[#1d1d1f] p-6 shadow-sm">
              <SiSpark />
              <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em] text-white">
                Stack con criterio
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#d2d2d7]">
                No se trata solo de usar React o NestJS. Se trata de elegir
                patrones que reduzcan friccion: componentes reutilizables,
                rutas claras, servicios tipados, validaciones y despliegues
                repetibles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SiSpark = () => (
  <span className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-sm font-semibold text-white">
    TS
  </span>
);

export default AboutMe;
