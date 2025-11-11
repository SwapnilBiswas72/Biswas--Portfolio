import { SectionHead } from '@/app/(site)/components/SectionHead'
import { Card } from '@/app/(site)/components/Card'
import { portfolioData } from '@/data/portfolioData'
export default function Projects(){
  const items = (portfolioData as any).projects || []
  return (
    <section id="projects" className="section scroll-mt-24">
      <SectionHead title="Projects" />
      <div className="grid md:grid-cols-2 gap-4">
        {items.map((p:any, i:number)=>(
          <Card key={i}>
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-sm text-neutral-500">{p.type}</p>
            <p className="text-sm mt-1">{p.description}</p>
            {p.domain?.length>0 && <div className="mt-2 flex flex-wrap gap-2">{p.domain.map((d:string, k:number)=>(<span key={k} className="badge">{d}</span>))}</div>}
          </Card>
        ))}
      </div>
    </section>
  )
}