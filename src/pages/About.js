import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiGithub,
  SiFigma,
  SiMongodb,
  SiVercel,
} from "react-icons/si";
import React from "react";

const About = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-500" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-gray-300" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "Framer Motion", icon: <SiFramer className="text-purple-500" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
    { name: "GitHub", icon: <SiGithub className="text-white" /> },
    { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "Vercel", icon: <SiVercel className="text-white" /> },
  ];

  return (
    <div className="min-h-screen bg-[#0F0F0F] p-8">
      <div
        className="flex flex-col flex-grow"
      >
        <h3 className="text-6xl md:text-8xl font-bold mb- text-white tracking-tighter">
          About Me...
        </h3>
        <p className="mb-4 text-white md:text-4xl font-thin flex-grow">
          <span className="font-semibold text-2xl md:text-6xl">
            Hey my name is Jahari 👋,
          </span>{" "}
          I am a front end developer, whenever I'm not coding I enjoy watching
          urbex explorers, occasionally gaming, and scouting architectural
          digest for inspiration for my dream oasis. I'm super passionate about
          web design and working with others who are also, to me it is very
          inspiring and I hope to challenge myself and enhance my skills while
          also inspiring others.
        </p>
        <p className="text-white md:text-4xl font-thin flex-grow text-justify">
          As I continue on my journey through life, I'm constantly seeking new
          opportunities to learn, grow, and connect with others who share
          similar interests. Whether it's discovering a hidden gem within a
          city, discussing the latest urbex documentary, or engaging in the
          thrill of a close NBA/NCCAF game, I'm always up for exciting and meaningful
          experiences.
        </p>
        {/* Skills Section */}
        <div className="mt-8">
          <h3 className="text-4xl tracking-tighter md:text-6xl font-bold text-white mb-4">
            My skills:
          </h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <li
                key={index}
                className="flex flex-col items-center text-white text-lg md:text-xl font-light bg-black/50 p-4 rounded-md shadow-md hover:bg-black/80 transition-all"
              >
                <div className="text-5xl mb-2">{skill.icon}</div>
                <span>{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
 </div>
    </div>
  );
};

export default About;

