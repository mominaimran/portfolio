import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const SkillsHeader = ({ onPrev, onNext }) => {
  return (
    <div>
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10">
        <div>
          <p className="text-sm uppercase tracking-widest text-white mb-2">
            Why Work With Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#8200db] to-[#ff4ecd] bg-clip-text text-transparent">
            My Core Tech Stack
          </h2>
        </div>
        <div className="text-sm text-gray-300 max-w-md mt-6 md:mt-0">
          Passionate about building scalable web apps that combine performance,
          clean code, and modern design principles.
        </div>
      </div>

      {/* Glassmorphic Navigation Arrows */}
      <div className="flex justify-end mb-4 gap-3">
        <button
          className="w-11 h-11 rounded-full text-pink border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition"
          onClick={onPrev}
        >
          <ArrowLeft size={20} />
        </button>
        <button
          className="w-11 h-11 text-pink rounded-full border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition"
          onClick={onNext}
        >
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default SkillsHeader;
