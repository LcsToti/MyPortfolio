import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { SectionHeading } from '@/components/sections/SectionHeading'
import type { SiteContent } from '@/types/site'

export function ExperienceSection({ content }: { content: SiteContent }) {
  return (
    <section id="experience" className="section-spacing border-b bg-card/35">
      <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionHeading title={content.sections.experienceTitle} description={content.sections.experienceDescription} />
        <div className="relative space-y-4 pl-8 before:absolute before:left-3 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-border">
          {content.experienceItems.map((item, index) => (
            <div key={item} className="relative">
              <span className="absolute -left-[1.86rem] top-6 h-3 w-3 rounded-full border-2 border-background bg-primary" />
              <Card>
                <CardContent className="p-5">
                  <Badge>{String(index + 1).padStart(2, '0')}</Badge>
                  <p className="mt-4 leading-7 text-muted-foreground">{item}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}