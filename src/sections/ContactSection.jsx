import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-hot-toast";
import { Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("Message sent successfully! 🎉");
          form.current.reset();
        },
        () => {
          toast.error("Something went wrong. Try again later. 😢");
        }
      )
      .finally(() => setIsSending(false));
  };

  return (
    <section
      id="contact"
      className="relative py-12 sm:py-20 md:py-28 px-4 sm:px-8 md:px-12 lg:px-20 bg-[#1a0b2e] text-white overflow-hidden"
    >
      {/* Section Heading */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-3">
          Get in{" "}
          <span className="bg-gradient-to-r from-[#8200db] to-[#ff4ecd] bg-clip-text text-transparent">
            Touch
          </span>
        </h2>

        <p className="text-gray-300 text-sm sm:text-base md:text-lg">
          Let's build something amazing — drop me a message!
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* LEFT SIDE */}
        <motion.div
          className="relative z-10 max-w-md mx-auto lg:mx-0 text-center sm:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">
            Why not start a conversation?
          </h3>

          <div className="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base">
            <p>
              <strong className="text-white">Email:</strong>{" "}
              mominaimran957@gmail.com
            </p>
            <p>
              <strong className="text-white">Phone:</strong> +92 316 517 0116
            </p>
            <p>
              <strong className="text-white">Location:</strong> Rawalpindi,
              Pakistan
            </p>
          </div>

          {/* Social Icons */}
          {/* Social Icons */}
          <div className="flex items-center justify-center sm:justify-start gap-4 mt-6">
            <a
              href="https://github.com/mominaimran"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center 
               hover:scale-110 transition-transform relative overflow-hidden group"
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#8200db] to-[#ff4ecd] opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></div>
              <div className="relative z-10 text-white">
                <Github size={18} />
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/momina-imran-783b49249/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center 
               hover:scale-110 transition-transform relative overflow-hidden group"
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#8200db] to-[#ff4ecd] opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></div>
              <div className="relative z-10 text-white">
                <Linkedin size={18} />
              </div>
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE - FORM */}
        <motion.div
          className="relative z-10 bg-white/10 backdrop-blur-lg shadow-xl rounded-2xl p-4 sm:p-6 md:p-8 w-full max-w-md sm:max-w-lg lg:max-w-full mx-auto lg:mx-0 border border-white/20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-3 sm:space-y-4"
          >
            <input
              type="text"
              name="user_name"
              required
              placeholder="Your Name"
              className="w-full px-3 py-2 sm:py-3 bg-white/10 text-white placeholder-white/70 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8200db]/70 transition-all text-sm sm:text-base"
            />
            <input
              type="email"
              name="user_email"
              required
              placeholder="Your Email"
              className="w-full px-3 py-2 sm:py-3 bg-white/10 text-white placeholder-white/70 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8200db]/70 transition-all text-sm sm:text-base"
            />
            <textarea
              name="message"
              required
              placeholder="Your Message"
              rows="3"
              className="w-full px-3 py-2 sm:py-3 bg-white/10 text-white placeholder-white/70 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8200db]/70 resize-none transition-all text-sm sm:text-base"
            ></textarea>
            <motion.button
              type="submit"
              disabled={isSending}
              whileTap={{ scale: 0.96 }}
              whileHover={{ scale: 1.02 }}
              className={`w-full bg-[#8200db] hover:bg-[#6c00b9] transition-colors duration-300 py-2 sm:py-3 px-6 rounded-lg font-semibold text-white ${
                isSending ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSending ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
