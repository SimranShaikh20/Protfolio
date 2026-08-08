import React from "react";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  live_demo: string;
};

const projects: Project[] = [
  // --- Flagship projects from resume ---
  // NOTE: replace the placeholder githubUrl values below with the real repo links —
  // they weren't listed on the resume itself.
  {
    title: "SentinelRAG - Production-Hardened RAG API",
    description:
      "Deployed a RAG microservice behind FastAPI with an instruction-hierarchy guardrail blocking 95%+ of prompt-injection attempts and circuit-breaker fallback on failure. Cut p95 latency 45% (2.1s → 1.15s) and tokens/request 35%, scaling to 50+ req/sec, with full tracing/eval via LangSmith.",
    technologies: ["Python", "FastAPI", "LangChain", "Redis", "LangSmith"],
    githubUrl: "https://github.com/SimranShaikh20/SentinelRAG",
    live_demo: "",
  },
  {
    title: "HSN Classifier - PDF-Grounded HTS Trade Compliance Navigator",
    description:
      "Hierarchical HSN/HTS classifier built for Atlas Copco using zero-hallucination code-prefix tree traversal (Chapter → Heading → Subheading → Tariff line) sourced verbatim from HTS & GRI PDFs, invoking the LLM only for GRI 1-6 disambiguation, with a full audit trail for compliance traceability.",
    technologies: ["Python", "Streamlit", "Azure OpenAI", "BM25", "pdfplumber"],
    githubUrl: "https://github.com/SimranShaikh20/HSN-Classifier",
    live_demo: "",
  },
  {
    title: "Multi-Agent Code Review System",
    description:
      "Orchestrated 4 autonomous AI agents (Quality, Security, Performance, Documentation) in parallel with human-in-the-loop gates via TigerDB zero-copy forks, achieving 4x faster analysis (40s → 10s). 1st place, Agentic Postgres Challenge.",
    technologies: ["TypeScript", "React", "PostgreSQL", "TigerDB", "LLM Agents"],
    githubUrl: "https://github.com/SimranShaikh20/Multi-Agent-Code-Review-System",
    live_demo: "",
  },
  {
    title: "Casting Defect Detection - 12-Class Industrial CV Pipeline",
    description:
      "Built and published a novel 12-class industrial casting-defect image dataset; trained a ResNet-50 + EfficientNet-B3 ensemble with MixUp/CutMix augmentation and Test-Time Augmentation (TTA), cross-validated to 90%+ accuracy.",
    technologies: ["Python", "PyTorch", "ResNet-50", "EfficientNet-B3", "OpenCV"],
    githubUrl: "https://github.com/SimranShaikh20/Casting-Defect-Detection",
    live_demo: "",
  },
  {
    title: "Credit Risk Scoring - Production MLOps Pipeline",
    description:
      "End-to-end tabular-ML pipeline: trained and compared Logistic Regression, Random Forest, and XGBoost via RandomizedSearchCV with full MLflow tracking. Served via a Dockerized FastAPI microservice at ~20ms p50 latency, with a drift monitor and GitHub Actions CI/CD gating automated retraining alerts.",
    technologies: ["Python", "scikit-learn", "XGBoost", "MLflow", "FastAPI", "Docker"],
    githubUrl: "https://github.com/SimranShaikh20/Credit-Risk-Scoring",
    live_demo: "",
  },

  // --- Additional / earlier projects ---
  {
    title: "MindMesh AI - Multi-Agent Decision Support System",
    description:
      "Developed a multi-agent system using 6 specialized AI agents (Research, Pro/Con Advocates, Bias Checker, Fact Verifier, Synthesizer) that provides balanced recommendations 3-5x faster through parallel processing.",
    technologies: ["Vibe Coding", "Ai Agent", "React", "Google Gemini Api"],
    githubUrl: "https://github.com/SimranShaikh20/MindMesh-AI",
    live_demo: "https://mind-mesh-ai-two.vercel.app/",
  },
  {
    title: "AI-Powered Customer Support Agent (Zapier)",
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
      "Built an automated content creation tool using Lovable, n8n, and Groq API with webhook-based workflows for seamless LinkedIn post generation and personalized publishing.",
    technologies: ["Ai Agent", "N8N", "Lovable", "Automation"],
    githubUrl: "https://github.com/SimranShaikh20/LinkedIn-Content-Generator",
    live_demo: "https://linkedpost-ai-craft.lovable.app/",
  },
  {
    title: "AI Powered SEO Insight Hub",
    description:
      "Intelligent SEO automation platform that replaces expensive manual audits with AI-driven analysis, delivering professional reports and actionable strategies for traffic growth.",
    technologies: ["Agno Agent", "Firecrawl", "Exa Api", "Groq LLM"],
    githubUrl: "https://github.com/SimranShaikh20/seo-insighthub",
    live_demo: "https://seo-insightapp.streamlit.app/",
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
    technologies: ["Python", "Streamlit", "Machine Learning", "Pandas", "Scikit-learn"],
    githubUrl: "https://github.com/SimranShaikh20/Credit-Card-fraud-Detection",
    live_demo: "",
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
    live_demo: "",
  },
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