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
    title: 'Software Developer focused on .NET, React, APIs and web systems.',
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
    cta: 'View project'
  },
  sections: {
    projectsTitle: 'Selected projects',
    projectsDescription:
      'A selection of team, personal and real-client systems focused on backend, integrations, delivery and maintenance.',
    experienceTitle: 'Practical experience with systems',
    experienceDescription:
      'Academic, personal and real-client projects where I worked on backend, frontend, integrations, deployment and maintenance.',
    skillsTitle: 'Skills',
    skillsDescription: 'Tools I use to build APIs, interfaces, integrations and delivery environments.',
    contactTitle: 'Contact',
    contactDescription:
      'Open to opportunities and technical conversations around .NET development, APIs, integrations and web systems.'
  },
  experience: {
    positioning:
      'Technical track record with complete deliveries: from requirements discovery to publishing, bug fixing and ongoing maintenance.',
    cards: [
      {
        title: 'Espaço Beleza Natural',
        role: 'Software Developer · Real-client project',
        period: 'Jan/2026 – Jun/2026',
        description:
          'Management and scheduling system for a beauty salon, developed in an extension project context through PUC Minas.',
        points: [
          '.NET REST API with business rules for scheduling, operational management and authentication.',
          'React/TypeScript frontend for public and administrative flows.',
          'Node.js bot for WhatsApp confirmations, reminders and login codes.',
          'Asynchronous communication between API and bot with RabbitMQ, plus Redis for bot session/cache.',
          'CI/CD with GitHub Actions and Docker, reducing manual deployment from up to 1 hour to about 5 minutes.'
        ],
        stack: [
          '.NET',
          'React',
          'TypeScript',
          'PostgreSQL',
          'Docker',
          'GitHub Actions',
          'RabbitMQ',
          'Redis',
          'Node.js',
          'WhatsApp/Baileys'
        ]
      },
      {
        title: 'Comply',
        role: 'Software Developer · Academic team project',
        period: 'Jul/2025 – Dec/2025',
        description:
          'High-complexity academic project with integration between multiple services, architecture, data consistency and delivery quality.',
        points: [
          'Development of a domain-oriented microservice.',
          'Use of DDD and Clean Architecture.',
          'Asynchronous integration with messaging and eventual consistency.',
          'Authentication, authorization and access control implementation.',
          'Unit and integration tests; project selected as a class highlight.'
        ],
        stack: ['.NET', 'MassTransit', 'MongoDB', 'Nginx', 'React', 'TypeScript', 'DDD', 'Clean Architecture']
      },
      {
        title: 'Habitum',
        role: 'Full Stack Developer · Academic team project',
        period: 'Jan/2025 – Jun/2025',
        description:
          'Application for habit tracking, routine and user progression, with main focus on the backend.',
        points: [
          'Development of core habit logic: dates, frequencies, status, streaks and score.',
          'API structure separating business rules from basic operations.',
          'Authentication, authorization and access control.',
          'DTOs to standardize contracts and avoid exposing sensitive data.',
          'Workflow organization with Git/GitHub, branches, PRs and issues; project selected as a class highlight.'
        ],
        stack: ['.NET', 'MySQL', 'JWT', 'Refresh Token', 'DTOs', 'Git/GitHub', 'React Native', 'Expo']
      }
    ],
    education: {
      title: 'PUC Minas',
      description: 'Systems Analysis and Development · expected completion in Jun/2026.',
      labels: ['ADS', 'PUC Minas', 'Academic projects', 'Technical documentation']
    }
  },
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
    stack: 'Stack',
    responsibilities: 'Main points',
    back: 'Back to projects'
  }
}