"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "./ProjectsData";

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-6 py-20 scroll-mt-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Featured{" "}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <p className="max-w-2xl text-lg text-gray-400 leading-8 mb-16">
          A collection of AI, Machine Learning and Software Engineering
          projects that showcase my passion for solving real-world problems
          through technology.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}