'use client'
import {motion} from 'framer-motion'
import Link from 'next/link'
import {operators} from '@/lib/demo-data'

export default function HomeCliente(){
  return(
    <div className="flex flex-col min-h-screen" style={{background:'#0A0A0A'}}>
      {/* Header */}
      <header style={{padding:'1rem 1.25rem',background:'#111',borderBottom:'1px solid #1e1e1e',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <h1 style={{fontFamily:'var(--font-cormorant),serif',color:'#C9A84C',fontSize:'1.6rem',letterSpacing:'0.15em'}}>FUNEMOVE</h1>
        <div style={{fontSize:'0.7rem',color:'#555',letterSpacing:'0.1em'}}>CDMX · 4 disponibles</div>
      </header>

      {/* Mapa simulado */}
      <div style={{height:'280px',position:'relative',background:'#0d0d0d',
        backgroundImage:'linear-gradient(#1a1a1a 1px,transparent 1px),linear-gradient(90deg,#1a1a1a 1px,transparent 1px)',
        backgroundSize:'36px 36px',overflow:'hidden'}}>
        {/* Pin A */}
        <motion.div animate={{scale:[1,1.4,1]}} transition={{repeat:Infinity,duration:2,ease:'easeInOut'}}
          style={{position:'absolute',top:'35%',left:'30%',width:'24px',height:'24px'}}>
          <svg viewBox="0 0 24 24" fill="#C9A84C"><path d="M12 2a8 8 0 0 0-8 8c0 5.5 8 14 8 14s8-8.5 8-14A8 8 0 0 0 12 2zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/></svg>
        </motion.div>
        {/* Pin B */}
        <motion.div animate={{scale:[1,1.3,1]}} transition={{repeat:Infinity,duration:2.5,delay:0.8}}
          style={{position:'absolute',bottom:'28%',right:'28%',width:'20px',height:'20px'}}>
          <svg viewBox="0 0 24 24" fill="#C9A84C" opacity="0.6"><path d="M12 2a8 8 0 0 0-8 8c0 5.5 8 14 8 14s8-8.5 8-14A8 8 0 0 0 12 2zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/></svg>
        </motion.div>
        {/* Carroza animada */}
        <motion.div animate={{x:['-10%','80%']}} transition={{repeat:Infinity,duration:8,ease:'linear'}}
          style={{position:'absolute',top:'42%',left:0}}>
          <svg width="32" height="20" viewBox="0 0 80 48" fill="none">
            <rect x="4" y="20" width="72" height="18" rx="4" fill="#C9A84C"/>
            <rect x="12" y="10" width="48" height="12" rx="3" fill="#C9A84C" opacity="0.7"/>
            <circle cx="18" cy="40" r="6" fill="#0A0A0A" stroke="#C9A84C" strokeWidth="1.5"/>
            <circle cx="62" cy="40" r="6" fill="#0A0A0A" stroke="#C9A84C" strokeWidth="1.5"/>
          </svg>
        </motion.div>
        {/* Label */}
        <div style={{position:'absolute',bottom:'8px',right:'10px',fontSize:'0.6rem',color:'#333',letterSpacing:'0.1em'}}>MAPA SIMULADO</div>
        {/* CTA flotante sobre mapa */}
        <div style={{position:'absolute',bottom:'12px',left:'12px',right:'12px'}}>
          <Link href="/solicitar" style={{display:'block',background:'rgba(10,10,10,0.85)',backdropFilter:'blur(8px)',border:'1px solid #2a2a2a',borderRadius:'12px',padding:'0.9rem 1rem',color:'#555',fontSize:'0.9rem',textDecoration:'none'}}>
            📍 ¿A dónde necesitas el traslado?
          </Link>
        </div>
      </div>

      {/* Carrozas cercanas */}
      <div style={{padding:'1.25rem',flex:1}}>
        <p style={{fontSize:'0.65rem',color:'#555',letterSpacing:'0.15em',textTransform:'uppercase',marginBottom:'0.75rem'}}>Carrozas cercanas</p>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'0.75rem',marginBottom:'1.25rem'}}>
          {operators.map(op=>(
            <motion.div key={op.id} whileHover={{scale:1.02}}
              style={{background:'#161616',border:'1px solid #222',borderRadius:'14px',padding:'0.9rem'}}>
              <div style={{display:'flex',alignItems:'center',gap:'0.6rem',marginBottom:'0.5rem'}}>
                <div style={{width:'32px',height:'32px',borderRadius:'50%',background:'#222',display:'flex',alignItems:'center',justifyContent:'center',color:'#C9A84C',fontWeight:700,fontSize:'0.85rem'}}>
                  {op.name[0]}
                </div>
                <div>
                  <p style={{color:'#fff',fontSize:'0.8rem',lineHeight:1.2}}>{op.name.split(' ')[0]}</p>
                  <p style={{color:'#555',fontSize:'0.65rem'}}>{op.city}</p>
                </div>
              </div>
              <div style={{display:'flex',justifyContent:'space-between'}}>
                <span style={{color:'#C9A84C',fontSize:'0.7rem'}}>⭐ {op.rating}</span>
                <span style={{color:'#444',fontSize:'0.65rem'}}>{op.plate}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <Link href="/solicitar">
          <motion.button whileHover={{scale:1.02}} whileTap={{scale:0.97}}
            style={{width:'100%',padding:'1.1rem',background:'#C9A84C',color:'#0A0A0A',fontWeight:700,borderRadius:'14px',fontSize:'1rem',border:'none',cursor:'pointer',letterSpacing:'0.05em'}}>
            Solicitar carroza ahora
          </motion.button>
        </Link>
      </div>
    </div>
  )
}
