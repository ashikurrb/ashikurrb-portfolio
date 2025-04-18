import React, { useState } from "react";
import EducationLoader from "./ui/EducationLoader";
import { Star, Award, Calendar } from "lucide-react";

const EducationSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const educationData = [
    {
      degree: "BBA in Tourism and Hospitaltiy Management",
      school: "Mohammadpur Kendriya College",
      year: "2020 - Present",
      mascot: "🎓",
      type: "Bachelor Degree",
      achievements: [""],
    },
    {
      degree: "SSC in Science",
      school: "Feni Govt. Pilot High School",
      year: "2010 - 2015",
      mascot: "🎓",
      type: "Secondary School",
      achievements: ["GPA 5.00"],
    },
  ];

  return (
    <section className="min-h-screen bg-[#0f1629] text-slate-100 py-8 md:py-0">
      <div className="flex flex-col items-center space-y-6 pt-20 pb-20">
        <div className="relative">
          <h2 className="text-4xl text-center md:text-6xl font-extrabold text-transparent bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-500 bg-clip-text lg:pt-10">
          Academic Background
          </h2>
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-400/30 to-indigo-400/30 blur-xl rounded-xl" />
        </div>
        <p className="text-sm md:text-lg text-gray-400 font-medium italic tracking-wide">
        "From ABCs to APIs...."
        </p>
        <div className="animate-pulse mt-4 w-6 h-6 border-4 border-dashed border-cyan-400 rounded-full" />
      </div>
      <div className="max-w-5xl mx-auto px-4">
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`relative group border-2 rounded-xl transition-all duration-500 ${
                hoveredIndex === index
                  ? "border-teal-500 shadow-lg transform scale-105"
                  : "border-blue-400"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Main card content */}
              <div className="relative rounded-lg bg-[#0f1629] p-8 transition-all duration-300 hover:bg-[#1a243a]">
                {/* macOS-like window controls on the left */}
                <div className="flex justify-start gap-2 absolute top-3 left-3">
                  <button className="w-2.5 h-2.5 bg-red-500 rounded-full transition-all hover:bg-red-600" />
                  <button className="w-2.5 h-2.5 bg-yellow-400 rounded-full transition-all hover:bg-yellow-500" />
                  <button className="w-2.5 h-2.5 bg-green-500 rounded-full transition-all hover:bg-green-600" />
                </div>

                <div className="py-3 text-emerald-500 text-sm font-medium tracking-wide">
                  {edu.type}
                </div>

                {/* Top section */}
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{edu.mascot}</span>
                      <h3 className="text-2xl font-bold text-slate-200">
                        {edu.degree}
                      </h3>
                    </div>
                    <p className="text-lg text-slate-400 flex items-center gap-2">
                      <Star className="w-5 h-5 text-teal-500" />
                      {edu.school}
                    </p>
                    <p className="text-slate-500 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {edu.year}
                    </p>
                  </div>
                </div>

                {/* Achievements */}
                <div className="mt-6">
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-500 hover:bg-teal-500/20 transition-colors duration-300 flex items-center gap-2 text-sm"
                      >
                        <Award className="w-4 h-4" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <EducationLoader />
    </section>
  );
};

export default EducationSection;
