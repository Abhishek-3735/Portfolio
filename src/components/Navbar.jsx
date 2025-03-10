import React, { useState } from "react";
import A from "../assets/A.png";
import { AlignJustify, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="flex justify-between items-center bg-black bg-opacity-10 text-white h-14 px-4 md:px-8 scroll-smooth">
        {/* Logo */}
        <div>
          <img src={A} alt="Logo" className="h-12" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex font-semibold">
          <li className="mx-5 hover:text-blue-300"><a href="#">Home</a></li>
      
          <li className="mx-5 hover:text-blue-300"><a href="#skills">About</a></li>
          <li className="mx-5 hover:text-blue-300"><a href="#projects">Projects</a></li>
          <li className="mx-5 hover:text-blue-300"><a href="">Experience</a></li>
          <li className="mx-5 hover:text-blue-300"><a href="#contactme">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden z-20"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X color="#ffffff" /> : <AlignJustify color="#ffffff" />}
        </button>

        {/* Mobile Menu (Sliding) */}
        <div
          className={`fixed top-0 right-0 h-full w-2/3 bg-black bg-opacity-90 text-white transform transition-transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden z-10`}
        >
          <ul className="flex flex-col items-center justify-center h-full space-y-6 text-lg">
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">Experience</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
