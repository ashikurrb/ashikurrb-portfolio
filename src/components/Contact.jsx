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

    // Create a new FormData object to send to Web3Forms API
    const form = new FormData();
    form.append("access_key", import.meta.env.VITE_APP_WEB3FORM_ACCESS_KEY);
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("subject", formData.subject || "New Contact Form Submission");
    form.append("message", formData.message);

    try {
      // Send form data to Web3Forms API
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

      // Hide status message after 10 seconds
      setTimeout(() => {
        setStatus(null);
      }, 5000); // 5 seconds
    } catch (error) {
      setStatus("An error occurred. Please try again.");
      console.error("Error:", error);
      // Hide error message after 10 seconds
      setTimeout(() => {
        setStatus(null);
      }, 10000); // 10 seconds
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
    <main className="bg-[#0f1629] text-white min-h-screen">
      <h2 className="pt-10 md:pt-40 lg:pt-40 pb-10 md:pb-0 sm:pb-0 lg:pb-0text-center text-5xl text-center md:text-6xl font-extrabold text-transparent bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-500 bg-clip-text">
        Get in Touch
      </h2>
      <section className="hero min-h-screen flex items-center relative px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contact Info */}
            <div className="space-y-8 lg:pb-20 px-4 lg:px-0">
              <div>
                <p className="text-gray-300 text-lg">
                  Have a question or want to work together? Drop us a message!
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-500/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-400">
                      {import.meta.env.VITE_APP_EMAIL_ADDRESS}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-pink-500/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-pink-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-gray-400">
                      Dhaka Housing, Adabor, Mohammadpur, Dhaka-1207
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  {socialProfile.map((profile, index) => (
                    <div
                      key={index}
                      className="bg-pink-500/10 p-3 rounded-lg hover:bg-pink-500/20"
                    >
                      <a href={profile.link} target="_blank">
                        {profile.icon}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="backdrop-blur-lg bg-white/5 pb-8 pt-5 pl-8 pr-8 rounded-xl shadow-3xl lg:mt-20 mb-20">
              <h2 className="text-4xl text-center font-bold pb-5 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Send Message
              </h2>
              {/* Status Message */}
              {status && (
                <div className="pb-9 text-center text-gray-300">
                  <p>{status}</p>
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <input
                      required
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <input
                      required
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <input
                      required
                      type="text"
                      placeholder="Subject"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows="4"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    ></textarea>
                  </div>
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
