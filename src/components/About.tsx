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

  // Wave Motion for cards (unique per card)
  const waveMotion = (delay: number) => ({
    animate: {
      y: [0, -12, 0],
      rotate: [0, 3, -3, 0],
      transition: {
        duration: 4 + delay,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  });

  return (
    <section id="about" className="py-20 px-4 bg-transparent scroll-mt-28">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono text-primary neon-text flex justify-center flex-wrap">
            {displayedText.split("").map((char, idx) => (
              <motion.span
                key={idx}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: idx * 0.05, type: "spring", stiffness: 200 }}
              >
                {char}
              </motion.span>
            ))}
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Pursuing B.E. in Computer Science and Engineering, passionate about building
            elegant solutions to complex problems and creating impactful technology.
          </motion.p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              {...waveMotion(index * 0.5)}
            >
              <motion.div
                whileHover={{
                  rotateX: 5,
                  rotateY: 5,
                  scale: 1.05,
                  boxShadow: "0 0 40px rgba(167,139,250,0.8), 0 0 60px rgba(100,100,255,0.5)",
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
