import { SectionHead } from '@/app/(site)/components/SectionHead'
import { Card } from '@/app/(site)/components/Card'
import { portfolioData } from '@/data/portfolioData'

export default function Experience(){
  const exp = (portfolioData as any).experience
  return (
    <section id="experience" className="section scroll-mt-24">
      <SectionHead title="Experience" subtitle="Research & Professional" />
      <div className="grid gap-4">
        {exp.map((x:any, i:number)=>(
          <Card key={i}>
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{x.position} — {x.institution}</h3>
              <span className="text-xs text-neutral-500">{x.period}</span>
            </div>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              {x.courses?.map((c:string, k:number)=>(<li key={k} className="text-sm">{c}</li>))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  )
}