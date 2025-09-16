const Footer = () => {
  return (
    <footer className="bg-[#1a0b2e] text-gray-300 pt-10 pb-5 px-6 md:px-20 relative">
      {/* Top Gradient Border */}
      <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#8200db] to-transparent"></div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left - About */}
        <p className="text-sm md:text-base text-center md:text-left max-w-sm leading-relaxed">
          I’m a MERN-stack developer focused on building fast, scalable, and modern web applications with clean code.
        </p>

        {/* Right - Resume */}
        <a
          href="/Momina_Imran_Resume.pdf"
          download
          className="border border-white/30 text-white px-4 py-2 rounded-lg text-sm md:text-base font-medium hover:bg-white hover:text-[#1a0b2e] transition duration-300"
        >
          Download Resume
        </a>
      </div>

      {/* Divider */}
      <hr className="border-gray-700 my-6" />

      {/* Bottom Legal */}
      <div className="text-center text-xs md:text-sm text-gray-500 max-w-md mx-auto">
        © {new Date().getFullYear()} Crafted with ❤️ using React & Tailwind.
      </div>
    </footer>
  );
};

export default Footer;

