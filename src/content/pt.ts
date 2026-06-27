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
    title: 'Desenvolvedor de Software focado em .NET, React, APIs e produtos web.',
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
    cta: 'Ver case'
  },
  sections: {
    projectsTitle: 'Projetos selecionados',
    projectsDescription:
      'Uma seleção de sistemas em equipe, pessoais e com cliente real, com foco em backend, integrações, entrega e manutenção.',
    experienceTitle: 'Experiência e trajetória',
    experienceDescription:
      'Minha trajetória combina formação em ADS na PUC Minas com projetos práticos de software, passando por planejamento, documentação, desenvolvimento, hospedagem e manutenção.',
    skillsTitle: 'Skills',
    skillsDescription: 'Ferramentas que uso para construir APIs, interfaces, integrações e ambientes de entrega.',
    contactTitle: 'Contato',
    contactDescription:
      'Aberto a oportunidades e conversas técnicas em desenvolvimento .NET, APIs, integrações e sistemas web.'
  },
  experienceItems: [
    'Formação em Análise e Desenvolvimento de Sistemas na PUC Minas, com base aplicada em projetos web, APIs e documentação técnica.',
    'No Espaço Beleza Natural, atuei no desenvolvimento de sistema de gestão e agendamento, com API .NET, autenticação, validações, CI/CD, Docker, VM Oracle e automações via WhatsApp.',
    'No Comply, trabalhei em um projeto de alta complexidade com múltiplos serviços, DDD, Clean Architecture, mensageria, consistência eventual, autenticação/autorização e testes.',
    'No Habitum, estruturei a API backend para acompanhamento de hábitos, regras de domínio, controle de acesso, DTOs, autenticação e organização do fluxo com Git/GitHub.'
  ],
  skillGroups: [
    { title: 'Backend', items: ['C#', '.NET', 'ASP.NET Core', 'Entity Framework Core', 'APIs REST'] },
    { title: 'Frontend', items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'JavaScript'] },
    { title: 'Banco de dados', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQL Server', 'SQL'] },
    { title: 'Infra/DevOps', items: ['Docker', 'GitHub Actions', 'Nginx', 'Azure', 'Oracle Cloud'] },
    { title: 'Integrações/automação', items: ['RabbitMQ', 'Redis', 'WhatsApp/Baileys', 'MassTransit', 'Node.js'] }
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
    overview: 'Resumo',
    stack: 'Stack',
    responsibilities: 'Principais pontos',
    back: 'Voltar para projetos',
    live: 'Online',
    repo: 'Repositório'
  }
}