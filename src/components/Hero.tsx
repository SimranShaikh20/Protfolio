import { Github, Linkedin, ChevronDown, Book, BookOpen } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 pb-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800"></div>
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-teal-300 dark:bg-teal-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className={`max-w-3xl mx-auto text-center transition-opacity duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
            Simran Shaikh
          </h1>
          <p className="text-xl md:text-2xl font-medium mb-8 text-gray-700 dark:text-gray-300">
            AI & ML Enthusiast | Technical Writer
          </p>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Computer Science student at MSU Vadodara with a passion for leveraging
              technology to solve real-world problems. Proficient in Javascript, Python, AI Automation working on
              projects that solve real world problems. Currently exploring the world of AI and ML.
              I also share my learning journey through technical writing on Medium and Dev Community.
            </p>
          </div>
          
          <div className="flex justify-center space-x-4 mb-12">
            <a 
              href="https://github.com/SimranShaikh20" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <Github className="text-gray-800 dark:text-gray-200" size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/simran-shaikh-39207a23b" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="text-gray-800 dark:text-gray-200" size={24} />
            </a>
            <a 
              href="https://medium.com/@msusimran20" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              aria-label="Medium Blog"
            >
              <Book className="text-gray-800 dark:text-gray-200" size={24} />
            </a>
            <a 
              href="https://dev.to/simranshaikh20_50" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              aria-label="Dev Community Profile"
            >
              <BookOpen className="text-gray-800 dark:text-gray-200" size={24} />
            </a>
          </div>
          
          <div className="flex justify-center">
            <button
              onClick={scrollToNext}
              className="animate-bounce p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg"
              aria-label="Scroll Down"
            >
              <ChevronDown className="text-gray-800 dark:text-gray-200" size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;