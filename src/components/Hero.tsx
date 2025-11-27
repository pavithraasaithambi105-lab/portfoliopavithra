import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profilePic from "@/assets/profile.jpg"; // Your photo

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Tech background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center justify-center gap-10 text-center md:text-left">
        
        {/* ⭐ Profile Photo - VERY LARGE + NEON */}
        {/* ⭐ Profile Photo - ENHANCED NEON GLOW */}
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6 }}
  className="flex justify-center md:justify-start"
>
  <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden">

    {/* Main Profile Photo */}
    <img
      src={profilePic}
      alt="Pavithra"
      className="w-full h-full object-cover rounded-full"
    />

    {/* Inner Glow (sharp neon ring) */}
    <div className="absolute inset-0 rounded-full border-4 border-primary blur-[2px] opacity-80 animate-pulse"></div>

    {/* Outer Glow (strong bright ring) */}
    <div className="absolute inset-0 rounded-full border-4 border-primary blur-xl opacity-70 animate-pulse"></div>

    {/* Soft aura around the image */}
    <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl opacity-60 animate-pulse"></div>
  </div>
</motion.div>


        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Hi! I am Pavithra
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl"
          >
            Building innovative solutions with code, creativity, and passion for technology
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap gap-4 justify-center md:justify-start mb-12"
          >
            <Button asChild variant="glow" size="lg">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex gap-6 justify-center md:justify-start"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>

            <a
              href="mailto:your.email@example.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float"
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={() => scrollToSection("about")}
          className="rounded-full"
        >
          <ArrowDown className="w-6 h-6" />
        </Button>
      </motion.div>
    </section>
  );
};

export default Hero;
