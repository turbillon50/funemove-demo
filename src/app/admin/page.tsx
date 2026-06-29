'use client'
import {motion} from 'framer-motion'
import {kpis,services,operators} from '@/lib/demo-data'

export default function Admin(){
  return(
    <div className="min-h-screen bg-bg px-5 py-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-heading text-gold text-2xl">Dashboard</h1>
        <span className="text-xs text-[#888]">Admin · Hoy</span>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-8">
        <KPI label="Servicios hoy" val={kpis.todayServices.toString()} delta="+3"/>
        <KPI label="Operadores" val={kpis.activeOperators.toString()} delta="activos"/>
        <KPI label="Ingresos mes" val={`$${(kpis.monthRevenue/1000).toFixed(0)}k`} delta="MXN"/>
        <KPI label="Calificación" val={`⭐ ${kpis.avgRating}`} delta="avg"/>
      </div>

      <h2 className="font-heading text-gold mb-3">Servicios recientes</h2>
      <div className="space-y-2 mb-8">
        {services.map((srv,idx)=>{
          const op=operators.find(o=>o.id===srv.operatorId)
          const date=new Date(srv.date).toLocaleDateString('es-MX',{day:'2-digit',month:'short'})
          const sc={completado:'text-green-400',cancelado:'text-red-400','en curso':'text-yellow-400'}
          return(
            <motion.div key={srv.id} initial={{opacity:0,x:-10}} animate={{opacity:1,x:0}} transition={{delay:idx*0.05}}
              className="bg-surface rounded-xl p-3 border border-[#2a2a2a] flex justify-between items-center">
              <div>
                <p className="text-white text-sm">{op?.name}</p>
                <p className="text-[#888] text-xs">{date}</p>
              </div>
              <div className="text-right">
                <p className="text-gold text-sm font-bold">${srv.amount.toLocaleString()}</p>
                <p className={`text-xs ${sc[srv.status]}`}>{srv.status}</p>
              </div>
            </motion.div>
          )
        })}
      </div>

      <h2 className="font-heading text-gold mb-3">Operadores</h2>
      <div className="space-y-2">
        {operators.map(op=>(
          <div key={op.id} className="bg-surface rounded-xl p-3 border border-[#2a2a2a] flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#2a2a2a] flex items-center justify-center text-gold font-bold">{op.name[0]}</div>
            <div className="flex-1">
              <p className="text-white text-sm">{op.name}</p>
              <p className="text-[#888] text-xs">{op.city} · {op.plate}</p>
            </div>
            <span className="text-gold text-xs">⭐ {op.rating}</span>
            <span className="w-2 h-2 rounded-full bg-green-400"/>
          </div>
        ))}
      </div>
    </div>
  )
}
const KPI=({label,val,delta}:{label:string;val:string;delta:string})=>(
  <motion.div whileHover={{scale:1.02}} className="bg-surface2 rounded-2xl p-4 border border-[#2a2a2a]">
    <p className="text-[#888] text-xs uppercase tracking-widest mb-1">{label}</p>
    <p className="font-heading text-gold text-2xl">{val}</p>
    <p className="text-[#888] text-xs">{delta}</p>
  </motion.div>
)
