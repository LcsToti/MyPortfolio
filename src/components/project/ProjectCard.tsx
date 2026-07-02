import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import type { Locale, Project } from '@/types/site'

function getProjectInitials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

export function ProjectCard({ project, locale }: { project: Project; locale: Locale }) {
  const href = locale === 'pt' ? `/pt/projetos/${project.slug}` : `/en/projects/${project.slug}`
  const detailsLabel = locale === 'pt' ? 'Ver detalhes' : 'View details'

  return (
    <Link to={href} className="group block h-full">
      <Card
        data-animate="scale-in"
        className="h-full transition-[border-color,box-shadow,transform] duration-200 group-hover:-translate-y-1 group-hover:border-primary/55 group-hover:shadow-[0_0_22px_hsl(var(--primary)/0.22)]"
      >
        <CardContent className="flex h-full flex-col p-5">
          <div className="flex items-start justify-between gap-4">
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-md border border-primary/35 bg-background text-sm font-black text-primary">
                {project.logo.src ? (
                  <img src={project.logo.src} alt={project.logo.alt} className="h-full w-full object-cover object-center" />
                ) : (
                  getProjectInitials(project.name)
                )}
              </div>
              <div className="min-w-0">
                <h3 className="text-xl font-black">{project.name}</h3>
                {project.cardBadge ? <Badge className="mt-2 px-2 py-0.5 text-[0.68rem]">{project.cardBadge}</Badge> : null}
              </div>
            </div>
            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-border bg-background px-2.5 py-1 text-xs font-bold text-muted-foreground transition-colors group-hover:border-primary/45 group-hover:text-primary">
              {detailsLabel}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </div>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">{project.summary}</p>
          {project.highlight ? <p className="mt-4 text-sm font-semibold">{project.highlight}</p> : null}
          <div className="mt-auto flex flex-wrap gap-2 pt-5">
            {project.stack.slice(0, 5).map((item) => (
              <Badge key={item}>{item}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
