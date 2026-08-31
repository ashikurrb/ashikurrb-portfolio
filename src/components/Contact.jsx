import React, { useState } from "react";
import {
  Send,
  MapPin,
  Mail,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Sparkles,
} from "lucide-react";
import { SiNotion } from "react-icons/si";
import { FaXTwitter, FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa6";
import { Card, CardContent } from "@/components/ui/card";

const MacOsButtons = () => (
  <div className="flex items-center gap-1.5">
    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
  </div>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = new FormData();
    form.append("access_key", import.meta.env.VITE_APP_WEB3FORM_ACCESS_KEY);
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("subject", formData.subject || "New Contact Form Submission");
    form.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ type: "success", message: "Message sent successfully!" });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          message: result.message || "There was an error sending your message.",
        });
      }

      setTimeout(() => {
        setStatus(null);
      }, 5000);
    } catch (error) {
      setStatus({
        type: "error",
        message: "An error occurred. Please try again.",
      });
      setTimeout(() => {
        setStatus(null);
      }, 10000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialProfile = [
    {
      appName: "Notion",
      icon: <SiNotion size={18} />,
      link: "https://ashikurrb.notion.site/portfolio",
    },
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

  return (
    <main className="min-h-screen bg-[#0f1629] text-slate-100 py-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center space-y-4 my-16">
        <div className="relative inline-block">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text">
            Get in Touch
          </h2>
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 blur-2xl rounded-full" />
        </div>

        <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto font-medium">
          Have an opportunity, production inquiry, or system project? Let’s
          talk.
        </p>
      </div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Info Card */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-950/90 border border-slate-800/80 p-6 md:p-8 backdrop-blur-md">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
              <Sparkles size={14} /> Quick Availability
            </div>
            <h3 className="text-2xl font-bold text-slate-100">
              Let's Build Something Scalable
            </h3>
            <p className="text-slate-400 text-sm mt-3 leading-relaxed">
              Available for full-time roles, full-stack architectural contracts,
              and enterprise platform engineering.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                <div className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
                  <Mail size={18} />
                </div>
                <div className="overflow-hidden">
                  <div className="text-xs font-mono text-slate-400 uppercase">
                    Direct Email
                  </div>
                  <a
                    href={`mailto:${import.meta.env.VITE_APP_EMAIL_ADDRESS}`}
                    className="cursor-pointer text-sm md:text-base font-semibold text-slate-200 hover:text-cyan-400 transition-colors truncate block"
                  >
                    {import.meta.env.VITE_APP_EMAIL_ADDRESS}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase">
                    Location
                  </div>
                  <p className="text-sm font-semibold text-slate-200">
                    Mohammadpur, Dhaka-1207, Bangladesh
                  </p>
                </div>
              </div>
            </div>

            {/* Social Grid */}
            <div className="mt-8 pt-6 border-t border-slate-800/80">
              <div className="text-xs font-mono text-slate-400 uppercase mb-3">
                Verified Channels
              </div>
              <div className="flex flex-wrap gap-2.5">
                {socialProfile.map((profile, index) => (
                  <a
                    key={index}
                    href={profile.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all duration-300 transform hover:-translate-y-0.5"
                    aria-label={profile.appName}
                  >
                    {profile.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Message Form Window */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl p-[1px] bg-gradient-to-b from-slate-700/50 via-slate-800/20 to-transparent">
            <Card className="w-full bg-slate-900/95 border-slate-800 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm">
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800/80 bg-slate-950/60">
                <MacOsButtons />
                <div className="text-slate-500 text-xs font-mono">
                  dispatch_message.ts
                </div>
              </div>

              <CardContent className="p-6 md:p-8">
                {status && (
                  <div
                    className={`mb-6 p-4 rounded-xl flex items-center gap-3 text-sm font-medium border ${
                      status.type === "success"
                        ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                        : "bg-red-500/10 border-red-500/30 text-red-400"
                    }`}
                  >
                    {status.type === "success" ? (
                      <CheckCircle2 size={18} className="shrink-0" />
                    ) : (
                      <AlertCircle size={18} className="shrink-0" />
                    )}
                    <span>{status.message}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-400 uppercase">
                        Full Name
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-slate-100 placeholder-slate-600 outline-none text-sm transition-all"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-400 uppercase">
                        Email Address
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-slate-100 placeholder-slate-600 outline-none text-sm transition-all"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400 uppercase">
                      Subject
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Project Inquiry / Job Opportunity"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-slate-100 placeholder-slate-600 outline-none text-sm transition-all"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400 uppercase">
                      Message
                    </label>
                    <textarea
                      required
                      placeholder="Briefly describe your requirements or message..."
                      rows="4"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-slate-100 placeholder-slate-600 outline-none text-sm transition-all resize-none"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="cursor-pointer w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-500 hover:from-emerald-300 hover:to-cyan-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/10 transition-all transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>
                      {isSubmitting
                        ? "Sending Transmission..."
                        : "Send Message"}
                    </span>
                    <Send size={16} />
                  </button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
