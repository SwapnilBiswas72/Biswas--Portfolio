'use client'
import { cn } from './cn'
export function Button({ className, children, ...props }: any){
  return (
    <button {...props} className={cn('inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2 text-sm font-medium text-white hover:opacity-95 transition-colors', className)}>
      {children}
    </button>
  )
}