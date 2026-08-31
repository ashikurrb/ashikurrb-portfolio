import React from "react";
import EducationLoader from "./ui/EducationLoader";
import { GraduationCap, Award, Calendar, School, CheckCircle2, BookOpen } from "lucide-react";

const EducationSection = () => {
  const educationData = [
    {
      degree: "BBA in Tourism and Hospitality Management",
      school: "Mohammadpur Kendriya College",
      year: "2020 - 2026",
      type: "Undergraduate Degree",
      achievements: ["CGPA 3.52"],
      status: "Completed",
      highlights: "Business administration, operational workflows, organizational leadership, and client communications.",
      focus: ["Management", "Economics", "Marketing", "Strategy"]
    },
    {
      degree: "SSC in Science",
      school: "Feni Govt. Pilot High School",
      year: "2010 - 2015",
      type: "Secondary School Certificate",
      achievements: ["GPA 5.00"],
      status: "Completed",
      highlights: "Analytical foundation in higher mathematics, computational logic, and physical sciences.",
      focus: ["Mathematics", "Physics", "Computer Studies", "Chemistry"]
    },
  ];

  return (
    <section className="min-h-screen bg-[#0f1629] text-slate-100 py-16 px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center space-y-4 my-16">
        <div className="relative inline-block">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text">
            Academic Background
          </h2>
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 blur-2xl rounded-full" />
        </div>

        <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto italic font-medium">
          "From ABCs to APIs..."
        </p>
      </div>

      {/* Modern Vertical Timeline Track */}
      <div className="max-w-4xl mx-auto relative">
        {/* Central Luminous Track Line */}
        <div className="absolute left-4 md:left-8 top-3 bottom-3 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-500 to-emerald-400/40" />

        <div className="space-y-10">
          {educationData.map((edu, index) => (
            <div key={index} className="relative pl-12 md:pl-20 group">
              {/* Timeline Node Ring */}
              <div className="absolute left-2 md:left-6 top-1.5 -translate-x-1/2 w-5 h-5 rounded-full border-2 border-cyan-400 bg-slate-950 flex items-center justify-center shadow-[0_0_12px_rgba(34,211,238,0.6)] group-hover:scale-125 transition-transform duration-300">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              {/* Slate Slate Content Card */}
              <div className="relative rounded-2xl bg-gradient-to-r from-slate-900/90 to-slate-900/50 border border-slate-800/80 p-6 md:p-8 backdrop-blur-md transition-all duration-300 hover:border-slate-700 hover:bg-slate-900/95 hover:shadow-2xl">
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800/60">
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="text-cyan-400 font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/50">
                      {edu.type}
                    </span>
                    <span className="inline-flex items-center gap-1 text-slate-400 bg-slate-800/60 px-2 py-0.5 rounded">
                      <Calendar size={12} className="text-purple-400" />
                      {edu.year}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-emerald-400 text-xs font-mono bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40">
                      <CheckCircle2 size={12} />
                      {edu.status}
                    </span>
                    {edu.achievements.map((achievement, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 text-xs font-bold font-mono px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-400/20 to-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                      >
                        <Award size={12} />
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Primary Degree Information */}
                <div className="mt-4 space-y-1">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-100 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-300 group-hover:to-cyan-300 group-hover:bg-clip-text transition-colors">
                    {edu.degree}
                  </h3>
                  <div className="flex items-center gap-2 text-slate-300 font-medium text-sm pt-0.5">
                    <School size={15} className="text-indigo-400 shrink-0" />
                    <span>{edu.school}</span>
                  </div>
                </div>

                {/* Body Summary */}
                <p className="mt-3 text-slate-400 text-sm leading-relaxed">
                  {edu.highlights}
                </p>

                {/* Focus Areas Tag Pills */}
                <div className="mt-4 pt-4 border-t border-slate-800/40 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1 text-xs font-mono text-slate-500 mr-1">
                    <BookOpen size={12} /> Key Focus:
                  </span>
                  {edu.focus.map((item, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs font-mono text-slate-300 bg-slate-800/40 border border-slate-700/50 px-2.5 py-0.5 rounded-md hover:border-slate-600 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
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