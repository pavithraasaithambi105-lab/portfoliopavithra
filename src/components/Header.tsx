import { motion } from "framer-motion";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Header = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-1/2 -translate-x-1/2 z-50
                 bg-black/30 backdrop-blur-md
                 border border-white/10
                 rounded-full px-6 py-3
                 flex gap-5"
    >
      {sections.map((s) => (
        <button
          key={s.id}
          onClick={() => scrollToSection(s.id)}
          className="text-sm md:text-base text-white/80 hover:text-white
                     transition-all duration-300 hover:scale-110"
        >
          {s.label}
        </button>
      ))}
    </motion.header>
  );
};

export default Header;
