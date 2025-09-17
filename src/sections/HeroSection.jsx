import React from "react";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="bg-background px-4 sm:px-6 md:px-16 text-white flex flex-col md:flex-row items-center justify-between py-12 md:min-h-screen"
    >
      {/* Left Content */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-4 sm:space-y-5">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-snug font-heading">
          Turning Ideas <br />
          Into Reality With{" "}
          <span className="text-purple font-script">Code</span>
        </h1>

        {/* Typewriter Effect */}
        <h2 className="text-sm sm:text-lg md:text-xl text-pink font-mono font-medium">
          <Typewriter
            words={[
              "MERN Stack Developer",
              "Frontend Enthusiast",
              "Backend Explorer",
              "Tech Innovator",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </h2>

        <p className="text-xs sm:text-base md:text-lg text-gray-300 font-body max-w-sm mx-auto md:mx-0">
          Passionate about building seamless, modern web experiences. Let’s
          create something powerful together.
        </p>

        <div className="flex flex-row gap-3 sm:gap-5 mt-8 sm:mt-6 justify-center md:justify-start">
          {/* Primary Button */}
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-[#8200db] to-[#ff4ecd] hover:opacity-90 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Let’s Connect
          </a>

          {/* Secondary Button */}
          <a
            href="#projects"
            className="relative inline-block text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium overflow-hidden group"
          >
            <span className="absolute inset-0 rounded-full p-[1.5px] sm:p-[2px] bg-gradient-to-r from-[#8200db] to-[#ff4ecd]">
              <span className="block h-full w-full rounded-full bg-[#1a0b2e] group-hover:bg-[#1a0b2e]/70 transition-colors duration-300"></span>
            </span>
            <span className="relative z-10">View Projects</span>
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 mt-12 sm:mt-6 md:mt-0 flex justify-center">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple to-pink blur-2xl opacity-20"></div>
          <img
            src="/techAvatar.png"
            alt="Profile"
            className="w-36 sm:w-52 md:w-72 h-36 sm:h-52 md:h-72 object-cover rounded-full border-4 border-purple-500/30 shadow-[0_6px_16px_0_rgba(31,38,135,0.37)]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

