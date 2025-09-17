import React from "react";

const ProjectCard = ({ data }) => {
  return (
    <div
      className="relative rounded-2xl overflow-hidden 
      bg-white/10 backdrop-blur-lg border border-white/20
      p-4 sm:p-6 md:p-8 flex flex-col items-center text-center
      shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
    >
      {/* Title */}
      <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">
        {data.title}
      </h3>

      {/* Description */}
      <p className="text-gray-200 text-xs sm:text-sm md:text-base mb-4 sm:mb-6 leading-relaxed">
        {data.desc}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-4 sm:mb-6">
        {data.stack.map((tech, i) => (
          <span
            key={i}
            className="bg-purple-600/70 text-white text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
        <a
          href={data.demo}
          target="_blank"
          rel="noreferrer"
          className="bg-white/90 text-purple-700 font-semibold text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-lg 
            hover:bg-white transition shadow-md"
        >
          🔗 Demo
        </a>
        <a
          href={data.code}
          target="_blank"
          rel="noreferrer"
          className="bg-purple-600/80 text-white font-semibold text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-lg 
            hover:bg-purple-700 transition shadow-md"
        >
          💻 Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;

