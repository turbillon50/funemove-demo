'use client'
import {motion} from 'framer-motion'

export const SimulatedMap = ({animateRoute}:{animateRoute?:boolean}) => (
  <div className="relative w-full h-full bg-[#111] overflow-hidden" style={{backgroundImage:'linear-gradient(#1a1a1a 1px,transparent 1px),linear-gradient(90deg,#1a1a1a 1px,transparent 1px)',backgroundSize:'40px 40px'}}>
    {/* Pin origen */}
    <motion.div animate={{scale:[1,1.3,1]}} transition={{repeat:Infinity,duration:2}} className="absolute top-1/3 left-1/4 w-5 h-5">
      <svg viewBox="0 0 24 24" fill="#C9A84C"><path d="M12 2a8 8 0 0 0-8 8c0 6 8 14 8 14s8-8 8-14a8 8 0 0 0-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/></svg>
    </motion.div>
    {/* Pin destino */}
    <motion.div animate={{scale:[1,1.3,1]}} transition={{repeat:Infinity,duration:2,delay:1}} className="absolute bottom-1/3 right-1/4 w-5 h-5">
      <svg viewBox="0 0 24 24" fill="#C9A84C"><path d="M12 2a8 8 0 0 0-8 8c0 6 8 14 8 14s8-8 8-14a8 8 0 0 0-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/></svg>
    </motion.div>
    {/* Ruta animada */}
    {animateRoute && (
      <motion.div className="absolute top-1/3 left-1/4 w-px bg-gold origin-top" style={{height:'40%',rotate:-30}}
        animate={{scaleY:[0,1]}} transition={{duration:3,repeat:Infinity}}/>
    )}
    <div className="absolute bottom-2 right-2 text-xs text-gold opacity-50">Mapa simulado</div>
  </div>
)
