'use client'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {motion} from 'framer-motion'

const HIDE_ON=['/onboarding','/admin','/operador','/','/confirmacion']

const HomeIco=({a}:{a:boolean})=><svg width="22" height="22" fill={a?'#C9A84C':'#888'} viewBox="0 0 24 24"><path d="M3 11l9-9 9 9v11a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/></svg>
const PinIco=({a}:{a:boolean})=><svg width="22" height="22" fill={a?'#C9A84C':'#888'} viewBox="0 0 24 24"><path d="M12 2a8 8 0 0 0-8 8c0 5.5 8 14 8 14s8-8.5 8-14A8 8 0 0 0 12 2zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/></svg>
const TrackIco=({a}:{a:boolean})=><svg width="22" height="22" fill={a?'#C9A84C':'#888'} viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 2v3m0 14v3M2 12h3m14 0h3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1M5.6 18.4l2.1-2.1m8.6-8.6 2.1-2.1"/></svg>
const HistIco=({a}:{a:boolean})=><svg width="22" height="22" fill={a?'#C9A84C':'#888'} viewBox="0 0 24 24"><path d="M13 3a9 9 0 1 0 9 9h-2a7 7 0 1 1-7-7V3zm-1 5v5l4 2-1 1.7L11 14V8h1z"/></svg>
const ProfIco=({a}:{a:boolean})=><svg width="22" height="22" fill={a?'#C9A84C':'#888'} viewBox="0 0 24 24"><path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-9 1.7-9 5v1h18v-1c0-3.3-5.7-5-9-5z"/></svg>

const routes=[
  {href:'/home',label:'Inicio',Icon:HomeIco},
  {href:'/solicitar',label:'Solicitar',Icon:PinIco},
  {href:'/tracking',label:'Rastrear',Icon:TrackIco},
  {href:'/historial',label:'Historial',Icon:HistIco},
  {href:'/perfil',label:'Perfil',Icon:ProfIco},
]

export const BottomNav=()=>{
  const p=usePathname()
  if(HIDE_ON.some(h=>p===h||p.startsWith(h+'/'))&&p!='/home') return null
  return(
    <nav className="fixed inset-x-0 bottom-0 bg-[#111] border-t border-[#222] flex justify-around py-2 z-40">
      {routes.map(({href,label,Icon})=>{
        const active=p===href
        return(
          <Link key={href} href={href} className="flex flex-col items-center gap-0.5">
            <motion.div animate={active?{y:-3}:{y:0}} transition={{type:'spring',stiffness:400}}>
              <Icon a={active}/>
            </motion.div>
            <span className={`text-[10px] ${active?'text-gold':'text-[#888]'}`}>{label}</span>
          </Link>
        )
      })}
    </nav>
  )
}
