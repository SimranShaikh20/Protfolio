import { Github, Linkedin, Heart, Mail } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Simran Shaikh
            </h2>
            <p className="text-gray-400 mt-2">AI & ML Enthusiast</p>
          </div>
          
          <div className="flex flex-col md:flex-row md:space-x-12 space-y-6 md:space-y-0 mb-6 md:mb-0">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-200">Quick Links</h3>
              <ul className="space-y-2">
                {['Home', 'About', 'Experience', 'Projects', 'Contact'].map((link) => (
                  <li key={link}>
                    <a 
                      href={`#${link.toLowerCase()}`}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-200">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://github.com/SimranShaikh20" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <Github size={16} className="mr-2" /> GitHub
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.linkedin.com/in/simran-shaikh-39207a23b" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <Linkedin size={16} className="mr-2" /> LinkedIn
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:shaikhsimran20.2003@gmail.com"
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <Mail size={16} className="mr-2" /> Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {year} Simran Shaikh. All rights reserved.
          </p>
          
          <p className="text-gray-500 text-sm flex items-center mt-4 md:mt-0">
            Made with <Heart size={16} className="mx-1 text-red-500" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;