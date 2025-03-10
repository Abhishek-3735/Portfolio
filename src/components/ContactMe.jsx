import React from "react";
import Card from "./Card";
import connect from "../assets/connect.png";
import SendButton from "./SendButton";

const ContactMe = () => {
  return (
    <div id="contactme" className="bg-gray-200 text-black px-4 py-8">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto lg:ml-0">
        <h1 className="text-3xl font-bold px-4 mb-4">Get in Touch</h1>
        <p className="sm:text-center md:text-center lg:pl-4 lg:text-start  text-gray-700 mb-6">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>
        <Card/>
      </div>

      {/* Main Content */}
      <div className="flex flex-wrap justify-center items-start gap-8 mt-10 max-w-6xl mx-auto">
        {/* Left Section - Image */}
        <div className="w-full md:w-2/5">
          <img
            src={connect} alt="Connect Illustration" className="w-full lg:h-3/44 object-contain rounded-md"
          />
        </div>

        {/* Right Section - Contact Form */}
        <div className="bg-white p-6 rounded-xl shadow-xl w-full md:w-2/5 border border-red-300">
        <h2 className="text-2xl font-bold mb-6 text-center 
              bg-gradient-to-r from-black via-red-500 to-black 
              text-transparent bg-clip-text">
  Contact Me
</h2>

          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full p-3 border rounded-md shadow-sm focus:ring-red-400 focus:border-red-400"
                placeholder="Full Name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full p-3 border rounded-md shadow-sm focus:ring-red-400 focus:border-red-400"
                placeholder="Email"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="mt-1 block w-full p-3 border rounded-md shadow-sm focus:ring-red-400 focus:border-red-400"
                placeholder="Enter Your Message"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <SendButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
