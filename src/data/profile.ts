/**
 * Profile data parsed from CV - Prateek Saurabh | AI Product Manager
 * Source of truth for the personal website.
 */

export const profile = {
  name: "Prateek Saurabh",
  title: "AI Product Manager",
  tagline: "Driving data-driven product innovation across backend systems, ML/AI integration, and enterprise transformation.",
  email: "prateek.saurabh212@gmail.com",
  phone: "+49 1521 6095291",
  location: "Hamburg, Germany",
  availableForWork: true,

  summary: `Product Manager with 6+ years driving data-driven product innovation across backend systems, ML/AI integration, and enterprise transformation. Proven track record delivering AI-powered solutions generating €270K+ annual savings while leading cross-functional teams. Expert in product strategy, roadmap execution, and stakeholder alignment. Currently architecting GenAI solutions including LLM-based agents and RAG systems. Combines technical understanding in Python, ML algorithms, and cloud platforms with strategic product thinking to deliver scalable products.`,

  experience: [
    {
      id: "about-you",
      company: "About You",
      role: "Product Manager",
      location: "Hamburg, Germany",
      period: "Jun 2024 – Present",
      bullets: [
        "Led integration of Vertex AI into e-commerce platform, engineering multi-modal ML pipeline for automated image attribute mapping; reduced time-to-market by 25% and achieved €270K annual cost savings",
        "Own end-to-end product strategy and roadmap for mission-critical backend application, synchronizing real-time data between core systems and merchant partners, maintaining 99.9% uptime",
        "Architected Merchant Cross Docking business model with automated SKU normalization and dynamic warehouse routing, enabling pan-European fulfillment across 25+ countries",
        "Drove data-driven product decisions through monthly stakeholder alignment meetings, capacity forecasting, and KPI tracking to ensure business objective alignment",
        "Facilitated all Scrum ceremonies and conducted technical discovery sessions with integration partners to shape roadmap priorities",
      ],
      skills: ["Vertex AI", "ML Pipelines", "E-commerce", "Product Strategy", "Scrum", "KPI Tracking", "Real-time Data"],
    },
    {
      id: "ibm-strategy",
      company: "IBM",
      role: "Strategy Consultant (Product Owner)",
      location: "Bangalore, India",
      period: "Jul 2020 – May 2024",
      bullets: [
        "Owned product vision, roadmap and backlog for an enterprise scale revenue simulation and forecasting platform used by senior leadership across a shared services organization serving 150K+ employees",
        "Acted as Product Owner for a cross functional team (data science, engineering and finance) driving prioritisation, sprint planning, reviews and delivery of incremental releases",
        "Led discovery and delivery of an ML driven revenue delinquency prediction product, partnering with data scientists to translate business problems into product requirements",
        "Shaped feature scope across EDA, feature engineering, model validation (Random Forest, SVM, Logistic Regression) ensuring solution aligns with real business workflows",
        "Achieved 30% reduction in revenue leakage through ML powered product features",
      ],
      skills: ["Product Vision", "ML", "Random Forest", "SVM", "EDA", "Feature Engineering", "Agile", "Data Science"],
    },
    {
      id: "ibm-associate",
      company: "IBM",
      role: "Associate Consultant (Junior Product Owner)",
      location: "Bangalore, India",
      period: "Jun 2018 – Jun 2020",
      bullets: [
        "Supported product roadmap planning and backlog prioritisation for enterprise scale expense management platform serving 150K+ employees, improving expense recovery by $25M+ annually",
        "Supported adoption tracking, reporting, and continuous improvement initiatives for Manager's Portal used by 30K+ people managers",
        "Conducted user interviews, process analysis and data exploration to identify process bottlenecks and inform product decisions",
        "Collaborated with developers and analysts to translate business requirements into technical specifications, ensuring timely delivery and adoption of digital transformation projects",
      ],
      skills: ["Backlog Management", "User Research", "Process Analysis", "Digital Transformation"],
    },
  ],

  aiProjects: [
    {
      id: "chatbot-resume",
      name: "Agentic AI - Chatbot Resume",
      description: "Architected LLM-based chatbot using OpenAI GPT-4o-mini with Function Calling, serving as intelligent automated representative.",
      highlights: [
        "Engineered dual-purpose action framework capturing qualified leads via email API and identifying knowledge gaps",
        "Implemented RAG pattern by dynamically aggregating unstructured documents and injecting into system prompt for high-fidelity, context-aware responses",
      ],
      tags: ["OpenAI", "GPT-4", "Function Calling", "RAG"],
    },
    {
      id: "deep-research",
      name: "Agentic AI - Deep Research system",
      description: "Built intelligent research system using OpenAI Agents framework and Python asyncio for parallel task orchestration.",
      highlights: [
        "Integrated Research Manager coordinating specialized AI agents and tool execution (WebSearchTool, SendGrid API)",
        "Enforced reliable data flow using Pydantic schemas for structured, API-consumable research deliverables",
      ],
      tags: ["OpenAI Agents", "Python", "asyncio", "Pydantic"],
    },
  ],

  skills: {
    "AI/ML Product": [
      "GenAI",
      "LLM Integration",
      "RAG Architecture",
      "Agentic AI",
      "OpenAI API",
      "Supervised/Unsupervised Learning",
      "Random Forest",
      "SVM",
      "Model Deployment",
    ],
    "Product Management": [
      "Product Strategy & Roadmap",
      "Agile/Scrum",
      "Backlog Management",
      "Stakeholder Management",
      "Product Discovery",
      "A/B Testing",
      "KPI Tracking",
    ],
    Technical: [
      "Python (Pandas, NumPy, asyncio)",
      "SQL",
      "AWS",
      "APIs (REST, XML, JSON)",
      "Figma",
      "Jira",
      "Confluence",
      "BigQuery",
      "Tableau",
    ],
    "Data & Analytics": [
      "Data Visualization",
      "Google Analytics",
      "Predictive Modeling",
      "Feature Engineering",
      "EDA",
      "Statistical Analysis",
    ],
  },

  education: [
    {
      degree: "Master of Business Administration (MBA)",
      specialization: "Operations Management",
      institution: "Symbiosis International University",
      location: "Pune, India",
    },
    {
      degree: "Bachelor of Engineering",
      specialization: "Civil Engineering",
      institution: "Manipal University",
      location: "Manipal, India",
    },
  ],

  certifications: [
    "Professional Scrum Product Owner",
    "Professional Scrum Master",
    "IBM Agile Explorer",
    "HackerRank SQL Advanced",
    "Tableau Desktop Specialist",
    "Alteryx Designer Core",
    "Six Sigma Green Belt",
    "Product Management A to Z (Udemy)",
  ],

  languages: [
    { language: "English", level: "C2" },
    { language: "Hindi", level: "Native" },
    { language: "German", level: "A1" },
  ],

  socials: {
    linkedin: "https://www.linkedin.com/in/prateek-saurabh-hamburg/",
    github: "https://github.com/prateeksaurabh", // placeholder if not in CV
  },
} as const;

export type Profile = typeof profile;
