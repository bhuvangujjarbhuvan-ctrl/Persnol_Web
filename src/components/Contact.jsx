import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhone,
} from "react-icons/fa";

export default function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsSending(true);
    setErrorMessage("");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setIsSending(false);
          setIsSubmitted(true);
          setFormData({ name: "", email: "", subject: "", message: "" });
          setTimeout(() => setIsSubmitted(false), 5000);
        },
        (error) => {
          setIsSending(false);
          setErrorMessage("Failed to send message. Please try again later.");
          console.error("FAILED...", error.text);
        },
      );
  };

  const contactMethods = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "bhuvangujjarbhuvan@gmail.com",
    },
    { icon: FaPhone, title: "Phone", value: "+91-7483479874" },
    { icon: FaMapMarkerAlt, title: "Location", value: "Bangalore, India" },
  ];

  return (
    <section id="contact" className="site-section bg-white">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 flex flex-col items-center text-center"
        >
          <p className="section-kicker">Contact</p>
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-rule" />
          <p className="mt-6 max-w-2xl text-center leading-8 text-[#737787]">
            Have a project, internship opportunity, or product idea? Send a
            quick message and I will get back to you.
          </p>
        </motion.div>

        <div className="mb-8 grid gap-5 lg:grid-cols-3">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="theme-card p-6 text-center"
              >
                <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-2xl bg-[#ffdb59] text-2xl text-[#0f131f]">
                  <Icon />
                </div>
                <h3 className="mb-2 text-xl font-extrabold text-[#0f131f]">
                  {method.title}
                </h3>
                <p className="break-words text-[#737787]">{method.value}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl rounded-[26px] bg-[#0f131f] p-6 text-white shadow-2xl md:p-8"
        >
          <form ref={form} onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block font-bold text-white">Name</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-md border border-white/12 bg-white px-4 py-3 text-[#0f131f] outline-none focus:border-[#ffdb59]"
                  placeholder="Your name"
                  required
                />
              </label>
              <label className="block">
                <span className="mb-2 block font-bold text-white">Email</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-md border border-white/12 bg-white px-4 py-3 text-[#0f131f] outline-none focus:border-[#ffdb59]"
                  placeholder="Your email"
                  required
                />
              </label>
            </div>

            <label className="block">
              <span className="mb-2 block font-bold text-white">Subject</span>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full rounded-md border border-white/12 bg-white px-4 py-3 text-[#0f131f] outline-none focus:border-[#ffdb59]"
                placeholder="Subject"
                required
              />
            </label>

            <label className="block">
              <span className="mb-2 block font-bold text-white">Message</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full resize-none rounded-md border border-white/12 bg-white px-4 py-3 text-[#0f131f] outline-none focus:border-[#ffdb59]"
                placeholder="Your message"
                required
              />
            </label>

            <button
              type="submit"
              disabled={isSending}
              className="theme-button w-full disabled:cursor-not-allowed disabled:opacity-70"
            >
              <FaPaperPlane />
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>

          {isSubmitted && (
            <div className="mt-5 rounded-md bg-[#ffdb59] p-4 text-center font-bold text-[#0f131f]">
              Thank you! I will get back to you soon.
            </div>
          )}

          {errorMessage && (
            <div className="mt-5 rounded-md bg-red-500/20 border border-red-500 p-4 text-center font-bold text-red-200">
              {errorMessage}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
