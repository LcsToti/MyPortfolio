import type { Locale, Project } from '@/types/site'

export const projectsByLocale: Record<Locale, Project[]> = {
  pt: [
    {
      slug: 'beleza-natural',
      name: 'Beleza Natural',
      type: 'Projeto com cliente real',
      summary: 'Sistema de gestão e agendamento para o salão Espaço Beleza Natural.',
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
      points: [
        'Desenvolvi API REST em .NET com regras de negócio para agendamentos, gestão operacional e autenticação.',
        'Implementei autenticação, controle de acesso, validações e fluxos de agendamento.',
        'Desenvolvi bot em Node.js para envio de lembretes, confirmações de agendamento e código de login via WhatsApp.',
        'Usei RabbitMQ para comunicação assíncrona entre API e bot e Redis para sessão/cache no bot.',
        'Implementei pipelines de CI/CD com GitHub Actions e Docker, reduzindo o deploy de até 1 hora para cerca de 5 minutos.',
        'Corrigi bugs em autenticação, segurança, migrações, validações e fluxos do WhatsApp.',
        'Apoiei levantamento de requisitos, documentação técnica, testes funcionais e manutenção evolutiva.'
      ],
      highlight: 'Cliente real, deploy automatizado e integração com WhatsApp.',
      links: [{ label: 'Demonstração', href: 'https://belezanatural.lcstoti.dev' }]
    },
    {
      slug: 'comply',
      name: 'Comply',
      type: 'Projeto em equipe premiado',
      summary:
        'Sistema em equipe com integração entre múltiplos serviços, foco em arquitetura, escalabilidade, consistência de dados e qualidade de entrega.',
      stack: ['.NET', 'MassTransit', 'MongoDB', 'Nginx', 'React', 'TypeScript'],
      points: [
        'Atuação em backend e frontend em um projeto de alta complexidade.',
        'Desenvolvimento de microsserviço orientado a domínio com DDD e Clean Architecture.',
        'Integração assíncrona entre serviços com mensageria e consistência eventual.',
        'Implementação de autenticação, autorização e controle de acesso.',
        'Testes unitários e de integração para aumentar a confiabilidade do sistema.',
        'Projeto selecionado como destaque da turma.'
      ],
      highlight: 'Projeto em equipe reconhecido como destaque.',
      links: [
        { label: 'Repositório', href: 'https://github.com/lcstoti/comply' },
        { label: 'Online', href: 'https://comply.lcstoti.dev' }
      ]
    },
    {
      slug: 'habitum',
      name: 'Habitum',
      type: 'API backend',
      summary: 'API para acompanhamento de hábitos, rotina e progressão do usuário, com autenticação e persistência relacional.',
      stack: ['.NET', 'MySQL', 'JWT', 'Refresh Token', 'DTOs', 'Git/GitHub'],
      points: [
        'Desenvolvi a lógica central de hábitos, incluindo datas, frequências, status, streaks e pontuação.',
        'Estruturei o backend com separação entre regras de negócio e operações básicas.',
        'Implementei autenticação, autorização e controle de acesso aos recursos da API.',
        'Usei DTOs para evitar exposição de dados sensíveis e padronizar contratos de requisição/resposta.',
        'Reduzi processamento desnecessário ao mover atualizações automáticas para middleware.',
        'Organizei o fluxo de desenvolvimento com Git/GitHub, branches, PRs e acompanhamento de issues.'
      ],
      highlight: 'Backend focado em regras de domínio, autenticação, contratos de API e consistência dos dados.',
      links: [
        { label: 'Repositório', href: 'https://github.com/lcstoti/habitum' },
        { label: 'API', href: 'https://habitum-api.lcstoti.dev' }
      ]
    },
    {
      slug: 'prato-do-dia',
      name: 'Prato do Dia',
      type: 'Sistema web MVC',
      summary: 'Sistema web desenvolvido com ASP.NET Core MVC.',
      stack: ['ASP.NET Core MVC', 'MySQL', 'Azure'],
      points: [
        'Desenvolvimento web com MVC.',
        'Persistência com MySQL.',
        'Deploy/hospedagem usando Azure.'
      ],
      links: [
        { label: 'Repositório', href: 'https://github.com/lcstoti/pratododia' },
        { label: 'Online', href: 'https://pratododia.lcstoti.dev/' }
      ]
    },
    {
      slug: 'pc-certo',
      name: 'PC Certo',
      type: 'Projeto web estático',
      summary: 'Aplicação web para auxiliar pessoas na escolha de peças e montagem de um computador adequado às próprias necessidades.',
      stack: ['HTML', 'CSS', 'JavaScript'],
      points: [
        'Construção de interface web simples e acessível para orientar a escolha de componentes.',
        'Organização do fluxo de recomendação com foco em custo-benefício e necessidade do usuário.',
        'Projeto documentado com contexto, especificação, interface, funcionalidades e plano de testes.',
        'Publicação como aplicação estática em domínio próprio.'
      ],
      highlight: 'Aplicação HTML/CSS/JS publicada e documentada.',
      links: [
        { label: 'Repositório', href: 'https://github.com/LcsToti/PC-Certo' },
        { label: 'Online', href: 'https://pc-certo.lcstoti.dev/' }
      ]
    }
  ],
  en: [
    {
      slug: 'beleza-natural',
      name: 'Beleza Natural',
      type: 'Real-client project',
      summary: 'Management and appointment scheduling system for Espaço Beleza Natural beauty salon.',
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
      points: [
        'Built a .NET REST API with business rules for scheduling, operational management and authentication.',
        'Implemented authentication, access control, validations and scheduling flows.',
        'Developed a Node.js bot for WhatsApp reminders, appointment confirmations and login codes.',
        'Used RabbitMQ for asynchronous communication between the API and bot, and Redis for session/cache in the bot.',
        'Implemented CI/CD pipelines with GitHub Actions and Docker, reducing deployment from up to 1 hour to about 5 minutes.',
        'Fixed bugs in authentication, security, migrations, validations and WhatsApp flows.',
        'Supported requirements discovery, technical documentation, functional testing and ongoing maintenance.'
      ],
      highlight: 'Real client, automated deployment and WhatsApp integration.',
      links: [{ label: 'Demo', href: 'https://belezanatural.lcstoti.dev' }]
    },
    {
      slug: 'comply',
      name: 'Comply',
      type: 'Awarded team project',
      summary:
        'Team-built system with integration between multiple services, focused on architecture, scalability, data consistency and delivery quality.',
      stack: ['.NET', 'MassTransit', 'MongoDB', 'Nginx', 'React', 'TypeScript'],
      points: [
        'Worked on backend and frontend in a high-complexity project.',
        'Developed a domain-oriented service with DDD and Clean Architecture.',
        'Integrated services asynchronously with messaging and eventual consistency.',
        'Implemented authentication, authorization and access control.',
        'Added unit and integration tests to improve system reliability.',
        'Project selected as a class highlight.'
      ],
      highlight: 'Team project recognized as a highlight.',
      links: [
        { label: 'Repository', href: 'https://github.com/lcstoti/comply' },
        { label: 'Live', href: 'https://comply.lcstoti.dev' }
      ]
    },
    {
      slug: 'habitum',
      name: 'Habitum',
      type: 'Backend API',
      summary: 'API for habit tracking, routine and user progression, with authentication and relational persistence.',
      stack: ['.NET', 'MySQL', 'JWT', 'Refresh Token', 'DTOs', 'Git/GitHub'],
      points: [
        'Developed the core habit logic, including dates, frequencies, status, streaks and score.',
        'Structured the backend with separation between business rules and basic operations.',
        'Implemented authentication, authorization and access control for API resources.',
        'Used DTOs to avoid exposing sensitive data and standardize request/response contracts.',
        'Reduced unnecessary processing by moving automatic updates to middleware.',
        'Organized the development flow with Git/GitHub, branches, PRs and issue tracking.'
      ],
      highlight: 'Backend focused on domain rules, authentication, API contracts and data consistency.',
      links: [
        { label: 'Repository', href: 'https://github.com/lcstoti/habitum' },
        { label: 'API', href: 'https://habitum-api.lcstoti.dev' }
      ]
    },
    {
      slug: 'prato-do-dia',
      name: 'Prato do Dia',
      type: 'MVC web system',
      summary: 'Web system developed with ASP.NET Core MVC.',
      stack: ['ASP.NET Core MVC', 'MySQL', 'Azure'],
      points: ['Built the MVC web application.', 'Used MySQL persistence.', 'Deployed/hosted using Azure.'],
      links: [
        { label: 'Repository', href: 'https://github.com/lcstoti/pratododia' },
        { label: 'Live', href: 'https://pratododia.lcstoti.dev/' }
      ]
    },
    {
      slug: 'pc-certo',
      name: 'PC Certo',
      type: 'Static web project',
      summary: 'Web application that helps people choose parts and assemble a computer that fits their needs.',
      stack: ['HTML', 'CSS', 'JavaScript'],
      points: [
        'Built a simple and accessible web interface to guide component selection.',
        'Organized the recommendation flow around cost-benefit and user needs.',
        'Documented context, specification, interface, features and test plan.',
        'Published the project as a static application on a custom domain.'
      ],
      highlight: 'Published and documented HTML/CSS/JS application.',
      links: [
        { label: 'Repository', href: 'https://github.com/LcsToti/PC-Certo' },
        { label: 'Live', href: 'https://pc-certo.lcstoti.dev/' }
      ]
    }
  ]
}

export function getProject(locale: Locale, slug: string) {
  return projectsByLocale[locale].find((project) => project.slug === slug)
}