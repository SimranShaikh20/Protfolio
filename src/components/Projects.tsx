import React from "react";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  live_demo: string;
};

const projects: Project[] = [
  
  {
    title: "MindMesh AI - Multi-Agent Decision Support System",
    description:
      "Developed a multi-agent system using 6 specialized AI agents (Research, Pro/Con Advocates, Bias Checker, Fact Verifier, Synthesizer) that provides balanced recommendations 3-5x faster through parallel processing.",
    technologies: ["Vibe Coding", "Ai Agent", "React", "Google Gemini Api" ],
    githubUrl: "https://github.com/SimranShaikh20/MindMesh-AI",
    live_demo: "https://mind-mesh-ai-two.vercel.app/", // No live demo for this project
  },
  {
    title: "AI-Powered Customer Support Agent (Zapier) ",
    description:
      "Automated customer support using Zapier workflows with AI-generated responses from PDF brochures, confidence-based drafts, and WhatsApp alerts to reduce workload and ensure consistent communication.",
    technologies: ["Support Agent", "Zapier", "Pdf Processing", "Automation"],
    githubUrl: "https://github.com/SimranShaikh20/Support-Agent-Automation",
    live_demo:
      "https://agents.zapier.com/copy/191d15d7-9e96-42b2-a1f4-d13a2dd113a2",
  },
  {
    title: "LinkedIn Content Generator",
    description:
      "Built an automated content creation tool using Lovable, n8n, and Groq API with webhook-based workflows for seamless LinkedIn post generation and personalized publishing",
    technologies: ["Ai Agent", "N8N", "Lovable", "Automcation"],
    githubUrl: "https://github.com/SimranShaikh20/LinkedIn-Content-Generator",
    live_demo:
      "https://linkedpost-ai-craft.lovable.app/",
  },
  {
    title: "AI Powered SEO Insight Hub ",
    description:
      "Intelligent SEO automation platform that replaces expensive manual audits with AI-driven analysis, delivering professional reports and actionable strategies for traffic growth.",
    technologies: ["Agno Agent", "Fire crawl", "Exa Api", "Groq LLM"],
    githubUrl: "https://github.com/SimranShaikh20/seo-insighthub",
    live_demo:
      "https://seo-insightapp.streamlit.app/",
  },
  {
    title: "AI Powered Grammar Spell Checker",
    description:
      "An AI-driven grammar and spell checker that uses Groq's Mixtral-8x7b-32768 model to correct errors in English and Hindi, offering real-time, context-aware corrections through a user-friendly Streamlit interface.",
    technologies: ["Python", "Groq LLM", "API", "Streamlit"],
    githubUrl: "https://github.com/SimranShaikh20/AI-Powered-Grammar-Spell-Checker",
    live_demo:
      "https://ai-powered-grammar-spell-checker-hyndfylzmob5tn4wffyjap.streamlit.app/",
  },
  {
    title: "AI Powered Recruitment Assistant",
    description:
      "An AI-powered recruitment assistant that utilizes Groq's Mixtral-8x7b-32768 model to analyze resumes and job descriptions, providing real-time feedback and suggestions for optimizing resumes to match job requirements.",
    technologies: ["Python", "Groq LLM", "API", "Streamlit", "SMTP Configuration"],
    githubUrl: "https://github.com/SimranShaikh20/AI-Powered-Recruitment-Assistant",
    live_demo:
      "https://ai-powered-recruitment-assistant-napxpg8qcggtua5pd5llcy.streamlit.app/",
  },
 
  {
    title: "Smart Resume Assistant (ATS)",
    description:
      "The Smart ATS is a Streamlit app that optimizes resumes by matching them to job descriptions using Gemini AI, highlighting key improvements for better job alignment.",
    technologies: ["Python", "Streamlit", "LLM", "Google Gemini API"],
    githubUrl: "https://github.com/SimranShaikh20/Smart-Resume-Assistant",
    live_demo:
      "https://smart-resume-assistant-4ztrqstzwr9krvd38d78r8.streamlit.app/",
  },
  {
    title: "Fraud Transaction Detection using Machine Learning",
    description:
      "Implemented a Logistic Regression model for detecting fraudulent credit card transactions with preprocessing, class balancing, evaluation, and Streamlit integration for real-time predictions.",
    technologies: ["Python", "Streamlit", "Machine learning", "Pandas", "Scikit-learn"],
    githubUrl: "https://github.com/SimranShaikh20/Credit-Card-fraud-Detection",
    live_demo:""
  },
  {
    title: "Smart Interview ChatBot",
    description:
      "An innovative chatbot that enhances interview preparation by delivering context-driven, accurate answers using advanced LLMs and embeddings for efficient document-based Q&A.",
    technologies: ["Python", "Streamlit", "LLM", "ChatGROQ", "FAISS"],
    githubUrl: "https://github.com/SimranShaikh20/Smart-Interview-Bot",
    live_demo:
      "https://smart-interview-bot-b7pshyhw8syhmdzhf6q6mu.streamlit.app/",
  },
   {
    title: "Cold Email Generator",
    description: "JobSeekerAI: Personalized Cold Email Automation for Job Outreach",
    technologies: ["LLM", "Python", "Groq API", "AI", "Git", "GitHub"],
    githubUrl: "https://github.com/SimranShaikh20/Cold-Email-Generator",
    live_demo: "", // No live demo for this project
  }
];

const Projects = () => {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-white dark:bg-slate-800 shadow-lg rounded-2xl p-5 border border-gray-200 dark:border-slate-700 hover:shadow-xl transition-shadow"
        >
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
            {project.title}
          </h2>
          <p className="text-gray-600 dark:text-slate-300 mb-4">
            {project.description}
          </p>
          <div className="mb-4 flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="bg-blue-100 text-blue-800 dark:bg-slate-700 dark:text-slate-100 text-sm font-medium px-2.5 py-0.5 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
            >
              View on GitHub →
            </a>
            {/* Conditionally render the Live Demo link if available */}
            {project.live_demo && project.live_demo !== "" && (
              <a
                href={project.live_demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 dark:text-green-400 hover:underline font-semibold"
              >
                View Live Demo →
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
