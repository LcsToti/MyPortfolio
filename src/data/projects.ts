import { ProjectItem } from "@/types/ProjectItemTypes";
import pratododiaimg from "@/assets/projectImages/pratododia.png";
import pccertoimg from "@/assets/projectImages/pccerto.png";
import myportfolioimg from "@/assets/projectImages/myportfolio.png";

export const projects: ProjectItem[] = [
  {
    id: "1",
    title: "Prato Do Dia",
    description:
      "Um site de receitas de comida, com seção de comentários, filtros alimentares e muito mais.",
    imgs: [pratododiaimg],
    stack: "ASP.NET MVC, Bootstrap, Azure, HTML, CSS e JS",
    gitRepo:
      "https://github.com/LcsToti/PratoDoDia?tab=readme-ov-file#%EF%B8%8F-prato-do-dia",
  },
  {
    id: "2",
    title: "PC Certo",
    description: "Um site de peças de hardware de computadores",
    imgs: [pccertoimg],
    stack: "HTML, CSS e JavaScript",
    gitRepo:
      "https://github.com/LcsToti/PC-Certo?tab=readme-ov-file#%EF%B8%8F-pc-certo",
    access: "https://lcstoti.github.io/PC-Certo/src/Paginainicial.html",
  },
  {
    id: "3",
    title: "My Portfolio",
    description: "Este site que você está vendo agora!",
    imgs: [myportfolioimg],
    stack: "React, TypeScript, Tailwind CSS, Vite",
    gitRepo:
      "https://github.com/LcsToti/MyPortfolio?tab=readme-ov-file#-meu-portf%C3%B3lio-pessoal",
    access: "https://lucas-toti.vercel.app/",
  },
];
