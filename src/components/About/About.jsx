import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaDatabase,
} from "react-icons/fa";

function About() {
  return (
    <section id="about" className="py-16  bg-gray-500 ">
      <div className="container mx-auto px-4">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-1/2 order-2 md:order-1 text-center md:text-left p-4">
            <h1 className="text-3xl font-bold mb-4">About Me</h1>
            <p className="mb-4">
               I am a passionate web developer proficient in the MERN stack.
              I enjoy building web applications that solve real-world problems and
              provide a great user experience. I've mastered building dynamic web
              applications using MongoDB, Express.js, React.js, and Node.js. My
              projects span e-commerce platforms, social networks, and CMS,
              reflecting my expertise and attention to detail. I'm committed to
              delivering top-notch, scalable solutions and ensuring client
              satisfaction. Let's connect and bring your ideas to life with
              cutting-edge web solutions!
            </p>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
