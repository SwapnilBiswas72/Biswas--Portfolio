'use client'
import { createContext, useContext, useEffect, useState } from 'react'
type Theme = 'light' | 'dark'
const ThemeCtx = createContext<{theme:Theme, setTheme:(t:Theme)=>void}>({theme:'light', setTheme:()=>{}})

export function ThemeProvider({ children }:{ children: React.ReactNode }){
  const [theme, setTheme] = useState<Theme>('light')
  useEffect(()=>{
    const saved = typeof window !== 'undefined' ? (localStorage.getItem('theme') as Theme|null) : null
    const sysDark = typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches
    const t = saved || (sysDark ? 'dark' : 'light')
    setTheme(t)
    document.documentElement.classList.toggle('dark', t === 'dark')
  }, [])
  useEffect(()=>{
    if(typeof window === 'undefined') return
    localStorage.setItem('theme', theme)
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])
  return <ThemeCtx.Provider value={{theme, setTheme}}>{children}</ThemeCtx.Provider>
}
export function useTheme(){ return useContext(ThemeCtx) }