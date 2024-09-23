import {
  FaChevronDown,
  FaGithub,
  FaInstagram,
  FaUser,
  FaWhatsapp,
} from "react-icons/fa";
import "./home.css";

const Home = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="h-screen relative flex flex-col justify-center items-center"
    >
      <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left home-animation">
        <div className="w-full">
          <h1 className="text-4xl md:text-6xl home-name">
            Alejandro Valenzuela
          </h1>
        </div>
        <div className="w-full mt-4 text-center">
          <h2 className="text-lg md:text-2xl text-secondary">
            Transformando{" "}
            <span className="border-b-2 border-green-400 text-white pb-1">
              ideas
            </span>{" "}
            en soluciones.
          </h2>
        </div>
      </div>
      <div className="flex justify-center space-x-4 md:space-x-6 mt-4 md:mt-5 home-social-icons">
        <a href="https://wa.me/" target="_blank">
          <FaWhatsapp className="text-white text-2xl" />
        </a>
        <a href="https://www.instagram.com/_spark.02_/" target="_blank">
          <FaInstagram className="text-white text-2xl" />
        </a>
        <a href="https://github.com/SparkyFuu" target="_blank">
          <FaGithub className="text-white text-2xl" />
        </a>
        <a>
          <FaUser className="text-white text-2xl" />
        </a>
      </div>
      <div className="absolute bottom-8 inset-x-0 flex flex-col items-center">
        <h2 className="text-white text-3xl font-bold mb-2">EXPLORA EL SITIO</h2>
        <FaChevronDown
          onClick={scrollToNextSection}
          className="text-white cursor-pointer hover:text-[#00C8FF] transition duration-300"
          size={50}
        />
      </div>
    </section>
  );
};

export default Home;
