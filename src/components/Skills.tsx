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

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
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

        {/* Skill cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
            >
              <Card className="glass p-6 h-full">
                <h3 className="text-2xl font-semibold mb-4 text-primary">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: categoryIndex * 0.2 + skillIndex * 0.1,
                      }}
                      className="perspective"
                    >
                      <motion.div
                        whileHover={{ rotateY: 15, rotateX: -10, scale: 1.05 }}
                        className="p-4 bg-secondary/50 rounded-md shadow-lg text-center transition-transform duration-300 cursor-pointer"
                      >
                        <span className="text-foreground font-medium">{skill}</span>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
