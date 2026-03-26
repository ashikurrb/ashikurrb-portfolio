import React, { useState } from "react";
import { Send, MapPin, Mail } from "lucide-react";
import { SiNotion } from "react-icons/si";
import { FaXTwitter, FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa6";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

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
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus(result.message || "There was an error sending your message.");
      }

      setTimeout(() => {
        setStatus(null);
      }, 5000);
    } catch (error) {
      setStatus("An error occurred. Please try again.");
      setTimeout(() => {
        setStatus(null);
      }, 10000);
    }
  };

  const socialProfile = [
    {
      appName: "Notion",
      icon: <SiNotion />,
      link: "https://ashikurrb.notion.site/portfolio",
    },
    {
      appName: "Facebook",
      icon: <FaFacebook />,
      link: "https://www.facebook.com/ashikurrb.ashik",
    },
    {
      appName: "X",
      icon: <FaXTwitter />,
      link: "https://www.x.com/ashikurrb",
    },
    {
      appName: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/ashikurrb",
    },
    {
      appName: "GitHub",
      icon: <FaGithub />,
      link: "https://www.github.com/ashikurrb",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0f1629] text-white py-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
      <div className="container mx-auto max-w-360">
        <h2 className="my-12 text-center text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-500 bg-clip-text">
          Get in Touch
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start pb-10">
          <div className="space-y-10 flex flex-col justify-center h-full">
            <p className="text-gray-300 text-lg md:text-xl">
              Have a question or want to work together? Drop us a message!
            </p>

            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="bg-purple-500/10 p-4 rounded-lg flex-shrink-0">
                  <Mail className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-gray-400 break-all">
                    {import.meta.env.VITE_APP_EMAIL_ADDRESS || "hello@example.com"}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-pink-500/10 p-4 rounded-lg flex-shrink-0">
                  <MapPin className="w-6 h-6 text-pink-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Location</h3>
                  <p className="text-gray-400">
                    Dhaka Housing, Adabor, Mohammadpur, Dhaka-1207
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                {socialProfile.map((profile, index) => (
                  <a
                    key={index}
                    href={profile.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pink-500/10 p-3.5 rounded-lg hover:bg-pink-500/20 transition-colors flex items-center justify-center text-xl text-pink-400"
                    aria-label={profile.appName}
                  >
                    {profile.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="backdrop-blur-lg bg-white/5 p-8 sm:p-10 rounded-2xl shadow-2xl border border-white/5 w-full max-w-xl mx-auto lg:mx-0">
            <h3 className="text-3xl text-center font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Send Message
            </h3>

            {status && (
              <div className="mb-6 text-center text-sm font-medium text-gray-200 bg-white/10 py-3 px-4 rounded-lg">
                {status}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                required
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-gray-700/50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />

              <input
                required
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-gray-700/50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />

              <input
                required
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-gray-700/50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
              />

              <textarea
                required
                placeholder="Your Message"
                rows="5"
                className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-gray-700/50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all resize-none"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />

              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3.5 px-8 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}