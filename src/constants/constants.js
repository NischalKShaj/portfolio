import {
  mobile,
  backend,
  creator,
  web,
  scita,
  stepCrazy,
  codeSprint,
  atms,
  frosty,
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
    title: "Frontend Development",
    description:
      "Creating responsive, interactive, and visually engaging user interfaces with React, Next.js, and TypeScript. Focused on component-based architecture, state management, performance optimization, and delivering seamless user experiences across devices.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    projectExamples: ["Mangaluru Frosty", "Code Sprint"],
    codeLabel: "Hero.tsx",
    codeSample: [
      "export function Hero() {",
      "  return (",
      '    <main className="min-h-screen">',
      "      <h1>Build something great</h1>",
      "      <button>Explore projects</button>",
      "    </main>",
      "  );",
      "}",
    ],
    icon: mobile,
  },
  {
    title: "Full-Stack Development",
    description:
      "Building responsive, user-friendly web applications from frontend to backend. I develop complete solutions using React, Next.js, Node.js, and modern databases, focusing on clean architecture, performance, and seamless user experiences.",
    technologies: ["React", "Next.js", "Node.js", "Express.js", "MongoDB"],
    projectExamples: ["Mangaluru Frosty", "Code Sprint"],
    codeLabel: "app.js",
    codeSample: [
      "async function loadProject(id) {",
      "  const project = await api.get(`/projects/${id}`);",
      "  return <ProjectPage project={project} />;",
      "}",
      "",
      "export default loadProject;",
    ],
    icon: web,
  },
  {
    title: "Backend Development & Engineering",
    description:
      "Developing robust and scalable backend systems with Node.js, Express.js, and NestJS. From database architecture and authentication to business logic and server-side optimization, I build reliable systems designed to handle real-world application requirements.",
    technologies: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "MongoDB",
      "Socket.IO",
    ],
    projectExamples: ["ATMS", "Code Sprint"],
    codeLabel: "server.js",
    codeSample: [
      "app.get('/events/:id', async (req, res) => {",
      "  const event = await eventService.find(req.params.id);",
      "  if (!event) return res.sendStatus(404);",
      "  res.json(event);",
      "});",
    ],
    icon: backend,
  },
  {
    title: "API Development & Integration",
    description:
      "Designing and developing secure, efficient REST APIs and integrating third-party services. Experienced in payment gateway integration, cloud storage, real-time communication, and external service integrations to connect applications and deliver seamless functionality.",
    technologies: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Socket.IO",
      "Cloudinary",
    ],
    projectExamples: ["ATMS", "Mangaluru Frosty", "Code Sprint"],
    codeLabel: "events.route.js",
    codeSample: [
      "router.post('/events', validateEvent, async (req, res) => {",
      "  const event = await eventService.create(req.body);",
      "  io.emit('event:created', event);",
      "  res.status(201).json(event);",
      "});",
    ],
    icon: creator,
  },
];

const experiences = [
  {
    title: "Web Developer",
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
    image: atms,
  },
  {
    name: "Mangaluru Frosty",
    description:
      "Developed a responsive business website enabling customers to explore available products and pricing. Built an admin dashboard for product management with CRUD operations and environment-based authentication. Integrated Cloudinary for image storage, WhatsApp for customer-initiated orders, and Nodemailer for email communication.  ",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "typeScript",
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
        name: "cloudinary",
        color: "pink-text-gradient",
      },
      {
        name: "nodemailer",
        color: "yellow-text-gradient",
      },
    ],
    image: frosty,
    // source_code_link: "https://github.com/NischalKShaj/Step_Crazy",
    live_link: "https://google.com",
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
];

export { services, experiences, testimonials, projects };
