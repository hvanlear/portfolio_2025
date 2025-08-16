// Main portfolio items for grid displays
export const portfolioItems = [
  {
    id: "bpmn-modeler",
    href: "/portfolio-single/bpmn-modeler",
    imgSrc: "/assets/images/portfolio/bpmn-modeler-thumb.jpg",
    imgAlt: "BPMN Modeler Interface",
    title: "BPMN Modeler",
    descr: "UI Design, Product Design",
  },
  {
    id: "bank-account-opening",
    href: "/portfolio-single/bank-account-opening",
    imgSrc: "/assets/images/portfolio/bank-account-thumb.jpg",
    imgAlt: "Bank Account Opening Interface",
    title: "Consumer Bank Account Opening",
    descr: "HTML/CSS, UX Engineering",
  },
  {
    id: "processmaker-design-system",
    href: "/portfolio-single/processmaker-design-system",
    imgSrc: "/assets/images/portfolio/design-system-thumb.jpg",
    imgAlt: "Design System Components",
    title: "ProcessMaker Design System",
    descr: "Design Systems",
  },
  {
    id: "stephen-king-api",
    href: "/portfolio-single/stephen-king-api",
    imgSrc: "/assets/images/portfolio/api-thumb.png",
    imgAlt: "API Architecture Diagram",
    title: "Stephen King REST API",
    descr: "Python, Node.js, PostgreSQL",
  },
];

// Main portfolio display (used by home page and portfolio page)
export const portfolios8 = [
  {
    id: "bpmn-modeler",
    imageSrc: "/assets/images/portfolio/bpmn-modeler-thumb.jpg",
    title: "BPMN Modeler",
    categories: "UI Design, Product Design",
    align: "text-center",
  },
  {
    id: "bank-account-opening",
    imageSrc: "/assets/images/portfolio/bank-account-thumb.jpg",
    title: "Consumer Bank Account Opening",
    categories: "HTML/CSS, UX Engineering",
    align: "text-end",
  },
  {
    id: "processmaker-design-system",
    imageSrc: "/assets/images/portfolio/design-system-thumb.jpg",
    title: "ProcessMaker Design System",
    categories: "Design Systems",
    align: "text-start",
  },
  {
    id: "stephen-king-api",
    imageSrc: "/assets/images/portfolio/api-thumb.png",
    title: "Stephen King REST API",
    categories: "Python, Node.js, PostgreSQL",
    align: "text-end",
  },
];

