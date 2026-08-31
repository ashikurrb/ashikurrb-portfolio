import React from "react";
import profileImage from "../assets/images/ashik.png";
import { SiNotion } from "react-icons/si";
import { FaXTwitter, FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa6";
import {
  Sparkles,
  MapPin,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

const MacOsButtons = () => (
  <div className="flex items-center gap-1.5">
    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
  </div>
);

const socialProfiles = [
  {
    appName: "LinkedIn",
    icon: <FaLinkedin size={18} />,
    link: "https://www.linkedin.com/in/ashikurrb",
  },
  {
    appName: "GitHub",
    icon: <FaGithub size={18} />,
    link: "https://www.github.com/ashikurrb",
  },
  {
    appName: "Notion",
    icon: <SiNotion size={18} />,
    link: "https://ashikurrb.notion.site/portfolio",
  },
  {
    appName: "X",
    icon: <FaXTwitter size={18} />,
    link: "https://www.x.com/ashikurrb",
  },
  {
    appName: "Facebook",
    icon: <FaFacebook size={18} />,
    link: "https://www.facebook.com/ashikurrb.ashik",
  },
];

const highlights = [
  "Full-Stack Web Architecture & RESTful APIs",
  "Scalable Production Deployments & DevOps",
  "High-Converting, Responsive UI/UX Engineering",
  "Modern Ecosystem: React, Next.js, Node.js & Databases",
];

const AboutMe = () => {
  return (
    <section className="bg-[#0f1629] text-slate-100 py-20 px-4 sm:px-6 lg:px-8">
      {/* Main Container */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-center">
        {/* Profile Avatar Window */}
        <div className="w-full lg:col-span-5 flex justify-center items-center">
          <div className="w-full max-w-md rounded-2xl p-[1px] bg-gradient-to-b from-cyan-500/40 via-purple-500/20 to-transparent shadow-2xl">
            <div className="rounded-2xl bg-slate-900/95 border border-slate-800 overflow-hidden backdrop-blur-md">
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800/80 bg-slate-950/60">
                <MacOsButtons />
                <span className="text-xs font-mono text-slate-500">
                  profile_photo.png
                </span>
              </div>

              <div className="relative p-6 flex flex-col items-center justify-center">
                <div className="relative group w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden border border-slate-800 shadow-xl bg-slate-950">
                  <img
                    src={profileImage}
                    alt="Ashikur Rahman Bhuiyan"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
                </div>

                <div className="mt-5 text-center space-y-1">
                  <h3 className="text-lg font-bold text-slate-100">
                    Ashikur Rahman Bhuiyan
                  </h3>
                  <p className="text-xs font-mono text-cyan-400">
                    Full-Stack Software Developer
                  </p>
                  <div className="flex items-center justify-center gap-1 text-slate-400 text-xs pt-1">
                    <MapPin size={12} className="text-purple-400" />
                    <span>Dhaka, Bangladesh</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Card */}
        <div className="w-full lg:col-span-7 flex justify-center">
          <div className="w-full rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-950/90 border border-slate-800/80 p-6 sm:p-8 backdrop-blur-md space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
              <Sparkles size={14} /> Professional Summary
            </div>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                I am a dedicated{" "}
                <strong className="text-slate-100 font-semibold">
                  Full-Stack Developer
                </strong>{" "}
                specializing in crafting performant, scalable web applications
                and clean user-centric interfaces.
              </p>
              <p className="text-slate-400">
                With a solid foundation in the JavaScript/TypeScript ecosystem,
                I focus on building resilient backend services, intuitive
                frontends, and reliable end-to-end architectures that solve
                real-world problems.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="pt-2">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                Core Strengths
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs text-slate-300 font-mono"
                  >
                    <CheckCircle2
                      size={14}
                      className="text-emerald-400 shrink-0 mt-0.5"
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Verified Channels */}
            <div className="pt-4 border-t border-slate-800/80">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                Connect With Me
              </div>
              <div className="flex flex-wrap gap-2.5">
                {socialProfiles.map((profile, index) => (
                  <a
                    key={index}
                    href={profile.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-950/60 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all duration-300 text-xs font-mono group"
                    aria-label={profile.appName}
                  >
                    <span>{profile.icon}</span>
                    <span>{profile.appName}</span>
                    <ArrowUpRight
                      size={12}
                      className="text-slate-500 group-hover:text-cyan-400 transition-colors"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;