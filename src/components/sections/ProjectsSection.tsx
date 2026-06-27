import { ProjectCard } from '@/components/project/ProjectCard'
import { SectionHeading } from '@/components/sections/SectionHeading'
import { projectsByLocale } from '@/content/projects'
import type { SiteContent } from '@/types/site'

export function ProjectsSection({ content }: { content: SiteContent }) {
  const projects = projectsByLocale[content.locale]

  return (
    <section id="projects" className="section-spacing border-b">
      <div className="container">
        <SectionHeading title={content.sections.projectsTitle} description={content.sections.projectsDescription} />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} locale={content.locale} />
          ))}
        </div>
      </div>
    </section>
  )
}
