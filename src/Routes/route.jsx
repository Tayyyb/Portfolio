import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../App.jsx";
import Home from "../components/Home/Home.jsx"
import About from "../components/About/About.jsx"
import Contact from "../components/Contact/Contact.jsx"
import Services from "../components/Services/Services.jsx"
import Skills from "../components/Skills/Skills.jsx"
import Portfolio from "../components/Portfolio/Portfolio.jsx"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="contact" element={<Contact />} />
    <Route path="services" element={<Services />} />
    <Route path="skills" element={<Skills />} />
    <Route path="portfolio" element={<Portfolio />} />
  </Route>
  )
);

export default router;
