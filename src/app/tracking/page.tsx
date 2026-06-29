'use client'
import {useEffect,useState} from 'react'
import {motion} from 'framer-motion'
import {useRouter} from 'next/navigation'
import {operators} from '@/lib/demo-data'
import {SimulatedMap} from '@/components/mapa-simulado'

export default function Tracking(){
  const router=useRouter()
  const [svc,setSvc]=useState<{vid:string;type:string}|null>(null)
  const [eta,setEta]=useState(18)
  useEffect(()=>{
    const s=sessionStorage.getItem('funemove-svc')
    if(s)setSvc(JSON.parse(s))
    const t=setInterval(()=>setEta(e=>Math.max(0,e-1)),60000)
    return ()=>clearInterval(t)
  },[])
  const op=operators.find(o=>o.id===svc?.vid)??operators[0]
  return(
    <div className="flex flex-col h-screen">
      <header className="px-5 py-4 bg-[#111] border-b border-[#222] flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"/>
        <h1 className="font-heading text-gold text-xl">En camino</h1>
        <span className="ml-auto text-xs text-[#888]">ETA {eta} min</span>
      </header>
      <div className="flex-1 relative">
        <SimulatedMap animateRoute/>
        <div className="absolute top-4 left-4 bg-[#111]/90 rounded-xl px-3 py-2">
          <p className="text-gold text-xs font-ui font-bold">Carroza asignada</p>
          <p className="text-white text-sm">{op.name}</p>
          <p className="text-[#888] text-xs">{op.plate}</p>
        </div>
      </div>
      <div className="bg-[#111] p-4 border-t border-[#222]">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-full bg-[#2a2a2a] flex items-center justify-center text-gold font-bold text-lg">{op.name[0]}</div>
          <div className="flex-1">
            <p className="text-white font-ui">{op.name}</p>
            <div className="flex gap-2 items-center">
              <span className="text-gold text-xs">⭐ {op.rating}</span>
              <span className="text-[#888] text-xs">·</span>
              <span className="text-[#888] text-xs">{op.city}</span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-gold font-heading text-xl">{eta}</p>
            <p className="text-[#888] text-xs">min</p>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="flex-1 py-3 border border-[#333] rounded-xl text-[#888] text-sm">Llamar</button>
          <motion.button whileHover={{scale:1.02}} whileTap={{scale:0.97}}
            onClick={()=>router.push('/historial')}
            className="flex-1 py-3 bg-red-900/60 border border-red-800 rounded-xl text-red-400 text-sm">
            Cancelar
          </motion.button>
        </div>
      </div>
    </div>
  )
}
