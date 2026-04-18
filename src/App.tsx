import { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import CaseStudies from './components/CaseStudies'
import Playground from './components/Playground'
import VipCat from './components/VipCat'
import Contact from './components/Contact'

function useDarkMode() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false
    const saved = localStorage.getItem('brut-theme')
    if (saved) return saved === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    const root = document.documentElement
    if (isDark) root.classList.add('dark')
    else root.classList.remove('dark')
    localStorage.setItem('brut-theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return { isDark, toggle: () => setIsDark((v) => !v) }
}

export default function App() {
  const { isDark, toggle } = useDarkMode()

  return (
    <div className="min-h-screen pb-10">
      <Nav isDark={isDark} onToggleDark={toggle} />
      <main>
        <Hero />
        <CaseStudies />
        <Playground />
        <VipCat />
        <Contact />
      </main>
    </div>
  )
}
