import { motion } from "framer-motion";

const GlowButton = ({ children, onClick }: { children: React.ReactNode; onClick: () => void }) => (
  <motion.button
    onClick={onClick}
    whileHover={{
      scale: 1.1,
      textShadow: "0 0 8px #9f7aea",
      boxShadow: "0 0 12px #9f7aea",
    }}
    whileTap={{ scale: 0.95 }}
    className="px-6 py-3 rounded-full bg-transparent border-2 border-purple-500 text-purple-400 font-semibold"
  >
    {children}
  </motion.button>
);

export default GlowButton;
