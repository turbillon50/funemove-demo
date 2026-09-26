'use client'
import {motion} from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import {operators} from '@/lib/demo-data'

export default function HomeCliente() {
  return (
    <div style={{display:'flex', flexDirection:'column', minHeight:'100svh', background:'#F2EDE4'}}>

      {/* Header */}
      <header style={{
        padding:'1rem 1.25rem', background:'rgba(242,237,228,0.95)', backdropFilter:'blur(12px)',
        borderBottom:'1px solid #DDD4C0', display:'flex', justifyContent:'space-between', alignItems:'center',
        position:'sticky', top:0, zIndex:10,
      }}>
        <h1 style={{fontFamily:'var(--font-cormorant),serif', color:'#B8935A', fontSize:'1.5rem', letterSpacing:'0.18em', fontWeight:400}}>
          FUNEMOVE
        </h1>
        <span style={{fontSize:'0.65rem', color:'#B8935A', letterSpacing:'0.1em', opacity:0.7}}>CDMX · 4 disponibles</span>
      </header>

      {/* Mapa con imagen cálida */}
      <div style={{position:'relative', height:'240px', overflow:'hidden'}}>
        <Image src="/home/mapa.png" alt="zona de servicio" fill style={{objectFit:'cover', objectPosition:'center'}} priority/>
        <div style={{position:'absolute', inset:0, background:'linear-gradient(to bottom, rgba(242,237,228,0.05), rgba(242,237,228,0.4))'}}/>

        {/* Pin dorado */}
        <motion.div animate={{scale:[1,1.25,1]}} transition={{repeat:Infinity, duration:2.2, ease:'easeInOut'}}
          style={{position:'absolute', top:'36%', left:'40%', width:'24px', height:'24px', filter:'drop-shadow(0 2px 8px rgba(184,147,90,0.6))'}}>
          <svg viewBox="0 0 24 24" fill="#B8935A"><path d="M12 2a8 8 0 0 0-8 8c0 5.5 8 14 8 14s8-8.5 8-14A8 8 0 0 0 12 2zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/></svg>
        </motion.div>

        {/* Buscador flotante */}
        <Link href="/solicitar" style={{textDecoration:'none'}}>
          <div style={{
            position:'absolute', bottom:'12px', left:'12px', right:'12px',
            background:'rgba(253,250,245,0.95)', backdropFilter:'blur(16px)',
            border:'1px solid #DDD4C0', borderRadius:'14px',
            padding:'0.9rem 1rem', display:'flex', alignItems:'center', gap:'0.6rem',
            boxShadow:'0 4px 20px rgba(26,16,8,0.08)',
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#B8935A"><path d="M12 2a8 8 0 0 0-8 8c0 5.5 8 14 8 14s8-8.5 8-14A8 8 0 0 0 12 2zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/></svg>
            <span style={{color:'#9E8060', fontSize:'0.9rem'}}>¿A dónde necesitas el traslado?</span>
          </div>
        </Link>
      </div>

      {/* Carrozas cercanas */}
      <div style={{padding:'1.25rem 1.25rem 2rem', flex:1}}>
        <p style={{fontSize:'0.6rem', color:'#B8935A', letterSpacing:'0.18em', textTransform:'uppercase', marginBottom:'0.9rem', fontWeight:600}}>
          Carrozas cercanas
        </p>

        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'0.75rem', marginBottom:'1.25rem'}}>
          {operators.map(op => (
            <motion.div key={op.id} whileHover={{scale:1.02}} whileTap={{scale:0.98}}
              style={{background:'#FDFAF5', border:'1px solid #DDD4C0', borderRadius:'16px', padding:'0.9rem', cursor:'pointer', boxShadow:'0 2px 12px rgba(26,16,8,0.05)'}}>
              <div style={{display:'flex', alignItems:'center', gap:'0.6rem', marginBottom:'0.6rem'}}>
                <div style={{width:'34px', height:'34px', borderRadius:'50%', background:'#EDE6D8', border:'1px solid #DDD4C0', display:'flex', alignItems:'center', justifyContent:'center', color:'#B8935A', fontWeight:600, fontSize:'0.85rem', fontFamily:'var(--font-cormorant),serif'}}>
                  {op.name[0]}
                </div>
                <div>
                  <p style={{color:'#1A1008', fontSize:'0.8rem', lineHeight:1.2, fontWeight:500}}>{op.name.split(' ')[0]}</p>
                  <p style={{color:'#9E8060', fontSize:'0.65rem'}}>{op.city}</p>
                </div>
              </div>
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <span style={{color:'#B8935A', fontSize:'0.7rem'}}>⭐ {op.rating}</span>
                <span style={{color:'#C5B69A', fontSize:'0.6rem'}}>{op.plate}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <Link href="/solicitar">
          <motion.button whileHover={{scale:1.01}} whileTap={{scale:0.97}} style={{
            width:'100%', padding:'1rem', background:'#B8935A', color:'#FDFAF5',
            fontWeight:600, borderRadius:'14px', fontSize:'0.95rem', border:'none',
            cursor:'pointer', letterSpacing:'0.04em', fontFamily:'var(--font-inter),sans-serif',
            boxShadow:'0 4px 20px rgba(184,147,90,0.35)',
          }}>
            Solicitar carroza ahora
          </motion.button>
        </Link>
      </div>
    </div>
  )
}
