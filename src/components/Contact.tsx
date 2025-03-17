import { useState } from "react";
import { motion } from "framer-motion";
import googleMapsLogo from "../assets/google-map-icon.svg";
import wazeLogo from "../assets/waze-icon.svg";
import "../styles/components/contact.scss";

const Contact = () => {
  const [selectedMap, setSelectedMap] = useState("google");

  return (
    <motion.section
      id="contactos"
      className="contact container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="section-title">Contactos</h2>
      <div className="contact-content">
        <form>
          <input type="text" placeholder="Seu Nome" required />
          <input type="email" placeholder="Seu Email" required />
          <textarea placeholder="Sua Mensagem" required></textarea>
          <button type="submit">Enviar Mensagem</button>
        </form>
        <div className="contact-info">
          <div className="map-container">
            {selectedMap === "google" && (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d613.9483039332249!2d-8.702678888118696!3d39.6391353620235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1spt-PT!2spt!4v1739419438976!5m2!1spt-PT!2spt"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            )}
            {selectedMap === "waze" && (
              <iframe
                src="https://embed.waze.com/iframe?zoom=16&lat=39.639509&lon=-8.702516&ct=livemap"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            )}
          </div>
          <div className="map-tabs">
            <button
              className={selectedMap === "google" ? "active" : ""}
              onClick={() => setSelectedMap("google")}
            >
              <img src={googleMapsLogo} alt="Google Maps" />
            </button>
            <button
              className={selectedMap === "waze" ? "active" : ""}
              onClick={() => setSelectedMap("waze")}
            >
              <img src={wazeLogo} alt="Waze" />
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;