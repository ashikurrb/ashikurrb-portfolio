import React, { useState } from "react";
import { Globe, Layers, ArrowUpRight, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const MacOsButtons = () => (
  <div className="flex items-center gap-1.5">
    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
  </div>
);

const ProjectShowcase = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "E-commerce", "Portfolio", "EdTech / Platform"];

  const projects = [
    {
      title: "Aesthetic Pixel Studio",
      category: "Portfolio",
      domain: "aestheticpixelstudio.com",
      url: "https://aestheticpixelstudio.com",
      description:
        "High-performance creative photography studio portfolio showcasing client visual galleries and integrated booking inquiry systems.",
      tags: [
        "Next.js",
        "ShadCN UI (Radix based)",
        "Tailwind CSS",
        "UI/UX",
        "MongoDB",
      ],
    },
    {
      title: "KinoBD",
      category: "E-commerce",
      domain: "kinobd.com",
      url: "https://kinobd.com",
      description:
        "Full-scale e-commerce storefront with optimized product catalog navigation, seamless cart management, and secure checkout workflows.",
      tags: [
        "Next.js",
        "ShadCN UI (Radix based)",
        "Tailwind CSS",
        "Node.js",
        "ExpressJS",
        "PostgreSQL",
      ],
    },
    {
      title: "WildBD",
      category: "E-commerce",
      domain: "wildbd.com",
      url: "https://wildbd.com",
      description:
        "High-converting retail e-commerce platform built for fast product discovery, lightning search, and responsive customer checkout.",
      tags: [
        "Next.js",
        "ShadCN UI (Radix based)",
        "Tailwind CSS",
        "Node.js",
        "ExpressJS",
        "PostgreSQL",
      ],
    },
    {
      title: "WildBD Affiliate Platform",
      category: "EdTech / Platform",
      domain: "affiliate.wildbd.com",
      url: "https://affiliate.wildbd.com",
      description:
        "Dedicated affiliate tracking dashboard featuring real-time referral link performance, click analytics, and payout monitoring.",
      tags: [
        "React",
        "Next.js",
        "ShadCN UI (Radix based)",
        "Tailwind CSS",
        "Node.js",
        "ExpressJS",
        "PostgreSQL",
      ],
    },
    {
      title: "FlexzonBD",
      category: "E-commerce",
      domain: "flexzonbd.com",
      url: "https://flexzonbd.com",
      description:
        "Modern consumer e-commerce application focusing on minimal UI, instant inventory status checks, and streamlined user conversions.",
      tags: ["Next.js", "Tailwind CSS", "Node.js", "ExpressJS"],
    },
    {
      title: "Pannas Collection",
      category: "E-commerce",
      domain: "pannascollection.com",
      url: "https://pannascollection.com",
      description:
        "Lifestyle & fashion e-commerce storefront delivering curated apparel collections, filtering systems, and optimized asset delivery.",
      tags: ["Next.js", "Tailwind CSS", "TypeScript", "E-commerce"],
    },
    {
      title: "Viscositee",
      category: "E-commerce",
      domain: "viscositee.com",
      url: "https://viscositee.com",
      description:
        "Specialized apparel and streetwear store platform engineered with interactive product cards and rapid single-page transitions.",
      tags: ["Next.js", "Tailwind CSS", "Full-Stack"],
    },
    {
      title: "Ayurlif",
      category: "EdTech / Platform",
      domain: "ayurlif.com",
      url: "https://ayurlif.com",
      description:
        "E-commerce style digital course selling platform providing instant digital enrollment, curriculum preview, and automated access.",
      tags: ["Next.js", "Node.js", "ExpressJS", "Tailwind CSS", "Full-Stack"],
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#0f1629] text-slate-100 py-16 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center space-y-4 my-12">
        <div className="relative inline-block">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text">
            Featured Projects
          </h2>
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 blur-2xl rounded-full" />
        </div>

        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
          Live production apps rendered dynamically without static assets.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`cursor-pointer px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-gradient-to-r from-emerald-400 to-cyan-500 text-slate-950 font-semibold shadow-lg shadow-cyan-500/20"
                  : "bg-slate-800/80 text-slate-400 border border-slate-700/60 hover:text-slate-200 hover:border-slate-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => {
          const liveEmbedPreview = `https://api.microlink.io?url=${encodeURIComponent(
            project.url,
          )}&screenshot=true&meta=false&embed=screenshot.url`;

          return (
            <div
              key={index}
              className="group relative rounded-xl p-[1px] bg-gradient-to-b from-slate-700/50 via-slate-800/20 to-transparent hover:from-cyan-500 hover:via-purple-500 hover:to-emerald-500 transition-all duration-500 flex"
            >
              <Card className="flex flex-col justify-between w-full bg-slate-900/95 border-slate-800 rounded-xl overflow-hidden shadow-xl backdrop-blur-sm group-hover:bg-slate-900 transition-colors">
                <div>
                  {/* Browser Window Header */}
                  <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800/80 bg-slate-950/40">
                    <MacOsButtons />
                    <div className="flex items-center gap-1.5 text-slate-500 text-xs font-mono">
                      <Globe size={12} />
                      <span className="truncate max-w-[150px]">
                        {project.domain}
                      </span>
                    </div>
                  </div>

                  {/* Dynamic Website Embed / Screen View */}
                  <div className="relative h-48 overflow-hidden bg-slate-950">
                    <img
                      src={liveEmbedPreview}
                      alt={`${project.title} live embed preview`}
                      loading="lazy"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />

                    {/* Badge */}
                    <span className="absolute top-3 right-3 text-[11px] font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded-md bg-slate-900/90 text-emerald-400 border border-emerald-500/30 backdrop-blur-md">
                      {project.category}
                    </span>

                    {/* Direct hover quick action */}
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer absolute inset-0 flex items-center justify-center bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-2 text-xs font-medium text-white backdrop-blur-[2px]"
                    >
                      <Eye size={16} className="text-cyan-400" />
                      <span>Inspect Live Webpage</span>
                    </a>
                  </div>

                  {/* Body Details */}
                  <CardContent className="p-5 space-y-3">
                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-slate-400 text-sm line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-0.5 text-xs font-mono rounded bg-slate-800 text-slate-300 border border-slate-700/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </div>

                {/* Card Footer Link */}
                <div className="p-5 pt-0 mt-auto">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-gradient-to-r hover:from-emerald-400 hover:to-cyan-500 text-slate-200 hover:text-slate-950 font-medium text-sm transition-all duration-300 border border-slate-700/80 hover:border-transparent group/btn"
                  >
                    <span>Visit Live Site</span>
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                    />
                  </a>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectShowcase;
