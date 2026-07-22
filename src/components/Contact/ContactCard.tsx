"use client";

import { motion } from "framer-motion";

type ContactCardProps = {
  icon: React.ElementType;
  title: string;
  value: string;
  link: string;
};

export default function ContactCard({
  icon: Icon,
  title,
  value,
  link,
}: ContactCardProps) {
  const content = (
    <motion.div
      whileHover={{
        y: -6,
        rotate: -1,
        scale: 1.02,
      }}
      className="
        group
        flex
        h-full
        flex-col
        rounded-2xl
        border
        border-white/10
        bg-white/5
        p-5
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-cyan-400/40
        hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
      "
    >
      <Icon className="mb-4 text-3xl text-cyan-400" />

      <h3 className="text-lg font-semibold text-white">
        {title}
      </h3>

      <p className="mt-2 break-all text-gray-400">
        {value}
      </p>
    </motion.div>
  );

  if (!link) {
    return content;
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full"
    >
      {content}
    </a>
  );
}