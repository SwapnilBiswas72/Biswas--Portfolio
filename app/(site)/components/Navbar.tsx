'use client'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import { Button } from './Button'

const links = [
  { id: 'about', label: 'About me' },
  { id: 'skills', label: 'Skills' },
  { id: 'publications', label: 'Portfolio' }
]

export default function Navbar(){
  return (
    <div className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-neutral-950/50 border-b border-neutral-200/60 dark:border-neutral-800/60">
      <div className="container flex items-center justify-between h-[64px]">
        <Link href="#" className="font-semibold tracking-tight text-lg">SB</Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.id} href={`#${l.id}`} className="text-sm hover:text-brand">{l.label}</a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contact">
            <Button className="rounded-full bg-white text-neutral-900 border border-neutral-200 px-4 py-2 hover:bg-neutral-100 dark:bg-neutral-900 dark:text-neutral-100 dark:border-neutral-700">
              CONTACT ME
            </Button>
          </a>
          <ThemeToggle/>
        </div>
      </div>
    </div>
  )
}