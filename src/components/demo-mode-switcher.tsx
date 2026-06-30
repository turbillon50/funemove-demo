'use client'
import {useDemoStore, AppMode} from '@/lib/demo-store'
import {useRouter, usePathname} from 'next/navigation'

const SHOW_ON = ['/historial', '/perfil', '/solicitar', '/confirmacion', '/tracking', '/detalle', '/operador', '/admin']

export const DemoModeSwitcher = () => {
  const {mode, setMode} = useDemoStore()
  const router = useRouter()
  const pathname = usePathname()
  if (!SHOW_ON.some(p => pathname.startsWith(p))) return null

  const toggle = (m: AppMode) => {
    setMode(m)
    const routes: Record<AppMode, string> = {cliente:'/home', operador:'/operador', admin:'/admin'}
    router.push(routes[m])
  }

  return (
    <div style={{
      position:'fixed', bottom:'82px', right:'12px', zIndex:50,
      background:'#0C1E3C', borderRadius:'999px', display:'flex', overflow:'hidden',
      boxShadow:'0 4px 20px rgba(12,30,60,0.25)',
    }}>
      {(['cliente','operador','admin'] as AppMode[]).map(m => (
        <button key={m} onClick={() => toggle(m)} style={{
          padding:'7px 13px', fontSize:'10px', fontWeight: mode===m ? 700 : 400,
          background: mode===m ? '#B8965A' : 'transparent',
          color: mode===m ? '#0C1E3C' : 'rgba(248,245,239,0.6)',
          border:'none', cursor:'pointer', textTransform:'capitalize',
        }}>
          {m}
        </button>
      ))}
    </div>
  )
}
