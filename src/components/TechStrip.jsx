import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const TechStrip = () => {
  const marqueeRef = useRef(null);
  const [scrollDir, setScrollDir] = useState("left");
  const tweenRef = useRef(null);

  const lines = [
    "Creative Tech • Clean Code • Passion • Repeat",
    "Clean Code • Pixel Perfect UI • Fast Performance",
    "Code • Build • Deploy • Innovate",
  ];

  // Scroll direction detection
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrollDir(currentY > lastScrollY ? "left" : "right");
      lastScrollY = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP Marquee Setup
  useEffect(() => {
    if (!marqueeRef.current) return;
    if (tweenRef.current) tweenRef.current.kill();

    const totalWidth = marqueeRef.current.scrollWidth / 2;

    tweenRef.current = gsap.to(marqueeRef.current, {
      x: scrollDir === "left" ? -totalWidth : 0,
      duration: 80, // Slower speed
      ease: "linear",
      repeat: -1,
    });

    return () => tweenRef.current.kill();
  }, [scrollDir]);

  // Pause on hover
  const handleMouseEnter = () => tweenRef.current?.pause();
  const handleMouseLeave = () => tweenRef.current?.resume();

  return (
    <div
      className="w-full relative z-30 overflow-hidden bg-[#f9f9f9] border-y border-[#2f234e] py-5
      [box-shadow:inset_2px_2px_6px_rgba(0,0,0,0.08),inset_-2px_-2px_6px_rgba(255,255,255,0.9)]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Left & Right Fades */}
      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#f9f9f9] to-transparent z-40 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#f9f9f9] to-transparent z-40 pointer-events-none" />

      {/* Scrolling Text */}
      <div
        ref={marqueeRef}
        className="flex gap-4 sm:gap-8 md:gap-10 text-base sm:text-xl md:text-3xl lg:text-4xl uppercase font-bold text-background whitespace-nowrap px-1 sm:px-2 font-mono [text-shadow:1px_1px_2px_rgba(0,0,0,0.1),-1px_-1px_2px_rgba(255,255,255,0.8)]">
        {Array(10)
          .fill(lines)
          .flat()
          .map((text, i) => (
            <span key={i}>{text}</span>
          ))}
      </div>
    </div>
  );
};

export default TechStrip;
