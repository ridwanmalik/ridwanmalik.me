export const PERSONAL_INFO = {
  name: "Sk. Ridwanul Malik",
  title: "I build things for the web",
  intro: "Hi, my name is",
  description:
    "I'm a software engineer specializing in building exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products with more than 5 years of experience in React (Next.js), Laravel (PHP), Node.js, and WordPress.",
  email: "skridwanulmalik@gmail.com",
}

export const TECH_STACK = ["JavaScript (ES6+)", "React", "Next.js", "Node.js", "PHP", "Laravel", "Vue.js", "MySQL"]

export const TECH_STACK_DETAILED = [
  {
    name: "JavaScript",
    level: 100,
    description:
      "Advanced proficiency in modern JavaScript (ES6+), including async/await, modules, and complex data structures.",
  },
  {
    name: "PHP",
    level: 100,
    description:
      "Expert-level PHP development with object-oriented programming, design patterns, and modern frameworks.",
  },
  {
    name: "React",
    level: 100,
    description: "Advanced React development including hooks, context, state management, and performance optimization.",
  },
  {
    name: "Next.js",
    level: 100,
    description: "Full-stack Next.js applications with SSR, SSG, API routes, and modern deployment strategies.",
  },
  {
    name: "React Native",
    level: 100,
    description: "Cross-platform mobile app development with native performance and platform-specific optimizations.",
  },
  {
    name: "Laravel",
    level: 100,
    description:
      "Enterprise-level Laravel applications with Eloquent ORM, API development, and complex business logic.",
  },
  {
    name: "Node.js",
    level: 100,
    description: "Server-side JavaScript with Express.js, real-time applications, and microservices architecture.",
  },
  {
    name: "MySQL",
    level: 100,
    description: "Advanced database design, optimization, complex queries, and performance tuning.",
  },
  {
    name: "WordPress",
    level: 100,
    description: "Custom theme development, plugin creation, and WooCommerce e-commerce solutions.",
  },
  {
    name: "WooCommerce",
    level: 100,
    description: "E-commerce development with custom integrations, payment gateways, and inventory management.",
  },
  {
    name: "Sass",
    level: 100,
    description: "Advanced CSS preprocessing with mixins, functions, and scalable stylesheet architecture.",
  },
  {
    name: "Vue.js",
    level: 80,
    description: "Component-based development with Vuex state management and Vue Router for SPA applications.",
  },
  {
    name: "Ionic",
    level: 80,
    description: "Hybrid mobile app development with web technologies and native device features integration.",
  },
  {
    name: "Firebase",
    level: 80,
    description: "Real-time databases, authentication, hosting, and cloud functions for modern web applications.",
  },
  {
    name: "Docker",
    level: 80,
    description: "Containerization, multi-stage builds, and deployment orchestration for scalable applications.",
  },
  {
    name: "DevOps",
    level: 80,
    description: "CI/CD pipelines, server management, monitoring, and infrastructure automation.",
  },
]

