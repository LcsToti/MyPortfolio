import { Link, useLocation } from 'react-router-dom'
import { Languages } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { Locale } from '@/types/site'

function getAlternatePath(pathname: string, locale: Locale) {
  if (locale === 'pt') {
    return pathname.replace(/^\/pt/, '/en').replace('/projetos', '/projects')
  }

  return pathname.replace(/^\/en/, '/pt').replace('/projects', '/projetos')
}

export function LanguageToggle({ locale }: { locale: Locale }) {
  const location = useLocation()
  const targetLocale = locale === 'pt' ? 'en' : 'pt'
  const targetPath = getAlternatePath(location.pathname, locale)

  return (
    <Button asChild variant="outline" size="sm">
      <Link to={targetPath} aria-label={`Mudar idioma para ${targetLocale.toUpperCase()}`}>
        <Languages className="h-4 w-4" />
        {targetLocale.toUpperCase()}
      </Link>
    </Button>
  )
}
