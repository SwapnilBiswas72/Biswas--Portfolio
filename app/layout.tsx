import './(site)/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './(site)/components/Navbar'
import { ThemeProvider } from './(site)/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Swapnil Biswas — Portfolio',
  description: 'Modern academic & research portfolio'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Navbar/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}