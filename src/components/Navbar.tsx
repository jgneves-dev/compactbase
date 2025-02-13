import { useState } from "react";
import "../styles/components/navbar.scss";
import logo from "../assets/compactbase-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    event.preventDefault();
    const targetElement = document.getElementById(section);
    if (targetElement) {
      const offset = 85;
      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setIsOpen(false);
    }
  };

  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="navbar">
      <div className="logo" onClick={handleLogoClick}>
        <img src={logo} alt="Compactbase Logo" />
      </div>
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        {["sobre", "soluções", "projetos", "notícias", "contactos"].map((section) => (
          <li key={section}>
            <a href={`#${section}`} onClick={(event) => handleNavLinkClick(event, section)}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </li>
        ))}
      </ul>
      <button className={`burger ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </button>
    </nav>
  );
};

export default Navbar;