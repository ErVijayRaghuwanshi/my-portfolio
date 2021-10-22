import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Tenstimonials";

export default function App() {

  // window.scrollTo({
  //   left: 0,
  //   top: location -64,
  // })
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <LoadingBar />
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}