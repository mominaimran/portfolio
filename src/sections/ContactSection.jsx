import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-hot-toast";
import { Github, Linkedin, Twitter } from "lucide-react";

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
      className="relative py-20 sm:py-28 px-6 sm:px-12 bg-[#1a0b2e] text-white overflow-hidden"
    >
      {/* Section Heading */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h2 className="text-4xl sm:text-5xl font-bold mb-3">
          Get in{" "}
          <span className="bg-gradient-to-r from-[#8200db] to-[#ff4ecd] bg-clip-text text-transparent">
            Touch
          </span>
        </h2>

        <p className="text-gray-300 text-lg">
          Let's build something amazing — drop me a message!
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* LEFT SIDE */}
        <motion.div
          className="relative z-10 max-w-md mx-auto lg:mx-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-4">
            Why not start a conversation?
          </h3>

          <div className="space-y-3 text-gray-300">
            <p>
              <strong className="text-white">Email:</strong> mominaimran957@gmail.com
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
<div className="flex gap-4 mt-6">
  {[Github, Linkedin, Twitter].map((Icon, idx) => (
    <a
      key={idx}
      href="#"
      className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center 
                 hover:scale-110 transition-transform relative overflow-hidden group"
    >
      {/* Gradient Overlay on Hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#8200db] to-[#ff4ecd] opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></div>
      <div className="relative z-10 text-white">
        <Icon size={18} />
      </div>
    </a>
  ))}
</div>

        </motion.div>

        {/* RIGHT SIDE - FORM */}
        <motion.div
          className="relative z-10 bg-white/10 backdrop-blur-lg shadow-xl rounded-2xl p-6 max-w-md w-full sm:max-w-lg mx-auto lg:mx-0 border border-white/20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="user_name"
              required
              placeholder="Your Name"
              className="w-full px-3 py-2 bg-white/10 text-white placeholder-white/70 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8200db]/70 transition-all"
            />
            <input
              type="email"
              name="user_email"
              required
              placeholder="Your Email"
              className="w-full px-3 py-2 bg-white/10 text-white placeholder-white/70 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8200db]/70 transition-all"
            />
            <textarea
              name="message"
              required
              placeholder="Your Message"
              rows="3"
              className="w-full px-3 py-2 bg-white/10 text-white placeholder-white/70 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8200db]/70 resize-none transition-all"
            ></textarea>
            <motion.button
              type="submit"
              disabled={isSending}
              whileTap={{ scale: 0.96 }}
              whileHover={{ scale: 1.02 }}
              className={`w-full bg-[#8200db] hover:bg-[#6c00b9] transition-colors duration-300 py-3 px-6 rounded-lg font-semibold text-white ${
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
