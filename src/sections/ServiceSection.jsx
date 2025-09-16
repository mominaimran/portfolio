import React from 'react'

const services = [
  {
    title: "MERN Stack Web Development",
    icon: "🖥️",
    desc: "From frontend to backend, I craft full-stack web apps using MongoDB, Express, React & Node.js."
  },
  {
    title: "Responsive UI/UX Design",
    icon: "🎨",
    desc: "I design clean, responsive, and user-friendly interfaces with TailwindCSS and modern design systems."
  },
  {
    title: "API Integration",
    icon: "🔗",
    desc: "I integrate third-party APIs seamlessly and securely to supercharge your apps with real-world power."
  },
  {
    title: "Custom Portfolio Builds",
    icon: "🌐",
    desc: "Want your own dev portfolio? I build pixel-perfect custom sites that reflect your personal brand."
  }
]

const Services = () => {
  return (
    <section id="services" className="py-16 px-6 md:px-12 lg:px-32 bg-[#1a0b2e] text-white">
      {/* Section Heading */}
     <div className="text-center mb-12">
  <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
    What I <span className="bg-gradient-to-r from-[#8200db] to-[#ff4ecd] bg-clip-text text-transparent">Offer</span>
  </h2>
  <p className="text-gray-300 text-lg">
    These are the services I provide with 💯 focus and passion.
  </p>
</div>


      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div key={index} className="relative group rounded-2xl p-[2px] bg-gradient-to-r from-[#8200db] to-[#ff4ecd]">
            <div className="bg-[#2a1b40] rounded-2xl p-6 h-full transition-all duration-300 group-hover:bg-[#2a1b40]/80">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
