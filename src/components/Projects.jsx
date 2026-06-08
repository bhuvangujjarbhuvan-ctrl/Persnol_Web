import { motion } from "framer-motion";
import {
  FaComments,
  FaExternalLinkAlt,
  FaGithub,
  FaHeartbeat,
  FaUsersCog,
} from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      id: "01",
      title: "AI Chatbot Platform",
      icon: FaComments,
      description:
        "Production-deployed multi-user chatbot platform with project-scoped AI agents, persistent chat history, JWT auth, Zod validation, and OpenRouter LLM integration. Deployed on Render and Vercel.",
      technologies: [
        "Node.js",
        "Express.js",
        "React",
        "PostgreSQL",
        "Prisma",
        "Zod",
        "JWT",
      ],
      github: "https://github.com/bhuvangujjarbhuvan-ctrl",
      live: "https://chatbot-platform-phi.vercel.app", // Replace with your actual URL
    },
    {
      id: "02",
      title: "Employee Management System",
      icon: FaUsersCog,
      description:
        "Django-based HR tool to manage employee records, departments, roles, and attendance with full CRUD operations, structured data validation, and a clean HTML/CSS interface backed by SQLite3.",
      technologies: ["Python", "Django", "SQLite3", "Django ORM"],
      github: "https://github.com/bhuvangujjarbhuvan-ctrl",
    },
    {
      id: "03",
      title: "Heart Disease Prediction Web App",
      icon: FaHeartbeat,
      description:
        "Flask web app that predicts heart disease risk from 13 clinical inputs (age, cholesterol, ECG, blood pressure etc.) using a Random Forest classifier. Includes user registration, login, prediction history stored in MySQL, and a joblib-serialized model achieving ~90% accuracy.",
      technologies: [
        "Flask",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "joblib",
        "MySQL",
      ],
      github: "https://github.com/bhuvangujjarbhuvan-ctrl",
    },
  ];

  return (
    <section id="projects" className="site-section bg-white">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="section-kicker">Selected Work</p>
          <h2 className="section-title">My Projects</h2>
          <div className="section-rule mx-auto" />
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.article
                key={project.id}
                title={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-[22px] bg-[#0f131f] p-7 text-white shadow-xl transition-colors duration-300 hover:bg-[#ffdb59]"
              >
                <span className="absolute right-6 top-4 font-['Figtree'] text-6xl font-extrabold text-transparent opacity-50 [-webkit-text-stroke:1px_rgba(255,255,255,0.45)] group-hover:[-webkit-text-stroke:1px_rgba(15,19,31,0.35)]">
                  {project.id}
                </span>
                <div className="mb-8 grid h-[70px] w-[70px] place-items-center rounded-2xl bg-[#ffdb59] text-3xl text-[#0f131f] transition-colors group-hover:bg-[#0f131f] group-hover:text-white">
                  <Icon />
                </div>
                <h3 className="relative mb-4 min-h-[64px] text-2xl font-extrabold text-white group-hover:text-[#0f131f]">
                  {project.title}
                </h3>
                <p className="relative min-h-[132px] leading-7 text-white/76 group-hover:text-[#0f131f]">
                  {project.description}
                </p>

                <div className="relative mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/12 bg-white/10 px-3 py-1 text-xs font-bold text-white group-hover:border-[#0f131f]/20 group-hover:bg-[#0f131f]/10 group-hover:text-[#0f131f]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="relative mt-8 flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="theme-button min-h-0 px-4 py-2 text-sm"
                    >
                      <FaGithub />
                      GitHub
                    </a>
                  )}
                  {project.live && project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="theme-button outline-button min-h-0 border-white px-4 py-2 text-sm text-white group-hover:border-[#0f131f] group-hover:text-[#0f131f]"
                    >
                      <FaExternalLinkAlt />
                      Live
                    </a>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
