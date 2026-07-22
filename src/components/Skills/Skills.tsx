"use client";

import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import { skillCategories } from "./SkillsData";

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto px-6 py-20 scroll-mt-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mb-6 text-5xl font-bold text-white md:text-6xl">
          My{" "}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>

        <p className="mb-14 max-w-2xl text-lg leading-8 text-gray-400">
          A collection of technologies I use to build intelligent,
          scalable, and data-driven applications. I enjoy learning new
          tools and continuously expanding my technical expertise.
        </p>

        <div className="grid items-stretch gap-6 lg:grid-cols-2">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="h-full"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
              }}
            >
              <SkillCard
                title={category.title}
                icon={category.icon}
                skills={category.skills}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}