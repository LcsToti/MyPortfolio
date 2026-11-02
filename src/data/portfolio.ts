import { projects } from "./projects";

export type Language = "pt" | "en";
export type LocalizedText = Record<Language, string>;

export interface ImageAsset {
  src: string;
  width: number;
  height: number;
}
export interface ProjectThumbnail extends ImageAsset {
  alt: LocalizedText;
  fit?: "contain" | "cover";
}
export interface Project {
  id: string;
  name: string;
  kind: "professional" | "academic" | "extension";
  period: LocalizedText | null;
  thumbnail: ProjectThumbnail | null;
  icon: ImageAsset | null;
  description: LocalizedText | null;
  context: LocalizedText | null;
  role: LocalizedText | null;
  contributions: LocalizedText[];
  solution: LocalizedText | null;
  results: LocalizedText | null;
  status: LocalizedText | null;
  technologies: string[];
  url: string | null;
  repository: string | null;
  videoId: string | null;
}
export interface TimelineEntry {
  id: string;
  period: LocalizedText;
  title: LocalizedText;
  organization: LocalizedText;
  organizationLogo?: ImageAsset;
  certificateIds?: string[];
  description: LocalizedText;
  contributions: LocalizedText[];
}
export interface Portfolio {
  name: string;
  initials: string;
  location: string;
  website: string;
  photo: (ImageAsset & { cutout: ImageAsset; alt: LocalizedText }) | null;
  navigation: { id: "projects" | "about" | "technologies" | "journey"; href: string }[];
  projects: Project[];
  journey: TimelineEntry[];
  education: TimelineEntry[];
  contact: { email: string | null; links: { label: string; url: string }[] };
}

// Conteúdo publicável fornecido pelo usuário em 01/11/2026.
// Dados ausentes continuam nulos. Os seis projetos e seus materiais foram confirmados pelo usuário.
export const portfolio: Portfolio = {
  name: "Lucas Toti",
  initials: "LT",
  location: "Contagem, MG",
  website: "https://lucastoti.com",
  // Foto já fornecida neste projeto; o Markdown veio de outro workspace.
  photo: {
    src: "/images/lucas-toti.webp",
    width: 700,
    height: 933,
    cutout: { src: "/images/eu-sem-fundo.webp", width: 920, height: 1227 },
    alt: { pt: "Retrato de Lucas Toti", en: "Portrait of Lucas Toti" },
  },
  navigation: [
    { id: "projects", href: "#projetos" },
    { id: "technologies", href: "#tecnologias" },
    { id: "journey", href: "#trajetoria" },
    { id: "about", href: "#sobre" },
  ],
  projects,
  journey: [
    {
      id: "real-estate-development",
      period: { pt: "09/2026–atual", en: "09/2026–present" },
      title: { pt: "Desenvolvedor Full Stack", en: "Full Stack Developer" },
      organization: { pt: "Levitta Imóveis", en: "Levitta Imóveis" },
      description: { pt: "Desenvolvo e mantenho o backend, interfaces de gestão e portal público de uma plataforma imobiliária em operação real.", en: "I develop and maintain the backend, management interfaces, and public portal for a real estate platform in active use." },
      contributions: [
        { pt: "Desenvolvi a API REST em ASP.NET Core e o portal público em Next.js, com busca e páginas de detalhes renderizadas no servidor.", en: "I developed the ASP.NET Core REST API and public Next.js portal, with search and server-rendered detail pages." },
        { pt: "Estruturei a persistência com Entity Framework Core e PostgreSQL e revisei scripts de atualização do banco para atualizar os dados existentes.", en: "I structured persistence with Entity Framework Core and PostgreSQL and reviewed database migration scripts to update existing data." },
        { pt: "Estruturei a implantação com Docker Compose em Linux.", en: "I set up deployment with Docker Compose on Linux." },
      ],
    },
    {
      id: "salon-extension",
      period: { pt: "02/2026–07/2026", en: "02/2026–07/2026" },
      title: { pt: "Desenvolvedor Full Stack", en: "Full Stack Developer" },
      organization: { pt: "Espaço Beleza Natural — extensão universitária da PUC Minas", en: "Espaço Beleza Natural — PUC Minas university outreach project" },
      description: { pt: "Em um projeto de extensão universitária da PUC Minas, trabalhei em equipe para um cliente real. Participei do levantamento de requisitos e do desenvolvimento do sistema de gestão e agendamento do salão.", en: "As part of a PUC Minas university outreach project, I worked in a team for a real client. I participated in requirements gathering and development of the salon management and booking system." },
      contributions: [
        { pt: "Desenvolvi uma API REST em .NET com Entity Framework Core e PostgreSQL, além de páginas responsivas para agendamento online e consulta de horários.", en: "I developed a .NET REST API with Entity Framework Core and PostgreSQL, along with responsive pages for online booking and availability checks." },
        { pt: "Desenvolvi um bot em Node.js para comunicação via WhatsApp, integrado à API por RabbitMQ e com Redis para sessões.", en: "I developed a Node.js bot for WhatsApp communication, connected to the API through RabbitMQ and using Redis for sessions." },
        { pt: "Automatizei a publicação de novas versões com GitHub Actions e Docker e criei testes com xUnit para serviços e regras de negócio.", en: "I automated deployment of new versions with GitHub Actions and Docker and created xUnit tests for services and business rules." },
        { pt: "Participei de revisões de código e testes de funcionalidades desenvolvidas pela equipe.", en: "I participated in code reviews and testing of features developed by the team." },
      ],
    },
  ],
  education: [
    {
      id: "puc-minas-ads",
      organizationLogo: { src: "/images/puc-minas-black.png", width: 1199, height: 1018 },
      period: { pt: "01/2024–08/2026", en: "01/2024–08/2026" },
      title: { pt: "Análise e Desenvolvimento de Sistemas", en: "Systems Analysis and Development" },
      organization: { pt: "PUC Minas", en: "PUC Minas" },
      description: { pt: "Formação concluída. Tive quatro projetos premiados na Mostra de Projetos PUC Minas durante quatro semestres consecutivos.", en: "Degree completed. Four projects I worked on received awards at the Mostra de Projetos PUC Minas over four consecutive semesters." },
      contributions: [],
      certificateIds: ["comply-award", "habitum-award", "prato-do-dia-award", "pc-certo-award"],
    },
  ],
  contact: {
    email: "lucastotidev@gmail.com",
    links: [
      { label: "GitHub", url: "https://github.com/lcstoti" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/lcstoti/" },
    ],
  },
};
