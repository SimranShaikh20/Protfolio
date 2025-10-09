import { useEffect, useRef, useState } from 'react';

interface Skill {
  name: string;
  icon: string;
  proficiency: number;
  category: 'language' | 'framework' | 'tool' | 'concept';
}

const TechStack = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const sectionRef = useRef<HTMLElement>(null);

  const skills: Skill[] = [
    { name: 'Java', icon: 'fab fa-java', proficiency: 90, category: 'language' },
    { name: 'Python', icon: 'fab fa-python', proficiency: 85, category: 'language' },
    { name: 'JavaScript', icon: 'fab fa-js', proficiency: 75, category: 'language' },
    { name: 'HTML5', icon: 'fab fa-html5', proficiency: 90, category: 'language' },
    { name: 'CSS3', icon: 'fab fa-css3-alt', proficiency: 80, category: 'language' },
    { name: 'Git', icon: 'fab fa-git', proficiency: 85, category: 'tool' },
    { name: 'GitHub', icon: 'fab fa-github', proficiency: 85, category: 'tool' },
    { name: 'Streamlit', icon: 'fab fa-github', proficiency: 95, category: 'tool' },
    { name: 'Google Colab', icon: 'fab fa-github', proficiency: 95, category: 'tool' },
    { name: 'BeautifulSoup / Scrapy', icon: 'fab fa-github', proficiency: 85, category: 'framework' },
    { name: 'LangChain', icon: 'fab fa-github', proficiency: 55, category: 'framework' },
    { name: 'SQL', icon: 'fas fa-database', proficiency: 80, category: 'language' },
    { name: 'Data Analysis', icon: 'fas fa-chart-line', proficiency: 85, category: 'concept' },
    { name: 'Machine Learning', icon: 'fas fa-brain', proficiency: 75, category: 'concept' },
    { name: 'AI', icon: 'fas fa-robot', proficiency: 70, category: 'concept' },
    { name: 'LLM', icon: 'fas fa-robot', proficiency: 50, category: 'concept' },
    { name: 'n8n', icon: 'fas fa-project-diagram', proficiency: 85, category: 'tool' },
    { name: 'Zapier', icon: 'fas fa-bolt', proficiency: 80, category: 'tool' },
    { name: 'Automation', icon: 'fas fa-cogs', proficiency: 85, category: 'concept' },
    { name: 'Full Stack', icon: 'fas fa-layer-group', proficiency: 75, category: 'concept' },
  ];
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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

  const filteredSkills = activeFilter === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeFilter);

  return (
    <section id="techstack" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Tech Stack
        </h2>
        
        <p className="text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-10">
          My technical toolkit is diverse, focusing on AI/ML technologies, web development, and software engineering fundamentals.
        </p>
        
        <div className="flex justify-center space-x-2 mb-12 flex-wrap">
          {['all', 'language', 'framework', 'tool', 'concept'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-all duration-300 m-1
                ${activeFilter === filter
                  ? 'bg-purple-600 dark:bg-purple-500 text-white shadow-md'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
            >
              {filter}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg mb-3">
                  <i className={`${skill.icon} text-xl`}></i>
                </div>
                <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-3">{skill.name}</h3>
                
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-indigo-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: isVisible ? `${skill.proficiency}%` : '0%',
                    }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{skill.proficiency}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;