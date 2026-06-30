import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { externalLinkProps } from '@/lib/external-link'
import type { SiteContent } from '@/types/site'

export function HeroSection({ content }: { content: SiteContent }) {
  const projectsPath = content.locale === 'pt' ? '/pt/projetos' : '/en/projects'

  return (
    <section id="hero" className="subtle-grid border-b">
      <div className="container grid min-h-[calc(100vh-4rem)] items-center gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <div>
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.16em] text-primary">{content.hero.eyebrow}</p>
          <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-normal text-foreground sm:text-6xl">
            {content.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{content.hero.subtitle}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <Link to={projectsPath}>
                {content.hero.projectCta}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="ghost">
              <a href="https://linkedin.com/in/lcstoti" {...externalLinkProps}>{content.hero.linkedinCta}</a>
            </Button>
            <Button asChild variant="ghost">
              <a href="https://github.com/lcstoti" {...externalLinkProps}>{content.hero.githubCta}</a>
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:mx-0 lg:justify-self-end">
          <div className="absolute -left-4 top-8 hidden h-24 w-24 rounded-lg border bg-accent/20 lg:block" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg border bg-card shadow-soft">
            <img src="/me.png" alt={content.hero.imageAlt} className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}