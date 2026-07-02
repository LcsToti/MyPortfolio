import type { SiteContent } from '@/types/site'

export const ptContent: SiteContent = {
  locale: 'pt',
  basePath: '/pt',
  alternatePath: '/en',
  nav: {
    projects: 'Projetos',
    experience: 'Experiência',
    skills: 'Skills',
    contact: 'Contato'
  },
  hero: {
    eyebrow: 'Olá, me chamo Lucas Toti.',
    title: 'Desenvolvedor de Software focado em .NET, React, APIs e sistemas web.',
    subtitle:
      'Atuo no desenvolvimento de APIs, integrações, automações, interfaces e deploy, participando de planejamento, documentação, hospedagem e manutenção de soluções web.',
    projectCta: 'Ver projetos',
    linkedinCta: 'LinkedIn',
    githubCta: 'GitHub',
    imageAlt: 'Foto de Lucas Toti'
  },
  quickProofs: [
    '.NET / C#',
    'APIs REST',
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
    label: 'Projeto destaque',
    title: 'Beleza Natural',
    description:
      'Sistema com cliente real para gestão e agendamento de salão, incluindo API .NET, autenticação, frontend React, automações via WhatsApp, CI/CD com GitHub Actions e deploy com Docker.',
    cta: 'Ver projeto'
  },
  sections: {
    projectsTitle: 'Projetos selecionados',
    projectsDescription:
      'Uma seleção de sistemas em equipe, pessoais e com cliente real, com foco em backend, integrações, entrega e manutenção.',
    experienceTitle: 'Experiência prática em sistemas',
    experienceDescription:
      'Projetos acadêmicos, pessoais e com cliente real onde atuei em back-end, front-end, integrações, deploy e manutenção.',
    skillsTitle: 'Skills',
    skillsDescription: 'Ferramentas que uso para construir APIs, interfaces, integrações e ambientes de entrega.',
    contactTitle: 'Contato',
    contactDescription:
      'Aberto a oportunidades e conversas técnicas em desenvolvimento .NET, APIs, integrações e sistemas web.'
  },
  experience: {
    positioning:
      'Track record técnico com entregas completas: do levantamento de requisitos à publicação, correção de bugs e manutenção evolutiva.',
    cards: [
      {
        title: 'Espaço Beleza Natural',
        role: 'Desenvolvedor de Software · Projeto com cliente real',
        period: 'jan/2026 – jun/2026',
        description:
          'Sistema de gestão e agendamento para salão de beleza, desenvolvido em contexto extensionista pela PUC Minas.',
        points: [
          'API REST em .NET com regras de negócio para agendamentos, gestão operacional e autenticação.',
          'Front-end em React/TypeScript para fluxos públicos e administrativos.',
          'Bot em Node.js para confirmações, lembretes e códigos de login via WhatsApp.',
          'Comunicação assíncrona entre API e bot com RabbitMQ e Redis para sessão/cache do bot.',
          'CI/CD com GitHub Actions e Docker, reduzindo deploy manual de até 1 hora para cerca de 5 minutos.'
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
        role: 'Desenvolvedor de Software · Projeto acadêmico em equipe',
        period: 'jul/2025 – dez/2025',
        description:
          'Projeto acadêmico de alta complexidade com integração entre múltiplos serviços, arquitetura, consistência de dados e qualidade de entrega.',
        points: [
          'Desenvolvimento de microsserviço orientado a domínio.',
          'Uso de DDD e Clean Architecture.',
          'Integração assíncrona com mensageria e consistência eventual.',
          'Implementação de autenticação, autorização e controle de acesso.',
          'Testes unitários e de integração; projeto selecionado como destaque da turma.'
        ],
        stack: ['.NET', 'MassTransit', 'MongoDB', 'Nginx', 'React', 'TypeScript', 'DDD', 'Clean Architecture']
      },
      {
        title: 'Habitum',
        role: 'Desenvolvedor Full Stack · Projeto acadêmico em equipe',
        period: 'jan/2025 – jun/2025',
        description:
          'Aplicação para acompanhamento de hábitos, rotina e progressão do usuário, com foco principal no back-end.',
        points: [
          'Desenvolvimento da lógica central de hábitos: datas, frequências, status, streaks e pontuação.',
          'Estruturação da API com separação entre regras de negócio e operações básicas.',
          'Autenticação, autorização e controle de acesso.',
          'Uso de DTOs para padronizar contratos e evitar exposição de dados sensíveis.',
          'Organização do fluxo com Git/GitHub, branches, PRs e issues; projeto selecionado como destaque da turma.'
        ],
        stack: ['.NET', 'MySQL', 'JWT', 'Refresh Token', 'DTOs', 'Git/GitHub', 'React Native', 'Expo']
      }
    ],
    education: {
      title: 'PUC Minas',
      description: 'Análise e Desenvolvimento de Sistemas · previsão de conclusão em jun/2026.',
      labels: ['ADS', 'PUC Minas', 'Projetos acadêmicos', 'Documentação técnica']
    }
  },
  skillGroups: [
    { title: 'Backend', items: ['C#', '.NET', 'ASP.NET Core', 'Entity Framework Core', 'APIs REST'] },
    { title: 'Frontend', items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'JavaScript'] },
    { title: 'Banco de dados', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQL Server', 'SQL'] },
    { title: 'Infra/DevOps', items: ['Docker', 'GitHub Actions', 'Nginx', 'Azure', 'Oracle Cloud'] },
    { title: 'Integrações', items: ['RabbitMQ', 'Redis', 'WhatsApp/Baileys', 'MassTransit', 'Node.js'] }
  ],
  contactLinks: [
    { label: 'LinkedIn', href: 'https://linkedin.com/in/lcstoti' },
    { label: 'GitHub', href: 'https://github.com/lcstoti' },
    { label: 'Email', href: 'mailto:lcstotidev@gmail.com' }
  ],
  projectsPage: {
    title: 'Projetos',
    description:
      'Cases e projetos que mostram construção de APIs, integração entre serviços, frontend, deploy e documentação.'
  },
  detailLabels: {
    stack: 'Stack',
    responsibilities: 'Principais pontos',
    back: 'Voltar para projetos'
  }
}