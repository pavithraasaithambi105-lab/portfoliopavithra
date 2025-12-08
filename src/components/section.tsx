import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Section = ({ children, id }: { children: React.ReactNode; id: string }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.section
      id={id}
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className="min-h-screen flex flex-col items-center justify-center px-4"
    >
      {children}
    </motion.section>
  );
};

export default Section;
