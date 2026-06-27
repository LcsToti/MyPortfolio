export type Locale = 'pt' | 'en'

export type ProjectSlug = 'beleza-natural' | 'comply' | 'habitum' | 'prato-do-dia' | 'pc-certo'

export type ProjectLink = {
  label: string
  href: string
}

export type Project = {
  slug: ProjectSlug
  name: string
  type: string
  summary: string
  stack: string[]
  points: string[]
  highlight?: string
  links: ProjectLink[]
}

export type SkillGroup = {
  title: string
  items: string[]
}

export type SiteContent = {
  locale: Locale
  basePath: string
  alternatePath: string
  nav: {
    projects: string
    experience: string
    skills: string
    contact: string
  }
  hero: {
    eyebrow: string
    title: string
    subtitle: string
    projectCta: string
    linkedinCta: string
    githubCta: string
    imageAlt: string
  }
  quickProofs: string[]
  featured: {
    label: string
    title: string
    description: string
    cta: string
  }
  sections: {
    projectsTitle: string
    projectsDescription: string
    experienceTitle: string
    experienceDescription: string
    skillsTitle: string
    skillsDescription: string
    contactTitle: string
    contactDescription: string
  }
  experienceItems: string[]
  skillGroups: SkillGroup[]
  contactLinks: ProjectLink[]
  projectsPage: {
    title: string
    description: string
  }
  detailLabels: {
    overview: string
    stack: string
    responsibilities: string
    back: string
    live: string
    repo: string
  }
}