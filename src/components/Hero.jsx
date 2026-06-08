import { motion } from "framer-motion";
import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
import headshot from "../assets/headshort.jpg";

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div
        className="hero-section__bg"
        style={{
          background: "linear-gradient(135deg, #1f2937 0%, #111827 100%)",
        }}
      />

      <div className="hero-section__inner">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="hero-section__content"
        >
          <p className="hero-section__kicker">Full Stack Developer</p>
          <h1 className="hero-section__title">
            I build clean web apps with practical AI features.
          </h1>
          <p className="hero-section__copy">
            Bhuvan G R creates scalable React, Node.js, Django, Flask, and
            database-backed products with secure APIs and crisp user flows.
          </p>

          <div className="hero-section__actions">
            <a href="#projects" className="theme-button">
              View Projects
              <FaArrowRight />
            </a>
            <a
              href="#contact"
              className="theme-button hero-section__outline-button"
            >
              Work With Me
            </a>
          </div>

          <div className="hero-section__meta">
            <span>
              <FaMapMarkerAlt />
              Bangalore, India
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.2 }}
          className="hero-section__visual"
        >
          <div className="hero-section__dot" />
          <div className="hero-section__square" />
          <div className="hero-section__image-wrap">
            <img
              src={headshot}
              alt="Bhuvan G R"
              className="hero-section__image"
              style={{ objectFit: "cover" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
