import { useState } from "react";
import { FaBars, FaCode, FaGithub, FaTimes } from "react-icons/fa";

const links = [
  { label: "Inicio", id: "home" },
  { label: "Perfil", id: "about" },
  { label: "Stack", id: "skills" },
  { label: "Experiencia", id: "workEx" },
  { label: "Proyectos", id: "portfolio" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    event.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#071013]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a
          href="#home"
          onClick={(event) => scrollToSection(event, "home")}
          className="flex items-center gap-3 text-slate-50"
          aria-label="Ir al inicio"
        >
          <span className="grid h-10 w-10 place-items-center rounded-md border border-[#34d399]/40 bg-[#34d399]/10 text-[#34d399]">
            <FaCode />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold uppercase tracking-[0.28em] text-[#34d399]">
              SparkyFuu
            </span>
            <span className="block text-base font-bold">Alejandro V.</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(event) => scrollToSection(event, link.id)}
              className="text-sm font-medium text-slate-300 transition hover:text-[#34d399]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/SparkyFuu"
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-10 w-10 place-items-center rounded-md border border-white/10 bg-white/5 text-slate-100 transition hover:border-[#34d399]/50 hover:text-[#34d399]"
            aria-label="GitHub de Alejandro"
          >
            <FaGithub />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((value) => !value)}
          className="grid h-10 w-10 place-items-center rounded-md border border-white/10 bg-white/5 text-slate-100 md:hidden"
          aria-label="Abrir menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-white/10 bg-[#071013] px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(event) => scrollToSection(event, link.id)}
                className="rounded-md px-3 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/5 hover:text-[#34d399]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
