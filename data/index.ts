import { link } from "fs";

export const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Work Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently learning Nextjs framework",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Kinnect",
    des: "A Discord clone, featuring all the functionalities of the Discord app, including video calls and video conferencing.",
    img: "/kinnect.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/next.svg", "/mysql.svg"],
    link: "https://kinnect-production.up.railway.app/",
  },
  {
    id: 2,
    title: "EstateSphere",
    des: "A real estate marketplace facilitating property listing and buyer-seller communication for seamless transactions.",
    img: "/estatesphere.png",
    iconLists: [
      "/mongo.svg",
      "/express.svg",
      "/re.svg",
      "/node.svg",
      "/tail.svg",
    ],
    link: "https://real-estate-marketplace-1.onrender.com/",
  },
  {
    id: 3,
    title: "Talk-a-tive",
    des: "A real-time chatting application that uses Socket.io for real time communication and stores user details in encrypted format.",
    img: "/talkative.png",
    iconLists: [
      "/mongo.svg",
      "/express.svg",
      "/re.svg",
      "/node.svg",
      "/socket.svg",
    ],
    link: "https://github.com/harsidaksingh/chat-app",
  },
  {
    id: 4,
    title: "YouTube Clone",
    des: "A frontend clone of Youtube",
    img: "/yt.png",
    iconLists: ["/html.svg", "/css.svg"],
    link: "https://github.com/harsidaksingh/youtube-clone-project",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Web Developer Intern - CodSoft",
    desc: "Worked on enhancing user interfaces and developing interactive web features using Html, CSS and javascript.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/harsidaksingh",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/harsidak-singh/",
  },
];
