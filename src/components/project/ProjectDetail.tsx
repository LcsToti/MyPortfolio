import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { externalLinkProps } from '@/lib/external-link'
import type { Project, SiteContent } from '@/types/site'

export function ProjectDetail({ project, content }: { project: Project; content: SiteContent }) {
  const projectsPath = content.locale === 'pt' ? '/pt/projetos' : '/en/projects'

  return (
    <article className="section-spacing">
      <div className="container">
        <Button asChild variant="ghost">
          <Link to={projectsPath}>
            <ArrowLeft className="h-4 w-4" />
            {content.detailLabels.back}
          </Link>
        </Button>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary">{project.type}</p>
            <h1 className="mt-4 text-4xl font-black tracking-normal sm:text-6xl">{project.name}</h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">{project.summary}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {project.links.map((link) => (
                <Button key={link.label} asChild variant="outline">
                  <a href={link.href} {...externalLinkProps}>
                    {link.label}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <Card>
              <CardContent>
                <h2 className="text-xl font-black">{content.detailLabels.responsibilities}</h2>
                <ul className="mt-5 space-y-3">
                  {project.points.map((point) => (
                    <li key={point} className="leading-7 text-muted-foreground">
                      {point}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h2 className="text-xl font-black">{content.detailLabels.stack}</h2>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </article>
  )
}
