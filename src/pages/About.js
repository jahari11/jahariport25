import { motion } from "framer-motion";
import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-[#0F0F0F] p-8">
    <motion.div
    className="flex flex-col flex-grow"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h3 className="text-8xl font-bold mb-4 text-white tracking-tighter">About Me...</h3>
      <p className="mb-4 text-white text-3xl font-thin flex-grow">
        Hey, my name is Jahari I am a front end developer, whenever I'm not coding I enjoy watching urbex explorers, 
        occasionally gaming, and scouting architectural digest for inspiration for my dream oasis. I'm super passionate about 
        web design and working with others who are also, to me it is very inspiring and I hope to challenge myself and enhance 
        my skills while also inspiring others.
      </p>
      <p className="text-white text-3xl font-thin flex-grow">
        As I continue on my journey through life, I'm constantly seeking new opportunities to learn, grow, and connect with others
        who share similar interests. Whether it's discovering a hidden gem within a city, discussing the latest urbex documentary,
        or engaging in the thrill of a close NBA game, I'm always up for exciting and meaningful experiences.
      </p>
    </motion.div>
  </div>
  )
}

export default About