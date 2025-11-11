import { SectionHead } from '@/app/(site)/components/SectionHead'
import { Card } from '@/app/(site)/components/Card'
import { portfolioData } from '@/data/portfolioData'
import { Sparkles } from 'lucide-react'

export default function ResearchInterests(){
  const items: string[] = (portfolioData as any).research_interests || []
  if(!items.length) return null
  return (
    <section id="research" className="section scroll-mt-24">
      <SectionHead title="Research Interests" subtitle="Core areas I focus on" />
      <Card>
        <div className="flex flex-wrap gap-2">
          {items.map((it, i)=>(<span key={i} className="badge"><Sparkles className="h-3.5 w-3.5"/>{it}</span>))}
        </div>
      </Card>
    </section>
  )
}