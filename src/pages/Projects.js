import React from 'react';

const Projects = () => {
  const projectLinks = [
    {
      link: '//ingeniousdealers-one.vercel.app',
      name: 'Ingenious Dealers',
      image: 'https://i.imgur.com/wfACPFG.jpeg', 
      description: 'A dynamic on-demand service platform tailored for streetwear enthusiasts and creative professionals like models, photographers, designers, and more.',
    },
    {
      link: '//youth-life-support.vercel.app',
      name: 'Youth Life Support',
      image: 'https://i.imgur.com/psstpii.jpeg',
      description: 'A non-profit organization that supports youth with life skills and counseling.',
    },
    {
      link: 'https://myphoenixproject.com',
      name: 'Phoenix Project',
      image: 'https://i.imgur.com/YbXMqbd.png', 
      description: 'A digital solutions business specializing in digital marketing, web development, and more.',
    },
    {
      link: 'https://ingeniousdealer.com',
      name: 'Ingenious Dealer',
      image: 'https://i.imgur.com/1iSIhbL.jpeg',
      description: 'The official ecommerce store of Ingenious Dealers.',
    },
  ];

  return (
    <div className=" px-6 bg-[#0F0F0F]">
      <h2 className="font-bold mb-12 text-center text-white tracking-tighter text-6xl md:text-8xl">
        Here are some projects I've worked on.
      </h2>
      <div className="space-y-12">
        {projectLinks.map((project, index) => (
          <div key={index} className="flex items-center space-x-12">
            {/* Project Text Section */}
            <div className="w-1/2 text-white">
              <h3 className="text-3xl md:text-6xl tracking-tighter font-semibold mb-4">{project.name}</h3>
              <p className=" text-sm md:text-xl">{project.description}</p>
            </div>

            {/* Project Image Section */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-1/2 overflow-hidden rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
