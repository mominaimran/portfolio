import React, { useState } from "react";
import { X, Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["Home", "Skills", "Projects", "Services", "Contact"];

  return (
    <nav className="bg-background font-body sticky top-4 z-50 text-white border-[1px] rounded-[70px] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] h-[70px] w-full px-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center h-full">
        {/* Word Logo */}
       <div className="h-full flex items-center">
  <span className="relative text-xl md:text-2xl font-extrabold bg-gradient-to-r from-[#8200db] to-[#ff4ecd] bg-clip-text text-transparent tracking-wider overflow-hidden group">
    DevStudio.
    {/* Shine effect */}
    <span className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></span>
  </span>
</div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="relative hover:text-pink duration-200 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-pink after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full text-[0.95rem]"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <X onClick={() => setIsOpen(false)} className="cursor-pointer" />
          ) : (
            <Menu onClick={() => setIsOpen(true)} className="cursor-pointer" />
          )}
        </div>
      </div>

      {/* Mobile Nav Links */}
      <ul
        className={`md:hidden flex flex-col gap-3 bg-background text-sm px-4 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-60 py-4 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {navLinks.map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="block py-2 border-b border-white/10 hover:text-purple-400 duration-200"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;