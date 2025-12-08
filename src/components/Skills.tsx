import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  FaReact,
  FaNodeJs,
  FaGit,
  FaDocker,
  FaFigma,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiPython,
  SiMysql,
} from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    { category: "Frontend", skills: ["React", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", skills: ["Node.js", "SQL", "Python"] },
    { category: "Tools & Others", skills: ["Git", "Docker", "Figma"] },
  ];

  const skillIcons: Record<string, JSX.Element> = {
    React: <FaReact size={44} className="text-cyan-400" />,
    "TypeScript": <SiTypescript size={44} className="text-blue-500" />,
    "Tailwind CSS": <SiTailwindcss size={44} className="text-sky-400" />,
    "Node.js": <FaNodeJs size={44} className="text-green-500" />,
    SQL: <SiMysql size={44} className="text-blue-400" />,
    Python: <SiPython size={44} className="text-yellow-400" />,
    Git: <FaGit size={44} className="text-orange-500" />,
    Docker: <FaDocker size={44} className="text-sky-500" />,
    Figma: <FaFigma size={44} className="text-pink-500" />,
  };

  // Variants for entrance animations
  const animationVariants = [
    { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 150, damping: 20, duration: 1.2 } } },
    { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 150, damping: 20, duration: 1.2 } } },
    { hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 150, damping: 20, duration: 1.2 } } },
    { hidden: { opacity: 0, scale: 0.5 }, visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 150, damping: 20, duration: 1.2 } } },
    { hidden: { opacity: 0, rotateY: 90 }, visible: { opacity: 1, rotateY: 0, transition: { type: "spring", stiffness: 150, damping: 20, duration: 1.2 } } },
  ];

  // Floating/bobbing effect
  const floatAnimate = {
    animate: {
      y: [0, -6, 0],
      rotate: [0, 3, -3, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section id="skills" className="py-20 px-4 bg-transparent">
      <div className="container mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Technologies and tools I work with
          </p>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {skillCategories.map((category) => (
            <Card
              key={category.category}
              className="glass p-6 relative overflow-hidden h-full"
            >
              <h3 className="text-2xl font-semibold mb-8 text-primary text-center">
                {category.category}
              </h3>

              <div className="relative flex flex-wrap justify-center items-center gap-6 h-56">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    variants={animationVariants[index % animationVariants.length]}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.25,
                      rotate: 5,
                      y: -6,
                      boxShadow:
                        "0 0 40px rgba(167,139,250,0.9), 0 0 70px rgba(100,100,255,0.7)",
                    }}
                    {...floatAnimate}
                    className="relative cursor-pointer"
                  >
                    <div className="relative w-28 h-28 bg-secondary/50 backdrop-blur-xl border border-white/20 rounded-lg shadow-xl flex items-center justify-center neon-skill">
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-lg pointer-events-none"></div>
                      <div className="z-10">{skillIcons[skill]}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Neon Glow */}
      <style jsx>{`
        .neon-skill {
          box-shadow:
            0 0 15px rgba(167,139,250,0.7),
            0 0 30px rgba(167,139,250,0.5),
            0 0 50px rgba(167,139,250,0.3);
          transition: box-shadow 0.3s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Skills;
