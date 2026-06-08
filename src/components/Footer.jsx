import { motion } from "framer-motion";
import {
  FaArrowUp,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/bhuvangujjarbhuvan-ctrl",
      label: "GitHub",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/bhuvangujjar",
      label: "LinkedIn",
    },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-[#0f131f] px-5 py-12 text-white">
      <div className="mx-auto max-w-[1160px]">
        <div className="grid gap-8 md:grid-cols-[1.4fr_0.8fr_0.8fr]">
          <div>
            <h3 className="mb-3 font-['Figtree'] text-3xl font-extrabold text-white">
              Bhuvan G R
            </h3>
            <p className="max-w-md leading-7 text-white/68">
              Full-stack developer crafting practical web applications, secure
              APIs, and AI-assisted user experiences.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-extrabold text-[#ffdb59]">
              Quick Links
            </h4>
            <div className="grid gap-2">
              {["Home", "About", "Projects", "Skills", "Contact"].map(
                (link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="text-white/68 no-underline transition hover:text-[#ffdb59]"
                  >
                    {link}
                  </a>
                ),
              )}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-extrabold text-[#ffdb59]">
              Follow Me
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    whileHover={{ y: -4 }}
                    href={social.href}
                    className="grid h-11 w-11 place-items-center rounded-md bg-white/8 text-xl text-white transition hover:bg-[#ffdb59] hover:text-[#0f131f]"
                    aria-label={social.label}
                  >
                    <Icon />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-7 text-sm text-white/58 md:flex-row md:items-center md:justify-between">
          <p>Copyright {currentYear} Bhuvan. All rights reserved.</p>
          <p>Designed and built by Bhuvan.</p>
        </div>
      </div>

      <motion.button
        onClick={() => window.scrollTo(0, 0)}
        whileHover={{ y: -4 }}
        className="fixed bottom-7 right-7 hidden h-12 w-12 place-items-center rounded-md border-2 border-[#0f131f] bg-[#ffdb59] text-[#0f131f] shadow-xl lg:grid"
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </motion.button>
    </footer>
  );
}
