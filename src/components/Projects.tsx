import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/components/projects.scss";

const projects = [
  {
    id: 1,
    title: "Projeto 1",
    img: "src/assets/compactbase-banner.png",
    images: ["src/assets/compactbase-banner.png", "src/assets/compactbase-banner-white.png", "src/assets/compactbase-banner.png"]
  },
  {
    id: 2,
    title: "Projeto 2",
    img: "src/assets/compactbase-banner-white.png",
    images: ["src/assets/compactbase-banner-white.png", "src/assets/compactbase-banner.png", "src/assets/compactbase-banner-white.png"]
  },
  {
    id: 3,
    title: "Projeto 3",
    img: "src/assets/compactbase-banner.png",
    images: ["src/assets/compactbase-banner.png", "src/assets/compactbase-banner-white.png", "src/assets/compactbase-banner.png"]
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);

  const handleImageClick = (project) => {
    setSelectedProject(project);
    setSelectedImage(0);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <motion.section
      id="projetos"
      className="projects container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>Projetos</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card" onClick={() => handleImageClick(project)}>
            <img src={project.img} alt={project.title} />
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleCloseModal}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={selectedProject.images[selectedImage]}
                src={selectedProject.images[selectedImage]}
                alt={selectedProject.title}
                className="main-image"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
              <div className="image-previews">
                {selectedProject.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${selectedProject.title} ${index + 1}`}
                    className={index === selectedImage ? "active" : ""}
                    onClick={() => setSelectedImage(index)}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Projects;