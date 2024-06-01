import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaDatabase,
} from "react-icons/fa";
import { SiMongodb,SiExpress,SiChakraui, } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
function Skills() {
  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 ">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* HTML */}
          <div className="flex flex-col items-center  rounded-lg shadow-md p-4">
            <FaHtml5 className="text-6xl text-orange-600 mb-2" />
            <span className="text-lg font-semibold">HTML5</span>
          </div>
          {/* CSS */}
          <div className="flex flex-col items-center  rounded-lg shadow-md p-4">
            <FaCss3Alt className="text-6xl text-blue-600 mb-2" />
            <span className="text-lg font-semibold">CSS3</span>
          </div>
          {/* JavaScript */}
          <div className="flex flex-col items-center rounded-lg shadow-md p-4">
            <FaJs className="text-6xl text-yellow-500 mb-2" />
            <span className="text-lg font-semibold">JavaScript</span>
          </div>
          {/* React */}
          <div className="flex flex-col items-center  rounded-lg shadow-md p-4">
            <FaReact className="text-6xl text-blue-500 mb-2" />
            <span className="text-lg font-semibold">React</span>
          </div>
          {/* Node.js */}
          <div className="flex flex-col items-center e rounded-lg shadow-md p-4">
            <FaNode className="text-6xl text-green-600 mb-2" />
            <span className="text-lg font-semibold">Node.js</span>
          </div>
          {/* Database */}
          <div className="flex flex-col items-center  rounded-lg shadow-md p-4">
            <FaDatabase className="text-6xl text-gray-800 mb-2" />
            <span className="text-lg font-semibold">Database</span>
          </div>
          <div className="flex flex-col items-center  rounded-lg shadow-md p-4">
            <SiMongodb className="text-6xl text-green-800 mb-2" />
            <span className="text-lg font-semibold">MongoDB</span>
          </div>
          <div className="flex flex-col items-center  rounded-lg shadow-md p-4">
            <SiExpress className="text-6xl text-yellow-500 mb-2" />
            <span className="text-lg font-semibold">Express</span>
          </div>
          <div className="flex flex-col items-center  rounded-lg shadow-md p-4">
            <SiChakraui className="text-6xl text-blue-500   mb-2" />
            <span className="text-lg font-semibold">Chakra UI</span>
          </div>
          <div className="flex flex-col items-center  rounded-lg shadow-md p-4">
            <RiTailwindCssFill className="text-6xl text-blue-500  mb-2" />
            <span className="text-lg font-semibold">Tailwind CSS</span>
          </div>
          {/* Add more skills as needed */}
        </div>
      </div>
    </section>
  );
}

export default Skills;
