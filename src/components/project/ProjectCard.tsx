import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import type { Locale, Project } from '@/types/site'

export function ProjectCard({ project, locale }: { project: Project; locale: Locale }) {
  const href = locale === 'pt' ? `/pt/projetos/${project.slug}` : `/en/projects/${project.slug}`

  return (
    <Link to={href} className="group block h-full">
      <Card className="h-full transition-transform duration-200 group-hover:-translate-y-1">
        <CardContent className="flex h-full flex-col p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">{project.type}</p>
              <h3 className="mt-3 text-xl font-black">{project.name}</h3>
            </div>
            <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
          </div>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">{project.summary}</p>
          {project.highlight ? <p className="mt-4 text-sm font-semibold">{project.highlight}</p> : null}
          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.slice(0, 5).map((item) => (
              <Badge key={item}>{item}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
