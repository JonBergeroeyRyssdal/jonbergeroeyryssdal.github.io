import emailIcon from "../assets/images/Email.png";

const contactLinks = [
  {
    name: "E-mail",
    href: "mailto:jon_ryssdal@hotmail.com",
    icon: emailIcon,
    alt: "Email",
    delay: 100,
  },
  {
    name: "GitHub",
    href: "https://github.com/JonBergeroeyRyssdal",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    alt: "GitHub",
    delay: 200,
    external: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/jon-berger%C3%B8y-ryssdal-291369267/",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
    alt: "LinkedIn",
    delay: 300,
    external: true,
    grayscale: true,
  },
];

export default contactLinks;