// Detailed portfolio projects for individual project pages
export const detailedProjects = [
  {
    id: "bpmn-modeler",
    title: "BPMN Modeler",
    subtitle: "Redesigned and optimized a web-based canvas tool for intuitive process modeling and creation, enhancing user experience and productivity.",
    role: "UI/Product Designer",
    categories: ["UI Design", "Product Design"],
    technologies: ["Figma"],
    duration: "2023",
    client: "ProcessMaker",
    heroImage: "/assets/images/portfolio/bpmn-modeler-hero.jpg",
    thumbnailImage: "/assets/images/portfolio/bpmn-modeler-thumb.jpg",
    figmaUrl: "https://www.figma.com/proto/YOUR_FILE_ID/BPMN-Modeler?node-id=1:2&viewport=0,0,1&scaling=min-zoom",
    images: [
      "/assets/images/portfolio/bpmn-modeler-main.png",
      "/assets/images/portfolio/bpmn-modeler-before.png",
      "/assets/images/portfolio/bpmn-modeler-after.png",
      "/assets/images/portfolio/bpmn-menu-control.png",
      "/assets/images/portfolio/bpmn-menu-explorer.png",
      "/assets/images/portfolio/bpmn-menu-crown.png"
    ],
    challenge: "Users struggled with a cumbersome interface, limited maneuverability, and poor screen utilization. The existing tool had usability hurdles that hindered user productivity and created friction in the process modeling workflow, making complex diagram creation unnecessarily difficult.",
    solution: "Transformed the user experience by implementing a modern drag-and-drop primary menu, comprehensive item repository with search functionality, smart alignment features, and contextual tool display. Added customizable pinning feature and expandable architecture for future connectors.",
    features: [
      "Modern drag-and-drop primary menu",
      "Comprehensive item repository with search functionality", 
      "Smart alignment features",
      "Contextual tool display",
      "Customizable pinning feature",
      "Expandable architecture for future connectors"
    ],
    outcomes: [
      "Users can now create complex diagrams more efficiently",
      "Larger canvas space with better screen utilization",
      "Simplified menu navigation with easier access to advanced features",
      "Improved user workflow efficiency and reduced learning curve", 
      "Enhanced productivity for process modeling workflows"
    ],
    description: "I redesigned a web-based BPMN modeling tool to address significant usability challenges. The project focused on transforming a cumbersome interface into an intuitive, efficient workspace that supports complex process modeling. Through careful analysis of user workflows and technical constraints, I developed solutions that dramatically improved the user experience while maintaining the tool's robust functionality.",
    nextProject: "bank-account-opening",
    prevProject: null
  },
  {
    id: "bank-account-opening",
    title: "Consumer Bank Account Opening",
    subtitle: "Streamlined digital banking experience with focus on user-friendly account creation and onboarding.",
    role: "UX Engineer",
    categories: ["HTML/CSS", "UX Engineering"],
    technologies: ["HTML", "CSS", "JavaScript"],
    duration: "2023",
    client: null,
    heroImage: "/assets/images/portfolio/bank-account-hero.jpg",
    thumbnailImage: "/assets/images/portfolio/bank-account-thumb.jpg",
    images: [
      "/assets/images/portfolio/bank-account-flow.jpg",
      "/assets/images/portfolio/bank-account-forms.jpg",
      "/assets/images/portfolio/bank-account-mobile.jpg"
    ],
    challenge: "Banking applications often have complex, intimidating onboarding processes that deter potential customers and create friction during account creation.",
    solution: "Designed and developed a streamlined, user-friendly account opening experience with clear progress indicators, simplified forms, and responsive design for all devices.",
    features: [
      "Progressive disclosure of information",
      "Clear progress indicators",
      "Mobile-responsive design",
      "Accessible form design",
      "Real-time validation feedback"
    ],
    outcomes: [
      "Improved conversion rates",
      "Reduced form abandonment",
      "Enhanced user satisfaction",
      "Cross-device compatibility"
    ],
    description: "Created a comprehensive digital banking onboarding experience focused on reducing friction and improving user confidence during account creation. The project involved both UX design and front-end development to ensure seamless implementation.",
    nextProject: "processmaker-design-system",
    prevProject: "bpmn-modeler"
  },
  {
    id: "processmaker-design-system",
    title: "ProcessMaker Design System",
    subtitle: "Comprehensive design system to ensure consistency and efficiency across ProcessMaker's product ecosystem.",
    role: "Design Systems Designer",
    categories: ["Design Systems"],
    technologies: ["Figma", "Storybook", "CSS"],
    duration: "2023",
    client: "ProcessMaker",
    heroImage: "/assets/images/portfolio/design-system-hero.jpg",
    thumbnailImage: "/assets/images/portfolio/design-system-thumb.jpg",
    images: [
      "/assets/images/portfolio/design-system-components.jpg",
      "/assets/images/portfolio/design-system-tokens.jpg",
      "/assets/images/portfolio/design-system-docs.jpg"
    ],
    challenge: "ProcessMaker needed a unified design language to ensure consistency across multiple products and streamline the design-to-development workflow.",
    solution: "Built a comprehensive design system with reusable components, design tokens, and clear documentation to enable scalable, consistent product development.",
    features: [
      "Reusable component library",
      "Design token system",
      "Comprehensive documentation",
      "Developer-friendly implementation",
      "Accessibility guidelines"
    ],
    outcomes: [
      "Faster design-to-development cycles",
      "Improved product consistency",
      "Reduced design debt",
      "Enhanced team collaboration"
    ],
    description: "Developed a scalable design system that serves as the foundation for ProcessMaker's product ecosystem. The system includes component libraries, design tokens, and implementation guidelines that ensure consistency while enabling rapid product development.",
    nextProject: "stephen-king-api",
    prevProject: "bank-account-opening"
  },
  {
    id: "stephen-king-api",
    title: "Stephen King REST API",
    subtitle: "Full-stack API development for Stephen King literary content with robust backend architecture.",
    role: "Full-Stack Developer",
    categories: ["Python", "Node.js", "PostgreSQL"],
    technologies: ["Python", "Node.js", "PostgreSQL", "REST API"],
    duration: "2023",
    client: null,
    heroImage: "/assets/images/portfolio/api-hero.png",
    thumbnailImage: "/assets/images/portfolio/api-thumb.png",
    images: [
      "/assets/images/portfolio/api-architecture.jpg",
      "/assets/images/portfolio/api-endpoints.jpg",
      "/assets/images/portfolio/api-database.jpg"
    ],
    challenge: "Create a comprehensive, well-documented API for Stephen King's literary works with efficient data retrieval and robust backend architecture.",
    solution: "Built a full-stack REST API using Python and Node.js with PostgreSQL database, featuring comprehensive endpoints for books, characters, and literary analysis.",
    features: [
      "RESTful API design",
      "PostgreSQL database optimization",
      "Comprehensive documentation",
      "Error handling and validation",
      "Scalable architecture"
    ],
    outcomes: [
      "High-performance data retrieval",
      "Well-documented API endpoints",
      "Scalable backend architecture",
      "Robust error handling"
    ],
    description: "Developed a full-stack REST API for Stephen King's literary content, demonstrating proficiency in backend development, database design, and API architecture. The project showcases technical skills in Python, Node.js, and PostgreSQL.",
    nextProject: null,
    prevProject: "processmaker-design-system"
  }
];

