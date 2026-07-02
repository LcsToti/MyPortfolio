import { type MouseEvent } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { contentByLocale } from '@/content'
import type { Locale } from '@/types/site'

function getLocaleFromPath(pathname: string): Locale {
  return pathname.startsWith('/en') ? 'en' : 'pt'
}

export function Footer() {
  const { pathname, hash } = useLocation()
  const locale = getLocaleFromPath(pathname)
  const content = contentByLocale[locale]
  const heroPath = `${content.basePath}#hero`

  function handleHeroClick(event: MouseEvent<HTMLAnchorElement>) {
    if (pathname !== content.basePath || hash !== '#hero') {
      return
    }

    event.preventDefault()
    document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="border-t">
      <div className="container flex flex-col gap-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>Lucas Toti</p>
        <div className="flex gap-4">
          <Link to={heroPath} onClick={handleHeroClick}>
            {locale === 'pt' ? 'Início' : 'Home'}
          </Link>
          <Link to={locale === 'pt' ? '/pt/projetos' : '/en/projects'}>{content.nav.projects}</Link>
        </div>
      </div>
    </footer>
  )
}
