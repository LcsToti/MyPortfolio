import type { Locale, Project, ProjectLink, ProjectSlug } from '@/types/site'

type SharedProject = {
  slug: ProjectSlug
  logoSrc: string
  coverSrc: string
  videoUrl: string
  stack: string[]
  links: Array<Omit<ProjectLink, 'label'>>
}

type LocalizedProject = Pick<Project, 'name' | 'type' | 'summary' | 'points' | 'highlight'> & {
  logoAlt: string
  coverAlt: string
  linkLabels: Partial<Record<NonNullable<ProjectLink['kind']>, string>>
}

const sharedProjects: SharedProject[] = [
  {
    slug: 'beleza-natural',
    logoSrc: '/beleza-natural-icon.png',
    coverSrc: '/beleza-natural-thumb.png',
    videoUrl: 'https://youtu.be/oRiqmRdPEjA',
    stack: [
      '.NET',
      'Entity Framework Core',
      'PostgreSQL',
      'React',
      'TypeScript',
      'Docker',
      'GitHub Actions',
      'RabbitMQ',
      'Redis',
      'Node.js',
      'WhatsApp/Baileys'
    ],
    links: []
  },
  {
    slug: 'comply',
    logoSrc: '/comply-icon.jpg',
    coverSrc: '/comply-thumb.png',
    videoUrl: 'https://youtu.be/D-0VdaZQiJI',
    stack: ['.NET', 'MassTransit', 'MongoDB', 'Nginx', 'React', 'TypeScript'],
    links: [
      { href: 'https://github.com/lcstoti/comply', kind: 'repo' },
      { href: 'https://comply.lcstoti.dev', kind: 'live' }
    ]
  },
  {
    slug: 'habitum',
    logoSrc: '/habitum-icon.png',
    coverSrc: '/habitum-thumb.png',
    videoUrl: 'https://youtu.be/Lhrk6t1Eofo',
    stack: ['.NET', 'MySQL', 'JWT', 'Refresh Token', 'DTOs', 'Git/GitHub'],
    links: [
      { href: 'https://github.com/lcstoti/habitum', kind: 'repo' },
      { href: 'https://habitum-api.lcstoti.dev', kind: 'live' }
    ]
  },
  {
    slug: 'prato-do-dia',
    logoSrc: '/prato-do-dia-icon.jpg',
    coverSrc: '/prato-do-dia-thumb.png',
    videoUrl: 'https://youtu.be/bv4MXFcel1k',
    stack: ['ASP.NET Core MVC', 'MySQL', 'Azure'],
    links: [
      { href: 'https://github.com/lcstoti/pratododia', kind: 'repo' },
      { href: 'https://pratododia.lcstoti.dev/', kind: 'live' }
    ]
  },
  {
    slug: 'pc-certo',
    logoSrc: '/pc-certo-icon.png',
    coverSrc: '/pc-certo-thumb.png',
    videoUrl: 'https://youtu.be/E1K-Ypvkti0',
    stack: ['HTML', 'CSS', 'JavaScript'],
    links: [
      { href: 'https://github.com/LcsToti/PC-Certo', kind: 'repo' },
      { href: 'https://pc-certo.lcstoti.dev/', kind: 'live' }
    ]
  }
]

