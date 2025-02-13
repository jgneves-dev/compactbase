import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import "../styles/components/news.scss";

const News = () => {
  const newsItems = [
    {
      image: "src/assets/compactbase-banner.png",
      date: "15 de Fevereiro de 2025",
      title: "Projeto de Construção Empolgante Concluído!",
      link: "/detalhes-noticia-1"
    },
    {
      image: "src/assets/compactbase-banner.png",
      date: "10 de Março de 2025",
      title: "Novo Edifício de Escritórios Inaugurado no Centro",
      link: "/detalhes-noticia-2"
    },
    {
      image: "src/assets/compactbase-banner.png",
      date: "5 de Abril de 2025",
      title: "CompactBase Ganha Prêmio da Indústria",
      link: "/detalhes-noticia-3"
    },
    {
      image: "src/assets/compactbase-banner.png",
      date: "20 de Maio de 2025",
      title: "Anúncio de Nova Parceria",
      link: "/detalhes-noticia-4"
    },
    {
      image: "src/assets/compactbase-banner.png",
      date: "15 de Junho de 2025",
      title: "Próximo Webinar sobre Tendências da Indústria",
      link: "/detalhes-noticia-5"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === newsItems.length - 1 ? 0 : prevIndex + 1));
    }, 7000); // Slide every 7 seconds

    return () => clearInterval(interval);
  }, [newsItems.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentNews = newsItems[currentIndex];

  return (
    <section id="notícias" className="news">
      <h2 className="section-title">Notícias</h2>
      <motion.div 
        className="news-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Left: Carousel */}
        <div className="news-carousel">
          <div className="carousel-images" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {newsItems.map((item, index) => (
              <div key={index} className={`carousel-item ${index === currentIndex ? "active" : ""}`}>
                <img src={item.image} alt={`Notícia ${index + 1}`} />
              </div>
            ))}
          </div>
          <div className="carousel-dots">
            {newsItems.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => goToSlide(index)}
              ></span>
            ))}
          </div>
        </div>

        {/* Right: News Info */}
        <div className="news-info">
          <div className="news-header">
            <p className="news-date">{currentNews.date}</p>
            <h2 className="news-title">{currentNews.title}</h2>
          </div>
          <div className="news-footer">
            <a href={currentNews.link} className="news-button">
              Saiba Mais <FaArrowRight className="arrow-icon" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default News;