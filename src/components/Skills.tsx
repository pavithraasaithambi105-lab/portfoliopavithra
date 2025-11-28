import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

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

  // Fast floating and rotation
  const floatAndRotate = {
    animate: {
      rotateX: [0, 10, -10, 0], // subtle rotation
      rotateY: [0, 10, -10, 0],
      rotateZ: [0, 5, -5, 0],
      y: [0, -5, 0],
      transition: {
        duration: 2.5, // fastest rotation
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
                      {/* Reflection */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-lg pointer-events-none"></div>
                      <span className="text-white font-semibold text-center z-10">
                        {skill}
                      </span>
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
        .neon-skill span {
          text-shadow:
            0 0 5px #a78bfa,
            0 0 10px #a78bfa,
            0 0 20px #a78bfa,
            0 0 30px #8b5cf6,
            0 0 40px #8b5cf6,
            0 0 50px #7c3aed;
        }
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
