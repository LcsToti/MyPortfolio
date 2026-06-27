import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import type { SiteContent } from '@/types/site'

export function ExperienceSection({ content }: { content: SiteContent }) {
  return (
    <section id="experience" className="section-spacing border-b bg-card/35" aria-labelledby="experience-heading">
      <div className="container grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-12">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary">
            {content.nav.experience}
          </p>
          <h2 id="experience-heading" className="mt-4 text-3xl font-black tracking-normal text-foreground sm:text-4xl">
            {content.sections.experienceTitle}
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">{content.sections.experienceDescription}</p>
          <p className="mt-5 border-l-2 border-primary pl-4 text-sm font-semibold leading-6 text-foreground">
            {content.experience.positioning}
          </p>

          <Card className="mt-8 shadow-none">
            <CardContent className="p-5">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                {content.locale === 'pt' ? 'Formação' : 'Education'}
              </p>
              <h3 className="mt-3 text-lg font-black">{content.experience.education.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{content.experience.education.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {content.experience.education.labels.map((label) => (
                  <Badge key={label}>{label}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          {content.experience.cards.map((experience) => (
            <Card key={experience.title} className="shadow-none transition-colors hover:border-primary/45">
              <CardContent className="p-5 sm:p-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-black tracking-normal text-foreground">{experience.title}</h3>
                    <p className="mt-2 text-sm font-semibold text-primary">{experience.role}</p>
                  </div>
                  <Badge className="w-fit shrink-0 bg-background text-foreground">{experience.period}</Badge>
                </div>

                <p className="mt-4 text-sm leading-6 text-muted-foreground">{experience.description}</p>

                <ul className="mt-5 grid gap-2 text-sm leading-6 text-muted-foreground">
                  {experience.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {experience.stack.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}