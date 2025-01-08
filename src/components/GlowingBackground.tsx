import { motion } from "framer-motion";

export function GlowingBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden bg-slate-900">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.2), transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      {children}
    </div>
  );
}
