'use client'
import {useState} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import {useRouter} from 'next/navigation'
import Image from 'next/image'

const slides = [
  {
    img: '/onboarding/slide1.png',
    title: 'Solicita en minutos',
    desc: 'Elige origen, destino y tipo de traslado. La carroza más cercana llega a ti con dignidad.',
  },
  {
    img: '/onboarding/slide2.png',
    title: 'Rastreamos el trayecto',
    desc: 'Sigue el recorrido en tiempo real. Siempre sabrás dónde está tu ser querido.',
  },
  {
    img: '/onboarding/slide3.png',
    title: 'Con dignidad y respeto',
    desc: 'Operadores certificados y vehículos especializados. Acompañamos en cada momento.',
  },
]

export default function Onboarding() {
  const [i, setI] = useState(0)
  const router = useRouter()

  const next = () => {
    if (i < slides.length - 1) setI(n => n + 1)
    else { localStorage.setItem('funemove-onboarded', '1'); router.replace('/home') }
  }

  const s = slides[i]

  return (
    <div style={{position:'relative', minHeight:'100svh', background:'#0A0A0A', overflow:'hidden'}}>

      {/* Imagen de fondo Higgsfield */}
      <AnimatePresence mode="wait">
        <motion.div key={i}
          initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
          transition={{duration:0.6}}
          style={{position:'absolute', inset:0, zIndex:0}}
        >
          <Image
            src={s.img} alt={s.title} fill
            style={{objectFit:'cover', objectPosition:'center'}}
            priority
          />
          {/* Overlay gradiente para legibilidad */}
          <div style={{position:'absolute', inset:0, background:'linear-gradient(to bottom, rgba(10,10,10,0.2) 0%, rgba(10,10,10,0.6) 55%, rgba(10,10,10,0.97) 80%)'}}/>
        </motion.div>
      </AnimatePresence>

      {/* Contenido sobre imagen */}
      <div style={{
        position:'relative', zIndex:1,
        display:'flex', flexDirection:'column',
        minHeight:'100svh', padding:'3rem 1.75rem 2.5rem',
        justifyContent:'flex-end',
      }}>
        {/* Indicadores arriba */}
        <div style={{position:'absolute', top:'3rem', left:'1.75rem', display:'flex', gap:'8px'}}>
          {slides.map((_, idx) => (
            <div key={idx} style={{
              height:'2px', borderRadius:'2px',
              background: idx === i ? '#C9A84C' : 'rgba(255,255,255,0.25)',
              width: idx === i ? '28px' : '14px',
              transition:'all 0.35s ease',
            }}/>
          ))}
        </div>

        {/* Texto */}
        <AnimatePresence mode="wait">
          <motion.div key={i}
            initial={{opacity:0, y:24}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-16}}
            transition={{duration:0.4, delay:0.1}}
          >
            <h2 style={{
              fontFamily:'var(--font-cormorant), serif',
              color:'#C9A84C', fontSize:'2.4rem', fontWeight:400,
              lineHeight:1.15, letterSpacing:'0.01em', marginBottom:'0.9rem',
            }}>
              {s.title}
            </h2>
            <p style={{color:'rgba(255,255,255,0.65)', lineHeight:1.75, fontSize:'0.95rem', marginBottom:'2rem'}}>
              {s.desc}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Botón */}
        <motion.button whileTap={{scale:0.97}} onClick={next} style={{
          width:'100%', padding:'1.1rem',
          background:'#C9A84C', color:'#0A0A0A',
          fontWeight:700, borderRadius:'14px', fontSize:'1rem',
          border:'none', cursor:'pointer', letterSpacing:'0.04em',
          fontFamily:'var(--font-inter), sans-serif',
          marginBottom:'0.75rem',
        }}>
          {i === slides.length - 1 ? 'Comenzar' : 'Siguiente →'}
        </motion.button>

        {i < slides.length - 1 && (
          <button onClick={() => { localStorage.setItem('funemove-onboarded','1'); router.replace('/home') }}
            style={{color:'rgba(255,255,255,0.3)', fontSize:'0.8rem', background:'none', border:'none', cursor:'pointer', textAlign:'center'}}>
            Omitir
          </button>
        )}
      </div>
    </div>
  )
}
