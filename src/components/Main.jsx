import React from 'react';
// import DownloadCV from './DownloadCV';
 import A from '../assets/A.png'
// import wbd from '../assets/wbd.png'
import Button from './Button';
import Type from './Type';

// import developer_kid from '../assets/developer_kid.png';

const Main = () => {
  return (
    <section className="section flex flex-col md:flex-row justify-center md:justify-around items-center text-white lg:h-screen px-4 md:px-0">
      {/* Left div */}
      <div className="left text-center md:text-left w-full md:w-1/2  font-bold mb-10 md:mb-5 lg:pb-8 ">
        <h1 className="leading-snug text-4xl md:text-6xl lg:text-7xl">
          Hi There, <br />
          I'm <span className="bg-gradient-to-r from-red-500 via-white to-sky-400 
                 text-transparent bg-clip-text">
  Abhishek
</span>

        </h1>
        <span className="font-serif text-xl md:text-2xl lg:text-3xl block mt-4">
          {/* Web Developer & Designer */} <Type/>
        </span>
        <div className='py-2 '><Button/></div>
      </div>

      {/* Right div */}
      <div className="right w-full md:w-1/2 lg:w-1/3 flex justify-center">
        <img
          src={A}
          alt="Developer Kid"
          className="h-80 md:h-96 lg:h-5/6 object-contain m-0 p-0"
        />
      </div>
    </section>
  );
};

export default Main;
