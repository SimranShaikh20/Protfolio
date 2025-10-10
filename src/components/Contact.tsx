import { Mail, Github, Linkedin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 bg-gradient-to-r from-teal-600 to-indigo-600 bg-clip-text text-transparent">
          Contact Me
        </h2>
        
        <p className="text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
          Feel free to reach out if you have any questions or want to collaborate on interesting projects.
        </p>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Email */}
            <a 
              href="mailto:shaikhsimran20.2003@gmail.com"
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-105 group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 rounded-lg mb-4 group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">Email</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors break-words">
                shaikhsimran20.2003@gmail.com
              </p>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/simran-shaikh-39207a23b"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-105 group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg mb-4 group-hover:scale-110 transition-transform">
                <Linkedin size={24} />
              </div>
              <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">LinkedIn</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Connect with me
              </p>
            </a>

            {/* GitHub */}
            <a 
              href="https://github.com/SimranShaikh20"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-105 group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg mb-4 group-hover:scale-110 transition-transform">
                <Github size={24} />
              </div>
              <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">GitHub</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                View my projects
              </p>
            </a>

            {/* Phone */}
            <a 
              href="tel:+919408045084"
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-105 group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg mb-4 group-hover:scale-110 transition-transform">
                <Phone size={24} />
              </div>
              <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">Phone</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                +91 94080 45084
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;