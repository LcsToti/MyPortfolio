import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { SectionHeading } from '@/components/sections/SectionHeading'
import type { SiteContent } from '@/types/site'

export function SkillsSection({ content }: { content: SiteContent }) {
  return (
    <section id="skills" className="section-spacing border-b">
      <div className="container">
        <SectionHeading title={content.sections.skillsTitle} description={content.sections.skillsDescription} />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {content.skillGroups.map((group) => (
            <Card key={group.title}>
              <CardContent className="p-5">
                <h3 className="font-black">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
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
