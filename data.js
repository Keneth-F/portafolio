import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { MdDeveloperMode } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import {
  AiFillCalendar,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillPhone,
  AiOutlineGithub,
  AiOutlineMail,
} from "react-icons/ai";
export const contact = [
  {
    Icon: AiOutlineMail,
    title: "Email",
    url: "mailto:kfg2120@gmail.com",
    data: "kfg2120@gmail.com",
  },
  {
    Icon: AiFillPhone,
    title: "Phone",
    url: "tel:+506728507886",
    data: "+506 72850786",
  },
  {
    Icon: GoLocation,
    title: "Location",
    url: "https://goo.gl/maps/a4osW55QYNhvJftU6",
    data: "Alajuela, Costa Rica",
  },
  {
    Icon: AiFillCalendar,
    title: "Birthday",
    url: "https://calendar.google.com/calendar/u/0/r/week/2023/09/21?tab=rc",
    data: "Sept 21, 2000",
  },
];
export const socials = [
  { Icon: AiFillFacebook, url: "https://www.facebook.com/keneth.guzman.75" },
  { Icon: AiOutlineGithub, url: "https://github.com/Keneth-F" },
  {
    Icon: AiFillLinkedin,
    url: "https://www.linkedin.com/in/keneth-fari%C3%B1as-guzm%C3%A1n-7a44881a2/",
  },
];
export const services = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> or another modern web technologies",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Express </b> or <b>.NET </b> & other popular frameworks",
  },
  {
    Icon: MdDeveloperMode,
    title: "Mobile Development",
    about:
      "Professional development of applications for iOS and Android using <b>Flutter</b>",
  },
];
export const education = [
  {
    title: "Diplomado degree in Computer Science Engineering",
    date: "2018 — 2022",
    data: "Which prepare me professionally to deal with technological concepts",
  },
  {
    title: "Certificate in Bussines Computing",
    date: "2019 — 2022",
    data: "I learned to work with technologies that are responsible for the development and administration of computer projects, relevant to the organization of systems, finances and resources in a company.",
  },
  {
    title: "B.Tech Degree in Computer Science Engineering ",
    date: "2022 — current",
    data: "I am currently in UNED in which they promote technological innovation; create and update quality software; develop, manage and analyze databases; manage software projects; and design, integrate and evaluate different technological infrastructures and telematic services.",
  },
];

export const experience = [
  {
    title: "Supervised work practice",
    date: "2022",
    data: "I created a website for a school as part of an internship",
  },
  {
    title: "Self-learning",
    date: "2015 — Present",
    data: "Currently I have no work experience, but I have done pseudo-real projects that involve many key points of the real world, always looking for functionality",
  },
];
export const languages = [
  {
    name: "C\u0023",
    level: "70",
  },
  {
    name: "Flutter",
    level: "70",
  },
  {
    name: "Python",
    level: "50",
  },
  {
    name: "Node",
    level: "80",
  },
  {
    name: "Java",
    level: "50",
  },
  {
    name: "SQL",
    level: "70",
  },
];

export const tools = [
  {
    name: ".NET",
    level: "85",
  },
  {
    name: "TypeScript",
    level: "70",
  },
  {
    name: "Bootstrap",
    level: "50",
  },
  {
    name: "Tailwind",
    level: "50",
  },
  {
    name: "Material UI",
    level: "50",
  },
  {
    name: "CSS",
    level: "70",
  },
  {
    name: "React",
    level: "80",
  },
  {
    name: "ExpressJS",
    level: "90",
  },
  {
    name: "Angular",
    level: "45",
  },
  {
    name: "Django",
    level: "50",
  },
  {
    name: "Flask",
    level: 50,
  },
  {
    name: "Postgress",
    level: "50",
  },
  {
    name: "Mongo",
    level: "75",
  },
  {
    name: "SQL Server",
    level: "80",
  },
  {
    name: "MySQL",
    level: "75",
  },
];

export const projects = [
  {
    name: "Simple ApiRest",
    description:
      "an application programming interface (API or web API) that conforms to the constraints of REST architectural style and allows for interaction with RESTful web services.",
    image_path: "/api1.webp",
    deployed_url: "#",
    github_url: "#",
    category: ["Node", "C#", "Python"],
    key_techs: ["Express", "Flask", "Django"],
  },
  {
    name: "E-Commerce",
    image_path: "/ecommerce.jpg",
    deployed_url: "#",
    github_url: "#",
    category: ["Node"],
    description: "full stack app with CRUDs, roles, auth, shopping cart...",
    key_techs: ["Next JS", "Mongo"],
  },
  {
    name: "School Web Site",
    image_path: "/school.webp",
    deployed_url: "#",
    github_url: "#",
    category: ["Node"],
    description: "Web for a school with admin panel",
    key_techs: ["HTML/CSS/JS", "Firebase"],
  },
  {
    name: "Board App",
    image_path: "/draw.jpg",
    deployed_url: "#",
    github_url: "#",
    category: ["Flutter", "Node"],
    description:
      "An application that works in real time with a board that multiple user can draw at the same time",
    key_techs: ["Express", "Socket.io"],
  },
  {
    name: "RealTime App",
    image_path: "/app1.webp",
    deployed_url: "#",
    github_url: "#",
    category: ["Flutter"],
    description:
      "An application that works in real time with messages, notifications, maps, database, login...",
    key_techs: ["firebase", "Google Maps"],
  },
  {
    name: "Music Player",
    image_path: "/music.webp",
    deployed_url: "#",
    github_url: "#",
    category: ["Flutter"],
    description:
      "An application that load data from API and reproduce any selected song",
    key_techs: [],
  },
  {
    name: "Scrapper",
    image_path: "/scrapper.png",
    deployed_url: "https://dev-talks.herokuapp.com/",
    github_url: "https://github.com/Dey-Sumit/Dev-talks",
    category: ["Node"],
    description: "web api to scrap from some web",
    key_techs: ["Express"],
  },

  {
    name: "Videogames",
    image_path: "/games.webp",
    deployed_url: "#",
    github_url: "#",
    category: ["node", "Python", "C#"],
    description: "Recreation popular games",
    key_techs: ["Vanilla JS", "Pygame", "Unity", "Godot"],
  },

  {
    name: "Web Site",
    image_path: "/website.jpg",
    deployed_url: "#",
    github_url: "#",
    category: ["Node", "C#", "Python"],
    description: "Web App that consume API(public o created)",
    key_techs: [
      "Express",
      "Django",
      "Flask",
      ".NET",
      "Angular",
      "React",
      "Vue",
    ],
  },

  {
    name: "Sale Control",
    image_path: "/sale.png",
    deployed_url: "#",
    github_url: "#",
    category: ["C#"],
    description: "Desktop app with auth to manage products",
    key_techs: [],
  },
  {
    name: "Multiple sources",
    image_path: "/sources.jpg",
    deployed_url: "#",
    github_url: "#",
    category: ["C#"],
    description: "App that use as database different sources",
    key_techs: ["Mysql", "Postgress", "Mongo", "Excell"],
  },
  {
    name: "Concepts Apps",
    image_path: "/last.jpg",
    deployed_url: "#",
    github_url: "#",
    category: ["C#", "Node"],
    description: "Apps that apply structures, concepts and point intersting",
    key_techs: ["Vanilla JS", ".NET"],
  },
];
