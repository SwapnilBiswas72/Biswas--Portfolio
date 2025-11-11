import { SectionHead } from '@/app/(site)/components/SectionHead'
import { Card } from '@/app/(site)/components/Card'
import { portfolioData } from '@/data/portfolioData'
export default function Extracurricular(){
  const items = (portfolioData as any).extracurricular || []
  return (
    <section id="extracurricular" className="section scroll-mt-24">
      <SectionHead title="Extracurricular" />
      <Card>
        <ul className="list-disc ml-5 space-y-1">
          {items.map((t:string, i:number)=>(<li key={i} className="text-sm">{t}</li>))}
        </ul>
      </Card>
    </section>
  )
}