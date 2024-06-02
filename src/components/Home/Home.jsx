import React from "react";
import { motion } from "framer-motion";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Services from "../Services/Services";
import Skills from "../Skills/Skills";
import Portfolio from "../Portfolio/Portfolio";

function Home() {
  const handleWhatsApp = () => {
    window.open('https://api.whatsapp.com/send?phone=923155406126', '_blank');
  };

  const handleDownloadCV = () => {
    const cvUrl = '/src/images/MERNS.Resume.pdf';
    window.open(cvUrl, '_blank');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-500 p-4 text-black">
      <motion.div 
        className="max-w-4xl w-full overflow-hidden flex flex-col md:flex-row"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="md:w-1/2 flex justify-center items-center order-1 md:order-2">
          <motion.img
            src="/src/images/IMG_20230804_151722.jpg"
            alt="Profile"
            className="w-48 h-48 md:w-80 md:h-80 object-cover object-top object-center rounded-full md:rounded-4xl"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
          />
        </div>
        <div className="md:w-1/2 p-6 order-2 md:order-1">
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight py-2 sm:py-5">
            Welcome to My Portfolio
          </h1>
          <p className="text-sm sm:text-lg mb-6 sm">
            Hello! I'm Tayyab Zaheer, a Software Engineering and a{" "}
            <strong className="text-orange-600">Full Stack Developer</strong>.
          </p>
          <div className="container mx-auto p-4">
            <button
              className="mt-4 px-6 py-2 text-black bg-orange-600 rounded-lg hover:bg-orange-900 transition duration-200"
              onClick={handleWhatsApp}
            >
              Let's Connect
            </button>
            <div>
              <button
                className="mt-4 px-6 py-2 text-black bg-orange-600 rounded-lg hover:bg-orange-900 transition duration-200"
                onClick={handleDownloadCV}
              >
                Download CV
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <About />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Skills />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <Services />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <Portfolio />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <Contact />
      </motion.div>
    </div>
  );
}

export default Home;
