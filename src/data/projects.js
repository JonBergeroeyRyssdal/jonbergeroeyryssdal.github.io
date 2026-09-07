import ecommerceImg from "../assets/images/E-commerce.png";
import dashboardImg from "../assets/images/Admin_dashboard.png";
import waitingRoomImg from "../assets/images/Waiting_room.png";
import doctorsAppointmentImg from "../assets/images/Doctors_appointment.png";
import ryssdalWebSolutionsImg from "../assets/images/ryssdal-web-solutions.svg";

const projects = [
  {
    slug: "ryssdal-web-solutions",
    title: "Ryssdal Web Solutions",
    summary: "A multilingual website for my own business, presenting web development services for small businesses.",
    image: ryssdalWebSolutionsImg,
    alt: "Ryssdal Web Solutions — Websites for small businesses",
    delay: 100,
    description:
      "The business website for Ryssdal Web Solutions, my sole proprietorship based in Moss, Norway. I built it to introduce my services to small businesses looking for a new website, improvements to an existing site, or practical digital solutions. Built with Next.js, React, TypeScript and Bootstrap, the site presents my services and background with clear contact links and content in Norwegian, English and Spanish.",
    technologies: ["Next.js", "React", "TypeScript", "Bootstrap"],
    features: [
      "Norwegian, English and Spanish language versions",
      "Responsive layout for mobile and desktop",
      "Presentation of website development, digital solutions and ongoing support",
      "Developer introduction and direct contact links",
      "Language-specific metadata and a multilingual sitemap",
    ],
    frontend: "https://ryssdal-web-solutions.onrender.com",
    frontendLabel: "Visit website",
  },
  {
    slug: "e-commerce-platform",
    title: "E-commerce Platform",
    summary: "An online store with authentication, product management and order handling.",
    image: ecommerceImg,
    alt: "E-commerce Project",
    delay: 100,

    description:
      "Fullstack e-commerce application built as part of a Noroff exam project. The system includes authentication, an admin dashboard, product and category management, and order handling with a structured relational database.",

    technologies: [
      "Node.js",
      "Express",
      "MySQL (Aiven)",
      "Sequelize",
      "EJS",
      "Bootstrap",
      "JWT Authentication",
      "REST API",
    ],

    features: [
      "User authentication & authorization",
      "Admin dashboard for product and user management",
      "Database designed in Third Normal Form (3NF)",
    ],

    github: "https://github.com/JonBergeroeyRyssdal/exam_project_2_E-commerce",

    frontend: "https://e-commerce-fu0r.onrender.com/admin/login",

    backend: "https://ecommerce-api-0lcd.onrender.com",
  },

  {
    slug: "reception-dashboard",
    title: "Reception Dashboard",
    summary: "A reception dashboard for tracking deliveries and managing staff availability.",
    image: dashboardImg,
    alt: "Reception Management Dashboard",
    delay: 200,

    description:
      "Frontend reception management dashboard for the fictional company WeDeliverTECH™. Employees can track deliveries, manage packages and generate reports.",

    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap 5", "jQuery"],

    features: [
      "Package tracking interface",
      "Staff data generation via Random User API",
      "Responsive Bootstrap layout",
      "Dynamic DOM manipulation with jQuery",
    ],

    github: "https://github.com/JonBergeroeyRyssdal/exam-project-sp1",

    frontend: "https://jonbergeroeyryssdal.github.io/Dashboard/",
  },

  {
    slug: "js-waiting-room",
    title: "JS Waiting Room",
    summary: "A digital waiting room connecting patients and reception through an API gateway.",
    image: waitingRoomImg,
    alt: "JS Waiting Room Project",
    delay: 300,

    description:
      "Microservices-based waiting room system consisting of Patients, Receptionist and Server services behind an API Gateway.",

    technologies: [
      "Node.js",
      "Express",
      "JavaScript",
      "REST API",
      "Microservices",
    ],

    features: [
      "API Gateway",
      "Microservice architecture",
      "Service separation",
      "Health check endpoints",
    ],

    setupLinks: [
      {
        label: "Server",
        url: "https://server-3khr.onrender.com",
      },
      {
        label: "Patient",
        url: "https://patient-xw8x.onrender.com",
      },
    ],

    github: "https://github.com/JonBergeroeyRyssdal/JS_Waiting_Room",

    frontend: "https://js-waiting-room.onrender.com/",
  },

  {
    slug: "doctors-appointment-booking",
    title: "Doctors Appointment Booking",
    summary: "A full-stack booking system with patient appointments, doctor availability and an admin dashboard.",
    image: doctorsAppointmentImg,
    alt: "Doctors Appointment Booking Project",
    delay: 400,

    description:
      "Full-stack appointment booking system where guests and registered patients can book appointments with doctors, with an administrative dashboard for managing clinics, doctors, patients and appointments.",

    technologies: [
      "C#",
      "ASP.NET Core",
      "Entity Framework Core",
      "MySQL",
      "React",
      "JWT Authentication",
      "REST API",
    ],

    features: [
      "Guest and patient appointment booking",
      "JWT authentication",
      "Doctor availability and available time slots",
      "Administrative dashboard",
      "Clinic, doctor and speciality management",
      "Appointment validation and conflict prevention",
    ],

    setupLinks: [
      {
        label: "Backend API",
        url: "https://doctors-appointment-booking-1.onrender.com",
      },
    ],

    github:
      "https://github.com/JonBergeroeyRyssdal/Doctors-Appointment-Booking",

    backend: "https://doctors-appointment-booking-1.onrender.com/doc",

    frontend: "https://doctors-appointment-booking-frontend.onrender.com/",
  },
];

const featuredProject = projects.find((project) => project.slug === "doctors-appointment-booking");

export default [featuredProject, ...projects.filter((project) => project !== featuredProject)];
