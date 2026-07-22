"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  github: string;
  demo: string;
  tech: string[];
};

export default function ProjectCard({
  title,
  description,
  image,
  github,
  demo,
  tech,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.18)]"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-3xl font-bold text-white">{title}</h3>

        <p className="mt-4 leading-7 text-gray-300">{description}</p>

        {/* Tech Stack */}
        <div className="mt-6 flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-8 flex gap-4">
          {github ? (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-blue-500 px-5 py-3 text-white transition hover:bg-blue-600"
            >
              <FaGithub />
              GitHub
            </a>
          ) : (
            <button
              disabled
              className="flex cursor-not-allowed items-center gap-2 rounded-xl bg-blue-500/50 px-5 py-3 text-white/70 opacity-70"
              title="Repository unavailable"
            >
              <FaGithub />
              GitHub
            </button>
          )}

          {demo ? (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-cyan-400/40 px-5 py-3 text-cyan-300 transition hover:bg-cyan-400/10"
            >
              <FaExternalLinkAlt />
              Live Demo
            </a>
          ) : (
            <button
              disabled
              className="flex cursor-not-allowed items-center gap-2 rounded-xl border border-gray-700 px-5 py-3 text-gray-500"
            >
              <FaExternalLinkAlt />
              Coming Soon
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}