import type { SiteContent } from '@/types/site'

export const enContent: SiteContent = {
  locale: 'en',
  basePath: '/en',
  alternatePath: '/pt',
  nav: {
    projects: 'Projects',
    experience: 'Experience',
    skills: 'Skills',
    contact: 'Contact'
  },
  hero: {
    eyebrow: 'Hi, I’m Lucas Toti.',
    title: 'Software Developer focused on .NET, React, APIs and web products.',
    subtitle:
      'I work on APIs, integrations, automations, interfaces and deployment, contributing to planning, documentation, hosting and maintenance of web solutions.',
    projectCta: 'View projects',
    linkedinCta: 'LinkedIn',
    githubCta: 'GitHub',
    imageAlt: 'Photo of Lucas Toti'
  },
  quickProofs: [
    '.NET / C#',
    'REST APIs',
    'Clean Architecture',
    'PostgreSQL / SQL',
    'React + TypeScript',
    'Docker',
    'GitHub Actions / CI/CD',
    'RabbitMQ',
    'Redis',
    'WhatsApp Bot'
  ],
  featured: {
    label: 'Featured project',
    title: 'Beleza Natural',
    description:
      'Real-client salon management and scheduling system with a .NET API, authentication, React frontend, WhatsApp automations, GitHub Actions CI/CD and Docker deployment.',
    cta: 'View case'
  },
  sections: {
    projectsTitle: 'Selected projects',
    projectsDescription:
      'A selection of team, personal and real-client systems focused on backend, integrations, delivery and maintenance.',
    experienceTitle: 'Experience and background',
    experienceDescription:
      'My background combines Systems Analysis and Development at PUC Minas with hands-on software projects across planning, documentation, development, hosting and maintenance.',
    skillsTitle: 'Skills',
    skillsDescription: 'Tools I use to build APIs, interfaces, integrations and delivery environments.',
    contactTitle: 'Contact',
    contactDescription:
      'Open to opportunities and technical conversations around .NET development, APIs, integrations and web systems.'
  },
  experienceItems: [
    'Systems Analysis and Development background at PUC Minas, applied to web projects, APIs and technical documentation.',
    'At Espaço Beleza Natural, I worked on a management and scheduling system with a .NET API, authentication, validations, CI/CD, Docker, Oracle VM and WhatsApp automations.',
    'On Comply, I worked on a complex multi-service project with DDD, Clean Architecture, messaging, eventual consistency, authentication/authorization and tests.',
    'On Habitum, I structured the backend API for habit tracking, domain rules, access control, DTOs, authentication and Git/GitHub workflow organization.'
  ],
  skillGroups: [
    { title: 'Backend', items: ['C#', '.NET', 'ASP.NET Core', 'Entity Framework Core', 'REST APIs'] },
    { title: 'Frontend', items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'JavaScript'] },
    { title: 'Databases', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQL Server', 'SQL'] },
    { title: 'Infra/DevOps', items: ['Docker', 'GitHub Actions', 'Nginx', 'Azure', 'Oracle Cloud'] },
    { title: 'Integrations/automation', items: ['RabbitMQ', 'Redis', 'WhatsApp/Baileys', 'MassTransit', 'Node.js'] }
  ],
  contactLinks: [
    { label: 'LinkedIn', href: 'https://linkedin.com/in/lcstoti' },
    { label: 'GitHub', href: 'https://github.com/lcstoti' },
    { label: 'Email', href: 'mailto:lcstotidev@gmail.com' }
  ],
  projectsPage: {
    title: 'Projects',
    description: 'Cases and projects that show API development, service integration, frontend, deployment and documentation.'
  },
  detailLabels: {
    overview: 'Overview',
    stack: 'Stack',
    responsibilities: 'Main points',
    back: 'Back to projects',
    live: 'Live',
    repo: 'Repository'
  }
}