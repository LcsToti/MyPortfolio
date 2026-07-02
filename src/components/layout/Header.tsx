import { useState, type MouseEvent } from 'react'
import { Github, Linkedin } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { LanguageToggle } from '@/components/language/LanguageToggle'
import { ThemeToggle } from '@/components/theme/ThemeToggle'
import { Button } from '@/components/ui/button'
import { contentByLocale } from '@/content'
import { externalLinkProps } from '@/lib/external-link'
import { cn } from '@/lib/utils'
import type { Locale } from '@/types/site'

const pulseDurationMs = 600

function getLocaleFromPath(pathname: string): Locale {
  return pathname.startsWith('/en') ? 'en' : 'pt'
}

function scrollToHash(targetHash: string) {
  const targetId = decodeURIComponent(targetHash.replace('#', ''))
  document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })
}

export function Header() {
  const { pathname, hash } = useLocation()
  const [pulsingHref, setPulsingHref] = useState<string | null>(null)
  const locale = getLocaleFromPath(pathname)
  const content = contentByLocale[locale]
  const projectsPath = locale === 'pt' ? '/pt/projetos' : '/en/projects'
  const heroPath = `${content.basePath}#hero`
  const projectLink = { label: content.nav.projects, href: projectsPath }
  const sectionLinks = [
    { label: content.nav.experience, href: `${content.basePath}#experience`, hash: '#experience' },
    { label: content.nav.skills, href: `${content.basePath}#skills`, hash: '#skills' },
    { label: content.nav.contact, href: `${content.basePath}#contact`, hash: '#contact' }
  ]

  function pulseLink(href: string) {
    setPulsingHref(href)
    window.setTimeout(() => {
      setPulsingHref((currentHref) => (currentHref === href ? null : currentHref))
    }, pulseDurationMs)
  }

  function handleHashLinkClick(
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
    targetPath: string,
    targetHash: string
  ) {
    pulseLink(href)

    if (pathname === targetPath && hash === targetHash) {
      event.preventDefault()
      scrollToHash(targetHash)
    }
  }

  return (
    <header className="sticky top-0 z-40 border-b bg-background/88 backdrop-blur">
      <div className="container flex min-h-16 items-center justify-between gap-4">
        <Link
          to={heroPath}
          className={cn('inline-block text-base font-black tracking-normal transition-colors hover:text-primary', pulsingHref === heroPath && 'nav-link-pulse')}
          onClick={(event) => handleHashLinkClick(event, heroPath, content.basePath, '#hero')}
        >
          Lucas Toti
        </Link>

        <nav className="hidden items-center gap-5 md:flex" aria-label="Principal">
          {sectionLinks.map((link) => {
            const isActive = pathname === content.basePath && hash === link.hash

            return (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  'inline-block text-sm font-medium text-muted-foreground transition-colors hover:text-foreground',
                  isActive && 'text-primary',
                  pulsingHref === link.href && 'nav-link-pulse'
                )}
                onClick={(event) => handleHashLinkClick(event, link.href, content.basePath, link.hash)}
              >
                {link.label}
              </Link>
            )
          })}

          <span className="h-4 w-px bg-border" aria-hidden="true" />

          <Link
            to={projectLink.href}
            className={cn(
              'inline-block text-sm font-medium text-muted-foreground transition-colors hover:text-foreground',
              pathname.startsWith(projectsPath) && 'text-primary',
              pulsingHref === projectLink.href && 'nav-link-pulse'
            )}
            onClick={() => pulseLink(projectLink.href)}
          >
            {projectLink.label}
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="icon" className="group">
            <a href="https://linkedin.com/in/lcstoti" aria-label="LinkedIn" {...externalLinkProps}>
              <Linkedin className="h-4 w-4 text-[#0a66c2]" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon" className="group">
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
