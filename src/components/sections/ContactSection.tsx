import { useState } from 'react'
import { ArrowUpRight, LoaderCircle, Mail } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/sections/SectionHeading'
import { externalLinkProps } from '@/lib/external-link'
import type { ProjectLink, SiteContent } from '@/types/site'

const loadingDelayMs = 450

function getEmailFromLink(link: ProjectLink) {
  if (!link.href.startsWith('mailto:')) {
    return null
  }

  return link.href.replace('mailto:', '').split('?')[0]
}

function wait(ms: number) {
  return new Promise<void>((resolve) => {
    window.setTimeout(resolve, ms)
  })
}

export function ContactSection({ content }: { content: SiteContent }) {
  const [copyingEmail, setCopyingEmail] = useState<string | null>(null)

  async function handleCopyEmail(email: string) {
    setCopyingEmail(email)

    try {
      if (!navigator.clipboard) {
        throw new Error('Clipboard API unavailable')
      }

      await navigator.clipboard.writeText(email)
      await wait(loadingDelayMs)
      toast.success(content.locale === 'pt' ? 'Email copiado' : 'Email copied', {
        description: email
      })
    } catch (error: unknown) {
      toast.error(content.locale === 'pt' ? 'Não foi possível copiar o email' : 'Could not copy email')
    } finally {
      setCopyingEmail(null)
    }
  }

  return (
    <section id="contact" className="section-spacing">
      <div className="container grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <SectionHeading title={content.sections.contactTitle} description={content.sections.contactDescription} />
        <div className="flex flex-wrap gap-3">
          {content.contactLinks.map((link) => {
            const email = getEmailFromLink(link)

            if (email) {
              const isCopying = copyingEmail === email

              return (
                <Button key={link.label} type="button" variant="outline" disabled={isCopying} onClick={() => void handleCopyEmail(email)}>
                  {isCopying ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <Mail className="h-4 w-4" />}
                  {isCopying ? (content.locale === 'pt' ? 'Copiando...' : 'Copying...') : link.label}
                </Button>
              )
            }

            return (
              <Button key={link.label} asChild variant="outline">
                <a href={link.href} {...externalLinkProps}>
                  {link.label}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
            )
          })}
        </div>
      </div>
    </section>
  )
}