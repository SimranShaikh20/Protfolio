import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Achievements from './components/Achievements';
function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? 'dark' : ''} transition-colors duration-300`}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} scrolled={scrolled} />
        <main>
          <Hero />
          <Experience />
          <Education />
          <TechStack />
          <Projects />
          <Achievements />
          <Contact />
          
    
      
     
   

        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;