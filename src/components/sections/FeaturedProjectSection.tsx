import { ArrowRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import type { SiteContent } from '@/types/site'

export function FeaturedProjectSection({ content }: { content: SiteContent }) {
  const href = content.locale === 'pt' ? '/pt/projetos/beleza-natural' : '/en/projects/beleza-natural'

  return (
    <section className="section-spacing border-b">
      <div className="container">
        <Card data-animate="scale-in" className="overflow-hidden">
          <CardContent className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-primary">
                <Sparkles className="h-4 w-4" />
                {content.featured.label}
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-normal sm:text-5xl">{content.featured.title}</h2>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">{content.featured.description}</p>
              <Button asChild className="mt-6">
                <Link to={href}>
                  {content.featured.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="aspect-video overflow-hidden rounded-lg border bg-muted">
              <iframe
                src="https://www.youtube.com/embed/oRiqmRdPEjA?start=52"
                title="Beleza Natural - demonstracao em video"
                className="h-full w-full"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
