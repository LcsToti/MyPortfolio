import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import type { SiteContent } from '@/types/site'

const experienceIconAssets = [
  { titlePart: 'Beleza', src: '/beleza-natural-icon.webp', alt: 'Icone do Beleza Natural' },
  { titlePart: 'Comply', src: '/comply-icon.webp', alt: 'Icone do Comply' },
  { titlePart: 'Habitum', src: '/habitum-icon.webp', alt: 'Icone do Habitum' }
]

function getExperienceIcon(title: string) {
  return experienceIconAssets.find((icon) => title.includes(icon.titlePart))
}

export function ExperienceSection({ content }: { content: SiteContent }) {
  return (
    <section id="experience" className="section-spacing border-b bg-card/35" aria-labelledby="experience-heading">
      <div className="container grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-12">
        <div data-animate="fade-up" className="lg:sticky lg:top-24 lg:self-start">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary">
            {content.nav.experience}
          </p>
          <h2
            id="experience-heading"
            data-section-heading
            className="mt-4 text-3xl font-black tracking-normal text-foreground transition-colors sm:text-4xl"
          >
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
          {content.experience.cards.map((experience) => {
            const icon = getExperienceIcon(experience.title)

            return (
              <Card
                key={experience.title}
                data-animate="fade-up"
                className="border-primary/22 bg-[#f7f0e7] text-card-foreground shadow-none transition-colors hover:border-primary/45 dark:border-primary/35 dark:bg-secondary dark:text-secondary-foreground"
              >
                <CardContent className="p-5 sm:p-6">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-3">
                      {icon ? (
                        <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-primary/30 bg-[#fff9f1] dark:border-primary/45 dark:bg-background">
                          <img src={icon.src} alt={icon.alt} className="h-full w-full object-cover object-center" />
                        </div>
                      ) : null}
                      <div>
                        <h3 className="text-xl font-black tracking-normal">{experience.title}</h3>
                        <p className="mt-2 text-sm font-semibold text-primary dark:text-primary">{experience.role}</p>
                      </div>
                    </div>
                    <p className="w-fit shrink-0 text-sm italic leading-6 text-primary dark:text-muted-foreground sm:text-right">
                      {experience.period}
                    </p>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-muted-foreground dark:text-muted-foreground">{experience.description}</p>

                  <ul className="mt-5 grid gap-2 text-sm leading-6 text-muted-foreground dark:text-muted-foreground">
                    {experience.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary dark:bg-primary" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {experience.stack.map((item) => (
                      <Badge
                        key={item}
                        className="border-primary/35 bg-[#fff9f1] text-primary hover:bg-primary hover:text-primary-foreground dark:border-primary/45 dark:bg-background dark:text-primary"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
