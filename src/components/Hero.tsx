import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import promoVideo from '../assets/compactbase.mp4';
import "../styles/components/hero.scss";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1;
    }
  }, []);

  return (
    <motion.section className="hero" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <video ref={videoRef} autoPlay loop muted playsInline className="hero-video">
        <source src={promoVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content">
        <h1>Construindo o Futuro</h1>
        <p>O seu parceiro de construção confiável.</p>
      </div>
    </motion.section>
  );
};

export default Hero;