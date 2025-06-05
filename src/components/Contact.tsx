import { useState, useRef } from 'react';
import { Mail, Phone, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset form after showing success message
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }, 1500);
  };

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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-1 flex flex-col space-y-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 rounded-lg mb-4">
                  <Mail size={24} />
                </div>
                <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">Email</h3>
                <a 
                  href="mailto:shaikhsimran20.2003@gmail.com" 
                  className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                >
                  Email
                </a>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg mb-4">
                  <Phone size={24} />
                </div>
                <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">Social</h3>
                <a 
                  href="https://www.linkedin.com/in/simran-shaikh-39207a23b" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors block mb-2"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/SimranShaikh20" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
            
            <div className="col-span-1 md:col-span-2">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">Send Me a Message</h3>
                
                {submitStatus === 'success' ? (
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle size={32} className="text-green-600 dark:text-green-400" />
                    </div>
                    <h4 className="text-xl font-medium text-gray-800 dark:text-white mb-2">Message Sent!</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Thank you for your message. I'll get back to you as soon as possible.
                    </p>
                  </div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400"
                        placeholder="your name here"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400"
                        placeholder="your email here"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 resize-none"
                        placeholder="Your message here..."
                        required
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={submitStatus === 'submitting'}
                      className={`w-full py-3 px-6 rounded-lg font-medium text-white transition-all duration-300 flex items-center justify-center
                        ${submitStatus === 'submitting'
                          ? 'bg-indigo-400 dark:bg-indigo-600 cursor-not-allowed'
                          : 'bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 shadow-md hover:shadow-lg'
                        }`}
                    >
                      {submitStatus === 'submitting' ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message <Send size={18} className="ml-2" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;