export function Card({ children, className='' }: any){
  return <div className={`card p-4 md:p-5 ${className}`}>{children}</div>
}