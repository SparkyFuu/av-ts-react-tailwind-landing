import {
  FaArrowDown,
  FaAws,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaNodeJs,
  FaReact,
  FaWhatsapp,
} from "react-icons/fa";
import { SiNestjs, SiPostgresql, SiTypescript } from "react-icons/si";
import "./Home.css";

const proofPoints = [
  { value: "React 19", label: "fronts recientes con Redux, Radix y charts" },
  { value: "NestJS + AWS", label: "backend serverless con Lambda, S3 y SQS" },
  { value: "Full stack", label: "productos reales, no solo pantallas bonitas" },
];

const stackSignals = [
  { icon: <FaReact />, label: "React" },
  { icon: <SiTypescript />, label: "TypeScript" },
  { icon: <SiNestjs />, label: "NestJS" },
  { icon: <FaAws />, label: "AWS" },
  { icon: <SiPostgresql />, label: "PostgreSQL" },
  { icon: <FaNodeJs />, label: "Node.js" },
];

const Home = () => {
  const scrollToNextSection = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-24">
      <div className="absolute inset-0">
        <img
          src="/images/bg.jpg"
          alt=""
          className="h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-[linear-gradient(115deg,#071013_0%,rgba(7,16,19,0.92)_43%,rgba(20,83,45,0.68)_100%)]" />
      </div>

      <div className="relative mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-12 px-5 pb-16 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-[#34d399]/30 bg-[#34d399]/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#a7f3d0]">
            Disponible para productos web y sistemas internos
          </div>

          <h1 className="text-5xl font-black leading-[0.98] text-white sm:text-6xl lg:text-7xl">
            Alejandro Valenzuela
          </h1>

          <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-200">
            Desarrollador full stack en Santiago, Chile. Construyo interfaces
            React limpias, dashboards con datos, APIs en NestJS y despliegues
            serverless con foco en rendimiento, seguridad y operación real.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#portfolio"
              onClick={(event) => {
                event.preventDefault();
                document
                  .getElementById("portfolio")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="rounded-md bg-[#34d399] px-5 py-3 text-sm font-black text-[#071013] transition hover:bg-[#6ee7b7]"
            >
              Ver proyectos
            </a>
            <a
              href="mailto:contacto@alejandrovgallardo.com"
              className="rounded-md border border-white/15 bg-white/10 px-5 py-3 text-sm font-bold text-white transition hover:border-[#f97316]/60 hover:text-[#fed7aa]"
            >
              Hablemos
            </a>
          </div>

          <div className="mt-9 grid gap-3 sm:grid-cols-3">
            {proofPoints.map((point) => (
              <div
                key={point.value}
                className="border-l-2 border-[#34d399] bg-white/[0.06] p-4 backdrop-blur"
              >
                <strong className="block text-lg text-white">
                  {point.value}
                </strong>
                <span className="mt-1 block text-sm text-slate-300">
                  {point.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.06] p-4 shadow-2xl shadow-black/40 backdrop-blur">
            <img
              src="/images/menew.jpg"
              alt="Alejandro Valenzuela"
              className="aspect-[4/5] w-full rounded-md object-cover"
            />
            <div className="absolute bottom-8 left-8 right-8 rounded-md border border-white/10 bg-[#071013]/85 p-4 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#34d399]">
                Front + Back + Cloud
              </p>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {stackSignals.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-sm text-slate-100"
                  >
                    <span className="text-[#f97316]">{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between gap-4">
            <div className="flex gap-3">
              {[
                { href: "https://wa.me/", icon: <FaWhatsapp />, label: "WhatsApp" },
                {
                  href: "https://www.instagram.com/_spark.02_/",
                  icon: <FaInstagram />,
                  label: "Instagram",
                },
                {
                  href: "https://github.com/SparkyFuu",
                  icon: <FaGithub />,
                  label: "GitHub",
                },
                {
                  href: "https://www.linkedin.com/in/alejandro-valenzuela-8780442a1/",
                  icon: <FaLinkedin />,
                  label: "LinkedIn",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="grid h-11 w-11 place-items-center rounded-md border border-white/10 bg-white/10 text-lg text-white transition hover:border-[#34d399]/50 hover:text-[#34d399]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <button
              type="button"
              onClick={scrollToNextSection}
              className="grid h-11 w-11 place-items-center rounded-md border border-[#34d399]/40 bg-[#34d399]/10 text-[#34d399] transition hover:bg-[#34d399] hover:text-[#071013]"
              aria-label="Explorar el sitio"
            >
              <FaArrowDown />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
