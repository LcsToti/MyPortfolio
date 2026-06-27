import { enContent } from '@/content/en'
import { ptContent } from '@/content/pt'
import type { Locale } from '@/types/site'

export const contentByLocale = {
  pt: ptContent,
  en: enContent
} satisfies Record<Locale, typeof ptContent>
