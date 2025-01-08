import React from "react";
import Particle from "./Components/Particles";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ScrollReveal from "./Components/ScrollReveal";

function App() {
  // Define the scrollToSection function
  const scrollToSection = (id) => {
    const section = document.getElementById(id); // Get the section by ID
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" }); // Smooth scroll to the section
    }
  };

  return (
    <div className="bg-[#0F0F0F]">
      <Particle />
      {/* Pass scrollToSection as a prop to Navbar */}
      <Navbar scrollToSection={scrollToSection} />
      <ScrollReveal>
        <section id="hero">
          <Hero />
        </section>
      </ScrollReveal>
      <ScrollReveal>
        <section id="about">
          <About />
        </section>
      </ScrollReveal>
      <section id="projects">
        <Projects />
      </section>
      <Footer />
    </div>
  );
}

export default App;
