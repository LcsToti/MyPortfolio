import { Boxes, Database, Monitor, Server, Workflow } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { SectionHeading } from '@/components/sections/SectionHeading'
import type { SiteContent } from '@/types/site'

const skillIcons = [
  { Icon: Server, className: 'text-slate-500 dark:text-slate-300' },
  { Icon: Monitor, className: 'text-cyan-600 dark:text-cyan-300' },
  { Icon: Database, className: 'text-rose-600 dark:text-rose-300' },
  { Icon: Boxes, className: 'text-blue-600 dark:text-blue-300' },
  { Icon: Workflow, className: 'text-violet-600 dark:text-violet-300' }
]

export function SkillsSection({ content }: { content: SiteContent }) {
  return (
    <section id="skills" className="section-spacing border-b">
      <div className="container">
        <SectionHeading title={content.sections.skillsTitle} description={content.sections.skillsDescription} />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {content.skillGroups.map((group, index) => {
            const { Icon, className } = skillIcons[index] ?? skillIcons[0]

            return (
              <Card key={group.title} data-animate="scale-in">
                <CardContent className="p-5">
                  <div className="flex items-center gap-2">
                    <Icon className={`h-4 w-4 ${className}`} />
                    <h3 className="font-black">{group.title}</h3>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Badge key={item}>{item}</Badge>
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
