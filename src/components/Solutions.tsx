import { motion } from "framer-motion";
import { FaSeedling, FaHardHat, FaTree } from "react-icons/fa";
import "../styles/components/solutions.scss";

const solutions = [
  {
    id: 1,
    title: "Tratamento de Solos",
    icon: <FaSeedling />,
    items: ["Drenagens", "Movimento de terras", "Escavações", "Terraplanagens"]
  },
  {
    id: 2,
    title: "Construção Civil",
    icon: <FaHardHat />,
    items: ["Construção", "Demolição", "Manutenção"]
  },
  {
    id: 3,
    title: "Limpezas Florestais",
    icon: <FaTree />,
    items: ["Limpeza"]
  }
];

const Solutions = () => {
  return (
    <motion.section
      id="soluções"
      className="solutions container"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2>Soluções</h2>
      <div className="solutions-grid">
        {solutions.map((solution) => (
          <div key={solution.id} className="solution-card">
            {solution.icon}
            <h3>{solution.title}</h3>
            <ul>
              {solution.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Solutions;