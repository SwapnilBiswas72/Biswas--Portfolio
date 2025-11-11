import { SectionHead } from '@/app/(site)/components/SectionHead'
import { Card } from '@/app/(site)/components/Card'
import { portfolioData } from '@/data/portfolioData'
export default function About(){
  const a = (portfolioData as any).about
  return (
    <section id="about" className="section scroll-mt-24">
      <SectionHead title="About" />
      <Card><p className="leading-relaxed">{a.description}</p></Card>
    </section>
  )
}