import { ProjectItem } from "@/types/ProjectItemTypes";
import pratododiaimg from "@/assets/projectImages/pratododia.jpg";
import pccertoimg from "@/assets/projectImages/pccerto.jpg";
import myportfolioimg from "@/assets/projectImages/myportfolio.jpg";
import habitumapiimg from "@/assets/projectImages/habitumapi.jpg";
import complyimg from "@/assets/projectImages/comply.png"

export const projects: ProjectItem[] = [
  {
    id: "0",
    title: "My Portfolio",
    description: "Este site que você está vendo agora!",
    imgs: [myportfolioimg],
    stack: "React, TypeScript, Tailwind CSS, Vite, Nginx, Oracle",
    gitRepo:
      "https://github.com/LcsToti/MyPortfolio?tab=readme-ov-file",
    access: "https://lcstoti.dev/",
  },
  {
    id: "1",
    title: "PC Certo",
    description: "Um site de peças de hardware de computadores",
    imgs: [pccertoimg],
    stack: "HTML, CSS e JavaScript",
    gitRepo:
      "https://github.com/LcsToti/PC-Certo?tab=readme-ov-file",
    access: "https://pc-certo.lcstoti.dev",
  },
  {
    id: "2",
    title: "Prato Do Dia",
    description:
      "Um site de receitas de comida, com seção de comentários, filtros alimentares e muito mais.",
    imgs: [pratododiaimg],
    stack: ".NET MVC, Bootstrap, Azure, HTML, CSS e JS",
    gitRepo:
      "https://github.com/LcsToti/PratoDoDia?tab=readme-ov-file",
      access: "https://pratododia.lcstoti.dev",
  },
  {
    id: "3",
    title: "HabitumAPI",
    description: "API para um aplicativo de gestão de hábitos gamificado.",
    imgs: [habitumapiimg],
    stack: "C#, .NET",
    gitRepo:
      "https://github.com/LcsToti/HabitumAPI",
    access: "https://habitumapi.lcstoti.dev/",
  },
  {
    id: "4",
    title: "Comply",
    description: "Sistema de marketplace com leilões.",
    imgs: [complyimg],
    stack: "C#, .NET, React + Vite + TailwindCSS, Docker, RabbitMQ ",
    gitRepo:
      "https://github.com/LcsToti/Comply",
    access: "https://comply.lcstoti.dev/",
  },
];
