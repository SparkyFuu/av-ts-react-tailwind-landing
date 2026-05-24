import { FaChevronRight, FaMapMarkerAlt, FaRocket } from "react-icons/fa";

const focusAreas = [
  "Interfaces React/Next con TypeScript, Tailwind, shadcn/Radix y estados predecibles.",
  "Backends NestJS con JWT, validaciones, PostgreSQL, Sequelize/TypeORM e integraciones REST.",
  "Automatizacion y despliegue serverless en AWS con Lambda, S3, SQS y Serverless Framework.",
  "Productos para clientes reales: reservas, sitios corporativos, comunidades, dashboards y herramientas internas.",
];

const AboutMe = () => {
  return (
    <section id="about" className="bg-[#0b1718] px-5 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.28em] text-[#34d399]">
            Perfil
          </p>
          <h2 className="mt-4 text-4xl font-black text-white sm:text-5xl">
            Desarrollo productos que se pueden usar, mantener y escalar.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
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
                className="flex items-center gap-3 border-b border-white/10 pb-3 text-slate-200"
              >
                <FaChevronRight className="text-[#f97316]" />
                <strong className="min-w-24 text-white">{label}</strong>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-5">
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-md bg-[#34d399]/10 text-[#34d399]">
                <FaRocket />
              </span>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  Lo que hago bien
                </h3>
                <p className="text-sm text-slate-400">
                  Basado en tu portafolio actual y repos de GitHub.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {focusAreas.map((area) => (
                <div
                  key={area}
                  className="rounded-md border border-white/10 bg-[#071013] p-4 text-sm leading-6 text-slate-300"
                >
                  {area}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-lg border border-white/10 bg-[#12312b] p-6">
              <FaMapMarkerAlt className="text-2xl text-[#34d399]" />
              <h3 className="mt-4 text-xl font-bold text-white">
                Mirada de producto
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                He trabajado con rubros distintos: energia, comunidades de
                videojuegos, servicios profesionales, fitness, restobares y
                talleres. Eso me permite adaptar el tono, la UI y la
                arquitectura al problema real.
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-[#2a1f12] p-6">
              <SiSpark />
              <h3 className="mt-4 text-xl font-bold text-white">
                Stack con criterio
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
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
  <span className="grid h-8 w-8 place-items-center rounded-md bg-[#f97316]/10 text-lg font-black text-[#f97316]">
    TS
  </span>
);

export default AboutMe;
