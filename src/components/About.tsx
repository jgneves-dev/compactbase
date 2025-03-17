import { motion } from "framer-motion";
import aboutImage from "../assets/compactbase-logo-black.png";
import "../styles/components/about.scss";

const About = () => {
  return (
    <motion.section
      id="sobre"
      className="about container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="section-title">Sobre Nós</h2>
      <div className="about-content">
        <div>
          <p>
            A Compactbase é uma empresa de construção civil, fundada em 24 de outubro de 2017, especializada em soluções para tratamento de solos, drenagens, movimentos de terras, escavações, terraplanagem, execução de redes enterradas e pavimentos drenantes.
          </p>
          <p>
            Além disso, atuamos na limpeza florestal e em diversas outras áreas essenciais para o desenvolvimento de infraestruturas.
          </p>
          <p>
            Nosso compromisso vai além da execução dos serviços; buscamos sempre qualidade, responsabilidade e excelência, garantindo que cada projeto seja concluído com acabamentos impecáveis.
          </p>
          <p>
            A Compactbase se destaca pelo profissionalismo, competência e dedicação de sua equipe, oferecendo soluções eficientes e sustentáveis para atender às necessidades de cada cliente.
          </p>
        </div>
        <img src={aboutImage} alt="Sobre Nós" />
      </div>
    </motion.section>
  );
};

export default About;