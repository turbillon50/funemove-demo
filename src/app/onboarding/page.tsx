'use client'
import {useState} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import {useRouter} from 'next/navigation'

// Limusina funeraria elegante — proporciones reales
const LimusinaFuneraria = () => (
  <svg width="120" height="64" viewBox="0 0 120 64" fill="none">
    {/* Carrocería principal */}
    <rect x="4" y="32" width="112" height="22" rx="3" fill="#C9A84C"/>
    {/* Cabina elevada */}
    <rect x="8" y="16" width="36" height="18" rx="3" fill="#C9A84C" opacity="0.85"/>
    {/* Techo largo */}
    <rect x="40" y="20" width="64" height="14" rx="2" fill="#C9A84C" opacity="0.75"/>
    {/* Ventanas cabina */}
    <rect x="12" y="20" width="12" height="10" rx="1.5" fill="#0A0A0A" opacity="0.5"/>
    <rect x="27" y="20" width="12" height="10" rx="1.5" fill="#0A0A0A" opacity="0.5"/>
    {/* Cruz lateral */}
    <rect x="70" y="24" width="2" height="12" rx="1" fill="#0A0A0A" opacity="0.4"/>
    <rect x="66" y="28" width="10" height="2" rx="1" fill="#0A0A0A" opacity="0.4"/>
    {/* Ruedas */}
    <circle cx="24" cy="54" r="9" fill="#0A0A0A" stroke="#C9A84C" strokeWidth="1.5"/>
    <circle cx="24" cy="54" r="4" fill="#C9A84C" opacity="0.6"/>
    <circle cx="94" cy="54" r="9" fill="#0A0A0A" stroke="#C9A84C" strokeWidth="1.5"/>
    <circle cx="94" cy="54" r="4" fill="#C9A84C" opacity="0.6"/>
    {/* Parachoque */}
    <rect x="4" y="52" width="10" height="3" rx="1" fill="#C9A84C" opacity="0.5"/>
    <rect x="106" y="52" width="10" height="3" rx="1" fill="#C9A84C" opacity="0.5"/>
  </svg>
)

const PinRadar = () => (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
    <circle cx="40" cy="40" r="36" stroke="#C9A84C" strokeWidth="1" opacity="0.15"/>
    <circle cx="40" cy="40" r="24" stroke="#C9A84C" strokeWidth="1" opacity="0.25"/>
    <circle cx="40" cy="40" r="12" stroke="#C9A84C" strokeWidth="1" opacity="0.4"/>
    <path d="M40 16a8 8 0 0 0-8 8c0 6 8 16 8 16s8-10 8-16a8 8 0 0 0-8-8z" fill="#C9A84C"/>
    <circle cx="40" cy="24" r="3" fill="#0A0A0A"/>
    <circle cx="58" cy="52" r="4" fill="#C9A84C" opacity="0.6"/>
    <circle cx="22" cy="48" r="3" fill="#C9A84C" opacity="0.4"/>
  </svg>
)

const CruzElegante = () => (
  <svg width="64" height="80" viewBox="0 0 64 80" fill="none">
    <rect x="28" y="4" width="8" height="72" rx="4" fill="#C9A84C"/>
    <rect x="8" y="20" width="48" height="8" rx="4" fill="#C9A84C"/>
    <rect x="27" y="3" width="10" height="74" rx="5" fill="#C9A84C" opacity="0.2"/>
  </svg>
)

const slides = [
  {Ico: LimusinaFuneraria, title: 'Solicita en minutos', desc: 'Elige origen, destino y tipo de traslado. La carroza más cercana llega a ti con dignidad.'},
  {Ico: PinRadar, title: 'Rastreamos el trayecto', desc: 'Sigue el recorrido en tiempo real. Siempre sabrás dónde está tu ser querido.'},
  {Ico: CruzElegante, title: 'Con dignidad y respeto', desc: 'Operadores certificados y vehículos especializados. Acompañamos en cada momento.'},
]

export default function Onboarding() {
  const [i, setI] = useState(0)
  const router = useRouter()

  const next = () => {
    if (i < slides.length - 1) setI(n => n + 1)
    else { localStorage.setItem('funemove-onboarded', '1'); router.replace('/home') }
  }

  const {Ico, title, desc} = slides[i]

  return (
    <div style={{minHeight:'100svh', background:'#0A0A0A', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'2rem 2rem 3rem'}}>
      {/* Indicadores */}
      <div style={{display:'flex', gap:'8px', marginBottom:'4rem'}}>
        {slides.map((_, idx) => (
          <div key={idx} style={{
            height:'2px', borderRadius:'2px',
            background: idx === i ? '#C9A84C' : '#252525',
            width: idx === i ? '28px' : '14px',
            transition:'all 0.3s ease'
          }}/>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={i}
          initial={{opacity:0, x:30}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-30}}
          transition={{duration:0.3}}
          style={{display:'flex', flexDirection:'column', alignItems:'center', textAlign:'center', maxWidth:'320px', width:'100%'}}
        >
          <div style={{marginBottom:'2.5rem', display:'flex', justifyContent:'center'}}>
            <Ico/>
          </div>
          <h2 style={{fontFamily:'var(--font-cormorant), serif', color:'#C9A84C', fontSize:'2rem', fontWeight:400, marginBottom:'1rem', lineHeight:1.2, letterSpacing:'0.02em'}}>
            {title}
          </h2>
          <p style={{color:'#666', lineHeight:1.75, fontSize:'0.95rem'}}>
            {desc}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Botón */}
      <motion.button
        whileTap={{scale:0.97}}
        onClick={next}
        style={{
          marginTop:'3.5rem', width:'100%', maxWidth:'320px',
          padding:'1.1rem', background:'#C9A84C', color:'#0A0A0A',
          fontWeight:700, borderRadius:'14px', fontSize:'1rem',
          border:'none', cursor:'pointer', letterSpacing:'0.04em',
          fontFamily:'var(--font-inter), sans-serif',
        }}
      >
        {i === slides.length - 1 ? 'Comenzar' : 'Siguiente →'}
      </motion.button>

      {i < slides.length - 1 && (
        <button
          onClick={() => { localStorage.setItem('funemove-onboarded','1'); router.replace('/home') }}
          style={{marginTop:'1rem', color:'#333', fontSize:'0.8rem', background:'none', border:'none', cursor:'pointer'}}
        >
          Omitir
        </button>
      )}
    </div>
  )
}
