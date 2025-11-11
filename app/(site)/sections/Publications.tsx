'use client'
import { SectionHead } from '@/app/(site)/components/SectionHead'
import { Card } from '@/app/(site)/components/Card'
import { LinkIcon, Search } from 'lucide-react'
import { portfolioData } from '@/data/portfolioData'
import { useMemo, useState } from 'react'

export default function Publications(){
  const [q, setQ] = useState('')
  const pubs = (portfolioData as any).publications
  const filtered = useMemo(()=>{
    if(!q) return pubs
    const s = q.toLowerCase()
    return pubs.filter((p:any)=> 
      p.title.toLowerCase().includes(s) ||
      (p.subtitle||'').toLowerCase().includes(s) ||
      (p.authors||[]).some((a:any)=> a.name?.toLowerCase().includes(s))
    )
  }, [q, pubs])

  return (
    <section id="publications" className="section scroll-mt-24">
      <SectionHead title="Publications" subtitle="Search and browse peer-reviewed work" />
      <div className='mb-4 flex items-center gap-2'>
        <div className='relative w-full md:max-w-md'>
          <input value={q} onChange={e=> setQ(e.target.value)} placeholder='Search by title, author, venue...' className='w-full rounded-full border border-neutral-200/60 dark:border-neutral-800/60 bg-white/60 dark:bg-neutral-900/60 px-4 py-2 pl-9 outline-none focus:ring-2 ring-brand/30'/>
          <Search className='absolute left-3 top-2.5 h-4 w-4 text-neutral-500'/>
        </div>
      </div>
      <div className="grid gap-4">
        {filtered.map((p:any, i:number)=>(
          <Card key={i}>
            <h3 className="font-semibold leading-snug">{p.title}</h3>
            {p.authors && <p className="text-sm mt-1">{p.authors.map((a:any)=>a.name).join(', ')}</p>}
            <p className="text-sm text-neutral-500 mt-1">{p.subtitle}</p>
            {p.links?.paper && (
              <a className="inline-flex items-center gap-1 text-sm mt-2 text-brand" href={p.links.paper} target="_blank" rel="noreferrer">
                <LinkIcon className="h-4 w-4"/> View Paper
              </a>
            )}
          </Card>
        ))}
      </div>

      {(portfolioData as any).under_review?.length>0 && (
        <div className="mt-10">
          <SectionHead title="Under Review" />
          <div className="grid gap-4">
            {(portfolioData as any).under_review.map((u:any, i:number)=>(
              <Card key={i}><h3 className="font-semibold">{u.title}</h3><p className="text-sm text-neutral-500">{u.journal}</p></Card>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}