export const portfolioData = {
  name: 'Pranov J B',
  title: 'AI Developer | Agentic AI Builder | App Developer | ML & Data Science',
  description: 'Building AI that works, agents that collaborate, and applications that people actually enjoy using. I specialize in LLM-powered solutions, multi-agent systems, and machine learning workflows, turning ambitious ideas into real-world products—one bug fix at a time.',

  social: [
    { name: 'GitHub', url: 'https://github.com/jbpranov2204', icon: 'github' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/jbpranov/', icon: 'linkedin' },
  ],

  about: {
    summary: `AI & Data Science undergraduate specializing in Agentic AI, Generative AI, and Machine Learning. Experienced in building multi-agent systems using CrewAI and LangChain, developing RAG-powered applications, and deploying AI solutions on Oracle Cloud Infrastructure. Skilled in Python, Flutter, and cloud-native development, with a strong focus on creating intelligent, scalable products that solve real-world problems.`,

    education: [
      {
        school: 'Meenakshi Sundararajan Engineering College',
        degree: 'B.Tech in Artificial Intelligence and Data Science',
        year: 'Nov 2022 - May 2026',
        details: 'Chennai, India',
      },
    ],
  },

  coreCompetencies: [
    { title: 'Agentic AI Systems', description: 'Multi-Agent Orchestration', icon: '🤖', color: '#c084fc' },
    { title: 'AI Frameworks', description: 'CrewAI and LangChain', icon: '🔗', color: '#38bdf8' },
    { title: 'Machine Learning', description: 'Python for ML & Data Science', icon: '🐍', color: '#4ade80' },
    { title: 'AIOps', description: 'End-to-End ML Pipelines', icon: '⚙️', color: '#f472b6' },
    { title: 'Cloud & Security', description: 'OCI, API Gateways, Serverless Functions', icon: '☁️', color: '#fbbf24' },
    { title: 'App Development', description: 'AI-Integrated Web Apps (Flutter & Dart)', icon: '📱', color: '#60a5fa' },
  ],

  skills: {
    'Agentic AI': [
      'Multi-Agent Orchestration',
      'CrewAI',
      'LangChain',
      'AI Agents'
    ],

    'Generative AI': [
      'LLMs',
      'RAG',
      'NLP',
      'Prompt Engineering'
    ],

    'Machine Learning': [
      'Python',
      'Predictive Modeling',
      'Model Training',
      'AIOps Pipelines'
    ],

    'Cloud Systems': [
      'Oracle Cloud Infrastructure',
      'API Gateways',
      'Serverless Functions',
      'Oracle Database'
    ],

    'Mobile Development': [
      'Flutter',
      'Dart',
      'AI-Integrated Apps',
      'Responsive UI'
    ],

    'Data & Tools': [
      'SQL',
      'Git',
      'Docker',
      'REST APIs'
    ]
  },

  projects: [
    {
      id: 1,
      title: 'Safora - Safer Roads Intelligence',
      description: 'Safora is a cutting-edge web application that leverages artificial intelligence to predict and prevent road accidents. By analyzing historical crash data, traffic patterns, and environmental conditions, it identifies potential accident hotspots before they occur. The system generates a dynamic risk assessment map with real-time alerts, empowering drivers and authorities to make informed decisions for safer travel.',
      image: '/images/safora.png',
      technologies: ['Python', 'ML', 'Data Analysis', 'Visualization'],
      github: '#',
      live: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'Krishi Sakhi - AI Farming Assistant',
      description: 'Krishi Sakhi is a mobile-first digital farming companion that delivers personalized, daily, actionable guidance to farmers. Leveraging an advanced agentic architecture, live weather APIs, and soil data, it addresses crop losses and climate volatility. The system provides real-time recommendations through voice and text, precisely tailored to the farmer\'s specific crop, growth stage, soil health, and local weather risks.                                                ',
      image: '/images/krishi-sakhi.jpg',
      technologies: ['LLMs', 'Multi-Agent', 'Python', 'NLP'],
      github: '#',
      live: '#',
      featured: true,
    },
    {
      id: 3,
      title: 'ATOM - Predictive Observability',
      description: 'ATOM is an end-to-end predictive observability platform that shifts from reactive alerting to predictive reliability intelligence. It collects real-time system metrics like CPU, memory, latency, and error rates. The platform analyzes trends, forecasts future metric behavior using ARIMA time-series models, and predicts risk scores with AI-powered agentic reasoning to provide proactive, actionable alerts.',
      image: '/images/atom.png',
      technologies: ['Flutter', 'Gemini API', 'GitHub API', 'AI'],
      github: '#',
      live: '#',
      featured: true,
    },
  ],

  myProjects: [
    {
      id: 101,
      title: 'Safora - Accident Hotspot Prediction',
      description: 'Safora is a cutting-edge web application that leverages artificial intelligence to predict and prevent road accidents. By analyzing historical crash data, traffic patterns, and environmental conditions, it identifies potential accident hotspots before they occur. The system generates a dynamic risk assessment map with real-time alerts, empowering drivers and authorities to make informed decisions for safer travel.',
      image: '/images/safora.png',
      technologies: ['Python', 'ML', 'Data Analysis', 'Visualization'],
      github: 'https://github.com/jbpranov2204/accident_hotspot',
      modelCode: 'https://github.com/jbpranov2204/Prediction_Ml_Model',
      live: 'https://accidentpred-2d2d6.web.app/',
    },
    {
      id: 103,
      title: 'Krishi Sakhi',
      description: 'Krishi Sakhi is a mobile-first digital farming companion that delivers personalized, daily, actionable guidance to farmers. Leveraging an advanced agentic architecture, live weather APIs, and soil data, it addresses crop losses and climate volatility. The system provides real-time recommendations through voice and text, precisely tailored to the farmer\'s specific crop, growth stage, soil health, and local weather risks.',
      image: '/images/krishi-sakhi.jpg',
      technologies: ['LLMs', 'Multi-Agent', 'Python', 'NLP'],
      github: 'https://github.com/jbpranov2204/krishi_sakhi',
      modelCode: 'https://github.com/jbpranov2204/Agent_Krishi_Sakhi/',
    },
    {
      id: 105,
      title: 'Resume Screening',
      description: 'This smart recruitment platform leverages AI to intelligently match candidate resumes with specific job requirements. The system automatically parses uploaded resumes, evaluates applicants against job criteria, and accurately predicts candidate eligibility. It streamlines the hiring workflow by providing instant, interactive feedback to candidates using an intuitive interface, ensuring an efficient and seamless candidate screening process.',
      image: '/images/resume-screening.jpg',
      technologies: ['Python', 'NLP', 'ML'],
      github: 'https://github.com/jbpranov2204/resume_screening',
      live: '#',
    },
    {
      id: 106,
      title: 'ATOM - Predictive Observability',
      description: 'ATOM is an end-to-end predictive observability platform that shifts from reactive alerting to predictive reliability intelligence. It collects real-time system metrics like CPU, memory, latency, and error rates. The platform analyzes trends, forecasts future metric behavior using ARIMA time-series models, and predicts risk scores with AI-powered agentic reasoning to provide proactive, actionable alerts.',
      image: '/images/atom.png',
      technologies: ['Monitoring', 'Analytics', 'Automation'],
      github: 'https://github.com/jbpranov2204/atom',
    },
    {
      id: 107,
      title: 'Globe Trotter',
      description: 'Globe Trotter is a comprehensive Flutter-based travel companion designed to make discovering and planning adventures seamless. It provides intelligent destination discovery, stunning photo galleries, and intuitive trip planning tools. Users can seamlessly organize itineraries, bookmark favorite locations, leverage smart search to find tailored destinations, and meticulously track their personal travel statistics globally.',
      image: '/images/globe-trotter.png',
      technologies: ['Web', 'UI', 'Firebase'],
      github: 'https://github.com/jbpranov2204/globe_trotter',
      live: 'https://globetrotter-4fb91.web.app/',
    },
    {
      id: 108,
      title: 'LearnEdge - Smart AR Tutor',
      description: 'LearnEdge is an AI-powered educational application that leverages augmented reality to deliver highly interactive and personalized learning experiences. The system simplifies complex concepts through immersive, real-time 3D visualizations and adaptive learning paths. It features an intelligent conversational learning assistant, real-time progress tracking, and smart tutoring to continuously assess and support student achievement.',
      image: '/images/learn-edge.png',
      technologies: ['Web', 'Education', 'UX'],
      github: 'https://github.com/jbpranov2204/learn_edge',
    },
  ],

  experience: [
    {
      type: 'experience',
      title: 'Associate Technical Consultant',
      company: 'Astutech Solutions India Pvt Ltd',
      year: 'Dec 2025 - Present',
      description: 'Built an end-to-end AIOps ML pipeline to classify OIC system runs and deployed it as scalable OCI Functions for real-time execution.',
    },
    {
      type: 'internship',
      title: ' AI Developer Intern',
      company: 'Astutech Solutions India Pvt Ltd',
      year: 'Aug 2025 - Dec 2025',
      description: 'Built a hybrid AI system for supply chain risk detection by combining LLM-based data labeling, semantic embeddings, and traditional machine learning on real-time news headlines.',
    },
  ],

  contact: {
    email: 'jbpranov@gmail.com',
    phone: '+91-6379942373',
    location: 'Chennai, India',
    message: 'Open to AI/LLM projects, Flutter apps, and collaborative product development.',
  },
}

export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

export const downloadResume = () => {
  const link = document.createElement('a')
  link.href = '/Pranov_JB_Resume.pdf'
  link.download = 'Pranov_JB_Resume.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
