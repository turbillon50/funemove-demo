'use client'
import Link from 'next/link'
import {usePathname} from 'next/navigation'

const HIDE = ['/', '/onboarding']

const IcoHome = ({a}:{a:boolean}) => <svg width="22" height="22" viewBox="0 0 24 24" fill={a?'#0C1E3C':'#B0A88E'}><path d="M3 11l9-9 9 9v11a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/></svg>
const IcoPin  = ({a}:{a:boolean}) => <svg width="22" height="22" viewBox="0 0 24 24" fill={a?'#0C1E3C':'#B0A88E'}><path d="M12 2a8 8 0 0 0-8 8c0 5.5 8 14 8 14s8-8.5 8-14A8 8 0 0 0 12 2zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/></svg>
const IcoTrack= ({a}:{a:boolean}) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={a?'#0C1E3C':'#B0A88E'} strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v3m0 14v3M2 12h3m14 0h3"/></svg>
const IcoHist = ({a}:{a:boolean}) => <svg width="22" height="22" viewBox="0 0 24 24" fill={a?'#0C1E3C':'#B0A88E'}><path d="M13 3a9 9 0 1 0 9 9h-2a7 7 0 1 1-7-7V3zm-1 5v5l4 2-1 1.7L11 14V8h1z"/></svg>
const IcoProf = ({a}:{a:boolean}) => <svg width="22" height="22" viewBox="0 0 24 24" fill={a?'#0C1E3C':'#B0A88E'}><path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-9 1.7-9 5v1h18v-1c0-3.3-5.7-5-9-5z"/></svg>

const routes = [
  {href:'/home', label:'Inicio', Ico:IcoHome},
  {href:'/solicitar', label:'Solicitar', Ico:IcoPin},
  {href:'/tracking', label:'Rastrear', Ico:IcoTrack},
  {href:'/historial', label:'Historial', Ico:IcoHist},
  {href:'/perfil', label:'Perfil', Ico:IcoProf},
]

export const BottomNav = () => {
  const p = usePathname()
  if (HIDE.some(h => p === h)) return null
  return (
    <nav style={{
      position:'fixed', inset:'auto 0 0 0', zIndex:40,
      background:'rgba(248,245,239,0.96)', backdropFilter:'blur(16px)',
      borderTop:'1px solid rgba(12,30,60,.08)',
      display:'flex', justifyContent:'space-around', alignItems:'center',
      padding:'0.55rem 0 1.3rem',
    }}>
      {routes.map(({href, label, Ico}) => {
        const active = p === href
        return (
          <Link key={href} href={href} style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'2px', textDecoration:'none'}}>
            <Ico a={active}/>
            <span style={{fontSize:'10px', fontWeight: active?700:400, color: active?'#0C1E3C':'#B0A88E'}}>{label}</span>
          </Link>
        )
      })}
    </nav>
  )
}
