import { ContactSection } from '@/components/sections/ContactSection'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { FeaturedProjectSection } from '@/components/sections/FeaturedProjectSection'
import { HeroSection } from '@/components/sections/HeroSection'
import { ProofSection } from '@/components/sections/ProofSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { contentByLocale } from '@/content'
import type { Locale } from '@/types/site'

export function HomePage({ locale }: { locale: Locale }) {
  const content = contentByLocale[locale]
  document.title =
    locale === 'pt'
      ? 'Lucas Toti | Desenvolvedor Full Stack .NET e React'
      : 'Lucas Toti | Full Stack .NET and React Developer'

  return (
    <>
      <HeroSection content={content} />
      <ProofSection items={content.quickProofs} />
      <FeaturedProjectSection content={content} />
      <ProjectsSection content={content} />
      <ExperienceSection content={content} />
      <SkillsSection content={content} />
      <ContactSection content={content} />
    </>
  )
}
