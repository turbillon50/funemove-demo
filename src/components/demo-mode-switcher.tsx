'use client'
import {useDemoStore, AppMode} from '@/lib/demo-store'
import {motion} from 'framer-motion'
import {useRouter, usePathname} from 'next/navigation'

const HIDE_ON = ['/', '/onboarding']

export const DemoModeSwitcher = () => {
  const {mode, setMode} = useDemoStore()
  const router = useRouter()
  const pathname = usePathname()

  // No mostrar en splash ni onboarding
  if (HIDE_ON.includes(pathname)) return null

  const toggle = (m: AppMode) => {
    setMode(m)
    const routes: Record<AppMode, string> = {cliente: '/home', operador: '/operador', admin: '/admin'}
    router.push(routes[m])
  }

  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      style={{
        position: 'fixed',
        bottom: '80px',
        right: '12px',
        zIndex: 50,
        background: '#111',
        border: '1px solid #2a2a2a',
        borderRadius: '999px',
        display: 'flex',
        overflow: 'hidden',
        boxShadow: '0 4px 24px rgba(0,0,0,0.6)',
      }}
    >
      {(['cliente', 'operador', 'admin'] as AppMode[]).map(m => (
        <button key={m} onClick={() => toggle(m)} style={{
          padding: '8px 14px',
          fontSize: '11px',
          fontWeight: mode === m ? 700 : 400,
          background: mode === m ? '#C9A84C' : 'transparent',
          color: mode === m ? '#0A0A0A' : '#666',
          border: 'none',
          cursor: 'pointer',
          transition: 'all 0.2s',
          letterSpacing: '0.05em',
        }}>
          {m[0].toUpperCase() + m.slice(1)}
        </button>
      ))}
    </motion.div>
  )
}
