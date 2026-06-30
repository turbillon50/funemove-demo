'use client'
import {useState} from 'react'
import {useRouter} from 'next/navigation'
import {useDemoStore, AppMode} from '@/lib/demo-store'

export default function Perfil() {
  const [name, setName] = useState('Omar García')
  const [phone, setPhone] = useState('+52 998 429 0001')
  const [saved, setSaved] = useState(false)
  const {mode, setMode} = useDemoStore()
  const router = useRouter()

  const save = () => { setSaved(true); setTimeout(() => setSaved(false), 2000) }

  const switchMode = (m: AppMode) => {
    setMode(m)
    const routes: Record<AppMode,string> = {cliente:'/home', operador:'/operador', admin:'/admin'}
    router.push(routes[m])
  }

  return (
    <main style={{minHeight:'100vh', background:'#F8F5EF', padding:'1.5rem 1.25rem 2rem'}}>
      <h1 className="serif" style={{fontSize:'1.7rem', fontWeight:800, color:'#0C1E3C', marginBottom:'1.5rem'}}>Mi perfil</h1>

      <div style={{display:'flex', flexDirection:'column', alignItems:'center', marginBottom:'2rem'}}>
        <div style={{
          width:'84px', height:'84px', borderRadius:'50%',
          background:'#EDE6D8', border:'2px solid #B8965A',
          display:'flex', alignItems:'center', justifyContent:'center',
          color:'#B8965A', fontSize:'2rem', fontFamily:'var(--font-playfair),serif', marginBottom:'0.75rem',
        }}>
          {name[0]}
        </div>
        <p style={{color:'#0C1E3C', fontWeight:600}}>{name}</p>
        <p style={{color:'#6b7280', fontSize:'0.8rem'}}>Cliente desde Jun 2025</p>
      </div>

      <div style={{display:'flex', flexDirection:'column', gap:'1rem', marginBottom:'1.5rem'}}>
        <div>
          <label style={{fontSize:'0.7rem', color:'#8a6d35', letterSpacing:'0.1em', textTransform:'uppercase', display:'block', marginBottom:'0.4rem', fontWeight:700}}>Nombre</label>
          <input value={name} onChange={e=>setName(e.target.value)}
            style={{width:'100%', background:'#FFFFFF', border:'1px solid rgba(12,30,60,.1)', borderRadius:'12px', padding:'0.8rem 1rem', color:'#0C1E3C', fontSize:'0.9rem'}}/>
        </div>
        <div>
          <label style={{fontSize:'0.7rem', color:'#8a6d35', letterSpacing:'0.1em', textTransform:'uppercase', display:'block', marginBottom:'0.4rem', fontWeight:700}}>Teléfono</label>
          <input value={phone} onChange={e=>setPhone(e.target.value)}
            style={{width:'100%', background:'#FFFFFF', border:'1px solid rgba(12,30,60,.1)', borderRadius:'12px', padding:'0.8rem 1rem', color:'#0C1E3C', fontSize:'0.9rem'}}/>
        </div>
      </div>

      <button onClick={save} className="btn-primary" style={{
        background: saved ? '#1A4D3A' : '#0C1E3C', marginBottom:'2.5rem',
      }}>
        {saved ? '✓ Guardado' : 'Guardar cambios'}
      </button>

      {/* Selector de modo — solo aquí, no flotante global */}
      <div className="card" style={{padding:'1.25rem'}}>
        <p className="section-title" style={{marginBottom:'0.9rem'}}>Modo de visualización (demo)</p>
        <div style={{display:'flex', gap:'8px'}}>
          {(['cliente','operador','admin'] as AppMode[]).map(m => (
            <button key={m} onClick={() => switchMode(m)} style={{
              flex:1, padding:'0.7rem', borderRadius:'10px', fontSize:'0.8rem', fontWeight:600,
              border: mode===m ? 'none' : '1px solid rgba(12,30,60,.12)',
              background: mode===m ? '#B8965A' : 'transparent',
              color: mode===m ? '#0C1E3C' : '#6b7280',
              cursor:'pointer', textTransform:'capitalize',
            }}>
              {m}
            </button>
          ))}
        </div>
      </div>
    </main>
  )
}
