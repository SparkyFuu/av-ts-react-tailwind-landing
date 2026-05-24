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

const socialLinks = [
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
          className="h-full w-full object-cover opacity-[0.08]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(0,113,227,0.16),transparent_28rem),linear-gradient(180deg,#fbfbfd_0%,#f5f5f7_62%,#ffffff_100%)]" />
      </div>

      <div className="relative mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-12 px-5 pb-16 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#6e6e73] shadow-sm backdrop-blur">
            Disponible para productos web y sistemas internos
          </div>

          <h1 className="text-5xl font-semibold leading-[0.98] tracking-[-0.04em] text-[#1d1d1f] sm:text-6xl lg:text-7xl">
            Alejandro Valenzuela
          </h1>

          <p className="mt-6 max-w-2xl text-xl leading-8 text-[#424245]">
            Desarrollador full stack en Santiago, Chile. Construyo interfaces
            React limpias, dashboards con datos, APIs en NestJS y despliegues
            serverless con foco en rendimiento, seguridad y operacion real.
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
              className="rounded-full bg-[#0071e3] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0077ed]"
            >
              Ver proyectos
            </a>
            <a
              href="mailto:contacto@alejandrovgallardo.com"
              className="rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-[#1d1d1f] shadow-sm transition hover:border-[#0071e3]/40 hover:text-[#0071e3]"
            >
              Hablemos
            </a>
          </div>

          <div className="mt-9 grid gap-3 sm:grid-cols-3">
            {proofPoints.map((point) => (
              <div
                key={point.value}
                className="rounded-2xl border border-black/10 bg-white/80 p-5 shadow-sm backdrop-blur"
              >
                <strong className="block text-lg font-semibold text-[#1d1d1f]">
                  {point.value}
                </strong>
                <span className="mt-1 block text-sm leading-6 text-[#6e6e73]">
                  {point.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white/80 p-3 shadow-[0_24px_80px_rgba(0,0,0,0.12)] backdrop-blur">
            <img
              src="/images/menew.jpg"
              alt="Alejandro Valenzuela"
              className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
            />
            <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/50 bg-white/80 p-4 shadow-lg backdrop-blur-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#6e6e73]">
                Front + Back + Cloud
              </p>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {stackSignals.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 rounded-full bg-[#f5f5f7] px-3 py-2 text-sm text-[#1d1d1f]"
                  >
                    <span className="text-[#0071e3]">{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between gap-4">
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-white text-lg text-[#1d1d1f] shadow-sm transition hover:border-[#0071e3]/40 hover:text-[#0071e3]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <button
              type="button"
              onClick={scrollToNextSection}
              className="grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-[#1d1d1f] text-white shadow-sm transition hover:bg-[#0071e3]"
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
