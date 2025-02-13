import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import logo from "../assets/compactbase-symbol.png";
import "../styles/components/footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-left">
            <img src={logo} alt="Compactbase Logo" className="footer-logo" />
            <p>&copy; 2025 Compactbase Lda</p>
          </div>

          <div className="footer-right">
            <div className="social-icons">
              <a href="https://www.facebook.com/geral.compactbase/"><FaFacebookF /></a>
              <a href="https://www.linkedin.com/in/nuno-neves-69346810b/"><FaLinkedin /></a>
            </div>
            <p className="footer-brand">Designed by <a href="https://jgneves-dev.github.io" target="_blank" rel="noopener noreferrer">João Neves</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;