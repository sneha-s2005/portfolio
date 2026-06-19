import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Hackathons from './components/Hackathons';
import Hobbies from './components/Hobbies';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white dark:bg-slate-900 transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Hackathons />
        <Hobbies />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