const projectTextByLocale: Record<Locale, Record<ProjectSlug, LocalizedProject>> = {
  pt: {
    'beleza-natural': {
      name: 'Beleza Natural',
      type: 'Projeto com cliente real',
      summary:
        'Sistema de gestão e agendamento para salão de beleza, com área pública, painel administrativo, API .NET e automações via WhatsApp.',
      logoAlt: 'Logo do Beleza Natural',
      coverAlt: 'Tela principal do sistema Beleza Natural',
      points: [
        'Construí uma **API REST em .NET** para agendamentos, autenticação e gestão operacional do salão.',
        'Implementei fluxos públicos e administrativos no **front-end em React e TypeScript**.',
        'Desenvolvi um **bot em Node.js** para lembretes, confirmações de agendamento e envio de código de login via WhatsApp.',
        'Integrei API e bot com **RabbitMQ**, usando **Redis** para sessão e cache no serviço de mensagens.',
        'Configurei deploy com **Docker e GitHub Actions**, reduzindo um processo manual de até 1 hora para cerca de 5 minutos.',
        'Atuei em levantamento de requisitos, documentação técnica, testes funcionais, correções e manutenção evolutiva.'
      ],
      highlight: 'Cliente real, deploy automatizado e integração com WhatsApp.',
      linkLabels: { repo: 'Repositório', live: 'Online' }
    },
    comply: {
      name: 'Comply',
      type: 'Projeto em equipe premiado',
      summary:
        'Sistema acadêmico em equipe com múltiplos serviços, autenticação, mensageria e foco em arquitetura, consistência de dados e qualidade de entrega.',
      logoAlt: 'Logo do Comply',
      coverAlt: 'Tela principal do sistema Comply',
      points: [
        'Atuei em backend e frontend em um projeto de maior complexidade técnica.',
        'Desenvolvi microsserviço orientado ao domínio, aplicando **DDD e Clean Architecture**.',
        'Implementei **integração assíncrona** entre serviços com mensageria e consistência eventual.',
        'Participei de autenticação, autorização e controle de acesso no sistema.',
        'Contribuí com **testes unitários e de integração** para aumentar a confiabilidade da entrega.',
        'O projeto foi selecionado como destaque da turma.'
      ],
      highlight: 'Projeto em equipe reconhecido como destaque.',
      linkLabels: { repo: 'Repositório', live: 'Online' }
    },
    habitum: {
      name: 'Habitum',
      type: 'API backend',
      summary:
        'API para acompanhamento de hábitos, rotina e progressão do usuário, com autenticação, regras de domínio e persistência relacional.',
      logoAlt: 'Logo do Habitum',
      coverAlt: 'Tela principal do sistema Habitum',
      points: [
        'Desenvolvi a **lógica central de hábitos**, incluindo datas, frequências, status, streaks e pontuação.',
        'Separei regras de negócio das operações básicas para deixar o backend mais organizado.',
        'Implementei **autenticação, autorização e controle de acesso** aos recursos da API.',
        'Usei **DTOs** para padronizar contratos e evitar exposição de dados sensíveis.',
        'Movi atualizações automáticas para middleware, reduzindo processamento repetido em endpoints.',
        'Organizei o fluxo de desenvolvimento com Git/GitHub, branches, PRs e acompanhamento de issues.'
      ],
      highlight: 'Backend focado em regras de domínio, autenticação e consistência dos dados.',
      linkLabels: { repo: 'Repositório', live: 'API' }
    },
    'prato-do-dia': {
      name: 'Prato do Dia',
      type: 'Sistema web MVC',
      summary:
        'Sistema web em ASP.NET Core MVC para organização de pratos, informações e fluxo básico de uma aplicação com banco de dados.',
      logoAlt: 'Logo do Prato do Dia',
      coverAlt: 'Tela principal do sistema Prato do Dia',
      points: [
        'Desenvolvi a aplicação seguindo o padrão **MVC do ASP.NET Core**.',
        'Criei telas e fluxos básicos para cadastro, consulta e organização das informações.',
        'Usei **MySQL** para persistência dos dados da aplicação.',
        'Publiquei o projeto em ambiente hospedado na **Azure**.',
        'Mantive o projeto simples e direto, adequado ao objetivo acadêmico e ao escopo proposto.'
      ],
      highlight: 'Aplicação MVC com persistência relacional e publicação em nuvem.',
      linkLabels: { repo: 'Repositório', live: 'Online' }
    },
    'pc-certo': {
      name: 'PC Certo',
      type: 'Projeto web estático',
      summary:
        'Aplicação web para ajudar pessoas a escolher peças e montar um computador de acordo com necessidade, orçamento e custo-benefício.',
      logoAlt: 'Logo do PC Certo',
      coverAlt: 'Tela principal do sistema PC Certo',
      points: [
        'Construí uma **interface simples** para orientar a escolha de componentes de computador.',
        'Organizei o fluxo de recomendação com foco em **necessidade do usuário e custo-benefício**.',
        'Documentei contexto, especificação, interface, funcionalidades e plano de testes.',
        'Publiquei o projeto como aplicação estática em domínio próprio.',
        'Mantive a solução sem framework para praticar fundamentos de **HTML, CSS e JavaScript**.'
      ],
      highlight: 'Aplicação estática publicada, documentada e focada em orientação ao usuário.',
      linkLabels: { repo: 'Repositório', live: 'Online' }
    }
  },
  en: {
    'beleza-natural': {
      name: 'Beleza Natural',
      type: 'Real-client project',
      summary:
        'Management and scheduling system for a beauty salon, with a public area, admin dashboard, .NET API and WhatsApp automations.',
      logoAlt: 'Beleza Natural logo',
      coverAlt: 'Main screen of the Beleza Natural system',
      points: [
        'Built a **.NET REST API** for scheduling, authentication and operational salon management.',
        'Implemented public and administrative flows in the **React and TypeScript frontend**.',
        'Developed a **Node.js bot** for reminders, appointment confirmations and login codes through WhatsApp.',
        'Integrated the API and bot with **RabbitMQ**, using **Redis** for session and cache in the messaging service.',
        'Configured deployment with **Docker and GitHub Actions**, reducing a manual process from up to 1 hour to about 5 minutes.',
        'Worked on requirements discovery, technical documentation, functional testing, fixes and ongoing maintenance.'
      ],
      highlight: 'Real client, automated deployment and WhatsApp integration.',
      linkLabels: { repo: 'Repository', live: 'Live' }
    },
    comply: {
      name: 'Comply',
      type: 'Awarded team project',
      summary:
        'Academic team system with multiple services, authentication, messaging and focus on architecture, data consistency and delivery quality.',
      logoAlt: 'Comply logo',
      coverAlt: 'Main screen of the Comply system',
      points: [
        'Worked on backend and frontend in a project with higher technical complexity.',
        'Developed a domain-oriented microservice using **DDD and Clean Architecture**.',
        'Implemented **asynchronous integration** between services with messaging and eventual consistency.',
        'Contributed to authentication, authorization and access control in the system.',
        'Added **unit and integration tests** to improve delivery reliability.',
        'The project was selected as a class highlight.'
      ],
      highlight: 'Team project recognized as a highlight.',
      linkLabels: { repo: 'Repository', live: 'Live' }
    },
    habitum: {
      name: 'Habitum',
      type: 'Backend API',
      summary:
        'API for habit tracking, routine and user progression, with authentication, domain rules and relational persistence.',
      logoAlt: 'Habitum logo',
      coverAlt: 'Main screen of the Habitum system',
      points: [
        'Developed the **core habit logic**, including dates, frequencies, status, streaks and score.',
        'Separated business rules from basic operations to keep the backend more organized.',
        'Implemented **authentication, authorization and access control** for API resources.',
        'Used **DTOs** to standardize contracts and avoid exposing sensitive data.',
        'Moved automatic updates to middleware, reducing repeated processing in endpoints.',
        'Organized the development flow with Git/GitHub, branches, PRs and issue tracking.'
      ],
      highlight: 'Backend focused on domain rules, authentication and data consistency.',
      linkLabels: { repo: 'Repository', live: 'API' }
    },
    'prato-do-dia': {
      name: 'Prato do Dia',
      type: 'MVC web system',
      summary:
        'ASP.NET Core MVC web system for organizing dishes, information and a basic database-backed application flow.',
      logoAlt: 'Prato do Dia logo',
      coverAlt: 'Main screen of the Prato do Dia system',
      points: [
        'Built the application using the **ASP.NET Core MVC** pattern.',
        'Created basic screens and flows for registering, viewing and organizing information.',
        'Used **MySQL** for application data persistence.',
        'Published the project in an **Azure-hosted environment**.',
        'Kept the project simple and direct, aligned with the academic goal and proposed scope.'
      ],
      highlight: 'MVC application with relational persistence and cloud publishing.',
      linkLabels: { repo: 'Repository', live: 'Live' }
    },
    'pc-certo': {
      name: 'PC Certo',
      type: 'Static web project',
      summary:
        'Web application that helps people choose parts and assemble a computer based on needs, budget and cost-benefit.',
      logoAlt: 'PC Certo logo',
      coverAlt: 'Main screen of the PC Certo system',
      points: [
        'Built a **simple interface** to guide computer component selection.',
        'Organized the recommendation flow around **user needs and cost-benefit**.',
        'Documented context, specification, interface, features and test plan.',
        'Published the project as a static application on a custom domain.',
        'Kept the solution framework-free to practice **HTML, CSS and JavaScript** fundamentals.'
      ],
      highlight: 'Published and documented static application focused on user guidance.',
      linkLabels: { repo: 'Repository', live: 'Live' }
    }
  }
}

function buildProjects(locale: Locale): Project[] {
  return sharedProjects.map((sharedProject) => {
    const text = projectTextByLocale[locale][sharedProject.slug]

    return {
      slug: sharedProject.slug,
      name: text.name,
      type: text.type,
      summary: text.summary,
      logo: { src: sharedProject.logoSrc, alt: text.logoAlt },
      cover: { src: sharedProject.coverSrc, alt: text.coverAlt },
      videoUrl: sharedProject.videoUrl,
      stack: sharedProject.stack,
      points: text.points,
      highlight: text.highlight,
      links: sharedProject.links.map((link) => ({
        ...link,
        label: text.linkLabels[link.kind ?? 'live'] ?? link.href
      }))
    }
  })
}

export const projectsByLocale: Record<Locale, Project[]> = {
  pt: buildProjects('pt'),
  en: buildProjects('en')
}

export function getProject(locale: Locale, slug: string) {
  return projectsByLocale[locale].find((project) => project.slug === slug)
}
