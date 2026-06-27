import { Link, useLocation } from 'react-router-dom'
import { contentByLocale } from '@/content'
import type { Locale } from '@/types/site'

function getLocaleFromPath(pathname: string): Locale {
  return pathname.startsWith('/en') ? 'en' : 'pt'
}

export function Footer() {
  const locale = getLocaleFromPath(useLocation().pathname)
  const content = contentByLocale[locale]

  return (
    <footer className="border-t">
      <div className="container flex flex-col gap-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>Lucas Toti</p>
        <div className="flex gap-4">
          <Link to={content.basePath}>{locale === 'pt' ? 'Início' : 'Home'}</Link>
          <Link to={locale === 'pt' ? '/pt/projetos' : '/en/projects'}>{content.nav.projects}</Link>
        </div>
      </div>
    </footer>
  )
}
