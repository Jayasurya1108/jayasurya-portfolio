"use client";

import { motion } from "framer-motion";

const techs = [
  { name: "🐍 Python", className: "-top-10 left-1/2 -translate-x-1/2", }, 
  { name: "🗄 SQL", className: "top-24 -left-20", }, 
  { name: "🤖 AI", className: "top-24 -right-18", }, 
  { name: "📊 Tableau", className: "bottom-16 -left-24", }, 
  { name: "⚙️ Appian", className: "bottom-16 -right-22", }, 
  { name: "❄️ Snowflake", className: "-bottom-12 left-1/2 -translate-x-1/2", },
];

export default function HeroStats() {
  return (
    <>
      {techs.map((tech, index) => (
        <motion.div
          key={tech.name}
          className={`absolute ${tech.className}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -6, 0],
          }}
          transition={{
            delay: index * 0.2,
            duration: 4 + index,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          whileHover={{
            scale: 1.08,
          }}
        >
          <div className="px-4 py-2 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg whitespace-nowrap">
            {tech.name}
          </div>
        </motion.div>
      ))}
    </>
  );
}