// Clean export with only Hunter's real projects
export const allPortfolios = [
  ...portfolioItems,
  ...portfolios8,
  ...detailedProjects,
];

// Mock data for demo components that expect portfolios12
export const portfolios12 = [
  {
    id: 1,
    imageSrc: "/assets/images/portfolio/bpmn-modeler-thumb.jpg",
    imgSrc: "/assets/images/portfolio/bpmn-modeler-thumb.jpg",
    imgAlt: "Demo Project 1",
    title: "Demo Project 1",
    categories: "Branding",
    className: "work-item branding",
    linkClassName: "work-ext-link",
    description: "Demo",
    delay: "0s",
    width: 400,
    height: 400,
  },
  {
    id: 2,
    imageSrc: "/assets/images/portfolio/bank-account-thumb.jpg",
    imgSrc: "/assets/images/portfolio/bank-account-thumb.jpg",
    imgAlt: "Demo Project 2",
    title: "Demo Project 2",
    categories: "Design",
    className: "work-item design",
    linkClassName: "work-ext-link",
    description: "Demo",
    delay: "0.1s",
    width: 400,
    height: 600,
  },
  {
    id: 3,
    imageSrc: "/assets/images/portfolio/design-system-thumb.jpg",
    imgSrc: "/assets/images/portfolio/design-system-thumb.jpg",
    imgAlt: "Demo Project 3",
    title: "Demo Project 3",
    categories: "Photography",
    className: "work-item photography",
    linkClassName: "work-ext-link",
    description: "Demo",
    delay: "0.2s",
    width: 400,
    height: 300,
  },
  {
    id: 4,
    imageSrc: "/assets/images/portfolio/api-thumb.png",
    imgSrc: "/assets/images/portfolio/api-thumb.png",
    imgAlt: "Demo Project 4",
    title: "Demo Project 4",
    categories: "Development",
    className: "work-item development",
    linkClassName: "work-ext-link",
    description: "Demo",
    delay: "0.3s",
    width: 400,
    height: 400,
  },
  {
    id: 5,
    imageSrc: "/assets/images/portfolio/bpmn-modeler-thumb.jpg",
    imgSrc: "/assets/images/portfolio/bpmn-modeler-thumb.jpg",
    imgAlt: "Demo Project 5",
    title: "Demo Project 5",
    categories: "Branding",
    className: "work-item branding",
    linkClassName: "work-ext-link",
    description: "Demo",
    delay: "0.4s",
    width: 400,
    height: 500,
  },
  {
    id: 6,
    imageSrc: "/assets/images/portfolio/bank-account-thumb.jpg",
    imgSrc: "/assets/images/portfolio/bank-account-thumb.jpg",
    imgAlt: "Demo Project 6",
    title: "Demo Project 6",
    categories: "Design",
    className: "work-item design",
    linkClassName: "work-ext-link",
    description: "Demo",
    delay: "0.5s",
    width: 400,
    height: 350,
  },
];

