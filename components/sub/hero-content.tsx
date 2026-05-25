"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Data Science & AI Enthusiast
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-2 mt-6 max-w-[600px] w-auto h-auto"
        >
          <span className="text-3xl md:text-4xl font-semibold text-gray-300">
            Hey there! <span className="inline-block">👋</span>
          </span>
          <span className="text-5xl md:text-6xl font-bold text-white tracking-wide mt-2">
            I'm{" "}
            <span className="font-serif italic tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500 drop-shadow-[0_0_20px_rgba(168,85,247,0.4)]">
              Aryan
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I'm a pre-final year college student with a core focus on Data Science and Artificial Intelligence. I actively engage in competitive programming and enjoy developing intelligent machine learning models, solving complex algorithmic challenges, and building scalable tech solutions.
        </motion.p>

        <div className="w-fit">
          <motion.a
            href="/RESUME.pdf"
            download="Aryan_Kumar_Resume.pdf"
            variants={slideInFromLeft(1)}
            className="flex items-center justify-center bg-transparent border border-[#7042f88b] hover:bg-[#7042f88b] text-white py-2 px-8 rounded-lg cursor-pointer transition-all duration-300 text-center"
          >
            Resume
          </motion.a>
        </div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-[#7042f88b] shadow-[0_0_40px_rgba(112,66,248,0.5)]">
          <Image
            src="/profile.png"
            alt="Aryan Kumar"
            fill
            className="object-cover"
            draggable={false}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};