"use client";

import { motion } from "framer-motion";
import TimelineItem from "./TimelineItem";
import { experiences } from "./ExperienceData";

export default function Experience() {
  return (
    <section
      id="experience"
      className="max-w-7xl mx-auto px-6 py-20 scroll-mt-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
          My{" "}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>

        <p className="text-lg text-gray-400 max-w-2xl leading-8 mb-16">
          My journey through software engineering, artificial intelligence,
          and data science.
        </p>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <TimelineItem
              key={exp.title}
              {...exp}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}