import {
  mobile,
  backend,
  creator,
  web,
  scita,
  stepCrazy,
  codeSprint,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  { id: "projects", title: "Project" },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Web Developer",
    icon: web,
  },
  {
    title: "Backend Engineer (Node.js)",
    icon: backend,
  },
  {
    title: "API & System Design",
    icon: creator,
  },
];

const experiences = [
  {
    title: "Software Trainee (Backend Developer)",
    company_name: "Scita Solutions",
    icon: scita,
    iconBg: "#E6DEDD",
    date: "December 2024 - present",
    points: [
      "Engineered backend APIs in Node.js/Express with PostgreSQL, improving request performance by 30%.",
      "Built secure authentication, validation, and error-handling pipelines.",
      "Optimized SQL joins and indexes to enhance reporting dashboards.",
      "Assisted in deploying backend services to client environments and resolving deployment issues.",
      "Coordinated with product and frontend teams for feature delivery and API integration.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "ATMS",
    description:
      "Built a backend-heavy Advanced Traffic Management System (ATMS) aligned with NHAI ATMS 2023 guidelines. The system processes real-time traffic violations and events using Node.js, Express, PostgreSQL, and Socket.IO. Implemented modules for ANPR, overspeed detection, incident logging, device health monitoring, and role-based access control. Designed efficient reporting and analytics pipelines, and scalable APIs with a focus on performance, reliability, and maintainable architecture.",
    tags: [
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "express.js",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "socket.io",
        color: "pink-text-gradient",
      },
    ],
    image: codeSprint,
  },
  {
    name: "Code Sprint",
    description:
      "Developed a comprehensive e-learning platform for programming and competitive coding. The platform allows course additions to Amazon S3, detailed course viewing, and integrates payment gateways for subscriptions. It includes features for adding coding problems, an admin dashboard with user statistics, and real-time chat between tutors and students. Built with Node.js, Express.js, and Next.js for scalability and a dynamic user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextJs",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "express.js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "docker",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: codeSprint,
    source_code_link: "https://github.com/NischalKShaj/Code_Sprint",
  },
  {
    name: "Step Crazy",
    description:
      "Step crazy is a comprehensive e-commerce platform developed and deployed to provide a seamless online shopping experience for shoe enthusiasts. The platform incorporates various features, including product view, zoom, cart/wishlist management, diverse payment methods, order details, coupon application, and PDF invoices. Additionally, it includes an admin dashboard for graphical sales representation, user management, and product/category/coupon editing.",
    tags: [
      {
        name: "ejs",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "express.js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
    ],
    image: stepCrazy,
    source_code_link: "https://github.com/NischalKShaj/Step_Crazy",
  },
];

export { services, experiences, testimonials, projects };
