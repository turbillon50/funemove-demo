'use client'
import {motion} from 'framer-motion'
import {services,operators} from '@/lib/demo-data'
import {useRouter} from 'next/navigation'

const STATUS_COLORS:{[k:string]:string}={completado:'text-green-400 bg-green-900/40',en_curso:'text-yellow-400 bg-yellow-900/40',cancelado:'text-red-400 bg-red-900/40'}

export default function Historial(){
  const router=useRouter()
  return(
    <div className="min-h-screen bg-bg px-4 py-6">
      <h1 className="font-heading text-gold text-2xl mb-6">Historial</h1>
      <div className="space-y-3">
        {services.map((srv,idx)=>{
          const op=operators.find(o=>o.id===srv.operatorId)
          const date=new Date(srv.date).toLocaleDateString('es-MX',{day:'2-digit',month:'short'})
          const key=srv.status.replace(' ','_')
          return(
            <motion.div key={srv.id} initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:idx*0.05}}
              whileHover={{scale:1.01}} onClick={()=>router.push('/detalle')}
              className="bg-surface border border-[#2a2a2a] rounded-2xl p-4 cursor-pointer">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="text-white font-ui text-sm">{op?.name}</p>
                  <p className="text-[#888] text-xs">{date} · {op?.city}</p>
                </div>
                <span className={`text-xs px-2 py-0.5 rounded-full ${STATUS_COLORS[key]??''}`}>{srv.status}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#888] text-xs">{op?.plate}</span>
                <span className="text-gold font-ui font-bold">${srv.amount.toLocaleString()} MXN</span>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
