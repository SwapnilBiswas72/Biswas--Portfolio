'use client'

import { portfolioData } from '@/data/portfolioData'
import { Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '@/app/(site)/components/Button'

export default function Hero() {
  const a = (portfolioData as any).about

  return (
    <section className="relative min-h-[72vh] md:min-h-[82vh] overflow-hidden diagonal-hero">
      {/* Left light panel */}
      <div className="hero-left">
        <div className="mx-auto w-full max-w-3xl px-6 md:px-10 py-16 md:py-24">
          <div className="mb-10 md:mb-16">
            <div className="text-neutral-700 text-lg md:text-xl">Hi, I am</div>
            <h1 className="mt-2 text-4xl md:text-6xl font-extrabold tracking-tight text-neutral-900">
              Swapnil Biswas
            </h1>
            <p className="mt-3 text-neutral-600 text-base md:text-lg">
              Graduate Research Assistant · CVIP Lab (SIUE)
            </p>
          </div>

          {/* Social icons only */}
          <div className="mt-8 flex items-center gap-3">
            <a href={`mailto:${a.contact}`} className="social-btn" aria-label="Email" title="Email">
              <Mail className="h-5 w-5" />
            </a>
            {a.links?.github && (
              <a href={a.links.github} target="_blank" rel="noreferrer" className="social-btn" aria-label="GitHub" title="GitHub">
                <Github className="h-5 w-5" />
              </a>
            )}
            {a.links?.linkedin && (
              <a href={a.links.linkedin} target="_blank" rel="noreferrer" className="social-btn" aria-label="LinkedIn" title="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Right dark panel with photo */}
      <div className="hero-right">
        <div className="relative h-full w-full">
          <img
            src="/headshot.png"
            alt="Swapnil Biswas"
            className="absolute bottom-0 right-4 md:right-12 h-[56vh] md:h-[72vh] object-contain select-none drop-shadow-[0_24px_48px_rgba(0,0,0,0.35)]"
          />
        </div>
      </div>
    </section>
  )
}
