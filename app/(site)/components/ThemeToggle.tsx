'use client'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from './ThemeProvider'
export default function ThemeToggle(){
  const { theme, setTheme } = useTheme()
  return (
    <button onClick={()=> setTheme(theme === 'dark' ? 'light' : 'dark')}
      className='inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200/60 dark:border-neutral-800/60 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors'
      aria-label='Toggle theme' title='Toggle theme'>
      {theme === 'dark' ? <Sun className='h-4 w-4'/> : <Moon className='h-4 w-4'/>}
    </button>
  )
}