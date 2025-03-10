import React from 'react'
import Html from '../assets/Html.png'
import Reacticon from '../assets/Reacticon.png'
import Tailwind from '../assets/Tailwind.png'
import JS from '../assets/JS.png'
import CSS from '../assets/CSS.png'
import Github from '../assets/Github.png'
import java from '../assets/java.png'
import SQL from '../assets/SQL.png'
import Bootstrap from '../assets/Bootstrap.png'



const About = () => {
    return (
        //Entire body of an about section
        <div id='skills' className="text-black bg-gray-200 px-4 lg:px-3 lg:m-0 m-0 mb-0 pb-0 min-h-screen flex flex-col justify-center py-4">
     <h1 className="text-center text-5xl font-bold mt-4 animate-bounce 
               bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 
               text-transparent bg-clip-text">
  ABOUT ME
</h1>


            { /* taking a div for about bio and skills section  */}
            <div className="flex flex-col lg:flex-row justify-around items-center my-8 bg-gray-200 gap-8">
        {/* About bio div */}
        <div className="lg:w-1/2 w-full my-4 px-4 lg:px-0">
          <p className="font-medium text-gray-600 text-center lg:text-left">
            "I'm a frontend developer who began my web development journey with a passion for creating websites. I craft
            scalable, responsive, and visually appealing designs, empowering businesses and developers to establish a
            strong online presence."
          </p>
        </div>  
           {/* skill section div using flex & flex direction-row.....*/}
           <div className="p-6 border border-sky-600 rounded-lg w-full lg:w-2/3 shadow-lg shadow-sky-400">
           <h1 className="text-sky-800 text-4xl font-semibold mb-6 text-center">Skills & Expertise</h1>
                    {/* using a div to represent all skills in it... */}
                    <div className="flex flex-wrap justify-center gap-6">
                    {/* using multiple divs for various skill imgs and it's name */}
                    {/* using flex  */}
                    <div className="flex items-center border border-blue-300 p-3 rounded-xl shadow-md shadow-sky-400">
              <img src={Html} alt="HTML Icon" className="w-10" />
              <span className="ml-2">HTML</span>
            </div>
            <div className="flex items-center border border-blue-300 p-3 rounded-xl shadow-md shadow-sky-400">
              <img src={CSS} alt="CSS Icon" className="w-10" />
              <span className="ml-2">CSS</span>
            </div>
            <div className="flex items-center border border-blue-300 p-3 rounded-xl shadow-md shadow-sky-400">
              <img src={JS} alt="JavaScript Icon" className="w-10" />
              <span className="ml-2">JavaScript</span>
            </div>
            <div className="flex items-center border border-blue-300 p-3 rounded-xl shadow-md shadow-sky-400">
              <img src={Reacticon} alt="React Icon" className="w-10" />
              <span className="ml-2">React</span>
            </div>
            <div className="flex items-center border border-blue-300 p-3 rounded-xl shadow-md shadow-sky-400">
              <img src={Tailwind} alt="Tailwind Icon" className="w-10" />
              <span className="ml-2">Tailwind</span>
            </div>
            <div className="flex items-center border border-blue-300 p-3 rounded-xl shadow-md shadow-sky-400">
              <img src={Bootstrap} alt="Bootstrap Icon" className="w-10" />
              <span className="ml-2">Bootstrap</span>
            </div>
            <div className="flex items-center border border-blue-300 p-3 rounded-xl shadow-md shadow-sky-400">
              <img src={SQL} alt="SQL Icon" className="w-10" />
              <span className="ml-2">SQL</span>
            </div>
            <div className="flex items-center border border-blue-300 p-3 rounded-xl shadow-md shadow-sky-400">
              <img src={java} alt="Java Icon" className="w-10" />
              <span className="ml-2">Java</span>
            </div>
            <div className="flex items-center border border-blue-300 p-3 rounded-xl shadow-md shadow-sky-400">
              <img src={Github} alt="GitHub Icon" className="w-10" />
              <span className="ml-2">GitHub</span>
            </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default About