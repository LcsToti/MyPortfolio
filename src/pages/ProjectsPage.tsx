import { ProjectCard } from '@/components/project/ProjectCard'
import { SectionHeading } from '@/components/sections/SectionHeading'
import { contentByLocale } from '@/content'
import { projectsByLocale } from '@/content/projects'
import type { Locale } from '@/types/site'

export function ProjectsPage({ locale }: { locale: Locale }) {
  const content = contentByLocale[locale]
  const projects = projectsByLocale[locale]
  document.title = locale === 'pt' ? 'Projetos | Lucas Toti' : 'Projects | Lucas Toti'

  return (
    <section className="section-spacing">
      <div className="container">
        <SectionHeading title={content.projectsPage.title} description={content.projectsPage.description} />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  )
}
