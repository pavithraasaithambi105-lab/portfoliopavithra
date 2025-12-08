import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Code2, Lightbulb, Rocket } from "lucide-react";
import { useState, useEffect } from "react";

const About = () => {
  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code following best practices",
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Analyzing challenges and crafting innovative solutions",
    },
    {
      icon: Rocket,
      title: "Fast Learner",
      description: "Continuously exploring new technologies and frameworks",
    },
  ];

  const floatAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const fullText = "About Me";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      setIndex((prev) => (prev + 1 > fullText.length ? 0 : prev + 1));
    }, 400);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <section
      id="about"
      className="py-20 px-4 bg-transparent scroll-mt-28"
    >
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono text-primary neon-text">
            {displayedText}
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Pursuing B.E. in Computer Science and Engineering, passionate about building
            elegant solutions to complex problems and creating impactful technology.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              {...floatAnimation}
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    "0 0 30px rgba(167,139,250,0.8), 0 0 60px rgba(100,100,255,0.5)",
                }}
                className="glass p-6 h-full rounded-xl cursor-pointer relative overflow-hidden"
              >
                <div className="mb-4 p-3 rounded-lg bg-primary/20 w-fit shadow-lg">
                  <feature.icon className="w-8 h-8 text-primary glow-icon" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

