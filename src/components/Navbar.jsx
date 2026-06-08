import { useState } from "react";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["Home", "About", "Projects", "Skills", "Contact"];

  return (
    <nav className="portfolio-navbar">
      <div className="portfolio-navbar__inner">
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          className="portfolio-navbar__brand"
        >
          <span className="portfolio-navbar__mark">BG</span>
          <span className="portfolio-navbar__name">Bhuvan G R</span>
        </motion.a>

        <div className="portfolio-navbar__links">
          {navItems.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
            >
              <a
                href={`#${item.toLowerCase()}`}
                className="portfolio-navbar__link"
              >
                {item}
              </a>
            </motion.div>
          ))}
        </div>

        <a href="#contact" className="theme-button portfolio-navbar__cta">
          <FaDownload />
          Hire Me
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="portfolio-navbar__toggle"
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {isOpen && (
        <div className="portfolio-navbar__mobile">
          <div className="portfolio-navbar__mobile-inner">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="portfolio-navbar__mobile-link"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