// Technology database for hover cards (comprehensive list)
export const TECHNOLOGIES = {
  JavaScript: {
    name: "JavaScript",
    category: "Programming Language",
    description:
      "A high-level, interpreted programming language that is one of the core technologies of the World Wide Web.",
    features: ["Dynamic typing", "Prototype-based OOP", "First-class functions", "Event-driven"],
    color: "bg-yellow-500",
    aliases: ["JS", "javascript", "js"],
  },
  PHP: {
    name: "PHP",
    category: "Programming Language",
    description:
      "A popular general-purpose scripting language especially suited for web development and server-side programming.",
    features: ["Cross-platform", "Open source", "Large ecosystem", "Easy deployment"],
    color: "bg-purple-600",
    aliases: ["php"],
  },
  React: {
    name: "React",
    category: "Frontend Framework",
    description:
      "A JavaScript library for building user interfaces, particularly web applications with complex, interactive UIs.",
    features: ["Component-based architecture", "Virtual DOM", "Hooks", "State management"],
    color: "bg-blue-400",
    aliases: ["react", "reactjs"],
  },
  "Next.js": {
    name: "Next.js",
    category: "Full-stack Framework",
    description:
      "A React framework for production that provides server-side rendering, static site generation, and full-stack capabilities.",
    features: ["SSR/SSG", "API Routes", "File-based routing", "Image optimization"],
    color: "bg-gray-800",
    aliases: ["nextjs", "next.js", "next"],
  },
  "React Native": {
    name: "React Native",
    category: "Mobile Framework",
    description: "A framework for building native mobile applications using React and JavaScript.",
    features: ["Cross-platform", "Native performance", "Hot reloading", "Code sharing"],
    color: "bg-blue-500",
    aliases: ["react-native", "reactnative", "rn"],
  },
  Laravel: {
    name: "Laravel",
    category: "Backend Framework",
    description:
      "A PHP web application framework with expressive, elegant syntax for rapid development of modern web applications.",
    features: ["Eloquent ORM", "Artisan CLI", "Blade templating", "Built-in testing"],
    color: "bg-red-500",
    aliases: ["laravel"],
  },
  "Node.js": {
    name: "Node.js",
    category: "Runtime Environment",
    description:
      "A JavaScript runtime built on Chrome's V8 engine that allows you to run JavaScript on the server side.",
    features: ["Event-driven", "Non-blocking I/O", "NPM ecosystem", "Cross-platform"],
    color: "bg-green-600",
    aliases: ["nodejs", "node.js", "node"],
  },
  MySQL: {
    name: "MySQL",
    category: "Database",
    description:
      "An open-source relational database management system known for its reliability, performance, and ease of use.",
    features: ["ACID compliance", "High performance", "Scalability", "Security features"],
    color: "bg-blue-600",
    aliases: ["mysql"],
  },
  WordPress: {
    name: "WordPress",
    category: "CMS",
    description: "A content management system and website creation platform used by millions of websites worldwide.",
    features: ["Plugin ecosystem", "Theme system", "SEO friendly", "User management"],
    color: "bg-blue-700",
    aliases: ["wordpress", "wp"],
  },
  WooCommerce: {
    name: "WooCommerce",
    category: "E-commerce",
    description: "A WordPress plugin that transforms WordPress sites into fully functional e-commerce stores.",
    features: ["Payment gateways", "Inventory management", "Order tracking", "Extensions"],
    color: "bg-purple-700",
    aliases: ["woocommerce", "woo"],
  },
  Sass: {
    name: "Sass",
    category: "CSS Preprocessor",
    description: "A CSS extension language that adds features like variables, nesting, and mixins to CSS.",
    features: ["Variables", "Nesting", "Mixins", "Functions"],
    color: "bg-pink-500",
    aliases: ["sass", "scss"],
  },
  "Vue.js": {
    name: "Vue.js",
    category: "Frontend Framework",
    description:
      "A progressive JavaScript framework for building user interfaces with an approachable, versatile, and performant design.",
    features: ["Template syntax", "Reactivity", "Component composition", "Vue CLI"],
    color: "bg-green-500",
    aliases: ["vue", "vuejs", "vue.js"],
  },
  Ionic: {
    name: "Ionic",
    category: "Mobile Framework",
    description: "A framework for building cross-platform mobile applications using web technologies.",
    features: ["Cross-platform", "Native UI components", "Capacitor plugins", "Angular/React/Vue support"],
    color: "bg-blue-500",
    aliases: ["ionic"],
  },
  Firebase: {
    name: "Firebase",
    category: "Backend Service",
    description:
      "Google's mobile and web application development platform with real-time database and authentication services.",
    features: ["Real-time database", "Authentication", "Cloud functions", "Hosting"],
    color: "bg-orange-500",
    aliases: ["firebase"],
  },
  Docker: {
    name: "Docker",
    category: "DevOps",
    description: "A platform for developing, shipping, and running applications using containerization technology.",
    features: ["Containerization", "Microservices", "CI/CD integration", "Cross-platform"],
    color: "bg-blue-600",
    aliases: ["docker"],
  },
  DevOps: {
    name: "DevOps",
    category: "Methodology",
    description:
      "A set of practices that combines software development and IT operations to shorten development lifecycle.",
    features: ["CI/CD", "Infrastructure as Code", "Monitoring", "Automation"],
    color: "bg-gray-600",
    aliases: ["devops"],
  },
  Git: {
    name: "Git",
    category: "Version Control",
    description:
      "A distributed version control system for tracking changes in source code during software development.",
    features: ["Distributed", "Branching", "Merging", "History tracking"],
    color: "bg-orange-600",
    aliases: ["git"],
  },
  GitHub: {
    name: "GitHub",
    category: "Development Platform",
    description: "A web-based platform for version control and collaboration using Git repositories.",
    features: ["Code hosting", "Pull requests", "Issues tracking", "CI/CD"],
    color: "bg-gray-900",
    aliases: ["github"],
  },
  "REST APIs": {
    name: "REST APIs",
    category: "Web Service",
    description: "Representational State Transfer - an architectural style for designing networked applications.",
    features: ["Stateless", "HTTP methods", "Resource-based", "JSON/XML"],
    color: "bg-green-700",
    aliases: ["rest", "rest-api", "restful"],
  },
  GraphQL: {
    name: "GraphQL",
    category: "Query Language",
    description: "A data query and manipulation language for APIs, and a runtime for fulfilling queries.",
    features: ["Type system", "Single endpoint", "Real-time subscriptions", "Introspection"],
    color: "bg-pink-600",
    aliases: ["graphql"],
  },
  WebSockets: {
    name: "WebSockets",
    category: "Communication Protocol",
    description: "A communication protocol providing full-duplex communication channels over a single TCP connection.",
    features: ["Real-time communication", "Bidirectional", "Low latency", "Event-driven"],
    color: "bg-indigo-600",
    aliases: ["websocket", "websockets"],
  },
  "Tailwind CSS": {
    name: "Tailwind CSS",
    category: "CSS Framework",
    description: "A utility-first CSS framework for rapidly building custom user interfaces.",
    features: ["Utility classes", "Responsive design", "Customizable", "JIT compiler"],
    color: "bg-cyan-500",
    aliases: ["tailwind", "tailwindcss"],
  },
  Bootstrap: {
    name: "Bootstrap",
    category: "CSS Framework",
    description: "A free and open-source CSS framework for responsive, mobile-first front-end web development.",
    features: ["Grid system", "Components", "Responsive utilities", "JavaScript plugins"],
    color: "bg-purple-500",
    aliases: ["bootstrap"],
  },
  JWT: {
    name: "JWT",
    category: "Authentication",
    description: "JSON Web Token - a compact, URL-safe means of representing claims between two parties.",
    features: ["Stateless", "Self-contained", "Secure", "Cross-platform"],
    color: "bg-red-600",
    aliases: ["jwt", "json-web-token"],
  },
  OAuth: {
    name: "OAuth",
    category: "Authorization",
    description: "An open standard for access delegation, commonly used for token-based authentication.",
    features: ["Third-party access", "Secure delegation", "Token-based", "Standardized"],
    color: "bg-blue-700",
    aliases: ["oauth"],
  },
  PWA: {
    name: "PWA",
    category: "Web Technology",
    description:
      "Progressive Web Apps - web applications that use modern web capabilities to deliver app-like experiences.",
    features: ["Offline support", "Push notifications", "App-like interface", "Installable"],
    color: "bg-green-600",
    aliases: ["pwa", "progressive-web-app"],
  },
  HTML: {
    name: "HTML",
    category: "Markup Language",
    description:
      "HyperText Markup Language for structuring and presenting content on the World Wide Web.",
    features: ["Semantic elements", "Accessibility", "Forms & validation", "Multimedia support"],
    color: "bg-orange-600",
    aliases: ["html", "html5", "hypertext-markup-language"],
  },
  CSS: {
    name: "CSS",
    category: "Styling Language",
    description:
      "Cascading Style Sheets for styling and layouting web pages with modern features and responsive design.",
    features: ["Responsive design", "Flexbox & Grid", "Animations", "Custom properties"],
    color: "bg-blue-600",
    aliases: ["css", "css3", "cascading-style-sheets"],
  },
  PostgreSQL: {
    name: "PostgreSQL",
    category: "Database",
    description: "A powerful, open-source object-relational database system with advanced features and SQL compliance.",
    features: ["ACID compliance", "JSON support", "Advanced indexing", "Extensible"],
    color: "bg-blue-700",
    aliases: ["postgres", "postgresql", "psql"],
  },
  Express: {
    name: "Express",
    category: "Backend Framework",
    description:
      "Fast, unopinionated, minimalist web framework for Node.js, perfect for building APIs and web applications.",
    features: ["Minimal setup", "Middleware support", "Routing", "Template engines"],
    color: "bg-gray-600",
    aliases: ["express", "express.js", "expressjs"],
  },
  MongoDB: {
    name: "MongoDB",
    category: "Database",
    description:
      "A document-based, distributed database built for modern application developers and for the cloud era.",
    features: ["Document storage", "Horizontal scaling", "Flexible schema", "Rich queries"],
    color: "bg-green-600",
    aliases: ["mongodb", "mongo"],
  },
  "Video Streaming": {
    name: "Video Streaming",
    category: "Media Technology",
    description:
      "Technology for delivering video content over the internet with adaptive bitrate and real-time streaming capabilities.",
    features: ["Adaptive bitrate", "Real-time delivery", "Multiple formats", "CDN integration"],
    color: "bg-red-600",
    aliases: ["video-streaming", "streaming", "video-stream"],
  },
  "Socket.io": {
    name: "Socket.io",
    category: "Real-time Communication",
    description: "A library that enables real-time bidirectional event-based communication between client and server.",
    features: ["Real-time messaging", "Auto-reconnection", "Room management", "Fallback support"],
    color: "bg-black",
    aliases: ["socket.io", "socketio", "socket-io"],
  },
  PayPal: {
    name: "PayPal",
    category: "Payment Gateway",
    description: "A global online payment system that allows users to send and receive payments securely over the internet.",
    features: ["Global payment processing", "Secure transactions", "Multiple currencies", "Developer APIs"],
    color: "bg-blue-600",
    aliases: ["paypal", "paypal-api"],
  },
  SSLCOMMERZ: {
    name: "SSLCOMMERZ",
    category: "Payment Gateway",
    description: "A comprehensive payment gateway solution for Bangladesh, supporting multiple payment methods and currencies.",
    features: ["Local payment methods", "Mobile banking", "Card payments", "Secure processing"],
    color: "bg-green-700",
    aliases: ["sslcommerz", "ssl-commerz", "sslcommerz-payment"],
  },
  "SMS APIs": {
    name: "SMS APIs",
    category: "Communication API",
    description: "Application programming interfaces for sending and receiving SMS messages programmatically.",
    features: ["Bulk messaging", "Delivery reports", "Two-way messaging", "Global coverage"],
    color: "bg-orange-600",
    aliases: ["sms-api", "sms", "text-messaging"],
  },
}

