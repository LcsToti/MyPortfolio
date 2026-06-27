import { Github, Linkedin } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { LanguageToggle } from '@/components/language/LanguageToggle'
import { ThemeToggle } from '@/components/theme/ThemeToggle'
import { Button } from '@/components/ui/button'
import { contentByLocale } from '@/content'
import { externalLinkProps } from '@/lib/external-link'
import type { Locale } from '@/types/site'

function getLocaleFromPath(pathname: string): Locale {
  return pathname.startsWith('/en') ? 'en' : 'pt'
}

export function Header() {
  const { pathname } = useLocation()
  const locale = getLocaleFromPath(pathname)
  const content = contentByLocale[locale]
  const projectsPath = locale === 'pt' ? '/pt/projetos' : '/en/projects'

  const navLinks = [
    { label: content.nav.projects, href: projectsPath },
    { label: content.nav.experience, href: `${content.basePath}#experience` },
    { label: content.nav.skills, href: `${content.basePath}#skills` },
    { label: content.nav.contact, href: `${content.basePath}#contact` }
  ]

  return (
    <header className="sticky top-0 z-40 border-b bg-background/88 backdrop-blur">
      <div className="container flex min-h-16 items-center justify-between gap-4">
        <Link to={content.basePath} className="text-base font-black tracking-normal">
          Lucas Toti
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Principal">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="icon">
            <a href="https://linkedin.com/in/lcstoti" aria-label="LinkedIn" {...externalLinkProps}>
              <Linkedin className="h-4 w-4" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <a href="https://github.com/lcstoti" aria-label="GitHub" {...externalLinkProps}>
              <Github className="h-4 w-4" />
            </a>
          </Button>
          <LanguageToggle locale={locale} />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
