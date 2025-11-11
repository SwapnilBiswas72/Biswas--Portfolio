import { SectionHead } from '@/app/(site)/components/SectionHead'
import { Card } from '@/app/(site)/components/Card'
import { portfolioData } from '@/data/portfolioData'
import { Mail, Phone, MapPin, LinkIcon, Github, Linkedin, FileText } from 'lucide-react'

export default function ContactSection(){
  const a = (portfolioData as any).about
  return (
    <section id="contact" className="section scroll-mt-24">
      <SectionHead title="Contact" subtitle="Let’s connect" />
      <Card>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <p className="flex items-center gap-2"><Mail className="h-4 w-4"/><a href={`mailto:${a.contact}`}>{a.contact}</a></p>
            {a.phone && <p className="flex items-center gap-2"><Phone className="h-4 w-4"/><a href={`tel:${a.phone}`}>{a.phone}</a></p>}
            {a.location && <p className="flex items-center gap-2"><MapPin className="h-4 w-4"/>{a.location}</p>}
          </div>
          <div className="space-y-2">
            {a.links?.cv && <p className="flex items-center gap-2"><FileText className="h-4 w-4"/><a href={a.links.cv} target="_blank">Download CV</a></p>}
            {a.links?.linkedin && <p className="flex items-center gap-2"><Linkedin className="h-4 w-4"/><a href={a.links.linkedin} target="_blank">LinkedIn</a></p>}
            {a.links?.github && <p className="flex items-center gap-2"><Github className="h-4 w-4"/><a href={a.links.github} target="_blank">GitHub</a></p>}
            {a.links?.scholar && <p className="flex items-center gap-2"><LinkIcon className="h-4 w-4"/><a href={a.links.scholar} target="_blank">Google Scholar</a></p>}
            {a.links?.portfolio && <p className="flex items-center gap-2"><LinkIcon className="h-4 w-4"/><a href={a.links.portfolio} target="_blank">Portfolio</a></p>}
          </div>
        </div>
      </Card>
    </section>
  )
}