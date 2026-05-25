"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/lib/motion";
import Image from "next/image";
import {
  SKILL_DATA,
  FRONTEND_SKILL,
  BACKEND_SKILL,
  DATA_SCIENCE_SKILL,
  TOOLS_SKILL,
} from "@/constants";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20"
      style={{ transform: "scale(0.9)" }}
    >
      <div className="w-full h-auto flex flex-col items-center justify-center z-[30]">
        <motion.div variants={slideInFromTop} className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]">
          My Tech Stack & Skills
        </motion.div>
      </div>

      <div className="flex flex-col gap-6 items-center mt-10 z-[30]">
        
        {/* Top Layer */}
        <div className="flex flex-row justify-around flex-wrap gap-5 max-w-[1000px]">
          {SKILL_DATA.map((image, index) => (
            <motion.div key={index} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
              <Image src={`/skills/${image.image}`} width={image.width} height={image.height} alt={image.skill_name} />
            </motion.div>
          ))}
        </div>
        
        {/* Frontend Layer */}
        <div className="flex flex-row justify-around flex-wrap gap-5 max-w-[1000px]">
          {FRONTEND_SKILL.map((image, index) => (
            <motion.div key={index} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
              <Image src={`/skills/${image.image}`} width={image.width} height={image.height} alt={image.skill_name} />
            </motion.div>
          ))}
        </div>
        
        {/* Backend Layer */}
        <div className="flex flex-row justify-around flex-wrap gap-5 max-w-[1000px]">
          {BACKEND_SKILL.map((image, index) => (
            <motion.div key={index} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
              <Image src={`/skills/${image.image}`} width={image.width} height={image.height} alt={image.skill_name} />
            </motion.div>
          ))}
        </div>

        {/* Data Science & ML Layer */}
        <div className="flex flex-row justify-around flex-wrap gap-5 max-w-[1000px]">
          {DATA_SCIENCE_SKILL.map((image, index) => (
            <motion.div key={index} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
              <Image src={`/skills/${image.image}`} width={image.width} height={image.height} alt={image.skill_name} />
            </motion.div>
          ))}
        </div>

        {/* Tools Layer */}
        <div className="flex flex-row justify-around flex-wrap gap-5 max-w-[1000px]">
          {TOOLS_SKILL.map((image, index) => (
            <motion.div key={index} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
              <Image src={`/skills/${image.image}`} width={image.width} height={image.height} alt={image.skill_name} />
            </motion.div>
          ))}
        </div>

      </div>

      <div className="w-full h-full absolute top-0 left-0 z-[10] flex items-center justify-center">
        <video className="w-full h-auto opacity-[0.3] max-h-[600px] object-contain" preload="false" playsInline loop muted autoPlay src="/videos/skills-bg.webm" />
      </div>
    </section>
  );
};

export default Skills;