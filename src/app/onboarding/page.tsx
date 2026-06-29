'use client'
import {useState} from 'react'
import {motion,AnimatePresence} from 'framer-motion'
import {useRouter} from 'next/navigation'

const CarrozaSVG = () => (
  <svg width="80" height="60" viewBox="0 0 80 60" fill="none">
    <rect x="6" y="28" width="68" height="18" rx="4" fill="#C9A84C"/>
    <rect x="14" y="16" width="44" height="14" rx="3" fill="#C9A84C" opacity="0.8"/>
    <rect x="22" y="10" width="10" height="8" rx="1" fill="#C9A84C" opacity="0.5"/>
    <rect x="34" y="10" width="12" height="8" rx="1" fill="#C9A84C" opacity="0.5"/>
    <circle cx="20" cy="48" r="7" fill="#0A0A0A" stroke="#C9A84C" strokeWidth="2"/>
    <circle cx="20" cy="48" r="3" fill="#C9A84C"/>
    <circle cx="60" cy="48" r="7" fill="#0A0A0A" stroke="#C9A84C" strokeWidth="2"/>
    <circle cx="60" cy="48" r="3" fill="#C9A84C"/>
  </svg>
)

const PinSVG = () => (
  <svg width="60" height="80" viewBox="0 0 60 80" fill="none">
    <path d="M30 4C16.7 4 6 14.7 6 28c0 18 24 48 24 48s24-30 24-48C54 14.7 43.3 4 30 4z" fill="#C9A84C"/>
    <circle cx="30" cy="28" r="10" fill="#0A0A0A"/>
    <circle cx="30" cy="28" r="5" fill="#C9A84C"/>
  </svg>
)

const CruzSVG = () => (
  <svg width="60" height="80" viewBox="0 0 60 80" fill="none">
    <rect x="24" y="8" width="12" height="64" rx="4" fill="#C9A84C"/>
    <rect x="8" y="24" width="44" height="12" rx="4" fill="#C9A84C"/>
  </svg>
)

const slides = [
  {SVG: CarrozaSVG, title:'Solicita en minutos', desc:'Elige origen, destino y tipo de traslado. La carroza más cercana llega a ti.'},
  {SVG: PinSVG, title:'Rastreamos el trayecto', desc:'Sigue el recorrido en tiempo real. Siempre sabrás dónde está tu ser querido.'},
  {SVG: CruzSVG, title:'Con dignidad y respeto', desc:'Operadores certificados. Acompañamos en cada momento del camino final.'},
]

export default function Onboarding(){
  const [i,setI]=useState(0)
  const router=useRouter()
  const next=()=>{
    if(i<slides.length-1){setI(n=>n+1)}
    else{localStorage.setItem('funemove-onboarded','1');router.replace('/home')}
  }
  const s=slides[i]
  const SVG=s.SVG
  return(
    <div className="flex flex-col items-center justify-center min-h-screen px-8" style={{background:'#0A0A0A'}}>
      <div className="flex gap-2 mb-16">
        {slides.map((_,idx)=>(
          <div key={idx} style={{
            height:'3px',borderRadius:'2px',
            background: idx===i?'#C9A84C':'#2a2a2a',
            width: idx===i?'32px':'16px',
            transition:'all 0.3s'
          }}/>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={i} initial={{opacity:0,x:40}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-40}}
          transition={{duration:0.35}} className="text-center max-w-sm w-full flex flex-col items-center">
          <div className="mb-8"><SVG/></div>
          <h2 style={{fontFamily:'var(--font-cormorant),serif',color:'#C9A84C',fontSize:'2rem',marginBottom:'1rem',lineHeight:1.2}}>{s.title}</h2>
          <p style={{color:'#888',lineHeight:1.7,fontSize:'1rem'}}>{s.desc}</p>
        </motion.div>
      </AnimatePresence>
      <motion.button whileHover={{scale:1.02}} whileTap={{scale:0.97}} onClick={next}
        style={{marginTop:'3rem',width:'100%',maxWidth:'360px',padding:'1.1rem',background:'#C9A84C',color:'#0A0A0A',fontWeight:700,borderRadius:'14px',fontSize:'1.1rem',border:'none',cursor:'pointer'}}>
        {i===slides.length-1?'Comenzar':'Siguiente →'}
      </motion.button>
      {i<slides.length-1&&(
        <button onClick={()=>{localStorage.setItem('funemove-onboarded','1');router.replace('/home')}}
          style={{marginTop:'1rem',color:'#444',fontSize:'0.85rem',background:'none',border:'none',cursor:'pointer'}}>Omitir</button>
      )}
    </div>
  )
}
