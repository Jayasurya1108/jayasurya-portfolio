"use client";

import { motion } from "framer-motion";

type SkillCardProps = {
  title: string;
  icon: string;
  skills: string[];
};

export default function SkillCard({
  title,
  icon,
  skills,
}: SkillCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="
        flex
        h-full
        flex-col
        rounded-2xl
        border
        border-white/20
        bg-white/10
        p-6
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-cyan-400/40
        hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
      "
    >
      <div className="mb-5 flex items-center gap-3">
        <span className="text-3xl">{icon}</span>

        <h3 className="text-2xl font-semibold text-white">
          {title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="
              rounded-full
              border
              border-white/10
              bg-white/10
              px-4
              py-2
              text-sm
              text-gray-300
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-blue-400
              hover:bg-blue-500/20
              hover:text-white
            "
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}