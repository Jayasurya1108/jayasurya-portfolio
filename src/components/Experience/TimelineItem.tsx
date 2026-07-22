"use client";

import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

type TimelineItemProps = {
  title: string;
  company: string;
  duration: string;
  icon: string;
  points: string[];
  isLast?: boolean;
};

export default function TimelineItem({
  title,
  company,
  duration,
  icon,
  points,
  isLast,
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative flex gap-8"
    >
      {/* Timeline */}
      <div className="flex flex-col items-center">
        <div className="relative">
          {/* Glow */}
          <div className="absolute inset-0 scale-125 rounded-full bg-cyan-400/20 blur-xl" />

          {/* Icon */}
          <div
            className="
              relative
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-full
              bg-gradient-to-r
              from-blue-500
              to-purple-500
              text-2xl
              text-white
              shadow-lg
            "
          >
            {icon === "💼" ? <FaBriefcase /> : <FaGraduationCap />}
          </div>
        </div>

        {!isLast && (
          <div className="mt-2 w-[2px] flex-1 rounded-full bg-gradient-to-b from-blue-500/80 via-cyan-400/60 to-purple-500/80" />
        )}
      </div>

      {/* Card */}
      <motion.div
        whileHover={{
          y: -6,
          scale: 1.01,
        }}
        transition={{ type: "spring", stiffness: 250, damping: 18 }}
        className="
          flex-1
          max-w-5xl
          rounded-2xl
          border
          border-white/15
          bg-white/10
          p-6
          backdrop-blur-xl
          transition-all
          duration-300
          hover:border-cyan-400/40
          hover:shadow-[0_0_35px_rgba(59,130,246,0.15)]
        "
      >
        <div className="flex flex-wrap justify-between gap-2">
          <div>
            <h3 className="text-2xl font-semibold text-white">
              {title}
            </h3>

            <p className="mt-1 text-blue-400">{company}</p>
          </div>

          <span className="text-gray-400">{duration}</span>
        </div>

        <ul className="mt-5 space-y-3 text-gray-300">
          {points.map((point) => (
            <li key={point} className="flex gap-3">
              <span className="text-blue-400">▹</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}