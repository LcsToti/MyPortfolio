import * as React from 'react'
import { cn } from '@/lib/utils'

export function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        'inline-flex cursor-default items-center rounded-md border border-primary/45 bg-background px-2.5 py-1 text-xs font-semibold text-primary transition-colors duration-200 hover:border-primary hover:bg-primary hover:text-primary-foreground',
        className
      )}
      {...props}
    />
  )
}
