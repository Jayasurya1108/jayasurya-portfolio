"use client";
import { motion } from "framer-motion";

type AboutCardProps = {
  icon: string;
  title: string;
  value: string;
};

export default function AboutCard({
  icon,
  title,
  value,
}: AboutCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="
        backdrop-blur-xl
        bg-white/10
        border
        border-white/20
        rounded-xl
        p-5
        flex
        gap-4
        items-start
      "
    >
      <span className="text-2xl">{icon}</span>

      <div>
        <h3 className="text-white font-semibold">{title}</h3>

        <p className="text-gray-400 text-sm mt-1">
          {value}
        </p>
      </div>
    </motion.div>
  );
}