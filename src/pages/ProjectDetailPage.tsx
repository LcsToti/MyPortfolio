import { Link, useParams } from 'react-router-dom'
import { ProjectDetail } from '@/components/project/ProjectDetail'
import { Button } from '@/components/ui/button'
import { contentByLocale } from '@/content'
import { getProject } from '@/content/projects'
import type { Locale } from '@/types/site'

export function ProjectDetailPage({ locale }: { locale: Locale }) {
  const { slug } = useParams()
  const content = contentByLocale[locale]
  const project = getProject(locale, slug ?? '')
  const projectsPath = locale === 'pt' ? '/pt/projetos' : '/en/projects'

  if (!project) {
    document.title = locale === 'pt' ? 'Projeto não encontrado | Lucas Toti' : 'Project not found | Lucas Toti'

    return (
      <section className="section-spacing">
        <div className="container max-w-2xl">
          <h1 className="text-4xl font-black">
            {locale === 'pt' ? 'Projeto não encontrado' : 'Project not found'}
          </h1>
          <p className="mt-4 text-muted-foreground">
            {locale === 'pt'
              ? 'O projeto solicitado não existe ou teve o endereço alterado.'
              : 'The requested project does not exist or its address has changed.'}
          </p>
          <Button asChild className="mt-6">
            <Link to={projectsPath}>{content.detailLabels.back}</Link>
          </Button>
        </div>
      </section>
    )
  }

  document.title = `${project.name} | Lucas Toti`

  return <ProjectDetail project={project} content={content} />
}
