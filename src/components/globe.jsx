import IconCloud from "./ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "html5",
  "css3",
  "tailwindcss",
  "shadcnui",
  "antdesign",
  "react",
  "nextdotjs",
  "nodedotjs",
  "express",
  "prisma",
  "postgresql",
  "mongodb",
  "redis",
  "firebase",
  "amazonaws",
  "vercel",
  "netlify",
  "heroku",
  "docker",
  "linux",
  "git",
  "github",
  "android",
  "androidstudio",
  "visualstudiocode",
  "figma",
  "notion",
  "postman",
  "slack",
  "discord",
];

function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg  px-20 pb-20 pt-8 bg-transparent">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default IconCloudDemo;