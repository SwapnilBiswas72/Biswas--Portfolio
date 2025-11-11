import { SectionHead } from '@/app/(site)/components/SectionHead'
import { Card } from '@/app/(site)/components/Card'
import { portfolioData } from '@/data/portfolioData'
export default function Education(){
  return (
    <section id="education" className="section scroll-mt-24">
      <SectionHead title="Education" />
      <div className="grid gap-4">
        {(portfolioData as any).education.map((e:any, i:number)=>(
          <Card key={i}>
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{e.degree}</h3>
              <span className="text-xs text-neutral-500">{e.period}</span>
            </div>
            <p className="text-sm text-neutral-500">{e.institution}</p>
            {e.cgpa && <p className="text-sm mt-1">CGPA: {e.cgpa}</p>}
          </Card>
        ))}
      </div>
    </section>
  )
}