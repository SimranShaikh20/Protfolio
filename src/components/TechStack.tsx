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
    // Languages
    { name: 'Python', icon: 'fab fa-python', proficiency: 90, category: 'language' },
    { name: 'SQL', icon: 'fas fa-database', proficiency: 85, category: 'language' },
    { name: 'TypeScript', icon: 'fab fa-js', proficiency: 75, category: 'language' },
    { name: 'Java', icon: 'fab fa-java', proficiency: 80, category: 'language' },
    { name: 'HTML5', icon: 'fab fa-html5', proficiency: 85, category: 'language' },
    { name: 'CSS3', icon: 'fab fa-css3-alt', proficiency: 80, category: 'language' },

    // Frameworks / libraries
    { name: 'LangChain', icon: 'fas fa-link', proficiency: 85, category: 'framework' },
    { name: 'LangGraph', icon: 'fas fa-project-diagram', proficiency: 80, category: 'framework' },
    { name: 'PyTorch', icon: 'fas fa-fire', proficiency: 85, category: 'framework' },
    { name: 'TensorFlow / Keras', icon: 'fas fa-layer-group', proficiency: 75, category: 'framework' },
    { name: 'FastAPI', icon: 'fas fa-bolt', proficiency: 85, category: 'framework' },
    { name: 'React', icon: 'fab fa-react', proficiency: 80, category: 'framework' },
    { name: 'scikit-learn', icon: 'fas fa-chart-line', proficiency: 85, category: 'framework' },

    // Tools & infra
    { name: 'Git / GitHub', icon: 'fab fa-github', proficiency: 90, category: 'tool' },
    { name: 'Streamlit', icon: 'fas fa-stream', proficiency: 90, category: 'tool' },
    { name: 'Docker', icon: 'fab fa-docker', proficiency: 80, category: 'tool' },
    { name: 'MLflow', icon: 'fas fa-flask', proficiency: 75, category: 'tool' },
    { name: 'FAISS / ChromaDB / Pinecone', icon: 'fas fa-vector-square', proficiency: 85, category: 'tool' },
    { name: 'PostgreSQL', icon: 'fas fa-database', proficiency: 80, category: 'tool' },
    { name: 'MongoDB', icon: 'fas fa-leaf', proficiency: 75, category: 'tool' },
    { name: 'Azure', icon: 'fab fa-microsoft', proficiency: 80, category: 'tool' },
    { name: 'Google Cloud', icon: 'fab fa-google', proficiency: 75, category: 'tool' },
    { name: 'n8n / Zapier', icon: 'fas fa-cogs', proficiency: 80, category: 'tool' },

    // Concepts / GenAI & ML
    { name: 'RAG', icon: 'fas fa-search', proficiency: 90, category: 'concept' },
    { name: 'Multi-Agent Orchestration', icon: 'fas fa-robot', proficiency: 90, category: 'concept' },
    { name: 'MCP (Model Context Protocol)', icon: 'fas fa-plug', proficiency: 80, category: 'concept' },
    { name: 'Prompt Engineering', icon: 'fas fa-comment-dots', proficiency: 90, category: 'concept' },
    { name: 'OpenAI / Anthropic / Gemini / Groq', icon: 'fas fa-brain', proficiency: 85, category: 'concept' },
    { name: 'Machine Learning', icon: 'fas fa-chart-bar', proficiency: 85, category: 'concept' },
    { name: 'Computer Vision', icon: 'fas fa-eye', proficiency: 80, category: 'concept' },
    { name: 'CI/CD', icon: 'fas fa-infinity', proficiency: 75, category: 'concept' },
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
          My technical toolkit centers on GenAI, agentic systems, and RAG, backed by a strong foundation in
          applied machine learning, computer vision, and production deployment.
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