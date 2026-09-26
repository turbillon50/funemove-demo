'use client'
import {useDemoStore, AppMode} from '@/lib/demo-store'
import {motion} from 'framer-motion'
import {useRouter, usePathname} from 'next/navigation'

// Solo visible en estas rutas
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
    <motion.div
      initial={{opacity:0, y:20}} animate={{opacity:1, y:0}}
      style={{
        position:'fixed', bottom:'80px', right:'12px', zIndex:50,
        background:'rgba(10,10,10,0.9)', backdropFilter:'blur(12px)',
        border:'1px solid #2a2a2a', borderRadius:'999px',
        display:'flex', overflow:'hidden',
        boxShadow:'0 4px 24px rgba(0,0,0,0.7)',
      }}
    >
      {(['cliente','operador','admin'] as AppMode[]).map(m => (
        <button key={m} onClick={() => toggle(m)} style={{
          padding:'7px 13px', fontSize:'10px', fontWeight: mode===m ? 700 : 400,
          background: mode===m ? '#C9A84C' : 'transparent',
          color: mode===m ? '#0A0A0A' : '#555',
          border:'none', cursor:'pointer', transition:'all 0.2s',
          letterSpacing:'0.05em', textTransform:'capitalize',
        }}>
          {m}
        </button>
      ))}
    </motion.div>
  )
}
