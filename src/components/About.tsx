import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Code2, Lightbulb, Rocket } from "lucide-react";

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

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Pursuing B.E. in Computer Science and Engineering, passionate about building
            elegant solutions to complex problems and creating impactful technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="glass p-6 hover:glow-primary transition-all duration-300 h-full group">
                <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
