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
    {
      category: "Frontend",
      skills: ["React", "TypeScript", "Tailwind CSS"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "SQL", "Python"],
    },
    {
      category: "Tools & Others",
      skills: ["Git", "Docker", "Figma"],
    },
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

  // Fast floating and rotation
  const floatAndRotate = {
    animate: {
      rotateX: [0, 10, -10, 0],
      rotateY: [0, 10, -10, 0],
      rotateZ: [0, 5, -5, 0],
      y: [0, -5, 0],
      transition: {
        duration: 2.5,
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
          {skillCategories.map((category, catIndex) => (
            <Card
              key={category.category}
              className="glass p-6 relative overflow-hidden h-full"
            >
              <h3 className="text-2xl font-semibold mb-8 text-primary text-center">
                {category.category}
              </h3>

              <div className="relative flex flex-wrap justify-center items-center gap-6 h-56">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    className="relative cursor-pointer"
                    {...floatAndRotate}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: catIndex * 0.2 + skillIndex * 0.1,
                    }}
                    whileHover={{
                      scale: 1.2,
                      boxShadow:
                        "0 0 35px rgba(167,139,250,0.9), 0 0 60px rgba(100,100,255,0.7)",
                    }}
                  >
                    {/* 3D Cube */}
                    <div className="relative w-28 h-28 bg-secondary/50 backdrop-blur-xl border border-white/20 rounded-lg shadow-xl flex items-center justify-center neon-skill">
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-lg pointer-events-none"></div>
                      <div className="z-10">
                        {skillIcons[skill]}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Neon Effect */}
      <style jsx>{`
        .neon-skill {
          box-shadow:
            0 0 10px rgba(167,139,250,0.7),
            0 0 20px rgba(167,139,250,0.5),
            0 0 30px rgba(167,139,250,0.3);
        }
      `}</style>
    </section>
  );
};

export default Skills;
