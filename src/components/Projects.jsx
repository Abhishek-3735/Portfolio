import React from 'react';
import project_1 from '../assets/project_1.png';
import Project2 from '../assets/project2.png';
import mackbook_2 from '../assets/mockups/macbook_2.png';

const Projects = () => {
  return (
    <div id='projects' className="bg-gray-200 mb-0 mt-0 px-4  min-h-screen">
      <h1 className="text-5xl font-bold text-center pb-8 
               bg-gradient-to-r from-black to-sky-500 
               text-transparent bg-clip-text">
  My Projects
</h1>

      <div className="flex flex-wrap justify-center gap-8">
        {/* Project 1 */}
        <div className="bg-sky-50 p-4 rounded-xl w-full sm:w-96 shadow-2xl group">
          <img src={project_1} alt="Portfolio Project" className="h-56 w-full object-cover rounded-md transition-transform duration-500 ease-in-out group-hover:scale-105 hover:scale-95" />
          <h2 className="text-2xl font-bold pt-4 text-sky-500">Portfolio Website</h2>
          <p className="pt-2 text-gray-700">
            This project is a modern portfolio website built with React, JavaScript, Tailwind CSS, and Particle.js. It
            features a responsive, interactive design with visually captivating particle effects, a dynamic portfolio
            section, smooth animations, and optimized performance for fast load times.
          </p>
        </div>
        {/* Project 2 */}
        <div className="bg-sky-50 p-4 rounded-xl w-full sm:w-96 shadow-2xl group ">
          <img src={Project2} alt="Project 2" className="h-56 w-full object-cover rounded-md transition-transform duration-500 ease-in-out group-hover:scale-105 hover:scale-95" />
          <h2 className="text-2xl font-bold pt-4 text-sky-600">VertAura</h2>
          <p className="pt-2 text-gray-700">
          VertAura is a modern e-commerce platform for home and office greenery, built with React, JSX, HTML, CSS, JavaScript, and Tailwind CSS.
           It offers a diverse plant collection, including pottery plants, wall gardens, and decorative greenery.  
          The platform features a smooth parallax effect with animated elements for an engaging user experience.
          JSX components ensure modularity and maintainability,
           while Tailwind CSS enables a fully responsive design across all devices.
          </p>
        </div>
        {/* Project 3 */}
        <div className="bg-sky-50 p-4 rounded-xl w-full sm:w-96 shadow-2xl group">
          <img src={mackbook_2} alt="Project 3" className="h-56 w-full object-cover rounded-md transition-transform duration-500 ease-in-out group-hover:scale-105 hover:scale-95" />
          <h2 className="text-2xl font-bold pt-4 text-sky-600">Project_3</h2>
          <p className="pt-2 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque cumque quam harum, facere asperiores nemo
            aut consequatur, possimus placeat at ipsam neque repudiandae omnis ex assumenda, iusto ratione animi quia.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
