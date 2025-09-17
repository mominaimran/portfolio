import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import {
  SiHtml5,
  SiJavascript,
  SiWebflow,
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiPostman,
  SiGithub,
  SiVercel,
  SiFigma,
  SiAntdesign,
} from "react-icons/si";
import { MdConnectWithoutContact } from "react-icons/md";
import { VscCode } from "react-icons/vsc";
import { FaPeopleGroup } from "react-icons/fa6";
import SkillsHeader from "./SkillsHeader";

const skillsDataGrouped = [
  {
    title: "Tech Stack",
    skills: [
      {
        name: "MongoDB",
        icon: <SiMongodb size={36} className="text-green-400" />,
        desc: "Your data’s chill hangout spot.",
      },
      {
        name: "Express.js",
        icon: <SiExpress size={36} className="text-white" />,
        desc: "The smooth backend bouncer.",
      },
      {
        name: "React",
        icon: <SiReact size={36} className="text-blue-400" />,
        desc: "Frontend’s cool kid with superpowers.",
      },
      {
        name: "Node.js",
        icon: <SiNodedotjs size={36} className="text-green-500" />,
        desc: "The server’s speedy engine.",
      },
    ],
  },
  {
    title: "Tools",
    skills: [
      {
        name: "GitHub",
        icon: <SiGithub size={36} className="text-white" />,
        desc: "Where all the code magic lives.",
      },
      {
        name: "Postman",
        icon: <SiPostman size={36} className="text-orange-500" />,
        desc: "The API testing superhero.",
      },
      {
        name: "Vercel",
        icon: <SiVercel size={36} className="text-white" />,
        desc: "Deploy dreams in seconds.",
      },
      {
        name: "VS Code",
        icon: <VscCode size={36} className="text-blue-400" />,
        desc: "Your comfy code playground.",
      },
    ],
  },
  {
    title: "Extra Skills",
    skills: [
      {
        name: "Communication",
        icon: <MdConnectWithoutContact size={36} className="text-purple-400" />,
        desc: "Talking tech like a pro.",
      },
      {
        name: "UI/UX Basics",
        icon: <SiFigma size={36} className="text-purple-400" />,
        desc: "Designing pixels with love.",
      },
      {
        name: "Problem Solving",
        icon: <SiAntdesign size={36} className="text-yellow-400" />,
        desc: "Turning bugs into features.",
      },
      {
        name: "Teamwork",
        icon: <FaPeopleGroup size={36} className="text-green-300" />,
        desc: "Squad goals, tech edition.",
      },
    ],
  },
  {
    title: "Other Web Skills",
    skills: [
      {
        name: "HTML & CSS",
        icon: <SiHtml5 size={36} className="text-pink-400" />,
        desc: "Building the web’s backbone.",
      },
      {
        name: "JavaScript",
        icon: <SiJavascript size={36} className="text-yellow-400" />,
        desc: "The brain of every web app.",
      },
      {
        name: "Webflow",
        icon: <SiWebflow size={36} className="text-blue-400" />,
        desc: "Design meets no-code magic.",
      },
    ],
  },
];

const flattenedSkills = skillsDataGrouped.flatMap((group) =>
  group.skills.map((skill) => ({
    ...skill,
    category: group.title,
    desc: skill.desc || `${group.title} skill: ${skill.name}`,
  }))
);

const SkillsSwiper = () => {
  const swiperRef = useRef(null);

  return (
    <div className="max-w-6xl mx-auto relative">
      <SkillsHeader
        onPrev={() => swiperRef.current?.slidePrev()}
        onNext={() => swiperRef.current?.slideNext()}
      />

      {/* Swiper */}
      <Swiper
        spaceBetween={16} // mobile gap chhoti rakhi
        slidesPerView={1.1}
        breakpoints={{
          480: { slidesPerView: 1.3, spaceBetween: 18 },
          640: { slidesPerView: 1.6, spaceBetween: 20 },
          768: { slidesPerView: 2.2, spaceBetween: 22 },
          1024: { slidesPerView: 3, spaceBetween: 24 },
        }}
        navigation={false}
        modules={[Navigation]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {flattenedSkills.map((skill, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
              className="relative group bg-white/10 backdrop-blur-xl border border-white/10 
        rounded-2xl 
        p-4 sm:p-6 md:p-8 
        min-h-[160px] sm:min-h-[200px] md:min-h-[220px] 
        flex flex-col justify-center items-center 
        shadow-[0_8px_32px_rgba(31,38,135,0.37)] overflow-hidden"
            >
              {/* Shine Effect */}
              <div
                className="absolute top-0 left-[-75%] w-[50%] h-full bg-gradient-to-r 
        from-transparent via-white/20 to-transparent 
        transform rotate-12 group-hover:translate-x-[250%] 
        transition-transform duration-700 ease-in-out"
              ></div>

              {/* Icon */}
              <div className="mb-3 sm:mb-4 flex justify-center relative z-10">
                <div className="bg-white/10 rounded-full p-3 sm:p-4 shadow-inner">
                  {skill.icon}
                </div>
              </div>

              {/* Skill Name */}
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-center text-white mb-1 sm:mb-2 relative z-10">
                {skill.name}
              </h3>

              {/* Description */}
              <p className="text-[10px] sm:text-xs md:text-sm text-gray-300 text-center relative z-10 px-1 sm:px-2">
                {skill.desc}
              </p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SkillsSwiper;
