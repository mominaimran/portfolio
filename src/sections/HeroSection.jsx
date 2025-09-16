import React from "react";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-background px-12 text-white flex flex-col md:flex-row items-center justify-between md:px-16 py-12"
    >
      {/* Left Content */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight font-heading">
          Turning Ideas <br />
          Into Reality With <span className="text-purple font-script">Code</span>
        </h1>

        {/* Typewriter Effect */}
        <h2 className="text-lg md:text-xl text-pink font-mono font-medium">
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

        <p className="text-lg md:text-xl text-gray-300 font-body">
          Passionate about building seamless, modern web experiences.  
          Let’s create something powerful together.
        </p>

        <div className="flex flex-row gap-4 justify-center md:justify-start">
  {/* Primary Button */}
  <a
    href="#contact"
    className="inline-block bg-gradient-to-r from-[#8200db] to-[#ff4ecd] hover:opacity-90 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:scale-105 transition-transform duration-300"
  >
    Let’s Connect
  </a>

  {/* Secondary Button */}
 <a
  href="#projects"
  className="relative inline-block text-white px-6 py-3 rounded-full font-medium overflow-hidden group"
>
  {/* Gradient Border Layer */}
  <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-[#8200db] to-[#ff4ecd]">
    <span className="block h-full w-full rounded-full bg-[#1a0b2e] group-hover:bg-[#1a0b2e]/70 transition-colors duration-300"></span>
  </span>
  <span className="relative z-10">View Projects</span>
</a>

</div>

      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple to-pink blur-2xl opacity-20"></div>
          <img
            src="/techAvatar.png"
            alt="Profile"
            className="w-72 h-72 object-cover rounded-full border-4 border-purple-500/30 shadow-[0_6px_16px_0_rgba(31,38,135,0.37)]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
