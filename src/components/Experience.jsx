import {
  Calendar,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import WebBriksLogo from "../assets/images/wb-icon.png";
import FivePointsLogo from "../assets/images/5points.png";

const ExperienceCard = ({
  title,
  company,
  url,
  period,
  description,
  logo,
  status,
  roleType,
  techStack,
}) => (
  <div className="relative group rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-950/90 border border-slate-800/80 hover:border-slate-700/90 p-6 md:p-8 backdrop-blur-md transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/5 flex flex-col justify-between">
    <div>
      {/* Top Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800/60">
        <div className="flex items-center gap-4">
          <div className="relative shrink-0">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center overflow-hidden shadow-md">
              <img
                src={logo}
                alt={`${company} logo`}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
              {roleType}
            </span>
            <h3 className="text-xl md:text-2xl font-bold text-slate-100 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-300 group-hover:to-cyan-300 group-hover:bg-clip-text transition-all">
              {title}
            </h3>
            <span className="text-slate-400 font-medium text-sm">
              {company}
            </span>
          </div>
        </div>

        {/* Date and Status Pill */}
        <div className="flex flex-wrap sm:flex-col sm:items-end gap-2">
          <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-300 bg-slate-800/70 border border-slate-700/60 px-3 py-1 rounded-md">
            <Calendar size={13} className="text-purple-400" />
            {period}
          </span>
          <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-950/50 border border-emerald-800/40 px-2.5 py-0.5 rounded-full">
            <CheckCircle2 size={11} />
            {status}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="mt-5 text-slate-400 text-sm md:text-base leading-relaxed">
        {description}
      </p>

      {/* Core Competencies Tags */}
      <div className="mt-5 flex flex-wrap items-center gap-2">
        {techStack.map((tech, i) => (
          <span
            key={i}
            className="text-xs font-mono text-slate-300 bg-slate-950/60 border border-slate-800 px-2.5 py-1 rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>

    {/* Live Profile Link */}
    <div className="mt-6 pt-5 border-t border-slate-800/50 flex justify-end">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer inline-flex items-center gap-1.5 text-xs font-mono font-medium text-cyan-400 hover:text-cyan-300 transition-colors group/link"
      >
        <span>Company Reference</span>
        <ArrowUpRight
          size={14}
          className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
        />
      </a>
    </div>
  </div>
);

const ExperienceSection = () => {
  const experiences = [
    {
      logo: WebBriksLogo,
      title: "Full Stack Developer",
      company: "Web Briks LLC",
      url: "https://webbriks.com/teams",
      period: "Aug 20, 2025 - Present",
      roleType: "Full-Time / Core Team",
      status: "Currently Working",
      description:
        "Engineered end-to-end full-stack web applications, maintained production deployments, optimized API response performance, and collaborated with cross-functional teams to deliver client-facing scalable software solutions.",
      techStack: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "PostgreSQL",
        "Cloud Deployment",
      ],
    },
    {
      logo: FivePointsLogo,
      title: "System Developer & IT",
      company: "5points Academy",
      url: "https://beta.5points-academy.com/",
      period: "2024 - Present",
      roleType: "System Development & IT Support",
      status: "Active Contributor",
      description:
        "Architected and maintained the student management portal system, managed backend database integrity, and provided proactive IT infrastructure support and technical resolution on an ongoing basis.",
      techStack: [
        "Portal Architecture",
        "Database Management",
        "System Admin",
        "API Support",
      ],
    },
  ];

  return (
    <section className="min-h-screen bg-[#0f1629] text-slate-100 py-16 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center space-y-4 my-16">
        <div className="relative inline-block">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text">
            Professional Journey
          </h2>
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 blur-2xl rounded-full" />
        </div>

        <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto italic font-medium">
          "Crafting stories, one milestone at a time..."
        </p>
      </div>

      {/* Experience Cards Stack */}
      <div className="max-w-4xl mx-auto space-y-6">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
