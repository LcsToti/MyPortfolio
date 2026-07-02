import { ArrowRight, Github, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { externalLinkProps } from '@/lib/external-link'
import type { SiteContent } from '@/types/site'

export function HeroSection({ content }: { content: SiteContent }) {
  const projectsPath = content.locale === 'pt' ? '/pt/projetos' : '/en/projects'
  const proofLoop = [...content.quickProofs, ...content.quickProofs]

  return (
    <section id="hero" className="subtle-grid border-b">
      <div className="container grid min-h-[calc(100vh-4rem)] items-center gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <div data-animate="fade-up">
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
            <Button asChild variant="ghost" className="group">
              <a href="https://linkedin.com/in/lcstoti" {...externalLinkProps}>
                <Linkedin className="h-4 w-4 text-[#0a66c2]" />
                {content.hero.linkedinCta}
              </a>
            </Button>
            <Button asChild variant="ghost" className="group">
              <a href="https://github.com/lcstoti" {...externalLinkProps}>
                <Github className="h-4 w-4" />
                {content.hero.githubCta}
              </a>
            </Button>
          </div>
        </div>

        <div data-animate="scale-in" className="relative mx-auto w-full max-w-[20rem] sm:max-w-sm lg:mx-0 lg:justify-self-end">
          <div className="absolute -left-4 top-8 hidden h-24 w-24 rounded-lg border bg-accent/20 lg:block" />
          <div className="relative aspect-[3/4] overflow-hidden rounded-lg border bg-card shadow-soft">
            <img src="/me.jpg" alt={content.hero.imageAlt} className="h-full w-full object-cover object-center" />
          </div>
          <div className="mt-5 overflow-hidden border-y bg-background/70 py-3 [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
            <div className="skill-marquee flex w-max gap-2">
              {proofLoop.map((item, index) => (
                <Badge key={`${item}-${index}`}>{item}</Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
