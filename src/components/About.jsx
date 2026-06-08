import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaGraduationCap,
  FaLaptopCode,
  FaAward,
} from "react-icons/fa";

export default function About() {
  const timeline = [
    {
      icon: FaGraduationCap,
      title: "B.E. Computer Science & Engineering",
      place: "Sambhram Institute of Technology",
      subtitle: "VTU Affiliated",
      date: "Aug 2021 - Jun 2025",
    },
    {
      icon: FaBriefcase,
      title: "Full Stack Web Development Intern",
      place: "Take It Smart (OPC) Pvt. Ltd.",
      date: "Feb 2025 - May 2025",
      meta: "Built web features with HTML, CSS, JavaScript and MySQL. Tested and debugged REST APIs using Postman. Collaborated via Git and GitHub.",
    },
    {
      icon: FaAward,
      title: "Supervised Learning with scikit-learn",
      place: "DataCamp",
      date: "Jun 2026",
      meta: "Statement of Accomplishment",
    },
  ];

  return (
    <section id="about" className="site-section about-section">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="about-section__header"
        >
          <p className="section-kicker">About Me</p>
          <h2 className="section-title">Who is Bhuvan?</h2>
          <div className="section-rule" />
        </motion.div>

        <div className="about-section__layout">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="about-section__summary"
          >
            <div className="about-section__summary-icon">
              <FaLaptopCode />
            </div>
            <h3 className="about-section__summary-title">
              Developer focused on useful, maintainable products.
            </h3>
            <p className="about-section__summary-copy">
              I'm a full-stack developer with expertise in scalable web
              applications and LLM-powered systems. My work spans REST API
              design, secure authentication, database architecture, and polished
              React interfaces deployed on Render and Vercel.
            </p>
            <p className="about-section__summary-copy">
              I enjoy turning a messy idea into a practical product: clean data
              models, readable code, and interfaces that feel direct and easy to
              use.
            </p>

            <div className="about-section__tags">
              {["React", "Node", "Django"].map((item) => (
                <div key={item} className="about-section__tag">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="theme-card about-section__timeline"
          >
            <div className="about-section__timeline-list">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title + item.date}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="about-section__timeline-item"
                  >
                    <div className="about-section__timeline-icon">
                      <Icon />
                    </div>
                    <div>
                      <p className="about-section__timeline-date">
                        {item.date}
                      </p>
                      <h3 className="about-section__timeline-title">
                        {item.title}
                      </h3>
                      <p className="about-section__timeline-place">
                        {item.place}
                      </p>
                      {item.subtitle && (
                        <p className="about-section__timeline-subtitle mt-1 text-sm font-medium text-[#737787]">
                          {item.subtitle}
                        </p>
                      )}
                      {item.meta && (
                        <p className="about-section__timeline-meta">
                          {item.meta}
                        </p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
