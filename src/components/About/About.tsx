"use client";

import { motion } from "framer-motion";
import AboutCard from "./AboutCard";
import { aboutCards } from "./AboutInfo";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-6 py-20 scroll-mt-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
          About{" "}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
            Me
          </span>
        </h2>

        <p className="text-lg text-gray-400 max-w-2xl leading-8 mb-14">
          I'm Jayasurya, a passionate AI and Data Science graduate who
          enjoys building intelligent solutions, exploring modern
          technologies, and transforming ideas into impactful software.
          From enterprise application development with Appian to machine
          learning projects and data analytics, I love solving problems
          through technology and continuously learning along the way.
        </p>

        <div className="grid lg:grid-cols-2 gap-6">
          {aboutCards.map((card) => (
            <AboutCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              value={card.value}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}