import React from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import { ToastContainer } from "react-toastify";
import SocialMediaHandle from "./components/SocialMediaHandle.jsx";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <SocialMediaHandle />
      <ToastContainer />
    </div>
  );
}

export default App;
