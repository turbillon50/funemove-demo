'use client'
import {motion} from 'framer-motion'
import Link from 'next/link'
import {SimulatedMap} from '@/components/mapa-simulado'
import {operators} from '@/lib/demo-data'

export default function HomeCliente(){
  return(
    <div className="flex flex-col h-screen">
      <header className="flex justify-between items-center px-5 py-4 bg-[#111] border-b border-[#222]">
        <h1 className="font-heading text-gold text-2xl tracking-widest">FUNEMOVE</h1>
        <div className="text-xs text-[#888]">CDMX • 4 disponibles</div>
      </header>

      <div className="flex-1 relative" style={{height:'50%'}}>
        <SimulatedMap/>
        <div className="absolute bottom-4 inset-x-4">
          <div className="bg-[#111]/90 backdrop-blur rounded-xl p-4">
            <p className="text-xs text-[#888] mb-1">¿A dónde necesitas el traslado?</p>
            <Link href="/solicitar">
              <div className="w-full py-3 bg-[#1a1a1a] border border-[#333] rounded-lg text-[#555] text-sm px-3">
                Ingresa la dirección de origen…
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-[#111] px-4 pt-4 pb-2 border-t border-[#222]">
        <p className="text-xs text-[#888] mb-3 uppercase tracking-widest">Carrozas cercanas</p>
        <div className="grid grid-cols-2 gap-3 mb-4">
          {operators.map(op=>(
            <motion.div key={op.id} whileHover={{scale:1.02}}
              className="bg-surface2 rounded-xl p-3 border border-[#2a2a2a]">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-8 rounded-full bg-[#2a2a2a] flex items-center justify-center text-gold text-xs font-bold">
                  {op.name[0]}
                </div>
                <div>
                  <p className="text-xs text-white leading-tight">{op.name.split(' ')[0]}</p>
                  <p className="text-[10px] text-[#888]">{op.city}</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-gold">⭐ {op.rating}</span>
                <span className="text-[10px] text-[#888]">{op.plate}</span>
              </div>
            </motion.div>
          ))}
        </div>
        <Link href="/solicitar">
          <motion.button whileHover={{scale:1.02}} whileTap={{scale:0.97}}
            className="w-full py-4 bg-gold text-[#0A0A0A] font-ui font-bold rounded-xl text-base">
            Solicitar carroza ahora
          </motion.button>
        </Link>
      </div>
    </div>
  )
}
