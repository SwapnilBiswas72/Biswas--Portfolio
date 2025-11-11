export function SectionHead({ title, subtitle='' }:{title:string, subtitle?:string}){
  return (
    <div className="mb-4">
      <h2 className="text-xl md:text-2xl font-semibold">{title}</h2>
      {subtitle && <p className="text-sm text-neutral-500 mt-1">{subtitle}</p>}
    </div>
  )
}