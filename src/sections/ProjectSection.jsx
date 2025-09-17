import React from "react";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Project Management Dashboard",
    desc: "A modern MERN stack dashboard to create, manage, and track projects & tasks efficiently.",
    img: "/dashboard.png",
    stack: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    demo: "https://project-management-dashboard-blue.vercel.app/",
    code: "https://github.com/mominaimran/Project_Management_Dashboard",
  },
  {
    title: "MERN Chat App",
    desc: "A real-time chat application with authentication, Socket.io, and MongoDB.",
    img: "/chatapp.png",
    stack: ["React", "Node.js", "MongoDB", "Socket.io"],
    demo: "https://mern-chat-app-nine-silk.vercel.app/",
    code: "https://github.com/mominaimran/MERN-Chat-App",
  },
];

const ProjectSection = () => {
  return (
    <section
      id="projects"
      className="w-full py-16 sm:py-20 px-4 sm:px-8 md:px-16 lg:px-20 bg-[#1a0b2e]"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 sm:mb-12 text-center text-white">
        Featured{" "}
        <span className="bg-gradient-to-r from-[#8200db] to-[#ff4ecd] bg-clip-text text-transparent">
          Projects
        </span>
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} data={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
