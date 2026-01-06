import htmlImg from "../assets/html.jpg";
import cssImg from "../assets/css.jpg";
import sqlImg from "../assets/sql.jpg";
import pythonImg from "../assets/python.png";

export default function Skills() {

  const skills = [
    { name: "HTML", img: htmlImg },
    { name: "CSS", img: cssImg },
    { name: "SQL", img: sqlImg },
    { name: "Python", img: pythonImg },
  ];

  return (
    <section id="Skills" className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-700 to-indigo-800 
                        py-12 sm:py-16 px-4">
      
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-3">
        My <span className="text-yellow-300">Skills</span>
      </h2>
      <div className="w-20 sm:w-24 h-1 bg-yellow-300 mx-auto mb-10 rounded-full"></div>

      {/* Skills Cards */}
      <div className="max-w-6xl mx-auto grid 
                      grid-cols-1 
                      sm:grid-cols-2 
                      md:grid-cols-3 
                      lg:grid-cols-4 
                      gap-6 sm:gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6
                       flex flex-col items-center
                       shadow-lg transition-all duration-300
                       md:hover:-translate-y-3 md:hover:scale-105
                       md:hover:shadow-2xl"
          >
            <img
              src={skill.img}
              alt={skill.name}
              className="h-20 sm:h-24 object-contain mb-4"
            />
            <h3 className="text-center text-white font-semibold text-base sm:text-lg">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}