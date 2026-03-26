import React, { useState } from "react";
import {
  FaHome,
  FaLaptopCode,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaEnvelope,
  FaGripVertical,
  FaGripHorizontal,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";

export default function Header() {
  const location = useLocation();
  const controls = useAnimation(); 

  const [activeLink, setActiveLink] = useState(() => {
    return location.pathname.substring(1) || "home";
  });

  const [dockPosition, setDockPosition] = useState(() => {
    return typeof window !== "undefined" && window.innerWidth >= 768 ? "top" : "bottom";
  });

  const navLinks = [
    { id: "home", icon: FaHome, text: "Home", path: "/" },
    { id: "skills", icon: FaCode, text: "Skills", path: "/skills" },
    {
      id: "experience",
      icon: FaBriefcase,
      text: "Experience",
      path: "/experience",
    },
    {
      id: "education",
      icon: FaGraduationCap,
      text: "Education",
      path: "/education",
    },
    { id: "projects", icon: FaLaptopCode, text: "Projects", path: "/projects" },
    { id: "contact", icon: FaEnvelope, text: "Contact", path: "/contact" },
  ];

  const handleDragEnd = async (event, info) => {
    const { x, y } = info.point;
    const w = window.innerWidth;
    const h = window.innerHeight;

    const distances = {
      top: y,
      bottom: h - y,
      left: x,
      right: w - x,
    };

    const closest = Object.keys(distances).reduce((a, b) =>
      distances[a] < distances[b] ? a : b
    );

    setDockPosition(closest);

    await controls.start({
      x: 0,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 25 }
    });
  };

  const isVertical = dockPosition === "left" || dockPosition === "right";

  // FIX: Swapped transform centering for auto-margin centering
  // This physically centers the element without relying on CSS transforms
  const positionClasses = {
    top: "top-4 left-0 right-0 mx-auto w-fit",
    bottom: "bottom-4 left-0 right-0 mx-auto w-fit",
    left: "left-4 top-0 bottom-0 my-auto h-fit",
    right: "right-4 top-0 bottom-0 my-auto h-fit",
  };

  return (
    <motion.header
      drag
      dragMomentum={false}
      animate={controls} 
      layout 
      onDragEnd={handleDragEnd}
      // FIX: Removed the conflicting 'transform' class from here
      className={`fixed z-50 ${positionClasses[dockPosition]}`}
    >
      <div className="p-[2px] rounded-full bg-gradient-to-r from-emerald-400 via-cyan-500 to-indigo-500 animate-gradient-x relative">
        <nav className={`relative bg-gray-900/90 backdrop-blur-md rounded-full ${isVertical ? 'py-8 px-3' : 'px-6 py-2.5'}`}>
          
          <div 
            className={`absolute flex items-center justify-center text-gray-400 cursor-grab active:cursor-grabbing hover:text-white transition-colors z-10
              ${isVertical 
                ? 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2' 
                : 'left-0 top-1/2 -translate-y-1/2 -translate-x-1/2'
              }
            `}
          >
            <div className="bg-gray-900 rounded-full p-1 shadow-sm">
              {isVertical ? <FaGripHorizontal className="text-xs" /> : <FaGripVertical className="text-xs" />}
            </div>
          </div>

          <div className={`flex items-center ${isVertical ? 'flex-col gap-4' : 'gap-1 md:gap-2'}`}>
            {navLinks.map(({ id, icon: Icon, text, path }) => (
              <Link
                key={id}
                to={path}
                onClick={() => setActiveLink(id)}
                className={`relative group rounded-full text-sm font-medium
                  transition-all duration-300 flex items-center justify-center
                  hover:bg-white/10 
                  ${isVertical ? 'p-3' : 'px-3 py-1.5 gap-2'}
                  ${
                    activeLink === id
                      ? "bg-white/15 text-white"
                      : "text-gray-300 hover:text-white"
                  }
                `}
              >
                <Icon
                  className={`text-base transition-transform duration-200 ${
                    activeLink === id ? "scale-110" : "group-hover:scale-110"
                  }`}
                />
                
                <span className={`${isVertical ? 'hidden' : 'hidden md:inline'}`}>
                  {text}
                </span>

                {isVertical && (
                  <span
                    className={`absolute top-1/2 -translate-y-1/2 whitespace-nowrap px-2.5 py-1.5 rounded-md bg-gray-800 text-white text-xs font-semibold shadow-xl
                      opacity-0 pointer-events-none transition-all duration-200 ease-out z-50
                      ${dockPosition === 'left' ? 'left-full ml-4 -translate-x-2 group-hover:translate-x-0' : ''}
                      ${dockPosition === 'right' ? 'right-full mr-4 translate-x-2 group-hover:translate-x-0' : ''}
                      group-hover:opacity-100
                    `}
                  >
                    {text}
                  </span>
                )}
              </Link>
            ))}
          </div>
        </nav>
      </div>
      <style>{`
        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 3s linear infinite;
          background-size: 200% 200%;
        }
      `}</style>
    </motion.header>
  );
}