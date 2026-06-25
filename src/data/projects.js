import ecommerceImg from "../assets/images/E-commerce.png";
import dashboardImg from "../assets/images/Admin_dashboard.png";
import waitingRoomImg from "../assets/images/waiting_room.png";

const projects = [
  {
    slug: "e-commerce-platform",
    title: "E-commerce Platform",
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

    github: "https://github.com/JonBergeroeyRyssdal/JS_Waiting_Room",

    frontend: "https://js-waiting-room.onrender.com/",
  },
];

export default projects;
