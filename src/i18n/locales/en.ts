import { enSkillsContent } from "../skillsContent";
import type { pt } from "./pt";

import { enCertificatesContent } from "../certificatesContent";
export const en: typeof pt = {
  certificates: enCertificatesContent,
  skillsContent: enSkillsContent,
  content: {
    hero: {
      role: "Full Stack Developer",
      description:
        "I build web applications with C#, .NET, and React. I currently work on the Zenit management system and the Levitta Imóveis property portal.",
      primaryAction: "View projects",
      secondaryAction: "About me",
    },
    projectsSection: {
      title: "Projects",
      description: "Management systems, web and mobile applications. Explore the projects and my contribution to each one.",
      action: "Project details",
      videoAction: "View project and video",
      previewPending:
        "The context and technical decisions will be shared soon.",
      pending: "Details in preparation",
      illustrationNote:
        "Projects without a cover use their name as a visual placeholder.",
      professional: "Professional",
      academic: "Academic · team project",
      extension: "University outreach · PUC Minas · real client",
    },
    about: {
      title: "About me",
      paragraphs: [
        "I have a degree in Systems Analysis and Development from PUC Minas. I build web applications, from interfaces to business logic, with a focus on .NET.",
        "At university, I worked in teams on websites and mobile apps. I also took part in a PUC Minas university outreach project for Espaço Beleza Natural, a real beauty salon client. This included requirements gathering, development, code reviews, and testing. Four projects I contributed to received awards at the Mostra de Projetos PUC Minas over four consecutive semesters.",
      ],
      photoNote: "Portrait coming soon",
    },
    journey: {
      title: "My developer journey",
      emptyTitle: "The next chapters.",
      emptyDescription:
        "Coming soon: my education, experience and the paths that brought me here.",
      experience: "Experience",
      education: "Education",
      contributions: "View contributions",
      recognition: "View recognitions",
    },
    contact: {
      title: "Let's talk.",
      description: "Want to discuss an opportunity or learn more about my work? Contact me by email or on LinkedIn.",
      pending: "Contact channels coming soon",
    },
    footer: { note: "Full Stack Developer", top: "Back to top" },
  },
  navigation: {
    projects: "Projects",
    about: "About",
    technologies: "Skills",
    journey: "Journey",
  },
  ui: {
    closeDetails: "Close details",
    loadingDetails: "Loading details…",
    projectVideo: "{{name}} project demo",
    watchYouTube: "Watch on YouTube",
    videoHint: "Press play to watch the demo.",
    closeProject: "Close project",
    skip: "Skip to content",
    home: "{{name}}, home",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    navigation: "Main navigation",
    contact: "Let's talk",
    contactNavigation: "Contact",
    role: "My contribution:",
    context: "Context",
    contributions: "Contributions",
    solution: "Solution",
    results: "Results",
    technologies: "Technologies used",
    status: "Current status",
    projectDetails: "{{action}} · {{name}}",
    entryDetails: "{{action}} · {{organization}} · {{period}}",
    location: "Location: {{location}}",
    visitProject: "Visit project",
    code: "Source code",
    language: "Language",
  },
  meta: {
    imageAlt: "Portrait of Lucas Toti",
    title: "Lucas Toti | Full Stack Developer",
    description:
      "I am Lucas Toti, a Full Stack Developer. I develop C# and ASP.NET Core APIs, React and Next.js interfaces, and web and mobile applications.",
  },
};
