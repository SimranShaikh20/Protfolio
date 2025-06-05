import { useState, useEffect, useRef } from 'react';
import { Calendar, Star, BookOpen } from 'lucide-react';

interface EducationItem {
  degree: string;
  institution: string;
  date: string;
  grade: string;
  courses: string[];
}

const Education = () => {
  const [animatedItems, setAnimatedItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const educationData: EducationItem[] = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Maharaja Sayajirao University Vadodara",
      date: "2023 - 2026",
      grade: "CGPA: 8.37",
      courses: [
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Data Analysis",
        "Machine Learning"
      ]
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "Shri K.J Polytechnic",
      date: "2020 - 2023",
      grade: "CGPA: 9.88",
      courses: [
        "Database Management Systems",
        "Computer Network"
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
        if (next.length === educationData.length) {
          clearInterval(timer);
        }
        return next;
      });
    }, 300);
  };

  return (
    <section id="education" ref={sectionRef} className="py-20 bg-white dark:bg-gray-800">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
          Education
        </h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((item, index) => (
            <div 
              key={index}
              className={`transition-all duration-700 ${
                animatedItems.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="p-1 bg-gradient-to-r from-teal-500 to-blue-500"></div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-lg">
                      <BookOpen size={24} className="text-teal-600 dark:text-teal-400" />
                    </div>
                    <div className="flex items-center text-sm font-medium text-gray-600 dark:text-gray-400">
                      <Star size={16} className="mr-1 text-yellow-500" />
                      {item.grade}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{item.degree}</h3>
                  <h4 className="text-lg font-medium text-teal-600 dark:text-teal-400 mb-4">{item.institution}</h4>
                  
                  <div className="flex items-center mb-6 text-gray-600 dark:text-gray-400">
                    <Calendar size={16} className="mr-2" />
                    <span>{item.date}</span>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Relevant Coursework:</h5>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {item.courses.map((course, courseIndex) => (
                        <li 
                          key={courseIndex}
                          className="text-gray-600 dark:text-gray-400 text-sm flex items-center"
                        >
                          <span className="w-2 h-2 bg-teal-500 dark:bg-teal-400 rounded-full mr-2"></span>
                          {course}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;