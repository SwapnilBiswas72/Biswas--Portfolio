import { SectionHead } from '@/app/(site)/components/SectionHead'
import { Card } from '@/app/(site)/components/Card'
import { portfolioData } from '@/data/portfolioData'
export default function Skills(){
  const s = (portfolioData as any)
  return (
    <section id="skills" className="section scroll-mt-24">
      <SectionHead title="Skills" />
      <div className="grid md:grid-cols-2 gap-4">
        <Card><h3 className="font-semibold">Programming</h3><p className="text-sm mt-1">{s.skills?.programming?.join(', ')}</p></Card>
        <Card><h3 className="font-semibold">Web</h3><p className="text-sm mt-1">{s.skills?.web?.join(', ')}</p></Card>
        <Card><h3 className="font-semibold">Tools & Libraries</h3><p className="text-sm mt-1">{s.skills?.tools?.join(', ')}</p></Card>
        <Card><h3 className="font-semibold">Soft Skills</h3><p className="text-sm mt-1">{s.skills?.soft?.join(', ')}</p></Card>
      </div>
    </section>
  )
}