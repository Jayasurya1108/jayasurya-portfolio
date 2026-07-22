"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

export default function HeroSocials() {
  const socials = [
    {
      icon: <FaGithub />,
      link: "https://github.com/Jayasurya1108",
    },
    {
      icon: <FaLinkedin />,
      link: "YOUR_LINKEDIN_URL",
    },
    {
      icon: <MdEmail />,
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=2003jsa@email.com",
    },
  ];

  return (
    <div className="flex gap-5 mt-8 text-3xl">
      {socials.map((social, index) => (
        <motion.a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.2,
            y: -5,
          }}
          whileTap={{
            scale: 0.9,
          }}
          className="text-white hover:text-blue-400 transition"
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  );
}