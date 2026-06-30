'use client'
import Link from 'next/link'
import Image from 'next/image'
import {operators} from '@/lib/demo-data'

export default function HomeCliente() {
  return (
    <main style={{minHeight:'100vh', background:'#F8F5EF', position:'relative', overflowX:'hidden'}}>
      <div style={{position:'absolute', top:'-120px', left:'50%', transform:'translateX(-50%)', width:'520px', height:'520px', background:'radial-gradient(circle,rgba(184,150,90,.20),transparent 70%)', pointerEvents:'none', zIndex:0}}/>

      {/* Header */}
      <header style={{
        position:'sticky', top:0, zIndex:40,
        background:'rgba(248,245,239,.92)', backdropFilter:'blur(12px) saturate(140%)',
        padding:'12px 18px', display:'flex', alignItems:'center', gap:'10px',
        borderBottom:'1px solid rgba(12,30,60,.06)',
      }}>
        <Image src="/brand/logo-header.png" alt="FUNEMOVE" width={40} height={40} style={{objectFit:'contain'}}/>
        <span className="serif" style={{fontSize:'19px', fontWeight:800, letterSpacing:'1.5px', color:'#0C1E3C', flex:1}}>FUNEMOVE</span>
        <span style={{fontSize:'11px', color:'#8a6d35', fontWeight:600}}>CDMX</span>
      </header>

      <div style={{position:'relative', zIndex:1, padding:'18px', display:'flex', flexDirection:'column', gap:'28px', maxWidth:'720px', margin:'0 auto'}}>

        {/* Hero solicitar */}
        <section style={{textAlign:'center', paddingTop:'8px'}}>
          <p style={{color:'#8a6d35', letterSpacing:'2px', fontSize:'11px', fontWeight:700, marginBottom:'10px'}}>
            SERVICIO FUNERARIO DE TRASLADO · 24/7
          </p>
          <h1 className="serif" style={{fontSize:'30px', lineHeight:1.15, fontWeight:800, color:'#0C1E3C', letterSpacing:'-0.3px', marginBottom:'10px'}}>
            ¿A dónde necesitas<br/>el traslado?
          </h1>
          <p style={{color:'#6b7280', fontSize:'14px', lineHeight:1.6, maxWidth:'380px', margin:'0 auto'}}>
            Operadores certificados, seguro incluido, llegan en minutos con dignidad.
          </p>

          <Link href="/solicitar" style={{textDecoration:'none'}}>
            <button className="btn-primary" style={{marginTop:'20px', maxWidth:'400px'}}>
              Solicitar carroza ahora
            </button>
          </Link>
        </section>

        {/* Stats de confianza */}
        <section className="card" style={{padding:'18px 16px', display:'flex', justifyContent:'space-around', textAlign:'center'}}>
          <div style={{display:'flex', flexDirection:'column', gap:'3px', flex:1}}>
            <span className="mono" style={{fontSize:'20px', fontWeight:800, color:'#B8965A'}}>2,340</span>
            <span style={{fontSize:'11px', color:'#6b7280'}}>servicios realizados</span>
          </div>
          <div style={{display:'flex', flexDirection:'column', gap:'3px', flex:1, borderLeft:'1px solid rgba(12,30,60,.08)'}}>
            <span className="mono" style={{fontSize:'20px', fontWeight:800, color:'#B8965A'}}>4.9 ⭐</span>
            <span style={{fontSize:'11px', color:'#6b7280'}}>calificación</span>
          </div>
          <div style={{display:'flex', flexDirection:'column', gap:'3px', flex:1, borderLeft:'1px solid rgba(12,30,60,.08)'}}>
            <span className="mono" style={{fontSize:'20px', fontWeight:800, color:'#B8965A'}}>18</span>
            <span style={{fontSize:'11px', color:'#6b7280'}}>operadores activos</span>
          </div>
        </section>

        {/* Carrozas disponibles */}
        <section>
          <p className="section-title">Carrozas disponibles cerca de ti</p>
          <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
            {operators.map(op => (
              <div key={op.id} className="card" style={{display:'flex', gap:'14px', alignItems:'center', padding:'14px'}}>
                <div style={{
                  width:'50px', height:'50px', borderRadius:'50%',
                  background:'#EDE6D8', display:'flex', alignItems:'center', justifyContent:'center',
                  color:'#B8965A', fontWeight:700, fontSize:'18px', fontFamily:'var(--font-playfair),serif',
                  border:'2px solid #B8965A',
                }}>
                  {op.name[0]}
                </div>
                <div style={{flex:1}}>
                  <p className="serif" style={{fontWeight:700, fontSize:'15px', color:'#0C1E3C'}}>{op.name}</p>
                  <p style={{fontSize:'12px', color:'#6b7280'}}>{op.city} · {op.plate}</p>
                </div>
                <span className="mono" style={{fontSize:'13px', fontWeight:700, color:'#8a6d35'}}>⭐{op.rating}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
