import { useEffect, useState } from 'react';
import Particle from './Components/Particles';
import { motion } from 'framer-motion';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import './index.css';
import About from './pages/About';
import Projects from './pages/Projects';
import ScrollReveal from './Components/ScrollReveal';


function App() {

  return (
    <div className='bg-[#0F0F0F]'>
      <Particle />
      <Navbar />
      <ScrollReveal>
      <Hero />
      </ScrollReveal>
      <ScrollReveal>
      <About />
      </ScrollReveal>
  
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
