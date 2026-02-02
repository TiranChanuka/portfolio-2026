export const projectCategories = ["All", "Frontend", "WordPress", "UI Design"];

export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  liveUrl?: string;
  gallery: string[];
  story: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Nature Core E-commerce Website",
    slug: "nature-core",
    description:
      "A modern e-commerce platform with product filtering, cart functionality, and payment processing.",
    image: "/Projects/natureThank.png",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    category: "Frontend",
    liveUrl: "https://naturecore.lk/",
    gallery: ["/Projects/natureThank.png"],
    story: "Nature Core is a comprehensive e-commerce solution designed to provide a seamless shopping experience. The project involved building a robust frontend using React and TypeScript, ensuring type safety and scalability. Tailwind CSS was utilized for rapid UI development, resulting in a responsive and visually appealing interface. Key features include dynamic product filtering, a fully functional shopping cart, and secure checkout processes."
  },
  {
    id: 2,
    title: "Hari Capital",
    slug: "hari-capital",
    description:
      "Loan management system with user authentication, loan tracking, and payment history.",
    image: "/Projects/hariCapital.png",
    technologies: ["React", "Tailwind CSS", "TypeScript", "Ant Design"],
    category: "Frontend",
    gallery: ["/Projects/hariCapital.png"],
    story: "Hari Capital's loan management system streamlines the lending process. It features secure user authentication, real-time loan tracking, and detailed payment history logs. The application was built with React and TypeScript for reliability, while Ant Design components provided a professional and consistent look and feel."
  },
  {
    id: 3,
    title: "Kauma's Boat Kitchen",
    slug: "kaumas-boat-kitchen",
    description:
      "wordpress website for a local restaurant, featuring menu management and online reservations.",
    image: "/Projects/boatKitchen.png",
    technologies: ["WordPress", "PHP", "MySQL", "Elementor"],
    category: "WordPress",
    liveUrl: "https://kawumasboatkitchen.com/",
    gallery: ["/Projects/boatKitchen.png"],
    story: "This project digitalized the presence of Kauma's Boat Kitchen, a popular local restaurant. Built on WordPress, the site allows staff to easily manage the menu and facilitates online table reservations for customers. Elementor was used to create a custom, appetizing design that reflects the restaurant's unique ambiance."
  },
  {
    id: 4,
    title: "KNC Gaming",
    slug: "knc-gaming",
    description:
      "A WordPress site for a gaming community, showcasing game reviews and community events.",
    image: "/Projects/KncGaming.png",
    technologies: ["WordPress", "PHP", "CSS", "Elementor"],
    category: "WordPress",
    liveUrl: "https://kncgaming.gg/",
    gallery: ["/Projects/KncGaming.png"],
    story: "KNC Gaming's website serves as a hub for gaming enthusiasts. It features comprehensive game reviews, community event schedules, and forums. The site leverages WordPress for content management, customized with CSS and Elementor to appeal to the gaming demographic with a dynamic and edgy aesthetic."
  },
  {
    id: 5,
    title: "Little Rose Inn",
    slug: "little-rose-inn",
    description:
      "Hotel booking website with room management, booking system, and customer reviews.",
    image: "/Projects/littleRose.png",
    technologies: ["WordPress", "PHP", "CSS", "JavaScript", "Elementor"],
    category: "WordPress",
    liveUrl: "https://littleroseinn.com/",
    gallery: ["/Projects/littleRose.png"],
    story: "Little Rose Inn's website provides a complete booking solution for guests. It includes an intuitive room availability calendar, a secure booking engine, and a section for customer testimonials. The site helps streamline hotel operations and enhances the guest booking experience."
  },
  {
    id: 6,
    title: "Silver Sparkles",
    slug: "silver-sparkles",
    description:
      "Ecommerce website for a jewelry store, featuring product listings, shopping cart, and checkout.",
    image: "/Projects/SilverSparkles.png",
    technologies: ["React js", "Tailwind", "JavaScript", "CSS"],
    category: "Frontend",
    gallery: ["/Projects/SilverSparkles.png"],
    story: "Silver Sparkles is an online jewelry store built for elegance and ease of use. The frontend, powered by React and Tailwind, showcases intricate product details through high-quality image galleries. The shopping experience is smooth, from browsing collections to the final checkout step."
  },
  {
    id: 7,
    title: "Udawalawe Jungle Jeep Safari",
    slug: "udawalawe-jungle-jeep-safari",
    description:
      "A WordPress site for a safari tour company, offering booking and tour information.",
    image: "/Projects/udawalawe.png",
    technologies: ["WordPress", "PHP", "CSS", "JavaScript", "Elementor"],
    category: "WordPress",
    gallery: ["/Projects/udawalawe.png"],
    story: "This website connects adventure seekers with Udawalawe's premier safari tours. It offers detailed tour itineraries, pricing information, and an easy-to-use booking inquiry form. The design focuses on showcasing the wildlife and natural beauty of the park."
  },
  {
    id: 8,
    title: "Mandara Tours Taxi Service",
    slug: "mandara-tours-taxi-service",
    description:
      "A WordPress site for a taxi service, featuring booking forms and service details.",
    image: "/Projects/MandaraTours.png",
    technologies: ["WordPress", "PHP", "CSS", "JavaScript", "Elementor"],
    category: "WordPress",
    liveUrl: "https://mandaratourstaxi.com/",
    gallery: ["/Projects/MandaraTours.png"],
    story: "Mandara Tours provides a reliable taxi service platform. The website features fare estimation tools, vehicle options, and instant booking forms. It is optimized for mobile users who need to book transportation on the go."
  },
  {
    id: 9,
    title: "E-Wallet UI Design",
    slug: "e-wallet-ui-design",
    description:
      "A sleek and modern UI design for an e-wallet application, focusing on user experience and intuitive navigation.",
    image: "/Projects/ewallet.png",
    technologies: ["Figma", "Photoshop", "Illustrator"],
    category: "UI Design",
    liveUrl:
      "https://www.figma.com/community/file/1356338825922305335/e-wallet",
    gallery: ["/Projects/ewallet.png"],
    story: "This design project focused on creating a frictionless digital wallet experience. The UI emphasizes clarity, security, and speed. Key screens designed include the dashboard, transaction history, and money transfer flows, all adhering to modern design principles with a vibrant color palette."
  },
  {
    id: 10,
    title: "Car Blog UI Design",
    slug: "car-blog-ui-design",
    description:
      "A clean and responsive UI design for a car blog, showcasing articles, reviews, and user comments.",
    image: "/Projects/Car.png",
    technologies: ["Figma", "Photoshop", "Illustrator"],
    category: "UI Design",
    liveUrl:
      "https://www.figma.com/community/file/1352279668921102753/car-blog",
    gallery: ["/Projects/Car.png"],
    story: "The Car Blog UI is designed for automotive enthusiasts. It features a clean, grid-based layout for articles, high-impact imagery, and an engaging comment section. The typography and spacing are optimized for readability across devices."
  },
  {
    id: 11,
    title: "Mobile Sign in & Sign up UI Design",
    slug: "mobile-sign-in-sign-up-ui-design",
    description:
      "A modern and user-friendly mobile UI design for sign-in and sign-up screens, ensuring a smooth user experience.",
    image: "/Projects/login.png",
    technologies: ["Figma", "Photoshop", "Illustrator"],
    category: "UI Design",
    liveUrl:
      "https://www.figma.com/community/file/1299066779432095307/mobile-sign-in-sign-up-design",
    gallery: ["/Projects/login.png"],
    story: "This UI kit focuses on the critical first impression: the authentication flow. It includes designs for login, registration, password recovery, and social auth, all crafted to minimize user friction and maximize conversion rates with a friendly and trustworthy aesthetic."
  },
  {
    id: 12,
    title: "Food Delivery app Splash Screen UI Design",
    slug: "food-delivery-app-splash-screen",
    description:
      "A vibrant and engaging splash screen design for a food delivery app, designed to capture user attention.",
    image: "/Projects/QuickBite.png",
    technologies: ["Figma", "Photoshop", "Illustrator"],
    category: "UI Design",
    liveUrl:
      "https://www.figma.com/community/file/1304847508707276735/food-delivery-app-splash-screen",
    gallery: ["/Projects/QuickBite.png"],
    story: "These splash screens are designed to make users hungry! Using appetizing imagery and bold branding, the design sets the tone for a quick and satisfying food delivery experience. The animations and transitions were conceptually planned to feel snappy and responsive."
  },
  {
    id: 13,
    title: "Education Mobile App UI Design (EduLearn)",
    slug: "edulearn-mobile-app",
    description:
      "A comprehensive UI design for an education mobile app, featuring course listings, user profiles, and interactive learning modules.",
    image: "/Projects/EduLearn.png",
    technologies: ["Figma", "Photoshop", "Illustrator"],
    category: "UI Design",
    liveUrl:
      "https://www.figma.com/community/file/1304508164253558153/education-mobile-app-edulearn",
    gallery: ["/Projects/EduLearn.png"],
    story: "EduLearn's UI is centered around the student experience. The design organizes complex course material into digestible modules. Navigation is intuitive, and the progress tracking features use encouraging visuals to keep learners motivated."
  },
  {
    id: 14,
    title: "EcoGuide UI Design",
    slug: "ecoguide-ui-design",
    description:
      "A user-friendly UI design for an environmental protection mobile app, focusing on sustainability tips and eco-friendly practices.",
    image: "/Projects/EcoGuide.png",
    technologies: ["Figma", "Photoshop", "Illustrator"],
    category: "UI Design",
    liveUrl:
      "https://www.figma.com/community/file/1302581806533869902/environment-protect-mobile-app",
    gallery: ["/Projects/EcoGuide.png"],
    story: "EcoGuide allows users to track their environmental impact. The UI uses earth tones and organic shapes to reinforce the sustainability theme. Features like carbon footprint calculators and daily eco-tips are presented in a clear, non-intimidating way to encourage positive behavior change."
  },
  {
    id: 15,
    title: "Bloom Hub Mobile App UI Design",
    slug: "bloom-hub-mobile-app",
    description:
      "A beautiful and intuitive UI design for a flower store application, featuring product browsing, cart management, and checkout.",
    image: "/Projects/bloomhub.png",
    technologies: ["Figma", "Photoshop", "Illustrator"],
    category: "UI Design",
    liveUrl:
      "https://www.figma.com/community/file/1278052209735568526/flower-store-application-bloomhub",
    gallery: ["/Projects/bloomhub.png"],
    story: "Bloom Hub's design is all about beauty and simplicity. The interface lets the flowers be the star, with a minimalist layout that doesn't distract from the colorful product images. The purchasing flow is streamlined to ensure that sending a gift is a joyful experience."
  }
];
