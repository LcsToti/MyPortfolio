import { ArrowLeft, ArrowUpRight, CheckCircle2, Github, Globe2, ImageIcon, Layers3, ListChecks, Youtube } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { externalLinkProps } from '@/lib/external-link'
import type { Project, SiteContent } from '@/types/site'

function getProjectInitials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function getYouTubeEmbedUrl(url: string) {
  try {
    const parsedUrl = new URL(url)

    if (parsedUrl.hostname.includes('youtu.be')) {
      return `https://www.youtube.com/embed/${parsedUrl.pathname.replace('/', '')}`
    }

    if (parsedUrl.pathname.includes('/embed/')) {
      return url
    }

    const videoId = parsedUrl.searchParams.get('v')
    return videoId ? `https://www.youtube.com/embed/${videoId}` : url
  } catch {
    return url
  }
}

function getLinkIcon(kind: Project['links'][number]['kind']) {
  if (kind === 'repo') {
    return <Github className="h-4 w-4 text-foreground" />
  }

  if (kind === 'live') {
    return <Globe2 className="h-4 w-4 text-emerald-600 dark:text-emerald-300" />
  }

  return <ArrowUpRight className="h-4 w-4 text-primary" />
}

function renderStrongText(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={`${part}-${index}`} className="font-bold text-foreground">{part.slice(2, -2)}</strong>
    }

    return part
  })
}

export function ProjectDetail({ project, content }: { project: Project; content: SiteContent }) {
  const projectsPath = content.locale === 'pt' ? '/pt/projetos' : '/en/projects'
  const mediaLabel = content.locale === 'pt' ? 'Imagem principal' : 'Main screen'
  const videoLabel = content.locale === 'pt' ? 'Demonstração em vídeo' : 'Video demo'
  const embedUrl = getYouTubeEmbedUrl(project.videoUrl)

  return (
    <article className="section-spacing">
      <div className="container">
        <Button asChild variant="ghost">
          <Link to={projectsPath}>
            <ArrowLeft className="h-4 w-4" />
            {content.detailLabels.back}
          </Link>
        </Button>

        <div className="mt-8 grid items-start gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div data-animate="fade-up">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-primary/35 bg-background text-lg font-black text-primary">
                {project.logo.src ? (
                  <img src={project.logo.src} alt={project.logo.alt} className="h-full w-full object-cover object-center" />
                ) : (
                  getProjectInitials(project.name)
                )}
              </div>
              <h1 className="max-w-[11ch] text-4xl font-black leading-[0.95] tracking-normal sm:max-w-none sm:text-5xl lg:text-6xl">{project.name}</h1>
            </div>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">{project.summary}</p>

            {project.links.length ? (
              <div className="mt-6 flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <Button key={link.label} asChild variant="outline">
                    <a href={link.href} {...externalLinkProps}>
                      {getLinkIcon(link.kind)}
                      {link.label}
                    </a>
                  </Button>
                ))}
              </div>
            ) : null}
          </div>

          <Card data-animate="scale-in" className="overflow-hidden self-start">
            <CardContent className="p-0">
              <div className="aspect-video bg-muted">
                {project.cover.src ? (
                  <img src={project.cover.src} alt={project.cover.alt} className="h-full w-full object-cover object-center" />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center gap-3 px-6 text-center text-muted-foreground">
                    <ImageIcon className="h-10 w-10 text-sky-600 dark:text-sky-300" />
                    <p className="text-sm font-semibold text-foreground">{mediaLabel}</p>
                    <p className="text-sm">{project.cover.alt}</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 grid items-start gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <Card data-animate="fade-up" className="overflow-hidden self-start">
            <CardContent className="p-0">
              <div className="flex items-center gap-2 border-b px-5 py-4">
                <Youtube className="h-5 w-5 text-[#ff0000]" />
                <h2 className="text-xl font-black">{videoLabel}</h2>
              </div>
              <div className="aspect-video bg-muted">
                <iframe
                  src={embedUrl}
                  title={`${project.name} - ${videoLabel}`}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <Card data-animate="fade-up">
              <CardContent>
                <div className="flex items-center gap-2">
                  <ListChecks className="h-5 w-5 text-amber-600 dark:text-amber-300" />
                  <h2 className="text-xl font-black">{content.detailLabels.responsibilities}</h2>
                </div>
                <ul className="mt-5 space-y-3">
                  {project.points.map((point) => (
                    <li key={point} className="flex gap-3 leading-7 text-muted-foreground">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-300" />
                      <span>{renderStrongText(point)}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card data-animate="fade-up">
              <CardContent>
                <div className="flex items-center gap-2">
                  <Layers3 className="h-5 w-5 text-indigo-600 dark:text-indigo-300" />
                  <h2 className="text-xl font-black">{content.detailLabels.stack}</h2>
                </div>
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
