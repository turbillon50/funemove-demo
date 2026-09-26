'use client'
import {useState} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import {useRouter} from 'next/navigation'
import Image from 'next/image'

const slides = [
  {img:'/onboarding/slide1.png', title:'Solicita en minutos', desc:'Elige origen, destino y tipo de traslado. La carroza más cercana llega a ti con dignidad.'},
  {img:'/onboarding/slide2.png', title:'Rastreamos el trayecto', desc:'Sigue el recorrido en tiempo real. Siempre sabrás dónde está tu ser querido.'},
  {img:'/onboarding/slide3.png', title:'Con dignidad y respeto', desc:'Operadores certificados. Acompañamos cada momento del camino final.'},
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
    <div style={{position:'relative', minHeight:'100svh', background:'#F2EDE4', overflow:'hidden'}}>
      <AnimatePresence mode="wait">
        <motion.div key={i} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.5}}
          style={{position:'absolute', inset:0}}>
          <Image src={s.img} alt={s.title} fill style={{objectFit:'cover', objectPosition:'center'}} priority/>
          {/* Overlay pergamino desde abajo */}
          <div style={{position:'absolute', inset:0, background:'linear-gradient(to bottom, rgba(242,237,228,0.1) 20%, rgba(242,237,228,0.88) 58%, rgba(242,237,228,1) 75%)'}}/>
        </motion.div>
      </AnimatePresence>

      {/* Indicadores arriba */}
      <div style={{position:'absolute', top:'3rem', left:'1.75rem', display:'flex', gap:'8px', zIndex:2}}>
        {slides.map((_,idx) => (
          <div key={idx} style={{height:'2px', borderRadius:'2px', background: idx===i?'#B8935A':'rgba(184,147,90,0.25)', width: idx===i?'28px':'14px', transition:'all 0.35s'}}/>
        ))}
      </div>

      {/* Contenido abajo */}
      <div style={{position:'relative', zIndex:2, display:'flex', flexDirection:'column', minHeight:'100svh', justifyContent:'flex-end', padding:'2rem 1.75rem 2.5rem'}}>
        <AnimatePresence mode="wait">
          <motion.div key={i} initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-10}} transition={{duration:0.4, delay:0.15}}>
            <h2 style={{fontFamily:'var(--font-cormorant),serif', color:'#1A1008', fontSize:'2.3rem', fontWeight:400, lineHeight:1.15, marginBottom:'0.85rem', letterSpacing:'0.01em'}}>
              {s.title}
            </h2>
            <p style={{color:'#6B5A3E', lineHeight:1.75, fontSize:'0.95rem', marginBottom:'2rem'}}>
              {s.desc}
            </p>
          </motion.div>
        </AnimatePresence>

        <motion.button whileTap={{scale:0.97}} onClick={next} style={{
          width:'100%', padding:'1.1rem', background:'#B8935A', color:'#FDFAF5',
          fontWeight:600, borderRadius:'14px', fontSize:'1rem', border:'none',
          cursor:'pointer', letterSpacing:'0.04em', fontFamily:'var(--font-inter),sans-serif',
          marginBottom:'0.75rem', boxShadow:'0 4px 20px rgba(184,147,90,0.3)',
        }}>
          {i === slides.length-1 ? 'Comenzar' : 'Siguiente →'}
        </motion.button>

        {i < slides.length-1 && (
          <button onClick={() => {localStorage.setItem('funemove-onboarded','1'); router.replace('/home')}}
            style={{color:'#B8935A', fontSize:'0.8rem', background:'none', border:'none', cursor:'pointer', textAlign:'center', opacity:0.6}}>
            Omitir
          </button>
        )}
      </div>
    </div>
  )
}
