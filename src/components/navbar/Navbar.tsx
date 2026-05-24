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
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-black/10 bg-white/75 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a
          href="#home"
          onClick={(event) => scrollToSection(event, "home")}
          className="flex items-center gap-3 text-[#1d1d1f]"
          aria-label="Ir al inicio"
        >
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-[#1d1d1f] text-white shadow-sm">
            <FaCode />
          </span>
          <span className="leading-tight">
            <span className="block text-xs font-semibold uppercase tracking-[0.24em] text-[#6e6e73]">
              SparkyFuu
            </span>
            <span className="block text-base font-semibold">Alejandro V.</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(event) => scrollToSection(event, link.id)}
              className="text-sm font-medium text-[#6e6e73] transition hover:text-[#0071e3]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/SparkyFuu"
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white text-[#1d1d1f] shadow-sm transition hover:border-[#0071e3]/40 hover:text-[#0071e3]"
            aria-label="GitHub de Alejandro"
          >
            <FaGithub />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((value) => !value)}
          className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white text-[#1d1d1f] shadow-sm md:hidden"
          aria-label="Abrir menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-black/10 bg-white/95 px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(event) => scrollToSection(event, link.id)}
                className="rounded-lg px-3 py-3 text-sm font-semibold text-[#424245] transition hover:bg-[#f5f5f7] hover:text-[#0071e3]"
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
