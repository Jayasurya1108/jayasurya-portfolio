"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import HeroBackground from "./HeroBackground";
import HeroButtons from "./HeroButtons";
import HeroSocials from "./HeroSocials";
import HeroStats from "./HeroStats";

type HeroProps = {
  name: string;
  role: string;
};

export default function Hero({ name, role }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-6 pt-25">
      <HeroBackground />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-400 text-lg font-medium">
            Hello 👋
          </p>

          <h1 className="text-6xl lg:text-7xl font-extrabold mt-4 leading-tight">
            I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent">
              {name}
            </span>
          </h1>

          <h2 className="text-2xl text-gray-300 mt-5">
            {role}
          </h2>

          <p className="text-gray-400 mt-8 text-lg leading-8 max-w-xl">
            Passionate about Artificial Intelligence,
            Machine Learning, Data Analytics and Software
            Engineering. I enjoy transforming complex ideas
            into scalable applications and meaningful insights.
          </p>

          <HeroButtons />

          <HeroSocials />
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center lg:-translate-y-8"
        >
          <div className="relative">
            {/* Floating Cards */}
            <HeroStats />

            {/* Glow */}
            <div
                className="
                    absolute
                    inset-0
                    rounded-full
                    bg-gradient-to-r
                    from-blue-500/40
                    via-cyan-400/20
                    to-purple-500/40
                    blur-[120px]
                    scale-110
                "
            ></div>

            {/* Profile Image */}
            <Image
              src="/images/jayasurya_photo.jpg"
              alt={name}
              width={380}
              height={380}
              priority
              className="relative rounded-full border-4 border-blue-500 shadow-2xl object-cover w-[380px] h-[380px]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}