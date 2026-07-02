import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { Toaster } from '@/components/ui/sonner'

export function App() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (!hash) {
      return
    }

    const targetId = decodeURIComponent(hash.replace('#', ''))
    const animationFrame = window.requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })
    })

    return () => window.cancelAnimationFrame(animationFrame)
  }, [hash, pathname])

  useEffect(() => {
    const animatedElements = Array.from(document.querySelectorAll<HTMLElement>('[data-animate]'))

    if (!animatedElements.length) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.16, rootMargin: '0px 0px -48px 0px' }
    )

    animatedElements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [pathname])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <Toaster position="bottom-right" richColors />
    </div>
  )
}
