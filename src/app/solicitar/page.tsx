'use client'
import {useState} from 'react'
import {useRouter} from 'next/navigation'
import {motion} from 'framer-motion'
import {operators} from '@/lib/demo-data'

export default function Solicitar(){
  const router=useRouter()
  const [origin,setOrigin]=useState('')
  const [dest,setDest]=useState('')
  const [type,setType]=useState<'local'|'foraneo'|'repatriacion'>('local')
  const [vid,setVid]=useState(operators[0].id)

  const prices={local:'$3,500 MXN',foraneo:'$8,200 MXN',repatriacion:'$18,000 MXN'}

  const go=()=>{
    sessionStorage.setItem('funemove-svc',JSON.stringify({origin,dest,type,vid}))
    router.push('/confirmacion')
  }

  return(
    <div className="min-h-screen bg-bg px-5 py-6">
      <div className="flex items-center gap-3 mb-6">
        <button onClick={()=>router.back()} className="text-[#888] text-xl">←</button>
        <h1 className="font-heading text-gold text-2xl">Nuevo servicio</h1>
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <label className="text-xs text-[#888] uppercase tracking-widest mb-1 block">Origen</label>
          <input value={origin} onChange={e=>setOrigin(e.target.value)} placeholder="Ej. Av. Insurgentes 421, CDMX"
            className="w-full bg-surface border border-[#2a2a2a] rounded-xl p-3 text-white text-sm focus:border-gold outline-none"/>
        </div>
        <div>
          <label className="text-xs text-[#888] uppercase tracking-widest mb-1 block">Destino</label>
          <input value={dest} onChange={e=>setDest(e.target.value)} placeholder="Ej. Panteón Civil de Dolores"
            className="w-full bg-surface border border-[#2a2a2a] rounded-xl p-3 text-white text-sm focus:border-gold outline-none"/>
        </div>

        <div>
          <label className="text-xs text-[#888] uppercase tracking-widest mb-2 block">Tipo de servicio</label>
          <div className="grid grid-cols-3 gap-2">
            {(['local','foraneo','repatriacion'] as const).map(t=>(
              <button key={t} onClick={()=>setType(t)}
                className={`py-2 rounded-xl text-xs border transition-colors ${type===t?'bg-gold text-[#0A0A0A] border-gold':'border-[#2a2a2a] text-[#888]'}`}>
                {t[0].toUpperCase()+t.slice(1)}
              </button>
            ))}
          </div>
          <p className="text-gold text-sm mt-2 text-right">Estimado: {prices[type]}</p>
        </div>

        <div>
          <label className="text-xs text-[#888] uppercase tracking-widest mb-2 block">Selecciona operador</label>
          <div className="space-y-2">
            {operators.map(op=>(
              <div key={op.id} onClick={()=>setVid(op.id)}
                className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${vid===op.id?'border-gold bg-[#1a1600]':'border-[#2a2a2a] bg-surface'}`}>
                <div className="w-10 h-10 rounded-full bg-[#2a2a2a] flex items-center justify-center text-gold font-bold">{op.name[0]}</div>
                <div className="flex-1">
                  <p className="text-white text-sm">{op.name}</p>
                  <p className="text-[#888] text-xs">{op.city} · {op.plate}</p>
                </div>
                <span className="text-gold text-xs">⭐ {op.rating}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <motion.button whileHover={{scale:1.02}} whileTap={{scale:0.97}} onClick={go}
        className="w-full py-4 bg-gold text-[#0A0A0A] font-ui font-bold rounded-xl text-base">
        Confirmar solicitud
      </motion.button>
    </div>
  )
}
