import { SectionHead } from '@/app/(site)/components/SectionHead'
import { Card } from '@/app/(site)/components/Card'
import { Trophy } from 'lucide-react'
import { portfolioData } from '@/data/portfolioData'

export default function Honors() {
  return (
    <section id="honors" className="section scroll-mt-24">
      <SectionHead title="Honors & Awards" />
      <div className="grid md:grid-cols-2 gap-4">
        {(portfolioData as any).honors.map((h: any, i: number) => (
          <Card key={i}>
            <div className="flex items-start gap-3">
              <Trophy className="h-5 w-5 mt-1 text-brand" />
              <div>
                <h3 className="font-semibold">{h.title}</h3>
                <p className="text-sm text-neutral-500">{h.institution}</p>
                {(h.year || h.period) && (<p className="text-sm mt-1">{h.year || h.period}</p>)}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}