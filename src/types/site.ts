export type Locale = 'pt' | 'en'

export type ProjectSlug = 'beleza-natural' | 'comply' | 'habitum' | 'prato-do-dia' | 'pc-certo'

export type ProjectLink = {
  label: string
  href: string
  kind?: 'repo' | 'live'
}

export type ProjectAsset = {
  src?: string
  alt: string
}

export type Project = {
  slug: ProjectSlug
  name: string
  type: string
  summary: string
  logo: ProjectAsset
  cover: ProjectAsset
  videoUrl: string
  stack: string[]
  points: string[]
  highlight?: string
  links: ProjectLink[]
}

export type SkillGroup = {
  title: string
  items: string[]
}

export type ExperienceCard = {
  title: string
  role: string
  period: string
  description: string
  points: string[]
  stack: string[]
}

export type EducationBlock = {
  title: string
  description: string
  labels: string[]
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
  experience: {
    positioning: string
    cards: ExperienceCard[]
    education: EducationBlock
  }
  skillGroups: SkillGroup[]
  contactLinks: ProjectLink[]
  projectsPage: {
    title: string
    description: string
  }
  detailLabels: {
    stack: string
    responsibilities: string
    back: string
  }
}
