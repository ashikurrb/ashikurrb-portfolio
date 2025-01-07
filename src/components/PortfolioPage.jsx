import React from "react";
import profileImage from "../assets/images/ashik.png";
import { SiNotion } from "react-icons/si";
import { FaXTwitter, FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa6";

const socialProfile = [
  {
    appName: "Notion",
    icon: <SiNotion />,
    link: "https://ashikurrb.notion.site",
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

const AboutMe = () => {
  return (
    <section className="about-section bg-[#0B1221] text-white py-16 flex items-center justify-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 justify-center">
        <div className="content max-w-2xl order-2 lg:order-1">
          <h2 className="text-[#4ECCA3] text-2xl font-bold mb-6">Know me?</h2>
          <p className="text-lg leading-relaxed">
            Hello! I’m Ashikur Rahman Bhuiyan, a passionate JavaScript developer
            specializing in creating innovative web solutions and user-friendly
            interfaces.
          </p>
          <h2 className="text-[#4ECCA3] text-2xl font-bold my-6">
            Social Profiles
          </h2>
          <div className="flex items-center space-x-4">
            {socialProfile.map((profile, index) => (
              <div key={index} className="bg-pink-500/10 p-3 rounded-lg">
                <a href={profile.link} target="_blank">
                  {profile.icon}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="image-container order-1 lg:order-2">
        <img
            src={profileImage}
            alt="Profile"
            className="w-72 h-72 rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
