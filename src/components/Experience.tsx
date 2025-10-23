import { useState, useEffect, useRef } from 'react';
import { Calendar, MapPin, CheckCircle, BookOpen, ExternalLink } from 'lucide-react';

interface TimelineItem {
  title: string;
  company: string;
  date: string;
  location: string;
  details: string[];
  links?: {
    text: string;
    url: string;
  }[];
}

const Experience = () => {
  const [animatedItems, setAnimatedItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const experienceData: TimelineItem[] = [
    {
      title: "Technical Content Creator",
      company: "Self-Employed",
      date: "2024 - Present",
      location: "Remote",
      details: [
        "Creating educational content on AI, ML, and web development concepts",
        "Publishing technical tutorials and project walkthroughs on Medium and Dev Community",
        "Documenting learning journey and sharing knowledge with developer community",
        "Building personal brand through consistent technical writing"
      ],
      links: [
        {
          text: "Medium Profile",
          url: "https://medium.com/@msusimran20"
        },
        {
          text: "Dev Community Profile",
          url: "https://dev.to/simranshaikh20_50"
        }
      ]
    },
    {
      title: "Web Scraping Intern",
      company: "Keshav Encon",
      date: "June 2024 - February 2025",
      location: "Remote",
      details: [
        "Data Extraction: Boosted efficiency by 30% with Scrapy and Selenium.",
        "Database: Improved MySQL performance by 20%.",
        "UI: Built a Streamlit app, increasing engagement by 30%."
      ]
    },
    {
      title: "Open Source Contributor",
      company: "GirlScript Summer of Code'24 Extd",
      date: "October 2024 - November 2024",
      location: "Remote",
      details: [
        "Data Analysis & ML: Created visualizations for model predictions.",
        "Contribution: Developed churn and research paper prediction models.",
        "Open-Source: Enhanced GitHub skills."
      ],
      links: [
        {
          text: "Leaderboard",
          url: "https://gssoc.girlscript.tech/leaderboard"
        }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateItems();
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const animateItems = () => {
    const timer = setInterval(() => {
      setAnimatedItems((prev) => {
        const next = [...prev, prev.length];
        if (next.length === experienceData.length) {
          clearInterval(timer);
        }
        return next;
      });
    }, 300);
  };

  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
          Experience & Content Creation
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-purple-200 dark:bg-purple-900 transform md:-translate-x-1/2"></div>
            
            {experienceData.map((item, index) => (
              <div 
                key={index}
                className={`relative mb-12 transition-all duration-700 ${
                  animatedItems.includes(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
              >
                <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-5 h-5 rounded-full bg-purple-500 transform -translate-y-1/2 md:-translate-x-1/2 z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">{item.title}</h3>
                          <h4 className="text-lg font-medium text-purple-600 dark:text-purple-400 mb-3">{item.company}</h4>
                        </div>
                        {item.title === "Technical Content Creator" && (
                          <BookOpen size={24} className="text-teal-500 dark:text-teal-400 mt-1" />
                        )}
                      </div>
                      
                      <div className="flex items-center mb-2 text-gray-600 dark:text-gray-400">
                        <Calendar size={16} className="mr-2" />
                        <span>{item.date}</span>
                      </div>
                      
                      <div className="flex items-center mb-4 text-gray-600 dark:text-gray-400">
                        <MapPin size={16} className="mr-2" />
                        <span>{item.location}</span>
                      </div>
                      
                      <ul className="space-y-2 mb-3">
                        {item.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start">
                            <CheckCircle size={18} className="mr-2 text-teal-500 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300">{detail}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {item.links && item.links.length > 0 && (
                        <div className="flex flex-col space-y-2 mt-4">
                          {item.links.map((link, linkIndex) => (
                            <a 
                              key={linkIndex}
                              href={link.url} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium transition-colors"
                            >
                              {link.text} <ExternalLink size={16} className="ml-1" />
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;