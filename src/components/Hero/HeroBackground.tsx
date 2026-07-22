"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      {/* Aurora 1 */}
      <motion.div
        animate={{
          x: [0, 120, -80, 0],
          y: [0, -80, 50, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-10
          left-0
          w-[650px]
          h-[650px]
          rounded-full
          bg-blue-500/20
          blur-[180px]
        "
      />

      {/* Aurora 2 */}
      <motion.div
        animate={{
          x: [0, -140, 60, 0],
          y: [0, 80, -50, 0],
          scale: [1, 0.85, 1.1, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-0
          right-0
          w-[700px]
          h-[700px]
          rounded-full
          bg-purple-600/20
          blur-[220px]
        "
      />

      {/* Cyan Accent */}
      <motion.div
        animate={{
          y: [0, -50, 0],
          x: [0, 40, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-1/3
          left-1/3
          w-[260px]
          h-[260px]
          rounded-full
          bg-cyan-400/10
          blur-[140px]
        "
      />

    </div>
  );
}