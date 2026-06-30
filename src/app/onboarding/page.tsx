'use client'
import {useState} from 'react'
import {useRouter} from 'next/navigation'

const slides = [
  {emoji:'⚱', title:'Solicita en minutos', desc:'Elige origen, destino y tipo de traslado. La carroza más cercana llega a ti con dignidad.'},
  {emoji:'📍', title:'Rastreamos el trayecto', desc:'Sigue el recorrido en tiempo real. Siempre sabrás dónde está tu ser querido.'},
  {emoji:'🕊', title:'Con dignidad y respeto', desc:'Operadores certificados, seguro incluido. Te acompañamos en cada momento.'},
]

export default function Onboarding() {
  const [i, setI] = useState(0)
  const router = useRouter()
  const next = () => {
    if (i < slides.length - 1) setI(n => n+1)
    else { localStorage.setItem('funemove-onboarded','1'); router.replace('/home') }
  }
  const s = slides[i]

  return (
    <div style={{minHeight:'100svh', background:'#F8F5EF', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'2rem'}}>
      <div style={{display:'flex', gap:'8px', marginBottom:'3rem'}}>
        {slides.map((_,idx) => (
          <div key={idx} style={{height:'3px', borderRadius:'2px', background: idx===i?'#0C1E3C':'rgba(12,30,60,.12)', width: idx===i?'28px':'14px', transition:'all 0.3s'}}/>
        ))}
      </div>

      <div style={{textAlign:'center', maxWidth:'320px'}}>
        <div style={{
          width:'90px', height:'90px', borderRadius:'50%', margin:'0 auto 2rem',
          background:'radial-gradient(circle, rgba(184,150,90,.25), transparent 70%)',
          display:'flex', alignItems:'center', justifyContent:'center', fontSize:'2.6rem',
        }}>
          {s.emoji}
        </div>
        <h2 className="serif" style={{color:'#0C1E3C', fontSize:'1.9rem', fontWeight:800, marginBottom:'0.9rem', lineHeight:1.2}}>
          {s.title}
        </h2>
        <p style={{color:'#6b7280', lineHeight:1.7, fontSize:'0.95rem'}}>
          {s.desc}
        </p>
      </div>

      <button onClick={next} className="btn-primary" style={{marginTop:'3rem', maxWidth:'320px'}}>
        {i === slides.length-1 ? 'Comenzar' : 'Siguiente →'}
      </button>

      {i < slides.length-1 && (
        <button onClick={() => {localStorage.setItem('funemove-onboarded','1'); router.replace('/home')}}
          style={{marginTop:'1rem', color:'#8a6d35', fontSize:'0.8rem', background:'none', border:'none', cursor:'pointer'}}>
          Omitir
        </button>
      )}
    </div>
  )
}
