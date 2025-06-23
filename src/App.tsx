import React from 'react';
import Layout from './components/Layout';
import LoadingScreen from './components/LoadingScreen';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Achievements from './pages/Achievements';
import Contact from './pages/Contact';
import CharacterCarousel from './pages/CharacterCarousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <LoadingScreen />
      <Layout>
        <section id="home">
          <Home />
        </section>
        <section id="about" className="max-w-4xl mx-auto px-4">
          <About />
        </section>
        <section id="character" className="max-w-4xl mx-auto px-4">
          <CharacterCarousel />
        </section>
        <section id="skills" className="max-w-4xl mx-auto px-4">
          <Skills />
        </section>
        <section id="projects" className="max-w-4xl mx-auto px-4">
          <Projects />
        </section>
        <section id="achievements" className="max-w-4xl mx-auto px-4">
          <Achievements />
        </section>
        <section id="contact" className="max-w-4xl mx-auto px-4">
          <Contact />
        </section>
      </Layout>
    </>
  );
}

export default App;