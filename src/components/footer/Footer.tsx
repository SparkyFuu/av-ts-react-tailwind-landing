import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 bg-white px-5 py-8 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-[#6e6e73] sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} Alejandro Valenzuela. Full stack developer, Santiago de
          Chile.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/56933544720"
            className="font-semibold text-[#1d1d1f] transition hover:text-[#0071e3]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contacto
          </a>
          <a
            href="https://github.com/SparkyFuu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1d1d1f] transition hover:text-[#0071e3]"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/alejandro-valenzuela-8780442a1/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1d1d1f] transition hover:text-[#0071e3]"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
