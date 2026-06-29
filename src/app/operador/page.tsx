'use client'
import {useState} from 'react'
import {motion} from 'framer-motion'
import {SimulatedMap} from '@/components/mapa-simulado'
import {operators,services} from '@/lib/demo-data'
import {useRouter} from 'next/navigation'

export default function OperadorHome(){
  const [available,setAvailable]=useState(true)
  const [showRequest,setShowRequest]=useState(false)
  const op=operators[0]
  const router=useRouter()
  return(
    <div className="flex flex-col h-screen">
      <header className="px-5 py-4 bg-[#111] border-b border-[#222] flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-[#2a2a2a] flex items-center justify-center text-gold font-bold">{op.name[0]}</div>
        <div className="flex-1">
          <p className="text-white text-sm font-ui">{op.name}</p>
          <p className="text-[#888] text-xs">{op.plate}</p>
        </div>
        <button onClick={()=>setAvailable(a=>!a)}
          className={`px-4 py-2 rounded-full text-xs font-ui font-bold transition-all ${available?'bg-green-700 text-green-200':'bg-[#2a2a2a] text-[#888]'}`}>
          {available?'● Disponible':'○ No disponible'}
        </button>
      </header>

      <div className="flex-1 relative">
        <SimulatedMap/>
        {available&&(
          <motion.div initial={{y:20,opacity:0}} animate={{y:0,opacity:1}}
            className="absolute top-4 right-4 bg-[#111]/90 rounded-xl px-3 py-2 text-xs">
            <p className="text-gold">3 solicitudes cerca</p>
          </motion.div>
        )}
      </div>

      <div className="bg-[#111] p-4 border-t border-[#222]">
        <div className="grid grid-cols-3 gap-3 mb-4">
          <KPICard label="Hoy" val="$2,350" unit="MXN"/>
          <KPICard label="Servicios" val="4" unit="completados"/>
          <KPICard label="Rating" val="⭐ 4.9" unit="promedio"/>
        </div>
        {available&&(
          <motion.button whileHover={{scale:1.02}} whileTap={{scale:0.97}}
            onClick={()=>setShowRequest(true)}
            className="w-full py-3 bg-gold text-[#0A0A0A] font-ui font-bold rounded-xl text-sm">
            Ver solicitud entrante
          </motion.button>
        )}
      </div>

      {showRequest&&(
        <motion.div initial={{y:'100%'}} animate={{y:0}} className="fixed inset-x-0 bottom-0 bg-[#111] border-t border-[#333] rounded-t-2xl p-5 z-50">
          <h2 className="font-heading text-gold text-xl mb-4">Nueva solicitud</h2>
          <div className="space-y-2 mb-5">
            <p className="text-white text-sm"><span className="text-[#888]">Cliente:</span> Juan Pérez</p>
            <p className="text-white text-sm"><span className="text-[#888]">Origen:</span> Av. Insurgentes 421</p>
            <p className="text-white text-sm"><span className="text-[#888]">Destino:</span> Panteón Civil</p>
            <p className="text-white text-sm"><span className="text-[#888]">Tipo:</span> Local</p>
            <p className="text-gold font-ui font-bold">$3,500 MXN</p>
          </div>
          <div className="flex gap-3">
            <button onClick={()=>setShowRequest(false)} className="flex-1 py-3 border border-red-800 text-red-400 rounded-xl text-sm">Rechazar</button>
            <motion.button whileHover={{scale:1.02}} onClick={()=>{setShowRequest(false);router.push('/tracking')}}
              className="flex-1 py-3 bg-gold text-[#0A0A0A] font-bold rounded-xl text-sm">Aceptar</motion.button>
          </div>
        </motion.div>
      )}
    </div>
  )
}
const KPICard=({label,val,unit}:{label:string;val:string;unit:string})=>(
  <div className="bg-surface2 rounded-xl p-3 text-center">
    <p className="text-[#888] text-[10px] uppercase tracking-widest">{label}</p>
    <p className="text-gold font-heading text-lg">{val}</p>
    <p className="text-[#888] text-[10px]">{unit}</p>
  </div>
)
