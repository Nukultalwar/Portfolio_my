import { Project, SkillCategory, WorkflowStep, ValuePillar } from '../types';

export const PORTFOLIO_CONFIG = {
  personal: {
    name: "Nukul Talwar",
    role: "Software Engineer & Frontend Developer",
    tagline: "I build modern, responsive and interactive web experiences using JavaScript, React, HTML and CSS.",
    subTagline: "Bridging creative UI design with clean engineering architecture to deliver fast, accessible, and delightful digital products.",
    status: {
      isAvailable: true,
      text: "Open to Opportunities",
      subtext: "Actively seeking Software Engineer & Frontend Developer roles"
    },
    location: "Available for Remote & Onsite Roles",
    githubUrl: "https://github.com/Nukultalwar",
    linkedinUrl: "https://www.linkedin.com/in/nukul-talwar-84a574211/",
    // Resume file located in /public or external link. Can be updated anytime:
    resumeUrl: "/1Nukul_Talwar.pdf",
    // Configurable email display/fallback (editable by user):
    contactEmail: "nukultalwar@gmail.com" 
  },
  
  about: {
    summary: "I am a frontend-focused Software Engineer passionate about crafting seamless, responsive, and aesthetically engaging web applications. My philosophy centers on writing clean, modular code, paying meticulous attention to typography, micro-interactions, and usability, and turning complex problem statements into intuitive user interfaces.",
    highlights: [
      {
        title: "Frontend Engineering",
        description: "Specialized in component-driven UI development with modern React and JavaScript.",
        icon: "Layout"
      },
      {
        title: "Clean Architecture",
        description: "Writing scalable, readable, and maintainable code following modern best practices.",
        icon: "Code"
      },
      {
        title: "Responsive & Accessible",
        description: "Designing interfaces that look stunning and function effortlessly across all devices and screen sizes.",
        icon: "Smartphone"
      },
      {
        title: "API & Data Integration",
        description: "Seamlessly connecting RESTful APIs, managing asynchronous state, and handling edge cases.",
        icon: "Database"
      }
    ]
  },

  skillsCategories: [
    {
      title: "Core Frontend & Frameworks",
      description: "The primary technologies I leverage daily to engineer modern user interfaces.",
      iconName: "Code2",
      skills: [
        { name: "React.js", level: "Core", experienceFocus: "Hooks, Component Architecture, Virtual DOM & State Management" },
        { name: "JavaScript", level: "Core", experienceFocus: "ES6+, Async/Await, Closures, DOM Manipulation & Event Loop" },
        { name: "HTML5", level: "Core", experienceFocus: "Semantic Markup, Accessibility (a11y), SEO-optimized structures" },
        { name: "CSS3", level: "Core", experienceFocus: "Flexbox, CSS Grid, Custom Properties, Glassmorphism & Keyframe Animations" },
        { name: "Responsive Design", level: "Core", experienceFocus: "Mobile-First Philosophy, Fluid Typography & Media Queries" }
      ]
    },
    {
      title: "Tools, APIs & Workflow",
      description: "Modern engineering tooling ensuring code quality, version control, and seamless deployment.",
      iconName: "Cpu",
      skills: [
        { name: "REST APIs", level: "Advanced", experienceFocus: "Fetch/Axios, JSON handling, Error Boundaries & Optimistic UI" },
        { name: "Git", level: "Advanced", experienceFocus: "Branching strategies, Merge Conflict Resolution & Version Control" },
        { name: "GitHub", level: "Advanced", experienceFocus: "Pull Requests, Code Reviews, Releases & Repository Management" },
        { name: "Vite & Tooling", level: "Proficient", experienceFocus: "Fast HMR, Bundling, Environment Variables & Asset Optimization" }
      ]
    },
    {
      title: "Foundations & Programming",
      description: "Fundamental computer science, algorithmic foundations, and versatile programming languages.",
      iconName: "Terminal",
      skills: [
        { name: "ES6+ Standards", level: "Advanced", experienceFocus: "Destructuring, Modules, Promises, Functional Programming" },
        { name: "Python", level: "Familiar", experienceFocus: "Basic scripting, Data Structures & Logic building" },
        { name: "Java", level: "Familiar", experienceFocus: "Object-Oriented Programming (OOP), Classes & Inheritance" }
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: "podcast-website",
      title: "Podcast Website",
      subtitle: "Audio Streaming & Content Discovery Platform",
      description: "A modern, responsive web application for discovering, streaming, and managing podcast episodes with clean audio player controls and rich episode details.",
      longDescription: "The Podcast Website delivers a seamless audio listening experience directly in the browser. Features custom audio player integration with play/pause, scrub bar, responsive episode lists, category filtering, and optimized layout for mobile and desktop listeners.",
      tags: ["React", "JavaScript", "HTML5", "CSS3", "Audio API", "Responsive"],
      category: "Full Stack",
      featured: true,
      githubUrl: "https://github.com/Nukultalwar/prodcast-website", // Actual repository URL (configurable)
      liveUrl: undefined, // Configurable when deployed
      isPrivateOrInProgress: false,
      statusText: "Actual Repository",
      keyFeatures: [
        "Interactive custom audio player with timeline scrubber",
        "Responsive grid layout for podcast cards and episode archives",
        "Categorized navigation for discovering episodes by genre",
        "Mobile-first responsive interface with tactile touch controls"
      ],
      techStack: ["React.js", "JavaScript", "CSS3", "HTML5", "Git/GitHub"],
      architectureNotes: "Modularized audio controller components with clean event listeners and state management for playback state.",
      accentColor: "#38bdf8"
    },
    {
      id: "netflix-clone",
      title: "Netflix Clone",
      subtitle: "Cinematic Streaming UI & Movie Browse Experience",
      description: "A sleek, dark-themed entertainment streaming interface showcasing hero banners, trending carousels, dynamic movie previews, and responsive layouts.",
      longDescription: "Built a responsive Netflix-inspired web interface using HTML, CSS, and JavaScript with dynamic content sliders, trailer preview integration, and smooth hover micro-interactions that mirror production streaming services.",
      tags: ["JavaScript", "HTML5", "CSS3", "Dynamic Sliders", "Responsive UI"],
      category: "Frontend",
      featured: true,
      githubUrl: "https://github.com/Nukultalwar/Netflix_Clone", // Actual repository URL on GitHub profile
      liveUrl: undefined,
      isPrivateOrInProgress: false,
      statusText: "Actual Repository",
      keyFeatures: [
        "Dynamic hero banner with high-resolution backdrop and featured titles",
        "Horizontal scrolling carousels for Trending, Top Rated, and Originals",
        "Interactive modal showing synopsis, release year, and ratings",
        "Tailored responsive layout matching Netflix's signature dark aesthetic"
      ],
      techStack: ["JavaScript", "HTML5", "CSS3", "CSS Grid & Flexbox", "Git"],
      architectureNotes: "Dynamic content slider logic and responsive layout handling for multi-device streaming viewing.",
      accentColor: "#ef4444"
    },
    {
      id: "movie-recommendation",
      title: "Movie Recommendation System",
      subtitle: "Content-Driven Recommendation & Filter Engine",
      description: "An intelligent movie discovery and recommendation platform allowing users to find cinema based on genres, keywords, user ratings, and preferences.",
      longDescription: "Engineered to simplify movie selection, this application integrates movie datasets, search filters, and similarity suggestions. Users can explore trending titles, read summaries, and view personalized recommendations based on chosen criteria.",
      tags: ["Python", "Data Processing", "Recommendation Engine", "Algorithms"],
      category: "Full Stack",
      featured: true,
      githubUrl: "https://github.com/Nukultalwar/Movie-Recommender-System", // Actual repository URL on GitHub profile
      liveUrl: undefined,
      isPrivateOrInProgress: false,
      statusText: "Actual Repository",
      keyFeatures: [
        "Instant title search with debounced input query handling",
        "Multi-criteria filtering: genre, release date, and rating thresholds",
        "Recommendation cards suggesting similar cinematic experiences",
        "Rich detail modal with cast highlights and production details"
      ],
      techStack: ["Python", "Recommendation Algorithms", "Data Science", "Git"],
      architectureNotes: "Similarity scoring algorithms matching user preferences against movie feature matrices.",
      accentColor: "#818cf8"
    },
    {
      id: "weather-app",
      title: "Weather App",
      subtitle: "Real-Time Meteorological Dashboard",
      description: "A clean, live weather dashboard providing real-time forecasts, temperature metrics, humidity, wind velocity, and location-based weather condition cards.",
      longDescription: "A focused, responsive weather utility designed with clear data visualization. It connects to live meteorological APIs to provide real-time condition reporting, dynamic weather icons (sun, rain, snow, clouds), and 5-day predictive forecasts.",
      tags: ["JavaScript", "REST API", "Geolocation", "HTML5", "CSS3"],
      category: "Utility",
      featured: false,
      githubUrl: "https://github.com/Nukultalwar/weather_app", // Actual repository URL on GitHub profile
      liveUrl: undefined,
      isPrivateOrInProgress: false,
      statusText: "Actual Repository",
      keyFeatures: [
        "Real-time weather data lookup for global cities",
        "Dynamic background changes responding to current weather states",
        "Detailed climate indicators: humidity, wind speed, pressure, UV index",
        "Clean responsive card UI with animated atmospheric iconography"
      ],
      techStack: ["JavaScript", "OpenWeather API / REST", "HTML5", "CSS3"],
      architectureNotes: "Robust error handling for invalid cities or network failures with user-friendly retry banners.",
      accentColor: "#06b6d4"
    },
    {
      id: "todo-app",
      title: "Todo App",
      subtitle: "Productivity Task Manager with Persistent State",
      description: "A feature-complete task management application with priority filters, completion toggles, categorization, and local storage data persistence.",
      longDescription: "A reliable productivity tool emphasizing simplicity and responsive interaction. Users can organize daily goals, filter by active or completed tasks, clear finished items, and enjoy seamless data persistence across browser sessions.",
      tags: ["HTML5", "CSS3", "JavaScript", "LocalStorage", "CRUD Operations"],
      category: "Utility",
      featured: false,
      githubUrl: "https://github.com/Nukultalwar/todo-app", // Actual repository URL on GitHub profile
      liveUrl: undefined,
      isPrivateOrInProgress: false,
      statusText: "Actual Repository",
      keyFeatures: [
        "Full CRUD functionality: Add, Edit, Complete, and Delete tasks",
        "Filter tasks by All, Active, and Completed statuses",
        "Browser LocalStorage persistence ensuring data is never lost",
        "Accessible keyboard navigation with keyboard shortcuts"
      ],
      techStack: ["HTML5", "CSS3", "JavaScript", "LocalStorage API"],
      architectureNotes: "Optimistic UI updates paired with persistent storage hooks for frictionless task editing.",
      accentColor: "#10b981"
    },
    {
      id: "hotel-website",
      title: "Hotel Booking Website",
      subtitle: "Full-Featured Hospitality & Reservation UI",
      description: "A responsive, modern hospitality website engineered in TypeScript with room discovery, amenity showcases, and booking reservation flows.",
      longDescription: "A comprehensive hotel and booking management web application featuring interactive room showcases, amenity filtering, reservation request forms, and mobile-optimized layouts.",
      tags: ["TypeScript", "Frontend UI", "Responsive Design", "CSS3", "HTML5"],
      category: "Frontend",
      featured: false,
      githubUrl: "https://github.com/Nukultalwar/hotel-website", // Actual repository URL on GitHub profile
      liveUrl: undefined,
      isPrivateOrInProgress: false,
      statusText: "Actual Repository",
      keyFeatures: [
        "High-fidelity room suites presentation with photo galleries",
        "Interactive amenity filtering and rate comparison",
        "Booking reservation request form with validation",
        "Fully responsive layout crafted for mobile guests"
      ],
      techStack: ["TypeScript", "HTML5", "CSS3", "Git"],
      architectureNotes: "Typed component structures ensuring type-safe room state and reservation workflows.",
      accentColor: "#eab308"
    },
    {
      id: "quick-quiz",
      title: "Quick Quiz",
      subtitle: "Interactive Knowledge Testing & Gamified Quiz UI",
      description: "A fast-paced interactive quiz application featuring dynamic scoring, countdown timers, randomized questions, and instant visual feedback.",
      longDescription: "Created to make learning engaging and interactive. Users progress through multiple-choice questions with real-time score calculation, immediate answer explanations, progress indicators, and an end-of-round performance summary card.",
      tags: ["JavaScript", "State Management", "Gamification", "CSS3 Animations"],
      category: "Interactive",
      featured: false,
      githubUrl: "https://github.com/Nukultalwar/quick-quiz", // Editable repository URL: configurable
      liveUrl: undefined,
      isPrivateOrInProgress: false,
      statusText: "Configurable Repository",
      keyFeatures: [
        "Interactive question progression with dynamic feedback animations",
        "Integrated timer countdown challenging user response time",
        "Detailed scorecard at completion displaying accuracy and summary",
        "Clean, distraction-free glassmorphic user interface"
      ],
      techStack: ["JavaScript ES6+", "CSS3 Animations", "HTML5"],
      architectureNotes: "State machine architecture managing quiz progression (Intro → Question Flow → Review → Results).",
      accentColor: "#a855f7"
    }
  ] as Project[],

  howIBuild: [
    {
      number: "01",
      title: "Understand",
      subtitle: "Discovery & Analysis",
      description: "Thoroughly dissecting user requirements, product objectives, edge cases, and user flow journeys before writing a single line of code.",
      deliverables: ["User journey mapping", "Feature requirements checklist", "Technical scope definition"],
      iconName: "Compass"
    },
    {
      number: "02",
      title: "Design",
      subtitle: "Architecture & Wireframing",
      description: "Structuring component hierarchies, design tokens, color harmonies, responsive layout blueprints, and state flow models.",
      deliverables: ["Component breakdown", "Design system tokens", "Responsive layout wireframes"],
      iconName: "PenTool"
    },
    {
      number: "03",
      title: "Build",
      subtitle: "Clean Code Implementation",
      description: "Developing modular, semantic, and reusable components using modern React and clean JavaScript, keeping code clean and readable.",
      deliverables: ["Semantic HTML5 & CSS3", "Reusable React components", "Clean ES6+ logic"],
      iconName: "Code"
    },
    {
      number: "04",
      title: "Integrate",
      subtitle: "APIs & State Management",
      description: "Connecting RESTful APIs, orchestrating state across views, managing data caching, loading indicators, and graceful error states.",
      deliverables: ["Asynchronous API hooks", "Error boundaries", "Optimistic state updates"],
      iconName: "Layers"
    },
    {
      number: "05",
      title: "Test",
      subtitle: "Validation & Cross-Platform",
      description: "Rigorous verification across desktop, tablet, and mobile screens, cross-browser compatibility checks, and accessibility audits.",
      deliverables: ["Multi-device responsiveness", "Cross-browser testing", "Accessibility (a11y) checks"],
      iconName: "CheckCircle2"
    },
    {
      number: "06",
      title: "Deploy",
      subtitle: "Performance & Delivery",
      description: "Automated production builds, asset compression, SEO optimization, and smooth deployment to hosting platforms like Vercel or Netlify.",
      deliverables: ["Production build optimization", "Lighthouse audit compliance", "Live deployment & monitoring"],
      iconName: "Rocket"
    }
  ] as WorkflowStep[],

  whyWorkWithMe: [
    {
      title: "Practical, Working Projects",
      subtitle: "Real Implementations",
      description: "I focus on building functional, end-to-end applications rather than just passive tutorials. Every project reflects hands-on problem solving, state management, and real UI challenges.",
      bullets: [
        "Hands-on experience with audio players, streaming UIs, and dashboards",
        "Practical understanding of real user interactions and flows",
        "Emphasis on clean project structure and verifiable code"
      ],
      iconName: "FolderGit2"
    },
    {
      title: "Strong Frontend Foundation",
      subtitle: "HTML5, CSS3, JavaScript & React",
      description: "I prioritize strong fundamentals. Understanding the core DOM, CSS layouts, and modern JavaScript standards allows me to build robust applications with or without heavy abstractions.",
      bullets: [
        "Deep comfort with Flexbox, CSS Grid, and responsive principles",
        "Strong understanding of ES6+, asynchronous JavaScript, and the DOM",
        "Proficiency with React component lifecycles and modern Hooks"
      ],
      iconName: "Layers"
    },
    {
      title: "Problem Solving & User-Centric Mindset",
      subtitle: "Clear Logic & Intuitive UX",
      description: "I approach every feature from both the engineering and user perspectives. I strive for clean algorithmic thinking, easy error recovery, and accessible user flows.",
      bullets: [
        "Clear debugging methodology and structured code decomposition",
        "High empathy for user experience, contrast, and navigation ease",
        "Attention to detail in micro-interactions and visual hierarchy"
      ],
      iconName: "Lightbulb"
    },
    {
      title: "Continuous Learning & Agility",
      subtitle: "Curious, Adaptable & Driven",
      description: "The web ecosystem evolves rapidly, and so do I. I consistently explore new web capabilities, modern tools, and architectural patterns to keep sharpening my engineering toolkit.",
      bullets: [
        "Fast learner capable of adopting team workflows quickly",
        "Passionate about exploring modern 3D web technologies like Three.js",
        "Committed to receiving constructive feedback and growing daily"
      ],
      iconName: "Sparkles"
    }
  ] as ValuePillar[],

  resumeHighlights: [
    { label: "Target Roles", value: "Software Engineer / Frontend Developer / React Developer" },
    { label: "Core Stack", value: "React.js, JavaScript (ES6+), HTML5, CSS3, REST APIs, Git" },
    { label: "Education & Background", value: "Computer Science & Engineering Foundation" },
    { label: "Work Preference", value: "Full-Time, Contract, Remote or Onsite opportunities" }
  ]
};
