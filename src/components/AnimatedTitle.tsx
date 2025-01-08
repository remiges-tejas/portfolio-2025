import { motion } from 'framer-motion';

export function AnimatedTitle({ children }: { children: React.ReactNode }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-3xl font-bold mb-8 flex items-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700"
    >
      {children}
    </motion.h2>
  );
}