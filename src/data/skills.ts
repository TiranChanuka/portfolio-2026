export type Skill = {
    id: string;
    name: string;
    level: number;
    description?: string;
    yearsExperience?: number;
    icon?: string; // Path to local icon in public/icons
};

export const skillsData = {
    "Frontend Development": [
        {
            id: "1",
            name: "HTML5",
            level: 95,
            description: "Expertise in semantic markup, SEO best practices, and ARIA for accessible web structures.",
            yearsExperience: 7,
            icon: "/icons/HTML.png",
        },
        {
            id: "2",
            name: "CSS3",
            level: 92,
            description: "Advanced styling with Flexbox, Grid, and complex CSS animations for responsive interfaces.",
            yearsExperience: 7,
            icon: "/icons/CSS.png",
        },
        {
            id: "3",
            name: "JavaScript",
            level: 90,
            description: "Deep understanding of ES6+ features, DOM manipulation, and efficient logic implementation.",
            yearsExperience: 6,
            icon: "/icons/JS.png",
        },
        {
            id: "4",
            name: "React",
            level: 85,
            description: "Building scalable SPAs using functional components, hooks, and advanced state patterns.",
            yearsExperience: 5,
            icon: "/icons/React.png",
        },
        {
            id: "5",
            name: "Next.js",
            level: 80,
            description: "Optimizing Core Web Vitals with SSR, ISR, and high-performance server-side logic.",
            yearsExperience: 3,
            icon: "/icons/NextJs.png",
        },
        {
            id: "6",
            name: "TypeScript",
            level: 75,
            description: "Enhancing code reliability and maintainability through strict type-checking and interfaces.",
            yearsExperience: 3,
            icon: "/icons/TypeScript.png",
        },
        {
            id: "7",
            name: "Tailwind CSS",
            level: 90,
            description: "Rapidly prototyping and building customized, modern UIs with utility-first CSS.",
            yearsExperience: 3,
            icon: "/icons/Tailwind.png",
        },
        {
            id: "8",
            name: "Framer Motion",
            level: 70,
            description: "Implementing fluid production-ready animations and interactive gesture-based UI components.",
            yearsExperience: 2,
        },
        {
            id: "9",
            name: "Three.js",
            level: 60,
            description: "Integrating immersive 3D graphics and interactive creative visuals directly into the browser.",
            yearsExperience: 1,
        },
        {
            id: "22",
            name: "Redux",
            level: 75,
            description: "Managing predictable global state across complex, large-scale React applications.",
            yearsExperience: 3,
            icon: "/icons/Redux.png",
        },
        {
            id: "23",
            name: "API Integration",
            level: 70,
            description: "Seamlessly connecting frontends with RESTful services for dynamic data synchronization.",
            yearsExperience: 2,
        },
        {
            id: "33",
            name: "Bootstrap",
            level: 80,
            description: "Utilizing established component frameworks for fast and reliable responsive web design.",
            yearsExperience: 4,
            icon: "/icons/Boostrap.png",
        },
        {
            id: "34",
            name: "Chakra UI",
            level: 75,
            description: "Developing accessible, modular, and themeable React applications with speed and consistency.",
            yearsExperience: 2,
        },
        {
            id: "35",
            name: "MUI (Material-UI)",
            level: 80,
            description: "Implementing Google's Material Design principles for intuitive and robust React UIs.",
            yearsExperience: 3,
            icon: "/icons/MUI.png",
        },
        {
            id: "36",
            name: "Sass",
            level: 85,
            description: "Streamlining CSS workflows with nesting, variables, and mixins for better maintainability.",
            yearsExperience: 4,
            icon: "/icons/Sass.png",
        },
        {
            id: "37",
            name: "Ant Design",
            level: 70,
            description: "Crafting enterprise-level administrative dashboards and complex data-driven interfaces.",
            yearsExperience: 2,
            icon: "/icons/Ant Design.png",
        },
        {
            id: "40",
            name: "Vercel",
            level: 80,
            description: "Deploying and scaling frontend projects with optimized CI/CD and edge network performance.",
            yearsExperience: 2,
        },
        {
            id: "41",
            name: "Vite",
            level: 75,
            description: "Leveraging lightning-fast build tooling to accelerate modern web application development.",
            yearsExperience: 2,
            icon: "/icons/Vite.png",
        },
    ],
    "WordPress Development": [
        {
            id: "10",
            name: "WordPress",
            level: 95,
            description: "Full-cycle CMS management, from setup to advanced customization and site scaling.",
            yearsExperience: 2,
            icon: "/icons/Wordpress.png"
        },
        {
            id: "11",
            name: "PHP",
            level: 85,
            description: "Developing dynamic server-side logic and core WordPress functionality.",
            yearsExperience: 3
        },
        {
            id: "12",
            name: "WooCommerce",
            level: 85,
            description: "Building secure, scalable E-commerce platforms with custom product and checkout flows.",
            yearsExperience: 2
        },
        {
            id: "13",
            name: "Custom Themes",
            level: 90,
            description: "Developing lightweight, pixel-perfect themes from scratch tailored to brand requirements.",
            yearsExperience: 2
        },
        {
            id: "14",
            name: "Elementor",
            level: 80,
            description: "Crafting high-conversion layouts and landing pages with advanced drag-and-drop tools.",
            yearsExperience: 3,
            icon: "/icons/Elementor.png"
        },
        {
            id: "27",
            name: "Gutenberg Blocks",
            level: 75,
            description: "Building custom block components for a modern, editor-friendly content experience.",
            yearsExperience: 2
        },
        {
            id: "28",
            name: "Security",
            level: 80,
            description: "Hardening CMS platforms against vulnerabilities and ensuring data integrity.",
            yearsExperience: 2
        },
        {
            id: "29",
            name: "Performance",
            level: 70,
            description: "Optimizing database queries and asset loading for peak WordPress speed performance.",
            yearsExperience: 2
        },
        {
            id: "30",
            name: "REST API",
            level: 65,
            description: "Developing headless WordPress solutions and custom external data integrations.",
            yearsExperience: 2
        },
        {
            id: "31",
            name: "Plugins",
            level: 85,
            description: "Custom plugin development and auditing to extend WordPress core capabilities safely.",
            yearsExperience: 2
        },
        {
            id: "32",
            name: "SEO",
            level: 80,
            description: "Implementing technical SEO best practices for enhanced organic search visibility.",
            yearsExperience: 2
        },
    ],
    "Other Skills": [
        {
            id: "15",
            name: "Figma",
            level: 88,
            description: "Designing high-fidelity prototypes and collaborative UI design systems.",
            yearsExperience: 3,
            icon: "/icons/Figma.png"
        },
        {
            id: "16",
            name: "UI Design",
            level: 85,
            description: "Applying color theory and typography to create visually stunning user interfaces.",
            yearsExperience: 3
        },
        {
            id: "17",
            name: "UX Design",
            level: 80,
            description: "Conducting user research and wireframing to optimize user-centric digital journeys.",
            yearsExperience: 3
        },
        {
            id: "18",
            name: "Adobe XD",
            level: 75,
            description: "Creating interactive prototypes and detailed wireframes for rapid design iteration.",
            yearsExperience: 3
        },
        {
            id: "20",
            name: "Photoshop",
            level: 85,
            description: "Professional asset creation, image retouching, and web-ready graphics optimization.",
            yearsExperience: 4
        },
        {
            id: "24",
            name: "Performance",
            level: 75,
            description: "Auditing and improving overall system efficiency and user response metrics.",
            yearsExperience: 2
        },
        {
            id: "25",
            name: "SEO",
            level: 85,
            description: "Driving organic traffic through on-page strategy and technical web optimization.",
            yearsExperience: 3
        },
        {
            id: "26",
            name: "APIs",
            level: 80,
            description: "Architecting and managing scalable data communication between services.",
            yearsExperience: 2
        },
    ],
};