import { Briefcase, Code2, GraduationCap } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import type { SiteContent } from '@/types/site'

const highlightIcons = [
  { Icon: Code2, className: 'text-cyan-600 dark:text-cyan-300' },
  { Icon: Briefcase, className: 'text-rose-600 dark:text-rose-300' },
  { Icon: GraduationCap, className: 'text-blue-600 dark:text-blue-300' }
]

export function AboutSection({ content }: { content: SiteContent }) {
  return (
    <section id="about" className="section-spacing border-b bg-card/35">
      <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-12">
        <div>
          <h2 data-section-heading className="text-3xl font-black tracking-normal text-foreground transition-colors sm:text-4xl">
            {content.sections.aboutTitle}
          </h2>
          <p data-animate="fade-up" className="mt-6 max-w-2xl text-lg leading-8 text-foreground">
            {content.about.intro}
          </p>
        </div>

        <div className="grid gap-6">
          <div data-animate="fade-up" className="space-y-4 text-base leading-7 text-muted-foreground">
            {content.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {content.about.highlights.map((highlight, index) => {
              const { Icon, className } = highlightIcons[index] ?? highlightIcons[0]

              return (
                <Card key={highlight.label} data-animate="scale-in" className="shadow-none">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-2">
                      <Icon className={`h-4 w-4 ${className}`} />
                      <h3 className="font-black">{highlight.label}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{highlight.text}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}