// Mock data for demo components that expect portfolios13
export const portfolios13 = [
  {
    id: 1,
    imageSrc: "/assets/images/portfolio/bpmn-modeler-thumb.jpg",
    title: "Portfolio Demo A",
    categories: "Web Design",
    width: 300,
    height: 400,
  },
  {
    id: 2,
    imageSrc: "/assets/images/portfolio/bank-account-thumb.jpg",
    title: "Portfolio Demo B", 
    categories: "Branding",
    width: 300,
    height: 300,
  },
  {
    id: 3,
    imageSrc: "/assets/images/portfolio/design-system-thumb.jpg",
    title: "Portfolio Demo C",
    categories: "Photography",
    width: 300,
    height: 500,
  },
  {
    id: 4,
    imageSrc: "/assets/images/portfolio/api-thumb.png",
    title: "Portfolio Demo D",
    categories: "Development",
    width: 300,
    height: 350,
  },
  {
    id: 5,
    imageSrc: "/assets/images/portfolio/bpmn-modeler-thumb.jpg",
    title: "Portfolio Demo E",
    categories: "Design",
    width: 300,
    height: 400,
  },
  {
    id: 6,
    imageSrc: "/assets/images/portfolio/bank-account-thumb.jpg",
    title: "Portfolio Demo F",
    categories: "Web Design",
    width: 300,
    height: 300,
  },
];

// Mock data for demo components that expect portfolios2
export const portfolios2 = [
  {
    id: 1,
    imageSrc: "/assets/images/portfolio/bpmn-modeler-thumb.jpg",
    title: "Sample Work 1",
    categories: "UI Design",
  },
  {
    id: 2,
    imageSrc: "/assets/images/portfolio/bank-account-thumb.jpg",
    title: "Sample Work 2",
    categories: "Development",
  },
  {
    id: 3,
    imageSrc: "/assets/images/portfolio/design-system-thumb.jpg",
    title: "Sample Work 3",
    categories: "Branding",
  },
];

// Mock data for demo components that expect portfolios9
export const portfolios9 = [
  {
    id: 1,
    imageSrc: "/assets/images/portfolio/bpmn-modeler-thumb.jpg",
    title: "Creative Project 1",
    categories: "Photography",
    width: 350,
    height: 280,
  },
  {
    id: 2,
    imageSrc: "/assets/images/portfolio/bank-account-thumb.jpg",
    title: "Creative Project 2",
    categories: "Design",
    width: 350,
    height: 420,
  },
  {
    id: 3,
    imageSrc: "/assets/images/portfolio/design-system-thumb.jpg",
    title: "Creative Project 3",
    categories: "Branding",
    width: 350,
    height: 300,
  },
  {
    id: 4,
    imageSrc: "/assets/images/portfolio/api-thumb.png",
    title: "Creative Project 4",
    categories: "Web Design",
    width: 350,
    height: 380,
  },
];