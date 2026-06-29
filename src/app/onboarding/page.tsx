'use client'
import {useState} from 'react'
import {motion,AnimatePresence} from 'framer-motion'
import {useRouter} from 'next/navigation'

const slides=[
  {icon:'🚗',title:'Solicita en minutos',desc:'Elige origen, destino y tipo de traslado. La carroza más cercana llega a ti.'},
  {icon:'📍',title:'Rastreamos el trayecto',desc:'Sigue el recorrido en tiempo real. Siempre sabrás dónde está tu ser querido.'},
  {icon:'🕊️',title:'Con dignidad y respeto',desc:'Operadores certificados y vehículos especializados. Acompañamos en cada momento.'},
]

export default function Onboarding(){
  const [i,setI]=useState(0)
  const router=useRouter()
  const next=()=>{
    if(i<slides.length-1){setI(n=>n+1)}
    else{localStorage.setItem('funemove-onboarded','1');router.replace('/home')}
  }
  const s=slides[i]
  return(
    <div className="flex flex-col items-center justify-center h-screen bg-bg px-8">
      <div className="flex gap-2 mb-12">
        {slides.map((_,idx)=>(
          <div key={idx} className={`h-1 rounded-full transition-all duration-300 ${idx===i?'w-8 bg-gold':'w-4 bg-[#333]'}`}/>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={i} initial={{opacity:0,x:40}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-40}}
          transition={{duration:0.35}} className="text-center max-w-sm">
          <div className="text-6xl mb-6">{s.icon}</div>
          <h2 className="font-heading text-gold text-3xl mb-4">{s.title}</h2>
          <p className="text-[#aaa] leading-relaxed">{s.desc}</p>
        </motion.div>
      </AnimatePresence>
      <motion.button whileHover={{scale:1.04}} whileTap={{scale:0.96}} onClick={next}
        className="mt-12 w-full max-w-sm py-4 bg-gold text-[#0A0A0A] font-ui font-bold rounded-xl text-lg">
        {i===slides.length-1?'Comenzar':'Siguiente →'}
      </motion.button>
      {i<slides.length-1&&(
        <button onClick={()=>{localStorage.setItem('funemove-onboarded','1');router.replace('/home')}}
          className="mt-4 text-[#555] text-sm">Omitir</button>
      )}
    </div>
  )
}
