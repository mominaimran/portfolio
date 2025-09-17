import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const SkillsHeader = ({ onPrev, onNext }) => {
  return (
    <div>
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-6 md:mb-10 gap-4">
        <div className="text-center md:text-left">
          <p className="text-xs sm:text-sm uppercase tracking-widest text-white mb-1 sm:mb-2">
            Why Work With Me
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#8200db] to-[#ff4ecd] bg-clip-text text-transparent leading-snug">
            My Core Tech Stack
          </h2>
        </div>

        <div className="text-xs sm:text-sm md:text-base text-gray-300 max-w-sm text-center md:text-left mt-2 md:mt-0">
          Passionate about building scalable web apps that combine performance,
          clean code, and modern design principles.
        </div>
      </div>

      {/* Glassmorphic Navigation Arrows */}
      <div className="flex justify-center md:justify-end mb-4 gap-2 sm:gap-3">
        <button
          className="w-9 h-9  
          rounded-full text-pink/70 border border-white/20 bg-white/10 backdrop-blur-md 
          flex items-center justify-center hover:bg-white/20 transition"
          onClick={onPrev}
        >
          <ArrowLeft size={18} className="sm:size-10 md:size-10" />
        </button>
        <button
          className="w-9 h-9 
          rounded-full text-pink/70 border border-white/20 bg-white/10 backdrop-blur-md 
          flex items-center justify-center hover:bg-white/20 transition"
          onClick={onNext}
        >
          <ArrowRight size={18} className="sm:size-10 md:size-10" />
        </button>
      </div>
    </div>
  );
};

export default SkillsHeader;
