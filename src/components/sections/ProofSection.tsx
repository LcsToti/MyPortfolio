import { Badge } from '@/components/ui/badge'

export function ProofSection({ items }: { items: string[] }) {
  return (
    <section className="border-b bg-card/40 py-8">
      <div className="container flex flex-wrap gap-2">
        {items.map((item) => (
          <Badge key={item}>{item}</Badge>
        ))}
      </div>
    </section>
  )
}
