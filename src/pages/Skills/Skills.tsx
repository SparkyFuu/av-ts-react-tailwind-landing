import { FaBrain } from "react-icons/fa";

const Skills = () => {
  const skills = {
    programacion: [
      { name: "Java", level: 2 },
      { name: "Python", level: 1 },
      { name: "HTML / CSS", level: 4 },
      { name: "JavaScript / TypeScript", level: 4 },
    ],
    webFrameworks: [
      { name: "React", level: 4 },
      { name: "Angular", level: 2 },
    ],
    miscelaneo: [
      { name: "Windows", level: 4 },
      { name: "SQL", level: 3 },
    ],
    otras: [
      { name: "Microsoft Office", level: 2 },
      { name: "Adobe Photoshop", level: 3 },
      { name: "Blender", level: 2 },
    ],
  };

  const SkillBar: React.FC<{ level: number }> = ({ level }) => {
    const totalDots = 4;
    const activeDots = new Array(level).fill(true);
    const inactiveDots = new Array(totalDots - level).fill(false);

    return (
      <div className="flex gap-1">
        {activeDots.map((_, idx) => (
          <div
            key={idx}
            className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg"
          />
        ))}
        {inactiveDots.map((_, idx) => (
          <div key={idx} className="w-3 h-3 bg-gray-600 rounded-full" />
        ))}
      </div>
    );
  };

  return (
    <section
      id="skills"
      className="px-6 py-12 md:px-12 lg:px-28 lg:py-16 text-white rounded-lg"
    >
      <div className="text-center mb-10">
        <div className="flex justify-center items-center gap-4 text-white">
          <FaBrain size={40} className="hover:animate-bounce" />
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wide">
            Habilidades
          </h2>
        </div>
        <p className="mt-4 text-gray-400 text-lg">
          Explora mis habilidades y competencias
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:portrait:grid-cols-2 lg:landscape:grid-cols-4 gap-8 md:gap-12">
        {Object.entries(skills).map(([category, skillList], index) => (
          <div key={category} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3
              className={`text-2xl font-semibold mb-6 ${
                [
                  "text-green-400",
                  "text-yellow-400",
                  "text-blue-400",
                  "text-pink-400",
                ][index]
              } border-b border-gray-700 pb-2`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </h3>
            {skillList.map((skill) => (
              <div
                key={skill.name}
                className="flex justify-between items-center mb-4"
              >
                <span className="text-lg font-medium">{skill.name}</span>
                <SkillBar level={skill.level} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