// Skills displayed in the Technical Skills section (with proficiency levels)
export const TECHNICAL_SKILLS = [
  { name: "JavaScript", level: 100 },
  { name: "PHP", level: 100 },
  { name: "React", level: 100 },
  { name: "Next.js", level: 100 },
  { name: "React Native", level: 100 },
  { name: "Laravel", level: 100 },
  { name: "Node.js", level: 100 },
  { name: "MySQL", level: 100 },
  { name: "WordPress", level: 100 },
  { name: "WooCommerce", level: 100 },
  { name: "Sass", level: 100 },
  { name: "Vue.js", level: 80 },
  { name: "Ionic", level: 80 },
  { name: "Firebase", level: 80 },
  { name: "Docker", level: 80 },
  { name: "DevOps", level: 80 },
]

// Legacy exports for backward compatibility
export const TECH_DETAILS = Object.fromEntries(
  Object.entries(TECHNOLOGIES).map(([key, tech]) => [
    key,
    {
      description: tech.description,
      features: tech.features,
    },
  ])
)

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/ridwanmalik",
    icon: "github",
    description: "Check out my repositories and open source contributions",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/skridwanmalik",
    icon: "linkedin",
    description: "Connect with me professionally",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/ridwanmalik",
    icon: "twitter",
    description: "Follow me for tech updates and thoughts",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/ridwanmalik",
    icon: "instagram",
    description: "See my life behind the code",
  },
  {
    name: "HackerRank",
    url: "https://hackerrank.com/RidwanMalik",
    icon: "hackerrank",
    description: "View my coding challenges and solutions",
  },
]

export const SECTION_TITLES = {
  about: "About Me",
  technologies: "Technical Skills",
  experience: "Where I've Worked",
  projects: "Some Things I've Built",
  certification: "Certifications",
  contact: "Get In Touch",
}

// Helper function to find technology by name or alias
export const findTechnology = (techName: string) => {
  const searchTerm = techName.toLowerCase().replace(/[.,!?;]/g, "")
  return Object.values(TECHNOLOGIES).find(
    tech => tech.name.toLowerCase() === searchTerm || tech.aliases.some(alias => alias.toLowerCase() === searchTerm)
  )
}

