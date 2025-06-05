import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  scrolled: boolean;
}

const Navbar = ({ darkMode, toggleDarkMode, scrolled }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  return (
    <nav 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a 
          href="#hero" 
          className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('hero');
          }}
        >
          Simran Shaikh
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="space-x-6">
            {['hero', 'about', 'experience', 'education', 'techstack', 'projects', 'contact'].map((section) => (
              <button 
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors capitalize"
              >
                {section === 'hero' ? 'Home' : section}
              </button>
            ))}
          </div>
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <div className="flex items-center md:hidden">
          <button 
            onClick={toggleDarkMode}
            className="p-2 mr-2 rounded-full bg-gray-200 dark:bg-gray-700"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={toggleMenu} className="text-gray-700 dark:text-gray-300">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-800 shadow-lg rounded-b-lg transition-all duration-300 ease-in-out transform">
          <div className="container mx-auto px-4 py-2">
            {['hero', 'about', 'experience', 'education', 'techstack', 'projects', 'contact'].map((section) => (
              <button 
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left py-3 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded capitalize"
              >
                {section === 'hero' ? 'Home' : section}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;