'use client'
import {useState} from 'react'
import {motion} from 'framer-motion'

export default function Perfil(){
  const [name,setName]=useState('Omar García')
  const [phone,setPhone]=useState('+52 998 429 0001')
  const [saved,setSaved]=useState(false)
  const save=()=>{setSaved(true);setTimeout(()=>setSaved(false),2000)}
  return(
    <div className="min-h-screen bg-bg px-5 py-6">
      <h1 className="font-heading text-gold text-2xl mb-6">Mi perfil</h1>
      <div className="flex flex-col items-center mb-8">
        <div className="w-20 h-20 rounded-full bg-[#2a2a2a] border-2 border-gold flex items-center justify-center text-gold text-3xl font-heading mb-3">
          {name[0]}
        </div>
        <p className="text-white font-ui">{name}</p>
        <p className="text-[#888] text-xs">Cliente desde Jun 2025</p>
      </div>
      <div className="space-y-4 mb-6">
        <div>
          <label className="text-xs text-[#888] uppercase tracking-widest mb-1 block">Nombre</label>
          <input value={name} onChange={e=>setName(e.target.value)} className="w-full bg-surface border border-[#2a2a2a] rounded-xl p-3 text-white text-sm focus:border-gold outline-none"/>
        </div>
        <div>
          <label className="text-xs text-[#888] uppercase tracking-widest mb-1 block">Teléfono</label>
          <input value={phone} onChange={e=>setPhone(e.target.value)} className="w-full bg-surface border border-[#2a2a2a] rounded-xl p-3 text-white text-sm focus:border-gold outline-none"/>
        </div>
        <div>
          <label className="text-xs text-[#888] uppercase tracking-widest mb-1 block">Método de pago</label>
          <div className="flex items-center gap-3 bg-surface border border-[#2a2a2a] rounded-xl p-3">
            <div className="w-8 h-5 bg-blue-600 rounded text-[8px] flex items-center justify-center text-white">VISA</div>
            <span className="text-white text-sm">•••• 4521</span>
            <span className="ml-auto text-gold text-xs">Principal</span>
          </div>
        </div>
      </div>
      <motion.button whileHover={{scale:1.02}} whileTap={{scale:0.97}} onClick={save}
        className={`w-full py-4 rounded-xl font-ui font-bold text-base transition-colors ${saved?'bg-green-600 text-white':'bg-gold text-[#0A0A0A]'}`}>
        {saved?'✓ Guardado':'Guardar cambios'}
      </motion.button>
    </div>
  )
}
