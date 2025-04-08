import React from 'react';
import { motion } from 'framer-motion';

export const BackgroundGradient = () => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden bg-slate-950">
      <motion.div
        className="absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(76, 0, 255, 0.5) 0%, transparent 100%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(255, 0, 255, 0.5) 0%, transparent 100%)",
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};