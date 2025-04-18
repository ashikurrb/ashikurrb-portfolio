import React from "react";
import { Github, ExternalLink } from "lucide-react";
import studentportal from "../assets/images/student-portal-dashboard.png";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MacOsButtons = () => (
  <div className="flex gap-2 mb-4">
    <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors shadow-md" />
  </div>
);

const ProjectShowcase = () => {
  const projects = [
    {
      title: "Student Management Portal",
      description:
        "I build this web application for 5points Academy to manage their students, classes, and instructors. It has a user-friendly interface and a powerful admin panel",
      tags: [
        "JavaScript",
        "React",
        "Bootstrap",
        "Node.js",
        "ExpressJS",
        "MongoDB",
      ],
      links: {
        github: "https://github.com/ashikurrb/student-portal",
        live: "https://www.5points-academy.com/",
        demo: "https://5points-academy.netlify.app/",
      },
      image: studentportal,
      featured: true,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0f1629] text-slate-100 p-8 md:py-0">
      <div className="flex flex-col items-center space-y-6 pt-20 pb-20">
        <div className="relative">
          <h2 className="text-4xl text-center md:text-6xl font-extrabold text-transparent bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-500 bg-clip-text lg:pt-10">
            From Brain to Code
          </h2>
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-400/30 to-indigo-400/30 blur-xl rounded-xl" />
        </div>
        <p className="text-sm md:text-lg text-gray-400 font-medium italic tracking-wide">
          "Things I’ve Built..."
        </p>
        <div className="animate-pulse mt-4 w-6 h-6 border-4 border-dashed border-cyan-400 rounded-full" />
      </div>
      <div className="max-w-7xl mx-auto space-y-12 mb-20">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center group rounded-lg p-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 bg-[length:400%_400%] animate-gradient-xy hover:bg-[length:100%_100%] transition-all duration-700 shadow-lg"
          >
            {/* Image Section */}
            <div className="md:w-1/2 overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            {/* Text Section */}
            <Card className="md:w-1/2 bg-gradient-to-br from-slate-800 to-gray-900 rounded-lg overflow-hidden shadow-md transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl p-6">
              <MacOsButtons />

              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-emerald-400 text-sm font-mono mb-2 tracking-wide uppercase">
                      My Project
                    </div>
                    <CardTitle className="text-slate-100 text-3xl font-bold">
                      {project.title}
                    </CardTitle>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.links.github}
                      className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={22} />
                    </a>
                    <a
                      href={project.links.live}
                      className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={22} />
                    </a>
                  </div>
                </div>
              </CardHeader>
              <a
                className="ml-6 text-slate-300 mb-6 text-lg leading-relaxed underline"
                target="_blank"
                href={project.links.demo}
              >
                Click for Demo | Demo Credentials: 01853660115:123456
              </a>
              <CardContent className="mt-4">
                <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 text-gray-900 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
