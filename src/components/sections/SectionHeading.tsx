export function SectionHeading({
  title,
  description
}: {
  title: string
  description: string
}) {
  return (
    <div data-animate="fade-up" className="max-w-2xl">
      <h2 className="text-3xl font-black tracking-normal text-foreground sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-muted-foreground">{description}</p>
    </div>
  )
}
