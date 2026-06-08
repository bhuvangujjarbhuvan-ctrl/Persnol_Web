import { motion } from "framer-motion";
import {
  FaDatabase,
  FaGitAlt,
  FaNode,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  SiDjango,
  SiMysql,
  SiPostgresql,
  SiTailwindcss,
  SiBootstrap,
  SiPrisma,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiJupyter,
  SiGooglecolab,
} from "react-icons/si";

export default function Skills() {
  const skillCategories = [
    {
      category: "Languages",
      skills: [
        { name: "Python", icon: FaPython },
        { name: "JavaScript (ES6+)", icon: FaReact },
        { name: "SQL", icon: SiPostgresql },
      ],
    },
    {
      category: "Frontend",
      skills: [
        { name: "React.js", icon: FaReact },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Bootstrap", icon: SiBootstrap },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js & Express.js", icon: FaNode },
        { name: "Django & Flask", icon: SiDjango },
        { name: "Prisma ORM", icon: SiPrisma },
      ],
    },
    {
      category: "Data Science & ML",
      skills: [
        { name: "Pandas", icon: SiPandas },
        { name: "NumPy", icon: SiNumpy },
        { name: "Scikit-learn", icon: SiScikitlearn },
        { name: "Jupyter", icon: SiJupyter },
        { name: "Google Colab", icon: SiGooglecolab },
      ],
    },
    {
      category: "Databases & Tools",
      skills: [
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "MySQL", icon: SiMysql },
        { name: "Git & GitHub", icon: FaGitAlt },
        { name: "REST APIs", icon: FaDatabase },
      ],
    },
  ];

  return (
    <section id="skills" className="site-section skills-section">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="skills-section__header"
        >
          <p className="section-kicker">Capabilities</p>
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="section-rule" />
        </motion.div>

        <div className="skills-section__grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.08 }}
              className="theme-card skills-section__card"
            >
              <h3 className="skills-section__card-title mb-6">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50/50 px-4 py-2 text-sm font-bold text-gray-800 transition-colors hover:bg-gray-100"
                    >
                      <Icon className="text-lg" />
                      <span>{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="skills-section__other"
        >
          <h3 className="skills-section__other-title">Other Skills</h3>
          <div className="skills-section__other-grid flex flex-wrap gap-3 mt-6">
            {[
              "MVC Architecture",
              "REST API Design",
              "JWT Authentication",
              "Postman",
              "Render & Vercel",
              "Google Colab",
              "Jupyter Notebook",
            ].map((skill) => (
              <div
                key={skill}
                className="skills-section__other-item rounded-full border border-gray-200 bg-gray-50/50 px-4 py-2 text-sm font-bold text-gray-800 transition-colors hover:bg-gray-100"
              >
                {skill}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
