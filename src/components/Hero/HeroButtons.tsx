"use client";

import { motion } from "framer-motion";

export default function HeroButtons() {
  return (
    <div className="flex flex-wrap gap-5 mt-10">
      <motion.a
        href="#projects"
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.95,
        }}
        className="bg-blue-600 px-7 py-4 rounded-xl font-semibold hover:bg-blue-700 transition"
      >
        View Projects
      </motion.a>

      <motion.a
        href="/resume/Jayasurya_A_DS.pdf"
        download
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.95,
        }}
        className="border border-white/20 backdrop-blur-lg bg-white/5 px-7 py-4 rounded-xl font-semibold hover:bg-white/10 transition"
      >
        Download Resume
      </motion.a>
    </div>
  );
}