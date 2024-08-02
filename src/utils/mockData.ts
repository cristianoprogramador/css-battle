import { CgGirl } from "react-icons/cg";
import { FaCode } from "react-icons/fa";
import { MdOutlineViewModule } from "react-icons/md";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiStyledcomponents } from "react-icons/si";
// import { MdCss } from "react-icons/md";
// import { RxStitchesLogo } from "react-icons/rx";
// import { SiShell } from "react-icons/si";

export const data = [
  {
    id: 1,
    image: "/item1.jpg",
    title: "Coffee Shop",
    github: "https://github.com/cristianoprogramador/ignite-coffeeshop",
    demo: "https://ignite-coffeeshop.vercel.app/",
  },
  {
    id: 2,
    image: "/item2.jpg",
    title: "Learning and Laughing",
    demo: "https://learningandlaughing.com.br/",
  },
  {
    id: 3,
    image: "/item3.jpg",
    title: "My Life - Dashboard",
    github: "https://github.com/cristianoprogramador/mylife_dashboard",
    demo: "https://mylife-dashboard.vercel.app/",
  },
  {
    id: 4,
    image: "/item4.jpg",
    title: "Create Your Burger",
    github: "https://github.com/cristianoprogramador/createBurger",
    demo: "https://createburger.com.br/",
  },
  {
    id: 5,
    image: "/item5.jpg",
    title: "Clinica Lithá",
    demo: "https://clinicalitha.com.br/",
  },
  {
    id: 6,
    image: "/item6.jpg",
    title: "App-Watch",
    github: "https://github.com/cristianoprogramador/app_watch_frontend",
    demo: "https://appwatch.cristianosilvadev.com/",
  },
  {
    id: 7,
    image: "/item7.jpg",
    title: "Better-end",
    github: "https://github.com/cristianoprogramador/better_end_frontend",
    demo: "https://betterend.cristianosilvadev.com/",
  },
];

export const NAV_ITEMS = [
  { to: "/inline-style", icon: FaCode, label: "Inline Style" },
  { to: "/css-modules", icon: MdOutlineViewModule, label: "CSS Modules" },
  { to: "/tailwind", icon: RiTailwindCssFill, label: "Tailwind" },
  {
    to: "/styled-components",
    icon: SiStyledcomponents,
    label: "Styled Components",
  },
  { to: "/emotion", icon: CgGirl, label: "Emotion" },
  // { to: "/css-in-js", icon: MdCss, label: "CSS-in-JS" },
  // { to: "/aphrodite", icon: SiShell, label: "Aphrodite" },
  // { to: "/stitches", icon: RxStitchesLogo, label: "Stitches" },
];
