"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-6 left-0 w-full z-50 px-6 py-4">
      <nav
        className={`
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          rounded-2xl
          border
          transition-all
          duration-300

          ${
            isScrolled
              ? "border-white/30 bg-white/20 px-8 py-3 shadow-2xl backdrop-blur-2xl"
              : "border-white/20 bg-white/10 px-8 py-4 backdrop-blur-xl"
          }
        `}
      >
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center text-[2rem] font-bold tracking-tight transition-transform duration-300 hover:scale-105"
        >
          <span className="text-white transition-colors duration-300 group-hover:text-gray-100">
            Jayasurya
          </span>

          <div className="ml-1 flex">
            {[0, 1, 2].map((dot) => (
              <motion.span
                key={dot}
                animate={{
                  opacity: [0.4, 1, 0.4],
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: dot * 0.2,
                  ease: "easeInOut",
                }}
                className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent"
              >
                .
              </motion.span>
            ))}
          </div>
        </Link>

        {/* Navigation */}
        <ul className="hidden gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="
                  relative
                  text-gray-300
                  transition-all
                  duration-300
                  hover:text-blue-400

                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:h-[2px]
                  after:w-0
                  after:bg-blue-400
                  after:transition-all
                  after:duration-300

                  hover:after:w-full
                "
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}