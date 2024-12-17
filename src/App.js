import React from 'react';
import Home from './pages/Home.js'; 
import Navbar from './components/Navbar.js';
import About from './pages/About.js';
import Projects from './pages/Projects.js';
import Contacts from './pages/Contact.js';
import './App.css';
import PastelBackground from './components/Pastelbackground.js';


function App() {
  return (
    <div className="App">
      <PastelBackground />
      <Navbar /> 

      <div className="content">
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contacts />
        </section>
      </div>  
    </div>
  );
}

export default App;
